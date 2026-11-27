/* Nós 2 — núcleo compartilhado: armazenamento, configurações, cripto, PIN, trava, baralhos sem repetição. */
(function(){
"use strict";
const SCHEMA_VERSION = 1;
const LOCK_MS = 2*60*1000;
const PAGE = (document.documentElement.dataset.page||"");

/* ---------- armazenamento ---------- */
const store = {
  get(k, def){ try{ const v=localStorage.getItem("nos2."+k); return v==null?def:JSON.parse(v); }catch(e){ return def; } },
  set(k, v){ try{ localStorage.setItem("nos2."+k, JSON.stringify(v)); return true; }catch(e){ return false; } },
  del(k){ try{ localStorage.removeItem("nos2."+k); }catch(e){} },
  keys(){ const out=[]; try{ for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(k&&k.startsWith("nos2.")) out.push(k); } }catch(e){} return out; },
  wipe(){ store.keys().forEach(k=>{ try{ localStorage.removeItem(k); }catch(e){} }); try{ sessionStorage.clear(); }catch(e){} }
};
function migrate(){
  const meta=store.get("meta",null);
  if(!meta){ store.set("meta",{schemaVersion:SCHEMA_VERSION,created:new Date().toISOString()}); return; }
  if(meta.schemaVersion!==SCHEMA_VERSION){ /* futuras migrações entram aqui */ meta.schemaVersion=SCHEMA_VERSION; store.set("meta",meta); }
}
migrate();

/* ---------- configurações ---------- */
const DEF_SETTINGS={me:"",nameA:"",nameB:"",pron:"Ela",pass:""};
const settings={
  get(){ return Object.assign({},DEF_SETTINGS,store.get("settings",{})); },
  save(s){ store.set("settings",s); },
  ready(){ const s=settings.get(); return !!(s.me&&s.pass); },
  name(p){ const s=settings.get(); return p==="A"?(s.nameA||"Jogador A"):(s.nameB||"Jogador B"); },
  other(){ return settings.get().me==="B"?"A":"B"; }
};

/* ---------- utilidades ---------- */
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function hash(s){let h=1779033703^s.length;for(let i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19}return h>>>0}
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function seededShuffle(arr,seed){const r=rng(hash(seed));const d=arr.slice();for(let i=d.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[d[i],d[j]]=[d[j],d[i]]}return d}
function randInt(n){ const a=new Uint32Array(1); crypto.getRandomValues(a); return a[0]%n; }
async function copyText(t){
  try{ await navigator.clipboard.writeText(t); return true; }
  catch(e){ try{ const ta=document.createElement("textarea"); ta.value=t; ta.setAttribute("readonly",""); ta.style.position="fixed"; ta.style.opacity="0"; document.body.appendChild(ta); ta.select(); const ok=document.execCommand("copy"); ta.remove(); return ok; }catch(e2){ return false; } }
}

/* ---------- baralhos sem repetição até esgotar ---------- */
const deck={
  _all(){ return store.get("decks",{}); },
  draw(key, ids, filter){
    ids=ids.map(String); const all=deck._all(); const st=all[key]||{r:null};
    let rem=(st.r||ids.slice()).filter(x=>ids.includes(x));
    let cand=filter?rem.filter(filter):rem;
    if(!cand.length){ rem=ids.slice(); cand=filter?rem.filter(filter):rem; }
    if(!cand.length) return null;
    const pick=cand[randInt(cand.length)];
    rem.splice(rem.indexOf(pick),1);
    all[key]={r:rem}; store.set("decks",all); return pick;
  },
  remaining(key, ids, filter){ ids=ids.map(String); const st=deck._all()[key]; let rem=(st&&st.r?st.r:ids).filter(x=>ids.includes(x)); return filter?rem.filter(filter).length:rem.length; },
  isFresh(key){ const st=deck._all()[key]; return !st||!st.r; },
  reset(key){ const all=deck._all(); delete all[key]; store.set("decks",all); },
  /* devolve itens ao sorteio (ex.: cartas puladas voltam depois da partida) */
  putBack(key, ids){ const all=deck._all(), st=all[key]; if(!st||!st.r) return; ids.map(String).forEach(x=>{ if(!st.r.includes(x)) st.r.push(x); }); store.set("decks",all); }
};

/* ---------- cripto (WebCrypto: PBKDF2 + AES-GCM) ---------- */
const te=new TextEncoder(), td=new TextDecoder();
function b64u(bytes){ let s=""; for(let i=0;i<bytes.length;i+=0x8000) s+=String.fromCharCode.apply(null,bytes.subarray(i,i+0x8000)); return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
function unb64u(str){ str=str.replace(/\s+/g,"").replace(/-/g,"+").replace(/_/g,"/"); while(str.length%4) str+="="; const s=atob(str); const out=new Uint8Array(s.length); for(let i=0;i<s.length;i++) out[i]=s.charCodeAt(i); return out; }
const ITER=200000;
async function deriveKey(pass,salt,iter){
  const base=await crypto.subtle.importKey("raw",te.encode(pass),"PBKDF2",false,["deriveKey"]);
  return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:iter||ITER,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
}
async function pipe(bytes,stream){ const s=new Blob([bytes]).stream().pipeThrough(stream); return new Uint8Array(await new Response(s).arrayBuffer()); }
async function encrypt(obj,pass,prefix){
  let data=te.encode(JSON.stringify(obj)), flag=0;
  if(typeof CompressionStream!=="undefined"){ try{ data=await pipe(data,new CompressionStream("deflate-raw")); flag=1; }catch(e){ data=te.encode(JSON.stringify(obj)); flag=0; } }
  const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
  const key=await deriveKey(pass,salt);
  const ct=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv,additionalData:te.encode(prefix)},key,data));
  const out=new Uint8Array(1+16+12+ct.length); out[0]=flag; out.set(salt,1); out.set(iv,17); out.set(ct,29);
  return prefix+b64u(out);
}
async function decrypt(code,pass,prefix){
  code=String(code||"").trim(); if(!code.startsWith(prefix)) throw "formato";
  let raw; try{ raw=unb64u(code.slice(prefix.length)); }catch(e){ throw "formato"; }
  if(raw.length<30) throw "formato";
  const flag=raw[0], salt=raw.slice(1,17), iv=raw.slice(17,29), ct=raw.slice(29);
  let data; try{ const key=await deriveKey(pass,salt); data=new Uint8Array(await crypto.subtle.decrypt({name:"AES-GCM",iv,additionalData:te.encode(prefix)},key,ct)); }catch(e){ throw "senha"; }
  if(flag===1){ if(typeof DecompressionStream==="undefined") throw "formato"; data=await pipe(data,new DecompressionStream("deflate-raw")); }
  try{ return JSON.parse(td.decode(data)); }catch(e){ throw "formato"; }
}

