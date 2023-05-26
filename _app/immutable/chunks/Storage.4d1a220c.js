import{_ as r}from"./preload-helper.41c905a7.js";import{D as l,l as E}from"./DataUtils.a89cff78.js";class h extends l{constructor(e){super(e),this.traitsPrototype=e.traits,Object.defineProperty(this,"traits",{get(){return[this.traitsPrototype,this.size,this.rarity??"common"].flat()}})}get type(){return"ancestry"}get extraHp(){let e=[];return this.heritages.forEach(t=>{var o,i;(i=(o=t==null?void 0:t.modif)==null?void 0:o.hp)!=null&&i.ancestry&&e.push({hp:t.modif.hp.ancestry,name:t.name,source:t.source,hash:this.hashify(t.name,t.source)})}),e.length?e:null}}class v extends l{constructor(e,t){super(e),t&&(this.ancestryName=t.name,this.ancestrySource=t.source)}get type(){return"heritage"}tag(e){return`${this.ancestryName??"Human"}|${this.ancestrySource??"CRB"}|${e??this.name}|${this.name}|${this.source}`}}const y={parse:s=>new Map(JSON.parse(s)),stringify:s=>JSON.stringify([...s])};class I{constructor(){this.ancestries=D,this.heritages=P}loadAll(){this.ancestries.load(),this.heritages.load()}}const D=new O;function O(s="ancestries",e=new Map){const{subscribe:t,set:o,update:i}=E(s,e,{serializer:y});function _(){const n=Object.assign({"/src/data/core/ancestries/ancestry-anadi.json":()=>r(()=>import("./ancestry-anadi.c9147a4b.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-android.json":()=>r(()=>import("./ancestry-android.22dcb6be.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-automaton.json":()=>r(()=>import("./ancestry-automaton.3efcee38.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-azarketi.json":()=>r(()=>import("./ancestry-azarketi.3b917f28.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-catfolk.json":()=>r(()=>import("./ancestry-catfolk.bd5045af.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-conrasu.json":()=>r(()=>import("./ancestry-conrasu.da2e4c50.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-dwarf.json":()=>r(()=>import("./ancestry-dwarf.a9c56490.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-elf.json":()=>r(()=>import("./ancestry-elf.a6be3b57.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-fetchling.json":()=>r(()=>import("./ancestry-fetchling.e33e9008.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-fleshwarp.json":()=>r(()=>import("./ancestry-fleshwarp.595602f6.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-ghoran.json":()=>r(()=>import("./ancestry-ghoran.6df40ca1.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-gnoll.json":()=>r(()=>import("./ancestry-gnoll.126cb3ed.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-gnome.json":()=>r(()=>import("./ancestry-gnome.29e51bc5.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-goblin.json":()=>r(()=>import("./ancestry-goblin.20b6d1cf.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-goloma.json":()=>r(()=>import("./ancestry-goloma.dd6e3190.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-grippli.json":()=>r(()=>import("./ancestry-grippli.fdaff84b.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-halfling.json":()=>r(()=>import("./ancestry-halfling.869fea2a.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-hobgoblin.json":()=>r(()=>import("./ancestry-hobgoblin.1982cdf8.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-human.json":()=>r(()=>import("./ancestry-human.c6d51bf9.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-kashrishi.json":()=>r(()=>import("./ancestry-kashrishi.d4a79401.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-kitsune.json":()=>r(()=>import("./ancestry-kitsune.7a0d21b9.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-kobold.json":()=>r(()=>import("./ancestry-kobold.943b8121.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-leshy.json":()=>r(()=>import("./ancestry-leshy.4488d032.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-lizardfolk.json":()=>r(()=>import("./ancestry-lizardfolk.838c0136.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-nagaji.json":()=>r(()=>import("./ancestry-nagaji.4695cdf8.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-orc.json":()=>r(()=>import("./ancestry-orc.0dc73a51.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-poppet.json":()=>r(()=>import("./ancestry-poppet.65e96566.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-ratfolk.json":()=>r(()=>import("./ancestry-ratfolk.4edfccc8.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-shisk.json":()=>r(()=>import("./ancestry-shisk.454bc4c6.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-shoony.json":()=>r(()=>import("./ancestry-shoony.4507cf60.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-skeleton.json":()=>r(()=>import("./ancestry-skeleton.e21ad147.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-sprite.json":()=>r(()=>import("./ancestry-sprite.e86541d9.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-strix.json":()=>r(()=>import("./ancestry-strix.41a15f4b.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-tengu.json":()=>r(()=>import("./ancestry-tengu.d6b302cb.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-vanara.json":()=>r(()=>import("./ancestry-vanara.f23f4f4a.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-vishkanya.json":()=>r(()=>import("./ancestry-vishkanya.7c187811.js"),[],import.meta.url)});for(const a in n)n[a]().then(c=>{c.ancestry.forEach(u=>{u._path=a;const p=new h(u);this.update(d=>(d.set(p.hash,p),d))})})}return{subscribe:t,set:o,update:i,load:_}}const P=new j;function j(s="heritages",e=new Map){const{subscribe:t,set:o,update:i}=E(s,e,{serializer:y});function _(){r(()=>import("./versatile-heritages.2ef7b789.js"),[],import.meta.url).then(n=>{n.versatileHeritage.map(a=>(a._path="$data/ancestries/versatile-heritages.json",a)),n.versatileHeritage.forEach(a=>{const c=new v(a);this.update(m=>(m.set(c.hash,c),m))})})}return{subscribe:t,set:o,update:i,load:_}}export{I as S};