/* ---------- PIN ---------- */
async function pinDigest(pin,salt,iter){
  const base=await crypto.subtle.importKey("raw",te.encode("nos2-pin:"+pin),"PBKDF2",false,["deriveBits"]);
  const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt,iterations:iter,hash:"SHA-256"},base,256);
  return b64u(new Uint8Array(bits));
}
const pin={
  exists(){ return !!store.get("pin",null); },
  async set(p){ const salt=crypto.getRandomValues(new Uint8Array(16)); const iter=150000; store.set("pin",{salt:b64u(salt),iter,hash:await pinDigest(p,salt,iter)}); store.del("pinfail"); },
  async check(p){ const r=store.get("pin",null); if(!r) return false; return (await pinDigest(p,unb64u(r.salt),r.iter))===r.hash; },
  fails(){ return store.get("pinfail",{n:0,until:0}); },
  fail(){ const f=pin.fails(); f.n++; if(f.n>=5){ f.until=Date.now()+30000; f.n=0; } store.set("pinfail",f); return f; },
  ok(){ store.del("pinfail"); }
};

/* ---------- trava de sessão ---------- */
const lock={
  isUnlocked(){ try{ if(sessionStorage.getItem("nos2.unlocked")!=="1") return false; const h=+sessionStorage.getItem("nos2.hiddenAt")||0; if(h&&Date.now()-h>LOCK_MS){ lock.lock(false); return false; } return true; }catch(e){ return false; } },
  unlock(){ try{ sessionStorage.setItem("nos2.unlocked","1"); sessionStorage.removeItem("nos2.hiddenAt"); }catch(e){} },
  lock(go){ try{ sessionStorage.removeItem("nos2.unlocked"); sessionStorage.removeItem("nos2.hiddenAt"); }catch(e){} if(go!==false) location.replace("./index.html"); }
};
function onHide(){ try{ if(sessionStorage.getItem("nos2.unlocked")==="1") sessionStorage.setItem("nos2.hiddenAt",String(Date.now())); }catch(e){} }
function onShow(){
  if(PAGE==="index"){ if(window.Nos2Index) window.Nos2Index.recheck(); return; }
  if(!lock.isUnlocked()){ document.documentElement.style.visibility="hidden"; location.replace("./index.html"); }
  else { try{ sessionStorage.removeItem("nos2.hiddenAt"); }catch(e){} }
}
document.addEventListener("visibilitychange",()=>{ if(document.hidden) onHide(); else onShow(); });
window.addEventListener("pagehide",onHide);
window.addEventListener("pageshow",e=>{ if(e.persisted) onShow(); });

/* páginas de modo: nada aparece sem PIN */
if(PAGE && PAGE!=="index"){
  if(!lock.isUnlocked()||!pin.exists()){ document.documentElement.style.visibility="hidden"; location.replace("./index.html"); }
}

/* service worker */
if("serviceWorker" in navigator && location.protocol!=="file:"){
  window.addEventListener("load",()=>{ navigator.serviceWorker.register("./sw.js").catch(()=>{}); });
}

window.Nos2={SCHEMA_VERSION,store,settings,esc,hash,rng,seededShuffle,randInt,copyText,deck,encrypt,decrypt,pin,lock,b64u,unb64u};
})();
