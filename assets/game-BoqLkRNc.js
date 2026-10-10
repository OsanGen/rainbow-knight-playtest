import{L as Za,a as bi,F as ha,M as gn,V as Tn,C as V,b as cn,S as ge,c as Qa,P as Jt,D as Pe,d as ie,e as _,I as X,Q as he,f as Xi,O as we,T as da,g as Ja,B as rn,h as er,i as ot,N as nr,j as tr,k as ir,l as Sn,m as Ti,R as ln,n as sr,o as Bs,p as ua,q as fs,r as Si,s as U,t as re,u as q,v as or,w as Ge,x as $s,y as P,z as ho,A as Us,E as as,G as Vs,H as ma,J as W,K as wi,U as He,W as rs,X as ar,Y as rr,Z as lr,_ as cr,$ as pa,a0 as hr,a1 as $n,a2 as uo,a3 as mo,a4 as po,a5 as fo,a6 as dr,a7 as ur,a8 as Nn,a9 as mr,aa as pr,ab as fr,ac as gr,ad as gi,ae as Vi,af as Li,ag as zi,ah as Ai,ai as Zi,aj as br,ak as wr,al as yr,am as le,an as Ws,ao as Me,ap as Kt,aq as kt,ar as Et,as as fa,at as We,au as ve,av as qs,aw as Ks,ax as vr,ay as St,az as zt,aA as Ce,aB as xr,aC as je,aD as Te,aE as Mn,aF as kr,aG as Mr,aH as Q,aI as Ke,aJ as zn,aK as xn,aL as G,aM as Pn,aN as go,aO as Er,aP as Tr,aQ as fe,aR as At,aS as bo,aT as Cs,aU as ga,aV as wo,aW as En,aX as tt,aY as Ri,aZ as gs,a_ as yo,a$ as Re,b0 as ba,b1 as Sr,b2 as Ys,b3 as zr,b4 as vo,b5 as ne,b6 as Ar,b7 as $t,b8 as Ps,b9 as Rr,ba as _r,bb as Ir,bc as Lr,bd as Fn,be as bs,bf as Qi,bg as Cr,bh as xo,bi as Wi,bj as Pr,bk as be,bl as en,bm as Xs,bn as Or,bo as Nr,bp as Fr,bq as Dr,br as wa,bs as Hr,bt as ko,bu as Gr,bv as jr,bw as Ut,bx as Br,by as $r}from"./two-level-human-pov-BqPu8nAX.js";const Un=Object.freeze({id:"rainbow-combat-g2-v1",baseline:"7df5612a582358c3cf41ae6a936e94897b3143ef",heroRoster:Object.freeze(["hammer_rabbit","rabbit_glimpse","flank_drone"]),rollout:"FULL_ROSTER_OWNER_QA_PENDING",sampling:Object.freeze({exposure:.92,desktopPixelRatio:1.5,touchPixelRatio:1,viewmodelFov:55}),caps:Object.freeze({actors:128,friendly:128,hostile:192,crowdDrawGroups:40,kitDrawGroups:32,retainedMaskGroups:8,atriumDraws:85,atriumTriangles:24e3,grinTriangles:13404,hydraTriangles:24896,runtimeArtBytes:32*1024*1024,editableArtBytes:128*1024*1024,incrementalTextureBytes:32*1024*1024,impactParticles:192,reducedImpactParticles:48,contactDecals:24,reducedContactDecals:8,particleSeconds:.65,decalSeconds:1.2,remains:16,reducedRemains:4,remainsSeconds:1.2,heartMeshes:6,heartTriangles:720,heartDrawCalls:12,splashes:3,splashSeconds:.65,splashOpacity:.35,reducedSplashSeconds:.25,reducedSplashOpacity:.15}),geometry:Object.freeze({radius:.97,top:.995,headLow:.725,headHigh:.992}),evidence:Object.freeze({hero:"OWNER_QA_PENDING",visual:"OWNER_QA_PENDING",motion:"OWNER_QA_PENDING",realInput:"OWNER_QA_PENDING",measuredPerformance:"OWNER_QA_PENDING",ownerReview:"PENDING"})});class Ur{attempt=-1;time=-1;health=0;damage=0;serial=0;splashes=[];update(e,n,t=!0){if(this.attempt!==e.attemptId||e.time<this.time||!t||["ready","dead","complete"].includes(e.phase)){this.clear(),this.attempt=e.attemptId,this.health=e.player.health,this.damage=e.damageTaken,this.time=e.time;return}if(e.player.health<this.health&&e.damageTaken>this.damage){const s=++this.serial;this.splashes.push({at:e.time,serial:s,edge:s%3,reduced:n})}const i=n?1:3;for(;this.splashes.length>i;)this.splashes.shift();for(let s=this.splashes.length-1;s>=0;s--)e.time+1e-9>=this.splashes[s].at+(n?.25:.65)&&this.splashes.splice(s,1);this.health=e.player.health,this.damage=e.damageTaken,this.time=e.time}clear(){this.splashes.length=0}}class Vr{constructor(e){this.host=e;for(let n=0;n<3;n++){const t=document.createElement("canvas");t.width=384,t.height=256,t.className="g2-chrome-splash",t.setAttribute("aria-hidden","true"),e.append(t),this.nodes.push(t)}}host;state=new Ur;nodes=[];serials=[-1,-1,-1];update(e,n,t){this.state.update(e,n,t),this.nodes.forEach((i,s)=>{const o=this.state.splashes[s];if(i.hidden=!o,!o)return;this.serials[s]!==o.serial&&(this.paint(i,o),this.serials[s]=o.serial);const a=Math.max(0,e.time-o.at),l=n?.25:.65;i.style.opacity=String((n?.15:.35)*(n?1:Math.min(1,(l-a)/.2)))})}paint(e,n){const t=e.getContext("2d");if(!t)return;const i=e.width,s=e.height;t.clearRect(0,0,i,s);const o=t.createLinearGradient(0,0,i,s);o.addColorStop(0,"#f0faf5"),o.addColorStop(.23,"#72d6da"),o.addColorStop(.43,"#eee4f1"),o.addColorStop(.66,"#b177ce"),o.addColorStop(.83,"#c8d3ba"),o.addColorStop(1,"#e9f6fb"),t.fillStyle=o,t.strokeStyle="#f0f7fa",t.lineWidth=.7;const a=n.reduced?5:13;for(let l=0;l<a;l++){const c=(l*.618033+n.serial*.137)%1,u=(l+n.edge)%2===0?3+c*26:i-3-c*26,d=s*(.35+l*.37%1*.32),p=n.reduced?3:3+l%4*1.7;t.beginPath(),t.ellipse(u,d,p*.65,p*2.3,.2*(l%3-1),0,Math.PI*2),t.fill(),t.stroke()}for(const l of[0,1]){const c=l?i:0,h=l?-1:1;t.beginPath(),t.moveTo(c,s*.34),t.bezierCurveTo(c+h*29,s*.42,c+h*7,s*.49,c+h*17,s*.57),t.bezierCurveTo(c+h*7,s*.61,c+h*4,s*.68,c,s*.69),t.closePath(),t.fill(),t.stroke()}}reset(){this.state.clear(),this.nodes.forEach(e=>e.hidden=!0)}dispose(){this.nodes.forEach(e=>e.remove()),this.nodes=[],this.state.clear()}}const xe=Object.freeze({id:"rainbow-visual-vt1-proof-v1.1",enemy:"flank_drone",baseline:"4843f68802f325d36045084e82b4cc807104fee8",body:Object.freeze({radius:.24,height:1.8,maxRadius:.97,maxTop:.995,headLow:.725,headHigh:.992,triangles:5368,bones:48,influences:4}),capacity:Object.freeze({live:128,remains:16,reducedRemains:4,remainsSeconds:1.2}),caps:Object.freeze({crowdDrawGroups:40,roomTriangles:24e3,roomDraws:85,textureBytes:32*1024*1024,runtimeBytes:32*1024*1024,editableBytes:128*1024*1024}),evidence:Object.freeze({code:"RECORDED_SEPARATELY",visual:"OWNER_QA_PENDING",motion:"OWNER_QA_PENDING",performance:"OWNER_QA_PENDING"})});function Wr(){return!0}function Tt(r,e="./"){return!r.startsWith("/assets/")&&!r.startsWith("/music/")?r:(e.endsWith("/")?e:e+"/")+r.slice(1)}class Zs extends Za{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new Zr(n)}),this.register(function(n){return new Qr(n)}),this.register(function(n){return new r0(n)}),this.register(function(n){return new l0(n)}),this.register(function(n){return new c0(n)}),this.register(function(n){return new e0(n)}),this.register(function(n){return new n0(n)}),this.register(function(n){return new t0(n)}),this.register(function(n){return new i0(n)}),this.register(function(n){return new Xr(n)}),this.register(function(n){return new s0(n)}),this.register(function(n){return new Jr(n)}),this.register(function(n){return new a0(n)}),this.register(function(n){return new o0(n)}),this.register(function(n){return new Kr(n)}),this.register(function(n){return new h0(n)}),this.register(function(n){return new d0(n)})}load(e,n,t,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=bi.extractUrlBase(e);o=bi.resolveURL(c,this.path)}else o=bi.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ha(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){n(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},t,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,t,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ya){try{o[J.KHR_BINARY_GLTF]=new u0(e)}catch(u){i&&i(u);return}s=JSON.parse(o[J.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new T0(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case J.KHR_MATERIALS_UNLIT:o[u]=new Yr;break;case J.KHR_DRACO_MESH_COMPRESSION:o[u]=new m0(s,this.dracoLoader);break;case J.KHR_TEXTURE_TRANSFORM:o[u]=new p0;break;case J.KHR_MESH_QUANTIZATION:o[u]=new f0;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(t,i)}parseAsync(e,n){const t=this;return new Promise(function(i,s){t.parse(e,n,i,s)})}}function qr(){let r={};return{get:function(e){return r[e]},add:function(e,n){r[e]=n},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const J={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kr{constructor(e){this.parser=e,this.name=J.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let t=0,i=n.length;t<i;t++){const s=n[t];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,t="light:"+e;let i=n.cache.get(t);if(i)return i;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new V(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],cn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pe(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jt(h),c.distance=u;break;case"spot":c=new Qa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),n.cache.add(t,i),i}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,t=this.parser,s=t.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return t._getNodeRef(n.cache,a,l)})}}class Yr{constructor(){this.name=J.KHR_MATERIALS_UNLIT}getMaterialType(){return q}extendParams(e,n,t){const i=[];e.color=new V(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(t.assignTexture(e,"map",s.baseColorTexture,ge))}return Promise.all(i)}}class Xr{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class Zr{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(t.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(t.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(t.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Tn(a,a)}return Promise.all(s)}}class Qr{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Jr{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(t.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(t.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class e0{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new V(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(t.assignTexture(n,"sheenColorMap",o.sheenColorTexture,ge)),o.sheenRoughnessTexture!==void 0&&s.push(t.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(t.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class t0{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(t.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return n.attenuationColor=new V().setRGB(a[0],a[1],a[2],cn),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class s0{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(t.assignTexture(n,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return n.specularColor=new V().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&s.push(t.assignTexture(n,"specularColorMap",o.specularColorTexture,ge)),Promise.all(s)}}class o0{constructor(e){this.parser=e,this.name=J.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(t.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(s)}}class a0{constructor(e){this.parser=e,this.name=J.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:gn}extendMaterialParams(e,n){const t=this.parser,i=t.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(t.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class r0{constructor(e){this.parser=e,this.name=J.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,t=n.json,i=t.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,o)}}class l0{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=i.images[o.source];let l=t.textureLoader;if(a.uri){const c=t.options.manager.getHandler(a.uri);c!==null&&(l=c)}return t.loadTextureImage(e,o.source,l)}}class c0{constructor(e){this.parser=e,this.name=J.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=i.images[o.source];let l=t.textureLoader;if(a.uri){const c=t.options.manager.getHandler(a.uri);c!==null&&(l=c)}return t.loadTextureImage(e,o.source,l)}}class h0{constructor(e){this.name=J.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,t=n.bufferViews[e];if(t.extensions&&t.extensions[this.name]){const i=t.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class d0{constructor(e){this.name=J.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,t=n.nodes[e];if(!t.extensions||!t.extensions[this.name]||t.mesh===void 0)return null;const i=n.meshes[t.mesh];for(const c of i.primitives)if(c.mode!==sn.TRIANGLES&&c.mode!==sn.TRIANGLE_STRIP&&c.mode!==sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=t.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const m of u){const b=new ie,g=new _,f=new he,w=new _(1,1,1),v=new X(m.geometry,m.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&w.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,b.compose(g,f,w));for(const E in l)if(E==="_COLOR_0"){const y=l[E];v.instanceColor=new Xi(y.array,y.itemSize,y.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&m.geometry.setAttribute(E,l[E]);we.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const ya="glTF",ai=12,Mo={JSON:1313821514,BIN:5130562};class u0{constructor(e){this.name=J.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,ai),t=new TextDecoder;if(this.header={magic:t.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==ya)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ai,s=new DataView(e,ai);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Mo.JSON){const c=new Uint8Array(e,ai+o,a);this.content=t.decode(c)}else if(l===Mo.BIN){const c=ai+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class m0{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=J.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const t=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Os[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Os[h]||h.toLowerCase();if(o[h]!==void 0){const d=t.accessors[e.attributes[h]],p=Yt[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return n.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const m in p.attributes){const b=p.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(p)},a,c,cn,d)})})}}class p0{constructor(){this.name=J.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class f0{constructor(){this.name=J.KHR_MESH_QUANTIZATION}}class va extends ur{constructor(e,n,t,i){super(e,n,t,i)}copySampleValue_(e){const n=this.resultBuffer,t=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)n[o]=t[s+o];return n}interpolate_(e,n,t,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-n,u=(t-n)/h,d=u*u,p=d*u,m=e*c,b=m-c,g=-2*p+3*d,f=p-d,w=1-g,v=f-d+u;for(let E=0;E!==a;E++){const y=o[b+E+a],M=o[b+E+l]*h,z=o[m+E+a],T=o[m+E]*h;s[E]=w*y+v*M+g*z+f*T}return s}}const g0=new he;class b0 extends va{interpolate_(e,n,t,i){const s=super.interpolate_(e,n,t,i);return g0.fromArray(s).normalize().toArray(s),s}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Yt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eo={9728:Ti,9729:Sn,9984:ir,9985:tr,9986:nr,9987:ot},To={33071:Bs,33648:sr,10497:ln},ws={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Os={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w0={CUBICSPLINE:void 0,LINEAR:pa,STEP:cr},ys={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function y0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new U({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:dr})),r.DefaultMaterial}function ut(r,e,n){for(const t in n.extensions)r[t]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[t]=n.extensions[t])}function yn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function v0(r,e,n){let t=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(t=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),t&&i&&s)break}if(!t&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(t){const d=u.POSITION!==void 0?n.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?n.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?n.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return t&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function x0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let n=0,t=e.weights.length;n<t;n++)r.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(r.morphTargetInfluences.length===n.length){r.morphTargetDictionary={};for(let t=0,i=n.length;t<i;t++)r.morphTargetDictionary[n[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k0(r){let e;const n=r.extensions&&r.extensions[J.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+vs(n.attributes):e=r.indices+":"+vs(r.attributes)+":"+r.mode,r.targets!==void 0)for(let t=0,i=r.targets.length;t<i;t++)e+=":"+vs(r.targets[t]);return e}function vs(r){let e="";const n=Object.keys(r).sort();for(let t=0,i=n.length;t<i;t++)e+=n[t]+":"+r[n[t]]+";";return e}function Ns(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const E0=new ie;class T0{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new qr,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let t=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;t=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=t&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||t&&i<17||s&&o<98?this.textureLoader=new da(this.options.manager):this.textureLoader=new Ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ha(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const t=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([t.getDependencies("scene"),t.getDependencies("animation"),t.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:t,userData:{}};return ut(s,a,i),yn(a,i),Promise.all(t._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],t=this.json.meshes||[];for(let i=0,s=n.length;i<s;i++){const o=n[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(t[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,t){if(e.refs[n]<=1)return t;const i=t.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(t,i),i.name+="_instance_"+e.uses[n]++,i}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let t=0;t<n.length;t++){const i=e(n[t]);if(i)return i}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const t=[];for(let i=0;i<n.length;i++){const s=e(n[i]);s&&t.push(s)}return t}getDependency(e,n){const t=e+":"+n;let i=this.cache.get(t);if(!i){switch(e){case"scene":i=this.loadScene(n);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":i=this.loadAccessor(n);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":i=this.loadBuffer(n);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":i=this.loadSkin(n);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":i=this.loadCamera(n);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(t,i)}return i}getDependencies(e){let n=this.cache.get(e);if(!n){const t=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(i.map(function(s,o){return t.getDependency(e,o)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],t=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[J.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){t.load(bi.resolveURL(n.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(t){const i=n.byteLength||0,s=n.byteOffset||0;return t.slice(s,s+i)})}loadAccessor(e){const n=this,t=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ws[i.type],a=Yt[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new rn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=ws[i.type],c=Yt[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?t.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let b,g;if(p&&p!==u){const f=Math.floor(d/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=n.cache.get(w);v||(b=new c(a,f*p,i.count*p/h),v=new er(b,p/h),n.cache.add(w,v)),g=new hr(v,l,d%p/h,m)}else a===null?b=new c(i.count*l):b=new c(a,d,i.count*l),g=new rn(b,l,m);if(i.sparse!==void 0){const f=ws.SCALAR,w=Yt[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,y=new w(o[1],v,i.sparse.count*f),M=new c(o[2],E,i.sparse.count*l);a!==null&&(g=new rn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let z=0,T=y.length;z<T;z++){const S=y[z];if(g.setX(S,M[z*l]),l>=2&&g.setY(S,M[z*l+1]),l>=3&&g.setZ(S,M[z*l+2]),l>=4&&g.setW(S,M[z*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const n=this.json,t=this.options,s=n.textures[e].source,o=n.images[s];let a=this.textureLoader;if(o.uri){const l=t.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,n,t){const i=this,s=this.json,o=s.textures[e],a=s.images[n],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,t).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Eo[d.magFilter]||Sn,h.minFilter=Eo[d.minFilter]||ot,h.wrapS=To[d.wrapS]||ln,h.wrapT=To[d.wrapT]||ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ti&&h.minFilter!==Sn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){const t=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=t.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;n.isImageBitmapLoader===!0&&(m=function(b){const g=new $n(b);g.needsUpdate=!0,d(g)}),n.load(bi.resolveURL(u,s.path),m,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),yn(u,o),u.userData.mimeType=o.mimeType||M0(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,n,t,i){const s=this;return this.getDependency("texture",t.index).then(function(o){if(!o)return null;if(t.texCoord!==void 0&&t.texCoord>0&&(o=o.clone(),o.channel=t.texCoord),s.extensions[J.KHR_TEXTURE_TRANSFORM]){const a=t.extensions!==void 0?t.extensions[J.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[J.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[n]=o,o})}assignFinalMaterial(e){const n=e.geometry;let t=e.material;const i=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+t.uuid;let l=this.cache.get(a);l||(l=new ua,fs.prototype.copy.call(l,t),l.color.copy(t.color),l.map=t.map,l.sizeAttenuation=!1,this.cache.add(a,l)),t=l}else if(e.isLine){const a="LineBasicMaterial:"+t.uuid;let l=this.cache.get(a);l||(l=new Si,fs.prototype.copy.call(l,t),l.color.copy(t.color),l.map=t.map,this.cache.add(a,l)),t=l}if(i||s||o){let a="ClonedMaterial:"+t.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=t.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(t))),t=l}e.material=t}getMaterialType(){return U}loadMaterial(e){const n=this,t=this.json,i=this.extensions,s=t.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[J.KHR_MATERIALS_UNLIT]){const u=i[J.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,n))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new V(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],cn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(n.assignTexture(a,"map",u.baseColorTexture,ge)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(n.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=re);const h=s.alphaMode||ys.OPAQUE;if(h===ys.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ys.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==q&&(c.push(n.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Tn(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==q&&(c.push(n.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==q){const u=s.emissiveFactor;a.emissive=new V().setRGB(u[0],u[1],u[2],cn)}return s.emissiveTexture!==void 0&&o!==q&&c.push(n.assignTexture(a,"emissiveMap",s.emissiveTexture,ge)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),yn(u,s),n.associations.set(u,{materials:e}),s.extensions&&ut(i,u,s),u})}createUniqueName(e){const n=or.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,t=this.extensions,i=this.primitiveCache;function s(a){return t[J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(l){return So(l,a,n)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=k0(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[J.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=So(new Ge,c,n),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const n=this,t=this.json,i=this.extensions,s=t.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?y0(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){const b=h[p],g=o[p];let f;const w=c[p];if(g.mode===sn.TRIANGLES||g.mode===sn.TRIANGLE_STRIP||g.mode===sn.TRIANGLE_FAN||g.mode===void 0)f=s.isSkinnedMesh===!0?new $s(b,w):new P(b,w),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===sn.TRIANGLE_STRIP?f.geometry=ho(f.geometry,pr):g.mode===sn.TRIANGLE_FAN&&(f.geometry=ho(f.geometry,fr));else if(g.mode===sn.LINES)f=new Us(b,w);else if(g.mode===sn.LINE_STRIP)f=new as(b,w);else if(g.mode===sn.LINE_LOOP)f=new Vs(b,w);else if(g.mode===sn.POINTS)f=new ma(b,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&x0(f,s),f.name=n.createUniqueName(s.name||"mesh_"+e),yn(f,s),g.extensions&&ut(i,f,g),n.assignFinalMaterial(f),u.push(f)}for(let p=0,m=u.length;p<m;p++)n.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&ut(i,u[0],s),u[0];const d=new W;s.extensions&&ut(i,d,s),n.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let n;const t=this.json.cameras[e],i=t[t.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return t.type==="perspective"?n=new wi(He.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):t.type==="orthographic"&&(n=new rs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),t.name&&(n.name=this.createUniqueName(t.name)),yn(n,t),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],t=[];for(let i=0,s=n.joints.length;i<s;i++)t.push(this._loadNodeShallow(n.joints[i]));return n.inverseBindMatrices!==void 0?t.push(this.getDependency("accessor",n.inverseBindMatrices)):t.push(null),Promise.all(t).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new ie;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new ar(a,l)})}loadAnimation(e){const n=this.json,t=this,i=n.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],m=i.samplers[p.sampler],b=p.target,g=b.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,w=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",w)),c.push(m),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],m=u[2],b=u[3],g=u[4],f=[];for(let v=0,E=d.length;v<E;v++){const y=d[v],M=p[v],z=m[v],T=b[v],S=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=t._createAnimationTracks(y,M,z,T,S);if(A)for(let R=0;R<A.length;R++)f.push(A[R])}const w=new rr(s,void 0,f);return yn(w,i),w})}createNodeMesh(e){const n=this.json,t=this,i=n.nodes[e];return i.mesh===void 0?null:t.getDependency("mesh",i.mesh).then(function(s){const o=t._getNodeRef(t.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const n=this.json,t=this,i=n.nodes[e],s=t._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(t.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):t.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,E0)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const n=this.json,t=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new lr:c.length>1?h=new W:c.length===1?h=c[0]:h=new we,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),yn(h,s),s.extensions&&ut(t,h,s),s.matrix!==void 0){const u=new ie;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const n=this.extensions,t=this.json.scenes[e],i=this,s=new W;t.name&&(s.name=i.createUniqueName(t.name)),yn(s,t),t.extensions&&ut(n,s,t);const o=t.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof fs||d instanceof $n)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,n,t,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Kn[s.path]===Kn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Kn[s.path]){case Kn.weights:c=mo;break;case Kn.rotation:c=po;break;case Kn.translation:case Kn.scale:c=uo;break;default:t.itemSize===1?c=mo:c=uo;break}const h=i.interpolation!==void 0?w0[i.interpolation]:pa,u=this._getArrayFromAccessor(t);for(let d=0,p=l.length;d<p;d++){const m=new c(l[d]+"."+Kn[s.path],n.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const t=Ns(n.constructor),i=new Float32Array(n.length);for(let s=0,o=n.length;s<o;s++)i[s]=n[s]*t;n=i}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof po?b0:va;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function S0(r,e,n){const t=e.attributes,i=new Nn;if(t.POSITION!==void 0){const a=n.json.accessors[t.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new _(l[0],l[1],l[2]),new _(c[0],c[1],c[2])),a.normalized){const h=Ns(Yt[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new _,l=new _;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=n.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){const b=Ns(Yt[d.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new mr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function So(r,e,n){const t=e.attributes,i=[];function s(o,a){return n.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in t){const a=Os[o]||o.toLowerCase();a in r.attributes||i.push(s(t[o],a))}if(e.indices!==void 0&&!r.index){const o=n.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return fo.workingColorSpace!==cn&&"COLOR_0"in t&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${fo.workingColorSpace}" not supported.`),yn(r,e),S0(r,e,n),Promise.all(i).then(function(){return e.targets!==void 0?v0(r,e.targets,n):r})}class z0 extends gr{constructor(e){super(e),this.type=gi}parse(e){const o=function(T,S){switch(T){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},u=function(T,S,A){S=S||1024;let N=T.pos,B=-1,H=0,K="",I=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));for(;0>(B=I.indexOf(`
`))&&H<S&&N<T.byteLength;)K+=I,H+=I.length,N+=128,I+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));return-1<B?(T.pos+=H+B+1,K+I.slice(0,B)):!1},d=function(T){const S=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let K,I;for((T.pos>=T.byteLength||!(K=u(T)))&&o(1,"no header found"),(I=K.match(S))||o(3,"bad initial token"),H.valid|=1,H.programtype=I[1],H.string+=K+`
`;K=u(T),K!==!1;){if(H.string+=K+`
`,K.charAt(0)==="#"){H.comments+=K+`
`;continue}if((I=K.match(A))&&(H.gamma=parseFloat(I[1])),(I=K.match(R))&&(H.exposure=parseFloat(I[1])),(I=K.match(N))&&(H.valid|=2,H.format=I[1]),(I=K.match(B))&&(H.valid|=4,H.height=parseInt(I[1],10),H.width=parseInt(I[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},p=function(T,S,A){const R=S;if(R<8||R>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);R!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*S*A);N.length||o(4,"unable to allocate buffer space");let B=0,H=0;const K=4*R,I=new Uint8Array(4),L=new Uint8Array(K);let ue=A;for(;ue>0&&H<T.byteLength;){H+4>T.byteLength&&o(1),I[0]=T[H++],I[1]=T[H++],I[2]=T[H++],I[3]=T[H++],(I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=R)&&o(3,"bad rgbe scanline format");let F=0,oe;for(;F<K&&H<T.byteLength;){oe=T[H++];const ce=oe>128;if(ce&&(oe-=128),(oe===0||F+oe>K)&&o(3,"bad scanline data"),ce){const k=T[H++];for(let j=0;j<oe;j++)L[F++]=k}else L.set(T.subarray(H,H+oe),F),F+=oe,H+=oe}const hn=R;for(let ce=0;ce<hn;ce++){let k=0;N[B]=L[ce+k],k+=R,N[B+1]=L[ce+k],k+=R,N[B+2]=L[ce+k],k+=R,N[B+3]=L[ce+k],B+=4}ue--}return N},m=function(T,S,A,R){const N=T[S+3],B=Math.pow(2,N-128)/255;A[R+0]=T[S+0]*B,A[R+1]=T[S+1]*B,A[R+2]=T[S+2]*B,A[R+3]=1},b=function(T,S,A,R){const N=T[S+3],B=Math.pow(2,N-128)/255;A[R+0]=Li.toHalfFloat(Math.min(T[S+0]*B,65504)),A[R+1]=Li.toHalfFloat(Math.min(T[S+1]*B,65504)),A[R+2]=Li.toHalfFloat(Math.min(T[S+2]*B,65504)),A[R+3]=Li.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const f=d(g),w=f.width,v=f.height,E=p(g.subarray(g.pos),w,v);let y,M,z;switch(this.type){case Vi:z=E.length/4;const T=new Float32Array(z*4);for(let A=0;A<z;A++)m(E,A*4,T,A*4);y=T,M=Vi;break;case gi:z=E.length/4;const S=new Uint16Array(z*4);for(let A=0;A<z;A++)b(E,A*4,S,A*4);y=S,M=gi;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:w,height:v,data:y,header:f.string,gamma:f.gamma,exposure:f.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,n,t,i){function s(o,a){switch(o.type){case Vi:case gi:o.colorSpace=cn,o.minFilter=Sn,o.magFilter=Sn,o.generateMipmaps=!1,o.flipY=!0;break}n&&n(o,a)}return super.load(e,s,t,i)}}function qe(r){const e=new Set,n=new Set,t=new Set;r.traverse(i=>{if(i instanceof P){e.add(i.geometry);for(const s of Array.isArray(i.material)?i.material:[i.material])n.add(s)}});for(const i of n){for(const s of Object.values(i))s instanceof $n&&t.add(s);i.dispose()}e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}function it(r,e,n=15e3){return e=Tt(e),r.load(e,async t=>{const i=await fetch(e,{signal:t});if(!i.ok)throw new Error(`Model request failed: ${e} (${i.status})`);const s=await i.arrayBuffer();if(t.aborted)throw new Error("Model request cancelled");return(await new Zs().parseAsync(s,e.slice(0,e.lastIndexOf("/")+1))).scene},qe,n)}function st(r,e,n=8e3){return e=Tt(e),r.load(e,async t=>{const i=await fetch(e,{signal:t});if(!i.ok)throw new Error(`Texture request failed: ${e} (${i.status})`);const s=await i.blob();if(t.aborted)throw new Error("Texture request cancelled");const o=URL.createObjectURL(s);try{return await new da().loadAsync(o)}finally{URL.revokeObjectURL(o)}},t=>t.dispose(),n)}function Fs(r,e){return e=Tt(e),r.load(e,async n=>{const t=await fetch(e,{signal:n});if(!t.ok)throw new Error(`HDR request failed: ${e} (${t.status})`);const i=await t.arrayBuffer();if(n.aborted)throw new Error("HDR request cancelled");const s=new z0().parse(i),o=new zi(s.data,s.width,s.height,Ai,s.type);return o.colorSpace=cn,o.minFilter=o.magFilter=Sn,o.generateMipmaps=!1,o.flipY=!0,o.needsUpdate=!0,o},n=>n.dispose(),8e3)}async function xa(r,e){return e=Tt(e),r.load(e,async n=>{const t=await fetch(e,{signal:n});if(!t.ok)throw Error(`VT1 asset unavailable: ${e}`);const i=await t.arrayBuffer();if(n.aborted)throw Error("VT1 load cancelled");return new Zs().parseAsync(i,e.slice(0,e.lastIndexOf("/")+1))},n=>qe(n.scene))}function zo(r){qe(r.root),r.material.dispose(),r.maps.forEach(e=>e.dispose())}async function A0(r){const e=await xa(r,"/assets/visual-vt1/sideways-compliment.glb"),n=[];let t=null;try{const i=[];if(e.scene.traverse(a=>{a instanceof $s&&i.push(a)}),i.length!==1)throw Error("VT1 requires one authored skin, not a rigid kit");const s=i[0],o=s.geometry;for(const a of["position","normal","uv","skinIndex","skinWeight"])if(!o.getAttribute(a))throw Error(`VT1 skin lacks ${a}`);if((o.index?.count??o.getAttribute("position").count)/3>xe.body.triangles)throw Error("VT1 triangle cap");if(s.skeleton.bones.length>xe.body.bones)throw Error("VT1 bone cap");for(const a of["idle","walk","aim","release","hit","death"])if(!e.animations.some(l=>l.name===a))throw Error(`VT1 authored clip missing: ${a}`);for(const a of["basecolor","normal","orm"]){const l=await st(r,`/assets/visual-vt1/sideways-${a}.png`);n.push(l);const c=a==="orm"?256:512,h=l.image;if(h.width!==c||h.height!==c)throw Error(`VT1 ${a} atlas dimensions`);l.flipY=!1,l.colorSpace=a==="basecolor"?ge:Zi,l.generateMipmaps=!0,l.minFilter=ot,l.magFilter=Sn}return t=new U({name:"VT1_opal_chrome_and_skin",map:n[0],normalMap:n[1],normalScale:new Tn(.34,.34),roughnessMap:n[2],metalnessMap:n[2],roughness:1,metalness:1,envMapIntensity:.75,vertexColors:!!o.getAttribute("color")}),{root:e.scene,mesh:s,clips:e.animations,maps:n,material:t}}catch(i){throw qe(e.scene),t?.dispose(),n.forEach(s=>s.dispose()),i}}const R0=new Set(["signal_echo","flank_drone","rabbit_glimpse","notification_swarm","name_glitch_shade","speaker_wraith","chair_knight","hammer_rabbit","loop_ghost","decay_mote","double","dual","apex_rabbit","cell_blob","reach_shadow","evolution_rabbit","drift_hound","arc_turret"]),_0=new Set(["flank_drone","signal_echo"]),I0=r=>["rear","side","forward"][(r>>>0)%3],te=(r,e,n)=>{const t=Math.max(0,Math.min(1,(r-e)/(n-e)));return t*t*t*(t*(t*6-15)+10)},Mi=r=>r.replace(/^upperArm/,"shoulder").replace(/^forearm(?=[LR])/,"elbow").replace(/^thigh/,"hip").replace(/^shin/,"knee").replace(/^spine$/,"lumbar");function ka(r,e,n,t,i){const s=e.map(u=>new _().setFromMatrixPosition(u)),o=new Map(r.map((u,d)=>[Mi(u),d])),a=u=>{const d=o.get(u);return d===void 0?void 0:s[d]},l=i&&!_0.has(i.identity)?L0(r,i):void 0,c=r.flatMap((u,d)=>/^hip(?:L|R)/.test(Mi(u))?[s[d]]:[]),h=a("pelvis")?.clone()??(c.length?c.reduce((u,d)=>u.add(d),new _).multiplyScalar(1/c.length):l?a(l.core)?.clone()??new _(0,n*.34,0):new _(0,n*.34,0));return{names:[...r],positions:s,index:o,pelvis:h,height:n,id:t,transforms:e.map(()=>new ie),targets:s.map(u=>u.clone()),rotations:e.map(()=>new he),direction:I0(t),anatomy:l}}const Ve=new _,Dn=new _,Hn=new _,an=new _,Xt=new _,Ee=new _,pn=new _,Vt=new he,kn=new he,et=new he,Ji=new he,Ci=new he,xs=new he,Ao=new he,Pi=new he,Ma=new _(1,1,1),vn=new _,yi=new _,Yn=new _,Wt=new _,Ct=new _,Ro=new _,Zt=new _,Qt=new _,es=new _,ns=new _,ts=new ie,is=new ie,ss=new he;function Ea(r,e,n,t,i,s,o){vn.copy(n).sub(r).normalize(),yi.copy(i).sub(t).normalize(),Yn.copy(e).sub(r).addScaledVector(vn,-Yn.dot(vn)),Yn.lengthSq()<1e-12&&Yn.set(0,0,1).addScaledVector(vn,-vn.z),Yn.normalize(),Wt.copy(Yn),Pi.setFromUnitVectors(vn,yi),Yn.applyQuaternion(Pi),Ct.crossVectors(Ve,vn),Ct.lengthSq()<1e-10&&Ct.copy(Wt),Ct.normalize(),Ro.crossVectors(vn,Wt).normalize();const a=Math.atan2(Ct.dot(Ro),Ct.dot(Wt));Pi.setFromAxisAngle(yi,a*s),o.copy(Yn).applyQuaternion(Pi)}function Ta(r,e,n,t,i,s,o){Ee.copy(e).sub(r);const a=Ee.length(),l=Math.max(Math.abs(n-t)+1e-10,Math.min(n+t,a));Ee.normalize(),a<1e-8&&Ee.set(0,-1,0),o.copy(r).addScaledVector(Ee,l);const c=(n*n-t*t+l*l)/(2*l),h=Math.sqrt(Math.max(0,n*n-c*c));pn.copy(i).addScaledVector(Ee,-i.dot(Ee)),pn.lengthSq()<1e-8&&pn.set(1,0,0).addScaledVector(Ee,-Ee.x),pn.normalize(),s.copy(r).addScaledVector(Ee,c).addScaledVector(pn,h)}function Sa(r,e){e=Math.max(0,e);const{height:n,positions:t,targets:i,rotations:s,index:o}=r;if(e===0){for(let v=0;v<i.length;v++)i[v].copy(t[v]),s[v].identity(),r.transforms[v].identity();return r.transforms}if(r.anatomy)return C0(r,e);const a=r.id&1?1:-1;Dn.set(r.direction==="side"?a:0,0,r.direction==="rear"?-1:r.direction==="forward"?1:0),Ve.set(Dn.z,0,-Dn.x);const l=te(e,0,.36),c=te(e,.07,.67),h=te(e,.12,.76),u=te(e,.21,.91),d=.012*n*Math.pow(Math.sin(Math.PI*te(e,.68,1.06)),2);kn.setFromAxisAngle(Ve,1.55*c),et.setFromAxisAngle(Ve,1.62*h),Ji.setFromAxisAngle(Ve,1.6*u);const p=r.pelvis.clone().addScaledVector(Dn,.22*n*(.7*l+.3*c));p.y+=(.025*n-r.pelvis.y)*l-d;const m=v=>o.get(v),b=v=>{const E=m(v);return E===void 0?void 0:i[E]},g=(v,E,y)=>{const M=m(v);if(M===void 0)return;const z=E===void 0?void 0:m(E),T=z===void 0?r.pelvis:t[z],S=z===void 0?p:i[z];i[M].copy(t[M]).sub(T).applyQuaternion(y).add(S),s[M].copy(y)};for(let v=0;v<i.length;v++)i[v].copy(t[v]).sub(r.pelvis).applyQuaternion(kn).add(p),s[v].copy(kn);const f=m("pelvis");f!==void 0&&i[f].copy(p),g("lumbar",void 0,kn),g("chest",m("lumbar")===void 0?void 0:"lumbar",et),g("neck","chest",et),g("head",m("neck")===void 0?"chest":"neck",Ji);for(const v of["L","R"]){const E=m(`hip${v}`),y=m(`knee${v}`),M=m(`foot${v}`);if(E!==void 0&&y!==void 0&&M!==void 0){const A=te(e,.18,.69);an.copy(t[M]).lerp(i[M],A),an.y=Math.max(t[M].y,an.y),v==="R"&&an.copy(t[M]).lerp(an,te(e,.22,.72)),Ea(t[E],t[y],t[M],i[E],an,r.direction==="forward"?te(e,.24,.65):te(e,.025,.34),Xt),Ta(i[E],an,t[E].distanceTo(t[y]),t[y].distanceTo(t[M]),Xt,i[y],i[M]),w(E,y),w(y,M),s[M].identity().slerp(kn,A*.85)}const z=m(`shoulder${v}`),T=m(`elbow${v}`),S=m(`hand${v}`);if(g(`shoulder${v}`,"chest",et),S!==void 0){const A=z===void 0?b("chest")??p:i[z],R=z===void 0?m("chest")??S:z;Ci.setFromAxisAngle(Ve,1.62*te(e,.16,.85)),xs.setFromAxisAngle(Ve,1.66*te(e,.22,.94)),Ao.setFromAxisAngle(Ve,1.64*te(e,.29,1.03)),z!==void 0&&s[z].copy(Ci),T!==void 0?(i[T].copy(t[T]).sub(t[R]).applyQuaternion(Ci).add(A),s[T].copy(xs),i[S].copy(t[S]).sub(t[T]).applyQuaternion(xs).add(i[T])):i[S].copy(t[S]).sub(t[R]).applyQuaternion(Ci).add(A),s[S].copy(Ao)}}for(let v=0;v<r.names.length;v++){const E=Mi(r.names[v]);let y;if(/^(head.+|jaw)$/.test(E)?y="head":/Finger|Thumb/.test(E)?y=E.startsWith("handL")?"handL":"handR":/^(finger|thumb)[LR]/.test(E)?y=E.match(/^(?:finger|thumb)([LR])/)?.[1]==="L"?"handL":"handR":/crescent|paper/.test(E)&&(y="chest"),y){const M=m(y);M!==void 0&&(i[v].copy(t[v]).sub(t[M]).applyQuaternion(s[M]).add(i[M]),s[v].copy(s[M]))}r.transforms[v].compose(i[v],s[v],Ma),Hn.copy(t[v]).applyQuaternion(s[v]),r.transforms[v].setPosition(i[v].x-Hn.x,i[v].y-Hn.y,i[v].z-Hn.z)}return r.transforms;function w(v,E){Ee.copy(t[E]).sub(t[v]).normalize(),pn.copy(i[E]).sub(i[v]).normalize(),Zt.crossVectors(vn,Wt).normalize(),Qt.crossVectors(yi,Xt).normalize(),es.crossVectors(Zt,Ee).normalize(),ns.crossVectors(Qt,pn).normalize(),ts.makeBasis(Ee,es,Zt),is.makeBasis(pn,ns,Qt),ss.setFromRotationMatrix(ts).invert(),Vt.setFromRotationMatrix(is),s[v].copy(Vt).multiply(ss).normalize()}}function L0(r,e){const n=r.map(Mi),t=new Map(n.map((b,g)=>[b,g])),i=b=>t.has(b),s=e.identity,o=i("chest")?"chest":i("ring")?"ring":i("spine0")?"spine0":i("loop")?"loop":i("diamond")?"diamond":i("bridge")?"bridge":i("dart")?"dart":i("forearm")?"forearm":i("seam")?"seam":"root",a=n.map((b,g)=>{const f=e.parents[g];return f!==void 0&&f>=0&&n[f]!=="root"?f:-1}),l=(b,g)=>{const f=t.get(b),w=t.get(g);f!==void 0&&w!==void 0&&f!==w&&(a[f]=w)};l("lumbar","pelvis"),l("chest",i("lumbar")?"lumbar":"pelvis");const c=n.flatMap(b=>{const g=b.match(/^hip(.+)$/);return g&&i(`knee${g[1]}`)&&i(`foot${g[1]}`)?[g[1]]:[]});for(const b of c)l(`hip${b}`,"pelvis"),l(`knee${b}`,`hip${b}`),l(`foot${b}`,`knee${b}`);for(const b of["L","R"])l(`shoulder${b}`,"chest"),l(`elbow${b}`,`shoulder${b}`),l(`hand${b}`,i(`elbow${b}`)?`elbow${b}`:`shoulder${b}`);const h=s==="name_glitch_shade"?"spine5":s==="reach_shadow"?"palm":o;l("neck",h),l("head",i("neck")?"neck":h);for(let b=0;b<6;b++)b&&l(`spine${b}`,`spine${b-1}`),l(`neck${b}`,"chest"),l(`head${b}`,s==="notification_swarm"?`petal${b}`:i(`neck${b}`)?`neck${b}`:"chest"),l(`crown${b}`,`head${b}`);for(const b of n)/^tab/.test(b)&&l(b,"head"),/^pole/.test(b)&&l(b,"chest"),/^paper/.test(b)&&a[t.get(b)]<0&&l(b,"chest"),/^head(?:\d+)?(?:Jaw|Lid[LR]|Flower)$/.test(b)&&l(b,b.replace(/(?:Jaw|Lid[LR]|Flower)$/,""));l("muzzle","head"),l("tail","chest"),l("palm","forearm"),s==="cell_blob"&&(l("lobeL","seam"),l("lobeR","seam"));for(const b of["L","R"])l(`support${b}`,"chest"),l(`column${b}`,"bridge"),s==="double"?l(`strand${b}`,`column${b}`):s==="name_glitch_shade"?l(`strand${b}`,b==="L"?"spine2":"spine1"):l(`strand${b}`,o);l("strandBack",o);const u=[],d=new Set,p=new Set,m=b=>{if(!p.has(b)){if(d.has(b))throw Error("Cyclic Rainbow death anatomy");d.add(b),a[b]>=0&&m(a[b]),d.delete(b),p.add(b),u.push(b)}};return n.forEach((b,g)=>m(g)),{identity:s,parents:a,order:u,legs:c,core:o}}function C0(r,e){const n=r.anatomy,{height:t,positions:i,targets:s,rotations:o,index:a}=r,l=r.id&1?1:-1;Dn.set(r.direction==="side"?l:0,0,r.direction==="rear"?-1:1),r.direction==="side"&&(Dn.z=0),Ve.set(Dn.z,0,-Dn.x);const c=te(e,0,.36),h=te(e,.07,.67),u=te(e,.12,.76),d=te(e,.21,.91),p=.012*t*Math.pow(Math.sin(Math.PI*te(e,.68,1.06)),2),m=r.pelvis.clone().addScaledVector(Dn,.22*t*(.7*c+.3*h));m.y+=(.025*t-r.pelvis.y)*c-p,kn.setFromAxisAngle(Ve,1.55*h),et.setFromAxisAngle(Ve,1.62*u),Ji.setFromAxisAngle(Ve,1.6*d);const b=f=>a.get(f);for(const f of n.order){const w=Mi(r.names[f]),v=n.parents[f];let E;if(w==="root"||w==="pelvis"||w==="lumbar"||/^hip/.test(w))o[f].copy(kn);else if(w===n.core||w==="chest"||w==="neck")o[f].copy(et);else if(/^neck\d+$/.test(w)){const T=Number(w.slice(4));E=1.62*te(e,.12+T*.012,.76+T*.022)}else if(/^head\d+$/.test(w)){const T=Number(w.slice(4));E=1.6*te(e,.21+T*.015,.91+T*.014)}else if(w==="head")o[f].copy(Ji);else if(/^petal\d+$/.test(w)){const T=Number(w.slice(5));E=1.62*te(e,.1+T*.02,.8+T*.025)}else if(/^shoulder/.test(w))E=1.62*te(e,.16,.85);else if(/^elbow/.test(w))E=1.66*te(e,.22,.94);else if(/^hand[LR]$/.test(w))E=1.64*te(e,.29,1.03);else if(/^spine\d+$/.test(w)){const T=Number(w.slice(5));E=1.58*te(e,.06+T*.023,.67+T*.035)}else w==="palm"?E=1.62*te(e,.17,.84):/^finger\d+$/.test(w)?E=1.64*te(e,.23,.95):/^fingerTip\d+$/.test(w)||w==="thumb"?E=1.63*te(e,.28,1.03):/^column/.test(w)?E=1.59*te(e,.1+(w.endsWith("R")?.035:0),.83):/^lobe/.test(w)?(Vt.setFromAxisAngle(Hn.set(0,0,1),(w.endsWith("L")?1:-1)*.22*te(e,.09,.68)),o[f].copy(et).multiply(Vt)):w==="seam"?o[f].copy(et):o[f].copy(v>=0?o[v]:kn);E!==void 0&&o[f].setFromAxisAngle(Ve,E);const y=v>=0?i[v]:r.pelvis,M=v>=0?s[v]:m,z=/^lobe[LR]$/.test(w)?o[f]:v>=0?o[v]:kn;s[f].copy(i[f]).sub(y).applyQuaternion(z).add(M)}for(const f of n.legs){const w=b(`hip${f}`),v=b(`knee${f}`),E=b(`foot${f}`),y=(f.includes("Back")?.035:0)+(f.startsWith("R")?.025:0),M=te(e,.18+y,.69+y);an.copy(i[E]).lerp(s[E],M),an.y=Math.max(i[E].y,an.y),Ea(i[w],i[v],i[E],s[w],an,r.direction==="forward"?te(e,.24,.65):te(e,.025,.34),Xt),Ta(s[w],an,i[w].distanceTo(i[v]),i[v].distanceTo(i[E]),Xt,s[v],s[E]),g(w,v),g(v,E),o[E].identity().slerp(kn,M*.85)}for(let f=0;f<s.length;f++)r.transforms[f].compose(s[f],o[f],Ma),Hn.copy(i[f]).applyQuaternion(o[f]),r.transforms[f].setPosition(s[f].x-Hn.x,s[f].y-Hn.y,s[f].z-Hn.z);return r.transforms;function g(f,w){Ee.copy(i[w]).sub(i[f]).normalize(),pn.copy(s[w]).sub(s[f]).normalize(),Zt.crossVectors(vn,Wt).normalize(),Qt.crossVectors(yi,Xt).normalize(),es.crossVectors(Zt,Ee).normalize(),ns.crossVectors(Qt,pn).normalize(),ts.makeBasis(Ee,es,Zt),is.makeBasis(pn,ns,Qt),ss.setFromRotationMatrix(ts).invert(),Vt.setFromRotationMatrix(is),o[f].copy(Vt).multiply(ss).normalize()}}function P0(r){const e=new Map,n=new Map,t=r.clone();return za(r,t,function(i,s){e.set(s,i),n.set(i,s)}),t.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return n.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),t}function za(r,e,n){n(r,e);for(let t=0;t<r.children.length;t++)za(r.children[t],e.children[t],n)}function O0(r,e){const n=P0(r.root);let t;if(n.traverse(l=>{l instanceof $s&&(t=l)}),!t)throw Error("VT1 clone lost skin");const i=new br(n),s={};for(const l of r.clips){const c=l.clone();["aim","release","hit"].includes(c.name)&&wr.makeClipAdditive(c,0,c);const h=i.clipAction(c);h.setLoop(yr,1/0).play(),h.enabled=!0,h.setEffectiveWeight(0),s[c.name]=h}const o=t.geometry.getAttribute("position"),a=[];for(let l=0;l<o.count;l++)o.getY(l)<.1&&a.push(l);return{root:n,mesh:t,mixer:i,actions:s,distance:0,lastX:e.x,lastZ:e.z,lastTime:-1,lastRelease:-100,lastHit:-100,lastBorn:-1,lastProjectileId:-1,feet:a,groundOffset:0,frozen:!1,disposed:!1}}function Aa(r,e,n){e>r.lastProjectileId&&n>=r.lastBorn&&(r.lastProjectileId=e,r.lastBorn=n,r.lastRelease=n)}const ri=(r,e=0,n=1)=>Math.max(e,Math.min(n,r)),Pt=new _;function Ra(r,e,n,t,i=null){if(r.disposed)throw Error("VT1 pose already disposed");if(i!==null){r.lastTime<0&&Ra(r,e,{...n,time:i},t,null);const g=new ie().makeScale(e.radius/.24,e.neural.height/1.8,e.radius/.24),f=g.clone().invert();r.deathWorld??=r.mesh.skeleton.bones.map(y=>y.matrixWorld.clone()),r.weightedDeath??=ka(r.mesh.skeleton.bones.map(y=>y.name),r.deathWorld.map(y=>y.clone().premultiply(g)),e.neural.height,e.id);const w=Sa(r.weightedDeath,n.time-i);for(let y=0;y<r.mesh.skeleton.bones.length;y++)r.mesh.skeleton.bones[y].matrixWorld.copy(f).multiply(w[y]).multiply(g).multiply(r.deathWorld[y]);r.mesh.skeleton.update();let v=1/0;const E=r.mesh.geometry.getAttribute("position");for(let y=0;y<E.count;y++)Pt.fromBufferAttribute(E,y),r.mesh.applyBoneTransform(y,Pt),v=Math.min(v,Pt.y);r.groundOffset=Number.isFinite(v)?-v:0;return}const s=!!e.stasis&&n.time<Math.max(e.stasis.until,e.stasis.thawUntil);if(i===null&&s&&r.lastTime>=0){r.lastTime=n.time,r.lastX=e.x,r.lastZ=e.z,r.frozen=!0;return}const o=r.lastTime<0?0:Math.max(0,Math.min(.12,n.time-r.lastTime)),a=Math.hypot(e.x-r.lastX,e.z-r.lastZ);r.lastTime>=0&&!r.frozen&&(r.distance+=Math.min(a,.6));const l=o>0?a/o:Math.hypot(e.neural?.vx??0,e.neural?.vz??0);r.lastTime=n.time,r.lastX=e.x,r.lastZ=e.z,r.frozen=!1;for(const g of n.projectiles)g.neural&&g.ownerId===e.id&&g.bornAt!==void 0&&Aa(r,g.id,g.bornAt);const c=(g,f,w)=>{const v=r.actions[g];v.enabled=!0,v.setEffectiveWeight(w),v.time=Math.max(0,Math.min(v.getClip().duration-1e-7,f*v.getClip().duration))},h=g=>(g%1+1)%1,u=ri(l/.8),d=ri(e.neural?.tell??0),p=(Math.imul(e.id+7,1664525)>>>0)%1009/1009;if(i!==null){for(const g of Object.values(r.actions))g.setEffectiveWeight(0);c("death",ri((n.time-i)/xe.capacity.remainsSeconds),1)}else{c("death",0,0),c("idle",h(e.age/2.4+p),1-u),c("walk",h(r.distance/.55+p),u),c("aim",d,d*.75);const g=n.time-r.lastRelease,f=n.time-r.lastHit;c("release",ri(g/.22),g>=0&&g<.22?(1-g/.22)*(t?.72:1):0),c("hit",ri(f/.2),f>=0&&f<.2?(1-f/.2)*.7:0)}r.mixer.update(0),r.root.updateMatrixWorld(!0),r.mesh.skeleton.update();let m=1/0;const b=r.mesh.geometry.getAttribute("position");for(const g of r.feet)Pt.fromBufferAttribute(b,g),r.mesh.applyBoneTransform(g,Pt),m=Math.min(m,Pt.y);r.groundOffset=Number.isFinite(m)?-m:0}function N0(r,e,n){if(n){const t=Math.hypot(r.x,r.z),i=xe.body.radius*xe.body.maxRadius;t>i&&(r.x*=i/t,r.z*=i/t),r.y=Math.max(0,Math.min(xe.body.height*xe.body.maxTop,r.y)),e>=xe.body.height*xe.body.headLow&&(r.y=Math.max(xe.body.height*xe.body.headLow,Math.min(xe.body.height*xe.body.headHigh,r.y)))}return r}function Ot(r){r.disposed||(r.disposed=!0,r.mixer.stopAllAction(),r.mixer.uncacheRoot(r.root),r.weightedDeath=void 0,r.deathWorld=void 0,r.root.clear())}const Nt=new we,_o=new ie,Oi=new ie,mt=new _,Io=new V(16777215),F0=new V(10809343);class D0{constructor(e,n){this.asset=n,this.root.name="VT1-authored-Sideways-Compliment",e.add(this.root),this.geometry=n.mesh.geometry.clone(),this.liveAttribute=new Xi(new Float32Array(144),1),this.geometry.setAttribute("vt1Live",this.liveAttribute),this.paletteData=new Float32Array(768*144),this.palette=new zi(this.paletteData,192,144,Ai,Vi),this.palette.minFilter=this.palette.magFilter=Ti,this.palette.generateMipmaps=!1,this.palette.needsUpdate=!0,this.material=n.material.clone(),Object.assign(this.material,{defines:{USE_SKINNING:""}}),this.material.onBeforeCompile=t=>{t.uniforms.vt1BonePalette={value:this.palette},t.uniforms.bindMatrix={value:n.mesh.bindMatrix},t.uniforms.bindMatrixInverse={value:n.mesh.bindMatrixInverse},t.vertexShader=t.vertexShader.replace("#include <skinning_pars_vertex>",`uniform mat4 bindMatrix; uniform mat4 bindMatrixInverse; uniform highp sampler2D vt1BonePalette; attribute float vt1Live;
mat4 getBoneMatrix(const in float i){int x=int(i)*4;int y=gl_InstanceID;return mat4(texelFetch(vt1BonePalette,ivec2(x,y),0),texelFetch(vt1BonePalette,ivec2(x+1,y),0),texelFetch(vt1BonePalette,ivec2(x+2,y),0),texelFetch(vt1BonePalette,ivec2(x+3,y),0));}`),t.vertexShader=t.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
if(vt1Live>0.5){float r=length(transformed.xz);if(r>0.2328)transformed.xz*=0.2328/r;transformed.y=clamp(transformed.y,0.0,1.791);if(position.y>=1.305)transformed.y=clamp(transformed.y,1.305,1.7856);}`)},this.material.customProgramCacheKey=()=>"rainbow-vt1-instanced-skin-weighted-v03",this.mesh=new X(this.geometry,this.material,144),this.mesh.name="VT1-one-draw-deforming-crowd",this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(le),this.root.add(this.mesh)}asset;root=new W;mesh;palette;paletteData;geometry;material;liveAttribute;records=new Map;remains=[];attempt=-1;stage=-1;lastTime=-1;cursor=0;reduced=!1;disposed=!1;count=0;bases=new Map;lastRows=[];record(e){let n=this.records.get(e.id);return n||(n={enemy:structuredClone(e),pose:O0(this.asset,e),deadAt:null},this.records.set(e.id,n)),n.enemy=structuredClone(e),n}setReduced(e){this.reduced=e,this.pruneRemains()}pruneRemains(){const e=this.reduced?4:16;for(;this.remains.length>e;)Ot(this.remains.shift().pose)}reset(){for(const e of this.records.values())Ot(e.pose);for(const e of this.remains)Ot(e.pose);this.records.clear(),this.remains=[],this.attempt=this.stage=-1,this.lastTime=-1,this.cursor=0,this.count=0,this.mesh.count=0,this.bases.clear(),this.lastRows=[]}render(e,n=!0,t){if(this.mesh.count=0,this.count=0,this.bases.clear(),this.lastRows=[],this.root.visible=n&&!this.disposed,this.disposed)return;if((this.attempt!==e.attemptId||this.stage!==e.stage||e.time<this.lastTime)&&(this.reset(),this.attempt=e.attemptId,this.stage=e.stage),this.lastTime=e.time,e.phase==="dead"||e.phase==="complete"){this.reset(),this.cursor=e.lifelikeEvents?.serial??0;return}if(!n)return;for(const s of e.enemies)s.sourceId==="flank_drone"&&s.neural&&s.health>0&&this.record(s);for(const s of Ws(e,this.cursor)){if(this.cursor=Math.max(this.cursor,s.id),s.attemptId!==e.attemptId)continue;if(s.kind==="projectile"){if(s.allegiance==="hostile"&&s.ownerId!==void 0&&s.bornAt!==void 0){const a=this.records.get(s.ownerId);a&&Aa(a.pose,s.projectileId,s.bornAt)}continue}if(s.sourceId!=="flank_drone")continue;const o=this.record(s.snapshot);s.kind==="hit"&&(o.pose.lastHit=s.time),s.kind==="removal"&&(this.records.delete(s.targetId),s.reason==="killed"&&e.time-s.time<1.2?(o.deadAt=s.time,this.remains.push(o),this.pruneRemains()):Ot(o.pose))}const i=new Set;for(const s of e.enemies)s.sourceId!=="flank_drone"||!s.neural||s.health<=0||this.count>=128||(i.add(s.id),this.draw(this.record(s),e),this.count++);for(const[s,o]of this.records)i.has(s)||(Ot(o.pose),this.records.delete(s));this.remains=this.remains.filter(s=>{const o=s.deadAt!==null&&e.time>=s.deadAt&&e.time-s.deadAt<1.2&&(!t||t.has(s.enemy.id));return o||Ot(s.pose),o}),this.pruneRemains();for(const s of this.remains)this.draw(s,e);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.liveAttribute.needsUpdate=!0,this.palette.needsUpdate=!0}draw(e,n){const t=this.mesh.count++;if(t>=144)throw Error("VT1 capacity exceeded");const i=e.enemy;Ra(e.pose,i,n,this.reduced,e.deadAt);const s=e.pose.mesh.skeleton.boneMatrices;_o.makeTranslation(0,e.pose.groundOffset,0);for(let a=0;a<48;a++)a<e.pose.mesh.skeleton.bones.length?(Oi.fromArray(s,a*16),Oi.premultiply(_o)):Oi.identity(),Oi.toArray(this.paletteData,t*48*16+a*16);Nt.position.set(i.x,Me(n),i.z),Nt.rotation.set(0,i.heading,0),Nt.scale.set(i.radius/.24,i.neural.height/1.8,i.radius/.24),Nt.updateMatrix(),this.mesh.setMatrixAt(t,Nt.matrix),e.deadAt===null&&this.bases.set(i.id,Nt.matrix.toArray());const o=(i.flash>0?Io:i.stasis&&n.time<i.stasis.until?F0:Io).clone();e.deadAt!==null&&o.multiplyScalar(Math.max(.35,1-(n.time-e.deadAt)/1.2)),this.mesh.setColorAt(t,o),this.liveAttribute.setX(t,e.deadAt===null?1:0),this.lastRows.push({id:i.id,row:t,dead:e.deadAt!==null,pose:e.pose})}poseStatus(e){const n=this.records.get(e)?.pose;return n?{lastRelease:n.lastRelease,lastProjectileId:n.lastProjectileId,frozen:n.frozen}:null}actorBase(e){const n=this.bases.get(e);return n?[...n]:null}apertureIntersection(e,n,t){const i=this.lastRows.find(d=>d.id===e&&!d.dead),s=this.bases.get(e);if(!i||!s)return null;const o=i.pose.mesh.skeleton.bones.findIndex(d=>d.name==="chest");if(o<0)throw Error("VT1 chest aperture bone missing");const l=new ie().fromArray(i.pose.mesh.skeleton.boneMatrices,o*16).premultiply(new ie().makeTranslation(0,i.pose.groundOffset,0)).premultiply(new ie().fromArray(s)).clone().invert(),c=new _(n.x,n.y,n.z).applyMatrix4(l),h=new _(t.x,t.y,t.z).transformDirection(l);if(Math.abs(h.z)<1e-8)return{forward:!1,ellipse:1/0};const u=(.075-c.z)/h.z;return c.addScaledVector(h,u),{forward:u>=0,ellipse:Math.hypot(c.x/.017,(c.y-1.152)/.024),nativeIntersection:c.toArray()}}vertices(e,n=!0){const t=this.lastRows.find(a=>a.id===e);if(!t)return null;const i=t.pose.mesh.geometry,s=i.getAttribute("position"),o=[];for(let a=0;a<s.count;a++)mt.fromBufferAttribute(s,a),t.pose.mesh.applyBoneTransform(a,mt),mt.y+=t.pose.groundOffset,n&&N0(mt,s.getY(a),!t.dead),o.push(mt.x,mt.y,mt.z);return o}stats(){return{profile:xe.id,identity:"flank_drone",actors:this.count,remains:this.remains.length,drawGroups:1,bones:this.asset.mesh.skeleton.bones.length,triangles:(this.geometry.index?.count??this.geometry.getAttribute("position").count)/3,paletteBytes:this.paletteData.byteLength,capacity:128,reduced:this.reduced,disposed:this.disposed,ownerQA:"PENDING",measuredPerformance:null}}dispose(){this.disposed||(this.reset(),this.disposed=!0,this.mesh.dispose(),this.geometry.dispose(),this.material.dispose(),this.palette.dispose(),this.root.removeFromParent())}}function H0(r){if(!r||typeof r!="object")return!1;const e=r;if(e.schema!=="rainbow-g2-motion-v1"||e.rootTranslation!==!1||!e.curves||!e.hero)return!1;for(const n of["support","weight","settle","turn"]){const t=e.curves[n];if(!Array.isArray(t)||t.length<3||t.length>16||!Array.isArray(t[0])||t[0][0]!==0||!Array.isArray(t.at(-1))||t.at(-1)?.[0]!==1)return!1;for(let i=0;i<t.length;i++)if(!Array.isArray(t[i])||t[i].length!==2||!t[i].every(Number.isFinite)||Math.abs(t[i][1])>1||i>0&&t[i][0]<=t[i-1][0])return!1}for(const n of Kt){const t=e.hero[n];if(!t||![t.stance,t.stride,t.weight,t.secondaryLag].every(Number.isFinite)||t.stance<.5||t.stance>.8||t.stride<.08||t.stride>.2||t.weight<0||t.weight>.02||t.secondaryLag<0||t.secondaryLag>.25)return!1}return Object.keys(e.hero).length===18}function qi(r,e){const n=Math.max(0,Math.min(1,e));let t=1;for(;t<r.length-1&&r[t][0]<n;)t++;const i=r[t-1],s=r[t],o=(n-i[0])/Math.max(1e-8,s[0]-i[0]),a=o*o*(3-2*o);return i[1]+(s[1]-i[1])*a}function G0(r,e,n,t,i,s,o,a,l,c,h,u){const d=r.g2Motion;if(!d)return;const p=d.hero[r.id];if(!p)return;const m=(s/(Math.PI*2)%1+1)%1,b=qi(d.curves.weight,m),g=u?.4:1,f=qi(d.curves.turn,Math.abs(h)),w=(M,z,T,S)=>{const A=r.jointIndex[M];A!==void 0&&(t[A].x+=z,t[A].y+=T,t[A].z+=S)},v=(M,z)=>{const T=r.jointIndex[M];T!==void 0&&(n[T].y+=z)},E=b*p.weight*o*(1-a*.7)*(1-l*.45);v("pelvis",-Math.abs(E)*.32),v("lumbar",-Math.abs(E)*.58),v("chest",-Math.abs(E)),w("pelvis",0,Math.sin(s)*.018*o,Math.cos(s)*.013*o),w("lumbar",0,-Math.sin(s)*.014*o,-Math.cos(s)*.009*o),w("chest",Math.sin(s*2-p.secondaryLag)*.01*o,-Math.sin(s)*.023*o,-h*.009),w("head",-Math.sin(s*2-p.secondaryLag)*.004*o,Math.sign(h)*f*.021,0);const y=qi(d.curves.settle,c);for(const M of[-1,1]){const z=M<0?"L":"R",T=Math.sin(s+(M<0?0:Math.PI));w(`shoulder${z}`,T*.028*o,h*.01,-M*a*.018),w(`elbow${z}`,-T*.032*o+y*.018,0,0),w(`hand${z}`,T*.018*o-y*.016,0,M*Math.sin(i*1.1+p.secondaryLag)*.007*g)}w("headJaw",Math.sin(i*1.2-p.secondaryLag)*.017*g+y*.012,0,0)}function j0(r,e,n){r.colorSpace=ge,e.colorSpace=Zi,n.colorSpace=Zi;for(const i of[r,e,n])i.flipY=!1,i.wrapS=i.wrapT=Bs,i.generateMipmaps=!0,i.minFilter=ot,i.magFilter=Sn,i.needsUpdate=!0;return new U({name:"RK_G2_Shared_Atlas",map:r,normalMap:e,normalScale:new Tn(.55,.55),roughnessMap:n,metalnessMap:n,roughness:1,metalness:1,envMapIntensity:.62})}const B0=Object.freeze({crowdRGBAWithMipmaps:16777216,bossRGBAWithMipmaps:12582912,totalRGBAWithMipmaps:29360128,measuredGPUMemory:null});class $0{maps=[];pending=null;disposed=!1;load(e){return this.disposed?Promise.reject(Error("G2 boss materials disposed")):this.pending??=this.loadMaps(e).catch(n=>{throw this.maps.forEach(t=>t.dispose()),this.maps=[],this.pending=null,n})}async loadMaps(e){for(const n of["basecolor","normal","orm"]){const t=await st(e,`/assets/graphics-g2/boss-${n}.png`);if(this.disposed)throw t.dispose(),Error("G2 boss materials disposed during load");t.colorSpace=n==="basecolor"?ge:Zi,t.flipY=!1,t.wrapS=t.wrapT=Bs,t.generateMipmaps=!0,t.minFilter=ot,t.needsUpdate=!0,this.maps.push(t)}}apply(e){if(this.maps.length!==3)throw Error("G2 boss atlas is not ready");e.traverse(n=>{if(n instanceof P)for(const t of Array.isArray(n.material)?n.material:[n.material])!(t instanceof U)||/Emission|Fractal|Deep_Recess|Hair/.test(t.name)||(t.normalMap=this.maps[1],t.normalScale.set(/Skin|Face/.test(t.name)?.2:.42,/Skin|Face/.test(t.name)?.2:.42),/Woven|Pixel_Shell/.test(t.name)&&(t.roughnessMap=this.maps[2],t.roughness=.78,t.metalness=Math.max(t.metalness,.12),t.envMapIntensity=.59),/Woven/.test(t.name)&&!t.map&&(t.map=this.maps[0],t.color.setHex(10725053)),t.needsUpdate=!0)})}owns(e){return this.maps.includes(e)}stats(){return{textures:this.maps.length,sharedBetweenBosses:!0,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.maps.forEach(e=>e.dispose()),this.maps=[])}}function _a(r){!(r instanceof U)||/Emission|Energy|Fractal/i.test(r.name)||(/Black|Graphite|Metal|Shell|Body/i.test(r.name)&&(r.roughness=Math.max(.32,Math.min(.76,r.roughness)),r.envMapIntensity=.68),/White|Porcelain|Ceramic/i.test(r.name)&&(r.roughness=.43,r.envMapIntensity=.61),r.needsUpdate=!0)}const U0=["g2_shell","g2_limb","g2_extremity","g2_head","g2_jaw","g2_code_spine","g2_code_ribbon","g2_code_zero","g2_code_one"];class V0{constructor(e){this.assets=e}assets;model=null;textures=[];material=null;kit=null;disposed=!1;pending=null;load(){return this.disposed?Promise.reject(new Error("G2 art loader disposed")):this.pending??=this.loadKit().catch(e=>{throw this.release(),this.pending=null,e})}async loadKit(){const e=await it(this.assets,"/assets/graphics-g2/crowd-kit.glb");if(this.disposed)throw qe(e),Error("G2 art disposed during load");this.model=e,e.updateMatrixWorld(!0);const n=new Map;for(const i of U0){const s=e.getObjectByName(i);if(!(s instanceof P)||n.has(i))throw Error(`G2 required authored form missing: ${i}`);const o=s.geometry;for(const l of["position","normal","uv"])if(!o.getAttribute(l))throw Error(`G2 ${i} lacks ${l}`);const a=o.getAttribute("position");if(a.count>4096)throw Error(`G2 ${i} vertex budget exceeded`);for(const l of a.array)if(!Number.isFinite(l))throw Error(`G2 ${i} contains a nonfinite vertex`);o.applyMatrix4(s.matrixWorld),o.computeBoundingBox(),o.computeBoundingSphere(),n.set(i,o)}for(const i of["basecolor","normal","orm"]){const s=await st(this.assets,`/assets/graphics-g2/crowd-${i}.png`);if(this.disposed)throw s.dispose(),Error("G2 art disposed during texture load");this.textures.push(s);const o=s.image;if(o?.width!==1024||o?.height!==1024)throw Error(`G2 ${i} atlas must be 1024 square`)}this.material=j0(this.textures[0],this.textures[1],this.textures[2]);const t=await this.assets.load("G2 motion library",async i=>{const s=await fetch(Tt("/assets/graphics-g2/crowd-motion.json"),{signal:i});if(!s.ok)throw Error("G2 motion library unavailable");const o=await s.json();if(!H0(o))throw Error("G2 motion library invalid");return o},()=>{});if(this.disposed)throw Error("G2 art disposed during motion load");return this.kit={geometry:n,material:this.material,motion:t}}release(){this.model&&qe(this.model),this.model=null,this.material?.dispose(),this.material=null,this.textures.forEach(e=>e.dispose()),this.textures=[],this.kit=null}stats(){return{loaded:!!this.kit,forms:this.kit?.geometry.size??0,textures:this.textures.length,storage:B0,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.release())}}const Ei={name_glitch_shade:9991381,speaker_wraith:8441821,loop_ghost:11705301,decay_mote:12300012,double:9687771,dual:15777143,cell_blob:11838185,reach_shadow:14462332,drift_hound:10068695};function Ia(r,e,n,t,i=.854,s=!0){const o=r.joint("head","root",[0,i,.16],[.07,.11,.055]);if(s){r.ell(o,"bone",O.shell,[0,0,-.085],[n*.56,.103,t*.85],{region:"head"});for(const m of[-1,1])r.ell(o,"code",Ei[r.id],[m*n*.46,-.004,-.017],[n*.069,.081,.095],{region:"head"});r.wear(o,[-n*.32,.056,t*.57],[.012,.05,.012],"head")}if(!e)return o;e.updateMatrixWorld(!0);const a=new Nn().setFromObject(e),l=a.getSize(new _),c=a.getCenter(new _);if(![l.x,l.y,l.z].every(Number.isFinite)||l.y<=0||Math.max(l.x,l.z)<=0)throw Error("Invalid retained mask geometry");const h=n/Math.max(l.x,1e-8),u=.192/l.y,d=t/Math.max(l.z,1e-8),p=new ie().makeScale(h,u,d);return p.setPosition(-c.x*h,-c.y*u,-c.z*d+.06),e.traverse(m=>{if(!(m instanceof P))return;const b=m.geometry.clone().applyMatrix4(m.matrixWorld),g=Array.isArray(m.material)?m.material:[m.material];if(g.length===1){r.source(o,b,g[0],p.clone());return}const f=b.index?b.toNonIndexed():b;for(const w of f.groups){const v=new Ge;for(const E of Object.keys(f.attributes)){const y=f.getAttribute(E);v.setAttribute(E,new rn(y.array.slice(w.start*y.itemSize,(w.start+w.count)*y.itemSize),y.itemSize,y.normalized))}r.source(o,v,g[w.materialIndex??0],p.clone())}f!==b&&f.dispose(),b.dispose()}),o}function On(r,e,n,t=.07,i=O.code,s=!1){s?r.ring(e,"code",i,n,[t,.034,.045],.17):r.box(e,"code",i,n,[t*.26,.067,.052])}function Xn(r,e,n,t=.33,i=0){const s=r.joint(e,"root",n,[.13,.11,.11]);r.link(s,"bone",O.shell,[0,0,0],[i,-t,0],.05,.031);for(let o=0;o<4;o++)On(r,s,[i*o/3,-t*o/3,.045],.046,Ei[r.id],o%2===0);return s}function Lo(r,e=.43,n=.29,t=[-.27,.27]){for(const i of t)for(const s of[-1,1]){const o=`${s<0?"L":"R"}${i<0?"Back":"Front"}`,a=(n-.025)/2,l=r.joint(`hip${o}`,"root",[s*e,n,i],[.7,.1,.1]),c=r.joint(`knee${o}`,l,[0,-a,0],[1.1,.06,.06]),h=r.joint(`foot${o}`,c,[0,-a,0],[.68,.07,.08]);r.ell(l,"bone",O.shell,[0,0,0],[.155,.079,.15]),r.link(l,"bone",O.shell,[0,0,0],[0,-a,0],.07,.05),r.ell(c,"code",Ei[r.id],[0,0,0],[.073,.032,.075]),r.link(c,"bone",O.shell,[0,0,0],[0,-a,0],.045,.034),r.ell(h,"code",Ei[r.id],[0,0,.045],[.136,.025,.166])}}function W0(r,e,n){const t=Ei[e];if(t===void 0)throw Error(`Not a mask ${e}`);switch(Ia(r,n,e==="decay_mote"?.63:e==="drift_hound"||e==="speaker_wraith"?.8:.72,e==="drift_hound"?.44:.28),e){case"name_glitch_shade":{for(let i=0;i<6;i++){const s=.15+i*.099,o=Math.sin(i*.9)*.18,a=r.joint(`spine${i}`,"root",[o,s,-.045],[.11,.12,.11]);r.ell(a,"bone",O.shell,[0,0,0],[.19,.068,.19]);for(const l of[-1,1])r.link(a,"code",t,[l*.11,0,0],[l*(.34+.04*Math.sin(i)),.008,-.1],.036,.025),On(r,a,[l*.36,0,-.09],.055,t,i%2===0)}Xn(r,"strandL",[-.23,.34,-.13],.29,-.06),Xn(r,"strandR",[.26,.3,-.1],.25,.05);break}case"speaker_wraith":{r.joint("chest","root",[0,.46,0],[.075,.06,.07]),r.box("chest","bone",O.shell,[0,0,-.075],[1.04,.44,.35]),r.ell("chest","bone",O.shell,[0,0,.09],[.55,.23,.28]),r.ell("chest","cavity",O.ink,[0,.01,.34],[.39,.16,.048]),r.joint("diaphragm","chest",[0,.01,.33],[.06,.06,.06]);for(let i=0;i<3;i++)r.ring("diaphragm","code",i%2?t:O.shell,[0,0,i*.019],[.3-i*.065,.12-i*.024,.08],.12);for(const i of[-1,1]){const s=r.joint(`support${i<0?"L":"R"}`,"root",[i*.53,.45,0],[.075,.07,.05]);r.ell(s,"bone",O.shell,[0,0,0],[.095,.25,.17]);for(let o=0;o<4;o++)On(r,s,[i*.026,-.16+o*.1,.17],.056,t,o%2===0)}Lo(r,.35,.22,[0]),r.wear("chest",[-.26,.14,.33],[.025,.065,.01]);break}case"loop_ghost":{r.joint("loop","root",[0,.44,-.045],[.08,.12,.075]),r.ring("loop","bone",O.shell,[0,0,0],[.43,.32,.36],.16),r.ring("loop","code",t,[0,0,.14],[.43,.32,.06],.038);for(let i=0;i<5;i++)On(r,"loop",[Math.sin(i*1.5)*.32,Math.cos(i*1.5)*.27,.26],.041,t,i%2===0);Xn(r,"strandL",[-.2,.2,0],.16,-.12),Xn(r,"strandR",[.17,.22,0],.18,.12),Xn(r,"strandBack",[0,.2,-.19],.17);break}case"decay_mote":{r.joint("diamond","root",[0,.46,-.04],[.11,.14,.1]),r.add("diamond","bone",new Et(1,1),O.shell,[0,0,0],[.52,.27,.42]);for(let i=0;i<4;i++){const s=i*Math.PI/2,o=r.joint(`flutter${i}`,"diamond",[Math.cos(s)*.43,Math.sin(s)*.21,0],[.16,.16,.13]);r.ell(o,"code",t,[Math.cos(s)*.05,Math.sin(s)*.032,0],[.1,.046,.08]),On(r,o,[0,0,.066],.045,t,i%2===0)}r.wear("diamond",[-.19,.11,.27],[.022,.071,.01]);break}case"double":{r.joint("bridge","root",[0,.58,-.08],[.05,.08,.05]),r.link("bridge","bone",O.shell,[-.48,0,0],[.48,0,0],.065);for(const i of[-1,1]){const s=r.joint(`column${i<0?"L":"R"}`,"root",[i*.43,.42,.02],[.11,.11,.085]);r.ell(s,"bone",O.shell,[0,0,0],[.19,.3,.24]),r.ell(s,"code",t,[i*.13,0,.15],[.04,.24,.068]);for(let o=0;o<5;o++)On(r,s,[-i*.03,-.19+o*.093,.25],.065,t,o%2===0);r.wear(s,[-i*.08,.17,.22],[.02,.056,.01])}Xn(r,"strandL",[-.43,.16,.02],.12,-.03),Xn(r,"strandR",[.43,.16,.02],.12,.03);break}case"dual":{r.joint("dart","root",[0,.4,-.01],[.12,.1,.11]),r.add("dart","bone",new kt(1,1,12,1),O.shell,[0,0,0],[.39,.61,.49],{rotation:[Math.PI,0,0]});for(const i of[-1,1]){const s=r.joint(`fin${i<0?"L":"R"}`,"dart",[i*.33,.09,0],[.14,.11,.11]);r.ell(s,"code",t,[i*.06,-.025,0],[.15,.11,.09])}for(const i of[-1,1])r.box("head","metal",t,[0,-.039,.258],[.4,.013,.03],{region:"head",rotation:[0,0,i*.18]});break}case"cell_blob":{for(const i of[-1,1]){const s=r.joint(`lobe${i<0?"L":"R"}`,"root",[i*.34,.36,-.02],[.065,.09,.07]);r.ell(s,"bone",O.shell,[0,0,0],[.39,.3,.48]),r.ring(s,"code",t,[0,0,.31],[.29,.23,.17],.09);for(let o=0;o<3;o++)On(r,s,[(o-1)*.12,.1,.43],.049,t,o%2===0);r.wear(s,[-i*.16,.13,.4],[.025,.075,.01])}r.joint("seam","root",[0,.44,.43],[.05,.05,.05]),r.ell("seam","code",15457783,[0,0,0],[.037,.32,.039],{parentOnly:!0}),r.box("seam","cavity",O.ink,[.044,0,.025],[.017,.55,.024],{parentOnly:!0});break}case"reach_shadow":{r.joint("forearm","root",[0,.3,-.2],[.1,.12,.09]),r.ell("forearm","bone",O.shell,[0,0,0],[.21,.25,.2]),r.joint("palm","root",[0,.44,.07],[.13,.11,.11]),r.ell("palm","bone",13153181,[0,0,0],[.37,.14,.19]),r.ell("palm","code",t,[0,.008,.181],[.22,.075,.025]);for(let i=0;i<4;i++){const s=r.joint(`finger${i}`,"palm",[(i-1.5)*.18,.1,.012],[.35,.09,.1]);r.ell(s,"bone",13153181,[0,.065,0],[.069,.083,.066]);const o=r.joint(`fingerTip${i}`,s,[0,.12,0],[.35,.09,.1]);r.ell(o,"bone",13153181,[0,.035,.007],[.061,.052,.062]),On(r,s,[0,.061,.063],.034,t)}r.joint("thumb","palm",[-.35,-.025,.01],[.24,.15,.12]),r.ell("thumb","bone",13153181,[-.069,.035,0],[.1,.07,.066]),r.wear("palm",[-.15,.063,.192],[.024,.065,.01]);break}case"drift_hound":{Lo(r,.44,.3),r.joint("chest","root",[0,.43,-.045],[.1,.11,.08]),r.ell("chest","bone",O.shell,[0,0,0],[.48,.16,.55]),r.joint("muzzle","root",[0,.669,.24],[.09,.08,.075]),r.ell("muzzle","bone",O.shell,[0,0,0],[.36,.112,.49]),r.ell("muzzle","code",t,[0,.014,.43],[.23,.045,.042]);for(const i of[-1,1])for(let s=0;s<4;s++)On(r,"chest",[i*.4,-.08+s*.058,.03],.05,t,s%2===0);Xn(r,"tail",[0,.44,-.53],.21,.12),r.wear("chest",[-.25,.095,.36],[.028,.071,.01]);break}default:throw Error(`Unknown B1 mask ${e}`)}}const q0=Object.freeze({signal_echo:{name:"Agreeing Pilgrim",silhouette:"bowed upright figure"},rabbit_glimpse:{name:"Eager Arrow",silhouette:"leaning arrow and twin tabs"},notification_swarm:{name:"Applause Bloom",silhouette:"open five-skull ring"},flank_drone:{name:"Sideways Compliment",silhouette:"asymmetric crescent and outward palm"},chair_knight:{name:"Approval Throne",silhouette:"heavy shrine block on squat feet"},hammer_rabbit:{name:"Clapping Idol",silhouette:"heavy upright U and raised thumbs"},apex_rabbit:{name:"Praise Hound",silhouette:"low four-support wedge and three tabs"},evolution_rabbit:{name:"Coronation Engine",silhouette:"five-face crown fan"},arc_turret:{name:"Ovation Fork",silhouette:"open palms on a narrow fork"}}),os=r=>r in q0,K0=Object.freeze({bone:16769445,pink:15088504,teal:1351581,orange:16747026,gold:16037938,ink:2431529,stone:8876131}),$=K0;class Qs{positions=[];colors=[];add(e,n,t=0,i=0,s=0,o=1,a=1,l=1,c=0,h=0){const u=e.index?e.toNonIndexed():e,d=u.getAttribute("position"),p=new _,m=new V(n),b=new ie().compose(new _(t,i,s),new he().setFromEuler(new We(0,h,c)),new _(o,a,l));for(let g=0;g<d.count;g++)p.fromBufferAttribute(d,g).applyMatrix4(b),this.positions.push(p.x,p.y,p.z),this.colors.push(m.r,m.g,m.b);u!==e&&u.dispose(),e.dispose()}box(e,n,t,i,s,o,a,l=0){this.add(new ve(1,1,1),a,e,n,t,i,s,o,l)}facet(e,n,t,i,s,o,a,l=0){const c=new qs(e.map(([u,d])=>new Tn(u,d))),h=l?new Ks(c,{depth:l,bevelEnabled:!1,steps:1,curveSegments:1}).translate(0,0,-l/2):new vr(c);this.add(h,a,n,t,i,s,o,1)}disc(e,n,t,i,s,o,a=8){this.add(new St(1,a),o,e,n,t,i,s,1)}flower(e,n,t,i,s,o=$.pink){const a=Array.from({length:16},(l,c)=>{const h=c*Math.PI/8,u=c%2?.62:1;return[Math.cos(h)*u,Math.sin(h)*u]});this.facet(a,e,n,t,i,s,o),this.disc(e,n,t+.002,i*.3,s*.3,$.teal,6)}banner(e,n,t,i,s,o){this.facet([[-.5,.5],[.5,.5],[.5,-.34],[.22,-.5],[0,-.25],[-.22,-.5],[-.5,-.34]],e,n,t,i,s,o,.025),this.flower(e,n+.05*s,t+.018,i*.32,s*.22,o===$.teal?$.bone:$.ink),this.box(e,n+s*.37,t+.018,i,.045*s,.008,$.gold)}blossom(e,n,t,i,s){this.add(new zt(1,0),$.orange,e,n,t,i,s,i*.35),this.disc(e,n,t+i*.33,i*.47,s*.5,$.gold,6)}collar(e,n,t,i,s,o=7){for(let a=0;a<o;a++){const l=Math.PI*2*a/o;this.blossom(e+Math.cos(l)*i,n+Math.sin(l)*s,t,i*.32,s*.43)}}skull(e,n,t,i,s){const o=[[-.5,.12],[-.46,.37],[-.28,.5],[.28,.5],[.46,.37],[.5,.12],[.36,-.16],[.3,-.46],[-.3,-.46],[-.36,-.16]];this.facet(o,e,n,t,i,s,$.bone,.13);const a=t+.071;for(const l of[-1,1])this.flower(e+l*i*.235,n+s*.14,a,i*.205,s*.23),this.disc(e+l*i*.235,n+s*.14,a+.003,i*.132,s*.148,$.ink),this.disc(e+l*i*.235,n+s*.14,a+.005,i*.045,s*.052,$.teal,4);this.facet([[0,1],[-1,-1],[1,-1]],e,n-s*.065,a+.003,i*.052,s*.06,$.ink),this.box(e,n-s*.28,a,i*.64,s*.24,.008,$.ink);for(let l=0;l<5;l++)this.box(e+(l-2)*i*.115,n-s*.28,a+.008,i*.077,s*.185,.01,$.bone);this.flower(e,n+s*.365,a,i*.105,s*.1)}hand(e,n,t,i,s,o){if(this.box(e,n,t,i,s,.14,$.bone),o){this.box(e-i*.3,n+s*.68,t,i*.3,s*.68,.13,$.bone);for(let a=0;a<2;a++)this.box(e+i*.1,n+(a-.5)*s*.25,t+.073,i*.65,.008,.008,$.stone)}else{for(let a=0;a<4;a++)this.box(e+(a-1.5)*i*.245,n+s*.7-Math.abs(a-1.5)*s*.08,t,i*.18,s*.55,.12,$.bone);this.box(e-i*.59,n,t,i*.25,s*.45,.12,$.bone,-.5)}this.flower(e,n,t+.08,i*.37,s*.38)}finish(e){const n=new Ge;n.setAttribute("position",new Ce(this.positions,3)),n.setAttribute("color",new Ce(this.colors,3));const t=n.getAttribute("position");let i=1/0,s=-1/0,o=0;for(let l=0;l<t.count;l++)i=Math.min(i,t.getY(l)),s=Math.max(s,t.getY(l)),o=Math.max(o,Math.hypot(t.getX(l),t.getZ(l)));for(let l=0;l<t.count;l++)t.setXYZ(l,t.getX(l)/o,(t.getY(l)-i)/(s-i),t.getZ(l)/o);if(e!==void 0){const l=new Qs;l.disc(0,e,.854,.13,.035,$.bone),l.disc(0,e,.86,.085,.023,$.ink),n.setAttribute("position",new Ce([...Array.from(t.array),...l.positions],3)),n.setAttribute("color",new Ce([...this.colors,...l.colors],3))}n.computeVertexNormals(),n.computeBoundingBox(),n.computeBoundingSphere();const a=new U({vertexColors:!0,roughness:1,metalness:0,flatShading:!0});return a.name="sycophancy-painted-facets",[{geometry:n,material:a}]}}function Y0(r){const e=new Qs,n=(a=.38,l=.08)=>{for(const c of[-1,1])e.box(c*a,l,.05,.25,.13,.38,$.bone),e.box(c*a,l+.1,0,.15,.13,.19,$.teal)},t=(a=0,l=.44,c=.5,h=.28)=>{e.box(a,l,0,c,h,.32,$.teal),e.banner(a,l,.18,c*.8,h*.94,$.pink)},i=(a,l,c,h,u)=>{e.collar(a,l-u*.12,c-.025,h*.57,u*.48),e.skull(a,l,c,h,u)};if(r==="signal_echo"){n(.24);for(const a of[-1,1])e.box(a*.24,.31,-.09,.13,.27,.13,$.bone,a*.09),e.banner(a*.32,.49,.02,.25,.33,a<0?$.teal:$.pink);t(0,.55,.36,.28),i(-.08,.83,.19,.65,.25),e.box(.09,.6,.32,.18,.2,.13,$.bone,-.4),e.box(-.08,.57,.38,.18,.14,.13,$.bone,.4)}if(r==="rabbit_glimpse"){n(.35);for(const a of[-1,1])e.box(a*.29,.3,-a*.12,.14,.28,.13,$.bone,a*.45),e.banner(a*.4,.58,-.04,.44,.23,a<0?$.teal:$.pink);t(.1,.54,.36,.23),i(.15,.72,.28,.59,.2);for(const a of[-1,1])e.box(.15+a*.24,.93,.1,.13,.31,.07,$.bone,-a*.13),e.flower(.15+a*.24,.96,.14,.058,.041,$.orange),e.box(a*.42,.48,.23,.13,.22,.12,$.bone,a*.4)}if(r==="notification_swarm")for(let a=0;a<5;a++){const l=Math.PI/2+a*Math.PI*2/5,c=Math.cos(l)*.68,h=.5+Math.sin(l)*.34;e.blossom(c,h,0,.33,.18),e.skull(c,h,.17,.43,.19)}if(r==="flank_drone"){for(let a=0;a<5;a++){const l=Math.PI*.45+a*Math.PI*.28,c=Math.cos(l)*.66,h=.5+Math.sin(l)*.37;e.banner(c,h,0,.44,.25,a%2?$.teal:$.pink),a%2===0&&e.blossom(c,h,.05,.22,.08)}i(-.42,.57,.22,.54,.22),e.box(.18,.61,.36,.64,.08,.16,$.orange),e.hand(.44,.64,.61,.42,.2,!1)}if(r==="chair_knight"){n(.48),e.box(0,.54,-.03,1.46,.65,.7,$.bone),e.box(0,.62,.34,1.1,.39,.055,$.ink),e.skull(0,.65,.43,.61,.24),e.collar(0,.7,.35,.43,.16);for(const a of[-1,1])e.box(a*.62,.52,.39,.23,.54,.1,$.bone),e.flower(a*.62,.52,.45,.105,.09),e.banner(a*.56,.95,-.07,.32,.27,a<0?$.teal:$.pink),e.box(a*.75,.83,0,.07,.51,.08,$.gold);e.banner(0,.4,.44,.53,.2,$.pink),e.box(0,.81,.39,1.49,.04,.06,$.teal)}if(r==="hammer_rabbit"){n(.43),t(0,.44,.9,.37),i(0,.66,.22,.59,.23);for(const a of[-1,1])e.box(a*.65,.6,0,.3,.36,.32,$.teal),e.banner(a*.65,.59,.18,.29,.31,$.pink),e.collar(a*.65,.81,.03,.19,.055,5),e.hand(a*.65,.88,.08,.36,.18,!0)}if(r==="apex_rabbit"){e.box(0,.43,-.02,1.2,.27,.7,$.teal);for(const a of[-1,1])for(const l of[-.35,.34])e.box(a*.51,.2,l,.2,.33,.16,$.bone,a*-.18),e.box(a*.54,.07,l+.09,.3,.13,.29,$.bone);for(const a of[-1,1])e.banner(a*.46,.49,.31,.4,.27,a<0?$.teal:$.pink),e.blossom(a*.6,.4,.3,.23,.072);i(0,.48,.59,.72,.22);for(let a=-1;a<=1;a++)e.banner(a*.25,.79-Math.abs(a)*.04,0,.18,.42,a===0?$.teal:$.pink)}if(r==="evolution_rabbit"){e.facet([[-1,.22],[-.85,.5],[.85,.5],[1,.22],[.58,-.5],[-.58,-.5]],0,.34,0,1,.47,$.teal,.4);for(let a=-2;a<=2;a++){const l=a*.32,c=.66-Math.abs(a)*.075;e.banner(l,.85-Math.abs(a)*.065,-.12,.21,.36,a%2?$.orange:$.pink),i(l,c,.28,.39,.16),e.banner(l,.36,.35,.3,.3,a%2?$.bone:$.pink)}e.box(0,.49,.39,1.66,.035,.05,$.gold),e.facet([[0,-1],[1,0],[0,1],[-1,0]],0,.105,.16,.24,.11,$.orange)}if(r==="arc_turret"){n(.27),t(0,.35,.3,.32),i(0,.59,.32,.42,.18);for(const a of[-1,1])e.box(a*.49,.59,0,.11,.51,.14,$.teal,a*-.29),e.banner(a*.65,.65,.035,.21,.28,$.pink),e.hand(a*.69,.88,.08,.32,.17,!1),e.box(a*.69,.77,.08,.31,.035,.16,$.orange)}const s=fa[r].height,o=["flank_drone","evolution_rabbit","arc_turret"].includes(r);return e.finish(o?Math.min(1.35,s*.64)/s:void 0)}function X0(r,e,n){const t=e==="hammer_rabbit",i=e==="rabbit_glimpse",s=e==="flank_drone";if(!t&&!i&&!s)throw Error(`G2 hero rollout gate does not include ${e}`);const o=(f,w,v,E,y="body",M=16777215,z=[0,0,0])=>r.authored(f,n.geometry.get(w),n.material,M,v,E,{region:y,rotation:z}),a=(f,w,v,E,y=16777215)=>r.authoredLink(f,n.geometry.get("g2_limb"),n.material,y,w,v,E),l=t?.39:i?.25:.31,c=t?.35:i?.36:.26,h=t||i?.55:.49,u=s?-.15:0;r.joint("pelvis","root",[0,c+.017,-.015],[.085,.09,.07]),o("pelvis","g2_shell",[0,0,0],[l*.79,.075,t?.22:.16]),r.joint("chest","root",[u,h,s?-.07:0],[.13,.13,.09]),o("chest","g2_shell",[0,0,0],[l,t?.16:.15,t?.265:.21],"body",t?16773852:i?15007734:15268095),r.joint("lumbar","root",[u*.35,(c+h)*.5,0],[.07,.08,.05]),o("lumbar","g2_limb",[0,0,0],[l*.6,(h-c)*.56,.17]);for(const f of[-1,1]){const w=f<0?"L":"R",v=f*(t?.3:i?.27:.235),E=(c-.04)/2,y=r.joint(`hip${w}`,"pelvis",[v,-.017,.015],[.68,.13,.12]),M=r.joint(`knee${w}`,y,[0,-E,0],[1.08,.07,.07]),z=r.joint(`foot${w}`,M,[0,-E,0],[.69,.09,.1]);o(y,"g2_limb",[0,-E*.52,0],[t?.105:.08,E*.64,.082]),o(M,"g2_limb",[0,-E*.52,.005],[t?.075:.054,E*.63,.06]),o(z,"g2_extremity",[0,0,.086],[t?.14:.12,.032,t?.23:.22],"body",16777215)}const d=s?-.39:i?.045:0,p=t?.835:i?.826:.844,m=t?.08:i?.19:.13,b=r.joint("head","root",[d,p,m],[.1,.13,.1]);o(b,"g2_head",[0,0,0],[t?.36:i?.31:.29,t?.104:i?.093:.091,t?.255:.23],"head");const g=r.joint("headJaw",b,[0,-.072,.007],[.19,.05,.07]);if(o(g,"g2_jaw",[0,0,0],[t?.36:i?.31:.29,.08,t?.255:.23],"head"),r.joint("neck","root",[d*.75,.732,m*.65],[.07,.08,.06]),o("neck","g2_limb",[0,-.017,0],[t?.16:.115,.081,.115]),i)for(const f of[-1,1]){const w=r.joint(`tab${f<0?"L":"R"}`,"root",[f*.24+.035,.916,-.11],[.17,.12,.15]);o(w,"g2_limb",[0,.016,0],[.07,.043,.061],"head",16766628)}if(s)for(let f=0;f<4;f++){const w=.48+f*.62,v=r.joint(`crescent${f}`,"chest",[Math.cos(w)*.44,Math.sin(w)*.265,-.01],[.08,.09,.06]);o(v,"g2_shell",[0,0,0],[.2,.11,.2],"body",f%2?16760269:12976127,[0,0,w-1.15])}for(const f of s?[1]:[-1,1]){const w=f<0?"L":"R",v=t?.56:i?.43:.5,E=[f*(v-.16),t?.61:i?.59:.56,0],y=[f*(v-.045),t?.716:i?.49:.61,.02],M=[f*v,t?.806:i?.55:.67,.075],z=r.joint(`shoulder${w}`,"chest",[E[0]-u,E[1]-h,E[2]-(s?-.07:0)],[.16,.15,.16]);o(z,"g2_extremity",[0,0,0],[t?.12:.09,.048,.087]),a(z,[0,0,0],[y[0]-E[0],y[1]-E[1],.02],t?.091:.065);const T=r.joint(`elbow${w}`,z,[y[0]-E[0],y[1]-E[1],y[2]-E[2]],[.2,.14,.15]);a(T,[0,0,0],[M[0]-y[0],M[1]-y[1],.055],t?.076:.058);const S=r.joint(`hand${w}`,T,[M[0]-y[0],M[1]-y[1],M[2]-y[2]],[.2,.17,.16]);o(S,"g2_extremity",[0,.005,0],[t?.114:.088,.049,.076]);const A=t?3:4;for(let N=0;N<A;N++){const B=r.joint(`hand${w}Finger${N}`,S,[(N-(A-1)/2)*.048,.04,.01],[.4,.08,.08]);o(B,"g2_limb",[0,.031,.016],[.026,t?.035:.051,.027])}const R=r.joint(`hand${w}Thumb`,S,[-f*.088,.018,0],[.27,.16,.14]);o(R,"g2_limb",[0,t?.046:.021,0],[.037,t?.061:.041,.034])}for(const[f,w,v]of[["head",[-.16,.025,.21],"head"],["chest",[-.12,.06,.25],"body"]])r.authored(f,n.geometry.get("g2_code_one"),n.material,9202819,[...w],[.011,.029,.009],{region:v,minWear:1,rotation:[0,0,-.26]}),r.authored(f,n.geometry.get("g2_code_one"),n.material,3286846,[w[0]+.024,w[1]-.02,w[2]+.004],[.018,.01,.009],{region:v,minWear:2,rotation:[0,0,.2]})}function Z0(r,e){const n=(o,a,l,c,h=16777215,u={})=>{const d=e.geometry.get(a);if(!d)throw Error(`Missing G2 roster form ${a}`);r.authored(o,d,e.material,h,l,c,u)};return{part:n,link:(o,a,l,c,h=16777215,u="g2_limb")=>{const d=e.geometry.get(u);if(!d)throw Error(`Missing G2 roster form ${u}`);r.authoredLink(o,d,e.material,h,a,l,c)},mark:(o,a,l=!1,c=.045,h=16777215,u={})=>n(o,l?"g2_code_zero":"g2_code_one",a,[c*(l?1:.34),c,.012],h,u),wear:(o,a,l="body")=>{n(o,"g2_code_one",a,[.011,.029,.009],7825537,{region:l,minWear:1,rotation:[0,0,-.26]}),n(o,"g2_code_one",[a[0]+.025,a[1]-.021,a[2]+.004],[.018,.01,.009],3352126,{region:l,minWear:2,rotation:[0,0,.2]})}}}const ke=16772558,nt=10216150,pt=15970247,ft=16766878;function vt(r,e,n,t,i=[0],s=.08,o=ke){for(const a of i)for(const l of[-1,1]){const c=`${l<0?"L":"R"}${i.length===1?"":a<0?"Back":"Front"}`,h=(t-.034)/2,u=r.joint(`hip${c}`,"root",[l*n,t,a],[.68,.12,.11]),d=r.joint(`knee${c}`,u,[0,-h,0],[1.08,.06,.07]),p=r.joint(`foot${c}`,d,[0,-h,0],[.69,.08,.09]);e.part(u,"g2_limb",[0,-h*.47,0],[s,h*.66,s],o),e.part(d,"g2_limb",[0,-h*.49,.002],[s*.7,h*.66,s*.74],o),e.part(p,"g2_extremity",[0,0,.066],[s*1.48,.03,i.length>1?.166:.2],o)}}function li(r,e,n,t,i,s){r.joint("pelvis","root",[0,t,0],[.08,.09,.07]),e.part("pelvis","g2_shell",[0,0,0],[n*.8,.08,s*.8],nt),r.joint("lumbar","root",[0,(t+i)*.5,-.025],[.07,.08,.05]),e.part("lumbar","g2_limb",[0,0,0],[n*.53,(i-t)*.64,s*.69],ke),r.joint("chest","root",[0,i,0],[.13,.13,.09]),e.part("chest","g2_shell",[0,0,0],[n,.16,s],nt),e.wear("chest",[-n*.33,.067,s*.91])}function Ft(r,e,n,t,i=.33,s=.096,o=.23){const a=r.joint(n,"root",t,[.1,.13,.1]);e.part(a,"g2_head",[0,0,0],[i,s,o],ke,{region:"head"});const l=r.joint(`${n}Jaw`,a,[0,-s*.69,.007],[.19,.05,.07]);return e.part(l,"g2_jaw",[0,0,0],[i,s*.77,o],ke,{region:"head"}),e.wear(a,[-i*.63,s*.31,o*.72],"head"),a}function Ni(r,e,n,t){r.joint("neck","root",n,[.075,.09,.06]),e.part("neck","g2_limb",[0,0,0],t,ke)}function Co(r,e,n,t,i,s,o=.85,a=!1){const l=n<0?"L":"R",c=r.joint(`shoulder${l}`,"root",t,[.17,.14,.17]),h=[i[0]-t[0],i[1]-t[1],i[2]-t[2]],u=[s[0]-i[0],s[1]-i[1],s[2]-i[2]];e.part(c,"g2_extremity",[0,0,0],[.102*o,.048,.093*o],ke),e.link(c,[0,0,0],h,.07*o,nt);const d=r.joint(`elbow${l}`,c,h,[.2,.14,.15]);e.link(d,[0,0,0],u,.058*o,nt);const p=r.joint(`hand${l}`,d,u,[.2,.17,.16]);e.part(p,"g2_extremity",[0,0,0],[.116*o,.051*o,.081*o],ke);const m=a?3:4;for(let g=0;g<m;g++){const f=r.joint(`hand${l}Finger${g}`,p,[(g-(m-1)/2)*.053*o,.037*o,.012],[.4,.08,.08]);e.part(f,"g2_limb",[0,.032*o,.012],[.027*o,(a?.036:.056)*o,.027*o],ke)}const b=r.joint(`hand${l}Thumb`,p,[-n*.096*o,.018*o,0],[.27,.16,.14]);return e.part(b,"g2_limb",[0,.027*o,0],[.036*o,(a?.068:.039)*o,.03*o],ke),p}function Q0(r,e,n){switch(e){case"signal_echo":{vt(r,n,.24,.355),li(r,n,.3,.35,.545,.25),Ft(r,n,"head",[-.04,.853,.13],.34,.093,.23),Ni(r,n,[-.025,.723,.074],[.12,.098,.13]);for(const t of[-1,1]){Co(r,n,t,[t*.32,.603,0],[t*.265,.505,.18],[t*.072,.56+(t<0?.01:-.01),t<0?.35:.42],.68);const i=r.joint(`paper${t<0?"L":"R"}`,"chest",[t*.245,-.045,-.07],[.16,.1,.1]);n.part(i,"g2_code_ribbon",[t*.025,-.05,0],[.125,.15,.031],t<0?nt:pt,{rotation:[0,0,t*.12]})}n.part("chest","g2_code_zero",[0,.014,.228],[.073,.091,.017],ft);break}case"notification_swarm":{r.joint("ring","root",[0,.61,-.035],[.075,.1,.075]),n.part("ring","g2_code_zero",[0,0,0],[.54,.25,.22],ke),n.part("ring","g2_code_zero",[0,0,.14],[.54,.25,.038],nt);for(let t=0;t<5;t++){const i=t*Math.PI*2/5+Math.PI/2,s=Math.cos(i)*.57,o=.847+Math.sin(i)*.043,a=r.joint(`petal${t}`,"ring",[Math.cos(i)*.49,Math.sin(i)*.205,-.025],[.13,.1,.12]);n.part(a,"g2_shell",[0,0,0],[.21,.088,.16],t%2?pt:ft,{rotation:[0,0,i-Math.PI/2]}),n.link(a,[0,.025,0],[s-Math.cos(i)*.49,o-(.61+Math.sin(i)*.205)-.049,.11],.057,ke),Ft(r,n,`head${t}`,[s,o,.1],.173,.045,.17)}break}case"chair_knight":{vt(r,n,.43,.23,[0],.098),li(r,n,.54,.26,.45,.35),n.part("chest","g2_shell",[0,.105,-.15],[.58,.195,.27],ke),Ft(r,n,"head",[0,.848,.265],.33,.083,.21),Ni(r,n,[0,.7,.16],[.16,.14,.16]);for(const t of[-1,1]){n.part("chest","g2_limb",[t*.5,0,.19],[.105,.185,.14],ke,{rotation:[0,0,t*.14]});const i=r.joint(`pole${t<0?"L":"R"}`,"root",[t*.62,.57,-.14],[.04,.04,.04]);n.part(i,"g2_limb",[0,0,0],[.034,.32,.038],ft),n.part(i,"g2_code_ribbon",[0,.278,.007],[.13,.068,.027],t<0?nt:pt),n.part("chest","g2_code_zero",[t*.33,.016,.32],[.096,.109,.022],ft)}break}case"apex_rabbit":{vt(r,n,.42,.31,[-.29,.29],.085),li(r,n,.48,.34,.465,.45),n.part("chest","g2_shell",[0,.105,.2],[.26,.16,.22],ke,{rotation:[.16,0,0]}),Ni(r,n,[0,.67,.235],[.19,.125,.17]),Ft(r,n,"head",[0,.823,.32],.34,.076,.28);for(let t=-1;t<=1;t++){const i=r.joint(`tab${t+1}`,"root",[t*.26,.83-Math.abs(t)*.012,-.22],[.15,.1,.13]);n.part(i,"g2_code_ribbon",[0,0,0],[.087,.077,.039],t===0?nt:pt,{region:"head",rotation:[0,0,-t*.16]})}break}case"evolution_rabbit":{vt(r,n,.35,.27,[0],.09),li(r,n,.54,.3,.405,.33),n.part("chest","g2_shell",[0,.086,-.105],[.56,.16,.24],ke);for(let t=-2;t<=2;t++){const i=t*.295,s=.849-Math.abs(t)*.01,o=r.joint(`neck${t+2}`,"chest",[t*.2,.095,-.065],[.06,.07,.055]);n.link(o,[0,0,0],[i-t*.2,s-.405-.095-.042,.225],.075,ke),Ft(r,n,`head${t+2}`,[i,s,.21],.17,.048,.19);const a=r.joint(`crown${t+2}`,"root",[i,.923-Math.abs(t)*.012,-.09],[.08,.09,.06]);n.part(a,"g2_code_ribbon",[0,0,0],[.079,.039,.036],t%2?ft:pt,{region:"head",rotation:[0,0,-t*.06]});const l=r.joint(`paper${t+2}`,"chest",[t*.23,-.01,.3],[.15,.08,.1]);n.part(l,"g2_code_ribbon",[0,-.028,0],[.1,.12,.027],t%2?ke:pt)}break}case"arc_turret":{vt(r,n,.245,.32,[0],.073),li(r,n,.235,.335,.465,.22),Ni(r,n,[0,.675,.12],[.11,.12,.12]),Ft(r,n,"head",[0,.818,.22],.255,.075,.22);for(const t of[-1,1]){Co(r,n,t,[t*.285,.555,0],[t*.47,.68,.025],[t*.59,.785,.065],.89);const i=r.joint(`paper${t<0?"L":"R"}`,`elbow${t<0?"L":"R"}`,[0,-.02,.055],[.2,.09,.12]);n.part(i,"g2_code_ribbon",[0,-.024,0],[.082,.085,.025],t<0?pt:ft)}n.part("chest","g2_code_zero",[0,.015,.212],[.063,.08,.015],ft);break}default:throw Error(`Unknown G2 smile ${e}`)}}const J0={name_glitch_shade:12427501,speaker_wraith:10281706,loop_ghost:13219309,decay_mote:13944565,double:11134957,dual:16765848,cell_blob:13548528,reach_shadow:15123619,drift_hound:11779561};function Dt(r,e,n,t,i,s,o){const a=r.joint(n,"root",t,[.15,.13,.12]);e.link(a,[0,.015,0],[s,-i,0],.047,o,"g2_code_spine");for(let l=0;l<4;l++)e.mark(a,[s*l/3,-i*l/3,.04],l%2===0,.026,o)}function el(r,e,n,t){const i=J0[e];if(i===void 0)throw Error(`Unknown G2 mask ${e}`);const s=e==="decay_mote"?.63:e==="drift_hound"||e==="speaker_wraith"?.8:.72,o=e==="drift_hound"?.44:.28;Ia(r,t,s,o,.854,!1),n.wear("head",[-s*.3,.045,o*.62],"head"),n.part("head","g2_code_spine",[0,0,-.07],[s*.53,.102,o*.76],i,{region:"head"});const a=r.joint("neck","root",[0,.736,.045],[.07,.09,.06]);switch(n.part(a,"g2_code_spine",[0,0,0],[.12,.096,.13],i),e){case"name_glitch_shade":{for(let l=0;l<6;l++){const c=.155+l*.102,h=Math.sin(l*.9)*.16,u=r.joint(`spine${l}`,"root",[h,c,-.045],[.12,.13,.12]);n.part(u,"g2_code_spine",[0,0,0],[.185,.081,.175],i,{rotation:[0,0,-Math.cos(l*.9)*.18]});for(const d of[-1,1])n.part(u,"g2_code_ribbon",[d*.24,-.012,-.02],[.2,.048,.082],i,{rotation:[0,d*.18,-d*.17]}),n.mark(u,[d*.37,-.012,.071],l%2===0,.044,i)}n.part("spine4","g2_shell",[0,.028,-.055],[.28,.138,.15],i),Dt(r,n,"strandL",[-.24,.32,-.13],.25,-.075,i),Dt(r,n,"strandR",[.23,.28,-.1],.22,.06,i);break}case"speaker_wraith":{r.joint("chest","root",[0,.47,-.01],[.085,.08,.08]),n.part("chest","g2_shell",[0,0,-.04],[.48,.22,.28],i),r.joint("diaphragm","chest",[0,.005,.245],[.07,.07,.07]);for(let l=0;l<3;l++)n.part("diaphragm","g2_code_zero",[0,0,l*.019],[.31-l*.065,.145-l*.027,.031],l%2?4340834:i);for(const l of[-1,1]){const c=r.joint(`support${l<0?"L":"R"}`,"chest",[l*.43,-.015,-.015],[.085,.08,.07]);n.part(c,"g2_code_spine",[0,0,0],[.11,.255,.17],i);for(let h=0;h<4;h++)n.mark(c,[l*.03,-.17+h*.11,.16],h%2===0,.036,i)}vt(r,n,.32,.23,[0],.08,i),n.wear("chest",[-.24,.115,.21]);break}case"loop_ghost":{r.joint("loop","root",[0,.455,-.045],[.095,.14,.09]);for(let l=0;l<4;l++){const c=l*Math.PI/2;n.part("loop","g2_shell",[Math.cos(c)*.34,Math.sin(c)*.255,0],l%2?[.29,.084,.16]:[.1,.23,.16],i,{rotation:[0,0,l%2?0:-.06]})}n.part("loop","g2_code_zero",[0,0,.11],[.39,.29,.057],i),Dt(r,n,"strandL",[-.21,.22,-.015],.16,-.105,i),Dt(r,n,"strandR",[.19,.23,-.015],.17,.1,i),Dt(r,n,"strandBack",[0,.22,-.18],.17,0,i);break}case"decay_mote":{r.joint("diamond","root",[0,.46,-.04],[.13,.16,.12]),n.part("diamond","g2_code_spine",[0,0,0],[.43,.26,.31],i),n.part("diamond","g2_shell",[0,.025,-.018],[.37,.17,.29],i,{rotation:[0,0,.55]});for(let l=0;l<4;l++){const c=l*Math.PI/2,h=r.joint(`flutter${l}`,"diamond",[Math.cos(c)*.37,Math.sin(c)*.21,.015],[.18,.18,.15]);n.part(h,"g2_code_ribbon",[Math.cos(c)*.065,Math.sin(c)*.038,0],[.12,.067,.049],i,{rotation:[0,0,c]}),n.mark(h,[0,0,.052],l%2===0,.031,i)}n.wear("diamond",[-.19,.11,.245]);break}case"double":{r.joint("bridge","root",[0,.59,-.075],[.06,.095,.06]),n.link("bridge",[-.43,0,0],[.43,0,0],.072,i);for(const l of[-1,1]){const c=r.joint(`column${l<0?"L":"R"}`,"root",[l*.37,.41,.005],[.12,.12,.1]);n.part(c,"g2_shell",[0,0,-.025],[.2,.285,.22],i),n.part(c,"g2_code_spine",[l*.12,0,.1],[.075,.26,.09],i);for(let h=0;h<5;h++)n.mark(c,[-l*.025,-.185+h*.092,.202],h%2===0,.042,i);Dt(r,n,`strand${l<0?"L":"R"}`,[l*.37,.17,.005],.115,l*.025,i)}break}case"dual":{r.joint("dart","root",[0,.425,-.012],[.14,.12,.13]),n.part("dart","g2_code_spine",[0,0,0],[.31,.3,.32],i,{rotation:[0,0,Math.PI]});for(const l of[-1,1]){const c=r.joint(`fin${l<0?"L":"R"}`,"dart",[l*.29,.063,0],[.16,.13,.13]);n.part(c,"g2_code_ribbon",[l*.075,0,-.01],[.14,.107,.052],i,{rotation:[0,l*.22,-l*.3]}),n.part("dart","g2_code_spine",[l*.175,.06,-.01],[.105,.2,.16],i,{rotation:[0,0,l*.29]}),n.part("head","g2_code_one",[0,-.039,.258],[.2,.007,.017],i,{region:"head",rotation:[0,0,l*.18]})}break}case"cell_blob":{for(const l of[-1,1]){const c=r.joint(`lobe${l<0?"L":"R"}`,"root",[l*.31,.37,-.01],[.08,.1,.08]);n.part(c,"g2_shell",[0,0,0],[.34,.285,.39],i),n.part(c,"g2_code_spine",[-l*.145,.085,-.02],[.18,.21,.25],i,{rotation:[0,0,-l*.26]}),n.part(c,"g2_code_zero",[0,.015,.3],[.225,.21,.045],i);for(let h=0;h<3;h++)n.mark(c,[(h-1)*.105,.09,.366],h%2===0,.027,i)}r.joint("seam","root",[0,.43,.371],[.05,.05,.05]),n.part("seam","g2_code_ribbon",[0,0,0],[.034,.3,.027],15655418,{parentOnly:!0}),n.part("seam","g2_code_one",[.036,0,.027],[.01,.267,.012],3220796,{parentOnly:!0});break}case"reach_shadow":{r.joint("forearm","root",[0,.295,-.15],[.12,.14,.11]),n.part("forearm","g2_limb",[0,0,0],[.19,.255,.18],i,{rotation:[-.24,0,0]}),r.joint("palm","forearm",[0,.151,.2],[.15,.13,.13]),n.part("palm","g2_extremity",[0,0,0],[.345,.115,.17],i);for(let c=0;c<4;c++){const h=r.joint(`finger${c}`,"palm",[(c-1.5)*.167,.069,.01],[.37,.1,.11]);n.part(h,"g2_code_spine",[0,.058,0],[.068,.084,.064],i);const u=r.joint(`fingerTip${c}`,h,[0,.117,0],[.37,.1,.11]);n.part(u,"g2_code_spine",[0,.034,.007],[.058,.056,.061],i),n.mark(h,[0,.053,.062],!1,.029,i)}const l=r.joint("thumb","palm",[-.318,-.02,.005],[.27,.17,.14]);n.part(l,"g2_code_spine",[-.06,.035,0],[.102,.073,.062],i,{rotation:[0,0,-.55]}),n.part("palm","g2_code_ribbon",[0,.017,.147],[.23,.066,.021],i),n.wear("palm",[-.15,.055,.164]);break}case"drift_hound":{vt(r,n,.415,.295,[-.265,.265],.078,i),r.joint("chest","root",[0,.435,-.055],[.12,.13,.1]),n.part("chest","g2_shell",[0,0,0],[.46,.175,.49],i),r.joint("muzzle","root",[0,.66,.225],[.11,.1,.09]),n.part("muzzle","g2_shell",[0,0,0],[.32,.116,.355],i);const l=r.joint("tail","chest",[0,.025,-.445],[.15,.15,.12]);n.part(l,"g2_code_spine",[.025,-.015,-.08],[.066,.068,.195],i,{rotation:[.28,-.24,0]});for(const c of[-1,1])for(let h=0;h<2;h++)n.mark("chest",[c*.35,-.04+h*.11,.27],h===0,.028,i);break}}}function nl(r,e,n,t){if(e==="hammer_rabbit"||e==="rabbit_glimpse"||e==="flank_drone"){X0(r,e,n);return}const i=Z0(r,n);os(e)?Q0(r,e,i):el(r,e,i,t)}function In(r,e,n,t=.42,i=.105,s=.27){const o="head",a=r.joint(e,"root",n,[.1,.1,.1]);r.ell(a,"bone",O.bone,[0,.012,-.025],[t,i,s*.72],{region:o}),r.ell(a,"bone",O.bone,[0,-i*.46,.035],[t*.84,i*.55,s*.57],{region:o});for(const h of[-1,1]){const u=h*t*.43,d=i*.13,p=s*.65;r.ell(a,"cavity",O.ink,[u,d,p],[t*.29,i*.4,.042],{region:o}),r.ring(a,"paper",O.pink,[u,d,p+.019],[t*.31,i*.44,.075],.13,{region:o}),r.ell(a,"code",O.teal,[u,d,p+.047],[t*.052,i*.12,.014],{region:o}),r.ell(a,"bone",O.bone,[h*t*.81,-i*.34,s*.47],[t*.15,i*.36,.068],{region:o});const m=r.joint(`${e}Lid${h<0?"L":"R"}`,a,[u,d+i*.4,p+.047],[.08,.08,.08]);r.ell(m,"bone",O.bone,[0,0,0],[t*.24,i*.036,.018],{region:o})}r.ell(a,"cavity",O.ink,[0,-i*.25,s*.78],[t*.095,i*.2,.025],{region:o}),r.ell(a,"cavity",O.ink,[0,-i*.68,s*.6],[t*.54,i*.17,.055],{region:o});const l=r.joint(`${e}Jaw`,a,[0,-i*.63,.025],[.18,.05,.07]);for(const h of[-1,1])r.link(l,"bone",O.bone,[h*t*.71,0,-.05],[h*t*.51,-i*.24,s*.55],t*.062,t*.047,{region:o});r.ell(l,"bone",O.bone,[0,-i*.22,s*.56],[t*.55,i*.14,.034],{region:o});for(let h=-2;h<=2;h++)r.ell(l,"bone",O.bone,[h*t*.2,-i*.09,s*.61],[t*.074,i*.16,.026],{region:o});const c=r.joint(`${e}Flower`,a,[0,i*.72,s*.46],[.16,.16,.16]);for(let h=0;h<5;h++){const u=h*Math.PI*2/5;r.ell(c,"paper",O.orange,[Math.cos(u)*t*.1,Math.sin(u)*i*.1,0],[t*.08,i*.15,.025],{region:o,maxWear:h===1?1:2})}return r.ell(c,"metal",O.gold,[0,0,.023],[t*.065,i*.07,.015],{region:o}),r.wear(a,[-t*.55,i*.47,s*.6],[t*.029,i*.5,.01],o),a}function Zn(r,e=.34,n=.365,t){for(const i of t===void 0?[0]:[-t,t])for(const s of[-1,1]){const o=`${s<0?"L":"R"}${t===void 0?"":i<0?"Back":"Front"}`,a=e*s,l=(n-.028)/2,c=r.joint(`hip${o}`,"root",[a,n,i],[.62,.12,.1]),h=r.joint(`knee${o}`,c,[0,-l,0],[1.05,.05,.05]),u=r.joint(`foot${o}`,h,[0,-l,0],[.65,.06,.08]);r.ell(c,"bone",O.bone,[0,0,0],[.108,.05,.11]),r.link(c,"paper",O.teal,[0,-.016,0],[0,-l,0],.079,.065),r.ell(h,"bone",O.bone,[0,0,0],[.081,.036,.077]),r.link(h,"bone",O.bone,[0,-.012,0],[0,-l,.01],.047,.033),r.ell(u,"bone",O.bone,[0,0,.045],[.145,.028,.205]);for(const d of[-1,0,1])r.ell(u,"bone",O.bone,[d*.071,-.003,.2],[.037,.023,.055])}}function gt(r,e=.38,n=.16,t=.54,i=.32){r.joint("pelvis","root",[0,.37,0],[.065,.075,.075]),r.ell("pelvis","paper",O.teal,[0,0,0],[e*.8,.095,i*.75]),r.joint("chest","root",[0,t,0],[.11,.1,.07]),r.ell("chest","paper",O.teal,[0,0,0],[e,n,i]);for(const s of[-1,1])r.ell("chest","bone",O.bone,[s*e*.7,0,-.025],[e*.21,n*.97,i*.84]),r.link("chest","metal",O.gold,[s*e*.44,-n*.8,i*.91],[s*e*.44,n*.8,i*.91],.016);for(let s=0;s<4;s++)r.ell("chest","bone",s%2?O.bone:O.stone,[0,-n*.7+s*n*.43,-i*.97],[e*.15,n*.15,.033]);return r.banner("chest",[0,0,i*.99],[e*.9,n*1.44,.026],O.pink),r.wear("chest",[-e*.38,n*.47,i*.99],[.025,.05,.01]),"chest"}function Ki(r,e,n,t,i,s=1){const o=r.joint(e,"root",n,[.18,.15,.14]);r.ell(o,"bone",O.bone,[0,0,0],[.13*s,.061*s,.105*s]);const a=t?3:4;for(let c=0;c<a;c++){const h=r.joint(`${e}Finger${c}`,o,[(c-(a-1)/2)*.053*s,.041*s,.027*s],[.38,.07,.08]);r.ell(h,"bone",O.bone,[0,.044*s,0],[.025*s,(t?.032:.062)*s,.041*s]),r.ell(h,"bone",O.bone,[0,.07*s,.016*s],[.024*s,.022*s,.04*s])}const l=r.joint(`${e}Thumb`,o,[-i*.109*s,.016*s,0],[.24,.14,.12]);return r.ell(l,"bone",O.bone,[0,.055*s,0],[.042*s,.087*s,.044*s]),r.ring(o,"paper",O.pink,[0,0,.109*s],[.059*s,.033*s,.03*s],.16),o}function ks(r,e,n=.6,t=!1){for(const i of[-1,1]){const s=i<0?"L":"R",o=e?.6:.58,a=e?.7:.48,l=e?.83:.57,c=r.joint(`shoulder${s}`,"root",[i*(n-.08),o,0],[.13,.12,.13]);r.ell(c,"bone",O.bone,[0,0,0],[.115,.05,.11]),r.link(c,"paper",O.teal,[0,0,0],[i*.04,a-o,.02],.09,.075);const h=r.joint(`elbow${s}`,"root",[i*(n-.04),a,.02],[.18,.1,.13]);r.ell(h,"bone",O.bone,[0,0,0],[.088,.042,.082]),r.link(h,"paper",O.teal,[0,0,0],[i*.04,l-a,.03],.072,.056),Ki(r,`hand${s}`,[i*n,l,.08],!t,i,.85);const u=r.joint(`paper${s}`,h,[0,.015,.105],[.22,.1,.12]);r.banner(u,[0,-.035,0],[.16,.13,.026],i<0?O.pink:O.orange)}}function tl(r,e){switch(e){case"signal_echo":{Zn(r,.24,.37),gt(r,.31,.18,.54,.3),In(r,"head",[-.04,.858,.12],.38,.092,.25),r.joint("neck","root",[0,.704,.055],[.06,.06,.06]),r.ell("neck","bone",O.bone,[0,0,0],[.12,.071,.12]);for(const n of[-1,1]){const t=r.joint(`shoulder${n<0?"L":"R"}`,"root",[n*.36,.6,0],[.16,.12,.13]);r.link(t,"paper",O.teal,[0,0,0],[-n*.21,-.06,.21],.065)}Ki(r,"handL",[-.08,.57,.33],!1,-1,.65),Ki(r,"handR",[.07,.55,.4],!1,1,.65);for(const n of[-1,1]){const t=r.joint(`paper${n<0?"L":"R"}`,"root",[n*.35,.52,-.045],[.16,.1,.1]);r.banner(t,[0,-.045,0],[.21,.28,.035],n<0?O.teal:O.pink)}break}case"rabbit_glimpse":{Zn(r,.32,.36),gt(r,.25,.16,.53,.24),In(r,"head",[.07,.827,.23],.32,.081,.24);for(const n of[-1,1]){const t=r.joint(`tab${n<0?"L":"R"}`,"root",[n*.26+.06,.914,-.12],[.15,.1,.15]);r.ell(t,"bone",O.bone,[0,.029,-.01],[.075,.047,.07],{region:"head"}),r.banner(t,[0,.01,.07],[.095,.055,.028],O.orange,"head")}ks(r,!1,.46);break}case"notification_swarm":{r.joint("ring","root",[0,.69,0],[.06,.08,.055]),r.ring("ring","bone",O.bone,[0,0,0],[.62,.26,.36],.115);for(let n=0;n<5;n++){const t=n*Math.PI*2/5+Math.PI/2,i=Math.cos(t)*.58,s=.846+Math.sin(t)*.054;In(r,`head${n}`,[i,s,.11],.185,.046,.18);const o=r.joint(`petal${n}`,"ring",[Math.cos(t)*.59,Math.sin(t)*.23,0],[.13,.09,.12]);r.ell(o,"paper",n%2?O.pink:O.orange,[0,0,-.04],[.21,.08,.16],{maxWear:n===2?1:2})}break}case"flank_drone":{r.joint("chest","root",[-.13,.49,-.08],[.1,.1,.07]);for(let n=0;n<6;n++){const t=.6+n*.54,i=r.joint(`crescent${n}`,"chest",[Math.cos(t)*.47,Math.sin(t)*.3,0],[.08,.09,.06]);r.ell(i,"paper",n%2?O.pink:O.teal,[0,0,0],[.2,.1,.24]),r.ell(i,"metal",O.gold,[0,0,.21],[.14,.025,.025])}In(r,"head",[-.4,.844,.15],.3,.077,.23),Zn(r,.26,.24),r.joint("elbowR","root",[.16,.59,.1],[.12,.11,.12]),r.link("elbowR","paper",O.orange,[0,0,0],[.32,.06,.1],.074),Ki(r,"handR",[.51,.67,.21],!1,1,.87);break}case"chair_knight":{Zn(r,.49,.23),gt(r,.65,.22,.46,.46),r.ell("chest","bone",O.bone,[0,.1,-.16],[.68,.18,.43]),r.ell("chest","cavity",O.ink,[0,.12,.36],[.44,.13,.071]),In(r,"head",[0,.839,.34],.36,.08,.2);for(const n of[-1,1]){const t=r.joint(`pole${n<0?"L":"R"}`,"root",[n*.64,.54,-.16],[.035,.035,.035]);r.link(t,"metal",O.gold,[0,-.2,0],[0,.39,0],.031),r.banner(t,[0,.31,0],[.24,.19,.04],n<0?O.teal:O.pink),r.ell("chest","bone",O.bone,[n*.63,0,.28],[.13,.21,.16])}break}case"hammer_rabbit":{Zn(r,.33,.36),gt(r,.42,.16,.53,.34),In(r,"head",[0,.844,.09],.36,.086,.27),ks(r,!0,.62),r.joint("neck","root",[0,.724,.035],[.065,.06,.05]),r.ell("neck","bone",O.bone,[0,0,0],[.14,.07,.15]);for(const n of[-1,1])r.ring("chest","metal",O.gold,[n*.17,.018,.325],[.071,.041,.04],.13);break}case"apex_rabbit":{Zn(r,.48,.34,.35),gt(r,.59,.16,.46,.51),In(r,"head",[0,.802,.37],.38,.066,.33),r.ell("chest","bone",O.bone,[0,.19,.25],[.27,.18,.23]);for(let n=-1;n<=1;n++){const t=r.joint(`tab${n+1}`,"root",[n*.27,.831-Math.abs(n)*.028,-.23],[.15,.1,.13]);r.banner(t,[0,0,0],[.16,.26,.07],n===0?O.teal:O.pink,"head")}break}case"evolution_rabbit":{Zn(r,.38,.26),gt(r,.56,.14,.38,.37),r.ell("chest","bone",O.bone,[0,-.035,-.18],[.58,.11,.22]);for(let n=-2;n<=2;n++){In(r,`head${n+2}`,[n*.3,.841-Math.abs(n)*.009,.22],.183,.049,.21);const t=r.joint(`crown${n+2}`,"root",[n*.3,.907-Math.abs(n)*.017,-.16],[.08,.09,.06]);r.banner(t,[0,0,0],[.16,.1,.07],n%2?O.orange:O.pink,"head");const i=r.joint(`paper${n+2}`,"chest",[n*.25,-.02,.34],[.15,.08,.1]);r.banner(i,[0,0,0],[.21,.22,.035],n%2?O.bone:O.pink)}break}case"arc_turret":{Zn(r,.27,.33),gt(r,.24,.16,.45,.23),In(r,"head",[0,.812,.24],.265,.062,.23),ks(r,!0,.61,!0),r.ell("chest","metal",O.gold,[0,-.11,.19],[.09,.033,.036]);break}}}const O=Object.freeze({bone:16769445,pink:15088504,teal:1351581,orange:16747026,gold:16037938,ink:2431529,stone:8876131,code:11705301,shell:3155775,ice:8441821}),Po=Object.freeze({actors:128,maxJoints:64,maxParts:768,headLow:.72,radius:1,height:1}),Ds=new Map,xt=new Map;function il(r){let e=2166136261;const n=t=>{for(let i=0;i<t.length;i++){const s=Math.round(t[i]*1e6);e=Math.imul(e^s&255,16777619),e=Math.imul(e^s>>>8&255,16777619),e=Math.imul(e^s>>>16&255,16777619),e=Math.imul(e^s>>>24&255,16777619)}};for(const t of Object.keys(r.attributes).sort())n(r.getAttribute(t).array);return r.index&&n(r.index.array),`${r.getAttribute("position").count}/${r.index?.count??0}/${e>>>0}`}function sl(r){const e=il(r),n=Ds.get(e);if(n)return n.geometry!==r&&r.dispose(),n;r.computeBoundingBox(),r.computeBoundingSphere();const t={key:e,geometry:r,refs:0};return Ds.set(e,t),t}function ol(r){let e=xt.get(r);if(e)return e;const n=kr(r);return e={key:r,material:n,refs:0},xt.set(r,e),e}class al{joints=[];jointIndex={};parts=[];feet=[];geometries=new Set;materials=new Set;id;family;disposed=!1;constructor(e,n){this.id=e,this.family=n,this.joint("root",null,[0,0,0],[0,0,0])}joint(e,n,t,i=[.18,.18,.18]){if(e in this.jointIndex)throw Error(`Duplicate ${this.id} joint ${e}`);const s=n===null?-1:this.jointIndex[n];if(n!==null&&s===void 0)throw Error(`Missing parent ${n}`);if(this.joints.length>=Po.maxJoints)throw Error("B1 joint capacity exceeded");const o=this.joints.length;return this.jointIndex[e]=o,this.joints.push({name:e,parent:s,position:[...t],limit:[...i]}),e.startsWith("foot")&&this.feet.push(o),e}add(e,n,t,i,s=[0,0,0],o=[1,1,1],a={}){if(this.jointIndex[e]===void 0)throw Error(`Unknown ${e}`);const c=new ie().compose(new _(...s),new he().setFromEuler(new We(...a.rotation??[0,0,0])),new _(...o));this.retainPart(e,t,ol(n),i,c,a)}retainPart(e,n,t,i,s,o){const a=sl(n);this.geometries.has(a)||(a.refs++,this.geometries.add(a)),this.materials.has(t)||(t.refs++,this.materials.add(t));const l=a.geometry.boundingBox.clone();this.parts.push({name:`${this.id}/${e}/${this.parts.length}`,joint:this.jointIndex[e],geometry:a.geometry,material:t.material,fixed:s,color:t.key.startsWith("source/")||t.key.startsWith("g2/")?new V(i):xr(i,e,new _().setFromMatrixPosition(s),t.key),batchKey:`${a.key}/${t.key}`,region:o.region??"body",minWear:o.minWear??0,maxWear:o.maxWear??2,parentOnly:o.parentOnly??!1,bounds:l,support:rl(l)})}source(e,n,t,i){const s=`source/${t.uuid}`;let o=xt.get(s);if(!o){const a=t.clone();a.name=t.name,o={material:a,refs:0,key:s},xt.set(s,o)}this.retainPart(e,n,o,16777215,i,{region:"head"})}authored(e,n,t,i,s,o,a={}){const l=`g2/${t.uuid}`;let c=xt.get(l);c||(c={material:t.clone(),refs:0,key:l},xt.set(l,c));const h=new ie().compose(new _(...s),new he().setFromEuler(new We(...a.rotation??[0,0,0])),new _(...o));this.retainPart(e,n.clone(),c,i,h,a)}authoredLink(e,n,t,i,s,o,a){const l=new _(...s),c=new _(...o),h=c.clone().sub(l),u=h.length(),d=new he().setFromUnitVectors(new _(0,1,0),h.normalize()),p=new We().setFromQuaternion(d);this.authored(e,n,t,i,l.add(c).multiplyScalar(.5).toArray(),[a*1.35,u*.62,a*1.35],{rotation:[p.x,p.y,p.z]})}ell(e,n,t,i,s,o={}){this.add(e,n,new je(1,8,6),t,i,s,o)}box(e,n,t,i,s,o={}){this.add(e,n,new ve(1,1,1),t,i,s,o)}ring(e,n,t,i,s,o=.1,a={}){this.add(e,n,new Te(1,o,5,16),t,i,s,a)}link(e,n,t,i,s,o,a=o,l={}){const c=new _(...i),h=new _(...s),u=h.clone().sub(c),d=u.length(),p=new he().setFromUnitVectors(new _(0,1,0),u.normalize()),m=new We().setFromQuaternion(p);this.add(e,n,new Mn(a/o,1,1,8,1),t,c.add(h).multiplyScalar(.5).toArray(),[o,d,o],{...l,rotation:[m.x,m.y,m.z]})}banner(e,n,t,i,s="body"){for(const o of[!1,!0]){const a=o?[[-.5,.5],[.5,.5],[.5,-.38],[.25,-.21],[.1,-.5],[-.12,-.28],[-.4,-.45]]:[[-.5,.5],[.5,.5],[.5,-.34],[0,-.5],[-.5,-.34]],l=new qs(a.map(([c,h])=>new Tn(c,h)));this.add(e,"paper",new Ks(l,{depth:1,steps:1,bevelEnabled:!1,curveSegments:1}).translate(0,0,-.5),i,n,t,{region:s,minWear:o?2:0,maxWear:o?2:1})}}wear(e,n,t,i="body"){this.box(e,"cavity",O.stone,n,[t[0],t[1],.012],{region:i,minWear:1,rotation:[0,0,-.27]}),this.box(e,"cavity",O.ink,[n[0]+t[0]*1.8,n[1]-.025,n[2]+.003],[t[0]*2.2,t[1]*.3,.018],{region:i,minWear:2,rotation:[0,.12,.2]})}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.geometries)--e.refs===0&&(e.geometry.dispose(),Ds.delete(e.key));for(const e of this.materials)--e.refs===0&&(e.material.dispose(),xt.delete(e.key))}}finish(){const e=this.parts;if(e.length>Po.maxParts)throw Error(`B1 ${this.id} part cap exceeded`);const n=new Set(e.map(t=>t.material));return{id:this.id,family:this.family,joints:this.joints,parts:e,jointIndex:Object.freeze({...this.jointIndex}),footJoints:this.feet,geometryCost:()=>({parts:e.length,joints:this.joints.length,vertices:e.reduce((t,i)=>t+i.geometry.getAttribute("position").count,0),triangles:e.reduce((t,i)=>t+(i.geometry.index?.count??i.geometry.getAttribute("position").count)/3,0),materials:n.size}),dispose:()=>this.dispose()}}}function rl(r){const e=[];for(const n of[r.min.x,r.max.x])for(const t of[r.min.y,r.max.y])for(const i of[r.min.z,r.max.z])e.push(n,t,i);return new Float32Array(e)}function ll(r,e,n){const t=new al(r,os(r)?"sycophancy":"mask");try{n?nl(t,r,n,e):os(r)?tl(t,r):W0(t,r,e);const i=t.finish();return n&&(i.g2Motion=n.motion),i}catch(i){throw t.dispose(),i}}const Fi=16,Di=4,vi=1.2,La=(r=1)=>({attemptId:r,lastSerial:-1,headWear:0,bodyWear:0,wear:0,region:"body",hitAt:-100,deadAt:null});function cl(r,e){return!Number.isFinite(r)||!Number.isFinite(e)||e<=0?0:r/e<=.33?2:r/e<=.67?1:0}function hl(r,e,n){return!Number.isInteger(e.id)||e.id<0||!Number.isInteger(e.attemptId)||!Number.isInteger(e.targetId)||e.attemptId!==r.attemptId||e.targetId!==n||e.id<=r.lastSerial||r.deadAt!==null||![e.time,e.damage,e.health,e.maxHealth].every(Number.isFinite)||e.time<0||e.time<r.hitAt||e.damage<=0||e.maxHealth<=0||e.health<0||e.health>e.maxHealth||e.killed!==(e.health===0)||e.region!=="body"&&e.region!=="head"?!1:(r.lastSerial=e.id,r.region=e.region,r.hitAt=e.time,e.killed?r.deadAt=e.time:(r.wear=Math.max(r.wear,cl(e.health,e.maxHealth)),e.region==="head"?r.headWear=Math.max(r.headWear,r.wear):r.bodyWear=Math.max(r.bodyWear,r.wear)),!0)}function dl(r,e){const n=e-r.hitAt;return r.deadAt===null&&n>=0&&n<.24?Math.sin(Math.PI*n/.24)*Math.exp(-n*7):0}function Oo(r,e){if(r.deadAt===null)return 1;const n=Math.max(0,e-r.deadAt);return n<.85?1:Math.max(0,1-(n-.85)/(vi-.85))}function ul(r,e,n){const t=c=>{const h=Math.max(0,Math.min(1,c));return h*h*(3-2*h)},i=Math.max(0,e-r),s=t(i/.2),o=t((i-.12)/.46),a=n&1?1:-1,l=Math.sin(Math.max(0,i-.58)*17)*Math.exp(-Math.max(0,i-.58)*14);return{age:i,buckle:s,tip:o,roll:a*1.57*o,pitch:.12*o,settle:l,expired:i>=vi}}const tn=(r,e=0,n=1)=>Math.max(e,Math.min(n,r)),Hs=r=>{const e=tn(r);return e*e*(3-2*e)},jt=Math.PI*2,ml=r=>(Math.imul(r+7,1664525)>>>0)%1009/1009*jt;function Ca(r,e=1){return{id:r.id,attemptId:e,distance:0,clock:r.age,lastTime:-1/0,lastX:r.x,lastZ:r.z,lastHeading:r.heading,speed:0,turnRate:0,supportSpeed:0,supportTurn:0,releaseAt:-100,lastReleaseId:-1,frozen:!1,pose:null,joints:[],liveMatrices:[],deathMatrices:null,localPosition:[],localRotation:[],localScale:[]}}const wn=new _,No=new he,Qn=new ie,_e=new ie;new _(1,1,1);function Gn(r,e,n=!1){let t=1/0,i=-1/0,s=0,o=1/0,a=-1/0;for(let l=0;l<r.length;l++){if(!e.visible[l])continue;const c=r[l],h=e.matrices[l],u=n?c.geometry.getAttribute("position"):null;for(let d=0;d<(u?u.count:c.support.length/3);d++)u?wn.fromBufferAttribute(u,d):wn.fromArray(c.support,d*3),wn.applyMatrix4(h),t=Math.min(t,wn.y),i=Math.max(i,wn.y),s=Math.max(s,Math.hypot(wn.x,wn.z)),c.region==="head"&&(o=Math.min(o,wn.y),a=Math.max(a,wn.y))}return{low:t,high:i,radius:s,headLow:o,headHigh:a}}function qt(r,e,n,t){for(let i=0;i<r.matrices.length;i++)(!t||n[i].region===t)&&r.matrices[i].premultiply(e)}function pl(r,e){let n=Gn(r.parts,e);const t=n.radius>.97?.97/n.radius:1;if(t<1&&(_e.makeScale(t,1,t),qt(e,_e,r.parts)),Number.isFinite(n.low)&&(n.low<0||r.footJoints.length>0&&Math.abs(n.low)>1e-9)&&(_e.makeTranslation(0,-n.low,0),qt(e,_e,r.parts)),n=Gn(r.parts,e),n.high>.995&&(_e.makeScale(1,.995/n.high,1),qt(e,_e,r.parts)),n=Gn(r.parts,e),Number.isFinite(n.headLow)&&(n.headLow<.725||n.headHigh>.992)){const i=Math.max(.001,n.headHigh-n.headLow),s=Math.min(1,(.992-.725)/i),o=Math.max(.725,Math.min(n.headLow,.992-i*s));_e.makeScale(1,s,1),_e.setPosition(0,o-n.headLow*s,0),qt(e,_e,r.parts,"head")}e.envelope=Gn(r.parts,e),e.grounded=e.envelope.low>=-1e-6&&(r.footJoints.length===0||e.envelope.low<=1e-5)}function fl(r,e){r.pose&&r.pose.matrices.length===e.parts.length||(r.pose={matrices:e.parts.map(()=>new ie),visible:e.parts.map(()=>!0),alpha:1,grounded:!0,envelope:{low:0,high:1,radius:1,headLow:.72,headHigh:1}},r.joints=e.joints.map(()=>new ie),r.localPosition=e.joints.map(n=>new _(...n.position)),r.localRotation=e.joints.map(()=>new We),r.localScale=e.joints.map(()=>new _(1,1,1)),r.liveMatrices=e.parts.map(()=>new ie))}function gl(r,e,n,t){for(let i=0;i<e.parts.length;i++){const s=e.parts[i],o=s.region==="head"?n.headWear:n.bodyWear;t.visible[i]=o>=s.minWear&&o<=s.maxWear&&!(r.neural?.child&&s.parentOnly)}}function bl(r,e,n,t,i){const s=n.pose;n.deathMatrices||(n.deathMatrices=n.liveMatrices.map(h=>h.clone()));const o=r.neural.height;if(R0.has(r.sourceId)){const h=new ie().makeScale(r.radius,o,r.radius),u=h.clone().invert();if(!n.weightedDeath){const g=n.joints.map(w=>w.clone()),f=new Set;for(let w=0;w<t.parts.length;w++){const v=t.parts[w];f.has(v.joint)||(f.add(v.joint),g[v.joint].copy(n.deathMatrices[w]).multiply(v.fixed.clone().invert()))}n.weightedDeath=ka(t.joints.map(w=>w.name),g.map(w=>w.premultiply(h)),o,r.id,{identity:t.id,parents:t.joints.map(w=>w.parent)})}n.deathGroundGap??=Math.max(0,Gn(t.parts,s,!0).low);const d=Math.max(0,e.time-i.deadAt),p=Sa(n.weightedDeath,d);for(let g=0;g<t.parts.length;g++)_e.copy(u).multiply(p[t.parts[g].joint]).multiply(h),s.matrices[g].copy(n.deathMatrices[g]).premultiply(_e);const m=Gn(t.parts,s,!0),b=n.deathGroundGap*(1-Hs(d/.06));return Qn.makeTranslation(0,b-m.low,0),qt(s,Qn,t.parts),s.alpha=Oo(i,e.time),s.envelope=Gn(t.parts,s,!0),s.grounded=Math.abs(s.envelope.low-b)<1e-5,s}const a=ul(i.deadAt,e.time,r.id),l=o/r.radius;_e.makeScale(1/Math.max(r.radius,1e-6),1/o,1/Math.max(r.radius,1e-6)),Qn.makeRotationFromEuler(new We(a.pitch,0,a.roll)),_e.multiply(Qn),Qn.makeScale(r.radius,o,r.radius),_e.multiply(Qn);for(let h=0;h<t.parts.length;h++){s.matrices[h].copy(n.deathMatrices[h]);const u=t.joints[t.parts[h].joint].name,d=(u.startsWith("knee")?.012:u.includes("hand")?.009:u.includes("Jaw")?.006:0)*a.buckle;s.matrices[h].elements[13]-=d,s.matrices[h].premultiply(_e),(u.includes("paper")||u.includes("Flower"))&&(s.matrices[h].elements[12]+=.012*a.settle*l)}const c=Gn(t.parts,s);return Qn.makeTranslation(0,-c.low,0),qt(s,Qn,t.parts),s.alpha=Oo(i,e.time),s.envelope=Gn(t.parts,s),s.grounded=Math.abs(s.envelope.low)<1e-5,s}function Gs(r,e,n,t,i=La(e.attemptId),s=!1){if(!r.neural||r.sourceId!==t.id)throw Error("B1 pose requires matching neural actor and recipe");fl(n,t);const o=n.pose;if(gl(r,t,i,o),i.deadAt!==null)return Number.isFinite(n.lastTime)||Gs(r,e,n,t,{...i,deadAt:null},s),bl(r,e,n,t,i);const a=r.neural,l=!!r.stasis&&e.time<Math.max(r.stasis.until,r.stasis.thawUntil),c=!Number.isFinite(n.lastTime),h=c?0:tn(e.time-n.lastTime,0,.12);if(l&&!c)return n.frozen=!0,n.lastTime=e.time,n.lastX=r.x,n.lastZ=r.z,n.lastHeading=r.heading,o.alpha=1,o;const u=Math.hypot(r.x-n.lastX,r.z-n.lastZ);if(e.time<n.lastTime||n.id!==r.id||n.attemptId!==(e.attemptId??1)){const k=Ca(r,e.attemptId);return Object.assign(n,k),Gs(r,e,n,t,i,s)}n.speed=c?Math.hypot(a.vx,a.vz):h>0?u/h:n.speed,n.distance+=c||l?0:Math.min(u,Math.max(.5,r.radius*6));const p=1-Math.exp(-h*16);n.supportSpeed=c?n.speed:n.supportSpeed+(n.speed-n.supportSpeed)*p;const m=Math.atan2(Math.sin(r.heading-n.lastHeading),Math.cos(r.heading-n.lastHeading));n.turnRate=h>0?tn(m/h,-3,3):n.turnRate,n.supportTurn=c?n.turnRate:n.supportTurn+(n.turnRate-n.supportTurn)*(1-Math.exp(-h*11)),l||(n.clock+=h),n.lastTime=e.time,n.lastX=r.x,n.lastZ=r.z,n.lastHeading=r.heading,n.frozen=l;for(const k of e.projectiles)k.neural&&k.ownerId===r.id&&k.attemptId===e.attemptId&&k.id>n.lastReleaseId&&Number.isFinite(k.bornAt)&&(n.lastReleaseId=k.id,n.releaseAt=k.bornAt);for(const k of e.lifelikeEvents?.records??[])k.kind==="projectile"&&k.allegiance==="hostile"&&k.ownerId===r.id&&k.attemptId===e.attemptId&&k.projectileId>n.lastReleaseId&&Number.isFinite(k.bornAt)&&(n.lastReleaseId=k.projectileId,n.releaseAt=k.bornAt);for(let k=0;k<t.joints.length;k++)n.localPosition[k].set(...t.joints[k].position),n.localRotation[k].set(0,0,0),n.localScale[k].set(1,1,1);const b=k=>t.jointIndex[k],g=(k,j=0,Y=0,de=0)=>{const ee=b(k);ee!==void 0&&n.localRotation[ee].set(j,Y,de)},f=(k,j=0,Y=0,de=0)=>{const ee=b(k);ee!==void 0&&n.localPosition[ee].add(wn.set(j,Y,de))},w=(k,j=1,Y=1,de=1)=>{const ee=b(k);ee!==void 0&&n.localScale[ee].set(j,Y,de)},v=ml(r.id),E=n.clock,y=(k,j=0)=>Math.sin(E*k+v+j),M=s?.45:1,z=Mr[t.id],T=tn(n.supportSpeed/Math.max(a.speed,.01)),S=n.distance/Math.max(.17,r.radius*1.35)*jt,A=y(1.8)*M,R=a.state==="warmup"?tn(1-a.stateTimer/Math.max(a.stateDuration,.001)):0,N=a.state==="dash"?1:0,B=a.state==="recover"?1-tn(1-a.stateTimer/Math.max(a.stateDuration,.001)):0,H=tn(a.tell),K=e.time-n.releaseAt,I=K>=0&&K<.22?Math.sin(Math.PI*K/.22)*Math.exp(-K*8):0,L=tn(n.supportTurn/3,-1,1),ue=dl(i,e.time);for(const k of t.footJoints){const j=t.joints[k],Y=t.joints[j.parent],de=t.joints[Y.parent];if(!Y||!de)continue;const ee=j.name.includes("L")?0:Math.PI,Oe=j.name.includes("Back")?Math.PI:0,at=((S+ee+Oe)%jt+jt)%jt/jt,Se=t.g2Motion?.hero[t.id],bn=Se?.stance??z.stance,Vn=at<bn,Wn=Vn?at/bn:(at-bn)/(1-bn),Ye=T*(1-R*.78)*(1-N*.15),An=Se?Se.stride*Ye:(r.sourceId==="chair_knight"?.1:r.sourceId==="rabbit_glimpse"?.18:.135)*Ye*z.stride,rt=Vn?An/2-An*Wn:-An/2+An*Hs(Wn),lt=Vn?0:(Se&&t.g2Motion?qi(t.g2Motion.curves.support,Wn):Math.sin(Math.PI*Hs(Wn)))*Q.crowd.strideLift*Ye,dn=-Y.position[1],Xe=-j.position[1],ct=dn+Xe-lt-.001,un=Math.min(dn+Xe-5e-5,Math.hypot(ct,rt)),Be=Math.acos(tn((un*un-dn*dn-Xe*Xe)/(2*dn*Xe),-1,1)),ht=Math.atan2(rt,ct),dt=Math.atan2(Xe*Math.sin(Be),dn+Xe*Math.cos(Be));g(de.name,-ht-dt),g(Y.name,Be),g(j.name,ht+dt-Be)}switch(t.joints.forEach((k,j)=>{if(/^head\d*$/.test(k.name)&&g(k.name,y(.56,j*.17)*.012*M,y(.73,j*.49)*.026*M+L*.025,0),k.name.includes("Jaw")&&g(k.name,(.028+y(1.2,j*.21)*.015)*M+I*.05),k.name.includes("Lid")){const Y=(E+v+j*.039)%4.7,de=Y<.17?Math.sin(Math.PI*Y/.17):0;w(k.name,1,1+de*11,1),f(k.name,0,-de*.024,0)}k.name.includes("Flower")&&g(k.name,y(1.6,j*.2)*.055*M,0,y(1.1,j*.3)*.03*M),k.name.includes("paper")&&g(k.name,y(3.1,j*.6)*.07*T+y(1.9,j*.7)*.025*M,L*.03,0),k.name.includes("Finger")&&g(k.name,.05+H*.13+y(1.1,j*.4)*.02*M-I*.13),k.name.includes("Thumb")&&g(k.name,y(1.3,j)*.04*M+R*.06)}),r.sourceId){case"signal_echo":w("chest",1+A*.012,1+A*.008,1+A*.02),g("chest",.035+T*.012,0,-L*.02),g("head",-.025+y(.7)*.015,L*.028,0),f("handL",-ue*.025,0,0),f("handR",ue*.025,0,0),g("handL",y(1.4)*.025,0,.025),g("handR",y(1.4,.6)*.025,0,-.025);break;case"rabbit_glimpse":f("chest",0,-R*.026+B*.009,0),g("chest",-.075*R+.066*N,L*.04,0),g("head",R*.032-N*.025,L*.03,0);for(const k of["L","R"])g(`tab${k}`,-R*.13+N*.08+y(4,k==="L"?.2:.8)*T*.03),g(`hand${k}`,-R*.11+N*.1);break;case"notification_swarm":g("ring",y(2.6)*.03,L*.046,y(3.1)*.025);for(let k=0;k<5;k++)g(`petal${k}`,y(3.8,k*.9)*.08,0,y(2.7,k)*.045),f(`head${k}`,0,y(2.1,k*.7)*.004,0);break;case"flank_drone":g("chest",-T*.025,L*.05,-T*.034);for(let k=0;k<6;k++)g(`crescent${k}`,y(1.8,k*.6)*.03,L*.028,0);g("elbowR",-.07*H+.11*I,L*.03),g("handR",-.08*H+.12*I);break;case"chair_knight":f("chest",0,-Math.abs(Math.sin(S))*.01*T,0),g("chest",-ue*.027,Math.sin(S)*.012*T,-L*.018),g("head",y(.5)*.016,L*.016),g("poleL",y(1.2)*.018*M),g("poleR",y(1.2,.7)*.018*M);break;case"hammer_rabbit":w("chest",1+A*.012,1+A*.005,1+A*.018),g("chest",-R*.033+N*.03,Math.sin(S)*-.025*T,-L*.018),f("pelvis",0,-R*.014,0);for(const k of["L","R"])g(`shoulder${k}`,-R*.045+N*.034+Math.sin(S+(k==="L"?0:Math.PI))*.024*T),g(`elbow${k}`,R*.058-B*.023),g(`hand${k}`,-R*.105+N*.064+y(1.4,k==="L"?0:.5)*.025*M);break;case"apex_rabbit":w("chest",1+A*.012,1-R*.065+A*.008,1+R*.025),g("chest",-.025*R+.032*N,Math.sin(S)*.025*T,-L*.02),g("head",R*.025-N*.02,L*.025);for(let k=0;k<3;k++)g(`tab${k}`,-R*.06+N*.08+y(2.2,k)*.035*M);break;case"evolution_rabbit":g("chest",-R*.027+N*.025,L*.026,Math.sin(S)*.01*T);for(let k=0;k<5;k++)g(`crown${k}`,-R*.035+N*.04+y(1.7,k*.6)*.035+I*.025),g(`head${k}`,y(.65,k*.7)*.018+I*.031,L*.028+y(.8,k*.5)*.025);break;case"arc_turret":w("chest",1+A*.011,1+A*.007,1+A*.018);for(const k of["L","R"])g(`shoulder${k}`,-H*.045),g(`elbow${k}`,H*.065-I*.08),g(`hand${k}`,-H*.08+I*.1);break;case"name_glitch_shade":for(let k=0;k<6;k++)f(`spine${k}`,y(4.5,k*.52)*.03*T,0,0),g(`spine${k}`,0,L*.04,y(2.2,k*.5)*.035);g("strandL",y(2.5,.7)*.07,L*.07),g("strandR",y(2.5,1.2)*.07,L*.06);break;case"speaker_wraith":w("diaphragm",1+y(5.7)*.018+H*.06,1+y(5.7)*.015+H*.03,1+I*.09),f("diaphragm",0,0,-I*.035),g("chest",-H*.022+I*.034,L*.026),g("supportL",y(1.4)*.016),g("supportR",y(1.4,.9)*.016);break;case"loop_ghost":g("loop",y(1.5)*.024,y(1.2)*.075+L*.037,0),g("strandL",y(2.7,.6)*.09,L*.06),g("strandR",y(2.7,1.3)*.09,L*.065),g("strandBack",y(2.7,2)*.08);break;case"decay_mote":g("diamond",y(4.4)*.028,L*.055,y(5.2)*.04);for(let k=0;k<4;k++)g(`flutter${k}`,y(10.3,k*.8)*.13,0,y(8.7,k)*.08);break;case"double":for(const k of[-1,1]){const j=k<0?"L":"R",Y=k<0?0:.18;g(`column${j}`,y(2.2,Y)*.016,-k*Math.sin(S+Y)*.037*T,-k*L*.035),f(`column${j}`,0,Math.sin(S+Y)*k*.012*T,0),g(`strand${j}`,-k*Math.sin(S+Y)*.04*T)}break;case"dual":g("dart",-T*.038,L*.065,y(3.6)*.021),g("finL",y(5.1)*.038,L*.04),g("finR",y(5.1,.6)*.038,L*.04);break;case"cell_blob":for(const k of[-1,1]){const j=k<0?"L":"R",Y=y(6,k*.6);w(`lobe${j}`,1+Y*.036,1-Y*.028,1+Y*.018),g(`lobe${j}`,0,L*.045,k*Y*.016),f(`lobe${j}`,k*Y*.006,0,0)}w("seam",1,1-y(6)*.014,1);break;case"reach_shadow":g("forearm",-.06*H,L*.05),g("palm",-.055*H+y(2.8)*.012,L*.03);for(let k=0;k<4;k++)g(`finger${k}`,.22*(1-H)+y(1.7,k*.6)*.025),g(`fingerTip${k}`,.23*(1-H));g("thumb",H*.1);break;case"drift_hound":g("chest",y(4.5)*.023,Math.sin(S)*.035*T,-L*.024),w("chest",1,1+y(2.3)*.012,1+y(2.3)*.017),g("muzzle",y(4.5,.3)*.018,L*.037),g("tail",y(3.3,.6)*.07,-L*.08);break}const F=(k,j=0,Y=0,de=0)=>{const ee=b(k);ee!==void 0&&(n.localRotation[ee].x+=j,n.localRotation[ee].y+=Y,n.localRotation[ee].z+=de)};switch(r.sourceId){case"signal_echo":F("chest",y(.85)*.007*M),F("head",-y(.85,.14)*.008*M),F("handL",y(1.1)*.012*M,0,-H*.007),F("handR",y(1.1,.3)*.009*M,0,H*.007);break;case"rabbit_glimpse":F("head",-.015*B),F("tabL",-.027*B+y(5.1)*.012*T),F("tabR",-.021*B+y(5.1,.5)*.013*T),F("handL",.022*B),F("handR",.018*B);break;case"notification_swarm":for(let k=0;k<5;k++)F(`head${k}`,y(.91,k*1.13)*.01*M,y(.62,k*.91)*.012*M),F(`petal${k}`,y(2.15,k*1.3)*.018*M,0,-L*.01);break;case"flank_drone":F("chest",0,-L*.012,L*.009),F("handR",-.035*I);for(let k=0;k<6;k++)F(`crescent${k}`,y(2.1,k*.54-.3)*.012*M);break;case"chair_knight":F("chest",Math.sin(S*2-.25)*.008*T),F("head",-Math.sin(S*2-.36)*.006*T),F("poleL",-L*.009,0,y(.85)*.008*M),F("poleR",-L*.009,0,y(.85,.7)*.007*M);break;case"hammer_rabbit":for(const k of["L","R"]){const j=k==="L"?0:.35;F(`shoulder${k}`,y(1.3,j)*.01*M),F(`elbow${k}`,-y(1.3,j-.2)*.013*M),F(`hand${k}`,y(1.3,j-.4)*.018*M+.018*B),F(`hand${k}Thumb`,y(1.05,j)*.014*M)}break;case"apex_rabbit":F("chest",Math.sin(S*2-.2)*.01*T,0,Math.sin(S)*.005*T),F("head",-Math.sin(S*2-.4)*.009*T);for(let k=0;k<3;k++)F(`tab${k}`,y(2.35,k*.8)*.012*M-.015*B);break;case"evolution_rabbit":for(let k=0;k<5;k++)F(`head${k}`,y(.82,k*1.19)*.008*M,y(.59,k*1.31)*.012*M),F(`crown${k}`,-y(.82,k*1.19-.3)*.014*M),F(`paper${k}`,y(2.2,k*.72)*.015*M);break;case"arc_turret":F("chest",-.01*H+.014*I);for(const k of["L","R"]){F(`elbow${k}`,-.018*I),F(`hand${k}`,.025*I);for(let j=0;j<4;j++)F(`hand${k}Finger${j}`,(j+1)*.005*H)}break;case"name_glitch_shade":for(let k=0;k<6;k++)F(`spine${k}`,y(1.45,k*.44)*.009*M,y(1.1,k*.52)*.012*M);break;case"speaker_wraith":F("chest",.012*I),F("supportL",-y(1.5)*.009*M),F("supportR",-y(1.5,.8)*.009*M),f("diaphragm",0,0,y(2.2)*.004*M);break;case"loop_ghost":F("loop",y(.72)*.011*M,0,y(1.13)*.01*M),F("strandBack",y(1.13,.4)*.022*M);break;case"decay_mote":for(let k=0;k<4;k++)F(`flutter${k}`,y(6.7,k*1.1)*.022*M,0,y(3.8,k*.9)*.012*M);break;case"double":F("bridge",0,-Math.sin(S-.18)*.012*T),F("columnL",y(.92)*.009*M),F("columnR",-y(.92,.24)*.009*M);break;case"dual":F("dart",y(1.65)*.008*M),F("finL",y(2.1)*.013*M,-L*.015),F("finR",y(2.1,.36)*.013*M,-L*.015);break;case"cell_blob":for(const k of[-1,1]){const j=b(`lobe${k<0?"L":"R"}`);if(j!==void 0){const Y=n.localScale[j];Y.y=1/(Y.x*Y.z),F(`lobe${k<0?"L":"R"}`,y(1.2,k)*.008*M)}}break;case"reach_shadow":for(let k=0;k<4;k++)F(`finger${k}`,y(1.15,k*.45)*.007*M),F(`fingerTip${k}`,-y(1.15,k*.45-.25)*.008*M);F("thumb",y(.95)*.009*M);break;case"drift_hound":F("chest",Math.sin(S*2-.18)*.011*T),F("muzzle",-Math.sin(S*2-.32)*.009*T),F("tail",y(2.15)*.018*M,Math.sin(S-.42)*.012*T);break}const oe=T*(1-R*.8)*(1-N*.55),hn=Math.sin(S*2-.32),ce=Math.sin(S-.2);for(let k=0;k<t.joints.length;k++){const j=t.joints[k].name,Y=n.localRotation[k];if(["chest","bridge","diamond","dart","loop","palm"].includes(j)&&(Y.y-=ce*Q.crowd.torsoCounter*oe,Y.z+=L*.006*M,t.footJoints.length&&(n.localPosition[k].y-=Math.max(0,hn)*Q.crowd.settle*oe*z.settle)),/paper|Flower|crown|tab|strand|tail|fin|flutter|petal|pole|crescent/.test(j)){const de=Math.sin(S-.5-k*.11)*T*.009+Math.sin(E*1.12+v+k*.37)*.008*M;Y.x+=de*(1-R*.35)*z.follow,Y.z-=L*.008}/^head\d*$/.test(j)&&(Y.y+=ce*.004*oe)}G0(t,r,n.localPosition,n.localRotation,E,S,T,R,N,B,L,s);for(let k=0;k<t.joints.length;k++){const j=t.joints[k].name;i.region==="head"&&/^head\d*$/.test(j)?n.localRotation[k].x-=ue*.075:i.region==="body"&&["chest","diamond","dart","loop","palm","bridge"].includes(j)&&(n.localRotation[k].x-=ue*.034)}for(let k=0;k<t.joints.length;k++){const j=t.joints[k],Y=n.localRotation[k];Y.set(tn(Y.x,-j.limit[0],j.limit[0]),tn(Y.y,-j.limit[1],j.limit[1]),tn(Y.z,-j.limit[2],j.limit[2])),No.setFromEuler(Y),n.joints[k].compose(n.localPosition[k],No,n.localScale[k]),j.parent>=0&&n.joints[k].premultiply(n.joints[j.parent])}for(let k=0;k<t.parts.length;k++)o.matrices[k].multiplyMatrices(n.joints[t.parts[k].joint],t.parts[k].fixed);o.alpha=1,pl(t,o);for(let k=0;k<o.matrices.length;k++)n.liveMatrices[k].copy(o.matrices[k]);return o}const ci=new we,Ms=new ie,Fo=new ie,Es=new V,Do=new V(16777215),wl=new V(10809343);class yl{constructor(e,n=new Set){this.excludedIds=n,this.root.name="g2-articulated-hero-crowd",e.add(this.root)}excludedIds;root=new W;recipes=new Map;pools=new Map;actors=new Map;remains=[];attempt=-1;stage=-1;time=-1;cursor=0;reduced=!1;disposed=!1;lastActors=0;actorBases=new Map;visibleParts=0;load(e,n){if(!(this.recipes.size||this.disposed))try{for(const i of Kt)this.excludedIds.has(i)||this.recipes.set(i,ll(i,e.get(i),n));const t=new Map;for(const i of this.recipes.values()){const s=new Map;for(const o of i.parts)s.set(o.batchKey,(s.get(o.batchKey)??0)+1);for(const o of i.parts){const a=s.get(o.batchKey);a>(t.get(o.batchKey)?.n??0)&&t.set(o.batchKey,{n:a,part:o})}}if(t.size>Q.caps.crowdDrawGroups)throw Error("G1 crowd draw-group cap exceeded");for(const[i,{n:s,part:o}]of t){const a=new X(o.geometry,o.material,(128+Fi)*s);a.name=`b1-joint-batch-${i}`,a.frustumCulled=!1,a.count=0,a.instanceMatrix.setUsage(le),this.pools.set(i,a),this.root.add(a)}}catch(t){throw this.clearLoadedResources(),t}}clearLoadedResources(){for(const e of this.pools.values())e.dispose(),e.removeFromParent();this.pools.clear();for(const e of this.recipes.values())e.dispose();this.recipes.clear(),this.reset()}setReduced(e){this.reduced=e,e&&(this.remains=this.remains.slice(-Di))}reset(){this.actors.clear(),this.remains=[],this.cursor=0,this.attempt=-1,this.stage=-1,this.time=-1,this.actorBases.clear();for(const e of this.pools.values())e.count=0}record(e,n){let t=this.actors.get(e.id);return t||(t={enemy:e,tracking:Ca(e,n.attemptId),damage:La(n.attemptId)},this.actors.set(e.id,t)),t.enemy=e,t}render(e,n=!0,t){for(const s of this.pools.values())s.count=0;if(this.lastActors=0,this.visibleParts=0,this.actorBases.clear(),this.root.visible=n&&!this.disposed,this.disposed)return;if((e.attemptId!==this.attempt||e.stage!==this.stage||e.time<this.time)&&(this.reset(),this.attempt=e.attemptId,this.stage=e.stage),this.time=e.time,e.phase==="dead"||e.phase==="complete"){this.actors.clear(),this.remains=[],this.cursor=e.lifelikeEvents?.serial??0;return}if(!n)return;for(const s of e.enemies)s.sourceId&&s.neural&&s.health>0&&!this.excludedIds.has(s.sourceId)&&this.record(s,e);for(const s of Ws(e,this.cursor)){if(this.cursor=Math.max(this.cursor,s.id),s.attemptId!==e.attemptId||s.kind==="projectile"||this.excludedIds.has(s.sourceId))continue;const o=this.record(s.snapshot,e);s.kind==="hit"&&hl(o.damage,s,s.targetId),s.kind==="removal"&&(s.reason==="killed"&&!this.remains.some(a=>a.enemy.id===s.targetId)&&e.time-s.time<vi&&(o.damage.deadAt===null&&(o.damage.deadAt=s.time),this.remains.push({enemy:structuredClone(s.snapshot),tracking:o.tracking,damage:o.damage,diedAt:s.time}),this.remains=this.remains.slice(-(this.reduced?Di:Fi))),this.actors.delete(s.targetId))}const i=new Set;for(const s of e.enemies){if(!s.sourceId||!s.neural||s.health<=0||this.lastActors>=128||this.excludedIds.has(s.sourceId))continue;const o=this.record(s,e);i.add(s.id),this.draw(o,e,!1),this.lastActors++}for(const s of this.actors.keys())i.has(s)||this.actors.delete(s);this.remains=this.remains.filter(s=>e.time>=s.diedAt&&e.time-s.diedAt<vi&&(!t||t.has(s.enemy.id))).slice(-(this.reduced?Di:Fi));for(const s of this.remains)this.draw(s,e,!0);for(const s of this.pools.values())s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}draw(e,n,t){const i=e.enemy;if(!i.sourceId||!i.neural)return;const s=this.recipes.get(i.sourceId);if(!s)return;const o=Gs(i,n,e.tracking,s,e.damage,this.reduced);ci.position.set(i.x,Me(n),i.z),ci.rotation.set(0,i.heading,0),ci.scale.set(i.radius,i.neural.height,i.radius),ci.updateMatrix(),Ms.copy(ci.matrix),t||this.actorBases.set(i.id,Ms.toArray());const a=i.flash>0?Do:i.stasis&&n.time<i.stasis.until?wl:Do;for(let l=0;l<s.parts.length;l++){const c=s.parts[l];if(!o.visible[l]||i.neural.child&&c.parentOnly)continue;const h=this.pools.get(c.batchKey);if(h.count>=h.instanceMatrix.count)throw new Error(`B1 batch overflow ${c.batchKey}`);Fo.multiplyMatrices(Ms,o.matrices[l]),h.setMatrixAt(h.count,Fo),Es.copy(c.color).multiply(a),t&&Es.multiplyScalar(Math.max(.35,o.alpha)),h.setColorAt(h.count++,Es),this.visibleParts++}}actorBase(e){const n=this.actorBases.get(e);return n?[...n]:null}geometryCosts(){return{drawGroups:this.pools.size,instanceCapacity:[...this.pools.values()].reduce((e,n)=>e+n.instanceMatrix.count,0),classes:Object.fromEntries([...this.recipes].map(([e,n])=>[e,n.geometryCost()])),measuredPerformance:null}}stats(){return{profile:Un.id,rollout:Un.rollout,actors:this.lastActors,remains:this.remains.length,trackedActors:this.actors.size,visibleParts:this.visibleParts,drawGroups:this.pools.size,capacity:128,remainsCapacity:this.reduced?Di:Fi,remainsSeconds:vi,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.pools.values())e.dispose();this.pools.clear();for(const e of this.recipes.values())e.dispose();this.recipes.clear(),this.actors.clear(),this.remains=[],this.root.removeFromParent()}}}class vl{root=new W;fragments;marks;contacts=[];seen=new Set;attempt=-1;time=-1;cursor=0;hitCursor=0;reduced=!1;disposed=!1;dummy=new we;axis=new _;up=new _(0,1,0);tint=new V;constructor(e){this.root.name="g2-confirmed-material-impacts",e.add(this.root);const n=new Ge;n.setAttribute("position",new Ce([0,.045,0,-.017,-.026,.012,.022,-.02,.008,0,-.014,-.017],3)),n.setIndex([0,1,2,0,2,3,0,3,1,1,3,2]),n.computeVertexNormals(),this.fragments=new X(n,new U({color:16777215,roughness:.35,metalness:.54,envMapIntensity:.65,emissive:7376793,emissiveIntensity:.18}),84),this.marks=new X(new Ke(.026,.042,12),new q({color:14152168,transparent:!0,opacity:.33,depthWrite:!1,side:re,toneMapped:!0}),24);for(const t of[this.fragments,this.marks])t.count=0,t.frustumCulled=!1,t.instanceMatrix.setUsage(le),this.root.add(t)}setReduced(e){this.reduced=e}reset(){this.contacts=[],this.seen.clear(),this.attempt=-1,this.time=-1,this.cursor=0,this.hitCursor=0,this.fragments.count=this.marks.count=0}add(e){this.seen.has(e.key)||(this.seen.add(e.key),this.contacts.push(e))}render(e,n=!0){if(this.fragments.count=this.marks.count=0,this.root.visible=n&&!this.disposed,this.disposed)return;if((e.attemptId!==this.attempt||e.time<this.time)&&(this.reset(),this.attempt=e.attemptId),this.time=e.time,!n||["ready","dead","complete"].includes(e.phase)){this.contacts=[];return}for(const o of e.lifelikeEvents?.records??[])if(!(o.id<=this.cursor)&&(this.cursor=Math.max(this.cursor,o.id),!(o.attemptId!==e.attemptId||e.time+1e-9>=o.time+1.2||e.time<o.time)))if(o.kind==="projectile"&&(o.reason==="hit"||o.reason==="geometry")){const a=o.targetId===void 0?void 0:e.enemies.find(u=>u.id===o.targetId),l=e.lifelikeEvents?.records.find(u=>(u.kind==="hit"||u.kind==="removal")&&u.attemptId===e.attemptId&&u.targetId===o.targetId),c=a?.sourceId??(l&&"sourceId"in l?l.sourceId:void 0),h=c&&["name_glitch_shade","speaker_wraith","loop_ghost","decay_mote","double","dual","cell_blob","reach_shadow","drift_hound"].includes(c);this.add({key:`p${o.id}`,at:o.time,x:o.x,y:o.y,z:o.z,vx:o.vx,vy:o.vy,vz:o.vz,layer:o.region==="boss"?"boss":o.reason==="geometry"?"world":h?"code":"bone",seed:o.id})}else o.kind==="hit"&&o.cause==="sword"&&this.add({key:`s${o.id}`,at:o.time,x:o.x,y:o.y,z:o.z,vx:o.x-e.slamImpactX,vy:.8,vz:o.z-e.slamImpactZ,layer:"bone",seed:o.id});for(const o of e.hitEvents??[])o.id<=this.hitCursor||(this.hitCursor=Math.max(this.hitCursor,o.id),o.attemptId===e.attemptId&&Number.isFinite(o.damage)&&o.damage>0&&o.time<=e.time&&o.region==="boss"&&e.time+1e-9<o.time+1.2&&!e.lifelikeEvents?.records.some(a=>a.kind==="projectile"&&a.reason==="hit"&&a.targetId===o.targetId&&a.time===o.time)&&this.add({key:`b${o.id}`,at:o.time,x:o.x,y:o.y,z:o.z,vx:o.x-e.player.x,vy:.5,vz:o.z-e.player.z,layer:"boss",seed:o.id}));this.contacts=this.contacts.filter(o=>e.time+1e-9<o.at+1.2).slice(-(this.reduced?8:24));const t=new Set(this.contacts.map(o=>o.key));for(const o of this.seen)t.has(o)||this.seen.delete(o);const i=this.reduced?32:84,s=this.reduced?4:6;for(const o of this.contacts){const a=e.time-o.at,l=o.layer==="code"?12688117:o.layer==="boss"?15774331:o.layer==="world"?10934233:15851453;if(this.axis.set(o.vx,o.vy,o.vz),this.axis.lengthSq()<1e-9&&this.axis.set(0,-1,0),this.axis.normalize().multiplyScalar(-1),e.time+1e-9<o.at+.65)for(let c=0;c<s&&this.fragments.count<i;c++){const h=o.seed*.73+c*2.399963,u=.11+c%3*.18,d=1-a/.65;this.dummy.position.set(o.x,o.y,o.z).addScaledVector(this.axis,a*(c===0?.07:.7)),c>0&&(this.dummy.position.x+=Math.cos(h)*a*u,this.dummy.position.z+=Math.sin(h)*a*u,this.dummy.position.y+=Math.sin(h*.71)*a*.35-a*a*.45),this.dummy.rotation.set(h,a*(this.reduced?0:3.2)+h*.3,c);const p=c===0?Math.max(.05,1-a/.085)*2.4:d*(o.layer==="boss"?1.1:.8);this.dummy.scale.set(p*(o.layer==="code"?.4:1),p,p*.38),this.dummy.updateMatrix(),this.fragments.setMatrixAt(this.fragments.count,this.dummy.matrix),this.fragments.setColorAt(this.fragments.count++,this.tint.setHex(c===0?16252912:l))}if(this.marks.count<(this.reduced?8:24)){this.dummy.position.set(o.x,o.y,o.z).addScaledVector(this.axis,.007),o.y-Me(e)<.24?(this.dummy.position.y=Me(e)+.018,this.dummy.rotation.set(-Math.PI/2,0,0)):this.dummy.quaternion.setFromUnitVectors(new _(0,0,1),this.axis);const c=1-a/1.2;this.dummy.scale.setScalar((.65+a*.45)*c),this.dummy.updateMatrix(),this.marks.setMatrixAt(this.marks.count,this.dummy.matrix),this.marks.setColorAt(this.marks.count++,this.tint.setHex(l))}}this.fragments.instanceMatrix.needsUpdate=!0,this.marks.instanceMatrix.needsUpdate=!0,this.fragments.instanceColor&&(this.fragments.instanceColor.needsUpdate=!0),this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0)}stats(){return{contacts:this.contacts.length,particles:this.fragments.count,decals:this.marks.count,maxParticles:this.reduced?32:84,maxDecals:this.reduced?8:24,particleSeconds:.65,decalSeconds:1.2,lights:0,actualEventsOnly:!0,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0;for(const e of[this.fragments,this.marks])e.dispose(),e.geometry.dispose(),e.material.dispose();this.contacts=[],this.seen.clear(),this.root.removeFromParent()}}}function xl(r,e=Q.effects.contactEmission){return new U({color:r,emissive:r,emissiveIntensity:e,roughness:.39,metalness:.08,envMapIntensity:.36})}function kl(r){r instanceof q?r.toneMapped=!0:r instanceof U&&(r.roughness=Math.max(.3,r.roughness),r.envMapIntensity=.42)}const Mt=Object.freeze({phaseSeconds:4,coreOpacity:1,wobble:.018,reducedWobble:0,tailLength:.12,reducedTailLength:.085,tailRadius:.38,minimumColor:.0096,maximumColor:1,maximumEmission:1.6}),Ml=Math.PI*2;function El(r){return Number.isFinite(r)?(r%4+4)%4*Ml/4:0}function Tl(r,e){return Math.min(e?Mt.reducedTailLength:Mt.tailLength,Math.max(0,Number.isFinite(r)?r:0)*1.45)}class Sl{core;tail;phase={value:0};wobble={value:Mt.wobble};constructor(){this.core=this.material(!1),this.tail=this.material(!0)}material(e){const n=new U({name:e?"rk-liquid-round-tail-v03":"rk-liquid-round-core-v03",color:16777215,emissive:16777215,emissiveIntensity:1,roughness:.18,metalness:.08,envMapIntensity:.36,opacity:1,transparent:!1,depthWrite:!0});return n.customProgramCacheKey=()=>e?"rk-liquid-round-tail-v03":"rk-liquid-round-core-v03",n.onBeforeCompile=t=>{t.uniforms.rainbowPhase=this.phase,t.uniforms.rainbowWobble=this.wobble,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRainbowLocal;
uniform float rainbowPhase;
uniform float rainbowWobble;`).replace("#include <begin_vertex>",`#include <begin_vertex>
     vRainbowLocal=position;
     ${e?"":"transformed*=1.0+rainbowWobble*sin(position.y*3.0+rainbowPhase)*sin(position.x*2.0-rainbowPhase);"}
    `),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRainbowLocal;
uniform float rainbowPhase;`).replace("#include <color_fragment>",`#include <color_fragment>
     vec3 rainbowP=vRainbowLocal;
     float rainbowWarp=sin(rainbowP.y*2.2+rainbowPhase)*.38+sin(rainbowP.z*1.8-rainbowPhase)*.22;
     float rainbowBand=rainbowP.x*1.1+rainbowP.y*2.0+rainbowP.z*.7+rainbowWarp-rainbowPhase;
     float rainbowPocket=.32+.68*(.5+.5*sin(rainbowP.x*2.4-rainbowP.y*1.6+rainbowP.z+rainbowPhase));
     vec3 rainbowColor=(.03+.97*(.5+.5*cos(rainbowBand+vec3(0.0,2.0943951023931953,4.1887902047863905))))*rainbowPocket;
     diffuseColor.rgb*=rainbowColor;
    `).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
     // Thin view-facing rim and bounded glossy catch share the existing draw.
     vec3 rainbowView=normalize(vViewPosition+vec3(0.0,0.0,.000001));
     float rainbowRim=pow(clamp(1.0-abs(dot(normal,rainbowView)),0.0,1.0),8.0);
     float rainbowGloss=pow(clamp(dot(normal,normalize(vec3(-.35,.5,1.0))),0.0,1.0),36.0);
     totalEmissiveRadiance=rainbowColor*${e?".24":".52"}+rainbowColor*rainbowRim*${e?".18":".48"}+vec3(rainbowGloss*${e?".16":".60"});
    `)},n}update(e,n){this.phase.value=El(e),this.wobble.value=n?Mt.reducedWobble:Mt.wobble}reset(){this.phase.value=0,this.wobble.value=Mt.wobble}}const Ie=new we,zl=new _(0,1,0),bt=new _;function Ts(r,e=1){return xl(r,e)}function hi(r,e,n,t){const i=new X(r,e,n);return i.name=t,i.frustumCulled=!1,i.count=0,i.instanceMatrix.setUsage(le),i}function Ss(r,e,n){r.count>=r.instanceMatrix.count||(Ie.position.set(e.x,e.y,e.z),Ie.rotation.set(0,0,0),Ie.scale.setScalar(n),Ie.updateMatrix(),r.setMatrixAt(r.count++,Ie.matrix))}function Ho(r,e,n,t,i){if(r.count>=r.instanceMatrix.count)return;bt.set(n.x,n.y,n.z);const s=bt.length();s<1e-8||(bt.multiplyScalar(1/s),Ie.position.set(e.x-bt.x*i*.5,e.y-bt.y*i*.5,e.z-bt.z*i*.5),Ie.quaternion.setFromUnitVectors(zl,bt),Ie.scale.set(t,i,t),Ie.updateMatrix(),r.setMatrixAt(r.count++,Ie.matrix))}class Al{root=new W;friendly;hostile;friendlyTail;hostileTail;hostileRim;g2;liquid=new Sl;all;attempt=-1;lastTime=-1;stage=-1;reduced=!1;disposed=!1;constructor(e){this.root.name="g2-real-projectiles",e.add(this.root),this.g2=new vl(this.root),this.friendly=hi(new je(1,10,6),this.liquid.core,128,"all-neural-friendly-rounds"),this.hostile=hi(new je(1,12,8),Ts(16748252,Q.effects.hostileEmission),192,"b1-neural-hostile-orbs"),this.friendlyTail=hi(new Mn(1,.08,1,8),this.liquid.tail,128,"b1-friendly-velocity-tails"),this.hostileTail=hi(new Mn(.2,1,1,8),Ts(10961049,Q.effects.tailEmission),192,"b1-hostile-velocity-tails"),this.hostileRim=hi(new Te(1,.09,4,12),Ts(16765931,.4),192,"b1-hostile-curved-bands"),this.all=[this.friendly,this.hostile,this.friendlyTail,this.hostileTail,this.hostileRim],this.root.add(...this.all)}setReduced(e){this.reduced=e,this.g2.setReduced(e)}reset(){this.g2.reset(),this.liquid.reset(),this.attempt=-1,this.lastTime=-1,this.stage=-1;for(const e of this.all)e.count=0}render(e,n=!0){for(const t of this.all)t.count=0;if(this.root.visible=n&&!this.disposed,!this.disposed){if((this.attempt!==e.attemptId||e.time<this.lastTime||this.stage!==e.stage)&&(this.reset(),this.attempt=e.attemptId,this.stage=e.stage),this.lastTime=e.time,e.phase==="dead"||e.phase==="complete"){this.g2.render(e,!1);return}if(n){this.liquid.update(e.time,this.reduced);for(const t of e.friendlyBolts){if(t.life<=0||this.friendly.count>=128)continue;const i=t.radius??.08;Ss(this.friendly,t,i),Ho(this.friendlyTail,t,{x:t.vx,y:t.vy,z:t.vz},i*Mt.tailRadius,Tl(i,this.reduced))}for(const t of e.projectiles){if(!t.neural||t.owner==="boss"||t.kind||t.life<=0||this.hostile.count>=192)continue;const i=t.radius??.12;if(Ss(this.hostile,t,i),Ho(this.hostileTail,t,{x:t.vx,y:t.vy,z:t.vz},i*.45,this.reduced?.1:Q.effects.hostileTail),!this.reduced){const s=this.hostileRim.count;Ss(this.hostileRim,t,i*.96),Ie.rotation.set(e.time*2+t.id,t.id*.81,e.time*.7),Ie.scale.setScalar(i*.96),Ie.position.set(t.x,t.y,t.z),Ie.updateMatrix(),this.hostileRim.setMatrixAt(s,Ie.matrix)}}this.g2.render(e,n);for(const t of this.all)t.instanceMatrix.needsUpdate=!0}}}stats(){return{friendly:this.friendly.count,hostile:this.hostile.count,contacts:this.g2.stats().contacts,g2:this.g2.stats(),maxFriendly:128,maxHostile:192,maxContacts:96,actualContactsOnly:!0,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0,this.g2.dispose();for(const e of this.all)e.dispose(),e.geometry.dispose(),e.material.dispose();this.root.removeFromParent()}}}function Rl(r,e,n,t){const i=r.getAttribute("position"),s=r.getAttribute("color"),o=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){const l=e+i.getX(a),c=n+i.getY(a),h=t+i.getZ(a),u=Math.exp(-(l*l+h*h)/125),d=Math.exp(-Math.max(0,c)*1.7),p=c>5.4?.03:0;o[a*3]=(s?s.getX(a):1)*(.91+.065*u+p),o[a*3+1]=(s?s.getY(a):1)*(.94+.03*u-d*.023),o[a*3+2]=(s?s.getZ(a):1)*(.96+.012*u-d*.045)}r.setAttribute("color",new rn(o,3))}function _l(r,e,n){r.color.setHex(14477800),r.groundColor.setHex(5460318),r.intensity=1.12,e.color.setHex(16770491),e.intensity=2.93,e.position.set(-11,22,-7),n.color.setHex(11852260),n.intensity=.52,n.position.set(10,7,10)}function Il(r,e){for(const n of r.children)n instanceof zn?(n.color.setHex(14740180),n.groundColor.setHex(4148553),n.intensity=1.2):n instanceof Pe&&(n.position.x<0?(n.color.setHex(16768945),n.intensity=2.91):(n.color.setHex(12506588),n.intensity=.43));for(const n of e.children)n instanceof zn?(n.color.setHex(12900824),n.groundColor.setHex(6707023),n.intensity=.94):n instanceof Jt&&(n.color.setHex(n.position.x<0?10471885:14924443),n.intensity=n.position.x<0?8:9.8)}function Ll(r,e){const n=new V;for(let t=0;t<r.count;t++){r.instanceColor?r.getColorAt(t,n):n.setHex(16777215);const i=.91+t%5*.017;n.multiply(new V(i,i+(e?.035:.018),i-.025)),r.setColorAt(t,n)}r.instanceColor&&(r.instanceColor.needsUpdate=!0)}class Cl{last=NaN;attempt=-1;time=0;sample(e,n){return n!==this.attempt||e<this.last?(this.time=0,this.last=e,this.attempt=n):Number.isFinite(this.last)&&(this.time+=Math.max(0,Math.min(.12,e-this.last))),this.last=e,this.time}reset(){this.last=NaN,this.attempt=-1,this.time=0}}class Pl{rows=[];clock=new Cl;matrix=new ie;flex=new ie;disposed=!1;add(e,n=!1){e.traverse(t=>{if(!(t instanceof X)||this.rows.some(h=>h.mesh===t))return;const i=Array.isArray(t.material)?t.material:[t.material];if(!n&&!i.some(h=>h.alphaTest>0||/twig|needle|fern/i.test(h.name)))return;const s=Array.from({length:t.count},(h,u)=>{const d=new ie;return t.getMatrixAt(u,d),d});t.computeBoundingSphere(),t.geometry.computeBoundingSphere();const o=t.boundingSphere.clone(),a=t.geometry.boundingSphere,l=s.reduce((h,u)=>Math.max(h,u.getMaxScaleOnAxis()),0),c=n?Q.motion.fernRadians:Q.motion.foliageRadians;t.boundingSphere.radius+=(a.center.length()+a.radius)*l*c,this.rows.push({mesh:t,fern:n,base:s,bounds:o})})}update(e,n,t){if(this.disposed)return;const i=this.clock.sample(e,n),s=Q.motion;for(const o of this.rows){const a=(o.fern?s.fernRadians:s.foliageRadians)*(t?s.reducedWind:1);for(let l=0;l<o.base.length;l++){const c=l*2.399963,h=(Math.sin(i*.83+c)*.7+Math.sin(i*1.61+c*.47)*.3)*a;this.flex.makeRotationZ(h),this.matrix.multiplyMatrices(o.base[l],this.flex),o.mesh.setMatrixAt(l,this.matrix)}o.mesh.instanceMatrix.needsUpdate=!0}}stats(){return{groups:this.rows.length,instances:this.rows.reduce((e,n)=>e+n.base.length,0),clock:this.clock.time,maxTreeRadians:Q.motion.foliageRadians,maxFernRadians:Q.motion.fernRadians,newDraws:0}}dispose(){if(!this.disposed){this.disposed=!0;for(const e of this.rows)e.base.forEach((n,t)=>e.mesh.setMatrixAt(t,n)),e.mesh.instanceMatrix.needsUpdate=!0,e.mesh.boundingSphere?.copy(e.bounds);this.rows=[],this.clock.reset()}}}function Ol(r,e){for(let n=0;n<r.count;n++){const t=.91+n%7*.017;r.setColorAt(n,new V().setRGB(t*(e?.98:1),t,t*.96))}r.instanceColor&&(r.instanceColor.needsUpdate=!0)}function Nl(r,e,n,t){const i=r.getAttribute("position"),s=new Float32Array(i.count*3);for(let o=0;o<i.count;o++){const a=i.getX(o)+e,l=i.getY(o)+n,c=i.getZ(o)+t,h=.97+.018*Math.sin(a*.83+c*.61)+.012*Math.sin(c*2.3-a*.29),u=.045*Math.max(0,1-Math.max(0,l)/.65),d=Math.max(.88,Math.min(1,h-u));s.set([d,d*.996,d*.983],o*3)}r.setAttribute("color",new rn(s,3))}const Hi="/assets/level2-environment/",Yi={leftX:-6.955,rightX:G.width/2+.13,topY:.68,halfDepth:G.depth/2},Fl=(r,e=0,n=1)=>Math.max(e,Math.min(n,r)),Go=r=>{const e=Fl(r);return e*e*(3-2*e)},Z=new we;class jo{root=new W;forest=new W;lower=new W;common=new W;clearing=new W;lip=new W;releaseOutline;forestLights=new W;lowerLights=new W;forestLighting=[];lowerLighting=[];forestFog=new xn(13159611,29,64);lowerFog=new xn(6120031,23,51);forestSky=new V(14014407);lowerSky=new V(6449251);blendedSky=new V;blendedFog=new xn(14076848,22,59);groundMaterial=new U({color:11054485,roughness:.96,metalness:0,envMapIntensity:.37});trailMaterial=new U({color:12038039,roughness:.93,metalness:0,envMapIntensity:.36});rockMaterial=new U({color:10920080,roughness:.89,metalness:0,envMapIntensity:.4});farPineMaterial=new U({color:16777215,roughness:1,envMapIntensity:.25,alphaTest:.38,side:re,depthWrite:!0});farPines;geometries=new Set;materials=new Set;textures=new Set;target=null;loaded=!1;disposed=!1;active=!1;forestVisible=!1;lowerVisible=!1;phase="forest";triangleBudget=0;viewTriangles={forest:0,grotto:0,shaft:0,clearing:0};instances=0;reduced=!1;cosmeticGround=new W;boundaryRails=new W;lowerLedges=new W;wind=new Pl;constructor(e){this.root.name="level-2-forest-grotto",this.root.visible=!1,e.add(this.root),this.forest.name="sunrise-pine-clearing",this.lower.name="dry-shaft-grotto",this.common.name="shared-open-shaft",this.clearing.name="coherent-clearing-floor",this.lip.name="retained-shaft-lip",this.forestLights.name="forest-illumination",this.lowerLights.name="grotto-illumination",this.root.add(this.forest,this.lower,this.common,this.forestLights,this.lowerLights),this.forest.add(this.clearing),this.common.add(this.lip);const n=G.width,t=G.depth;this.plane(n,t,0,0,0,this.groundMaterial,this.clearing);const i=new Ge().setFromPoints([new _(-n/2+.04,.018,-t/2+.04),new _(n/2-.04,.018,-t/2+.04),new _(n/2-.04,.018,t/2-.04),new _(-n/2+.04,.018,t/2-.04)]);this.releaseOutline=new Vs(i,new Si({color:13938807,transparent:!0,opacity:0,depthWrite:!1})),this.releaseOutline.name="support-release-outline",this.clearing.add(this.releaseOutline);const s=62;for(const o of[-1,1])this.plane(s,(s-t)/2,0,-.025,o*(t+(s-t)/2)/2,this.groundMaterial,this.forest),this.plane((s-n)/2,t,o*(n+(s-n)/2)/2,-.025,0,this.groundMaterial,this.forest);this.plane(n+3.2,t+3.2,0,Pn.lowerY,0,this.trailMaterial,this.common),this.cosmeticGround.name="cosmetic-pine-floor-detail",this.clearing.add(this.cosmeticGround),this.boundaryRails.name="visible-left-right-rock-root-lanes",this.forest.add(this.boundaryRails),this.lowerLedges.name="dry-limestone-footing-and-strata",this.lower.add(this.lowerLedges),this.makeGroundDetail(),this.makeBerm(),this.makeBoundaryRails(),this.makeShaft(),this.makeLowerLedges(),this.makeFarPines(),this.makeLight(),Il(this.forestLights,this.lowerLights),this.remember(this.root)}makeBerm(){const e=[],n=[],t=[];for(let a=0;a<3;a++){const l=[],c=[.025,.75,2.1][a];for(let h=0;h<48;h++){const u=h/48*Math.PI*2,d=Math.cos(u),p=Math.sin(u),m=Math.min((G.width/2+c)/Math.max(.001,Math.abs(d)),(G.depth/2+c)/Math.max(.001,Math.abs(p)));l.push(new _(d*m,a===1?.92+Math.sin(h*2.7)*.13:a===0?.025:.04,p*m))}t.push(l)}const i=a=>{e.push(a.x,a.y,a.z),n.push(a.x/1.8,a.z/1.8)};for(let a=0;a<2;a++)for(let l=0;l<48;l++){const c=(l+1)%48,h=t[a][l],u=t[a][c],d=t[a+1][l],p=t[a+1][c];for(const m of[h,u,d,u,p,d])i(m)}const s=new Ge;s.setAttribute("position",new Ce(e,3)),s.setAttribute("uv",new Ce(n,2)),s.computeVertexNormals();const o=new P(s,this.rockMaterial);o.name="continuous-perimeter-rock-bank",this.forest.add(o)}makeBoundaryRails(){const e=new X(new go(1,0),this.rockMaterial,36);e.name="thirty-six-boundary-limestone-blocks";const n=new U({color:6181184,roughness:1,metalness:0});for(const[t,i]of[-1,1].map(s=>[s,s*(G.width/2+.4)])){for(let s=0;s<18;s++){const o=-6.7700000000000005+s*(G.depth-.76)/17;Z.position.set(i+t*(.025*Math.sin(s*3.17)),.26+s%3*.05,o),Z.rotation.set(.09*Math.sin(s),s*1.57,.07*Math.cos(s)),Z.scale.set(.29,.37+s%4*.045,.44),Z.updateMatrix(),e.setMatrixAt((t<0?0:18)+s,Z.matrix)}for(let s=0;s<2;s++){const o=[];for(let h=0;h<=18;h++)o.push(new _(t*(G.width/2+.17+s*.12+.025*Math.sin(h*2.1)),.51+s*.16+.035*Math.sin(h*1.39),-14.3/2+.38+h*(G.depth-.76)/18));const a=new Er(o),l=new Tr(a,54,s===0?.075:.055,5,!1),c=new P(l,n);c.name=`${t<0?"left":"right"}-continuous-root-rail-${s}`,this.boundaryRails.add(c)}}e.computeBoundingSphere(),this.boundaryRails.add(e),this.instances+=36}makeLowerLedges(){const n=new X(new go(1,0),this.rockMaterial,56);n.name="dry-perimeter-limestone-taluses";for(let s=0;s<56;s++){const o=s%4,a=Math.floor(s/4),l=(a-6.5)/6.5,c=o<2?(o===0?-1:1)*(G.width/2+.82):l*(G.width/2+.3),h=o<2?l*(G.depth/2+.3):(o===2?-1:1)*(G.depth/2+.82);Z.position.set(c,Pn.lowerY+.23+s%3*.07,h),Z.rotation.set(.1*Math.sin(s*2),s*2.31,.08*Math.cos(s)),Z.scale.set(o<2?.43:.63,.31+s%4*.055,o<2?.63:.43),Z.updateMatrix(),n.setMatrixAt(s,Z.matrix)}n.computeBoundingSphere(),this.lowerLedges.add(n),this.instances+=56;const t=new U({color:9145982,roughness:1}),i=new X(new ve(1,1,1),t,24);for(let s=0;s<24;s++){const o=s%4,a=Math.floor(s/4),l=o<2?G.depth:G.width;Z.position.set(o<2?(o===0?-1:1)*(G.width/2+1.12):0,Pn.lowerY+1.65+a*2.7,o<2?0:(o===2?-1:1)*(G.depth/2+1.12)),Z.rotation.set(0,0,0),Z.scale.set(o<2?.24:l+.9,.045+a%3*.027,o<2?l+.9:.24),Z.updateMatrix(),i.setMatrixAt(s,Z.matrix)}i.computeBoundingSphere(),i.name="horizontal-limestone-bedding-seams",this.lowerLedges.add(i),this.instances+=24}plane(e,n,t,i,s,o,a){const l=new fe(e,n);l.rotateX(-Math.PI/2);const c=l.getAttribute("position"),h=l.getAttribute("uv");for(let d=0;d<h.count;d++)h.setXY(d,(c.getX(d)+t)/2.6,(c.getZ(d)+s)/2.6);const u=new P(l,o);return u.position.set(t,i,s),a.add(u),u}makeGroundDetail(){const e=new U({color:7498318,roughness:1,metalness:0,side:re}),n=new fe(.022,.18);n.rotateX(-Math.PI/2);const t=new X(n,e,240);for(let c=0;c<240;c++){const h=c%8,u=h*Math.PI/4+.18*Math.sin(c*3.71),d=.65+.32*(.5+.5*Math.sin(c*7.19)),p=Math.cos(u)*G.width*.48*d,m=Math.sin(u)*G.depth*.48*d;Z.position.set(p,.008,m),Z.rotation.set(0,c*2.39,0),Z.scale.setScalar(.65+c%7*.16),Z.updateMatrix(),t.setMatrixAt(c,Z.matrix),t.setColorAt(c,new V().setRGB(.87+c%5*.026,.86+c%5*.024,.79+c%5*.025))}t.computeBoundingSphere(),this.cosmeticGround.add(t),this.instances+=240;const i=new X(new St(.2,7).rotateX(-Math.PI/2),new U({color:7304784,roughness:1,transparent:!0,opacity:.34,depthWrite:!1}),36);for(let c=0;c<36;c++)Z.position.set(Math.sin(c*7.91)*6.2,.006,Math.cos(c*4.73)*6.5),Z.rotation.set(0,c,0),Z.scale.set(.6+c%3,.8,.4+c%2),Z.updateMatrix(),i.setMatrixAt(c,Z.matrix);i.computeBoundingSphere(),this.cosmeticGround.add(i),this.instances+=36;const s=document.createElement("canvas");s.width=s.height=32;const o=s.getContext("2d"),a=o.createRadialGradient(16,16,1,16,16,16);a.addColorStop(0,"rgba(31,44,29,.5)"),a.addColorStop(1,"rgba(31,44,29,0)"),o.fillStyle=a,o.fillRect(0,0,32,32);const l=new X(new fe(1,1).rotateX(-Math.PI/2),new q({map:new At(s),transparent:!0,opacity:.3,depthWrite:!1}),72);for(let c=0;c<72;c++)Z.position.set(Math.sin(c*8.3)*6.3,.01,Math.cos(c*11.7)*6.7),Z.rotation.set(0,-.6+c*.13,0),Z.scale.set(.7+c%4*.35,1,1.1+c%5*.33),Z.updateMatrix(),l.setMatrixAt(c,Z.matrix);l.computeBoundingSphere(),this.cosmeticGround.add(l),this.instances+=72}makeShaft(){const e=G.width+2.5,n=G.depth+2.5,t=[];for(let h=0;h<32;h++){const u=h/32*Math.PI*2,d=Math.cos(u),p=Math.sin(u),m=Math.min(e/2/Math.max(1e-4,Math.abs(d)),n/2/Math.max(1e-4,Math.abs(p)));t.push(new Tn(d*(m+.2*Math.sin(h*7.1)),p*(m+.2*Math.sin(h*7.1))))}const i=[],s=[];for(let h=0;h<t.length;h++){const u=t[h],d=t[(h+1)%t.length];for(const[p,m,b,g,f]of[[u.x,-18,u.y,h/3,0],[d.x,-18,d.y,(h+1)/3,0],[u.x,.45,u.y,h/3,5],[d.x,-18,d.y,(h+1)/3,0],[d.x,.45,d.y,(h+1)/3,5],[u.x,.45,u.y,h/3,5]])i.push(p,m,b),s.push(g,f)}const o=new Ge;o.setAttribute("position",new Ce(i,3)),o.setAttribute("uv",new Ce(s,2)),o.computeVertexNormals();const a=new P(o,this.rockMaterial);a.material.side=re,this.common.add(a);const l=this.rockMaterial;for(const h of[-1,1]){const u=new P(new ve(e+1.7,.52,.85),l);u.position.set(0,.05,h*(n/2+.3)),this.lip.add(u);const d=new P(new ve(.85,.52,n+1.7),l);d.position.set(h*(e/2+.3),.05,0),this.lip.add(d)}const c=new q({color:3688244});for(let h=0;h<8;h++){const u=h*Math.PI/4,d=new P(new kt(.8,3.5,5),c);d.position.set(Math.cos(u)*(e/2+2),1.8,Math.sin(u)*(n/2+2)),this.lip.add(d)}}makeFarPines(){const e=new fe(1,1).translate(0,.5,0),n=this.farPines=new X(e,this.farPineMaterial,96);n.name="forty-eight-far-pine-cutouts";let t=90210;const i=()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>0)/4294967296);for(let s=0;s<48;s++){const o=s*2.399963+(i()-.5)*.55,a=23.5+i()*6.8,l=Math.cos(o)*a+(i()-.5)*1.2,c=Math.sin(o)*a+(i()-.5)*1.2,h=8.3+i()*5.5,u=i()*Math.PI;for(let d=0;d<2;d++)Z.position.set(l,-.02,c),Z.rotation.set(0,u+d*Math.PI/2,0),Z.scale.set(h,h,1),Z.updateMatrix(),n.setMatrixAt(s*2+d,Z.matrix)}n.computeBoundingSphere(),this.forest.add(n),this.instances+=96}makeLight(){const e=new zn(14936022,4804924,Q.forest.ambient);this.forestLights.add(e);const n=new Pe(16768941,Q.forest.key);n.position.set(-12,11,-17),this.forestLights.add(n);const t=new Pe(12241615,Q.forest.fill);t.position.set(6,5,4),this.forestLights.add(t);const i=new P(new je(1.35,12,8),new q({color:16769440,fog:!1}));i.position.set(-22,17,-35),this.forest.add(i),this.lowerLights.add(new zn(13161687,7232838,Q.grotto.ambient));const s=new Pe(14018023,Q.grotto.key);s.position.set(-3,9,2),this.lowerLights.add(s);const o=new Jt(11979205,Q.grotto.coolBounce,21,2);o.position.set(-3,Pn.lowerY+5,-5),this.lowerLights.add(o);const a=new Jt(14730137,Q.grotto.warmBounce,19,2);a.position.set(5,Pn.lowerY+6,4),this.lowerLights.add(a);for(const l of this.forestLights.children)l instanceof bo&&this.forestLighting.push({light:l,intensity:l.intensity});for(const l of this.lowerLights.children)l instanceof bo&&this.lowerLighting.push({light:l,intensity:l.intensity})}remember(e){e.traverse(n=>{if(n instanceof P||n instanceof as){this.geometries.add(n.geometry);for(const t of Array.isArray(n.material)?n.material:[n.material]){this.materials.add(t);for(const i of Object.values(t))i instanceof $n&&this.textures.add(i)}}})}scatter(e,n,t,i){e.updateWorldMatrix(!0,!0);const s=new Nn().setFromObject(e),o=s.getCenter(new _),a=new ie().makeTranslation(-o.x,-s.min.y,-o.z),l=new W;return l.name=i,e.traverse(c=>{if(!(c instanceof P))return;const h=c.geometry.clone().applyMatrix4(c.matrixWorld).applyMatrix4(a),u=new X(h,c.material,n.length);n.forEach((d,p)=>{Z.position.set(d.x,d.y,d.z),Z.rotation.set(0,d.yaw,0),typeof d.scale=="number"?Z.scale.setScalar(d.scale):Z.scale.copy(d.scale),Z.updateMatrix(),u.setMatrixAt(p,Z.matrix)}),/pines|ferns/.test(i)&&(Ol(u,/ferns/.test(i)),Ll(u,/ferns/.test(i))),u.computeBoundingSphere(),l.add(u),this.instances+=n.length}),t.add(l),this.remember(l),/near-pines|boundary-ferns/.test(i)&&this.wind.add(l,/ferns/.test(i)),l}async load(e,n){if(this.loaded)return;const t=[],i=[];let s=null,o=!1;try{for(const S of["pine","fern","rocks","cliff"])t.push(await it(e,`${Hi}${S}.glb`));for(const S of["forest-ground","rock-face","rocky-trail"])for(const A of["diff","normal","arm"]){const R=await st(e,`${Hi}${S}-${A}.jpg`);R.wrapS=R.wrapT=ln,R.anisotropy=Math.min(4,n.capabilities.getMaxAnisotropy()),A==="diff"&&(R.colorSpace=ge),i.push(R)}const a=await st(e,`${Hi}pine-impostor.png`);if(a.colorSpace=ge,a.anisotropy=Math.min(4,n.capabilities.getMaxAnisotropy()),i.push(a),s=await Fs(e,`${Hi}forest-slope.hdr`),this.disposed)throw new Error("Forest renderer disposed");t.forEach(S=>this.remember(S)),i.forEach(S=>this.textures.add(S)),o=!0;for(const[S,A,R]of[[0,this.groundMaterial,1],[3,this.rockMaterial,1],[6,this.trailMaterial,1]]){const[N,B,H]=i.slice(S,S+3);for(const K of[N,B,H])K.repeat.set(R,R);Object.assign(A,{map:N,normalMap:B,roughnessMap:H,metalnessMap:H,aoMap:H,aoMapIntensity:.6}),A.normalScale.set(A===this.rockMaterial?Q.forest.rockNormal:Q.forest.groundNormal,A===this.rockMaterial?Q.forest.rockNormal:Q.forest.groundNormal),A.needsUpdate=!0}this.farPineMaterial.map=a,this.farPineMaterial.needsUpdate=!0;const l=a.image;this.farPines.geometry.scale(l.width/l.height,1,1),this.farPines.computeBoundingSphere();const[c,h,u,d]=t;for(const S of[c,h])S.traverse(A=>{if(A instanceof P)for(const R of Array.isArray(A.material)?A.material:[A.material])(R.transparent||R.alphaTest>0||/twig|needle|fern/i.test(R.name))&&(R.transparent=!1,R.opacity=1,R.alphaTest=.38,R.side=re,R.depthWrite=!0,R.needsUpdate=!0)});const p=c.getObjectByName("near")??c,m=c.getObjectByName("mid")??p,b=new Nn().setFromObject(p).getSize(new _).y||20,g=(S,A)=>Array.from({length:S},(R,N)=>{const B=(N+.25)*Math.PI*2/S;return{x:Math.cos(B)*(A+N%3*.9),y:0,z:Math.sin(B)*(A+1+N%4*.5),yaw:N*2.37,scale:(9+N%4*.75)/b}});this.scatter(p,g(6,11.5),this.forest,"six-near-pines"),this.scatter(m,g(18,18),this.forest,"eighteen-mid-pines");const f=(S,A,R)=>Array.from({length:S},(N,B)=>{const H=(B+.4)*Math.PI*2/S,K=Math.cos(H),I=Math.sin(H),L=Math.min((G.width/2+A)/Math.max(.001,Math.abs(K)),(G.depth/2+A)/Math.max(.001,Math.abs(I)));return{x:K*L,y:0,z:I*L,yaw:B*2.1,scale:R*(.7+B%4*.13)}}),w=new Nn().setFromObject(h).getSize(new _).y||1,v=new Nn().setFromObject(u).getSize(new _);this.scatter(h,f(24,.8,.85/w),this.forest,"twenty-four-boundary-ferns");const E=f(12,.8,1).map(S=>({...S,scale:new _(1.35/Math.max(.01,v.x),.56/Math.max(.01,v.y),1.05/Math.max(.01,v.z))}));this.scatter(u,E,this.forest,"twelve-low-rock-berms");const y=new Nn().setFromObject(d).getSize(new _),M=[];for(const S of["x","z"])for(const A of[-1,1])for(const R of[-1,1]){const N=S==="x"?G.width:G.depth,B=S==="x"?G.depth/2:G.width/2;M.push({x:S==="x"?R*N*.28:A*(B+1.65),z:S==="x"?A*(B+1.65):R*N*.28,y:Pn.lowerY-.35,yaw:S==="x"?A<0?0:Math.PI:A<0?Math.PI/2:-Math.PI/2,scale:new _(N*.67/Math.max(.01,y.x),19/Math.max(.01,y.y),1.55/Math.max(.01,y.z))})}d.traverse(S=>{S instanceof P&&(S.material=this.rockMaterial)}),this.scatter(d,M,this.lower,"eight-irregular-cliff-modules");const z=new Cs(n);try{this.target=z.fromEquirectangular(s)}finally{z.dispose(),s.dispose(),s=null}this.remember(this.root),this.triangleBudget=0;const T=S=>{let A=0;return S.traverse(R=>{R instanceof P&&(A+=(R.geometry.index?.count??R.geometry.getAttribute("position").count)/3*(R instanceof X?R.count:1))}),A};this.viewTriangles={forest:T(this.forest),grotto:T(this.lower),shaft:T(this.common),clearing:T(this.clearing)},this.triangleBudget=this.viewTriangles.forest+this.viewTriangles.grotto+this.viewTriangles.shaft,this.loaded=!0}catch(a){throw o||(t.forEach(qe),i.forEach(l=>l.dispose())),s?.dispose(),a}}update(e,n,t){const i=e.level2?.environment,s=e.phase==="dead"||e.phase==="complete";if(this.active=(!n||s)&&e.stage===2&&i?.mode==="forest_grotto"&&this.loaded,this.root.visible=this.active,!this.active)return this.forestVisible=this.lowerVisible=!1,!1;this.phase=i.phase,this.wind.update(e.time,e.attemptId??1,this.reduced),this.forestVisible=["forest","prepare","release","failed"].includes(this.phase)||this.phase==="falling"&&e.player.y>-.55,this.lowerVisible=!this.forestVisible,this.forest.visible=this.forestVisible,this.lower.visible=this.lowerVisible;const o=this.phase==="falling"||this.phase==="landing"||this.phase==="grotto";this.clearing.position.y=0,this.clearing.visible=!o,this.common.visible=o,this.releaseOutline.visible=this.phase==="release",this.releaseOutline.material.opacity=this.phase==="release"?.15+.35*Go(i.elapsed/Pn.release):0;const a=Go(i.floorY/Pn.lowerY);for(const{light:l,intensity:c}of this.forestLighting)l.intensity=c*(1-a);for(const{light:l,intensity:c}of this.lowerLighting)l.intensity=c*a;return this.blendedSky.copy(this.forestSky).lerp(this.lowerSky,a),this.blendedFog.color.copy(this.forestFog.color).lerp(this.lowerFog.color,a),this.blendedFog.near=this.forestFog.near+(this.lowerFog.near-this.forestFog.near)*a,this.blendedFog.far=this.forestFog.far+(this.lowerFog.far-this.forestFog.far)*a,t.background=this.blendedSky,t.fog=this.blendedFog,t.environment=this.target.texture,t.environmentIntensity=Q.forest.environment+(Q.grotto.environment-Q.forest.environment)*a,!0}setReduced(e){this.reduced=e,this.cosmeticGround.visible=!e}textureSet(){return this.textures}resources(){return{geometries:this.geometries,materials:this.materials,textures:this.textures}}environmentTexture(){return this.target?.texture??null}stats(){const e=this.active?(this.forestVisible?this.viewTriangles.forest-(this.clearing.visible?0:this.viewTriangles.clearing):this.viewTriangles.grotto)+(this.common.visible?this.viewTriangles.shaft:0):0;return{profile:Un.id,wind:this.wind.stats(),loaded:this.loaded,active:this.active,phase:this.phase,forestVisible:this.forestVisible,grottoVisible:this.lowerVisible,shaftVisible:this.active&&this.common.visible,clearingVisible:this.active&&this.forestVisible&&this.clearing.visible,clearingY:this.clearing.position.y,fullEnvironmentsVisible:Number(this.forestVisible)+Number(this.lowerVisible),instances:this.instances,triangles:this.triangleBudget,visibleTriangles:e,trianglesByRoot:{...this.viewTriangles},nearPines:6,midPines:18,farPines:48,ferns:24,rocks:12,cliffModules:8,boundaryRails:{...Yi,visible:this.active&&this.forestVisible},dryGrotto:!0,reduced:this.reduced,transitionSimulationUnchanged:!0}}dispose(){this.disposed=!0,this.wind.dispose(),this.target?.dispose(),this.target=null}}const Bo=Object.freeze(["/assets/smile-chaser.glb","/assets/smile-shooter.glb","/assets/level2/mask.glb"]),xi={signal_echo:{name:"Agreeing Pilgrim",family:"smile",asset:0,silhouette:"bowed upright figure",head:1,chest:1,feet:1,depth:1,lean:.09,crest:0,color:15518934},rabbit_glimpse:{name:"Eager Arrow",family:"smile",asset:0,silhouette:"leaning arrow and twin tabs",head:.83,chest:.65,feet:1.35,depth:.8,lean:.27,crest:2,color:16766617},notification_swarm:{name:"Applause Bloom",family:"smile",asset:0,silhouette:"open five-skull ring",head:1.28,chest:.65,feet:.65,depth:.86,lean:0,crest:3,color:12577235},flank_drone:{name:"Sideways Compliment",family:"smile",asset:1,silhouette:"asymmetric crescent and outward palm",head:.92,chest:.82,feet:1,depth:1.15,lean:-.06,crest:1,color:11134436},chair_knight:{name:"Approval Throne",family:"smile",asset:0,silhouette:"heavy shrine block on squat feet",head:.82,chest:1.65,feet:1.4,depth:1.5,lean:-.06,crest:4,color:14663100},hammer_rabbit:{name:"Clapping Idol",family:"smile",asset:0,silhouette:"heavy upright U and raised thumbs",head:1.12,chest:1.4,feet:1.2,depth:1.18,lean:.18,crest:5,color:15255204},apex_rabbit:{name:"Praise Hound",family:"smile",asset:0,silhouette:"low four-support wedge and three tabs",head:.86,chest:1.55,feet:1.32,depth:1.35,lean:.31,crest:6,color:15841726},evolution_rabbit:{name:"Coronation Engine",family:"smile",asset:1,silhouette:"five-face crown fan",head:1.3,chest:1.2,feet:.85,depth:1.15,lean:.12,crest:7,color:14796269},arc_turret:{name:"Ovation Fork",family:"smile",asset:1,silhouette:"open palms on a narrow fork",head:.75,chest:1.05,feet:1.25,depth:.78,lean:0,crest:8,color:16768697},name_glitch_shade:{name:"Drift Mask",family:"mask",asset:2,silhouette:"tall swaying S code body",head:.77,chest:.6,feet:.45,depth:.72,lean:.2,crest:0,color:9991381},speaker_wraith:{name:"Face Speaker",family:"mask",asset:2,silhouette:"wide squared code chest and mouth aperture",head:.92,chest:1.25,feet:.82,depth:.72,lean:0,crest:1,color:8441821},loop_ghost:{name:"Recurring Face",family:"mask",asset:2,silhouette:"slender oval code loop",head:.67,chest:.48,feet:.37,depth:.65,lean:.15,crest:2,color:11705301},decay_mote:{name:"Chatter Mote",family:"mask",asset:2,silhouette:"tiny diamond of rapid scattered code",head:1.16,chest:.63,feet:.18,depth:.65,lean:0,crest:3,color:12300012},double:{name:"Mirror Mask",family:"mask",asset:2,silhouette:"paired symmetric mirrored code columns",head:.85,chest:1.15,feet:.75,depth:.77,lean:0,crest:4,color:9687771},dual:{name:"Silence Mask",family:"mask",asset:2,silhouette:"fragile pointed dart with crossed mouth lock",head:.82,chest:.5,feet:.13,depth:1.15,lean:.28,crest:5,color:15777143},cell_blob:{name:"Split Persona",family:"mask",asset:2,silhouette:"two lobes with a bright vertical split seam",head:1.06,chest:1.3,feet:1,depth:1.05,lean:0,crest:6,color:11838185},reach_shadow:{name:"Projection Mask",family:"mask",asset:2,silhouette:"spread physical hand below anchored mask",head:.88,chest:.58,feet:.62,depth:.72,lean:0,crest:7,color:14462332},drift_hound:{name:"Drift Hound Mask",family:"mask",asset:2,silhouette:"low long muzzle and four code haunches",head:1.35,chest:.8,feet:1.1,depth:1.35,lean:.3,crest:8,color:10068695}},js=(r,e=0,n=1)=>Math.max(e,Math.min(n,r)),Le=new we,Dl=new _(0,1,0),zs=new _,$o=new V(16777215),Hl=new V(10809343),Gl=Object.fromEntries(Kt.map(r=>[r,new V(xi[r].color)]));function Ue(r,e=0){return new U({color:r,emissive:r,emissiveIntensity:e,roughness:.66,metalness:.12})}function Fe(r,e,n,t){const i=new X(r,e,n);return i.name=t,i.frustumCulled=!1,i.instanceMatrix.setUsage(le),i.count=0,i}function nn(r,e,n,t,i,s,o,a=0,l){r.count>=r.instanceMatrix.count||(Le.position.set(e,n,t),Le.rotation.set(0,a,0),Le.scale.set(i,s,o),Le.updateMatrix(),r.setMatrixAt(r.count,Le.matrix),l&&r.setColorAt(r.count,l),r.count++)}function Uo(r,e,n,t,i){if(r.count>=r.instanceMatrix.count)return;zs.set(n.x-e.x,n.y-e.y,n.z-e.z);const s=zs.length();s<1e-6||(Le.position.set((e.x+n.x)/2,(e.y+n.y)/2,(e.z+n.z)/2),Le.quaternion.setFromUnitVectors(Dl,zs.multiplyScalar(1/s)),Le.scale.set(t,s,t),Le.updateMatrix(),r.setMatrixAt(r.count,Le.matrix),r.count++)}function jl(r,e,n,t,i,s,o=1,a=1,l=1){const c=new P(e,n);return c.position.set(t,i,s),c.scale.set(o,a,l),r.add(c),c}function Vo(r){const e=r.geometry.clone().applyMatrix4(r.matrixWorld);if(e.deleteAttribute("tangent"),e.deleteAttribute("color"),e.getAttribute("uv")||e.setAttribute("uv",new rn(new Float32Array(e.getAttribute("position").count*2),2)),!e.index)return e;const n=e.toNonIndexed();return e.dispose(),n}function Bl(r,e){if(os(e))return Y0(e);const n=xi[e],t=new W,i=new Nn;r.updateMatrixWorld(!0),i.setFromObject(r);const s=i.getSize(new _),o=i.getCenter(new _),a=Math.max(s.x,s.z)/2,l=new Set,c=new Set;r.traverse(M=>{if(!(M instanceof P)||n.family==="smile"&&/Antenna|Crown_Spike|Shoulder_Spike/.test(M.name)&&n.crest!==0)return;const z=Vo(M),T=z.getAttribute("position");for(let S=0;S<T.count;S++){let A=(T.getX(S)-o.x)/a,R=(T.getY(S)-i.min.y)/s.y,N=(T.getZ(S)-o.z)/a;if(n.family==="smile"){const B=R>.68?n.head:R>.33?n.chest:n.feet;A*=B,N=N*n.depth+n.lean*(R-.28)}else A*=n.head*.77,N=N*.35+.2,R=.62+R*.38,e==="drift_hound"&&(A*=1.1,N+=.18*(1-R));T.setXYZ(S,A,R,N)}z.computeVertexNormals(),l.add(z),t.add(new P(z,M.material))});const h=Ue(n.family==="smile"?12366267:2432310),u=Ue(n.color,.34),d=Ue(15849654),p=Ue(2629173);[h,u,d,p].forEach(M=>c.add(M)),e==="cell_blob"&&(d.name="parent-only-split-seam");const m=(M,z,T,S,A,R=1,N=1,B=1)=>(l.add(M),jl(t,M,z,T,S,A,R,N,B)),b=(M,z,T,S,A,R,N=u)=>m(new ve(1,1,1),N,M,z,T,S,A,R),g=(M,z,T,S,A,R=u)=>m(new Te(1,.09,4,18),R,M,z,T,S,A,.3);if(n.family==="smile"){const M=n.crest;if(M===1&&b(.62,.92,-.1,.09,.22,.1),M===2)for(const z of[-1,1])b(z*.4,.92,-.05,.17,.35,.18,d);if(M===3)for(let z=0;z<5;z++){const T=z*Math.PI*2/5;m(new zt(.18,0),u,Math.cos(T)*.82,.7+Math.sin(T)*.07,-.08,1,.6,1)}if(M===4)for(const z of[-1,1])m(new je(1,10,6),h,z*.58,.48,-.05,.36,.22,.42);if(M===5)for(const z of[-1,1])b(z*.73,.61,.15,.3,.25,.28,d),b(z*.86,.77,.16,.14,.28,.16,d);if(M===6||M===7){const z=M===6?3:5;for(let T=0;T<z;T++)b((T-(z-1)/2)*.24,.94-Math.abs(T-(z-1)/2)*.024,0,.12,.22,.13,d)}if(M===8)for(const z of[-1,1]){b(z*.69,.58,.3,.21,.3,.28,d);for(const T of[-.05,.05])b(z*.69+T,.78,.29,.045,.13,.1)}}else{for(let M=0;M<7;M++){const z=.11+M*.088,T=Math.sin((M+1)/8*Math.PI),S=e==="name_glitch_shade"?Math.sin(z*7)*.22:e==="drift_hound"?.23*(1-z):0,A=n.chest*(.32+.42*T);for(const R of[-1,1]){const N=R*A+S;b(N,z,0,.075,.065,.14),b(N*.55,z,-.21*n.depth,.045,.055,.075)}b(S,z,0,.12*n.chest,.09,.13,h)}if(e==="speaker_wraith"){for(const M of[-1,1])b(M*.65,.43,0,.12,.4,.18,h);for(let M=0;M<4;M++)b(0,.32+M*.085,.2,1,.033,.06);b(0,.7,.43,.4,.04,.05,p)}if(e==="loop_ghost"&&g(0,.46,-.1,.54,.43),e==="decay_mote"){const M=m(new Et(1,0),h,0,.4,-.05,.55,.32,.38);M.rotation.y=Math.PI/4}if(e==="double")for(const M of[-1,1])b(M*.55,.43,.2,.11,.49,.06),b(M*.69,.43,.05,.06,.4,.06,d);if(e==="dual"){const M=m(new kt(.45,.6,4),h,0,.3,-.08);M.rotation.z=Math.PI;const z=b(0,.69,.46,.4,.055,.055,d),T=b(0,.69,.46,.4,.055,.055,d);z.rotation.z=.7,T.rotation.z=-.7}if(e==="cell_blob"){for(const M of[-1,1])g(M*.42,.36,-.05,.39,.31);b(0,.62,.49,.043,.7,.035,d)}if(e==="reach_shadow"){b(0,.39,.12,.63,.25,.14,d);for(let z=0;z<4;z++)b((z-1.5)*.18,.58+.025*Math.sin(z),.12,.12,.25,.14,d);const M=b(-.48,.4,.13,.14,.28,.14,d);M.rotation.z=-.45}if(e==="drift_hound")for(const M of[-1,1])for(const z of[-.35,.35])b(M*.55,.19,z,.15,.28,.16,h),b(M*.55,.08,z+.1,.2,.06,.25)}t.updateMatrixWorld(!0);const f=new Map;t.traverse(M=>{if(!(M instanceof P))return;const z=Vo(M),T=Array.isArray(M.material)?M.material:[M.material];if(T.length>1&&z.groups.length){for(const S of z.groups){const A=z.clone(),R=z.getAttribute("position"),N=z.getAttribute("normal"),B=z.getAttribute("uv");for(const[K,I]of[["position",R],["normal",N],["uv",B]]){const L=Array.from(I.array).slice(S.start*I.itemSize,(S.start+S.count)*I.itemSize);A.setAttribute(K,new Ce(L,I.itemSize))}A.clearGroups();const H=T[S.materialIndex??0];f.set(H,[...f.get(H)??[],A])}z.dispose()}else{const S=T[0];f.set(S,[...f.get(S)??[],z])}});let w=1/0,v=-1/0,E=0;for(const M of f.values())for(const z of M){const T=z.getAttribute("position");for(let S=0;S<T.count;S++)w=Math.min(w,T.getY(S)),v=Math.max(v,T.getY(S)),E=Math.max(E,Math.hypot(T.getX(S),T.getZ(S)))}const y=[];for(const[M,z]of f){for(const A of z){const R=A.getAttribute("position");for(let N=0;N<R.count;N++)R.setXYZ(N,R.getX(N)/E,(R.getY(N)-w)/(v-w),R.getZ(N)/E);A.computeVertexNormals()}const T=En(z,!1);if(z.forEach(A=>A.dispose()),!T)throw new Error(`Cannot merge ${e}`);T.computeBoundingBox(),T.computeBoundingSphere();const S=M.clone();S instanceof U&&(S.roughness=Math.max(S.roughness,.48),S.envMapIntensity=.55),y.push({geometry:T,material:S})}return l.forEach(M=>M.dispose()),c.forEach(M=>M.dispose()),y}function $l(r,e){const n=r.neural;if(!n||n.state!=="warmup"&&n.state!=="dash")return null;const t=js((e.neural?.elapsed??0)/(e.neural?.duration??1)),i=n.behavior==="dash"?2.45:n.behavior==="boss"?3.2*(t>.62?1.45:1):3*(1+t*.22);let s=n.state==="dash"?Math.hypot(n.vx,n.vz)*Math.max(0,n.stateTimer):n.speed*i*.28;for(const[o,a,l]of[[r.x,n.chargeDirX,G.width/2-r.radius],[r.z,n.chargeDirZ,G.depth/2-r.radius]])Math.abs(a)>1e-8&&(s=Math.min(s,Math.max(0,((a>0?l:-l)-o)/a)));return{x:r.x,z:r.z,endX:r.x+n.chargeDirX*s,endZ:r.z+n.chargeDirZ*s,width:r.radius*2,length:s,y:Me(e)+.025}}function Ul(r,e){const n=r.neural;return{root:{x:n.side<0?Yi.leftX:Yi.rightX,y:Me(e)+Yi.topY,z:n.rootZ},hand:{x:r.x,y:Me(e)+n.height*.39,z:r.z},danger:{x:r.x,z:r.z,radius:r.radius,height:n.height}}}function Vl(r){const e=r.neural;return!e||e.draft?[]:e.tickets.filter(n=>!n.admitted&&n.tellAt!==void 0&&r.time>=n.tellAt&&Number.isFinite(n.x)&&Number.isFinite(n.z)).slice(0,ga.enemies)}function Wl(){const r=new qs;return r.moveTo(0,-.55),r.bezierCurveTo(-.15,-.35,-.68,.05,-.55,.35),r.bezierCurveTo(-.4,.62,-.08,.56,0,.31),r.bezierCurveTo(.08,.56,.4,.62,.55,.35),r.bezierCurveTo(.68,.05,.15,-.35,0,-.55),new Ks(r,{depth:.14,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.045,bevelThickness:.035,curveSegments:6}).translate(0,0,-.07)}class ql{constructor(e,n,t="articulated",i=!1){this.visualVT1=i,this.representation=t,this.assets=n,this.root.name="two-level-neural-crowd",this.root.visible=!1,e.add(this.root),t==="articulated"&&(this.g2Assets=new V0(n),this.articulated=new yl(this.root,new Set(i?["flank_drone"]:[])),this.rounds=new Al(this.root));const s=new q({color:16758896,transparent:!0,opacity:.7,depthWrite:!1,side:re});this.shadow=Fe(new St(1,16).rotateX(-Math.PI/2),new q({color:1577758,transparent:!0,opacity:.24,depthWrite:!1}),128,"neural-ground-shadows"),this.lanes=Fe(new fe(1,1).rotateX(-Math.PI/2),s,640,"locked-dash-and-fan-warnings"),this.entry=Fe(new Ke(.8,1,24).rotateX(-Math.PI/2),s.clone(),128,"physical-edge-entry-tells"),this.posts=Fe(new Mn(1,1,1,6),Ue(16762774,.6),256,"entry-warning-posts"),this.tether=Fe(new Mn(1,1,1,6),Ue(7560848,.15),128,"harmless-anchored-reach-tethers"),this.anchors=Fe(new ve(1,1,1),Ue(13153181),128,"physical-rail-reach-roots"),this.danger=Fe(new Ke(.88,1,24).rotateX(-Math.PI/2),s.clone(),128,"actual-hand-danger-footprints"),this.flashes=Fe(new zt(1,1),Ue(16761194,1.4),256,"palm-mouth-release-warnings"),this.zeros=Fe(new Te(.045,.008,3,8),Ue(11703785,.35),2304,"binary-zero-strands"),this.ones=Fe(new ve(.014,.082,.012),Ue(11703785,.35),2304,"binary-one-strands"),this.hearts=Fe(Wl(),Ue(15826328,.15),128,"source-heart-pickups"),this.bolts=Fe(new Mn(1,1,1,6),Ue(8648431,2),128,t==="baseline"?"all-neural-friendly-rounds":"baseline-neural-friendly-rounds"),this.lockCross=Fe(new ve(1,1,1),Ue(16764040,.7),256,"silence-rifle-lock-crosses"),this.mutable=[this.shadow,this.lanes,this.entry,this.posts,this.tether,this.anchors,this.danger,this.flashes,this.zeros,this.ones,this.hearts,this.bolts,this.lockCross],this.root.add(...this.mutable)}visualVT1;root=new W;models=new Map;sourceModels=[];loading=null;loaded=!1;disposed=!1;reduced=!1;last={actors:0,dashLanes:0,entryTells:0,reachHands:0,rangeTells:0,pickups:0,friendlyBolts:0,fireDisabled:0};shadow;lanes;entry;posts;tether;anchors;danger;flashes;zeros;ones;hearts;bolts;lockCross;mutable;assets;g2Assets=null;vt1Character=null;vt1Crowd=null;vt1DeathCursor=0;vt1Deaths=[];vt1DeathAttempt=-1;vt1DeathStage=-1;vt1DeathTime=-1;articulated=null;rounds=null;representation;async load(){return this.loading??=this.loadAssets()}async loadAssets(){try{for(const n of Bo){const t=await it(this.assets,n);if(this.disposed)throw qe(t),new Error("Crowd disposed during load");this.sourceModels.push(t)}if(this.representation==="baseline")for(const n of Kt){const t=Bl(this.sourceModels[xi[n].asset],n),i=t.map((s,o)=>Fe(s.geometry,s.material,128,`${n}-source-part-${o}`));this.models.set(n,i),this.root.add(...i)}const e=this.g2Assets?await this.g2Assets.load():void 0;if(this.visualVT1){const n=await A0(this.assets);if(this.disposed)throw zo(n),Error("VT1 crowd disposed during load");this.vt1Character=n,this.vt1Crowd=new D0(this.root,n),this.vt1Crowd.setReduced(this.reduced)}this.articulated?.load(new Map(Kt.map(n=>[n,this.sourceModels[xi[n].asset]])),e),this.loaded=!0}catch(e){throw this.clearModels(),this.loading=null,e}}setReduced(e){this.reduced=e,this.articulated?.setReduced(e),this.rounds?.setReduced(e),this.vt1Crowd?.setReduced(e)}reset(){this.articulated?.reset(),this.rounds?.reset(),this.vt1Crowd?.reset(),this.vt1DeathCursor=0,this.vt1Deaths=[],this.vt1DeathAttempt=this.vt1DeathStage=-1,this.vt1DeathTime=-1}actorBase(e){return this.vt1Crowd?.actorBase(e)??this.articulated?.actorBase(e)??null}vt1Vertices(e){return this.vt1Crowd?.vertices(e)??null}geometryCosts(){const e=this.articulated?.geometryCosts();return e?{...e,drawGroups:e.drawGroups+(this.vt1Crowd?1:0),vt1:this.vt1Crowd?.stats()??null}:null}sharedDeathIds(e){if(this.visualVT1){(e.attemptId!==this.vt1DeathAttempt||e.stage!==this.vt1DeathStage||e.time<this.vt1DeathTime)&&(this.vt1Deaths=[],this.vt1DeathCursor=0,this.vt1DeathAttempt=e.attemptId,this.vt1DeathStage=e.stage),this.vt1DeathTime=e.time;for(const n of Ws(e,this.vt1DeathCursor))this.vt1DeathCursor=Math.max(this.vt1DeathCursor,n.id),n.attemptId===e.attemptId&&n.kind==="removal"&&n.reason==="killed"&&!this.vt1Deaths.some(t=>t.id===n.targetId)&&this.vt1Deaths.push({id:n.targetId,time:n.time});return this.vt1Deaths=this.vt1Deaths.filter(n=>e.time>=n.time&&e.time-n.time<1.2).slice(-(this.reduced?4:16)),(e.phase==="dead"||e.phase==="complete")&&(this.vt1Deaths=[]),new Set(this.vt1Deaths.map(n=>n.id))}}render(e,n=!1){const t=this.loaded&&!this.disposed&&!n&&!!e.neural&&(e.stage===1||e.stage===2);this.root.visible=t,this.last={actors:0,dashLanes:0,entryTells:0,reachHands:0,rangeTells:0,pickups:0,friendlyBolts:0,fireDisabled:e.neural?.fireDisabled??0};for(const a of this.mutable)a.count=0;for(const a of this.models.values())for(const l of a)l.count=0;const i=this.sharedDeathIds(e);if(this.articulated?.render(e,t,i),this.rounds?.render(e,t),this.vt1Crowd?.render(e,t,i),!t)return;const s=Me(e),o=e.neural;for(const a of e.enemies){if(!a.sourceId||!a.neural||a.health<=0||this.last.actors>=128)continue;const l=a.neural,c=xi[a.sourceId],h=this.models.get(a.sourceId)??[],u=a.stasis&&e.time<a.stasis.until,d=a.flash>0?$o:u?Hl:$o;for(const m of h)l.child&&m.material.name==="parent-only-split-seam"||nn(m,a.x,s,a.z,a.radius,l.height,a.radius,a.heading,d);nn(this.shadow,a.x,s+.012,a.z,a.radius,1,a.radius),this.last.actors++;const p=$l(a,e);if(p&&p.length>0&&(nn(this.lanes,(p.x+p.endX)/2,p.y,(p.z+p.endZ)/2,p.width,1,p.length,Math.atan2(l.chargeDirX,l.chargeDirZ)),this.last.dashLanes++),l.behavior==="ranged"||l.behavior==="boss"){const m=l.behavior==="boss"?js(1-l.shootCooldown/.4):l.tell;if(m>0){const b=s+Math.min(1.35,l.height*.64),g=.045+.08*m;if(nn(this.flashes,a.x+Math.sin(a.heading)*a.radius*.88,b,a.z+Math.cos(a.heading)*a.radius*.88,g,g,g),this.last.rangeTells++,l.behavior==="boss"){const f=o.elapsed/o.duration>.62?5:3;for(let w=0;w<f;w++){const v=Math.atan2(e.player.x-a.x,e.player.z-a.z)-.26+.52*w/(f-1),E=1.25;nn(this.lanes,a.x+Math.sin(v)*E*.5,s+.027,a.z+Math.cos(v)*E*.5,.035,1,E,v)}}}}if(l.behavior==="wallhand"){const m=Ul(a,e);nn(this.anchors,m.root.x,m.root.y,m.root.z,.19,.17,.25),Uo(this.tether,m.root,m.hand,.025),nn(this.danger,a.x,s+.028,a.z,a.radius,1,a.radius),this.last.reachHands++}if(c.family==="mask"){const m=a.age,b=this.reduced?8:16;for(let g=0;g<b;g++){const f=g/(b-1),w=g*2.4+m*.6+l.localSeed,v=a.radius*(.29+.2*Math.sin(f*Math.PI)),E=l.behavior==="swarm"||l.behavior==="phase"?Math.sin(m*(l.behavior==="swarm"?5.2:4.5)+l.localSeed+f)*a.radius*.12:0,y=(g+a.id)%2?this.ones:this.zeros;nn(y,a.x+Math.cos(w)*v+E,s+l.height*(.09+f*.57),a.z+Math.sin(w)*v,1,1,1,-w,Gl[a.sourceId])}}if(a.sourceId==="dual"){const m=Math.atan2(e.player.x-a.x,e.player.z-a.z),b=a.x+Math.sin(m)*a.radius*.8,g=a.z+Math.cos(m)*a.radius*.8;for(const f of[-1,1]){const w=this.lockCross;if(w.count>=w.instanceMatrix.count)break;Le.position.set(b,s+l.height*.74,g),Le.rotation.set(0,m,f*.7),Le.scale.set(a.radius*.8,.028,.025),Le.updateMatrix(),w.setMatrixAt(w.count++,Le.matrix)}}}for(const a of Vl(e)){const l=fa[a.sourceId].size*.02,c=js((e.time-a.tellAt)/ga.entryTell),h=a.x,u=a.z;nn(this.entry,h,s+.025,u,l+.18,1,l+.18);for(const d of[-1,1])nn(this.posts,h+d*(l+.15),s+1.1,u,.017,2.2,.017);nn(this.flashes,h,s+.4+c*1.45,u,.065,.065,.065),this.last.entryTells++}for(const a of o.pickups)nn(this.hearts,a.x,a.y,a.z,a.radius*1.5,a.radius*1.5,a.radius*1.5,Math.atan2(e.player.x-a.x,e.player.z-a.z)),this.last.pickups++;if(this.representation==="baseline")for(const a of e.friendlyBolts){if(a.life<=0)continue;const l=Math.hypot(a.x-a.px,a.y-a.py,a.z-a.pz),c=Math.hypot(a.vx,a.vy,a.vz)||1,h=Math.min(.32,Math.max(.09,l));Uo(this.bolts,{x:a.x-a.vx/c*h,y:a.y-a.vy/c*h,z:a.z-a.vz/c*h},a,Math.max(.018,(a.radius??.08)*.38)),this.last.friendlyBolts++}this.rounds&&(this.last.friendlyBolts=this.rounds.stats().friendly);for(const a of[...this.mutable,...Array.from(this.models.values()).flat()])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}stats(){return{profile:this.visualVT1?xe.id:this.representation==="articulated"?Un.id:"retained-baseline",vt1:this.vt1Crowd?.stats()??null,representation:this.representation,articulated:this.articulated?.stats()??null,projectiles:this.rounds?.stats()??null,loaded:this.loaded,disposed:this.disposed,reduced:this.reduced,capacity:128,sourceIds:[...Kt],levelOneIds:[...wo[1]],levelTwoIds:[...wo[2]],sourceAssets:[...Bo],modelDrawGroups:Array.from(this.models.values()).reduce((e,n)=>e+n.length,0),...this.last,gpuVisualQA:"unverified",measuredFPS:null}}clearModels(){this.vt1Crowd?.dispose(),this.vt1Crowd=null,this.vt1Character&&zo(this.vt1Character),this.vt1Character=null,this.articulated?.clearLoadedResources();for(const e of this.models.values())for(const n of e)n.dispose(),n.removeFromParent(),n.geometry.dispose(),n.material.dispose();this.models.clear(),this.sourceModels.forEach(qe),this.sourceModels=[],this.loaded=!1}dispose(){if(this.disposed)return;this.disposed=!0,this.articulated?.dispose(),this.g2Assets?.dispose(),this.rounds?.dispose(),this.clearModels();const e=new Set,n=new Set;for(const t of this.mutable)t.dispose(),e.add(t.geometry),n.add(t.material);e.forEach(t=>t.dispose()),n.forEach(t=>t.dispose()),this.root.removeFromParent()}}function Kl(){const e=[],n=[],t=[],i=Array.from({length:18},(l,c)=>{const h=c/18*Math.PI*2;return new Tn(Math.pow(Math.sin(h),3),(13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h)+2)/17)});for(const[l,c]of[[1,-.1],[1,.04],[.79,.17]])for(const h of i)e.push(h.x*l,h.y*l,c),n.push((h.x*l+1)/2,(h.y*l+1)/2);const s=e.length/3;e.push(0,0,-.1),n.push(.5,.5);const o=e.length/3;e.push(0,.03,.24),n.push(.5,.515);for(let l=0;l<18;l++){const c=(l+1)%18;for(let h=0;h<2;h++){const u=h*18+l,d=h*18+c,p=(h+1)*18+l,m=(h+1)*18+c;t.push(u,p,d,d,p,m)}t.push(s,l,c,o,36+c,36+l)}const a=new Ge;return a.setAttribute("position",new Ce(e,3)),a.setAttribute("uv",new Ce(n,2)),a.setIndex(t),a.computeVertexNormals(),a.computeBoundingSphere(),a}const Yl=`varying vec3 vN; varying vec2 vUv; varying vec3 vP;
void main(){vUv=uv;vN=normalize(normalMatrix*normal);vP=(modelViewMatrix*vec4(position,1.0)).xyz;gl_Position=projectionMatrix*vec4(vP,1.0);}`,Xl=`uniform float fill;uniform float clock;uniform float loss;varying vec3 vN;varying vec2 vUv;varying vec3 vP;
void main(){vec3 n=normalize(vN);float filled=fill<=0.0?0.0:step(vUv.x,fill);float diffuse=.5+.5*max(0.,dot(n,normalize(vec3(-.5,.8,1.))));
float rim=pow(1.-abs(n.z),1.4);float spec=pow(max(0.,dot(n,normalize(vec3(-.35,.7,1.5)))),28.);
vec3 spectrum=.5+.5*cos(vec3(0.,2.094,4.188)+(vUv.y*.65+vUv.x*.28+clock)*6.28318);
vec3 chrome=vec3(.72,.81,.82)*diffuse+spec*.62+spectrum*(.17+rim*.48);
vec3 empty=vec3(.035,.053,.069)+vec3(.07,.10,.12)*rim+spec*.035;
vec3 c=mix(empty,chrome,filled);c+=vec3(.13,.10,.16)*loss;
// A crisp neutral divider shows partial health independently of hue.
if(fill>0.&&fill<1.&&abs(vUv.x-fill)<.022)c=mix(c,vec3(.95,.98,1.),.8);
gl_FragColor=vec4(c,1.);}`;function Pa(r,e){const n=Number.isFinite(e)?Math.max(gs,Math.min(240,e)):120,t=Number.isFinite(r)?Math.max(0,Math.min(n,r)):0,i=Math.ceil(n/gs);return{capacity:i,hearts:yo(t),maximum:yo(n),fills:Array.from({length:i},(s,o)=>Math.max(0,Math.min(1,t/gs-o)))}}function Zl(r,e){const n=Pa(r,e),t=i=>Number(i.toFixed(3)).toString();return`${t(n.hearts)} of ${t(n.maximum)} hearts`}class Ql{scene=new tt;camera=new rs(0,1,1,0,-10,10);geometry=Kl();meshes=[];width=1;height=1;time=-1;attempt=-1;previousHealth=0;lossUntil=-1;disposed=!1;constructor(){this.scene.name="g2-dimensional-heart-hud";for(let e=0;e<6;e++){const n=new Ri({vertexShader:Yl,fragmentShader:Xl,uniforms:{fill:{value:1},clock:{value:0},loss:{value:0}},depthTest:!1,depthWrite:!1,toneMapped:!1}),t=new P(this.geometry,n);t.name=`g2-heart-${e+1}`,t.frustumCulled=!1,this.meshes.push(t),this.scene.add(t)}}resize(e,n){this.width=e,this.height=n,this.camera.right=e,this.camera.top=n,this.camera.updateProjectionMatrix()}render(e,n,t,i,s){if(this.disposed||!i||!e.neural)return;(this.attempt!==e.attemptId||e.time<this.time)&&(this.attempt=e.attemptId,this.lossUntil=-1,this.previousHealth=e.player.health),e.player.health<this.previousHealth&&(this.lossUntil=e.time+.18),this.previousHealth=e.player.health,this.time=e.time;const o=Pa(e.player.health,e.neural.stats.maxHealth),a=s?Math.max(22,Math.min(38,s.height,s.width/o.capacity-6)):30,l=s?.left??20,c=s?.top??24;for(let h=0;h<6;h++){const u=this.meshes[h];u.visible=h<o.capacity,u.visible&&(u.position.set(l+a/2+h*(a+6),this.height-c-a/2,0),u.scale.set(a/2,a/2,a/2),u.material.uniforms.fill.value=o.fills[h],u.material.uniforms.clock.value=t?0:e.time%8/8,u.material.uniforms.loss.value=e.time<this.lossUntil?1:0)}n.clearDepth(),n.render(this.scene,this.camera)}stats(){return{meshes:6,triangles:this.geometry.index.count/3*6,maxDrawCalls:6,newFramebuffers:0,shimmerCycleSeconds:8,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.geometry.dispose(),this.meshes.forEach(e=>e.material.dispose()),this.scene.clear())}}class Wo{constructor(e,n,t,i){this.hall=e,this.details=n,this.roof=t,this.panels=i}hall;details;roof;panels;disposed=!1;loaded=!1;attached=[];triangles=0;draws=0;static createPanels(e,n,t){const i=[];for(const[s,o,a]of[[0,t/2+.38,0],[1,t/2+.38,Math.PI],[2,n/2+.38,Math.PI/2],[3,n/2+.38,-Math.PI/2]]){const l=new W;l.name=`heavy-reveal-panel-${s}`,l.rotation.y=a;const c=s===1||s===3?-1:1;s<2?l.position.z=-o*c:l.position.x=-o*c,e.add(l),i.push(l)}return i}async load(e){if(this.loaded||this.disposed)return;const n=await xa(e,"/assets/visual-vt1/atrium-proof.glb");if(this.disposed)throw qe(n.scene),Error("VT1 room disposed during load");const t=new Map;n.scene.traverse(a=>{if(a instanceof P)for(const l of Array.isArray(a.material)?a.material:[a.material])l instanceof U&&t.set(l.name,l)});const i=[],s=[],o=(a,l,c,h)=>{const u=t.get(a);if(!u)throw Error(`Palace material input missing: ${a}`);const d=u.clone();return d.name=`palace-${a}`,d.color.setHex(l),d.roughness=c,d.metalness=h,d.emissive.setHex(0),d.emissiveIntensity=0,i.push(d),d};try{for(const m of["atrium_static","atrium_detail","atrium_roof","panel_0","panel_1","panel_2","panel_3"])if(!n.scene.getObjectByName(m))throw Error(`VT1 room group missing: ${m}`);const a=o("VT1_pearl_enamel",13748144,.86,.025),l=o("VT1_graphite_structure",3420727,.8,.1),c=o("VT1_satin_machined_alloy",10322246,.45,.67),h=o("VT1_recess_dark_rubber",1580068,.95,.02),u=new Map,d=(m,b,g,f=0,w=0,v=0,E=new We)=>{const y=new ie().compose(new _(f,w,v),new he().setFromEuler(E),new _(1,1,1));b.applyMatrix4(y),s.push(b);const M=u.get(m)??new Map,z=M.get(g)??[];z.push(b),M.set(g,z),u.set(m,M)},p=(m,b,g,f,w,v,E,y)=>d(m,new ve(g,f,w),b,v,E,y);for(const[m,b]of this.panels.entries()){const g=m<2?13.65:14.3,f=g/2;p(b,a,g+.3,5.15,.34,0,2.575,-.08),p(b,l,g+.3,.62,.42,0,.31,-.055),p(b,c,g+.3,.032,.045,0,.63,.185),p(b,l,g+.3,.19,.48,0,4.965,-.015),p(b,c,g+.3,.037,.045,0,4.845,.245),p(b,a,g+.3,.09,.43,0,5.105,-.025);for(const w of[-g*.3,g*.3]){p(b,h,1.55,2.45,.025,w,1.225,.104);for(const v of[-1,1])p(b,l,.11,2.55,.1,w+v*.825,1.275,.165),p(b,c,.022,2.53,.025,w+v*.785,1.265,.23),p(b,l,.745,2.38,.02,w+v*.3875,1.225,.125);p(b,c,1.59,.028,.025,w,2.466,.23),p(b,a,1.9,.14,.12,w,2.66,.16),p(b,c,.012,2.31,.016,w,1.225,.147)}for(let w=0;w<6;w++){const v=-f+(w+.5)*g/6;p(b,l,g/6-.25,1.4,.025,v,3.77,.105),p(b,a,g/6-.35,1.29,.03,v,3.77,.13);for(const E of[-1,1])p(b,c,.023,1.34,.018,v+E*(g/12-.15),3.77,.16);p(b,c,g/6-.3,.026,.018,v,4.425,.16),p(b,c,g/6-.3,.026,.018,v,3.115,.16)}for(let w=0;w<=6;w++){const v=-f+w*g/6;p(b,a,.145,4.06,.15,v,2.69,.15),p(b,l,.22,.16,.18,v,.74,.15),p(b,a,.25,.12,.18,v,4.7,.15),p(b,c,.015,3.67,.017,v+.055,2.72,.235)}}for(let m=0;m<4;m++){const b=m<2?13.65:14.3,g=m<2?7.53:7.205,f=new We(0,[0,Math.PI,Math.PI/2,-Math.PI/2][m],0),w=new ie().makeRotationY(f.y).setPosition(m===2?-g:m===3?g:0,0,m===0?-g:m===1?g:0),v=(E,y,M,z,T,S,A)=>{const R=new ve(y,M,z);R.translate(T,S,A),R.applyMatrix4(w),d(this.roof,R,E)};v(l,b+.3,.21,.63,0,5.505,-.13),v(c,b+.3,.038,.04,0,5.632,.2),v(h,b+.3,3.89,.14,0,7.61,-1.08),v(a,b+.3,.22,.88,0,8.42,-.48),v(c,b+.3,.035,.07,0,8.285,-.075);for(let E=0;E<7;E++){const y=-b/2+(E+.5)*b/7;v(l,b/7-.18,1.91,.16,y,6.94,-.71),v(h,b/7-.34,1.73,.08,y,6.94,-.59),v(c,.02,1.7,.018,y-b/14+.2,6.94,-.54);for(let M=0;M<4;M++)v(l,.042,.53,.075,y+(M-1.5)*.33,6.1,-.2);v(c,b/7-.08,.045,.1,y,6.38,-.18)}for(let E=0;E<=7;E++){const y=-b/2+E*b/7;v(a,.18,4.63,.4,y,8.065,-.11),v(c,.028,4.19,.018,y-.054,8.06,.101),v(l,.34,.16,.57,y,5.78,-.1),v(a,.33,.15,.52,y,10.38,-.1)}}for(const m of[-6.2,-4.14,-2.07,0,2.07,4.14,6.2]){for(const b of[-1,1]){const g=new _(b*7.13,8.67,m),f=new _(b*3.92,10.36,m),w=f.clone().sub(g),v=new ve(.17,w.length(),.22),E=new he().setFromUnitVectors(new _(0,1,0),w.normalize());v.applyQuaternion(E),d(this.roof,v,a,...g.clone().add(f).multiplyScalar(.5).toArray()),p(this.roof,l,3.05,.075,1.88,b*5.45,10.565,m)}p(this.roof,a,7.86,.17,.22,0,10.36,m),p(this.roof,c,7.7,.027,.032,0,10.245,m)}d(this.roof,new Te(1.02,.044,6,64),c,0,8.79,-7.08),d(this.roof,new Te(1.14,.016,5,64),l,0,8.79,-7.08),d(this.roof,new Te(.52,.032,6,32,Math.PI),c,0,8.68,-7.06,new We(0,0,Math.PI));for(const m of[-.31,.31])p(this.roof,c,.047,.17,.055,m,9.12,-7.06);p(this.roof,c,.025,.43,.028,0,10.06,-7.08);for(const[m,b]of u){const g=new W;g.name=`palace-${m.name}`;for(const[f,w]of b){const v=En(w,!1);if(!v)throw Error("Palace static merge failed");const E=new P(v,f);E.name=f.name,g.add(E),this.triangles+=(v.index?.count??v.getAttribute("position").count)/3,this.draws++}m.add(g),this.attached.push(g)}if(this.triangles>22e3||this.draws>70)throw Error("Palace room representation reserve exceeded");this.loaded=!0}catch(a){for(const l of this.attached)qe(l),l.removeFromParent();throw this.attached=[],i.forEach(l=>l.dispose()),a}finally{s.forEach(a=>a.dispose()),qe(n.scene)}}stats(){return{loaded:this.loaded,disposed:this.disposed,kind:"palace-of-applause-v0.1",layoutChanged:!1,triangles:this.triangles,draws:this.draws}}detach(){this.disposed||(this.disposed=!0,this.attached.forEach(e=>e.removeFromParent()),this.attached=[])}}const Jl=r=>Math.max(0,Math.min(1,r)),ec=r=>{const e=Jl(r);return e*e*(3-2*e)},nc="/assets/pbr/",De={doorHeight:2.45,doorWidth:1.55,roofHeight:10.7,floorTile:3.2,groundSpan:512,groundStep:128,openingLift:6.2};class tc{root=new W;scene;hall=new W;details=new W;roof=new W;panels=[];floor;redInlay;light=new W;sky=new V(13094352);fog=new xn(13094352,34,82);geometries=new Set;materials=new Set;textures=new Set;concrete=new U({color:12171181,roughness:.9,metalness:.02,envMapIntensity:.3,vertexColors:!0});stone=new U({color:11776681,roughness:.78,metalness:.025,envMapIntensity:.36,vertexColors:!0});steel=new U({color:9476503,roughness:.39,metalness:.78,envMapIntensity:.6});darkSteel=new U({color:3752004,roughness:.58,metalness:.62,envMapIntensity:.42});mirror=new U({color:12569033,roughness:.12,metalness:.97,envMapIntensity:.75});recess=new U({color:2436396,roughness:.96,metalness:.04});grout=new U({color:6843495,roughness:.92,metalness:0});glass=new U({color:14213855,roughness:.26,metalness:.25,transparent:!0,opacity:.27,depthWrite:!1});warmLamp=new U({color:16246732,emissive:16178093,emissiveIntensity:.36,roughness:.5});crimson=new U({color:7681602,roughness:.68,metalness:.18,emissive:6496303,emissiveIntensity:.13,transparent:!0,opacity:0,depthWrite:!1});reduced=!1;active=!1;opened=0;loaded=!1;disposed=!1;failures=[];vt1=null;triangles=0;meshes=0;constructor(e,n=!1){this.scene=e,this.root.name="two-worlds-industrial-atrium",this.root.visible=!1,e.add(this.root),this.hall.name="physical-exhibition-hall",this.details.name="cosmetic-atrium-detail",this.roof.name="daylit-steel-roof",this.light.name="neutral-atrium-daylight",this.root.add(this.hall,this.details,this.roof,this.light),this.floor=this.box(De.groundSpan,.22,De.groundSpan,0,-.115,0,this.stone,this.root,"continuous-concrete-boss-ground"),n?(this.panels.push(...Wo.createPanels(this.root,G.width,G.depth)),this.vt1=new Wo(this.hall,this.details,this.roof,this.panels),this.stone.color.setHex(5854799),this.stone.roughness=.86,this.stone.metalness=.025,this.sky.setHex(1580068),this.fog.color.copy(this.sky)):(this.makeFloor(),this.makeEnclosure(),this.makeCourt()),this.makeLights();const t=new Ke(4.5,4.72,112).rotateX(-Math.PI/2);this.redInlay=new P(t,this.crimson),this.redInlay.position.y=.016,this.redInlay.name="localized-crimson-ground-inlay",this.root.add(this.redInlay),this.mergeStatic(this.hall),this.mergeStatic(this.details),this.mergeStatic(this.roof);for(const i of this.panels)this.mergeStatic(i);this.remember()}box(e,n,t,i,s,o,a,l,c=""){const h=new ve(e,n,t),u=h.getAttribute("uv");for(let p=0;p<6;p++)for(let m=p*4;m<p*4+4;m++){const b=p<2?t:(p<4,e),g=p<2?n:p<4?t:n;u.setXY(m,u.getX(m)*b/De.floorTile,u.getY(m)*g/De.floorTile)}(a===this.concrete||a===this.stone)&&(Nl(h,i,s,o),Rl(h,i,s,o));const d=new P(h,a);return d.position.set(i,s,o),d.name=c,l.add(d),d}beam(e,n,t,i,s){const o=n.clone().sub(e),a=this.box(t,o.length(),t,0,0,0,i,s);return a.position.copy(e).add(n).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new _(0,1,0),o.normalize()),a}makeFloor(){const{width:e,depth:n}=G;for(const t of[-1,1])this.box(e,.018,.26,0,.004,t*(n/2-.55),this.grout,this.hall),this.box(.26,.018,n,t*(e/2-.55),.004,0,this.grout,this.hall);for(let t=-7;t<=7;t++)this.box(.016,.01,44,t*De.floorTile,.003,0,this.grout,this.details),this.box(44,.01,.016,0,.003,t*De.floorTile,this.grout,this.details);for(const[t,i]of[[2.76,2.79],[2.87,2.91]]){const s=new P(new Ke(t,i,80).rotateX(-Math.PI/2),this.steel);s.position.y=.009,this.details.add(s)}for(const t of[-1,1])for(let i=-6;i<=6;i++)this.box(.13,.012,.045,t*(e/2-.19),.004,i*.8,this.darkSteel,this.details),this.box(.045,.012,.13,i*.8,.004,t*(n/2-.19),this.darkSteel,this.details)}makeEnclosure(){const{width:e,depth:n}=G;for(const[t,i,s,o]of[[0,e,n/2+.38,0],[1,e,n/2+.38,Math.PI],[2,n,e/2+.38,Math.PI/2],[3,n,e/2+.38,-Math.PI/2]]){const a=new W;a.name=`heavy-reveal-panel-${t}`,a.rotation.y=o;const l=t===1||t===3?-1:1;t<2?a.position.z=-s*l:a.position.x=-s*l,this.panels.push(a),this.root.add(a);const c=i/2,h=[-i*.3,i*.3];this.box(i+.3,2.4,.42,0,3.94,-.04,this.concrete,a);const u=[-c-.15,...h.flatMap(d=>[d-.84,d+.84]),c+.15];for(let d=0;d<u.length;d+=2){const p=u[d],m=u[d+1];this.box(m-p,2.72,.42,(p+m)/2,1.36,-.04,this.concrete,a)}for(const d of h)this.door(d,a,t);for(let d=-c+.2;d<c;d+=1.65){this.box(.025,2.15,.016,d,3.94,.181,this.grout,a);for(const p of[3.12,4.69])this.box(.054,.054,.02,d+.21,p,.19,this.recess,a)}this.box(i+.3,.12,.52,0,2.77,0,this.steel,a),this.box(i+.3,.1,.48,0,5.13,0,this.darkSteel,a),this.box(i+.3,.12,.48,0,.08,0,this.grout,a);for(const d of[-c+.14,0,c-.14])this.box(.22,5.3,.46,d,2.65,.05,this.steel,a),this.box(.29,.16,.58,d,.16,.05,this.darkSteel,a);for(const d of[-i*.15,i*.15])this.box(.9,1.28,.045,d,3.93,.195,this.darkSteel,a),this.box(.83,1.2,.02,d,3.93,.226,this.mirror,a);for(const d of[-1,1])for(let p=0;p<6;p++){const m=d*(i*.17+p*.19),b=this.box(.03,.62,.035,m,3.22,.238,this.mirror,a);b.rotation.z=d*.19,this.box(.11,.025,.032,m,3.61,.24,this.darkSteel,a)}t===0&&this.sign(a,i)}}door(e,n,t){const i=De.doorHeight,s=De.doorWidth;this.box(s,i,.15,e,i/2,-.1,this.recess,n);for(const o of[-1,1])this.box(.08,i+.1,.28,e+o*(s/2+.02),i/2,.08,this.steel,n),this.box(s/2-.035,i-.08,.04,e+o*s/4,i/2,.015,this.darkSteel,n),this.box(.018,i-.1,.018,e+o*.016,i/2,.045,this.steel,n),this.box(.025,.36,.055,e+o*.14,1.04,.1,this.steel,n),this.box(.018,.46,.018,e+o*(s/2-.15),i-.4,.045,this.mirror,n);this.box(s+.17,.1,.28,e,i+.045,.08,this.steel,n),this.box(s+.2,.035,.51,e,.025,.04,this.steel,n),this.box(.4,.065,.07,e,i+.23,.2,this.warmLamp,n),this.box(.25,.36,.03,e+s/2+.24,1.46,.2,this.steel,n);for(let o=0;o<t+1;o++)this.box(.13,.012,.015,e+s/2+.24,1.57-o*.047,.225,this.recess,n)}sign(e,n){if(this.box(4,.73,.055,0,4.06,.24,this.steel,e),typeof document>"u")return;const t=document.createElement("canvas");t.width=1024,t.height=192;const i=t.getContext("2d");if(!i)return;i.fillStyle="#c4c5ba",i.fillRect(0,0,1024,192),i.fillStyle="#363e3c",i.textAlign="center",i.font="600 49px Arial",i.fillText("EVERYONE APPROVES.",512,86),i.font="24px Arial",i.fillText("01   /   SYCOPHANCY   /   EXHIBITION COURT",512,142);const s=new At(t);s.colorSpace=ge,this.textures.add(s);const o=new U({map:s,roughness:.84,metalness:.06}),a=new P(new fe(3.88,.67),o);a.position.set(0,4.06,.275),e.add(a);for(const l of[-n*.41,n*.41]){const c=new P(new Te(.29,.024,5,28),this.steel);c.position.set(l,3.94,.24),e.add(c);for(const u of[-.08,.08])this.box(.028,.062,.024,l+u,4.02,.24,this.darkSteel,e);const h=new P(new Te(.15,.016,5,20,Math.PI),this.darkSteel);h.rotation.z=Math.PI,h.position.set(l,3.94,.245),e.add(h)}}makeCourt(){const e=De.roofHeight;for(let n=-18;n<=18;n+=6){this.box(38,.24,.22,0,e,n,this.darkSteel,this.roof),this.box(38,.12,.13,0,e+1.15,n,this.steel,this.roof);for(let t=-18;t<18;t+=3)this.beam(new _(t,e,n),new _(t+1.5,e+1.15,n),.085,this.steel,this.roof),this.beam(new _(t+1.5,e+1.15,n),new _(t+3,e,n),.085,this.steel,this.roof)}for(let n=-18;n<=18;n+=3)this.box(.1,.14,38,n,e+1.19,0,this.steel,this.roof);for(const n of[-1,1]){this.box(6.1,.1,38,n*14.4,e+1.35,0,this.concrete,this.roof),this.box(38,.1,5,0,e+1.35,n*16,this.concrete,this.roof),this.box(.08,4,36,n*18.5,8,0,this.glass,this.roof),this.box(36,4,.08,0,8,n*18.5,this.glass,this.roof),this.box(.32,.4,38,n*18.5,5.78,0,this.concrete,this.roof),this.box(38,.4,.32,0,5.78,n*18.5,this.concrete,this.roof);for(let t=-18;t<=18;t+=3)this.box(.095,4.8,.14,n*18.5,8.2,t,this.steel,this.roof),this.box(.14,4.8,.095,t,8.2,n*18.5,this.steel,this.roof);this.box(.08,.1,36,n*18.1,6.78,0,this.steel,this.roof),this.box(36,.1,.08,0,6.78,n*18.1,this.steel,this.roof)}for(const n of[-15,-9,-3,3,9,15])for(const t of[-1,1]){this.box(5.72,.035,4.72,t*14.4,e+1.27,n,this.recess,this.roof);for(const i of[-2.72,2.72])this.box(.035,.075,4.76,t*14.4+i,e+1.23,n,this.steel,this.roof)}for(const n of this.panels)for(const t of[-1,1])this.box(.36,5.4,.7,t*6.3,2.7,-.56,this.concrete,n),this.box(.28,.18,.36,t*6.3,1.85,-.13,this.steel,n)}makeLights(){const e=new zn(14871020,6908767,Q.atrium.ambient);this.light.add(e);const n=new Pe(16773334,Q.atrium.key);n.position.set(-13,21,-9),this.light.add(n);const t=new Pe(13163749,Q.atrium.fill);t.position.set(9,7,9),this.light.add(t),_l(e,n,t)}mergeStatic(e){const n=new Map;for(const t of[...e.children]){if(!(t instanceof P)||Array.isArray(t.material)||t.material.transparent)continue;t.updateMatrix();const i=t.geometry.clone().applyMatrix4(t.matrix),s=n.get(t.material)??[];s.push(i),n.set(t.material,s),t.geometry.dispose(),e.remove(t)}for(const[t,i]of n){const s=En(i,!1);if(i.forEach(o=>o.dispose()),s){const o=new P(s,t);o.name=`batched-${e.name}-${t.uuid.slice(0,8)}`,e.add(o)}}}remember(){this.triangles=0,this.meshes=0,this.root.traverse(e=>{if(e instanceof P){this.meshes++,this.geometries.add(e.geometry),this.triangles+=(e.geometry.index?.count??e.geometry.getAttribute("position").count)/3;for(const n of Array.isArray(e.material)?e.material:[e.material]){this.materials.add(n);for(const t of Object.values(n))t instanceof $n&&this.textures.add(t)}}})}async load(e,n){if(this.loaded||this.disposed)return;if(this.vt1){if(await this.vt1.load(e),this.disposed)return;this.remember()}const t=[["concrete_floor_diff_1k.jpg","map"],["concrete_floor_nor_gl_1k.jpg","normalMap"],["concrete_floor_rough_1k.jpg","roughnessMap"],["metal_plate_02_nor_gl_1k.jpg","normalMap"],["metal_plate_02_rough_1k.jpg","roughnessMap"]];for(let i=0;i<t.length;i++){const[s,o]=t[i];try{const a=await st(e,nc+s);if(this.disposed){a.dispose();return}a.wrapS=a.wrapT=ln,a.anisotropy=Math.min(4,n?.capabilities.getMaxAnisotropy()??1),o==="map"&&(a.colorSpace=ge),this.textures.add(a);for(const l of i<3?[this.stone,this.concrete]:[this.steel,this.darkSteel])l[o]=a,l.normalScale.setScalar(i<3?Q.atrium.concreteNormal:Q.atrium.steelNormal),l.needsUpdate=!0}catch{this.failures.push(s)}}this.loaded=!0}update(e,n){if(this.active=!this.disposed&&e.stage===1,this.root.visible=this.active,!this.active)return!1;const t=!n&&e.arena.active&&["reveal","boss","defeat","dead","complete"].includes(e.phase);this.opened=t?e.phase==="reveal"?ec(e.phaseTime/Re.revealSeconds):1:0;for(const s of this.panels)s.position.y=this.opened*De.openingLift;const i=s=>Math.round(s/De.groundStep)*De.groundStep;return this.floor.position.x=i(e.player.x),this.floor.position.z=i(e.player.z),this.redInlay.visible=this.opened>0,this.crimson.opacity=this.opened*(this.reduced?.22:.32),this.redInlay.position.x=e.arena.centerX,this.redInlay.position.z=e.arena.centerZ,this.details.visible=!this.reduced,this.scene.background=this.sky,this.scene.fog=this.fog,this.scene.environmentIntensity=Q.atrium.environment,!0}setReduced(e){this.reduced=e,this.details.visible=!e}resources(){return{geometries:this.geometries,materials:this.materials,textures:this.textures}}stats(){return{active:this.active,loaded:this.loaded,optionalMapFailures:[...this.failures],style:this.vt1?"palace-of-applause-v0.1":"grounded-industrial-atrium",profile:this.vt1?xe.id:Un.id,opening:this.opened,panels:this.panels.length,doorHeight:De.doorHeight,doorWidth:De.doorWidth,groundY:-.005,continuousGround:!0,collisionChanges:!1,triangles:this.triangles,meshDraws:this.meshes,reduced:this.reduced,localizedCrimson:this.active&&this.opened>0,sourceReceipt:"public/assets/pbr/sources.json",measuredGPU:!1}}dispose(){this.disposed||(this.disposed=!0,this.vt1?.detach(),this.root.removeFromParent(),this.geometries.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.textures.forEach(e=>e.dispose()),this.root.clear())}}class As{disposed=!1;active=0;waiting=[];controllers=new Set;concurrency;constructor(e=2){if(!Number.isInteger(e)||e<1)throw new RangeError("Invalid asset concurrency");this.concurrency=e}async load(e,n,t,i=15e3){if(this.disposed)throw new Error("Asset loader disposed");if(await new Promise(o=>{this.waiting.push(()=>{this.active++,o()}),this.drain()}),this.disposed)throw this.active--,this.drain(),new Error("Asset loader disposed");const s=new AbortController;this.controllers.add(s);try{return await new Promise((o,a)=>{let l=!1;const c=()=>{l=!0,clearTimeout(u),s.signal.removeEventListener("abort",h)},h=()=>{l||(c(),a(new Error(`Asset unavailable: ${e}`)))},u=setTimeout(()=>s.abort(),i);s.signal.addEventListener("abort",h,{once:!0}),Promise.resolve().then(()=>n(s.signal)).then(d=>{if(l||this.disposed||s.signal.aborted){t(d);return}c(),o(d)},d=>{l||(c(),a(d))})})}finally{this.controllers.delete(s),this.active--,this.drain()}}drain(){for(;this.active<this.concurrency&&this.waiting.length;)this.waiting.shift()()}dispose(){this.disposed=!0;for(const e of this.controllers)e.abort();this.drain()}}class ic extends tt{constructor(){super();const e=new ve;e.deleteAttribute("uv");const n=new U({side:ba}),t=new U,i=new Jt(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new P(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new X(e,t,6),a=new we;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new P(e,Ht(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new P(e,Ht(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new P(e,Ht(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new P(e,Ht(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new P(e,Ht(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new P(e,Ht(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Ht(r){return new Sr({color:0,emissive:16777215,emissiveIntensity:r})}class sc{mesh;clock=0;lastTime=null;constructor(){const e=new Ri({side:ba,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{skyPhoto:{value:null},hasPhoto:{value:0},skyTime:{value:0},horizon:{value:new V(2497330)},bossMix:{value:0}},vertexShader:`varying vec3 skyDirection;
    void main(){skyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`
    uniform sampler2D skyPhoto;
    uniform float hasPhoto, skyTime, bossMix;
    uniform vec3 horizon;
    varying vec3 skyDirection;
    const float SKY_PI=3.14159265;

    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float line(float distance,float width){return 1.0-smoothstep(width,width+max(fwidth(distance),.0005),abs(distance));}
    vec2 tangent(vec3 ray,vec3 axis){
     vec3 right=normalize(cross(vec3(0.0,1.0,0.0),axis));
     return vec2(dot(ray,right),dot(ray,cross(axis,right)));
    }
    // Half-hidden, distant watchers. No white eyeballs or repeated eye strip.
    vec3 watcher(vec3 ray,vec3 axis,float size,float phase,float veil){
     vec2 p=tangent(ray,axis)/size;
     float front=smoothstep(.9,.98,dot(ray,axis));
     float lidShape=.31*pow(max(0.0,1.0-p.x*p.x),1.2);
     float lid=line(abs(p.y)-lidShape,.006)*(1.0-smoothstep(.82,1.0,abs(p.x)));
     float radius=length(p),angle=atan(p.y,p.x);
     float iris=exp(-abs(radius-.155)*65.0);
     float fibers=.65+.35*sin(angle*41.0+radius*95.0+phase);
     vec3 tint=mix(vec3(.12,.35,.62),vec3(.62,.07,.20),bossMix);
     return tint*(lid*.22+iris*fibers*.48)*front*veil;
    }
    void main(){
     vec3 ray=normalize(skyDirection);
     float elevation=max(ray.y,0.0);
     vec2 uv=vec2(atan(ray.z,ray.x)/(2.0*SKY_PI)+.5,asin(clamp(ray.y,-1.0,1.0))/SKY_PI+.5);
     float time=skyTime;
     // Sample only the upper photo hemisphere, excluding trees and ground.
     vec2 cloudUV=vec2(fract(uv.x+.13+time*.00022),.565+.425*pow(elevation,.72));
     cloudUV.x+=.005*sin(ray.y*7.0+ray.z*3.0+time*.018);
     vec3 photo=vec3(.2),highCloud=vec3(.2);
     if(hasPhoto>.5){
      photo=texture2D(skyPhoto,cloudUV).rgb;
      highCloud=texture2D(skyPhoto,vec2(fract(cloudUV.x+.21-time*.00035),mix(.59,.97,elevation))).rgb;
     }
     float lum=dot(photo,vec3(.2126,.7152,.0722));
     float highLum=dot(highCloud,vec3(.2126,.7152,.0722));
     float density=smoothstep(.12,.76,lum/(lum+.65));
     float filaments=pow(clamp(highLum/(highLum+.8),0.0,1.0),2.0);
     vec3 ink=vec3(.009,.012,.038);
     vec3 cloudTint=mix(vec3(.15,.085,.28),vec3(.27,.025,.085),bossMix);
     vec3 color=mix(ink,cloudTint,density*.82);
     color+=vec3(.045,.095,.18)*filaments*(1.0-bossMix*.65);

     // One fixed celestial focal point above the default combat sight line.
     vec3 axis=normalize(vec3(-.28,.62,-1.0));
     vec2 p=tangent(ray,axis);
     float forward=smoothstep(.75,.95,dot(ray,axis));
     float r=length(p),angle=atan(p.y,p.x);
     float rimRadius=.235;
     float ripples=sin(angle*19.0-time*.055)*sin(angle*7.0+time*.025);
     float corona=exp(-abs(r-rimRadius)*38.0)*(1.0+.17*ripples);
     vec3 warm=mix(vec3(1.6,.23,.095),vec3(1.65,.055,.095),bossMix);
     vec3 cool=vec3(.18,.35,.95);
     vec3 spectrum=mix(cool,warm,.5+.5*sin(angle+1.1));
     color+=spectrum*corona*.60*forward;
     color+=vec3(.13,.025,.22)*exp(-abs(r-rimRadius)*8.0)*forward;
     float disc=(1.0-smoothstep(rimRadius-.004,rimRadius,r))*forward;
     color=mix(color,vec3(.004,.002,.013),disc*.98);
     color+=spectrum*line(r-rimRadius,.0018)*forward*1.45;

     // Engraved orbital arcs and a restrained iris inside the eclipse.
     vec2 orbit=vec2(p.x*.92+p.y*.38,-p.x*.38+p.y*.92);
     float ring=length(orbit/vec2(1.0,.44));
     float arc=.5+.5*sin(angle*3.0+.4);
     color+=spectrum*line(ring-.325,.00085)*forward*arc*.35;
     color+=vec3(.32,.17,.55)*line(r-.282,.00065)*forward*.28;
     float iris=exp(-abs(r-.081)*115.0);
     float fibers=.65+.35*sin(angle*67.0+r*260.0-time*.07);
     color+=mix(vec3(.14,.24,.55),vec3(.55,.045,.09),bossMix)*iris*fibers*forward*.55;
     float pupil=1.0-smoothstep(.005,.011,abs(p.x)+abs(p.y)*.14);
     color=mix(color,vec3(.002,.001,.009),pupil*disc*(1.0-smoothstep(.06,.07,r)));

     // Wisps veil the eclipse edge without volumetric marching.
     float veil=density*filaments*.30;
     color=mix(color,cloudTint*.38,veil*forward*smoothstep(.18,.30,r));
     float wave=.46+.095*sin(uv.x*2.0*SKY_PI+time*.014)+.035*sin(uv.x*6.0*SKY_PI-time*.021);
     float aurora=exp(-abs(ray.y-wave)*35.0)*smoothstep(.1,.35,ray.y);
     color+=mix(vec3(.025,.13,.12),vec3(.15,.015,.08),bossMix)*aurora*(.3+.7*filaments);

     vec2 starsUV=uv*vec2(600.0,300.0);
     vec2 cell=floor(starsUV),offset=fract(starsUV)-.5;
     float seed=hash(cell);
     float star=(1.0-smoothstep(.025,.14,length(offset)))*step(.9965,seed);
     color+=vec3(.36,.42,.65)*star*(1.0-density)*smoothstep(.22,.65,ray.y);
     color+=watcher(ray,normalize(vec3(.82,.51,-.18)),.20,1.3,1.0-density*.75);
     color+=watcher(ray,normalize(vec3(-.76,.72,.46)),.16,3.9,1.0-density*.75);

     color=mix(horizon,color,smoothstep(.015,.22,ray.y));
     gl_FragColor=vec4(max(color,vec3(0.0)),1.0);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
    }`});this.mesh=new P(new je(60,32,16),e),this.mesh.name="approval-eclipse-sky",this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3}setTexture(e){const n=this.mesh.material.uniforms;n.skyPhoto.value!==e&&n.skyPhoto.value?.dispose(),e.wrapS=ln,n.skyPhoto.value=e,n.hasPhoto.value=1}update(e,n,t,i,s){this.lastTime!==null&&!s&&(this.clock+=Math.max(0,Math.min(n-this.lastTime,.1))),this.lastTime=n,this.mesh.position.copy(e.position);const o=this.mesh.material.uniforms;o.skyTime.value=this.clock,o.horizon.value.copy(t),o.bossMix.value=He.clamp(i,0,1)}dispose(){this.mesh.material.uniforms.skyPhoto.value?.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class oc{mounts=[];tread=new U({color:11577783,metalness:.72,roughness:.63,envMapIntensity:.6});rubber=new U({color:7827843,metalness:0,roughness:.86,envMapIntensity:.25});ready=[];failures=[];unusedGeometries=new Set;unusedMaterials=new Set;unusedTextures=new Set;constructor(e,n,t,i){e.forEach((o,a)=>{const l=new W;l.name="industrial-wall-fixtures",l.rotation.y=[0,Math.PI,Math.PI/2,-Math.PI/2][a],o.add(l),this.mounts.push(l)});const s=(o,a,l,c)=>{const h=a.map(([p,m,b,g])=>{const f=new fe(p,m).rotateX(-Math.PI/2).translate(b,.022,g),w=f.getAttribute("uv");for(let v=0;v<w.count;v++)w.setXY(v,w.getX(v)*p/c,w.getY(v)*m/c);return f}),u=En(h,!1);h.forEach(p=>p.dispose());const d=new P(u,l);d.name=o,n.add(d)};s("industrial-tread-perimeter",[[.65,i-1.8,-t/2+.72,0],[.65,i-1.8,t/2-.72,0],[t-2.1,.65,0,-i/2+.72],[t-2.1,.65,0,i/2-.72]],this.tread,.65),s("rubber-service-pads",[[2,.65,-3.6,-i/2+.7],[2,.65,3.6,i/2-.7]],this.rubber,1.1)}async load(e){for(const[n,t]of[["metal_grate_rusty",this.tread],["rubber_tiles",this.rubber]]){const i=[];try{for(const s of["diff","nor_gl","arm"]){const o=await st(e,`/assets/pbr/${n}_${s}_1k.jpg`);o.wrapS=o.wrapT=ln,o.anisotropy=2,i.push(o)}i[0].colorSpace=ge,t.map=i[0],t.normalMap=i[1],t.roughnessMap=i[2],t.aoMap=i[2],t.metalnessMap=i[2],t.normalScale.setScalar(n==="rubber_tiles"?.28:.42),t.needsUpdate=!0,this.ready.push(n)}catch(s){i.forEach(o=>o.dispose()),this.failures.push(n),console.warn("Arena surface uses base material:",n,s)}}for(const n of["security-camera-01","power-box-01","modular-industrial-pipes-01"])try{const t=await it(e,`/assets/arena-${n}.glb`,8e3);t.updateMatrixWorld(!0),t.traverse(i=>{if(i instanceof P){this.unusedGeometries.add(i.geometry);for(const s of Array.isArray(i.material)?i.material:[i.material]){this.unusedMaterials.add(s);for(const o of Object.values(s))o instanceof $n&&this.unusedTextures.add(o);s instanceof U&&(s.envMapIntensity=.65,s.roughness=Math.max(.38,s.roughness),s.transparent=!1,s.depthWrite=!0)}}}),n==="modular-industrial-pipes-01"?this.pipes(t):this.fixtures(t,n==="security-camera-01"),this.ready.push(n)}catch(t){this.failures.push(n),console.warn("Optional arena fixture unavailable:",n,t)}}fixtures(e,n){const t=new Nn().setFromObject(e),i=t.getSize(new _),s=t.getCenter(new _),o=n?.88/Math.max(i.x,i.y,i.z):.88/i.y;e.position.sub(s),e.scale.setScalar(o),e.position.multiplyScalar(o);for(let a=0;a<this.mounts.length;a++){if(!n&&a>1)continue;const l=new W;l.name=n?"surveillance-camera":"closed-power-box",l.position.set(n?a%2===0?4.65:-4.65:a===0?-3.6:3.6,n?3.88:1.65,n?.57:.23),l.add(e.clone(!0)),this.mounts[a].add(l);const c=new P(new je(n?.022:.018,6,4),new q({color:n?16736474:7405528}));c.name="status-indicator",c.position.set(.11,n?-.04:.15,n?.45:.1),l.add(c)}}pipes(e){const n=o=>{const a=e.getObjectByName("modular_industrial_pipes_01_"+o);if(!a)throw new Error("Missing pipe part "+o);let l;if(a.traverse(p=>{p instanceof P&&(l=p)}),!l)throw new Error("Missing pipe mesh");const c=l.geometry.clone().applyMatrix4(l.matrixWorld);c.computeBoundingBox();const h=c.boundingBox,u=h.getCenter(new _),d=h.getSize(new _);return c.translate(-u.x,-u.y,-u.z),{geometry:c,material:l.material,size:d}},t=n("pipe02"),i=n("pipe08"),s=new we;for(const o of this.mounts){const a=new X(t.geometry,t.material,6);a.name="instanced-overhead-pipes";for(let c=0;c<6;c++)s.position.set(-5+c*2,4.12,.3),s.rotation.set(0,0,Math.PI/2),s.scale.setScalar(2/t.size.y),s.updateMatrix(),a.setMatrixAt(c,s.matrix);a.instanceMatrix.needsUpdate=!0,o.add(a);const l=new P(i.geometry,i.material);l.name="pipe-valve",l.rotation.z=Math.PI/2,l.position.set(0,4.12,.37),o.add(l)}}stats(){return{loaded:[...this.ready],failed:[...this.failures],wallFixtures:this.mounts.map(e=>({objects:e.children.length,visible:e.parent?.visible??!1})),cameras:this.ready.includes("security-camera-01")?4:0,powerBoxes:this.ready.includes("power-box-01")?2:0}}resources(){return{geometries:this.unusedGeometries,materials:this.unusedMaterials,textures:this.unusedTextures}}}const pe=new we,ac=new _(0,1,0),Rs=new _,rc=new V(7468031),lc=new V(10049023),cc=new V(16774116);function hc(r){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d");n.clearRect(0,0,64,64),n.fillStyle="white",n.font="bold 55px monospace",n.textAlign="center",n.textBaseline="middle",n.fillText(r,32,33);const t=new At(e);return t.colorSpace=ge,t}function Gi(r,e,n){const t=new X(r,e,n);return t.frustumCulled=!1,t.instanceMatrix.setUsage(le),t.count=0,t}function qo(r,e,n,t,i){Rs.set(t.x-n.x,t.y-n.y,t.z-n.z);const s=Rs.length();pe.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),pe.quaternion.setFromUnitVectors(ac,Rs.normalize()),pe.scale.set(i,s,i),pe.updateMatrix(),r.setMatrixAt(e,pe.matrix)}class dc{constructor(e,n=null){this.g2Materials=n,this.root.name="level-2-anthropomorphism",this.root.visible=!1,e.add(this.root),this.glyphs=[0,1].map(t=>Gi(new fe(.095,.135),new q({map:hc(String(t)),color:16777215,transparent:!0,alphaTest:.15,side:re,depthWrite:!1}),192)),this.architecture=this.glyphs.map(t=>Gi(t.geometry,t.material,100)),this.necks=Gi(new Mn(1,1,1,10,1),new U({color:13147531,roughness:.78,metalness:0,envMapIntensity:.52}),40),this.cores=Gi(new zt(.19,1),new U({color:2167095,emissive:6568637,emissiveIntensity:1.5,roughness:.3,metalness:.55}),4),this.root.add(...this.glyphs,...this.architecture,this.necks,this.cores);for(let t=0;t<6;t++){const i=new P(new Ke(.26,.31,32),new q({color:16759155,transparent:!0,opacity:.7,depthWrite:!1,side:re}));i.rotation.x=-Math.PI/2,i.visible=!1,this.root.add(i),this.rings.push(i);const s=new P(new Te(.29,.011,5,32),new q({color:14131199,transparent:!0,opacity:.7,depthWrite:!1}));s.visible=!1,this.root.add(s),this.halos.push(s);const o=new Ge;o.setAttribute("position",new rn(new Float32Array(78),3)),o.setDrawRange(0,0);const a=new as(o,new Si({color:16759155,transparent:!0,opacity:.65,depthWrite:!1}));a.frustumCulled=!1,a.visible=!1,this.root.add(a),this.paths.push(a)}for(let t=0;t<2;t++){const i=this.architecture[t];let s=0;for(let o=0;o<5;o++)for(let a=0;a<16;a++)if((o+a)%2===t)for(const l of[-1,1])pe.position.set((a-7.5)*.75,.55+o*.69,l*(G.depth/2-.13)),pe.rotation.set(0,l>0?Math.PI:0,0),pe.scale.setScalar(2.4),pe.updateMatrix(),i.setMatrixAt(s,pe.matrix),i.setColorAt(s++,o%2?new V(5514559):new V(7942982));i.count=s,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}g2Materials;root=new W;masks=[];heads=[];body=null;glyphs;architecture;necks;cores;rings=[];paths=[];pathKeys=Array(6).fill("");halos=[];loaded=!1;reduced=!1;resources=[];async load(e){if(this.loaded)return;const n=[];try{for(const a of["mask","hydra-body","hydra-heads"])n.push(await it(e,this.g2Materials&&a!=="mask"?`/assets/graphics-g2/${a}-visual.glb`:`/assets/level2/${a}.glb`));const[t,i,s]=n;this.g2Materials?.apply(i),this.g2Materials?.apply(s);for(const a of[i,s])a.traverse(l=>{if(l instanceof P)for(const c of Array.isArray(l.material)?l.material:[l.material])Ys(c,"boss")});const o=Array.from({length:6},(a,l)=>{const c=`head_${String(l+1).padStart(2,"0")}`,h=s.getObjectByName(c);if(!h)throw new Error(`Hydra asset missing ${c}`);return h});this.resources.push(t,s);for(let a=0;a<6;a++){const l=t.clone(!0);l.visible=!1,this.root.add(l),this.masks.push(l)}this.body=i,this.root.add(i);for(const a of o)a.removeFromParent(),a.position.set(0,0,0),a.quaternion.identity(),this.root.add(a),this.heads.push(a);this.loaded=!0}catch(t){throw n.forEach(qe),t}}setReduced(e){this.reduced=e}render(e,n=!1){const t=e.stage===2&&!n;if(this.root.visible=t,!t)return;for(const a of this.architecture)a.visible=e.level2?.environment.mode!=="forest_grotto";for(const a of this.masks)a.visible=!1;for(const a of this.heads)a.visible=!1;for(const a of[...this.rings,...this.paths,...this.halos])a.visible=!1;this.necks.count=0,this.cores.count=0;for(const a of this.glyphs)a.count=0;this.body&&(this.body.visible=!1);let i=0;const s=[0,0];e.enemies.slice(0,4).forEach((a,l)=>{const c=zr(a),h=a.age,u=a.mask,d=u?.mode==="warning",p=u?.mode==="away"||u?.mode==="recovery",m=a.flash>0?cc:a.role==="shooter"?rc:lc,b=this.masks[i++];if(b){b.visible=!p,b.position.set(c.x,c.y,c.z),b.rotation.set(0,a.heading,a.role==="chaser"?.06:0);const g=u?.mode==="reform"?Math.max(.1,1-u.timer/.35):1;b.scale.setScalar(g)}pe.position.set(a.x,.98,a.z),pe.rotation.set(0,h*.4,0),pe.scale.setScalar(1),pe.updateMatrix(),this.cores.setMatrixAt(l,pe.matrix),this.cores.setColorAt(l,m),this.cores.count++;for(let g=0;g<80;g++){const f=(g+a.id)%2,w=this.glyphs[f],v=Math.floor(g/10),E=g%10*Math.PI/5+v*.21,y=a.role==="shooter",M=(y?.34:.23)*(1-v*.057),z=y?0:Math.sin(v*.5+h*.4)*.1;pe.position.set(a.x+Math.cos(E)*M+z,.38+v*.145,a.z+Math.sin(E)*M),pe.rotation.set(0,E+Math.PI/2,y?0:Math.sin(h+g)*.08),pe.scale.setScalar(d?1.08:1),pe.updateMatrix(),w.setMatrixAt(s[f],pe.matrix),w.setColorAt(s[f]++,m)}if(d){const g=this.halos[l];g.visible=!0,g.position.set(c.x,c.y,c.z),g.rotation.set(0,a.heading,0),g.scale.setScalar(1+Math.sin(h*12)*.08)}});for(const a of e.projectiles.filter(l=>l.kind==="mask").slice(0,2)){const l=this.masks[i++];if(!l)break;l.visible=!0,l.position.set(a.x,a.y,a.z),l.rotation.set(0,Math.atan2(a.vx,a.vz),0),l.scale.setScalar(1)}this.glyphs.forEach((a,l)=>{a.count=s[l],a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}),this.cores.instanceMatrix.needsUpdate=!0,this.cores.instanceColor&&(this.cores.instanceColor.needsUpdate=!0);const o=e.boss;if(o?.variant==="hydra"&&this.body){const a=vo(o),l=e.phase==="defeat";this.body.visible=!0,this.body.position.set(o.x,Me(e),o.z),this.body.rotation.y=Math.atan2(o.dx,o.dz);let c=0;for(let h=1;h<a.stem.length;h++)qo(this.necks,c++,a.stem[h-1],a.stem[h],.15);for(const h of a.heads){for(let p=1;p<h.points.length;p++)qo(this.necks,c++,h.points[p-1],h.points[p],.1);const u=this.heads[h.id];if(u&&(u.visible=!0,u.position.set(h.position.x,h.position.y,h.position.z),(!o.stasis||e.time>=o.stasis.until)&&u.rotation.set(0,Math.atan2(e.player.x-h.position.x,e.player.z-h.position.z),0)),l)continue;const d=o.hydra?.attacks.find(p=>p.id===h.attackId);if((h.warning||h.active)&&d){const p=this.rings[h.id];p.visible=!0,p.position.set(d.target.x,Me(e)+.025,d.target.z),p.scale.setScalar(h.active?1:1.25-h.progress*.25);const m=this.paths[h.id],b=m.geometry.getAttribute("position");m.visible=!0;const g=`${e.attemptId}:${d.id}`;if(this.pathKeys[h.id]!==g){const w=Array.from({length:26},(v,E)=>{const y=d.start+d.warning+Math.min(d.strike-1e-6,d.strike*E/25),M=vo(o,y).heads[h.id].position;return{x:M.x,y:Me(e)+.03,z:M.z}});w.forEach((v,E)=>b.setXYZ(E,v.x,v.y,v.z)),b.needsUpdate=!0,m.geometry.setDrawRange(0,w.length),this.pathKeys[h.id]=g}const f=this.halos[h.id];f.visible=!this.reduced,f.position.set(h.position.x,h.position.y,h.position.z),f.lookAt(e.player.x,G.eyeHeight+e.player.y,e.player.z),f.scale.setScalar(1.12)}}this.necks.count=c,this.necks.instanceMatrix.needsUpdate=!0}}stats(){return{loaded:this.loaded,heads:this.heads.length,maskSlots:this.masks.length,glyphCap:384,neckSegments:this.necks.count}}}const _s=32,wt=128,Ln=64,ji=4,Cn=24,Bi=4;class Ko{group=new W;geometries=new Set;materials=new Set;dummy=new we;color=new V;body;fins;head=new W;jaw=new W;tail=new W;mouth;red;water;warning;presence;warningOutline;warningPositions=new Float32Array((Ln*ji*6+Cn*Bi*12)*3);outlinePositions=new Float32Array((Cn*2+Ln*2)*3);disposed=!1;waterTime=0;constructor(){this.group.name="level-3-drift-procedural-prototype",this.group.visible=!1;const e=new zn(12966358,5331021,1.8),n=new Pe(16774104,2.1);n.position.set(-8,16,6),this.group.add(e,n),this.water=this.material(new Ri({uniforms:{time:{value:0},islandZ:{value:ne.islandZ},islandRadius:{value:ne.islandRadius}},vertexShader:`varying vec3 worldPoint;
    void main(){worldPoint=(modelMatrix*vec4(position,1.0)).xyz;
     gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,fragmentShader:`uniform float time;uniform float islandZ;uniform float islandRadius;varying vec3 worldPoint;
    void main(){vec2 p=worldPoint.xz;
     float swell=sin(p.x*.21+p.y*.16+time*.46)*sin(p.x*.12-p.y*.24-time*.29);
     float glint=pow(max(0.0,sin(p.x*1.3+p.y*.74+sin(p.y*.29+time*.4)+time*.65)),18.0);
     float shore=1.0-smoothstep(0.0,7.0,length(p-vec2(0.0,islandZ))-islandRadius);
     vec3 sea=mix(vec3(.045,.19,.23),vec3(.13,.36,.37),swell*.16+.45);
     sea=mix(sea,vec3(.25,.47,.43),shore*.6);sea+=glint*.033;
     float haze=smoothstep(170.0,560.0,length(p-cameraPosition.xz));
     gl_FragColor=vec4(mix(sea,vec3(.39,.49,.52),haze),1.0);
     #include <tonemapping_fragment>
     #include <colorspace_fragment>
    }`}));const t=this.mesh(new fe(1600,1600),this.water,this.group);t.name="fixed-ocean-surface",t.rotation.x=-Math.PI/2,t.position.set(0,-.018,ne.islandZ/2),this.presence=this.mesh(new St(1,32),this.material(new q({color:3153709,transparent:!0,opacity:.42,depthWrite:!1})),this.group),this.presence.rotation.x=-Math.PI/2,this.presence.scale.set(1.3,5,1),this.presence.visible=!1,this.makeIsland(),this.makeBoundary(),this.red=this.material(new U({color:11873844,roughness:.46,metalness:.04}));const i=this.material(new U({color:7346987,roughness:.7})),s=this.material(new U({color:16771508,roughness:.52})),o=this.material(new U({color:1382682,roughness:.62})),a=this.geometry(new je(1,16,12));this.body=this.pool(a,this.red,_s),this.body.name="serpent-canonical-segments",this.fins=this.pool(this.geometry(new kt(1,1,3)),i,_s),this.group.add(this.body,this.fins,this.head,this.tail),this.head.name="serpent-prototype-head",this.mesh(a,this.red,this.head).scale.set(ne.headRadius,.88*ne.headRadius,ne.headRadius);for(const m of[-1,1]){const b=this.mesh(a,s,this.head);b.position.set(m*.57,.31,.71),b.scale.set(.39,.53,.29);const g=this.mesh(a,o,this.head);g.position.set(m*.57,.31,.978),g.scale.set(.075,.3,.035);const f=this.mesh(a,this.red,this.head);f.position.set(m*.57,.78,.64),f.scale.set(.45,.13,.26),f.rotation.z=m*-.18;const w=this.mesh(a,o,this.head);w.position.set(m*.22,-.06,1.018),w.scale.set(.06,.045,.02);const v=this.mesh(new kt(.48,.8,3),i,this.head);v.position.set(m*.97,.04,-.27),v.rotation.z=m*-Math.PI/2,v.scale.z=.32}this.mouth=this.mesh(a,o,this.head),this.mouth.position.set(0,-.38,.91),this.mouth.scale.set(.72,.23,.15);const c=this.mesh(new Te(.61,.055,6,24,Math.PI),s,this.head);c.position.set(0,-.17,.99),c.rotation.z=Math.PI,c.scale.y=.47,this.jaw.position.set(0,-.41,.12),this.head.add(this.jaw);const h=this.mesh(a,this.red,this.jaw);h.position.set(0,-.07,.28),h.scale.set(.77,.22,.67);for(let m=0;m<7;m++){const b=this.mesh(new kt(.052,.15,3),s,this.head);b.position.set((m-3)*.155,-.36,.997-Math.abs(m-3)*.019),b.rotation.z=Math.PI}const u=this.geometry(new kt(.53,1.45,3));for(const m of[-1,1]){const b=this.mesh(u,i,this.tail);b.position.set(m*.27,0,.36),b.rotation.set(Math.PI/2,0,m*.65),b.scale.z=.32}const d=this.geometry(new Ge);d.setAttribute("position",new rn(this.warningPositions,3).setUsage(le)),this.warning=this.mesh(d,this.material(new q({color:14049845,side:re,transparent:!0,opacity:.48,depthWrite:!1})),this.group),this.warning.name="authoritative-bite-capsule",this.warning.frustumCulled=!1,this.warning.visible=!1;const p=this.geometry(new Ge);p.setAttribute("position",new rn(this.outlinePositions,3).setUsage(le)),this.warningOutline=new Vs(p,this.material(new Si({color:16768407}))),this.warningOutline.frustumCulled=!1,this.warningOutline.visible=!1,this.group.add(this.warningOutline)}geometry(e){return this.geometries.add(e),e}material(e){return this.materials.add(e),e}mesh(e,n,t){this.geometries.add(e),this.materials.add(n);const i=new P(e,n);return t.add(i),i}pool(e,n,t){const i=new X(e,n,t);return i.instanceMatrix.setUsage(le),i.frustumCulled=!1,i}makeIsland(){const n=[],t=[],i=[];n.push(0,$t(0,ne.islandZ),ne.islandZ),t.push(.42,.47,.35);for(let a=0;a<13;a++){const l=ne.islandRadius-ne.beachWidth+ne.beachWidth*a/12;for(let c=0;c<wt;c++){const h=c*Math.PI*2/wt,u=Math.sin(h)*l,d=ne.islandZ+Math.cos(h)*l,p=$t(u,d),m=a/12,b=Math.sin(c*.87+a*.8)*.012;n.push(u,p,d),t.push(.49+m*.19+b,.49+m*.13+b,.36+m*.1+b);const g=1+a*wt+c,f=1+a*wt+(c+1)%wt;if(a===0)i.push(0,g,f);else{const w=g-wt,v=f-wt;i.push(w,g,f,w,f,v)}}}const s=this.geometry(new Ge);s.setAttribute("position",new Ce(n,3)),s.setAttribute("color",new Ce(t,3)),s.setIndex(i),s.computeVertexNormals();const o=this.mesh(s,this.material(new U({vertexColors:!0,roughness:.98,side:re})),this.group);o.name="fixed-island-drift-ground"}makeBoundary(){const e=this.material(new q({color:9549221})),n=this.pool(this.geometry(new je(1,8,4)),e,288);this.group.add(n),n.name="fixed-safe-corridor-and-island-foam";let t=0;for(const a of[-1,1])for(let l=0;l<88;l++){const c=ne.spawnZ+5-(ne.spawnZ+5-ne.islandZ)*l/87;Math.hypot(ne.halfWidth,c-ne.islandZ)<ne.islandRadius+.2||(this.dummy.position.set(a*ne.halfWidth,.01,c),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(.13,.023,.65+(.5+.5*Math.sin(l*2.17))*.55),this.dummy.updateMatrix(),n.setMatrixAt(t++,this.dummy.matrix))}for(let a=0;a<112;a++){const l=a*Math.PI*2/112,c=ne.islandRadius+.06;this.dummy.position.set(Math.sin(l)*c,.02,ne.islandZ+Math.cos(l)*c),this.dummy.rotation.set(0,l,0),this.dummy.scale.set(.36,.028,.1),this.dummy.updateMatrix(),n.setMatrixAt(t++,this.dummy.matrix)}n.count=t,n.instanceMatrix.needsUpdate=!0;const i=this.material(new U({color:4608597,roughness:.95,flatShading:!0})),s=this.pool(this.geometry(new zt(1,0)),i,23);this.group.add(s);let o=0;for(let a=0;a<20;a++){const l=1.16+a*(Math.PI*2-2.32)/19,c=ne.islandRadius+1.15;this.dummy.position.set(Math.sin(l)*c,.12,ne.islandZ+Math.cos(l)*c),this.dummy.rotation.set(.2,l,.1),this.dummy.scale.set(.62+a%3*.12,.55+a%4*.18,.62),this.dummy.updateMatrix(),s.setMatrixAt(o++,this.dummy.matrix)}for(let a=0;a<3;a++)this.dummy.position.set((a-1)*3.2,2.8,ne.islandZ-ne.islandRadius-4),this.dummy.rotation.set(.12,a*.37,.08),this.dummy.scale.set(2.2,4.8-a*.8,1.6),this.dummy.updateMatrix(),s.setMatrixAt(o++,this.dummy.matrix);s.count=o,s.instanceMatrix.needsUpdate=!0}updateWarning(e,n,t,i){const s=Math.hypot(t-e,i-n),o=s>1e-8?(t-e)/s:0,a=s>1e-8?(i-n)/s:1,l=ne.headRadius;let c=0,h=0;const u=(p,m)=>{const b=e+o*p+a*m,g=n+a*p-o*m,f=c++*3;this.warningPositions[f]=b,this.warningPositions[f+1]=$t(b,g)+.045,this.warningPositions[f+2]=g};for(let p=0;p<Ln;p++){const m=s*p/Ln,b=s*(p+1)/Ln;for(let g=0;g<ji;g++){const f=-l+2*l*g/ji,w=-l+2*l*(g+1)/ji;u(m,f),u(b,f),u(b,w),u(m,f),u(b,w),u(m,w)}}for(let p=0;p<2;p++)for(let m=0;m<Cn;m++){const b=p===0?Math.PI/2:-Math.PI/2,g=b+m*Math.PI/Cn,f=b+(m+1)*Math.PI/Cn,w=p*s;for(let v=0;v<Bi;v++){const E=l*v/Bi,y=l*(v+1)/Bi,M=(z,T)=>u(w+Math.cos(z)*T,Math.sin(z)*T);M(g,E),M(g,y),M(f,y),M(g,E),M(f,y),M(f,E)}}const d=(p,m)=>{const b=e+o*p+a*m,g=n+a*p-o*m,f=h++*3;this.outlinePositions[f]=b,this.outlinePositions[f+1]=$t(b,g)+.055,this.outlinePositions[f+2]=g};for(let p=0;p<Cn;p++){const m=Math.PI/2+p*Math.PI/Cn;d(Math.cos(m)*l,Math.sin(m)*l)}for(let p=0;p<Ln;p++)d(s*p/Ln,-l);for(let p=0;p<Cn;p++){const m=-Math.PI/2+p*Math.PI/Cn;d(s+Math.cos(m)*l,Math.sin(m)*l)}for(let p=0;p<Ln;p++)d(s*(1-p/Ln),l);this.warning.geometry.setDrawRange(0,c),this.warning.geometry.getAttribute("position").needsUpdate=!0,this.warningOutline.geometry.setDrawRange(0,h),this.warningOutline.geometry.getAttribute("position").needsUpdate=!0}update(e,n){if(this.group.visible=!this.disposed&&e.stage===3,!this.group.visible)return;n||(this.waterTime=e.time),this.water.uniforms.time.value=this.waterTime;const t=e.boss,i=t?.variant==="serpent";this.head.visible=this.tail.visible=this.body.visible=this.fins.visible=i;const s=Ar(e);if(this.presence.visible=i&&!s?.exposed,this.presence.visible&&t&&(this.presence.position.set(t.x,.006,t.z),this.presence.rotation.z=-t.serpent.heading),this.warning.visible=this.warningOutline.visible=!1,t?.variant!=="serpent"||!s)return;const o=Math.min(_s,s.segments.length);this.head.position.set(s.head.x,s.head.y,s.head.z),this.head.rotation.set(0,s.heading,0),this.jaw.rotation.x=Math.max(0,Math.min(1,s.jaw))*.48,this.mouth.scale.y=.23+s.jaw*.18,this.red.emissive.setHex(t.flash>0?7880496:0),this.red.emissiveIntensity=t.flash>0?.65:0,this.body.count=o,this.fins.count=0;for(let l=0;l<o;l++){const c=s.segments[l];if(this.dummy.position.set(c.x,c.y,c.z),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(c.radius),this.dummy.updateMatrix(),this.body.setMatrixAt(l,this.dummy.matrix),this.color.setHex(l%2===0?16777215:15115163),this.body.setColorAt(l,this.color),l%3===1){const h=l?s.segments[l-1]:s.head;this.dummy.position.y+=c.radius*.92,this.dummy.rotation.set(0,Math.atan2(h.x-c.x,h.z-c.z),0),this.dummy.scale.set(c.radius*.36,c.radius*.95,c.radius*.85),this.dummy.updateMatrix(),this.fins.setMatrixAt(this.fins.count++,this.dummy.matrix)}}if(this.body.instanceMatrix.needsUpdate=!0,this.body.instanceColor&&(this.body.instanceColor.needsUpdate=!0),this.fins.instanceMatrix.needsUpdate=!0,o){const l=s.segments[o-1],c=o>1?s.segments[o-2]:s.head;this.tail.position.set(l.x,l.y,l.z),this.tail.rotation.set(0,Math.atan2(l.x-c.x,l.z-c.z),0),this.tail.scale.setScalar(Math.max(.2,l.radius*2))}else this.tail.visible=!1;const a=t.serpent;(a.mode==="warning"||a.mode==="bite")&&(this.warning.visible=this.warningOutline.visible=!0,this.updateWarning(a.fromX,a.fromZ,a.toX,a.toZ))}dispose(){if(!this.disposed){this.disposed=!0,this.group.visible=!1,this.group.removeFromParent(),this.group.traverse(e=>{e instanceof X&&e.dispose()});for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();this.geometries.clear(),this.materials.clear(),this.group.clear()}}}const uc=`{
  "schema": 1,
  "units": "meters",
  "up": "Y",
  "forward": "+Z",
  "artStatus": "Draft first playable art; owner visual approval pending. ART-01 Relay composite remains a draft blockout.",
  "materials": {
    "cream": {
      "color": "#eee1bd",
      "roughness": 0.73
    },
    "lavender": {
      "color": "#a190c6",
      "roughness": 0.65
    },
    "dark": {
      "color": "#25273d",
      "roughness": 0.85
    },
    "floor": {
      "color": "#3e4158",
      "roughness": 0.9
    },
    "panel": {
      "color": "#68617d",
      "roughness": 0.85
    },
    "mint": {
      "color": "#77dcb1",
      "roughness": 0.55
    },
    "skin": {
      "color": "#85b5a2",
      "roughness": 0.85
    },
    "skinDark": {
      "color": "#487f73",
      "roughness": 0.9
    },
    "cloth": {
      "color": "#827d60",
      "roughness": 1
    },
    "trousers": {
      "color": "#594d56",
      "roughness": 1
    },
    "brainDark": {
      "color": "#ba568f",
      "roughness": 0.72
    },
    "pink": {
      "color": "#f796c3",
      "roughness": 0.62
    },
    "pinkLight": {
      "color": "#ffc3da",
      "roughness": 0.62
    },
    "magenta": {
      "color": "#ff6ed7",
      "emissive": 0.9,
      "roughness": 0.45
    },
    "light": {
      "color": "#c3ffde",
      "emissive": 0.65,
      "roughness": 0.45
    },
    "glass": {
      "color": "#9ef5cb",
      "opacity": 0.15,
      "roughness": 0.25
    }
  },
  "models": {
    "husk": [
      {
        "name": "torn-shirt",
        "group": "root",
        "kind": "box",
        "material": "cloth",
        "position": [
          0,
          1.01,
          0
        ],
        "size": [
          0.43,
          0.48,
          0.27
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "chest-skin",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0,
          1.23,
          0.03
        ],
        "size": [
          0.17,
          0.17,
          0.23
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "shirt-tear",
        "group": "root",
        "kind": "box",
        "material": "skinDark",
        "position": [
          0.11,
          0.86,
          0.144
        ],
        "size": [
          0.09,
          0.17,
          0.012
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "trouser--1",
        "group": "root",
        "kind": "box",
        "material": "trousers",
        "position": [
          -0.12,
          0.59,
          -0.025
        ],
        "size": [
          0.18,
          0.39,
          0.21
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "shin--1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          -0.12,
          0.27,
          0
        ],
        "size": [
          0.14,
          0.32,
          0.15
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ankle-cuff--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.12,
          0.18,
          0
        ],
        "size": [
          0.2,
          0.09,
          0.2
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "foot--1",
        "group": "root",
        "kind": "box",
        "material": "skinDark",
        "position": [
          -0.12,
          0.075,
          0.055
        ],
        "size": [
          0.2,
          0.14,
          0.31
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "upper-arm--1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          -0.3,
          1.03,
          0.03
        ],
        "size": [
          0.15,
          0.36,
          0.17
        ],
        "rotation": [
          0.15,
          0,
          -0.22
        ]
      },
      {
        "name": "forearm--1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          -0.37,
          0.79,
          0.1
        ],
        "size": [
          0.14,
          0.26,
          0.18
        ],
        "rotation": [
          0.37,
          0,
          -0.1
        ]
      },
      {
        "name": "wrist--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.38,
          0.7,
          0.12
        ],
        "size": [
          0.2,
          0.09,
          0.23
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "hand--1",
        "group": "root",
        "kind": "box",
        "material": "skinDark",
        "position": [
          -0.39,
          0.61,
          0.15
        ],
        "size": [
          0.17,
          0.17,
          0.19
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "finger--1--1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          -0.444,
          0.56,
          0.21
        ],
        "size": [
          0.041,
          0.14,
          0.055
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "finger--1-0",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          -0.39,
          0.56,
          0.21
        ],
        "size": [
          0.041,
          0.14,
          0.055
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "finger--1-1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          -0.336,
          0.56,
          0.21
        ],
        "size": [
          0.041,
          0.14,
          0.055
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "eye-socket--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -0.105,
          1.49,
          0.168
        ],
        "size": [
          0.13,
          0.13,
          0.035
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "eye--1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -0.105,
          1.49,
          0.191
        ],
        "size": [
          0.066,
          0.066,
          0.019
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "head-clamp--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -0.212,
          1.59,
          -0.02
        ],
        "size": [
          0.09,
          0.19,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ear-cuff--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.225,
          1.58,
          0.025
        ],
        "size": [
          0.06,
          0.1,
          0.13
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "trouser-1",
        "group": "root",
        "kind": "box",
        "material": "trousers",
        "position": [
          0.12,
          0.59,
          -0.025
        ],
        "size": [
          0.18,
          0.39,
          0.21
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "shin-1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0.12,
          0.27,
          0
        ],
        "size": [
          0.14,
          0.32,
          0.15
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ankle-cuff-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.12,
          0.18,
          0
        ],
        "size": [
          0.2,
          0.09,
          0.2
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "foot-1",
        "group": "root",
        "kind": "box",
        "material": "skinDark",
        "position": [
          0.12,
          0.075,
          0.055
        ],
        "size": [
          0.2,
          0.14,
          0.31
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "upper-arm-1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0.3,
          1.03,
          0.03
        ],
        "size": [
          0.15,
          0.36,
          0.17
        ],
        "rotation": [
          0.15,
          0,
          0.22
        ]
      },
      {
        "name": "forearm-1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0.37,
          0.79,
          0.1
        ],
        "size": [
          0.14,
          0.26,
          0.18
        ],
        "rotation": [
          0.37,
          0,
          0.1
        ]
      },
      {
        "name": "wrist-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.38,
          0.7,
          0.12
        ],
        "size": [
          0.2,
          0.09,
          0.23
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "hand-1",
        "group": "root",
        "kind": "box",
        "material": "skinDark",
        "position": [
          0.39,
          0.61,
          0.15
        ],
        "size": [
          0.17,
          0.17,
          0.19
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "finger-1--1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0.336,
          0.56,
          0.21
        ],
        "size": [
          0.041,
          0.14,
          0.055
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "finger-1-0",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0.39,
          0.56,
          0.21
        ],
        "size": [
          0.041,
          0.14,
          0.055
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "finger-1-1",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0.444,
          0.56,
          0.21
        ],
        "size": [
          0.041,
          0.14,
          0.055
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "eye-socket-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.105,
          1.49,
          0.168
        ],
        "size": [
          0.13,
          0.13,
          0.035
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "eye-1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0.105,
          1.49,
          0.191
        ],
        "size": [
          0.066,
          0.066,
          0.019
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "head-clamp-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.212,
          1.59,
          -0.02
        ],
        "size": [
          0.09,
          0.19,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ear-cuff-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.225,
          1.58,
          0.025
        ],
        "size": [
          0.06,
          0.1,
          0.13
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "head",
        "group": "root",
        "kind": "box",
        "material": "skin",
        "position": [
          0,
          1.5,
          0
        ],
        "size": [
          0.36,
          0.29,
          0.31
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "brow",
        "group": "root",
        "kind": "box",
        "material": "skinDark",
        "position": [
          0,
          1.575,
          0.17
        ],
        "size": [
          0.32,
          0.065,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "mouth",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          1.376,
          0.168
        ],
        "size": [
          0.185,
          0.104,
          0.025
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "tooth--0.061",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.061,
          1.406,
          0.19
        ],
        "size": [
          0.041,
          0.044,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "tooth-0.061",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.061,
          1.406,
          0.19
        ],
        "size": [
          0.041,
          0.044,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "exposed-brain-groove-core",
        "group": "root",
        "kind": "sphere",
        "material": "brainDark",
        "position": [
          0,
          1.687,
          -0.012
        ],
        "size": [
          0.35490000000000005,
          0.2125,
          0.2944
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "exposed-brain-lobe--1-0-0",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.0858,
          1.7570000000000001,
          0.084
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-0-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.0956452105222524,
          1.7570000000000001,
          -0.012
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-0-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.09643877989386049,
          1.7570000000000001,
          -0.108
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-1-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.0956452105222524,
          1.702,
          0.084
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-1-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.09643877989386049,
          1.702,
          -0.012
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-1-2",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.08745110409430044,
          1.702,
          -0.108
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-2-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.09643877989386049,
          1.647,
          0.084
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-2-1",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.08745110409430044,
          1.647,
          -0.012
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe--1-2-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.07694541080489725,
          1.647,
          -0.108
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-0-0",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.0858,
          1.7570000000000001,
          0.084
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-0-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.0956452105222524,
          1.7570000000000001,
          -0.012
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-0-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.09643877989386049,
          1.7570000000000001,
          -0.108
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-1-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.0956452105222524,
          1.702,
          0.084
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-1-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.09643877989386049,
          1.702,
          -0.012
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-1-2",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.08745110409430044,
          1.702,
          -0.108
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-2-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.09643877989386049,
          1.647,
          0.084
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-2-1",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.08745110409430044,
          1.647,
          -0.012
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "exposed-brain-lobe-1-2-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.07694541080489725,
          1.647,
          -0.108
        ],
        "size": [
          0.1911,
          0.105,
          0.1376
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "back-cable",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.09,
          1.35,
          -0.185
        ],
        "size": [
          0.067,
          0.62,
          0.068
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "back-connector",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.09,
          1.13,
          -0.213
        ],
        "size": [
          0.15,
          0.18,
          0.1
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ],
    "relay": [
      {
        "name": "ART-01-draft-backpack",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0,
          1.04,
          -0.25
        ],
        "size": [
          0.42,
          0.48,
          0.24
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "draft-mint-canister",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          0,
          1.16,
          -0.39
        ],
        "size": [
          0.28,
          0.54,
          0.28
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "draft-canister-collar-0.9",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          0.9,
          -0.39
        ],
        "size": [
          0.36,
          0.08,
          0.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "draft-canister-collar-1.42",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          1.42,
          -0.39
        ],
        "size": [
          0.36,
          0.08,
          0.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "draft-emitter-bracket",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0,
          1.24,
          0.21
        ],
        "size": [
          0.26,
          0.25,
          0.15
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "draft-forward-emitter",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          0,
          1.24,
          0.405
        ],
        "size": [
          0.22,
          0.29,
          0.2
        ],
        "rotation": [
          1.5707963267948966,
          0,
          0
        ]
      },
      {
        "name": "draft-emitter-rim",
        "group": "root",
        "kind": "ring",
        "material": "magenta",
        "position": [
          0,
          1.24,
          0.56
        ],
        "size": [
          0.23,
          0.23,
          0.042
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ],
    "boss": [
      {
        "name": "mint-vat-rear",
        "group": "core",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          0,
          1.83,
          -0.2
        ],
        "size": [
          1.22,
          1.23,
          0.64
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "vat-open-front",
        "group": "core",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          1.82,
          0.11
        ],
        "size": [
          1.08,
          1.09,
          0.085
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "brain-groove-core",
        "group": "brain",
        "kind": "sphere",
        "material": "brainDark",
        "position": [
          0,
          1.83,
          0.31
        ],
        "size": [
          0.9828000000000001,
          0.731,
          0.5244
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "brain-lobe--1-0-0",
        "group": "brain",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.2376,
          2.0708,
          0.481
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-0-1",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.2648636599077759,
          2.0708,
          0.31
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-0-2",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.2670612366291521,
          2.0708,
          0.139
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-1-0",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.2648636599077759,
          1.8816000000000002,
          0.481
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-1-1",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.2670612366291521,
          1.8816000000000002,
          0.31
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-1-2",
        "group": "brain",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.2421722882611397,
          1.8816000000000002,
          0.139
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-2-0",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.2670612366291521,
          1.6924000000000001,
          0.481
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-2-1",
        "group": "brain",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.2421722882611397,
          1.6924000000000001,
          0.31
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe--1-2-2",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.21307959915202315,
          1.6924000000000001,
          0.139
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-lobe-1-0-0",
        "group": "brain",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.2376,
          2.0708,
          0.481
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-0-1",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.2648636599077759,
          2.0708,
          0.31
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-0-2",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.2670612366291521,
          2.0708,
          0.139
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-1-0",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.2648636599077759,
          1.8816000000000002,
          0.481
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-1-1",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.2670612366291521,
          1.8816000000000002,
          0.31
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-1-2",
        "group": "brain",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.2421722882611397,
          1.8816000000000002,
          0.139
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-2-0",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.2670612366291521,
          1.6924000000000001,
          0.481
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-2-1",
        "group": "brain",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.2421722882611397,
          1.6924000000000001,
          0.31
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-lobe-1-2-2",
        "group": "brain",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.21307959915202315,
          1.6924000000000001,
          0.139
        ],
        "size": [
          0.5292,
          0.36119999999999997,
          0.24509999999999998
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "vat-collar-1.14",
        "group": "core",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          1.14,
          0
        ],
        "size": [
          1.45,
          0.25,
          1.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "vat-collar-trim-1.14",
        "group": "core",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          0,
          1.035,
          0
        ],
        "size": [
          1.48,
          0.055,
          1.39
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "vat-collar-2.46",
        "group": "core",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          2.46,
          0
        ],
        "size": [
          1.45,
          0.22,
          1.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "vat-collar-trim-2.46",
        "group": "core",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          0,
          2.3676,
          0
        ],
        "size": [
          1.48,
          0.055,
          1.39
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "vat-frame--1",
        "group": "core",
        "kind": "box",
        "material": "lavender",
        "position": [
          -0.61,
          1.82,
          0.36
        ],
        "size": [
          0.13,
          1.22,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "glass-highlight--1",
        "group": "core",
        "kind": "box",
        "material": "light",
        "position": [
          -0.48,
          1.87,
          0.632
        ],
        "size": [
          0.032,
          0.77,
          0.018
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "upper-cable--1",
        "group": "core",
        "kind": "box",
        "material": "dark",
        "position": [
          -0.74,
          2.2,
          -0.06
        ],
        "size": [
          0.14,
          0.69,
          0.17
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "cable-return--1",
        "group": "core",
        "kind": "box",
        "material": "dark",
        "position": [
          -0.6,
          2.56,
          -0.06
        ],
        "size": [
          0.42,
          0.15,
          0.17
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "base-light--1",
        "group": "core",
        "kind": "box",
        "material": "magenta",
        "position": [
          -0.46,
          1.1,
          0.652
        ],
        "size": [
          0.078,
          0.1,
          0.028
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "vat-frame-1",
        "group": "core",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.61,
          1.82,
          0.36
        ],
        "size": [
          0.13,
          1.22,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "glass-highlight-1",
        "group": "core",
        "kind": "box",
        "material": "light",
        "position": [
          0.48,
          1.87,
          0.632
        ],
        "size": [
          0.032,
          0.77,
          0.018
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "upper-cable-1",
        "group": "core",
        "kind": "box",
        "material": "dark",
        "position": [
          0.74,
          2.2,
          -0.06
        ],
        "size": [
          0.14,
          0.69,
          0.17
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "cable-return-1",
        "group": "core",
        "kind": "box",
        "material": "dark",
        "position": [
          0.6,
          2.56,
          -0.06
        ],
        "size": [
          0.42,
          0.15,
          0.17
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "base-light-1",
        "group": "core",
        "kind": "box",
        "material": "magenta",
        "position": [
          0.46,
          1.1,
          0.652
        ],
        "size": [
          0.078,
          0.1,
          0.028
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "single-front-glass",
        "group": "core",
        "kind": "box",
        "material": "glass",
        "position": [
          0,
          1.84,
          0.652
        ],
        "size": [
          1.05,
          1.06,
          0.018
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "port-collar",
        "group": "core",
        "kind": "ring",
        "material": "lavender",
        "position": [
          0,
          1.05,
          0.78
        ],
        "size": [
          0.53,
          0.53,
          0.15
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "port-barrel",
        "group": "core",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          1.05,
          0.9
        ],
        "size": [
          0.48,
          0.26,
          0.48
        ],
        "rotation": [
          1.5707963267948966,
          0,
          0
        ]
      },
      {
        "name": "port-dark-aperture",
        "group": "core",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          0,
          1.05,
          1.039
        ],
        "size": [
          0.39,
          0.025,
          0.39
        ],
        "rotation": [
          1.5707963267948966,
          0,
          0
        ]
      },
      {
        "name": "port-warning-rim",
        "group": "port",
        "kind": "ring",
        "material": "magenta",
        "position": [
          0,
          1.05,
          1.06
        ],
        "size": [
          0.42,
          0.42,
          0.035
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-shoulder",
        "group": "arm-left",
        "kind": "sphere",
        "material": "lavender",
        "position": [
          -0.82,
          1.25,
          0
        ],
        "size": [
          0.43,
          0.42,
          0.43
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-upper",
        "group": "arm-left",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.94,
          1.03,
          0.04
        ],
        "size": [
          0.27,
          0.39,
          0.28
        ],
        "rotation": [
          0,
          0,
          -0.16
        ]
      },
      {
        "name": "arm-left-elbow",
        "group": "arm-left",
        "kind": "sphere",
        "material": "dark",
        "position": [
          -1.01,
          0.79,
          0.065
        ],
        "size": [
          0.28,
          0.26,
          0.28
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-forearm",
        "group": "arm-left",
        "kind": "box",
        "material": "cream",
        "position": [
          -1.04,
          0.6,
          0.12
        ],
        "size": [
          0.31,
          0.32,
          0.32
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-plate",
        "group": "arm-left",
        "kind": "box",
        "material": "lavender",
        "position": [
          -1.04,
          0.62,
          0.295
        ],
        "size": [
          0.24,
          0.23,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-light",
        "group": "arm-left",
        "kind": "box",
        "material": "magenta",
        "position": [
          -1.04,
          0.63,
          0.339
        ],
        "size": [
          0.055,
          0.12,
          0.018
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-hand",
        "group": "arm-left",
        "kind": "box",
        "material": "dark",
        "position": [
          -1.04,
          0.37,
          0.19
        ],
        "size": [
          0.28,
          0.22,
          0.27
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-finger--1",
        "group": "arm-left",
        "kind": "box",
        "material": "lavender",
        "position": [
          -1.1260000000000001,
          0.3,
          0.29
        ],
        "size": [
          0.068,
          0.18,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-finger-0",
        "group": "arm-left",
        "kind": "box",
        "material": "lavender",
        "position": [
          -1.04,
          0.3,
          0.29
        ],
        "size": [
          0.068,
          0.18,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-left-finger-1",
        "group": "arm-left",
        "kind": "box",
        "material": "lavender",
        "position": [
          -0.9540000000000001,
          0.3,
          0.29
        ],
        "size": [
          0.068,
          0.18,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-hip",
        "group": "leg-left",
        "kind": "sphere",
        "material": "dark",
        "position": [
          -0.39,
          0.88,
          -0.02
        ],
        "size": [
          0.33,
          0.28,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-thigh",
        "group": "leg-left",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.39,
          0.71,
          -0.02
        ],
        "size": [
          0.24,
          0.29,
          0.25
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-knee",
        "group": "leg-left",
        "kind": "sphere",
        "material": "lavender",
        "position": [
          -0.39,
          0.55,
          0.095
        ],
        "size": [
          0.3,
          0.3,
          0.24
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-shin",
        "group": "leg-left",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.39,
          0.35,
          -0.01
        ],
        "size": [
          0.25,
          0.33,
          0.27
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-foot",
        "group": "leg-left",
        "kind": "box",
        "material": "lavender",
        "position": [
          -0.39,
          0.12,
          0.13
        ],
        "size": [
          0.41,
          0.22,
          0.64
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-toe",
        "group": "leg-left",
        "kind": "box",
        "material": "cream",
        "position": [
          -0.39,
          0.17,
          0.31
        ],
        "size": [
          0.39,
          0.13,
          0.28
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-left-foot-vent",
        "group": "leg-left",
        "kind": "box",
        "material": "dark",
        "position": [
          -0.39,
          0.12,
          0.46
        ],
        "size": [
          0.23,
          0.1,
          0.023
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-shoulder",
        "group": "arm-right",
        "kind": "sphere",
        "material": "lavender",
        "position": [
          0.82,
          1.25,
          0
        ],
        "size": [
          0.43,
          0.42,
          0.43
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-upper",
        "group": "arm-right",
        "kind": "box",
        "material": "cream",
        "position": [
          0.94,
          1.03,
          0.04
        ],
        "size": [
          0.27,
          0.39,
          0.28
        ],
        "rotation": [
          0,
          0,
          0.16
        ]
      },
      {
        "name": "arm-right-elbow",
        "group": "arm-right",
        "kind": "sphere",
        "material": "dark",
        "position": [
          1.01,
          0.79,
          0.065
        ],
        "size": [
          0.28,
          0.26,
          0.28
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-forearm",
        "group": "arm-right",
        "kind": "box",
        "material": "cream",
        "position": [
          1.04,
          0.6,
          0.12
        ],
        "size": [
          0.31,
          0.32,
          0.32
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-plate",
        "group": "arm-right",
        "kind": "box",
        "material": "lavender",
        "position": [
          1.04,
          0.62,
          0.295
        ],
        "size": [
          0.24,
          0.23,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-light",
        "group": "arm-right",
        "kind": "box",
        "material": "magenta",
        "position": [
          1.04,
          0.63,
          0.339
        ],
        "size": [
          0.055,
          0.12,
          0.018
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-hand",
        "group": "arm-right",
        "kind": "box",
        "material": "dark",
        "position": [
          1.04,
          0.37,
          0.19
        ],
        "size": [
          0.28,
          0.22,
          0.27
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-finger--1",
        "group": "arm-right",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.9540000000000001,
          0.3,
          0.29
        ],
        "size": [
          0.068,
          0.18,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-finger-0",
        "group": "arm-right",
        "kind": "box",
        "material": "lavender",
        "position": [
          1.04,
          0.3,
          0.29
        ],
        "size": [
          0.068,
          0.18,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "arm-right-finger-1",
        "group": "arm-right",
        "kind": "box",
        "material": "lavender",
        "position": [
          1.1260000000000001,
          0.3,
          0.29
        ],
        "size": [
          0.068,
          0.18,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-hip",
        "group": "leg-right",
        "kind": "sphere",
        "material": "dark",
        "position": [
          0.39,
          0.88,
          -0.02
        ],
        "size": [
          0.33,
          0.28,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-thigh",
        "group": "leg-right",
        "kind": "box",
        "material": "cream",
        "position": [
          0.39,
          0.71,
          -0.02
        ],
        "size": [
          0.24,
          0.29,
          0.25
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-knee",
        "group": "leg-right",
        "kind": "sphere",
        "material": "lavender",
        "position": [
          0.39,
          0.55,
          0.095
        ],
        "size": [
          0.3,
          0.3,
          0.24
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-shin",
        "group": "leg-right",
        "kind": "box",
        "material": "cream",
        "position": [
          0.39,
          0.35,
          -0.01
        ],
        "size": [
          0.25,
          0.33,
          0.27
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-foot",
        "group": "leg-right",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.39,
          0.12,
          0.13
        ],
        "size": [
          0.41,
          0.22,
          0.64
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-toe",
        "group": "leg-right",
        "kind": "box",
        "material": "cream",
        "position": [
          0.39,
          0.17,
          0.31
        ],
        "size": [
          0.39,
          0.13,
          0.28
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "leg-right-foot-vent",
        "group": "leg-right",
        "kind": "box",
        "material": "dark",
        "position": [
          0.39,
          0.12,
          0.46
        ],
        "size": [
          0.23,
          0.1,
          0.023
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ],
    "projectile": [
      {
        "name": "brain-shot-groove-core",
        "group": "root",
        "kind": "sphere",
        "material": "brainDark",
        "position": [
          0,
          0,
          0
        ],
        "size": [
          1.5015,
          1.258,
          1.4904000000000002
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "brain-shot-lobe--1-0-0",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.363,
          0.41440000000000005,
          0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-0-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.4046528137479909,
          0.41440000000000005,
          0.0
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-0-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.40801022262787123,
          0.41440000000000005,
          -0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-1-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.4046528137479909,
          0.08880000000000003,
          0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-1-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.40801022262787123,
          0.08880000000000003,
          0.0
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-1-2",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.36998544039896336,
          0.08880000000000003,
          -0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-2-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.40801022262787123,
          -0.23679999999999995,
          0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-2-1",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          -0.36998544039896336,
          -0.23679999999999995,
          0.0
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe--1-2-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          -0.3255382764822575,
          -0.23679999999999995,
          -0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          -0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-0-0",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.363,
          0.41440000000000005,
          0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-0-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.4046528137479909,
          0.41440000000000005,
          0.0
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-0-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.40801022262787123,
          0.41440000000000005,
          -0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-1-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.4046528137479909,
          0.08880000000000003,
          0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-1-1",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.40801022262787123,
          0.08880000000000003,
          0.0
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-1-2",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.36998544039896336,
          0.08880000000000003,
          -0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-2-0",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.40801022262787123,
          -0.23679999999999995,
          0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-2-1",
        "group": "root",
        "kind": "sphere",
        "material": "pinkLight",
        "position": [
          0.36998544039896336,
          -0.23679999999999995,
          0.0
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      },
      {
        "name": "brain-shot-lobe-1-2-2",
        "group": "root",
        "kind": "sphere",
        "material": "pink",
        "position": [
          0.3255382764822575,
          -0.23679999999999995,
          -0.486
        ],
        "size": [
          0.8085,
          0.6215999999999999,
          0.6966
        ],
        "rotation": [
          0,
          0,
          0.15
        ]
      }
    ],
    "tank": [
      {
        "name": "grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          0,
          0.12,
          0
        ],
        "size": [
          1.1,
          0.24,
          1.1
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          0,
          1.1,
          0
        ],
        "size": [
          0.91,
          1.65,
          0.91
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          0.29,
          0
        ],
        "size": [
          1.08,
          0.2,
          1.08
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          0,
          0.18999999999999997,
          0
        ],
        "size": [
          1.1,
          0.055,
          1.1
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          0,
          1.94,
          0
        ],
        "size": [
          1.08,
          0.2,
          1.08
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          0,
          1.8399999999999999,
          0
        ],
        "size": [
          1.1,
          0.055,
          1.1
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -0.42,
          1.14,
          0
        ],
        "size": [
          0.1,
          1.66,
          0.1
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.24,
          1.14,
          0.435
        ],
        "size": [
          0.037,
          1.12,
          0.024
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.42,
          1.14,
          0
        ],
        "size": [
          0.1,
          1.66,
          0.1
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          0.24,
          1.14,
          0.435
        ],
        "size": [
          0.037,
          1.12,
          0.024
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0,
          0.32,
          0.55
        ],
        "size": [
          0.34,
          0.22,
          0.08
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0,
          0.32,
          0.596
        ],
        "size": [
          0.14,
          0.048,
          0.02
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ],
    "console": [
      {
        "name": "body",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0,
          0.62,
          0
        ],
        "size": [
          1.04,
          1.1,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "screen-frame",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0,
          1.21,
          -0.02
        ],
        "size": [
          1.05,
          0.72,
          0.21
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "screen",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          1.21,
          0.096
        ],
        "size": [
          0.87,
          0.53,
          0.04
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "readout-0",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.15,
          1.39,
          0.121
        ],
        "size": [
          0.43,
          0.023,
          0.015
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "readout-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.12,
          1.27,
          0.121
        ],
        "size": [
          0.5,
          0.023,
          0.015
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "readout-2",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.09,
          1.15,
          0.121
        ],
        "size": [
          0.5700000000000001,
          0.023,
          0.015
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "readout-3",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.06,
          1.0299999999999998,
          0.121
        ],
        "size": [
          0.64,
          0.023,
          0.015
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "keyboard",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.88,
          0.26
        ],
        "size": [
          0.82,
          0.13,
          0.26
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "button--1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -0.26,
          0.956,
          0.26
        ],
        "size": [
          0.13,
          0.025,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "button-1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0.26,
          0.956,
          0.26
        ],
        "size": [
          0.13,
          0.025,
          0.12
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ],
    "crate": [
      {
        "name": "crate",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0,
          0.39,
          0
        ],
        "size": [
          0.78,
          0.78,
          0.78
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "brace--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -0.29,
          0.4,
          0
        ],
        "size": [
          0.14,
          0.81,
          0.81
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "brace-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.29,
          0.4,
          0
        ],
        "size": [
          0.14,
          0.81,
          0.81
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "handle",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.49,
          0.404
        ],
        "size": [
          0.3,
          0.105,
          0.031
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0,
          0.28,
          0.407
        ],
        "size": [
          0.2,
          0.048,
          0.025
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ],
    "lab": [
      {
        "name": "flat-ground",
        "group": "root",
        "kind": "box",
        "material": "floor",
        "position": [
          0,
          -0.1,
          0
        ],
        "size": [
          13.65,
          0.2,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          4.65,
          0
        ],
        "size": [
          16.7,
          0.2,
          17.2
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x-6",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x-4",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -4,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x-2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -2,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x0",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          2,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x4",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          4,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-x6",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6,
          0.004,
          0
        ],
        "size": [
          0.021,
          0.008,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z-6",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          -6
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z-4",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          -4
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z-2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          -2
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z0",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          0
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          2
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z4",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          4
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-joint-z6",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0,
          0.004,
          6
        ],
        "size": [
          13.65,
          0.008,
          0.021
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-edge-x-1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.59,
          0.012,
          0
        ],
        "size": [
          0.045,
          0.014,
          13.83
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-edge-z-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0,
          0.012,
          -6.91
        ],
        "size": [
          13.16,
          0.014,
          0.045
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-edge-x1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.59,
          0.012,
          0
        ],
        "size": [
          0.045,
          0.014,
          13.83
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "floor-edge-z1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0,
          0.012,
          6.91
        ],
        "size": [
          13.16,
          0.014,
          0.045
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-outer-bay-back",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          0.0,
          2.3,
          -8.51
        ],
        "size": [
          16.35,
          4.6,
          0.16
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-base-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.0,
          0.29,
          -7.23
        ],
        "size": [
          13.65,
          0.58,
          0.16
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-base-trim",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.0,
          0.6,
          -7.1850000000000005
        ],
        "size": [
          13.65,
          0.07,
          0.21
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-upper-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.0,
          3.9,
          -7.23
        ],
        "size": [
          13.65,
          1.4,
          0.16
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-upper-dark-band",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.0,
          3.53,
          -7.1290000000000004
        ],
        "size": [
          13.65,
          0.38,
          0.06
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-upper-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0.0,
          3.53,
          -7.090000000000001
        ],
        "size": [
          12.4215,
          0.053,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-raised-bay-floor",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.0,
          0.16,
          -7.880000000000001
        ],
        "size": [
          13.65,
          0.32,
          1.44
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-sealed-display-window",
        "group": "root",
        "kind": "box",
        "material": "glass",
        "position": [
          0.0,
          1.9,
          -7.165
        ],
        "size": [
          13.65,
          2.61,
          0.022
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-window-reflection-top",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          0.0,
          3.1,
          -7.141
        ],
        "size": [
          13.65,
          0.026,
          0.012
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column--3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.825,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim--3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.825,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light--3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.825,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent--3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.3950000000000005,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column--2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -4.55,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim--2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -4.55,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light--2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -4.55,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent--2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -4.12,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -2.275,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -2.275,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light--1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -2.275,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -1.845,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-0",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.0,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim-0",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.0,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light-0",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          0.0,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent-0",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.43,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          2.275,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          2.275,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light-1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          2.275,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          2.705,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          4.55,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim-2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          4.55,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light-2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          4.55,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent-2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          4.9799999999999995,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.825,
          1.91,
          -7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-trim-3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.825,
          1.01,
          -7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-column-light-3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.825,
          1.03,
          -6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-vent-3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.255,
          4.15,
          -7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          -4.2315000000000005,
          0.4088,
          -7.87
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          -4.2315000000000005,
          1.1340000000000001,
          -7.87
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -4.2315000000000005,
          0.5346,
          -7.87
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -4.2315000000000005,
          0.4606,
          -7.87
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -4.2315000000000005,
          1.7556,
          -7.87
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -4.2315000000000005,
          1.6816,
          -7.87
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -4.542300000000001,
          1.1636,
          -7.87
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -4.4091000000000005,
          1.1636,
          -7.548100000000001
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -3.9207000000000005,
          1.1636,
          -7.87
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -4.0539000000000005,
          1.1636,
          -7.548100000000001
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -4.2315000000000005,
          0.5568,
          -7.463
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-0-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -4.2315000000000005,
          0.5568,
          -7.42896
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          4.2315000000000005,
          0.4088,
          -7.87
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          4.2315000000000005,
          1.1340000000000001,
          -7.87
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          4.2315000000000005,
          0.5346,
          -7.87
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          4.2315000000000005,
          0.4606,
          -7.87
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          4.2315000000000005,
          1.7556,
          -7.87
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          4.2315000000000005,
          1.6816,
          -7.87
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          3.9207000000000005,
          1.1636,
          -7.87
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          4.0539000000000005,
          1.1636,
          -7.548100000000001
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          4.542300000000001,
          1.1636,
          -7.87
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          4.4091000000000005,
          1.1636,
          -7.548100000000001
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          4.2315000000000005,
          0.5568,
          -7.463
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-display-tank-1-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          4.2315000000000005,
          0.5568,
          -7.42896
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-body",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          0.0,
          0.8346,
          -7.91
        ],
        "size": [
          0.8632,
          0.913,
          0.4233
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-screen-frame",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          0.0,
          1.3243,
          -7.9266000000000005
        ],
        "size": [
          0.8714999999999999,
          0.5975999999999999,
          0.17429999999999998
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-screen",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.0,
          1.3243,
          -7.83032
        ],
        "size": [
          0.7221,
          0.4399,
          0.0332
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-readout-0",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.12449999999999999,
          1.4737,
          -7.809570000000001
        ],
        "size": [
          0.3569,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-readout-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.0996,
          1.3741,
          -7.809570000000001
        ],
        "size": [
          0.415,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-readout-2",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.07469999999999999,
          1.2745,
          -7.809570000000001
        ],
        "size": [
          0.4731,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-readout-3",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -0.0498,
          1.1748999999999998,
          -7.809570000000001
        ],
        "size": [
          0.5312,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-keyboard",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          0.0,
          1.0504,
          -7.6942
        ],
        "size": [
          0.6805999999999999,
          0.1079,
          0.2158
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-button--1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -0.2158,
          1.11348,
          -7.6942
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-control-console-button-1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0.2158,
          1.11348,
          -7.6942
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-supply-crate-crate",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -2.184,
          0.6242000000000001,
          -7.8500000000000005
        ],
        "size": [
          0.6084,
          0.6084,
          0.6084
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-supply-crate-brace--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -2.4102,
          0.6320000000000001,
          -7.8500000000000005
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-supply-crate-brace-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -1.9578000000000002,
          0.6320000000000001,
          -7.8500000000000005
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-supply-crate-handle",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -2.184,
          0.7021999999999999,
          -7.53488
        ],
        "size": [
          0.23399999999999999,
          0.0819,
          0.02418
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-0-supply-crate-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -2.184,
          0.5384,
          -7.53254
        ],
        "size": [
          0.15600000000000003,
          0.03744,
          0.019500000000000003
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "wall-1-outer-bay-back",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          -1.6655196468404004e-16,
          2.3,
          8.51
        ],
        "size": [
          16.35,
          4.6,
          0.16
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-base-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -9.797174393178826e-18,
          0.29,
          7.23
        ],
        "size": [
          13.65,
          0.58,
          0.16
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-base-trim",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -4.286263797015737e-18,
          0.6,
          7.1850000000000005
        ],
        "size": [
          13.65,
          0.07,
          0.21
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-upper-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -9.797174393178826e-18,
          3.9,
          7.23
        ],
        "size": [
          13.65,
          1.4,
          0.16
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-upper-dark-band",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          2.571758278209442e-18,
          3.53,
          7.1290000000000004
        ],
        "size": [
          13.65,
          0.38,
          0.06
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-upper-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          7.347880794884118e-18,
          3.53,
          7.090000000000001
        ],
        "size": [
          12.4215,
          0.053,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-raised-bay-floor",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -8.939921633775678e-17,
          0.16,
          7.880000000000001
        ],
        "size": [
          13.65,
          0.32,
          1.44
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-sealed-display-window",
        "group": "root",
        "kind": "box",
        "material": "glass",
        "position": [
          -1.8369701987210296e-18,
          1.9,
          7.165
        ],
        "size": [
          13.65,
          2.61,
          0.022
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-window-reflection-top",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          1.1021821192326178e-18,
          3.1,
          7.141
        ],
        "size": [
          13.65,
          0.026,
          0.012
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column--3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.825,
          1.91,
          7.125000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim--3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.825,
          1.01,
          7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light--3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.825,
          1.03,
          6.976000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent--3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.3950000000000005,
          4.15,
          7.128000000000001
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column--2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          4.55,
          1.91,
          7.125000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim--2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          4.55,
          1.01,
          7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light--2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          4.55,
          1.03,
          6.976000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent--2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          4.12,
          4.15,
          7.128000000000001
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          2.275,
          1.91,
          7.125000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          2.275,
          1.01,
          7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light--1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          2.275,
          1.03,
          6.976000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          1.845,
          4.15,
          7.128000000000001
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-0",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          3.061616997868383e-18,
          1.91,
          7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim-0",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          1.5797943709000855e-17,
          1.01,
          7.021000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light-0",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          2.1308854305163945e-17,
          1.03,
          6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent-0",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -0.43,
          4.15,
          7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -2.275,
          1.91,
          7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -2.275,
          1.01,
          7.021
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light-1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -2.275,
          1.03,
          6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -2.705,
          4.15,
          7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -4.55,
          1.91,
          7.125
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim-2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -4.55,
          1.01,
          7.021
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light-2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -4.55,
          1.03,
          6.976
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent-2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -4.9799999999999995,
          4.15,
          7.128
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.825,
          1.91,
          7.124999999999999
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-trim-3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.825,
          1.01,
          7.021
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-column-light-3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.825,
          1.03,
          6.975999999999999
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-vent-3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.255,
          4.15,
          7.127999999999999
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          4.2315000000000005,
          0.4088,
          7.870000000000001
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          4.2315000000000005,
          1.1340000000000001,
          7.870000000000001
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          4.2315000000000005,
          0.5346,
          7.870000000000001
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          4.2315000000000005,
          0.4606,
          7.870000000000001
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          4.2315000000000005,
          1.7556,
          7.870000000000001
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          4.2315000000000005,
          1.6816,
          7.870000000000001
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          4.542300000000001,
          1.1636,
          7.870000000000001
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          4.4091000000000005,
          1.1636,
          7.548100000000001
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          3.9207000000000005,
          1.1636,
          7.870000000000001
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          4.0539000000000005,
          1.1636,
          7.548100000000001
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          4.2315000000000005,
          0.5568,
          7.463000000000001
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-0-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          4.2315000000000005,
          0.5568,
          7.428960000000001
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          -4.2315000000000005,
          0.4088,
          7.87
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          -4.2315000000000005,
          1.1340000000000001,
          7.87
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -4.2315000000000005,
          0.5346,
          7.87
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -4.2315000000000005,
          0.4606,
          7.87
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -4.2315000000000005,
          1.7556,
          7.87
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -4.2315000000000005,
          1.6816,
          7.87
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -3.9207000000000005,
          1.1636,
          7.87
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -4.0539000000000005,
          1.1636,
          7.5481
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -4.542300000000001,
          1.1636,
          7.87
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -4.4091000000000005,
          1.1636,
          7.5481
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -4.2315000000000005,
          0.5568,
          7.463
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-display-tank-1-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -4.2315000000000005,
          0.5568,
          7.42896
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-body",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -9.307315673519885e-17,
          0.8346,
          7.91
        ],
        "size": [
          0.8632,
          0.913,
          0.4233
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-screen-frame",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -9.510607042178344e-17,
          1.3243,
          7.9266000000000005
        ],
        "size": [
          0.8714999999999999,
          0.5975999999999999,
          0.17429999999999998
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-screen",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -8.331517103959274e-17,
          1.3243,
          7.83032
        ],
        "size": [
          0.7221,
          0.4399,
          0.0332
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-readout-0",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          0.1244999999999999,
          1.4737,
          7.809570000000001
        ],
        "size": [
          0.3569,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-readout-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          0.09959999999999991,
          1.3741,
          7.809570000000001
        ],
        "size": [
          0.415,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-readout-2",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          0.0746999999999999,
          1.2745,
          7.809570000000001
        ],
        "size": [
          0.4731,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-readout-3",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          0.049799999999999914,
          1.1748999999999998,
          7.809570000000001
        ],
        "size": [
          0.5312,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-keyboard",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.664527880959897e-17,
          1.0504,
          7.6942
        ],
        "size": [
          0.6805999999999999,
          0.1079,
          0.2158
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-button--1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          0.21579999999999994,
          1.11348,
          7.6942
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-control-console-button-1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -0.21580000000000005,
          1.11348,
          7.6942
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-supply-crate-crate",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          2.184,
          0.6242000000000001,
          7.8500000000000005
        ],
        "size": [
          0.6084,
          0.6084,
          0.6084
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-supply-crate-brace--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          2.4102,
          0.6320000000000001,
          7.8500000000000005
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-supply-crate-brace-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          1.9578000000000002,
          0.6320000000000001,
          7.8500000000000005
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-supply-crate-handle",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          2.184,
          0.7021999999999999,
          7.53488
        ],
        "size": [
          0.23399999999999999,
          0.0819,
          0.02418
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-1-supply-crate-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          2.184,
          0.5384,
          7.532540000000001
        ],
        "size": [
          0.15600000000000003,
          0.03744,
          0.019500000000000003
        ],
        "rotation": [
          0,
          3.141592653589793,
          0
        ]
      },
      {
        "name": "wall-2-outer-bay-back",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          -8.185,
          2.3,
          -8.327598234202002e-17
        ],
        "size": [
          17.0,
          4.6,
          0.16
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-base-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.905,
          0.29,
          -4.898587196589413e-18
        ],
        "size": [
          14.3,
          0.58,
          0.16
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-base-trim",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.86,
          0.6,
          -2.1431318985078684e-18
        ],
        "size": [
          14.3,
          0.07,
          0.21
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-upper-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.905,
          3.9,
          -4.898587196589413e-18
        ],
        "size": [
          14.3,
          1.4,
          0.16
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-upper-dark-band",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.804,
          3.53,
          1.285879139104721e-18
        ],
        "size": [
          14.3,
          0.38,
          0.06
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-upper-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -6.765000000000001,
          3.53,
          3.673940397442059e-18
        ],
        "size": [
          13.013000000000002,
          0.053,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-raised-bay-floor",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -7.555,
          0.16,
          -4.469960816887839e-17
        ],
        "size": [
          14.3,
          0.32,
          1.44
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-sealed-display-window",
        "group": "root",
        "kind": "box",
        "material": "glass",
        "position": [
          -6.84,
          1.9,
          -9.184850993605148e-19
        ],
        "size": [
          14.3,
          2.61,
          0.022
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-window-reflection-top",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -6.816,
          3.1,
          5.510910596163089e-19
        ],
        "size": [
          14.3,
          0.026,
          0.012
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column--3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.800000000000001,
          1.91,
          7.150000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim--3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696000000000001,
          1.01,
          7.150000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light--3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651000000000001,
          1.03,
          7.150000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent--3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803000000000001,
          4.15,
          6.7200000000000015
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column--2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.800000000000001,
          1.91,
          4.766666666666667
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim--2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696000000000001,
          1.01,
          4.766666666666667
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light--2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651000000000001,
          1.03,
          4.766666666666667
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent--2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803000000000001,
          4.15,
          4.336666666666667
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.800000000000001,
          1.91,
          2.3833333333333333
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696000000000001,
          1.01,
          2.3833333333333333
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light--1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651000000000001,
          1.03,
          2.3833333333333333
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803,
          4.15,
          1.9533333333333334
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-0",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.8,
          1.91,
          1.5308084989341916e-18
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim-0",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696,
          1.01,
          7.898971854500428e-18
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light-0",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651,
          1.03,
          1.0654427152581972e-17
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent-0",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803,
          4.15,
          -0.43
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.8,
          1.91,
          -2.3833333333333333
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696,
          1.01,
          -2.3833333333333333
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light-1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651,
          1.03,
          -2.3833333333333333
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803,
          4.15,
          -2.8133333333333335
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.8,
          1.91,
          -4.766666666666667
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim-2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696,
          1.01,
          -4.766666666666667
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light-2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651,
          1.03,
          -4.766666666666667
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent-2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803,
          4.15,
          -5.196666666666666
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -6.8,
          1.91,
          -7.150000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-trim-3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -6.696,
          1.01,
          -7.150000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-column-light-3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          -6.651,
          1.03,
          -7.150000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-vent-3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -6.803,
          4.15,
          -7.580000000000001
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          -7.545,
          0.4088,
          4.433
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          -7.545,
          1.1340000000000001,
          4.433
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -7.545,
          0.5346,
          4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -7.545,
          0.4606,
          4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -7.545,
          1.7556,
          4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -7.545,
          1.6816,
          4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.545000000000001,
          1.1636,
          4.7438
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.2231000000000005,
          1.1636,
          4.6106
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.545,
          1.1636,
          4.122199999999999
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.2231000000000005,
          1.1636,
          4.2554
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -7.138000000000001,
          0.5568,
          4.433
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-0-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -7.103960000000001,
          0.5568,
          4.433
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          -7.545,
          0.4088,
          -4.433
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          -7.545,
          1.1340000000000001,
          -4.433
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -7.545,
          0.5346,
          -4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -7.545,
          0.4606,
          -4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          -7.545,
          1.7556,
          -4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          -7.545,
          1.6816,
          -4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.545,
          1.1636,
          -4.122199999999999
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.2231,
          1.1636,
          -4.2554
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.545,
          1.1636,
          -4.7438
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.2231,
          1.1636,
          -4.6106
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -7.138,
          0.5568,
          -4.433
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-display-tank-1-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -7.10396,
          0.5568,
          -4.433
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-body",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -7.585,
          0.8346,
          -4.6536578367599424e-17
        ],
        "size": [
          0.8632,
          0.913,
          0.4233
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-screen-frame",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -7.6016,
          1.3243,
          -4.755303521089172e-17
        ],
        "size": [
          0.8714999999999999,
          0.5975999999999999,
          0.17429999999999998
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-screen",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.50532,
          1.3243,
          -4.165758551979637e-17
        ],
        "size": [
          0.7221,
          0.4399,
          0.0332
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-readout-0",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.48457,
          1.4737,
          0.12449999999999994
        ],
        "size": [
          0.3569,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-readout-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.48457,
          1.3741,
          0.09959999999999995
        ],
        "size": [
          0.415,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-readout-2",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.48457,
          1.2745,
          0.07469999999999995
        ],
        "size": [
          0.4731,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-readout-3",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -7.48457,
          1.1748999999999998,
          0.049799999999999955
        ],
        "size": [
          0.5312,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-keyboard",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.3692,
          1.0504,
          -3.3322639404799483e-17
        ],
        "size": [
          0.6805999999999999,
          0.1079,
          0.2158
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-button--1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -7.3692,
          1.11348,
          0.21579999999999996
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-control-console-button-1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -7.3692,
          1.11348,
          -0.21580000000000002
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-supply-crate-crate",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -7.525,
          0.6242000000000001,
          2.2880000000000003
        ],
        "size": [
          0.6084,
          0.6084,
          0.6084
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-supply-crate-brace--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -7.525,
          0.6320000000000001,
          2.5142
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-supply-crate-brace-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          -7.525,
          0.6320000000000001,
          2.0618000000000003
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-supply-crate-handle",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -7.20988,
          0.7021999999999999,
          2.2880000000000003
        ],
        "size": [
          0.23399999999999999,
          0.0819,
          0.02418
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-2-supply-crate-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          -7.207540000000001,
          0.5384,
          2.2880000000000003
        ],
        "size": [
          0.15600000000000003,
          0.03744,
          0.019500000000000003
        ],
        "rotation": [
          0,
          1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-outer-bay-back",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          8.185,
          2.3,
          -8.327598234202002e-17
        ],
        "size": [
          17.0,
          4.6,
          0.16
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-base-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.905,
          0.29,
          -4.898587196589413e-18
        ],
        "size": [
          14.3,
          0.58,
          0.16
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-base-trim",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.86,
          0.6,
          -2.1431318985078684e-18
        ],
        "size": [
          14.3,
          0.07,
          0.21
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-upper-wall",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.905,
          3.9,
          -4.898587196589413e-18
        ],
        "size": [
          14.3,
          1.4,
          0.16
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-upper-dark-band",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.804,
          3.53,
          1.285879139104721e-18
        ],
        "size": [
          14.3,
          0.38,
          0.06
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-upper-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          6.765000000000001,
          3.53,
          3.673940397442059e-18
        ],
        "size": [
          13.013000000000002,
          0.053,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-raised-bay-floor",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          7.555,
          0.16,
          -4.469960816887839e-17
        ],
        "size": [
          14.3,
          0.32,
          1.44
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-sealed-display-window",
        "group": "root",
        "kind": "box",
        "material": "glass",
        "position": [
          6.84,
          1.9,
          -9.184850993605148e-19
        ],
        "size": [
          14.3,
          2.61,
          0.022
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-window-reflection-top",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          6.816,
          3.1,
          5.510910596163089e-19
        ],
        "size": [
          14.3,
          0.026,
          0.012
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column--3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.8,
          1.91,
          -7.150000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim--3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696,
          1.01,
          -7.150000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light--3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651,
          1.03,
          -7.150000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent--3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803,
          4.15,
          -6.7200000000000015
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column--2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.8,
          1.91,
          -4.766666666666667
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim--2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696,
          1.01,
          -4.766666666666667
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light--2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651,
          1.03,
          -4.766666666666667
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent--2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803,
          4.15,
          -4.336666666666667
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.8,
          1.91,
          -2.3833333333333333
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696,
          1.01,
          -2.3833333333333333
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light--1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651,
          1.03,
          -2.3833333333333333
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803,
          4.15,
          -1.9533333333333334
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-0",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.8,
          1.91,
          1.5308084989341916e-18
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim-0",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696,
          1.01,
          7.898971854500428e-18
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light-0",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651,
          1.03,
          1.0654427152581972e-17
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent-0",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803,
          4.15,
          0.43
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.800000000000001,
          1.91,
          2.3833333333333333
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696000000000001,
          1.01,
          2.3833333333333333
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light-1",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651000000000001,
          1.03,
          2.3833333333333333
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803,
          4.15,
          2.8133333333333335
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-2",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.800000000000001,
          1.91,
          4.766666666666667
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim-2",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696000000000001,
          1.01,
          4.766666666666667
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light-2",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651000000000001,
          1.03,
          4.766666666666667
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent-2",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803000000000001,
          4.15,
          5.196666666666666
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-3",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          6.800000000000001,
          1.91,
          7.150000000000001
        ],
        "size": [
          0.18,
          2.63,
          0.18
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-trim-3",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          6.696000000000001,
          1.01,
          7.150000000000001
        ],
        "size": [
          0.21,
          0.52,
          0.07
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-column-light-3",
        "group": "root",
        "kind": "box",
        "material": "mint",
        "position": [
          6.651000000000001,
          1.03,
          7.150000000000001
        ],
        "size": [
          0.052,
          0.26,
          0.026
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-vent-3",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          6.803000000000001,
          4.15,
          7.580000000000001
        ],
        "size": [
          0.48,
          0.2,
          0.034
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          7.545,
          0.4088,
          -4.433
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          7.545,
          1.1340000000000001,
          -4.433
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          7.545,
          0.5346,
          -4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          7.545,
          0.4606,
          -4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          7.545,
          1.7556,
          -4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          7.545,
          1.6816,
          -4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.545,
          1.1636,
          -4.7438
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.2231,
          1.1636,
          -4.6106
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.545,
          1.1636,
          -4.122199999999999
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.2231,
          1.1636,
          -4.2554
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          7.138,
          0.5568,
          -4.433
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-0-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          7.10396,
          0.5568,
          -4.433
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-grounded-pad",
        "group": "root",
        "kind": "cylinder",
        "material": "dark",
        "position": [
          7.545,
          0.4088,
          4.433
        ],
        "size": [
          0.8140000000000001,
          0.17759999999999998,
          0.8140000000000001
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-filled-vat",
        "group": "root",
        "kind": "cylinder",
        "material": "mint",
        "position": [
          7.545,
          1.1340000000000001,
          4.433
        ],
        "size": [
          0.6734,
          1.2209999999999999,
          0.6734
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-collar-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          7.545,
          0.5346,
          4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-trim-0.29",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          7.545,
          0.4606,
          4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-collar-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "cream",
        "position": [
          7.545,
          1.7556,
          4.433
        ],
        "size": [
          0.7992,
          0.148,
          0.7992
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-trim-1.94",
        "group": "root",
        "kind": "cylinder",
        "material": "lavender",
        "position": [
          7.545,
          1.6816,
          4.433
        ],
        "size": [
          0.8140000000000001,
          0.0407,
          0.8140000000000001
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-frame--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.545,
          1.1636,
          4.122199999999999
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-highlight--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.2231000000000005,
          1.1636,
          4.2554
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-frame-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.545000000000001,
          1.1636,
          4.7438
        ],
        "size": [
          0.074,
          1.2284,
          0.074
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-highlight-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.2231000000000005,
          1.1636,
          4.6106
        ],
        "size": [
          0.027379999999999998,
          0.8288000000000001,
          0.01776
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-front-badge",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          7.138000000000001,
          0.5568,
          4.433
        ],
        "size": [
          0.2516,
          0.1628,
          0.0592
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-display-tank-1-badge-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          7.103960000000001,
          0.5568,
          4.433
        ],
        "size": [
          0.10360000000000001,
          0.03552,
          0.0148
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-body",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          7.585,
          0.8346,
          -4.6536578367599424e-17
        ],
        "size": [
          0.8632,
          0.913,
          0.4233
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-screen-frame",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          7.6016,
          1.3243,
          -4.755303521089172e-17
        ],
        "size": [
          0.8714999999999999,
          0.5975999999999999,
          0.17429999999999998
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-screen",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.50532,
          1.3243,
          -4.165758551979637e-17
        ],
        "size": [
          0.7221,
          0.4399,
          0.0332
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-readout-0",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.48457,
          1.4737,
          -0.12450000000000003
        ],
        "size": [
          0.3569,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-readout-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.48457,
          1.3741,
          -0.09960000000000004
        ],
        "size": [
          0.415,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-readout-2",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.48457,
          1.2745,
          -0.07470000000000003
        ],
        "size": [
          0.4731,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-readout-3",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          7.48457,
          1.1748999999999998,
          -0.04980000000000004
        ],
        "size": [
          0.5312,
          0.01909,
          0.01245
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-keyboard",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.3692,
          1.0504,
          -3.3322639404799483e-17
        ],
        "size": [
          0.6805999999999999,
          0.1079,
          0.2158
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-button--1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          7.3692,
          1.11348,
          -0.21580000000000002
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-control-console-button-1",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          7.3692,
          1.11348,
          0.21579999999999996
        ],
        "size": [
          0.1079,
          0.02075,
          0.0996
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-supply-crate-crate",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          7.525,
          0.6242000000000001,
          -2.2880000000000003
        ],
        "size": [
          0.6084,
          0.6084,
          0.6084
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-supply-crate-brace--1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          7.525,
          0.6320000000000001,
          -2.5142
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-supply-crate-brace-1",
        "group": "root",
        "kind": "box",
        "material": "lavender",
        "position": [
          7.525,
          0.6320000000000001,
          -2.0618000000000003
        ],
        "size": [
          0.10920000000000002,
          0.6318,
          0.6318
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-supply-crate-handle",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          7.20988,
          0.7021999999999999,
          -2.2880000000000003
        ],
        "size": [
          0.23399999999999999,
          0.0819,
          0.02418
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "wall-3-supply-crate-light",
        "group": "root",
        "kind": "box",
        "material": "magenta",
        "position": [
          7.20754,
          0.5384,
          -2.2880000000000003
        ],
        "size": [
          0.15600000000000003,
          0.03744,
          0.019500000000000003
        ],
        "rotation": [
          0,
          -1.5707963267948966,
          0
        ]
      },
      {
        "name": "overhead-beam--4.8",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          0,
          4.32,
          -4.8
        ],
        "size": [
          13.65,
          0.27,
          0.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-case--4.8--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -3.45,
          4.1,
          -4.8
        ],
        "size": [
          2.8,
          0.19,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light--4.8--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -3.45,
          3.992,
          -4.8
        ],
        "size": [
          2.56,
          0.029,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-case--4.8-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          3.45,
          4.1,
          -4.8
        ],
        "size": [
          2.8,
          0.19,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light--4.8-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          3.45,
          3.992,
          -4.8
        ],
        "size": [
          2.56,
          0.029,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "overhead-beam-0",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          0,
          4.32,
          0
        ],
        "size": [
          13.65,
          0.27,
          0.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-case-0--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -3.45,
          4.1,
          0
        ],
        "size": [
          2.8,
          0.19,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-0--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -3.45,
          3.992,
          0
        ],
        "size": [
          2.56,
          0.029,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-case-0-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          3.45,
          4.1,
          0
        ],
        "size": [
          2.8,
          0.19,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-0-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          3.45,
          3.992,
          0
        ],
        "size": [
          2.56,
          0.029,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "overhead-beam-4.8",
        "group": "root",
        "kind": "box",
        "material": "panel",
        "position": [
          0,
          4.32,
          4.8
        ],
        "size": [
          13.65,
          0.27,
          0.36
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-case-4.8--1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          -3.45,
          4.1,
          4.8
        ],
        "size": [
          2.8,
          0.19,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-4.8--1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          -3.45,
          3.992,
          4.8
        ],
        "size": [
          2.56,
          0.029,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-case-4.8-1",
        "group": "root",
        "kind": "box",
        "material": "cream",
        "position": [
          3.45,
          4.1,
          4.8
        ],
        "size": [
          2.8,
          0.19,
          0.51
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-light-4.8-1",
        "group": "root",
        "kind": "box",
        "material": "light",
        "position": [
          3.45,
          3.992,
          4.8
        ],
        "size": [
          2.56,
          0.029,
          0.33
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-conduit--1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          -5.3,
          4.36,
          0
        ],
        "size": [
          0.15,
          0.17,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      },
      {
        "name": "ceiling-conduit-1",
        "group": "root",
        "kind": "box",
        "material": "dark",
        "position": [
          5.3,
          4.36,
          0
        ],
        "size": [
          0.15,
          0.17,
          14.3
        ],
        "rotation": [
          0,
          0,
          0
        ]
      }
    ]
  }
}
`,$i=JSON.parse(uc),mc=new V(16777215),Yo=new V(16766445),Xo=new V(10341600);class pc{group=new W;geometry=new Set;materials=new Map;primitives=new Map;templates=new Map;dummy=new we;shadows;husks=[];relay=[];shots=[];relayWarnings;boss=new W;bossBrain=new W;bossCore=new W;bossPort=new W;bossWarning;bossCrack;bossMaterials=[];room=new W;signTexture;signMaterial;ownedBasic=new Set;disposed=!1;shotBound=1;counts={zombies:0,relays:0,brains:0,boss:0};attempt=-1;constructor(){if($i.schema!==1)throw new Error("Unsupported Level 4 runtime model kit");this.group.name="level-4-cognitive-offloading-laboratory",this.group.visible=!1,this.room.name="finite-lab-13.65x14.3",this.group.add(this.room,this.boss);for(const[p,m]of Object.entries($i.materials)){const b=new U({color:m.color,roughness:m.roughness,metalness:.06,flatShading:!0});m.emissive&&(b.emissive.set(m.color),b.emissiveIntensity=m.emissive),m.opacity!==void 0&&(b.transparent=!0,b.opacity=m.opacity,b.depthWrite=!1,b.side=re),this.materials.set(p,b)}this.addModel("lab",this.room);const e=new zn(14151135,4931678,1.45),n=new Pe(16773081,1.7);n.position.set(-3.4,4.6,2.1),this.group.add(e,n),this.makeCrowd("husk",this.husks,G.hardCap),this.makeCrowd("relay",this.relay,G.hardCap),this.makeCrowd("projectile",this.shots,G.projectileCap),this.shotBound=0;for(const p of this.model("projectile").values()){const m=p.getAttribute("position");for(let b=0;b<m.count;b++)this.shotBound=Math.max(this.shotBound,Math.hypot(m.getX(b),m.getY(b),m.getZ(b)))}this.boss.name="brain-in-a-vat-two-arms-two-legs",this.boss.add(this.bossCore,this.bossBrain,this.bossPort);const t=new Map([["brain",this.bossBrain],["port",this.bossPort],["structure",this.bossCore]]),i=new Map;for(const[p,m]of t)for(const[b,g]of this.model("boss",p)){let f=i.get(b);f||(f=this.materials.get(b).clone(),f.userData={baseColor:f.color.clone(),baseEmission:f.emissiveIntensity},this.bossMaterials.push(f),i.set(b,f));const w=new P(g,f);w.name=`vat-${p}-${b}`,m.add(w)}const s=new q({color:16753113,transparent:!0,opacity:.8,depthWrite:!1,side:re});this.ownedBasic.add(s);const o=this.track(new Ke(.24,.285,12));this.bossWarning=new P(o,s),this.bossWarning.name="brain-vat-port-anticipation",this.group.add(this.bossWarning),this.relayWarnings=this.pool(o,s,G.hardCap),this.group.add(this.relayWarnings);const a=new q({color:856096,transparent:!0,opacity:.31,depthWrite:!1});this.ownedBasic.add(a),this.shadows=this.pool(this.track(new St(1,12)),a,G.hardCap+1),this.group.add(this.shadows);const l=new Si({color:16056297,transparent:!0,opacity:.82,depthWrite:!1});this.ownedBasic.add(l);const c=this.track(new Ge().setFromPoints([new _(-.37,2.24,.669),new _(-.08,1.97,.674),new _(-.08,1.97,.674),new _(.12,2.03,.674),new _(-.08,1.97,.674),new _(-.18,1.62,.674),new _(-.18,1.62,.674),new _(.11,1.42,.674),new _(.12,2.03,.674),new _(.35,1.77,.674)]));this.bossCrack=new Us(c,l),this.boss.add(this.bossCrack);const h=document.createElement("canvas");h.width=1024,h.height=128;const u=h.getContext("2d");u.fillStyle="#25273d",u.fillRect(0,0,1024,128),u.fillStyle="#d6fbe4",u.font="bold 41px monospace",u.textAlign="center",u.fillText("04 / COGNITIVE OFFLOADING",512,54),u.fillStyle="#bfaad6",u.font="23px monospace",u.fillText("NEURAL SYSTEMS LABORATORY",512,96),this.signTexture=new At(h),this.signTexture.colorSpace=ge,this.signMaterial=new q({map:this.signTexture});const d=new P(this.track(new fe(5.3,.66)),this.signMaterial);d.name="stage-four-lab-sign",d.position.set(0,3.9,-7.049),this.room.add(d)}track(e){return this.geometry.add(e),e}primitive(e){const n=this.primitives.get(e);if(n)return n;const t=e==="box"?new ve(1,1,1):e==="sphere"?new je(.5,8,6):e==="cylinder"?new Mn(.5,.5,1,12):new Te(.43,.07,4,12);return this.track(t),this.primitives.set(e,t),t}model(e,n){const t=e+":"+(n??"*"),i=this.templates.get(t);if(i)return i;const s=new Map;for(const a of $i.models[e]){if(n==="structure"?a.group==="brain"||a.group==="port":n&&a.group!==n)continue;this.dummy.position.fromArray(a.position),this.dummy.rotation.set(...a.rotation),this.dummy.scale.fromArray(a.size),this.dummy.updateMatrix();const l=this.primitive(a.kind).clone().applyMatrix4(this.dummy.matrix),c=l.toNonIndexed();l.dispose();const h=s.get(a.material)??[];h.push(c),s.set(a.material,h)}const o=new Map;for(const[a,l]of s){const c=En(l,!1);if(l.forEach(h=>h.dispose()),!c)throw new Error(`Level 4 model merge failed: ${t}/${a}`);o.set(a,this.track(c))}return this.templates.set(t,o),o}addModel(e,n){for(const[t,i]of this.model(e)){const s=new P(i,this.materials.get(t));s.name=`${e}-${t}`,n.add(s)}}pool(e,n,t){const i=new X(e,n,t);return i.instanceMatrix.setUsage(le),i.frustumCulled=!1,i.count=0,i}makeCrowd(e,n,t){for(const[i,s]of this.model(e)){const o=this.pool(s,this.materials.get(i),t);o.name=`instanced-${e}-${i}`,this.group.add(o),n.push(o)}}updateZombies(e,n,t){for(const i of e)i.count=n.length,n.forEach((s,o)=>{const a=Ps(s);this.dummy.position.set(s.x,a.y,s.z),this.dummy.rotation.set(0,a.yaw,a.roll),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),i.setMatrixAt(o,this.dummy.matrix),i.setColorAt(o,s.flash>0?Yo:s.stasis&&t.time<s.stasis.until?Xo:mc)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}update(e,n){if(this.group.visible=!this.disposed&&e.stage===4,!this.group.visible)return;this.attempt!==e.attemptId&&(this.attempt=e.attemptId,this.bossCrack.visible=!1);const t=e.enemies.slice(0,G.hardCap),i=t.filter(l=>l.role==="shooter");this.updateZombies(this.husks,t,e),this.updateZombies(this.relay,i,e);const s=i.filter(l=>l.zombie?.mode==="warning"&&!(l.stasis&&e.time<l.stasis.until));this.relayWarnings.count=s.length,s.forEach((l,c)=>{const h=Rr(l),u=Ps(l);this.dummy.position.set(h.x,h.y,h.z),this.dummy.rotation.set(0,u.yaw,u.roll),this.dummy.scale.setScalar(n?.75:.72+.1*Math.sin(e.time*14)),this.dummy.updateMatrix(),this.relayWarnings.setMatrixAt(c,this.dummy.matrix)}),this.relayWarnings.instanceMatrix.needsUpdate=!0;const o=e.projectiles.filter(l=>l.kind==="brain").slice(0,G.projectileCap);for(const l of this.shots)l.count=o.length,o.forEach((c,h)=>{this.dummy.position.set(c.x,c.y,c.z),this.dummy.rotation.set(n?0:e.time*3,Math.atan2(c.vx,c.vz),0),this.dummy.scale.setScalar((c.radius??_r.shotRadius)/this.shotBound),this.dummy.updateMatrix(),l.setMatrixAt(h,this.dummy.matrix)}),l.instanceMatrix.needsUpdate=!0;const a=e.boss?.variant==="brain_vat"?e.boss:null;if(this.boss.visible=!!a,this.bossWarning.visible=!1,this.bossCrack.visible=!1,this.shadows.count=t.length+(a?1:0),t.forEach((l,c)=>{this.dummy.position.set(l.x,.016,l.z),this.dummy.rotation.set(-Math.PI/2,0,0),this.dummy.scale.set(.35,.32,1),this.dummy.updateMatrix(),this.shadows.setMatrixAt(c,this.dummy.matrix)}),a){const l=Ir(a),c=!!a.stasis&&e.time<a.stasis.until,h=a.vat.mode==="defeat",u=a.vat.mode==="warning"&&!c&&!h;this.boss.position.set(a.x,0,a.z),this.boss.rotation.set(0,l.heading,0),this.bossCore.position.y=h?-.1*Math.min(1,a.vat.elapsed/.7):0,this.bossBrain.position.y=0,this.bossBrain.scale.setScalar(1),this.bossCrack.visible=h||a.health/a.maxHealth<.35;for(const p of this.bossMaterials)p.emissiveIntensity=p.userData.baseEmission*(h?.08:u?1.5:1),p.color.copy(p.userData.baseColor),c?p.color.multiply(Xo):a.flash>0&&p.color.lerp(Yo,.44);const d=Lr(a);this.bossWarning.visible=u,this.bossWarning.position.set(d.x,d.y,d.z+.001),this.bossWarning.rotation.set(0,l.heading,0),this.bossWarning.scale.setScalar(n?1:1+.16*Math.sin(e.time*13)),this.dummy.position.set(a.x,.018,a.z),this.dummy.rotation.set(-Math.PI/2,0,0),this.dummy.scale.set(.91,.81,1),this.dummy.updateMatrix(),this.shadows.setMatrixAt(t.length,this.dummy.matrix)}this.shadows.instanceMatrix.needsUpdate=!0,this.counts={zombies:t.length,relays:i.length,brains:o.length,boss:a?1:0}}stats(){return{ready:!this.disposed,artStatus:$i.artStatus,relayArt:"ART-01 draft zombie with canister; owner approval pending",footprint:{width:G.width,depth:G.depth},counts:this.counts,geometry:this.geometry.size,materials:this.materials.size+this.bossMaterials.length+this.ownedBasic.size+1,modelExport:"assets/level4/kit.json",boundedPools:!0}}dispose(){this.disposed||(this.disposed=!0,this.group.visible=!1,this.group.removeFromParent(),this.group.traverse(e=>{e instanceof X&&e.dispose()}),this.geometry.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.bossMaterials.forEach(e=>e.dispose()),this.ownedBasic.forEach(e=>e.dispose()),this.signMaterial.dispose(),this.signTexture.dispose(),this.geometry.clear(),this.materials.clear(),this.templates.clear(),this.primitives.clear(),this.group.clear())}}class fc{constructor(e){this.scene=e,this.model=this.fallback(),this.root.add(this.model),this.root.visible=this.ring.visible=this.shield.visible=!1,this.scene.add(this.root,this.ring,this.shield),this.buildTrails()}scene;root=new W;model;trails=[];trailMaterial=new q({color:16754415,transparent:!0,opacity:.16,depthWrite:!1,blending:Fn});ringMaterial=new q({color:16755948,transparent:!0,opacity:.8,depthWrite:!1,blending:Fn});ring=new P(new Te(1,.025,4,40),this.ringMaterial);shieldMaterial=new q({color:15260927,transparent:!0,opacity:.23,wireframe:!0,depthWrite:!1});shield=new P(new je(Re.bodyRadius*1.04,16,10),this.shieldMaterial);target=new _;reduced=!1;authored=!1;mode="none";live=!1;charge=!1;shieldActive=!1;materialCount=0;triangles=0;fallback(){const e=new W,n=new U({color:16758983,roughness:.42,emissive:8263254,emissiveIntensity:.3}),t=new U({color:2428966,roughness:.6}),i=[],s=(c,h,u,d,p,m)=>new ve(d,p,m).translate(c,h,u);i.push(s(.015,-.14,0,.46,.52,.3),s(-.2,.28,.01,.17,.44,.25),s(-.2,.02,.01,.17,.27,.25));for(let c=0;c<4;c++)i.push(s(.06,.035-c*.115,.15,.43-c*.026,.104,.16));i.push(s(.015,-.44,0,.3,.12,.24));const o=En(i,!1);i.forEach(c=>c.dispose()),e.add(new P(o,n));const a=[s(-.06,-.085,.236,.035,.048,.014),s(.09,-.085,.236,.035,.048,.014)];for(let c=0;c<7;c++){const h=(c-3)*.027;a.push(s(.015+h,-.195+4*h*h,.236,.029,.02,.014))}const l=En(a,!1);return a.forEach(c=>c.dispose()),e.add(new P(l,t)),e}releaseModel(){const e=new Set,n=new Set,t=new Set;this.model.traverse(i=>{if(i instanceof P){t.add(i.geometry);for(const s of Array.isArray(i.material)?i.material:[i.material])e.add(s)}});for(const i of e){for(const s of Object.values(i))s instanceof $n&&n.add(s);i.dispose()}for(const i of n)i.dispose();for(const i of t)i.dispose();this.root.remove(this.model)}buildTrails(){for(const i of this.trails)this.scene.remove(i);this.trails[0]?.geometry.dispose(),this.trails=[],this.model.updateMatrixWorld(!0);const e=[],n=new Set;this.triangles=0,this.model.traverse(i=>{if(!(i instanceof P))return;const s=i.geometry.clone().applyMatrix4(i.matrixWorld);s.deleteAttribute("uv"),s.deleteAttribute("tangent"),s.deleteAttribute("color"),e.push(s),this.triangles+=(s.index?.count??s.getAttribute("position").count)/3;for(const o of Array.isArray(i.material)?i.material:[i.material])n.add(o)});const t=En(e,!1);e.forEach(i=>i.dispose()),this.materialCount=n.size;for(let i=0;i<2;i++){const s=new P(t,this.trailMaterial);s.visible=!1,this.scene.add(s),this.trails.push(s)}}addAsset(e){this.releaseModel(),this.model=e,this.root.add(e),this.authored=!0,this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.root.scale.setScalar(1),this.root.updateMatrixWorld(!0),this.buildTrails()}setReduced(e){this.reduced=e}render(e){this.root.visible=this.ring.visible=this.shield.visible=!1;for(const u of this.trails)u.visible=!1;this.live=this.charge=this.shieldActive=!1,this.mode="none";const n=e.boss;if(!n||n.variant!=="grin"||e.phase!=="boss"||!n.expansion)return;this.mode=n.mode;const t=!!n.stasis&&e.time<n.stasis.until,i=e.projectiles.find(u=>u.kind==="super_like"&&u.ownerId===n.id&&u.attemptId===e.attemptId),s=He.clamp(1-n.timer/Math.max(.001,n.modeDuration),0,1),o=Re.bodyRadius*1.2;if(i){if(this.live=!0,this.root.visible=!0,this.root.position.set(i.x,i.y,i.z),this.root.rotation.set(0,Math.atan2(i.vx,i.vz),0),this.root.scale.setScalar(o),!this.reduced)for(let u=0;u<2;u++){const d=this.trails[u],p=(u+1)*.065;d.position.set(i.x-i.vx*p,i.y-i.vy*p,i.z-i.vz*p),d.rotation.copy(this.root.rotation),d.scale.setScalar(o*(1-(u+1)*.09)),d.visible=!0}}else!t&&n.mode==="super_like_windup"&&(this.charge=!0,this.root.visible=!0,this.root.position.set(n.x+n.dx*bs.thumbMuzzleForward,n.y-bs.thumbMuzzleDown,n.z+n.dz*bs.thumbMuzzleForward),this.root.rotation.set(0,Math.atan2(n.dx,n.dz),0),this.root.scale.setScalar(o*(.16+s*.44)),this.ring.position.copy(this.root.position),this.target.set(this.ring.position.x+n.dx,this.ring.position.y,this.ring.position.z+n.dz),this.ring.lookAt(this.target),this.ring.scale.setScalar(.25+s*.42),this.ringMaterial.color.setHex(16755948),this.ringMaterial.opacity=this.reduced?.45:.7,this.ring.visible=!0);const a=Qi(n,e.time),l=!t&&n.mode==="smile_windup";this.shieldActive=a,(a||l)&&(this.shield.position.set(n.x,n.y,n.z),this.shield.rotation.set(0,0,0),this.shield.scale.setScalar(1),this.shieldMaterial.color.setHex(a?15131391:10975684),this.shieldMaterial.opacity=a?this.reduced?.16:.23:.025+s*.045,a&&e.time-(n.expansion.blockedHitAt??-100)<.13&&(this.shieldMaterial.opacity=.44),this.shield.visible=!0);const c=n.expansion.lastImpact,h=c?e.time-c.time:99;c&&h>=0&&h<.32&&c.reason!=="expiry"&&(this.ring.position.set(c.x,c.y,c.z),this.target.set(e.player.x,1.62+e.player.y,e.player.z),this.ring.lookAt(this.target),this.ring.scale.setScalar(.15+h*3.3),this.ringMaterial.color.setHex(c.reason==="sword"?16773057:16754414),this.ringMaterial.opacity=(this.reduced?.35:.72)*(1-h/.32),this.ring.visible=!0)}stats(){return{asset:this.authored?"authored":"fallback",mode:this.mode,liveThumb:this.live,chargeVisible:this.charge,trailCount:this.trails.filter(e=>e.visible).length,trailCap:2,shieldActive:this.shieldActive,shieldVisible:this.shield.visible,shieldOpacity:this.shield.visible?this.shieldMaterial.opacity:0,effectCount:this.ring.visible?1:0,effectCap:1,thumbTriangles:this.triangles,thumbDrawGroups:this.materialCount,reduced:this.reduced}}dispose(){this.releaseModel();for(const e of this.trails)this.scene.remove(e);this.trails[0]?.geometry.dispose(),this.trailMaterial.dispose(),this.ring.geometry.dispose(),this.ringMaterial.dispose(),this.shield.geometry.dispose(),this.shieldMaterial.dispose(),this.scene.remove(this.root,this.ring,this.shield)}}class gc{constructor(e,n){this.scene=e,this.boss=n,this.expansion=new fc(e),n.traverse(o=>{if(o instanceof P)for(const a of Array.isArray(o.material)?o.material:[o.material])Ys(a,"boss")}),n.traverse(o=>{if(o instanceof P)for(const a of Array.isArray(o.material)?o.material:[o.material])a instanceof U&&!this.materials.some(l=>l.material===a)&&this.materials.push({material:a,color:a.color.clone(),emission:a.emissiveIntensity})});for(const o of["grin_orb_eyes","grin_orb_halo","grin_orb_jaw","grin_orb_charm_left","grin_orb_charm_right"]){const a=n.getObjectByName(o);a&&this.pivots.set(o,{node:a,rotation:a.rotation.clone(),position:a.position.clone()})}const t=n.getObjectByName("grin_orb_eyes");t?.traverse(o=>{if(!(o instanceof P)||o.geometry.morphAttributes.position?.length)return;const a=o.geometry.getAttribute("position"),l=new Ce(new Float32Array(a.count*3),3);for(let c=0;c<l.count;c++){const h=a.getX(c),u=h<0?-.51:.51;l.setXYZ(c,u+(h-u)*.61,.36+(a.getY(c)-.36)*.61,a.getZ(c))}o.geometry.morphAttributes.position=[l],o.geometry.morphTargetsRelative=!1,o.updateMorphTargets(),this.eyes.push(o)}),this.eyeCenters=new X(new Et(.058),new q({color:15466484}),2),this.eyeCenters.visible=!1;for(let o=0;o<2;o++)this.dummy.position.set(o===0?-.51:.51,.36,1.32),this.dummy.scale.setScalar(1),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.eyeCenters.setMatrixAt(o,this.dummy.matrix);this.eyeCenters.instanceMatrix.needsUpdate=!0,(t??n).add(this.eyeCenters);const i=new je(Re.bodyRadius,12,8);for(let o=0;o<3;o++){const a=new P(i,this.ghostMaterial);a.visible=!1,e.add(a),this.ghosts.push(a)}this.castRing=new P(new Te(.4,.035,5,32),new q({color:16741107,transparent:!0,opacity:.85,depthWrite:!1,blending:Fn})),this.castRing.visible=!1,e.add(this.castRing),this.zipPath=new P(new fe(.07,1).rotateX(-Math.PI/2),new q({color:11529948,transparent:!0,opacity:.35,depthWrite:!1,side:re})),this.zipPath.visible=!1,e.add(this.zipPath),this.burst=new X(new Et(.055),new q({color:16777215,transparent:!0,opacity:1}),96),this.burst.count=0,this.burst.frustumCulled=!1,this.burst.instanceMatrix.setUsage(le),e.add(this.burst);const s=[16157647,12058593,16773072,13080831];for(let o=0;o<96;o++)this.burst.setColorAt(o,new V(s[o%4]))}scene;boss;projectilePools=[];materials=[];pivots=new Map;ghostMaterial=new q({color:15622375,transparent:!0,opacity:.13,wireframe:!0,depthWrite:!1});ghosts=[];castRing;zipPath;burst;dummy=new we;white=new V(16773610);target=new _;frozen=!1;poseClock=0;expansion;eyes=[];eyeCenters;reduced=!1;charcoal=new V(2298678);pale=new V(15597556);addProjectileAsset(e){e.updateMatrixWorld(!0),e.traverse(n=>{if(!(n instanceof P))return;const t=n.geometry.clone().applyMatrix4(n.matrixWorld),i=new X(t,n.material,Re.orbCap);i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(le),this.scene.add(i),this.projectilePools.push(i)})}addSuperLikeAsset(e){this.expansion.addAsset(e)}setReduced(e){this.reduced=e,this.expansion.setReduced(e)}render(e){this.expansion.render(e),this.eyeCenters.visible=!1;const n=e.boss,t=!!n&&n.variant==="grin"&&["reveal","boss","defeat"].includes(e.phase);this.boss.visible=t,this.castRing.visible=!1,this.zipPath.visible=!1,this.burst.count=0;for(const w of this.ghosts)w.visible=!1;const i=e.projectiles.filter(w=>w.owner==="boss"&&w.kind!=="super_like"&&w.kind!=="brain").slice(0,Re.orbCap);for(const w of this.projectilePools)w.count=i.length,i.forEach((v,E)=>{this.dummy.position.set(v.x,v.y,v.z),this.dummy.rotation.set(0,Math.atan2(e.player.x-v.x,e.player.z-v.z),Math.sin(e.time*4+v.id)*.16),this.dummy.scale.setScalar(v.radius??Re.orbRadius),this.dummy.updateMatrix(),w.setMatrixAt(E,this.dummy.matrix)}),w.instanceMatrix.needsUpdate=!0;if(this.frozen=!1,!n||!t)return;const s=!!n.stasis&&e.time<n.stasis.until,o=s?n.stasis:null,a=o?.poseTime??n.presentationTime??e.time,l=o?.mode??n.mode;this.frozen=s,this.poseClock=a,this.boss.position.set(n.x,n.y,n.z),this.boss.rotation.y=o?o.heading??0:["cast_tell","cast_release"].includes(n.mode)||n.mode.startsWith("super_like")||n.mode.startsWith("smile_")?Math.atan2(n.dx,n.dz):Math.atan2(e.player.x-n.x,e.player.z-n.z);const c=e.phase==="defeat",h=l==="cast_tell",u=l==="zip_move",d=e.phase==="reveal",p=Math.max(0,Math.min(1,1-(o?.timer??n.timer)/Math.max(.01,o?.modeDuration??n.modeDuration))),m=l==="super_like_windup"||l==="super_like_flight"||l==="super_like_recover",b=l==="smile_windup"||l==="smile_active"||l==="smile_recover",g=m?l==="super_like_windup"?p:l==="super_like_recover"?1-p:1:b?l==="smile_windup"?p:l==="smile_recover"?1-p:1:0,f=Qi(n,e.time);this.boss.scale.setScalar(d?.88+.12*Math.min(1,e.phaseTime/Re.revealSeconds):c?1+e.phaseTime*.08:1);for(const w of this.materials)w.material.color.copy(w.color),b&&w.material.name==="RK_Grin_Pixel_Shell"&&w.material.color.lerp(this.charcoal,g*.88),b&&w.material.name==="RK_Grin_Cream_Teeth"&&w.material.color.lerp(this.pale,g),m&&w.material.name==="RK_Grin_Deep_Recess"&&w.material.color.multiplyScalar(1-g*.6),w.material.color.lerp(this.white,n.flash>0?.8:0),w.material.emissiveIntensity=w.emission*(h?1.2+p*.9:c?2:1+g*.28),w.material.transparent=c,w.material.opacity=c?Math.max(0,1-e.phaseTime/Re.defeatSeconds):1;for(const w of this.eyes)w.morphTargetInfluences&&(w.morphTargetInfluences[0]=g);this.eyeCenters.visible=b&&g>.5;for(const[w,v]of this.pivots)v.node.rotation.copy(v.rotation),v.node.position.copy(v.position),w==="grin_orb_halo"&&(v.node.rotation.y+=a*(h?1.8:.35)),w.includes("charm")&&(v.node.rotation.z+=Math.sin(a*2.4+(w.includes("left")?0:1.2))*.075+Math.sin(a*1.15+(w.includes("left")?.2:1.7))*.02),w==="grin_orb_jaw"&&(h&&(v.node.position.y-=p*.09),v.node.position.y-=g*(m?.2:.12),v.node.rotation.x+=g*(m?.12:.08),v.node.rotation.x+=Math.sin(a*1.2-.16)*.012*(this.reduced?.35:1),v.node.position.y-=Math.sin(a*1.2)*.008*(this.reduced?.35:1));if(!s&&(h||n.mode==="cast_release")&&(this.castRing.position.set(n.x+n.dx*Re.muzzleForward,n.y-Re.muzzleDown,n.z+n.dz*Re.muzzleForward),this.target.copy(this.castRing.position).add(new _(n.aimX,n.aimY,n.aimZ)),this.castRing.lookAt(this.target),this.castRing.scale.setScalar(.55+p*(n.attack==="fan"?1.7:.9)),this.castRing.visible=!0),!s&&n.mode==="zip_tell"){const w=n.zipToX-n.x,v=n.zipToZ-n.z,E=Math.hypot(w,v);this.zipPath.position.set(n.x+w/2,.04,n.z+v/2),this.zipPath.rotation.y=Math.atan2(w,v),this.zipPath.scale.set(1,1,E),this.zipPath.visible=E>.01}if(u&&!s)for(let w=0;w<3;w++){const v=Math.max(0,n.zipElapsed/Math.max(.01,n.zipDuration)-(w+1)*.11),E=v*v*(3-2*v);this.ghosts[w].position.set(n.zipFromX+(n.zipToX-n.zipFromX)*E,n.y,n.zipFromZ+(n.zipToZ-n.zipFromZ)*E),this.ghosts[w].visible=!0}if(f&&!this.reduced)for(let w=0;w<2;w++)this.ghosts[w].position.set(n.x-n.dx*(w+1)*.6,n.y,n.z-n.dz*(w+1)*.6),this.ghosts[w].visible=!0;if(c){this.burst.count=96;const w=e.phaseTime;for(let v=0;v<96;v++){const E=v*2.399963,y=1-2*(v+.5)/96,M=Math.sqrt(1-y*y),z=2+v%7*.27;this.dummy.position.set(n.x+Math.cos(E)*M*(1.3+w*z),n.y+y*(1.3+w*z)-w*w,n.z+Math.sin(E)*M*(1.3+w*z)),this.dummy.rotation.set(E+w*3,w*2,v),this.dummy.scale.setScalar(Math.max(.01,1-w/Re.defeatSeconds)),this.dummy.updateMatrix(),this.burst.setMatrixAt(v,this.dummy.matrix)}this.burst.instanceMatrix.needsUpdate=!0}}stats(){return{bossOrbDrawGroups:this.projectilePools.length,orbCap:Re.orbCap,afterimageCap:3,burstCap:96,frozen:this.frozen,poseClock:this.poseClock,expansion:this.expansion.stats(),pose:{x:this.boss.position.x,y:this.boss.position.y,z:this.boss.position.z,yaw:this.boss.rotation.y,haloY:this.pivots.get("grin_orb_halo")?.node.rotation.y??null,jawY:this.pivots.get("grin_orb_jaw")?.node.position.y??null,charmZ:this.pivots.get("grin_orb_charm_left")?.node.rotation.z??null,irisContraction:this.eyes[0]?.morphTargetInfluences?.[0]??0}}}dispose(){this.expansion.dispose()}}class bc{sparks;rings;flowers;dummy=new we;towardCamera=new _;pink=new V(16744669);mint=new V(11665378);ordinary=new V(16770776);attempt=-1;impact=0;impactTime=-10;ix=0;iy=0;iz=0;heads=0;reduced=!1;rainbow=[16729973,16762177,16121712,7405520,5691135,10777855,16345573].map(e=>new V(e));constructor(e,n,t=!1){this.sparks=new X(new Et(.025,0),new q({transparent:!0,opacity:.95,depthWrite:!1}),t?48:G.hitEventCap*8),this.rings=new X(new Ke(.073,.086,4),new q({color:11665378,transparent:!0,opacity:.9,depthWrite:!1,side:re}),t?0:G.hitEventCap),this.flowers=new X(new fe(.23,.23),new q({map:n,transparent:!0,opacity:.85,depthWrite:!1,side:re,blending:Fn,toneMapped:!1}),t?0:8);for(const i of[this.sparks,this.rings,this.flowers])kl(i.material),i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(le),e.add(i)}setReduced(e){this.reduced=e}render(e,n,t=!1){let i=0,s=0,o=0;this.heads=0,e.attemptId!==this.attempt&&(this.attempt=e.attemptId,this.impact=0,this.impactTime=-10),e.impactSerial>this.impact&&(this.impact=e.impactSerial,this.impactTime=e.time,this.ix=e.slamImpactX,this.iy=Me(e),this.iz=e.slamImpactZ),(e.phase==="dead"||e.phase==="complete")&&(this.impactTime=-10);const a=e.time-this.impactTime,l=t?.65:.85;if(a>=0&&e.time+1e-9<this.impactTime+l){const c=this.reduced?12:40;for(let h=0;h<c;h++){const u=h*2.399963,d=1.3+h%5*.8;this.dummy.position.set(this.ix+Math.cos(u)*d*a,this.iy+.06+Math.max(0,(2.5+h%4*.35)*a-4.3*a*a),this.iz+Math.sin(u)*d*a),this.dummy.rotation.set(h,a*5,h*.3),this.dummy.scale.set(1.7*(1-a/l),4*(1-a/l),1.7*(1-a/l)),this.dummy.updateMatrix(),this.sparks.setMatrixAt(i,this.dummy.matrix),this.sparks.setColorAt(i++,this.rainbow[h%7])}}for(const c of e.hitEvents){if(t||t&&e.lifelikeEvents?.records.some(m=>m.kind==="hit"&&m.cause==="gun"&&m.attemptId===c.attemptId&&m.targetId===c.targetId&&m.time===c.time))continue;const h=e.time-c.time;if(c.attemptId!==e.attemptId||h<0||h>=G.hitEventSeconds)continue;const u=c.region==="head",d=1-h/G.hitEventSeconds;this.towardCamera.set(n.position.x-c.x,n.position.y-c.y,n.position.z-c.z).normalize(),o<8&&(this.dummy.position.set(c.x,c.y,c.z).addScaledVector(this.towardCamera,.05),this.dummy.quaternion.copy(n.quaternion),this.dummy.rotateZ(c.id*.71+h*2),this.dummy.scale.setScalar((u?1.5:1)*(1+h*5)*d*(this.reduced?.65:1)),this.dummy.updateMatrix(),this.flowers.setMatrixAt(o++,this.dummy.matrix));const p=u?8:3;for(let m=0;m<p&&i<this.sparks.instanceMatrix.count;m++){const b=m*2.399963+c.id*.47,g=1-2*(m+.5)/p,f=Math.sqrt(Math.max(0,1-g*g)),w=.025+h*(u?1.35:.8)*(c.killed?1.15:1);this.dummy.position.set(c.x+Math.cos(b)*f*w,c.y+g*w,c.z+Math.sin(b)*f*w).addScaledVector(this.towardCamera,.025+h*.25),this.dummy.rotation.set(b,h*12,m),this.dummy.scale.setScalar(d*(u?1.3:.8)),this.dummy.updateMatrix(),this.sparks.setMatrixAt(i,this.dummy.matrix),this.sparks.setColorAt(i,u?m%2?this.mint:this.pink:this.rainbow[(m+c.id)%7]),i++}u&&s<G.hitEventCap&&(this.dummy.position.set(c.x,c.y,c.z).addScaledVector(this.towardCamera,.045),this.dummy.quaternion.copy(n.quaternion),this.dummy.rotateZ(Math.PI/4),this.dummy.scale.setScalar((1+h*6)*d),this.dummy.updateMatrix(),this.rings.setMatrixAt(s++,this.dummy.matrix),this.heads++)}if(e.slam>=.1&&e.slam<.6&&!this.reduced)for(let c=0;c<8&&i<this.sparks.instanceMatrix.count;c++){const h=(e.time*1.3+c*.13)%1;this.dummy.position.set(.09+Math.sin(c*2.4)*.09,.1+Math.cos(c*2.4)*.13-h*.35,-.6).applyMatrix4(n.matrixWorld),this.dummy.rotation.set(c,e.time*3,c),this.dummy.scale.set(.45,1.4*(1-h),.45),this.dummy.updateMatrix(),this.sparks.setMatrixAt(i,this.dummy.matrix),this.sparks.setColorAt(i++,this.rainbow[c%7])}this.sparks.count=i,this.rings.count=s,this.flowers.count=o,this.flowers.instanceMatrix.needsUpdate=!0,this.sparks.instanceMatrix.needsUpdate=!0,this.rings.instanceMatrix.needsUpdate=!0,this.sparks.instanceColor&&(this.sparks.instanceColor.needsUpdate=!0)}stats(){return{sparks:this.sparks.count,headRings:this.heads,impactFlowers:this.flowers.count,maxSparks:this.sparks.instanceMatrix.count}}}const Bt=(r,e,n)=>{const t=He.clamp((n-r)/(e-r),0,1);return t*t*(3-2*t)},wc=new _(0,1,0);function Oa(r){const e=r.grenade.throwStartedAt,n=e===null?-1:r.time-e,t=r.grenade.enabled&&r.grenade.throwPhase!=="idle"&&n>=0&&n<Wi.recovery,i=Bt(0,.18,n),s=Bt(.18,.32,n),o=Bt(.34,.5,n),a=Bt(.16,Wi.release,n);let l=.3-.1*s+.07*o,c=-.64+.38*i-.35*o,h=-.54-.24*s+.12*o,u=.12-s*.43,d=-.3,p=.15+s*.18;if(t){const m=Pr(r.player,r.arena.active||r.stage===3,0,r.attemptId,r.phase==="boss"?"boss":"swarm",r.time,Me(r));if(m){const b=Math.sin(r.time*14)*r.player.dash*.018,g=new _(m.x-r.player.x,m.y-(r.player.eyeHeight??G.eyeHeight)-r.player.y,m.z-r.player.z).applyEuler(new We(-r.player.pitch,-r.player.yaw,-b,"ZXY")),f=a*(1-o);l=He.lerp(l,g.x,f),c=He.lerp(c,g.y,f),h=He.lerp(h,g.z,f),u=He.lerp(u,-r.player.pitch,f),d=He.lerp(d,0,f),p=He.lerp(p,-b,f)}}return{active:t,t:n,held:t&&n<Wi.release,holster:t?Math.min(Bt(0,.12,n),1-o):0,x:l,y:c,z:h,rx:u,ry:d,rz:p}}function yc(){const r=document.createElement("canvas");r.width=512,r.height=512;const e=r.getContext("2d"),n=(s,o)=>{e.save(),e.translate(s%4*128,Math.floor(s/4)*128),o(),e.restore()};for(const s of[0,1])n(s,()=>{e.strokeStyle=s===0?"#ff304b":"#ff91a0",e.lineWidth=s===0?4:5;for(const[o,a,l,c]of[[7,7,1,1],[121,7,-1,1],[7,121,1,-1],[121,121,-1,-1]])e.beginPath(),e.moveTo(o+l*23,a),e.lineTo(o,a),e.lineTo(o,a+c*23),e.stroke()});for(const[s,o]of[[2,"0"],[3,"1"]])n(s,()=>{e.font="900 92px monospace",e.textAlign="center",e.fillStyle="#ff6478",e.fillText(o,64,100)});["ERR_MOVE_LOCK","THREAD_PAUSED","STASIS 3s","STASIS 2s","STASIS 1s"].forEach((s,o)=>n(4+o,()=>{e.fillStyle="rgba(28,2,11,.82)",e.fillRect(2,45,124,36),e.fillStyle="#fff0f2",e.font="bold 14px monospace",e.textAlign="center",e.fillText(s,64,68),e.fillStyle="#ff304b",e.fillRect(2,44,124,2),e.fillRect(2,81,124,2)})),n(9,()=>{e.strokeStyle="#ff4f69",e.lineWidth=6,e.beginPath();for(let s=0;s<12;s++){const o=s*Math.PI/6;e.moveTo(64+Math.cos(o)*39,64+Math.sin(o)*39),e.lineTo(64+Math.cos(o+.3)*57,64+Math.sin(o+.3)*57)}e.stroke(),e.fillStyle="#fff0ed",e.fillRect(57,35,14,58),e.fillRect(35,57,58,14)}),n(10,()=>{e.strokeStyle="#ff516b",e.lineWidth=4;for(const[s,o,a,l]of[[9,9,1,1],[119,9,-1,1],[9,119,1,-1],[119,119,-1,-1]])e.beginPath(),e.moveTo(s+a*19,o),e.lineTo(s,o),e.lineTo(s,o+l*19),e.stroke();e.fillStyle="#2b0812",e.fillRect(80,6,37,22),e.fillStyle="#ffd2da",e.fillRect(89,10,6,14),e.fillRect(102,10,6,14)});const i=new At(r);return i.colorSpace=ge,i.magFilter=Ti,i.name="Binary authored glyph and stasis atlas",i}class vc{constructor(e,n){this.scene=e,this.foreground=n,e.add(this.worldRoot),n.add(this.heldRoot),this.heldRoot.name="binary-held-view",this.worldRoot.name="binary-world-view",this.heldRoot.visible=!1,this.worldRoot.visible=!1,this.addFallback();const t=new fe(1,1);this.tiles=new Xi(new Float32Array(128),1),this.alpha=new Xi(new Float32Array(128),1),this.tiles.setUsage(le),this.alpha.setUsage(le),t.setAttribute("binaryTile",this.tiles),t.setAttribute("binaryAlpha",this.alpha);const i=new q({map:yc(),transparent:!0,depthWrite:!1,side:re,toneMapped:!1});i.onBeforeCompile=s=>{s.vertexShader=`attribute float binaryTile; attribute float binaryAlpha; varying float vBinaryTile; varying float vBinaryAlpha;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBinaryTile=binaryTile;vBinaryAlpha=binaryAlpha;`),s.fragmentShader=`varying float vBinaryTile; varying float vBinaryAlpha;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>","vec2 binaryUV=(vMapUv+vec2(mod(vBinaryTile,4.0),3.0-floor(vBinaryTile/4.0)))*0.25; diffuseColor*=texture2D(map,binaryUV); diffuseColor.a*=vBinaryAlpha;")},i.customProgramCacheKey=()=>"binary-stasis-atlas-v1",this.cards=new X(t,i,128),this.cards.name="binary-stasis-shared-cards",this.cards.count=0,this.cards.frustumCulled=!1,this.cards.instanceMatrix.setUsage(le),e.add(this.cards),this.particles=new X(new Et(.018,0),new U({color:592141,metalness:.4,roughness:.18}),48),this.particles.name="binary-shared-fragments-drops",this.particles.count=0,this.particles.frustumCulled=!1,this.particles.instanceMatrix.setUsage(le),e.add(this.particles),this.pulse=new P(new Ke(.91,1,48,1,.12,Math.PI*1.78),new q({color:16737401,transparent:!0,opacity:0,depthWrite:!1,side:re,toneMapped:!1})),this.pulse.rotation.x=-Math.PI/2,this.pulse.visible=!1,e.add(this.pulse),this.armed=new P(new Ke(.14,.146,20),new q({color:16752814,transparent:!0,opacity:0,depthWrite:!1,side:re,toneMapped:!1})),this.armed.visible=!1,e.add(this.armed),this.shadow=new P(new St(.14,16),new q({color:1049866,transparent:!0,opacity:.45,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,e.add(this.shadow)}scene;foreground;heldRoot=new W;worldRoot=new W;cards;tiles;alpha;particles;pulse;shadow;armed;d=new we;p=new _;axis=new _;projected=new _;energy=[];reduced=!1;loaded=!1;disposed=!1;labelRects=[];count=0;tags=0;frozen=0;particleCount=0;role="hidden";rotation=0;grounded=!1;fallbackGeometry=null;fallbackMaterial=null;addFallback(){this.fallbackGeometry=new zt(.115,1),this.fallbackMaterial=new U({color:5376025,emissive:16065090,emissiveIntensity:.25,metalness:.5,roughness:.35});for(const e of[this.heldRoot,this.worldRoot]){const n=new P(this.fallbackGeometry,this.fallbackMaterial);n.name="binary-readable-fallback",n.scale.y=1.25,e.add(n)}}addAsset(e){if(this.disposed)return;const n=e.getObjectByName("binary_grenade_held"),t=e.getObjectByName("binary_grenade_world");if(!n||!t)throw new Error("Grenade GLB must contain held and world LOD groups.");for(const i of[n,t])i.traverse(s=>{if(s instanceof P)for(const o of Array.isArray(s.material)?s.material:[s.material])Ys(o,"utility"),_a(o)});this.heldRoot.clear(),this.worldRoot.clear(),this.heldRoot.add(n),this.worldRoot.add(t),this.fallbackGeometry?.dispose(),this.fallbackMaterial?.dispose(),this.fallbackGeometry=null,this.fallbackMaterial=null,e.traverse(i=>{if(i instanceof P)for(const s of Array.isArray(i.material)?i.material:[i.material])s instanceof U&&s.name==="RK_Binary_Emission"&&!this.energy.includes(s)&&this.energy.push(s)}),n.traverse(i=>{if(i instanceof P)for(const s of Array.isArray(i.material)?i.material:[i.material])s instanceof U&&s.name==="RK_Binary_Emission"&&!this.energy.includes(s)&&this.energy.push(s)}),this.loaded=!0}setReduced(e){this.reduced=e}card(e,n,t,i,s,o,a,l,c=0){this.count>=128||(this.d.position.set(e,n,t),this.d.quaternion.copy(l.quaternion),c&&this.d.rotateZ(c),this.d.scale.set(i,s,1),this.d.updateMatrix(),this.cards.setMatrixAt(this.count,this.d.matrix),this.tiles.setX(this.count,o),this.alpha.setX(this.count,a),this.count++)}fragment(e,n,t,i,s){this.particleCount>=48||(this.d.position.set(e,n,t),this.d.rotation.set(s,s*.6,s*.3),this.d.scale.set(i,i*1.7,i),this.d.updateMatrix(),this.particles.setMatrixAt(this.particleCount++,this.d.matrix))}render(e,n,t){this.count=0,this.tags=0,this.frozen=0,this.particleCount=0,this.role="hidden",this.grounded=!1,this.labelRects.length=0;const i=!t&&e.grenade.enabled&&["swarm","boss"].includes(e.phase),s=Oa(e),o=i?e.grenade.world:null;this.heldRoot.visible=i&&s.held,this.worldRoot.visible=!!o,this.shadow.visible=!!o,this.armed.visible=!1,this.pulse.visible=!1,this.heldRoot.position.set(s.x,s.y,s.z),this.heldRoot.rotation.set(s.rx,s.ry,s.rz),this.heldRoot.visible&&(this.role="held");let a=.85;if(o){this.role=o.grounded?"rolling":"flying",this.grounded=o.grounded,this.rotation=o.roll,this.worldRoot.position.set(o.x,o.y,o.z),this.axis.set(o.vz,0,-o.vx),this.axis.lengthSq()<1e-7&&this.axis.set(1,0,0),this.axis.normalize(),this.worldRoot.quaternion.setFromAxisAngle(this.axis,o.roll),this.worldRoot.rotateY(Math.atan2(-o.vx,-o.vz));const l=e.stage===3?$t(o.x,o.z):Me(e);this.shadow.position.set(o.x,l+.025,o.z);const c=o.y-l,h=Math.max(.5,1-c*.16);this.shadow.scale.setScalar(h),this.shadow.material.opacity=Math.max(.1,.5-c*.12);const u=Bt(o.detonateAt-.35,o.detonateAt,e.time);a+=u*(this.reduced?.25:.85),this.armed.visible=u>0,this.armed.position.copy(this.worldRoot.position),this.armed.quaternion.copy(n.quaternion),this.armed.scale.setScalar(1.7-u*.6),this.armed.material.opacity=u*(this.reduced?.3:.65);const d=e.time-o.releasedAt;if(!this.reduced&&e.slam<0&&d<.55)for(let p=0;p<8;p++){const m=(p+1)*.018,b=d+m;this.fragment(o.x-o.vx*m,o.y-o.vy*m-b*b*.28,o.z-o.vz*m,.6+p*.035,p+e.time)}}for(const l of this.energy)l.emissiveIntensity=a;if(i){const l=e.grenade.lastDetonation,c=l?e.time-l.time:100;if(l&&c>=0&&c<.6){const p=e.stage===3?$t(l.x,l.z):Me(e);this.pulse.visible=!0,this.pulse.position.set(l.x,p+.035,l.z),this.pulse.rotation.z=c*.35,this.pulse.scale.setScalar(.24+c*(this.reduced?5:16)),this.pulse.material.opacity=(1-c/.6)*(this.reduced?.3:.8),c<.18&&!this.reduced&&this.card(l.x,l.y+.1,l.z,.3+c*3,.3+c*3,9,(1-c/.18)*.8,n);const m=this.reduced?0:e.slam>=0?8:32;for(let b=0;b<m;b++){const g=b*2.399963,f=.8+b%5*.23,w=c*f;this.fragment(l.x+Math.cos(g)*w,Math.max(p+.04,l.y+Math.sin(b*3.1)*w+.2-c*c*2),l.z+Math.sin(g)*w,1-c/.6,g+c*2)}}const h=[];for(const p of e.enemies)p.health>0&&p.stasis&&e.time<p.stasis.until+.25&&h.push({id:p.id,x:p.x,y:1.12,z:p.z,head:Cr(p,xo.head),radius:.58,stasis:p.stasis,boss:!1,distance:(p.x-e.player.x)**2+(p.z-e.player.z)**2});const u=e.boss;u&&u.health>0&&u.stasis&&e.time<u.stasis.until+.25&&h.push({id:u.id,x:u.x,y:u.y,z:u.z,head:{x:u.x,y:u.y,z:u.z},radius:u.visualRadius,stasis:u.stasis,boss:!0,distance:(u.x-e.player.x)**2+(u.z-e.player.z)**2}),h.sort((p,m)=>Number(m.boss&&e.lock.active)-Number(p.boss&&e.lock.active)||p.distance-m.distance);let d=0;for(const p of h){const m=p.stasis.until-e.time,b=m>0,g=b?.74:Math.max(0,1+m/.25)*.6;b&&this.frozen++,this.p.set(p.head.x,p.head.y,p.head.z),this.projected.copy(this.p).applyMatrix4(n.matrixWorldInverse);const f=Math.max(.1,-this.projected.z);this.axis.copy(n.position).sub(this.p);const w=this.axis.length(),v=p.boss?(e.boss?.bodyRadius??p.radius)+.05:xo.head.radius+.05;w>.001&&this.p.addScaledVector(this.axis,Math.min(v,Math.max(0,w-.18))/w);const E=this.p.x,y=this.p.y,M=this.p.z;if(this.projected.copy(this.p).project(n),this.projected.z<0||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3)continue;this.p.applyMatrix4(n.matrixWorldInverse);const z=p.radius,T=Math.max(.1,-this.p.z),S=2*T*Math.tan(n.fov*Math.PI/360),A=S*n.aspect,R=Math.min(p.boss?z*2.35*T/f:.76,A*(p.boss?.36:.17)),N=Math.min(p.boss?z*2.35*T/f:.72,S*(p.boss?.66:.24));if(this.card(E,y,M,R,N,p.boss?this.reduced?1:0:10,g,n),d<(this.reduced?4:12)&&b){d++,this.p.set(p.x,p.y,p.z).applyMatrix4(n.matrixWorldInverse);const B=Math.min(p.boss?2.7:1.65,Math.max(.1,-this.p.z)*2*Math.tan(n.fov*Math.PI/360)*n.aspect*.085),H=p.boss?p.y+z+.25:p.head.y+.46;this.p.set(p.x,H,p.z).project(n);const K=.1,I=.105,L={left:this.p.x-K,right:this.p.x+K,bottom:this.p.y-I,top:this.p.y+I},ue=this.p.z>0&&this.p.z<1&&L.left>-.94&&L.right<.94&&L.bottom>-.73&&L.top<.6,F=this.labelRects.some(oe=>L.left<oe.right&&L.right>oe.left&&L.bottom<oe.top&&L.top>oe.bottom);if(ue&&!F&&(this.tags++,this.labelRects.push(L),this.card(p.x,H,p.z,B,B,6+Math.min(2,Math.max(0,3-Math.ceil(m))),g,n),this.reduced||this.card(p.x,H+B*.3,p.z,B,B,p.boss?5:4,g*.85,n)),!this.reduced){const oe=e.time*.45+p.id*1.7;this.p.copy(n.position).sub(new _(p.x,p.y,p.z)),this.axis.crossVectors(wc,this.p).normalize();const hn=Math.max(.005,Math.min(.65,S*.034));for(let ce=0;ce<2;ce++){const k=ce===0?-1:1;this.card(p.x+this.axis.x*k*(z+.22),p.y+Math.sin(oe+ce)*.27,p.z+this.axis.z*k*(z+.22),hn*.72,hn,2+(p.id+ce)%2,g*.9,n,Math.sin(oe)*.1)}}}}}this.cards.count=this.count,this.cards.instanceMatrix.needsUpdate=!0,this.tiles.needsUpdate=!0,this.alpha.needsUpdate=!0,this.particles.count=this.particleCount,this.particles.instanceMatrix.needsUpdate=!0}stats(){return{asset:this.loaded?"authored":"readable-fallback",held:this.heldRoot.visible,world:this.worldRoot.visible,worldState:this.role,grounded:this.grounded,rollRadians:this.rotation,cards:this.count,cardCapacity:128,detailedTags:this.tags,tagCapacity:12,frozenActors:this.frozen,particles:this.particleCount,particleCapacity:48,pulse:this.pulse.visible,armedCue:this.armed.visible,reducedEffects:this.reduced,extraFxDraws:[this.cards.count>0,this.particles.count>0,this.pulse.visible,this.shadow.visible,this.armed.visible].filter(Boolean).length}}dispose(){this.disposed=!0}}const fn={scale:.7,appear:.07,handoff:.61};function ki(r,e,n){const t=He.clamp((n-r)/(e-r),0,1);return t*t*(3-2*t)}function Na(r){const e=ki(be.summonEnd,be.raiseEnd,r),n=ki(be.apex,be.impact,r);return{position:new _(.24-.205*e,-.46+.76*e-.4*n,-.88+.16*e),rotation:new We(-.17+e*.62-n*2.9,.05,-.15+.12*e),scale:Math.max(.01,ki(fn.appear,.15,r))}}function xc(r){const e=r.getObjectByName("sword_tip");if(!e)throw new Error("Sword asset is missing its floor-contact socket");return r.updateWorldMatrix(!0,!0),r.worldToLocal(e.getWorldPosition(new _)).multiplyScalar(fn.scale)}function kc(r,e,n,t,i){const s=ki(be.dissolve,be.duration,r),o=ki(fn.handoff,be.impact,r),a=Na(fn.handoff),l=a.position.applyMatrix4(t.matrixWorld),c=t.quaternion.clone().multiply(new he().setFromEuler(a.rotation)),h=new _(-Math.sin(i)*.18,-1,-Math.cos(i)*.18).normalize(),u=new he().setFromUnitVectors(new _(0,1,0),h),d=n.clone().sub(e.clone().applyQuaternion(u).multiplyScalar(1-s));return{visible:r>=fn.handoff&&r<be.duration,position:l.lerp(d,o),rotation:c.slerp(u,o),scale:fn.scale*(1-s)}}class Mc{material=new gn({name:"RK_Liquid_Reactor",color:16777215,metalness:.18,roughness:.18,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.2,emissive:16777215,emissiveIntensity:.22});clock={value:0};surge={value:0};lastTime=null;constructor(){this.material.customProgramCacheKey=()=>"rk-liquid-reactor-v1",this.material.onBeforeCompile=e=>{e.uniforms.liquidTime=this.clock,e.uniforms.liquidSurge=this.surge,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLiquidPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidPosition=position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
    varying vec3 vLiquidPosition;
    uniform float liquidTime;
    uniform float liquidSurge;
    float liquidField(vec3 p,float t){
     vec3 q=p+vec3(0.0,-t*.26,t*.19);
     vec3 warp=vec3(sin(q.y*1.6+sin(q.z*1.8+t*.37)),sin(q.z*1.7+sin(q.x*1.5-t*.25)),sin(q.x*1.9+sin(q.y*1.6+t*.22)));
     q+=warp*.72;
     return .5+.5*sin(q.x*2.0+q.y*1.2-q.z*1.8+sin(q.y*2.4-q.x+t*.31));
    }
   `).replace("#include <map_fragment>",`
    vec3 liquidPoint=vLiquidPosition*4.3;
    float flow=liquidField(liquidPoint,liquidTime);
    float depthFlow=liquidField(liquidPoint*.63+vec3(1.7,2.1,.8),liquidTime*.72);
    float phase=flow*.75+depthFlow*.28+liquidTime*.025;
    vec3 liquidColor=.035+.965*(.5+.5*cos(6.2831853*phase+vec3(0.0,2.094,4.188)));
    liquidColor=mix(liquidColor*.46,liquidColor, .38+.62*depthFlow);
    float vein=pow(max(0.0,1.0-abs(flow-.52)*12.0),3.0);
    liquidColor+=vec3(.10,.15,.19)*vein;
    diffuseColor.rgb=liquidColor;
   `).replace("#include <roughnessmap_fragment>",`
    #include <roughnessmap_fragment>
    roughnessFactor=.12+.10*(1.0-depthFlow);
   `).replace("#include <normal_fragment_maps>",`
    #include <normal_fragment_maps>
    vec3 liquidDx=dFdx(-vViewPosition),liquidDy=dFdy(-vViewPosition);
    vec3 liquidS=cross(liquidDy,normal),liquidT=cross(normal,liquidDx);
    float liquidDet=dot(liquidDx,liquidS);
    vec3 liquidGradient=(dFdx(flow)*liquidS+dFdy(flow)*liquidT)*sign(liquidDet)/max(abs(liquidDet),.00000001);
    normal=normalize(normal-liquidGradient*.012);
   `).replace("#include <clearcoat_normal_fragment_maps>",`
    #include <clearcoat_normal_fragment_maps>
    #ifdef USE_CLEARCOAT
     clearcoatNormal=normalize(mix(clearcoatNormal,normal,.65));
    #endif
   `).replace("#include <emissivemap_fragment>",`
    totalEmissiveRadiance=liquidColor*(.24+liquidSurge*.20)+vec3(.08,.10,.13)*vein;
   `)}}update(e,n,t){this.lastTime!==null&&!t&&(this.clock.value+=Math.max(0,Math.min(.05,e-this.lastTime))),this.lastTime=e,this.surge.value=t?0:He.clamp(n,0,1)}}const Ec=new _(0,1,0),Zo=[16728687,16760114,16383848,6487988,4971519,7821055,16018431],di=(r,e,n)=>{const t=He.clamp((n-r)/(e-r),0,1);return t*t*(3-2*t)};function Tc(){const r=document.createElement("canvas");r.width=512,r.height=512;const e=r.getContext("2d");e.translate(256,256);for(let i=0;i<4;i++){const s=220-i*43;e.lineWidth=i===3?3:2;for(let o=0;o<12;o++)e.save(),e.rotate(o*Math.PI/6+i*.12),e.strokeStyle=`hsla(${o*30+i*45},100%,70%,.88)`,e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(s*.66,-s*.47,s*.98,-s*.2,s,0),e.bezierCurveTo(s*.98,s*.2,s*.66,s*.47,0,0),e.stroke(),e.restore()}for(let i=0;i<7;i++)e.strokeStyle=`hsla(${i*51},100%,67%,.85)`,e.lineWidth=3,e.beginPath(),e.arc(0,0,222+i*3,0,Math.PI*2),e.stroke();const n=e.createRadialGradient(0,0,0,0,0,75);n.addColorStop(0,"rgba(255,255,220,1)"),n.addColorStop(.25,"rgba(255,237,120,.7)"),n.addColorStop(1,"rgba(255,100,200,0)"),e.fillStyle=n,e.fillRect(-80,-80,160,160);const t=new At(r);return t.colorSpace=ge,t}class Sc{constructor(e,n){this.scene=e,this.foreground=n,this.map=Tc();const t=i=>new q({map:this.map,transparent:!0,opacity:i,depthWrite:!1,side:re,blending:Fn,toneMapped:!1});this.muzzle=new P(new fe(.2,.2),t(.85)),this.foreground.add(this.muzzle),this.core=new X(new je(.026,8,6),new q({color:16775654,toneMapped:!1}),en.cap),this.ribbons=new X(new Mn(.004,.024,1,5),new q({transparent:!0,opacity:.66,depthWrite:!1,blending:Fn,toneMapped:!1}),en.cap*3),this.boltGlow=new X(new je(.067,8,6),new q({color:9038591,transparent:!0,opacity:.16,depthWrite:!1,blending:Fn,toneMapped:!1}),en.cap);for(const i of[this.core,this.ribbons,this.boltGlow])i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(le),e.add(i);this.muzzleLight=new Jt(16771778,0,2.2,2),this.muzzleLight.position.set(en.muzzleRight,-.18,-.78),n.add(this.muzzleLight),this.wave=new P(new fe(2,2),t(.9)),this.wave.rotation.x=-Math.PI/2,e.add(this.wave),this.column=new P(new Mn(.012,.07,1,7),new q({map:this.map,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Fn,toneMapped:!1,side:re})),e.add(this.column),this.contactStar=new P(new fe(2,2),t(.8)),this.contactStar.rotation.x=-Math.PI/2,e.add(this.contactStar),this.shockRing=new P(new Ke(.94,1,64),new q({color:16771765,transparent:!0,opacity:0,depthWrite:!1,side:re,blending:Fn,toneMapped:!1})),this.shockRing.rotation.x=-Math.PI/2,e.add(this.shockRing),this.fragments=new X(new Et(.045,0),new q({transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),24),this.fragments.count=0,this.fragments.frustumCulled=!1,this.fragments.instanceMatrix.setUsage(le);for(let i=0;i<24;i++)this.fragments.setColorAt(i,new V(Zo[i%7]));e.add(this.fragments),n.add(this.gunRoot,this.swordRoot);for(const i of[-1,1]){const s=this.makeHand(i);n.add(s),this.hands.push(s)}}scene;foreground;gunRoot=new W;swordRoot=new W;gun=null;sword=null;worldSword=null;hands=[];energy=[];muzzle;core;ribbons;boltGlow;muzzleLight;wave;column;contactStar;shockRing;fragments;d=new we;map;lastImpact=0;attempt=-1;impactTime=-10;ix=0;iz=0;muzzleLocal=new _(0,0,-1);tipOffset=new _(0,1.3,0);impactYaw=0;shellGrain=null;metalNormal=null;metalRoughness=null;reduced=!1;phase="idle";humanPOV=!1;externalBolts=!1;setExternalBolts(e){this.externalBolts=e}gripPoses=[];setHumanPOV(e){this.humanPOV=e}humanGripPoses(){return this.gripPoses}liquidReactor=new Mc;makeHand(e){const n=new W,t=new Map,i=new U({color:1512994,metalness:.45,roughness:.48}),s=new U({color:15789279,metalness:.35,roughness:.35}),o=new U({color:16238357,metalness:.65,roughness:.29}),a=(l,c,h)=>{const u=new ve(...l);u.translate(...c);const d=t.get(h)||[];d.push(u),t.set(h,d)};a([.095,.105,.16],[0,0,0],i),a([.1,.08,.08],[0,-.015,.08],o),a([.11,.12,.29],[0,-.08,.24],s),a([.082,.065,.25],[0,-.005,.23],i);for(let l=0;l<4;l++)a([.021,.035,.082],[-.038+l*.025,.057,-.015],s),a([.021,.026,.055],[-.038+l*.025,.031,-.06],i);a([.031,.055,.065],[e*.058,.02,-.025],o);for(const[l,c]of t)n.add(new P(En(c,!1),l)),c.forEach(h=>h.dispose());return n}addGun(e){this.gun=e,e.scale.setScalar(.48),this.gunRoot.add(e),e.updateMatrixWorld(!0);const n=e.getObjectByName("muzzle_socket");n&&(n.getWorldPosition(this.muzzleLocal),this.gunRoot.worldToLocal(this.muzzleLocal)),this.finishShells(e),e.traverse(t=>{t instanceof P&&t.name.startsWith("gun_reactor__")&&(t.material=this.liquidReactor.material)}),this.collectEnergy(e)}addSword(e){this.sword=e,e.scale.setScalar(fn.scale),this.swordRoot.add(e),this.tipOffset.copy(xc(e)),this.finishShells(e),this.worldSword=e.clone(!0),this.worldSword.visible=!1,this.scene.add(this.worldSword),this.collectEnergy(e)}setSurfaceMaps(e,n){this.metalNormal=e,this.metalRoughness=n;for(const t of[e,n])t.wrapS=t.wrapT=ln,t.repeat.set(2,2);this.gun&&this.finishShells(this.gun),this.sword&&this.finishShells(this.sword)}finishShells(e){if(!this.shellGrain){const i=new Uint8Array(65536);let s=916;for(let o=0;o<16384;o++){s=Math.imul(s,1664525)+1013904223>>>0;const a=220+(s>>>27);i.set([a,a,a,255],o*4)}this.shellGrain=new zi(i,128,128),this.shellGrain.wrapS=this.shellGrain.wrapT=ln,this.shellGrain.repeat.set(6,6),this.shellGrain.magFilter=Sn,this.shellGrain.minFilter=ot,this.shellGrain.generateMipmaps=!0,this.shellGrain.needsUpdate=!0}const n=new Set;e.traverse(t=>{if(t instanceof P)for(const i of Array.isArray(t.material)?t.material:[t.material]){if(!(i instanceof U)||n.has(i)||!/RK_Weapon_(Neon_Yellow|Porcelain_White|Structural_Black)/.test(i.name))continue;n.add(i),_a(i);const s=i.name.includes("White"),o=i.name.includes("Black");i.metalness=s?.12:o?.78:.82,i.roughness=s?.48:o?.61:.4,i.envMapIntensity=.8,i.roughnessMap=this.metalRoughness||this.shellGrain,i.normalMap=this.metalNormal,i.normalScale.setScalar(s?.08:.16),i.bumpMap=this.metalNormal?null:this.shellGrain,i.bumpScale=.0012,i.needsUpdate=!0}})}collectEnergy(e){e.traverse(n=>{if(n instanceof P)for(const t of Array.isArray(n.material)?n.material:[n.material])t instanceof U&&/energy|fractal/i.test(t.name)&&!this.energy.includes(t)&&(this.energy.push(t),t.map&&(t.map.wrapS=t.map.wrapT=ln))})}setReduced(e){this.reduced=e}get effectTexture(){return this.map}render(e,n,t){const i=Me(e);this.liquidReactor.update(e.time,e.shotFlash,this.reduced),this.attempt!==e.attemptId&&(this.attempt=e.attemptId,this.lastImpact=0,this.impactTime=-10),e.impactSerial>this.lastImpact&&(this.lastImpact=e.impactSerial,this.impactTime=e.time,this.ix=e.slamImpactX,this.iz=e.slamImpactZ,this.impactYaw=e.player.yaw),(e.phase==="dead"||e.phase==="complete")&&(this.impactTime=-10);const s=e.slam,o=s>=0,a=di(be.summonEnd,be.raiseEnd,s),l=di(be.dissolve,be.duration,s),c=Oa(e);this.phase=c.active?c.held?"grenade-prepare":"grenade-return":o?s<.1?"summon":s<.32?"raise":s<.5?"jump":s<.68?"downstroke":s<.95?"impact":"return":"idle";const h=Math.max(c.holster,o?s<.1?di(0,.1,s):1-di(.95,1.1,s):0);this.gunRoot.visible=!t&&(!o||s<.1||s>.95)&&(!c.active||c.t<.12||c.t>.37),this.gunRoot.position.set(en.muzzleRight-this.muzzleLocal.x,en.muzzleDown*-1-this.muzzleLocal.y-h*.5,-.78-this.muzzleLocal.z+e.shotFlash*.035),this.gunRoot.position.x+=Math.sin(e.time*2.1)*.006,this.gunRoot.rotation.set(e.shotFlash*.025+h*.25,0,-.025);const u=Na(s);if(this.swordRoot.visible=!t&&o&&s>=fn.appear&&s<fn.handoff,this.swordRoot.position.copy(u.position),this.swordRoot.rotation.copy(u.rotation),this.swordRoot.scale.setScalar(u.scale),this.worldSword&&(this.worldSword.visible=!t&&o&&s>=fn.handoff&&s<be.duration,this.worldSword.visible)){const m=new _(-Math.sin(e.player.yaw),0,-Math.cos(e.player.yaw)),b=new _(s<be.impact?e.player.x+m.x*be.strikeForward:e.slamImpactX,i+.025,s<be.impact?e.player.z+m.z*be.strikeForward:e.slamImpactZ),g=kc(s,this.tipOffset,b,n,s<be.impact?e.player.yaw:this.impactYaw);this.worldSword.quaternion.copy(g.rotation),this.worldSword.position.copy(g.position),this.worldSword.scale.setScalar(g.scale)}if(this.gunRoot.updateMatrixWorld(!0),this.swordRoot.updateMatrixWorld(!0),this.worldSword?.updateMatrixWorld(!0),this.hands.forEach((m,b)=>{m.visible=!t,m.scale.setScalar(1);const g=b===0?-1:1;if(c.active)b===1?(m.position.set(c.x,c.y-.07,c.z+.025),m.rotation.set(c.rx+.15,c.ry,c.rz)):(m.position.set(-.18+di(.1,.19,c.t)*.31,-.36,-.57),m.rotation.set(.22,0,-.3),m.visible=!t&&c.t<.24);else if(!o||s<.1){const f=this.gun?.getObjectByName(b===0?"gun_grip_support":"gun_grip_main");f&&f.getWorldPosition(m.position),m.position.x+=g*.023,m.rotation.set(b===0?.1:-.2,g*.13,g*.15)}else if(s<fn.handoff){const f=this.sword?.getObjectByName(b===0?"sword_grip_support":"sword_grip_main");f&&f.getWorldPosition(m.position),m.position.x+=g*.047,m.rotation.set(.1+a*.1,g*.08,g*.18)}else{const f=this.worldSword?.getObjectByName(b===0?"sword_grip_support":"sword_grip_main");if(f&&(f.getWorldPosition(m.position),n.worldToLocal(m.position)),m.position.x+=g*.043,m.rotation.set(-.15,g*.08,g*.12),l>0){const w=this.gun?.getObjectByName(b===0?"gun_grip_support":"gun_grip_main");if(w){const v=w.getWorldPosition(new _);v.x+=g*.023,m.position.lerp(v,l)}m.quaternion.slerp(new he().setFromEuler(new We(b===0?.1:-.2,g*.13,g*.15)),l)}}m.scale.multiplyScalar(.66)}),this.gripPoses=this.hands.map(m=>({position:m.position.clone(),quaternion:m.quaternion.clone(),visible:m.visible})),this.humanPOV){this.gunRoot.visible=!1;for(const m of this.hands)m.visible=!1}for(const m of this.energy)m.emissiveIntensity=(this.reduced?.65:.95)+Math.sin(e.time*3.5)*.12+(o?.22:0),m.map&&(m.map.offset.x=Math.sin(e.time*.3)*.035,m.map.offset.y=e.time*.022);this.muzzle.visible=!t&&!o&&!c.active&&e.shotFlash>0,this.muzzle.position.set(en.muzzleRight,-.18,-.78-.012),this.muzzle.rotation.z=e.shots*1.7,this.muzzle.scale.setScalar(this.reduced?.6:.9+e.shotFlash*.7),this.muzzle.visible=this.muzzle.visible&&!this.humanPOV,this.muzzleLight.intensity=this.muzzle.visible&&!this.reduced?Math.min(2.4,e.shotFlash*8):0;let d=0;this.core.count=Math.min(en.cap,e.friendlyBolts.length),this.boltGlow.count=this.reduced?0:this.core.count,e.friendlyBolts.slice(0,en.cap).forEach((m,b)=>{const g=new _(m.vx,m.vy,m.vz).normalize();this.d.position.set(m.x,m.y,m.z),this.d.quaternion.setFromUnitVectors(Ec,g),this.d.scale.set(.65,3.4,.65),this.d.updateMatrix(),this.core.setMatrixAt(b,this.d.matrix),this.boltGlow.setMatrixAt(b,this.d.matrix);const f=Math.min(.95,(en.lifetime-m.life)*en.speed);for(let w=0;w<3;w++)this.d.position.set(m.x,m.y,m.z).addScaledVector(g,-f*.5),this.d.position.x+=Math.sin(e.time*28+b+w*2)*.014,this.d.position.y+=Math.cos(e.time*28+b+w*2)*.014,this.d.scale.set(.55,f,.55),this.d.updateMatrix(),this.ribbons.setMatrixAt(d,this.d.matrix),this.ribbons.setColorAt(d++,new V(Zo[(b+w*2)%7]))}),this.ribbons.count=d,this.externalBolts&&(this.core.count=0,this.boltGlow.count=0,this.ribbons.count=0),this.core.instanceMatrix.needsUpdate=!0,this.boltGlow.instanceMatrix.needsUpdate=!0,this.ribbons.instanceMatrix.needsUpdate=!0,this.ribbons.instanceColor&&(this.ribbons.instanceColor.needsUpdate=!0);const p=e.time-this.impactTime;if(this.wave.visible=p>=0&&p<1.2,this.column.visible=p>=0&&p<.22&&!this.reduced,this.wave.visible&&(this.wave.position.set(this.ix,i+.038,this.iz),this.wave.scale.setScalar(.3+Math.min(1,p/.45)*19),this.wave.rotation.z=p*.12,this.wave.material.opacity=Math.max(0,1-p/1.2)*(this.reduced?.38:.95)),this.column.visible){const m=(1-p/.22)*2.8;this.column.position.set(this.ix,i+m/2,this.iz),this.column.scale.set(1,m,1),this.column.material.opacity=(1-p/.22)*.72}this.contactStar.visible=p>=0&&p<.32,this.shockRing.visible=p>=0&&p<.55,this.contactStar.visible&&(this.contactStar.position.set(this.ix,i+.043,this.iz),this.contactStar.scale.setScalar(.4+p*3),this.contactStar.material.opacity=(1-p/.32)*(this.reduced?.3:.85)),this.shockRing.visible&&(this.shockRing.position.set(this.ix,i+.046,this.iz),this.shockRing.scale.setScalar(.35+19*Math.min(1,p/.45)),this.shockRing.material.opacity=(1-p/.55)*(this.reduced?.16:.55)),this.fragments.count=!this.reduced&&p>=0&&p<.55?24:0;for(let m=0;m<this.fragments.count;m++){const b=m*2.399963,g=1.3+m%5*.33;this.d.position.set(this.ix+Math.sin(b)*p*g,i+.055+Math.max(0,(1.8+m%3*.35)*p-3.6*p*p),this.iz+Math.cos(b)*p*g),this.d.rotation.set(p*5+m,b,p*3),this.d.scale.setScalar(1-p/.55),this.d.updateMatrix(),this.fragments.setMatrixAt(m,this.d.matrix)}this.fragments.instanceMatrix.needsUpdate=!0,this.fragments.material.opacity=Math.max(0,1-p/.55)}stats(){return{surfaceProfile:Un.id,phase:this.phase,bolts:this.core.count,boltCapacity:en.cap,slamWave:this.wave.visible,groundSword:this.worldSword?.visible??!1,groundTip:this.worldSword?.visible?this.worldSword.getObjectByName("sword_tip")?.getWorldPosition(new _).toArray():null,handCount:this.hands.length,reducedEffects:this.reduced,impactFragments:this.fragments.count,fragmentCapacity:24,contactStar:this.contactStar.visible,shellTextureSize:128}}}const on={color:1574671,floorSize:192,snap:16,period:12,fadeNear:24,fadeFar:62},Qo=(r,e)=>(r%e+e)%e;function Jo(r,e,n=0){return{flow:[Qo(r/on.period+n*.008,1),Qo(e/on.period-n*.004,1)],glyphCell:[Math.floor(r/.9),Math.floor(e/1.3)]}}function zc(){const e=new Uint8Array(1048576),n=Math.PI*2;for(let i=0;i<512;i++)for(let s=0;s<512;s++){const o=s/512*n,a=i/512*n,l=Math.sin(o+Math.sin(a)*1.8)+.5*Math.sin(2*a-o),c=Math.sin(2*o+a+l)+.5*Math.sin(o-3*a+l*.7),h=Math.sin(7*o-5*a+c*3)+.45*Math.cos(11*o+7*a+l*2),u=(i*512+s)*4;e[u]=Math.round(128+c*69),e[u+1]=Math.round(128+h*75),e[u+2]=Math.round(128+Math.sin(3*o+2*a+l)*120),e[u+3]=255}const t=new zi(e,512,512,Ai);return t.name="red-infinity-seamless-flow",t.wrapS=t.wrapT=ln,t.magFilter=Sn,t.minFilter=ot,t.generateMipmaps=!0,t.needsUpdate=!0,t}function Ac(){const n=new Uint8Array(2048),t=[["01110","11011","11011","11011","11011","11011","01110"],["00100","01100","00100","00100","00100","00100","01110"]];for(let s=0;s<2;s++)for(let o=0;o<7;o++)for(let a=0;a<5;a++)if(t[s][o][a]==="1")for(let l=0;l<2;l++)for(let c=0;c<2;c++){const h=((13-o*2+l)*32+s*16+3+a*2+c)*4;n[h]=n[h+1]=n[h+2]=n[h+3]=255}const i=new zi(n,32,16,Ai);return i.name="red-infinity-binary-01",i.magFilter=Ti,i.minFilter=ot,i.generateMipmaps=!0,i.needsUpdate=!0,i}const Rc=`
varying vec3 vArenaWorld;
void main(){
 vec4 world=modelMatrix*vec4(position,1.0);
 vArenaWorld=world.xyz;
 gl_Position=projectionMatrix*viewMatrix*world;
}`,_c=`
// RK_RED_INFINITY_SURFACE
uniform sampler2D flowMap;
uniform sampler2D glyphMap;
uniform float arenaTime;
uniform float debugGrid;
uniform vec3 horizonColor;
varying vec3 vArenaWorld;
float cellHash(vec2 cell){return fract(sin(dot(cell,vec2(127.1,311.7)))*43758.5453);}
void main(){
 vec2 world=vArenaWorld.xz;
 float distanceToEye=length(world-cameraPosition.xz);
 vec2 uv=world/12.0;
 vec3 field=texture2D(flowMap,uv+vec2(arenaTime*.008,-arenaTime*.004)).rgb;
 vec3 second=texture2D(flowMap,uv.yx*.5+vec2(-arenaTime*.003,arenaTime*.006)+field.rg*.11).rgb;
 float liquid=field.r*.64+second.r*.36;
 float folds=sin((liquid+field.g*.09)*29.0)*.5+.5;
 vec3 dark=vec3(.012,.0018,.0045),crimson=vec3(.125,.0045,.018);
 vec3 color=mix(dark,crimson,smoothstep(.25,.8,liquid));
 // Broad, sparse highlights suggest a wet surface without reflecting another scene.
 float wet=smoothstep(.78,.97,folds)*smoothstep(.42,.7,second.b);
 color+=vec3(.15,.035,.042)*wet*.6;
 color+=vec3(.024,.002,.008)*smoothstep(.8,.98,field.g);
 vec2 glyphSpace=world/vec2(.9,1.3)+vec2((field.r-.5)*.18,arenaTime*.075);
 vec2 cell=floor(glyphSpace),within=fract(glyphSpace);
 float digit=step(.5,cellHash(cell));
 float glyph=texture2D(glyphMap,vec2((within.x+digit)*.5,within.y)).r;
 float stream=.35+.65*smoothstep(.26,.75,second.g);
 float glyphRange=1.0-smoothstep(13.0,29.0,distanceToEye);
 color+=vec3(.17,.028,.046)*glyph*stream*glyphRange;
 if(debugGrid>.5){
  vec2 cellLine=abs(fract(world)-.5)/max(fwidth(world),vec2(.0001));
  float line=1.0-min(min(cellLine.x,cellLine.y),1.0);
  color=mix(vec3(.025,.003,.009),vec3(.16,.35,.3),line*.75);
 }
 float fade=smoothstep(24.0,62.0,distanceToEye);
 color=mix(color,horizonColor,fade);
 gl_FragColor=vec4(color,1.0);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;class Ic{mesh;fallback=new q({color:4330273,fog:!0,toneMapped:!1});shader=null;textures=[];mode="liquid";failure=null;time=0;reduced=!1;warmed=!1;constructor(){this.fallback.name="red-infinity-flat-fallback",this.mesh=new P(new fe(on.floorSize,on.floorSize).rotateX(-Math.PI/2),this.fallback),this.mesh.name="red-infinity-reused-ground",this.mesh.frustumCulled=!1,this.mesh.visible=!1;try{const e=zc();this.textures.push(e);const n=Ac();this.textures.push(n),this.shader=new Ri({name:"red-infinity-liquid-binary",vertexShader:Rc,fragmentShader:_c,depthWrite:!0,transparent:!1,toneMapped:!1,uniforms:{flowMap:{value:e},glyphMap:{value:n},arenaTime:{value:0},debugGrid:{value:0},horizonColor:{value:new V(on.color)}}}),this.mesh.material=this.shader}catch{this.fail("texture-creation")}}fail(e){this.failure=e,this.mesh.material=this.fallback}setMode(e){this.mode=e,this.applyMode()}setReduced(e){this.reduced=e,this.applyMode()}setHorizon(e){this.shader&&this.shader.uniforms.horizonColor.value.copy(e)}applyMode(){this.mesh.material=!this.failure&&!this.reduced&&this.mode!=="flat"&&this.shader?this.shader:this.fallback,this.shader&&(this.shader.uniforms.debugGrid.value=this.mode==="grid"?1:0)}warm(e){if(this.warmed)return;this.warmed=!0;const n=new tt,t=new wi(75,1,.1,8),i=new P(this.mesh.geometry,this.shader??this.fallback);n.add(i),t.position.set(0,2,1),t.lookAt(0,0,0);const s=new Xs(4,4),o=e.getRenderTarget(),a=e.debug.onShaderError;e.debug.onShaderError=(l,c,h,u)=>{l.getShaderSource(u)?.includes("RK_RED_INFINITY_SURFACE")?this.fail("shader-compile"):a?a(l,c,h,u):console.error("Shader compilation failed while preparing arena.")};try{e.setRenderTarget(s),e.compile(n,t),e.render(n,t)}catch{this.fail("shader-warmup")}finally{e.setRenderTarget(o),e.debug.onShaderError=a,s.dispose(),this.applyMode()}}update(e,n,t){this.mesh.position.set(Math.round(e/on.snap)*on.snap,0,Math.round(n/on.snap)*on.snap),this.time=this.mode==="static"?0:t,this.shader&&(this.shader.uniforms.arenaTime.value=this.time)}stats(){return{mode:this.mesh.material===this.fallback?"flat":this.mode,requestedMode:this.mode,failure:this.failure,warmed:this.warmed,visible:this.mesh.visible,center:{x:this.mesh.position.x,y:this.mesh.position.y,z:this.mesh.position.z},size:on.floorSize,geometryCount:1,triangles:2,textures:this.textures.length,textureSizes:this.textures.map(e=>({width:e.image.width,height:e.image.height})),textureBytesWithMipmaps:Math.ceil((512*512*4+512*4)*4/3),animationTime:this.time,patternAtOrigin:Jo(0,0,this.time),patternAtNegativeMark:Jo(-17.25,-9.75,this.time)}}dispose(){this.shader?.dispose(),this.fallback.dispose();for(const e of this.textures)e.dispose();this.mesh.geometry.dispose()}}const Lc=[15828937,10941663,12886266,16769722,15621876,10333695],me=new we;function Is(r,e=.35,n=.42){return new U({color:r,metalness:e,roughness:n})}function Ui(r,e=1){return new U({color:r,emissive:r,emissiveIntensity:e,metalness:.25,roughness:.3})}class Cc{constructor(e,n="grin",t=!1,i=Wr()){this.bossMode=n,this.twoLevelMode=t,this.visualVT1=i,this.renderer=new Or({canvas:e,antialias:!1,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=ge,this.renderer.toneMapping=Nr,this.renderer.toneMappingExposure=.92,this.renderer.autoClear=!1,this.renderer.info.autoReset=!1,this.scene.background=new V(2497330),this.scene.fog=new xn(2497330,14,36);const s=new Cs(this.renderer),o=new ic;this.envTarget=s.fromScene(o,.06),this.scene.environment=this.envTarget.texture,this.foreground.environment=this.envTarget.texture,o.dispose(),s.dispose(),this.scene.add(this.legacyLights),this.legacyLights.add(new zn(14540799,3287100,.62));const a=new Pe(16771541,2.25);a.position.set(-4,8,4),this.legacyLights.add(a);const l=new Pe(10083583,.65);l.position.set(5,3,-5),this.legacyLights.add(l),this.foreground.add(new zn(16774626,5465216,1.05));const c=new Pe(16777215,2);c.position.set(-1,3,3),this.foreground.add(c),this.makeArena(),this.forestGrotto=new jo(this.scene),this.g2Boss=this.twoLevelMode?new $0:null,this.levelTwo=new dc(this.scene,this.g2Boss),this.scene.add(this.redFloor.mesh),this.scene.add(this.neonSky.mesh);const h=new URLSearchParams(location.search).get("arena_surface");(h==="liquid"||h==="static"||h==="flat"||h==="grid")&&this.redFloor.setMode(h),this.fractal=new Sc(this.scene,this.foreground),this.twoLevelMode&&(this.g2Hearts=new Ql,this.human=new Fr,this.human.scene.environment=this.envTarget.texture,this.twoWorlds=new tc(this.scene,this.visualVT1),this.fractal.setHumanPOV(!0),this.fractal.setExternalBolts(!0),this.neuralCrowd=new ql(this.scene,this.assets,"articulated",this.visualVT1)),this.grenade=new vc(this.scene,this.foreground),this.hitEffects=new bc(this.scene,this.fractal.effectTexture,this.twoLevelMode),this.bullets=new X(new zt(.095,1),Ui(16746475,3),G.projectileCap),this.bullets.instanceMatrix.setUsage(le),this.bullets.frustumCulled=!1,this.scene.add(this.bullets),this.bullets.count=0,this.shadowPool=new X(new St(.46,16),new q({color:1510695,transparent:!0,opacity:.28,depthWrite:!1}),G.hardCap),this.shadowPool.instanceMatrix.setUsage(le),this.shadowPool.frustumCulled=!1,this.scene.add(this.shadowPool),this.shadowPool.count=0,this.shooterWarnings=new X(new Ke(.14,.2,20),new q({color:16729316,side:re,transparent:!0,opacity:.85}),G.hardCap),this.shooterWarnings.instanceMatrix.setUsage(le),this.shooterWarnings.frustumCulled=!1,this.shooterWarnings.count=0,this.scene.add(this.shooterWarnings),this.bossLane=new P(new fe(2.72,1).rotateX(-Math.PI/2),new q({color:16727454,transparent:!0,opacity:.35,depthWrite:!1,side:re})),this.bossLane.visible=!1,this.scene.add(this.bossLane)}bossMode;twoLevelMode;visualVT1;assets=new As(2);stageAssets=new As(2);stageLoadGeneration=0;disposed=!1;enhancementLoad=null;levelTwoLoad=null;environmentLoad=null;environmentGPUReady=!1;forestEnvironmentActive=!1;legacyLights=new W;legacyEnvironmentIntensity=1;legacyForegroundIntensity=1;instanceColor=new V;markerPosition=new _;previewEnemies=[{id:1,role:"chaser",x:0,z:-.8},{id:2,role:"shooter",x:1.6,z:-2.4},{id:3,role:"chaser",x:-1.4,z:-2.3}].map(e=>({...e,age:0,flash:0,radius:.44,health:42,maxHealth:42,shotTimer:1,heading:0}));renderer;scene=new tt;camera=new wi(76,1,.06,80);foreground=new tt;viewCamera=new wi(76,1,.01,10);loaded=[];enemyPools={chaser:[],shooter:[]};shadowPool;shooterWarnings;bullets;boss=null;grin=null;hitEffects;fractal;human=null;g2Hearts=null;g2Boss=null;twoWorlds=null;neuralCrowd=null;resetCrowdPresentation(){this.neuralCrowd?.reset()}neuralMuzzle(){return this.human?.muzzle(this.camera)??null}grenade;bossGlow=[];musicMaterials=[];musicLevel=0;bossLane;envTarget;viewport={width:1280,height:720};arenaWalls=[];enclosedFloor=new W;floorMaterial=null;wallMaterial=null;arenaDetails;levelTwo;levelThree=null;levelFour=null;levelFourError=null;labActive=!1;labBackground=new V(2631224);labFog=new xn(2631224,18,36);oceanActive=!1;oceanBackground=new V(9743798);oceanFog=new xn(9743798,340,670);forestGrotto;themedStage=1;levelTwoError=null;environmentError=null;get levelTwoReady(){return this.levelTwo.stats().loaded}get environmentReady(){return this.environmentGPUReady&&this.forestGrotto.stats().loaded&&this.levelTwoReady}levelTwoStats(){return this.levelTwo.stats()}environmentStats(){return{...this.forestGrotto.stats(),gpuReady:this.environmentGPUReady,error:this.environmentError}}enclosedFloorState=[];redFloor=new Ic;neonSky=new sc;arenaActive=!1;arenaCollapse=0;arenaAttempt=-1;arenaTime=0;normalBackground=new V(2497330);normalFog=new xn(2497330,14,36);arenaFog=new xn(on.color,48,74);arenaBackground=new V(on.color);arenaColor=new V;reducedEffects=!1;frames=0;box(e,n,t,i,s,o,a,l=this.scene){const c=new ve(e,n,t);if(a===this.wallMaterial){const u=c.getAttribute("uv");for(let d=0;d<u.count;d++)u.setXY(d,u.getX(d)*Math.max(e,t)/2,u.getY(d)*n/2)}const h=new P(c,a);return h.position.set(i-l.position.x,s-l.position.y,o-l.position.z),l.add(h),h}makeArena(){const{width:e,depth:n}=G;this.enclosedFloor.name="accepted-enclosed-floor",this.scene.add(this.enclosedFloor);for(const[E,y,M,z]of[[0,-n/2,"x",-1],[0,n/2,"x",1],[-e/2,0,"z",1],[e/2,0,"z",-1]]){const T=new W;T.name=`collapsing-wall-${this.arenaWalls.length}`,T.position.set(E,0,y),this.scene.add(T),this.arenaWalls.push({group:T,axis:M,sign:z,position:T.position.clone(),rotation:T.rotation.clone(),visible:!0})}const[t,i,s,o]=this.arenaWalls.map(E=>E.group),a=Is(8749714,.12,.76);this.floorMaterial=a,this.box(e,.2,n,0,-.1,0,a,this.enclosedFloor);const l=Is(12366282,.84,.42),c=Is(2169648,.7,.4);this.wallMaterial=l;const h=Ui(15562460,1.2),u=Ui(10285013,1.1),d=h.clone(),p=u.clone();this.musicMaterials.push({material:d,base:1.2},{material:p,base:1.1}),this.box(e+.3,4.8,.2,0,2.4,-n/2,l,t),this.box(e+.3,4.8,.2,0,2.4,n/2,l,i),this.box(.2,4.8,n,-e/2,2.4,0,l,s),this.box(.2,4.8,n,e/2,2.4,0,l,o);for(const E of[-n/2+.12,n/2-.12]){const y=E<0?t:i;this.box(e,.085,.06,0,.14,E,h,y),this.box(e,.07,.05,0,3.5,E,p,y);for(let M=-6;M<=6;M+=2)this.box(.06,4.5,.07,M,2.25,E,c,y),this.box(.025,1.3,.08,M,.85,E,h,y)}for(const E of[-e/2+.12,e/2-.12]){const y=E<0?s:o;this.box(.05,.08,n,E,.14,0,u,y),this.box(.05,.07,n,E,3.5,0,d,y);for(let M=-6;M<=6;M+=2)this.box(.07,4.5,.06,E,2.25,M,c,y),this.box(.08,1.3,.025,E,.85,M,u,y)}const m=new Dr(14,28,14126542,7889531);m.position.y=.012,m.scale.x=e/14,m.scale.z=n/14,m.material.transparent=!0,m.material.opacity=.09,this.enclosedFloor.add(m);for(let E=0;E<3;E++){const y=new P(new Ke(1.65+E*.12,1.67+E*.12,96),new q({color:Lc[E],transparent:!0,opacity:.5,side:re}));y.rotation.x=-Math.PI/2,y.position.y=.02,this.enclosedFloor.add(y)}const b=document.createElement("canvas");b.width=1024,b.height=256;const g=b.getContext("2d");g.clearRect(0,0,1024,256),g.textAlign="center",g.fillStyle="#ecb9e4",g.font="900 83px Arial",g.fillText("EVERYONE APPROVES.",512,110),g.fillStyle="#a6e2d9",g.font="28px monospace",g.fillText("01   /   SYCOPHANCY",512,176);const f=new At(b);f.colorSpace=ge;const w=new P(new fe(6.6,1.65),new q({map:f,transparent:!0,depthWrite:!1}));w.position.set(0,3.18,.15),t.add(w);const v=Ui(16361948,.7);this.musicMaterials.push({material:v,base:.7});for(const E of[-4.5,4.5]){const y=new P(new Te(.5,.035,6,32),v);y.position.set(E,2.6,.2),t.add(y);for(const z of[-.15,.15])this.box(.05,.14,.045,E+z,2.7,-n/2+.23,v,t);const M=new P(new Te(.27,.026,4,20,Math.PI),v);M.rotation.z=Math.PI,M.position.set(E,2.59,.23),t.add(M)}this.arenaDetails=new oc(this.arenaWalls.map(E=>E.group),this.enclosedFloor,e,n),this.enclosedFloor.traverse(E=>{if(E instanceof P||E instanceof Us)for(const y of Array.isArray(E.material)?E.material:[E.material])this.enclosedFloorState.push({material:y,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite,polygonOffset:y.polygonOffset,polygonOffsetFactor:y.polygonOffsetFactor,polygonOffsetUnits:y.polygonOffsetUnits})})}updateArena(e,n){if(!(!n&&e.arena.mode==="red_infinity"&&e.arena.active&&["reveal","boss","defeat"].includes(e.phase))){if(this.arenaActive){for(const l of this.arenaWalls)l.group.position.copy(l.position),l.group.rotation.copy(l.rotation),l.group.visible=l.visible;for(const l of this.enclosedFloorState){const c=l.material.transparent!==l.transparent;Object.assign(l.material,{opacity:l.opacity,transparent:l.transparent,depthWrite:l.depthWrite,polygonOffset:l.polygonOffset,polygonOffsetFactor:l.polygonOffsetFactor,polygonOffsetUnits:l.polygonOffsetUnits}),c&&(l.material.needsUpdate=!0)}this.enclosedFloor.traverse(l=>{l.renderOrder=0}),this.enclosedFloor.visible=!0,this.scene.background=this.normalBackground,this.scene.fog=this.normalFog}this.redFloor.mesh.visible=!1,this.arenaActive=!1,this.arenaCollapse=0,this.arenaAttempt=-1,this.arenaTime=0;return}(this.arenaAttempt!==e.attemptId||!this.arenaActive)&&(this.arenaAttempt=e.attemptId,this.arenaTime=e.time),this.arenaActive=!0;const i=e.phase==="reveal"?Math.min(1,Math.max(0,e.phaseTime/Re.revealSeconds)):1,s=Math.min(1,i/.88),o=s*s*(3-2*s)*95*Math.PI/180;this.arenaCollapse=i;for(const l of this.arenaWalls)l.group.rotation[l.axis]=l.rotation[l.axis]+l.sign*o,l.group.position.y=l.position.y-Math.max(0,(i-.7)/.3)*.5,l.group.visible=i<.97;const a=Math.min(1,i/.8);if(this.enclosedFloor.visible=a<1,a<1){for(const l of this.enclosedFloorState){const c=!l.material.transparent;l.material.transparent=!0,l.material.depthWrite=!1,l.material.opacity=l.opacity*(1-a),l.material.polygonOffset=!0,l.material.polygonOffsetFactor=-1,l.material.polygonOffsetUnits=-1,c&&(l.material.needsUpdate=!0)}this.enclosedFloor.traverse(l=>{l.renderOrder=1})}this.redFloor.mesh.visible=!0,this.redFloor.update(e.player.x,e.player.z,e.time-this.arenaTime),this.arenaColor.copy(this.normalBackground).lerp(this.arenaBackground,a),this.scene.background=this.arenaColor,this.arenaFog.color.copy(this.arenaColor),this.arenaFog.near=14+34*a,this.arenaFog.far=36+38*a,this.scene.fog=this.arenaFog,this.redFloor.setHorizon(this.arenaColor)}async loadAssets(e){this.g2Boss&&await this.g2Boss.load(this.assets),this.neuralCrowd&&(await this.neuralCrowd.load(),this.loaded.push("all-eighteen-neural-identities"),e("all-eighteen-neural-identities")),this.visualVT1&&this.twoWorlds&&(await this.twoWorlds.load(this.assets,this.renderer),this.loaded.push("vt1-authored-atrium"),e("vt1-authored-atrium"));for(const n of["smile-chaser","smile-shooter",this.bossMode==="classic"?"grin-orb":"grin-orb-v2",...this.bossMode==="grin"?["smile-orb"]:[],"machine-gun-v2","rainbow-sword-v2"]){const t=this.twoLevelMode&&n==="grin-orb-v2"?"/assets/graphics-g2/grin-visual.glb":`/assets/${n}.glb`,i=await it(this.assets,t);if(i.updateMatrixWorld(!0),n==="smile-chaser"||n==="smile-shooter"){const s=n==="smile-chaser"?"chaser":"shooter",o=new Map;i.traverse(a=>{if(!(a instanceof P))return;const l=a.material,c=a.geometry.clone().applyMatrix4(a.matrixWorld);c.deleteAttribute("uv"),c.deleteAttribute("tangent"),c.deleteAttribute("color");const h=l.name||l.uuid,u=o.get(h)||{mat:l,geoms:[]};u.geoms.push(c),o.set(h,u)});for(const a of o.values()){const l=En(a.geoms,!1);if(!l)throw new Error("Cannot merge enemy geometry");const c=a.mat.clone();c instanceof U&&(c.roughness=Math.max(c.roughness,.3),c.envMapIntensity=.65);const h=new X(l,c,G.hardCap);h.instanceMatrix.setUsage(le),h.frustumCulled=!1,h.count=0,this.enemyPools[s].push(h),this.scene.add(h),a.geoms.forEach(u=>u.dispose())}i.traverse(a=>{if(a instanceof P){a.geometry.dispose();for(const l of Array.isArray(a.material)?a.material:[a.material])l.dispose()}})}else n==="grin-orb"||n==="grin-orb-v2"?(this.g2Boss?.apply(i),this.boss=i,i.visible=!1,this.scene.add(i),n==="grin-orb-v2"&&(this.grin=new gc(this.scene,i)),i.traverse(s=>{s instanceof P&&s.material instanceof U&&s.material.name==="RK_Magenta_Emission"&&!this.bossGlow.includes(s.material)&&this.bossGlow.push(s.material)})):n==="smile-orb"?this.grin.addProjectileAsset(i):n==="machine-gun-v2"?this.fractal.addGun(i):this.fractal.addSword(i);this.loaded.push(n),e(n)}this.redFloor.warm(this.renderer)}preloadStage(e,n=()=>{}){if(e===3)return this.levelThree||(this.levelThree=new Ko,this.scene.add(this.levelThree.group)),Promise.resolve();if(e===4){if(!this.levelFour&&!this.levelFourError)try{this.levelFour=new pc,this.scene.add(this.levelFour.group),this.loaded.includes("offloading")||this.loaded.push("offloading"),n("offloading")}catch(i){this.levelFourError="Level 4 art could not initialize. Retry loading or return to the menu.",console.warn(this.levelFourError,i)}return Promise.resolve()}if(wa(e).assets!=="anthropomorphism")return Promise.resolve();if(this.levelTwoLoad)return this.levelTwoLoad;const t=this.stageLoadGeneration;return this.levelTwoLoad=this.levelTwo.load(this.stageAssets).then(()=>{this.disposed||t!==this.stageLoadGeneration||(this.loaded.includes("anthropomorphism")||this.loaded.push("anthropomorphism"),n("anthropomorphism"))}).catch(i=>{this.disposed||t!==this.stageLoadGeneration||(this.levelTwoError="Level 2 art could not load. Retry loading or return to the menu.",console.warn(this.levelTwoError,i))}),this.levelTwoLoad}stageReady(e){return e===4?!!this.levelFour&&!this.levelFourError:e===2?this.levelTwoReady:!0}stageError(e){return e===4?this.levelFourError:e===2?this.levelTwoError:null}retryStage(e,n=!1){e===2&&this.retryStageTwo(n),e===4&&(this.levelFour?.dispose(),this.levelFour=null,this.levelFourError=null,this.preloadStage(e))}preloadEnvironment(e=()=>{}){const n=this.stageLoadGeneration;return this.environmentLoad??=this.prepareEnvironment(e).catch(t=>{throw!this.disposed&&n===this.stageLoadGeneration&&(this.environmentError="The forest and grotto could not load. Retry loading or return to the menu."),t})}async prepareEnvironment(e){const n=this.stageLoadGeneration,t=this.forestGrotto,i=this.levelTwo,s=this.stageAssets,o=()=>this.disposed||n!==this.stageLoadGeneration;if(await this.preloadStage(2,e),o()||!i.stats().loaded)throw new Error("Level 2 actors unavailable");if(await t.load(s,this.renderer),o())throw new Error("Stage load superseded");if(await s.load("forest-grotto-gpu",async a=>{const l=new Set(t.textureSet());i.root.traverse(g=>{if(g instanceof P)for(const f of Array.isArray(g.material)?g.material:[g.material])for(const w of Object.values(f))w instanceof $n&&l.add(w)});for(const g of l)this.renderer.initTexture(g);const c=new tt,h=t.root.clone(!0),u=i.root.clone(!0);c.environment=t.environmentTexture(),c.add(h,u);for(const g of[h,u])g.traverse(f=>{f.visible=!0,f instanceof P&&(f.frustumCulled=!1,f instanceof X&&f.count===0&&(f.count=1))});const d=h.getObjectByName("sunrise-pine-clearing"),p=h.getObjectByName("dry-shaft-grotto"),m=new Xs(2,2),b=new wi(76,1,.05,90);try{for(const g of[!0,!1]){if(a.aborted||o())throw new Error("Environment warmup cancelled");if(d.visible=g,p.visible=!g,c.environmentIntensity=g?.58:.35,c.fog=new xn(g?14076848:2369075,g?22:24,g?59:55),b.position.set(0,g?1.62:-16.38,3.9),b.lookAt(0,g?1.5:-16.5,-2),this.renderer.compile(c,b),a.aborted||o())throw new Error("Environment warmup cancelled");const f=this.renderer.getRenderTarget();try{this.renderer.setRenderTarget(m),this.renderer.clear(),this.renderer.render(c,b)}finally{this.renderer.setRenderTarget(f)}}}finally{m.dispose(),c.traverse(g=>{g instanceof X&&g.dispose()}),c.clear()}},()=>{},2e4),o())throw new Error("Stage load superseded");this.environmentGPUReady=!0,this.loaded.includes("forest-grotto")||this.loaded.push("forest-grotto"),e("forest-grotto")}retryStageTwo(e=!1){if(this.stageLoadGeneration++,this.stageAssets.dispose(),this.stageAssets=new As(2),this.levelTwoLoad=null,this.environmentLoad=null,this.levelTwoError=null,this.environmentError=null,this.environmentGPUReady=!1,e||!this.forestGrotto.stats().loaded){const n=this.forestGrotto;n.dispose(),n.root.removeFromParent();const t=n.resources();n.root.traverse(i=>{i instanceof X&&i.dispose()}),t.geometries.forEach(i=>i.dispose()),t.materials.forEach(i=>i.dispose()),t.textures.forEach(i=>i.dispose()),this.forestGrotto=new jo(this.scene)}}loadEnhancements(e=()=>{}){return this.enhancementLoad??=this.enhance(e)}async enhance(e){try{const n=await it(this.assets,"/assets/binary-grenade.glb",8e3);this.grenade.addAsset(n),this.loaded.push("binary-grenade"),e("binary-grenade")}catch(n){if(this.disposed)return;console.warn("Binary grenade uses readable fallback; authored art did not load.",n),e("binary-grenade fallback")}if(this.grin){try{const n=await it(this.assets,"/assets/super-like.glb",8e3);this.grin.addSuperLikeAsset(n),this.loaded.push("super-like"),e("super-like")}catch(n){if(this.disposed)return;console.warn("Super Like uses readable fallback; authored art did not load.",n),e("super-like fallback")}this.grin.setReduced(this.reducedEffects)}if(await this.loadPhotographicSurfaces(),this.twoWorlds&&await this.twoWorlds.load(this.assets,this.renderer),!this.disposed&&(await this.arenaDetails.load(this.assets),!this.disposed))try{const n=await Fs(this.assets,"/assets/pbr/approaching_storm_2k.hdr");this.neonSky.setTexture(n)}catch(n){this.disposed||console.warn("Cloud photograph unavailable; using the procedural eclipse sky.",n)}}async loadPhotographicSurfaces(){const e="/assets/pbr/",n=async(i,s=1,o=s)=>{const a=await st(this.assets,e+i);return a.wrapS=a.wrapT=ln,a.repeat.set(s,o),a.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),a},t=[];try{const i=await n("metal_plate_02_nor_gl_1k.jpg");t.push(i);const s=await n("metal_plate_02_rough_1k.jpg");t.push(s),this.fractal.setSurfaceMaps(i,s),this.wallMaterial&&(this.wallMaterial.normalMap=i,this.wallMaterial.roughnessMap=s,this.wallMaterial.normalScale.set(.16,.16),this.wallMaterial.needsUpdate=!0),t.length=0;const o=await n("concrete_floor_diff_1k.jpg",G.width/2.1,G.depth/2.1);t.push(o),o.colorSpace=ge;const a=await n("concrete_floor_nor_gl_1k.jpg",G.width/2.1,G.depth/2.1);t.push(a);const l=await n("concrete_floor_rough_1k.jpg",G.width/2.1,G.depth/2.1);t.push(l),this.floorMaterial&&(Object.assign(this.floorMaterial,{map:o,normalMap:a,roughnessMap:l,envMapIntensity:.55}),this.floorMaterial.normalScale.set(.38,.38),this.floorMaterial.needsUpdate=!0,t.length=0)}catch(i){this.disposed||console.warn("Photographic surface maps unavailable; using base materials.",i)}finally{t.forEach(i=>i.dispose())}if(!this.disposed)try{const i=await Fs(this.assets,e+"studio_small_01_1k.hdr"),s=new Cs(this.renderer);try{const o=s.fromEquirectangular(i);this.envTarget.dispose(),this.envTarget=o,this.forestEnvironmentActive||(this.scene.environment=this.foreground.environment=o.texture),this.legacyEnvironmentIntensity=.55,this.legacyForegroundIntensity=.85,this.forestEnvironmentActive||(this.scene.environmentIntensity=.55,this.foreground.environmentIntensity=.85),this.scene.environmentRotation.y=this.foreground.environmentRotation.y=.65}finally{i.dispose(),s.dispose()}}catch(i){this.disposed||console.warn("Studio reflection map unavailable; using room reflections.",i)}}setTouchProfile(e){this.renderer.setPixelRatio(Math.min(devicePixelRatio,e?1:1.5))}resize(e,n){this.viewport={width:e,height:n},this.human?.resize(e,n),this.g2Hearts?.resize(e,n),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.viewCamera.aspect=e/n,this.viewCamera.updateProjectionMatrix()}render(e,n,t=!1,i=!1){this.frames++,this.themedStage!==e.stage&&(this.themedStage=e.stage,this.floorMaterial?.color.setHex(e.stage===2?5126214:8749714),this.wallMaterial?.color.setHex(e.stage===2?6634064:12366282),this.normalBackground.setHex(e.stage===2?2364198:2497330),this.normalFog.color.copy(this.normalBackground)),this.updateArena(e,t);const s=e.stage===3,o=e.stage===4;if(!s&&this.oceanActive||!o&&this.labActive){this.enclosedFloor.visible=!this.arenaActive;for(const m of this.arenaWalls)m.group.visible=!this.arenaActive&&m.visible;this.scene.background=this.arenaActive?this.arenaColor:this.normalBackground,this.scene.fog=this.arenaActive?this.arenaFog:this.normalFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=this.legacyEnvironmentIntensity,this.foreground.environmentIntensity=this.legacyForegroundIntensity}const a=this.forestGrotto.update(e,t,this.scene);if(this.legacyLights.visible=!a&&!s&&!o,a){this.enclosedFloor.visible=!1;for(const m of this.arenaWalls)m.group.visible=!1;this.redFloor.mesh.visible=!1,this.foreground.environment=this.forestGrotto.environmentTexture(),this.foreground.environmentIntensity=.7}else if(this.forestEnvironmentActive){this.enclosedFloor.visible=!0;for(const m of this.arenaWalls)m.group.visible=m.visible;this.scene.background=this.normalBackground,this.scene.fog=this.normalFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=this.legacyEnvironmentIntensity,this.foreground.environmentIntensity=this.legacyForegroundIntensity}if(this.forestEnvironmentActive=a,s){this.levelThree||(this.levelThree=new Ko,this.scene.add(this.levelThree.group)),this.enclosedFloor.visible=!1;for(const m of this.arenaWalls)m.group.visible=!1;this.redFloor.mesh.visible=!1,this.scene.background=this.oceanBackground,this.scene.fog=this.oceanFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=.35,this.foreground.environmentIntensity=.7}if(this.oceanActive=s,this.levelThree&&(this.levelThree.group.visible=s,s&&this.levelThree.update(e,this.reducedEffects)),o){!this.levelFour&&!this.levelFourError&&this.preloadStage(4),this.enclosedFloor.visible=!1;for(const m of this.arenaWalls)m.group.visible=!1;this.redFloor.mesh.visible=!1,this.scene.background=this.labBackground,this.scene.fog=this.labFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=.28,this.foreground.environmentIntensity=.7}this.labActive=o,this.levelFour&&(this.levelFour.group.visible=o,o&&this.levelFour.update(e,this.reducedEffects));const l=s?800:80;this.camera.far!==l&&(this.camera.far=l,this.camera.updateProjectionMatrix());const c=e.slam-be.impact,h=76+(!t&&!this.reducedEffects&&c>=0&&c<.18?Math.sin(c/.18*Math.PI)*1.25:0);if(this.camera.fov!==h&&(this.camera.fov=this.viewCamera.fov=h,this.camera.updateProjectionMatrix(),this.viewCamera.updateProjectionMatrix()),this.camera.rotation.order="YXZ",this.camera.position.set(e.player.x,(e.player.eyeHeight??G.eyeHeight)+e.player.y,e.player.z),this.camera.rotation.set(e.player.pitch,e.player.yaw,Math.sin(e.time*14)*e.player.dash*.018),t){const m=a?Me(e):0;this.camera.position.set(3.7,m+1.85,5.6),this.camera.lookAt(0,m+1.1,-1.2)}if(t&&s&&(this.camera.position.set(0,1.6,ne.spawnZ),this.camera.lookAt(0,2,ne.islandZ)),this.neonSky.update(this.camera,e.time,this.arenaActive?this.arenaColor:this.normalBackground,this.arenaCollapse,this.reducedEffects),this.neonSky.mesh.visible=!a&&!s&&!o,this.twoWorlds&&(this.twoWorlds.update(e,t),e.stage===1)){this.enclosedFloor.visible=!1;for(const m of this.arenaWalls)m.group.visible=!1;this.legacyLights.visible=!1,this.redFloor.mesh.visible=!1,this.neonSky.mesh.visible=!1,this.scene.environment=this.envTarget.texture}if(t)for(const m of this.previewEnemies)m.age=e.time,m.heading=Math.atan2(this.camera.position.x-m.x,this.camera.position.z-m.z);const u=this.twoLevelMode&&!t?[]:e.stage!==1?[]:t?this.previewEnemies:e.enemies;for(const m of["chaser","shooter"]){const b=u.filter(f=>f.role===m),g=b.map(Ps);for(const f of this.enemyPools[m])f.count=b.length,b.forEach((w,v)=>{const E=g[v];me.position.set(w.x,E.y,w.z),me.rotation.set(0,E.yaw,E.roll),me.scale.setScalar(1),me.updateMatrix(),f.setMatrixAt(v,me.matrix),f.setColorAt(v,this.instanceColor.setHex(w.flash>0?16770790:16777215))}),f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0)}this.shadowPool.count=u.length;const d=this.twoLevelMode||t||e.stage===2||o?[]:e.enemies.filter(m=>m.role==="shooter"&&m.shotTimer<.55&&!(m.stasis&&e.time<m.stasis.until));this.shooterWarnings.count=d.length,d.forEach((m,b)=>{const g=Math.atan2(e.player.x-m.x,e.player.z-m.z);me.position.set(m.x+Math.sin(g)*.6,1.38,m.z+Math.cos(g)*.6),me.rotation.set(0,g,0),me.scale.setScalar(1+(1-m.shotTimer/.55)*1.5),me.updateMatrix(),this.shooterWarnings.setMatrixAt(b,me.matrix)}),this.shooterWarnings.instanceMatrix.needsUpdate=!0,u.forEach((m,b)=>{me.position.set(m.x,.025,m.z),me.rotation.set(-Math.PI/2,0,0),me.scale.set(1,1,1),me.updateMatrix(),this.shadowPool.setMatrixAt(b,me.matrix)}),this.shadowPool.instanceMatrix.needsUpdate=!0;const p=(this.grin?e.projectiles.filter(m=>m.owner!=="boss"):e.projectiles).filter(m=>m.kind!=="mask"&&m.kind!=="brain"&&!(this.twoLevelMode&&this.neuralCrowd&&m.neural&&m.owner!=="boss"));if(this.bullets.count=p.length,p.forEach((m,b)=>{me.position.set(m.x,m.y,m.z),me.rotation.set(e.time*5,b,e.time*3),me.scale.setScalar(m.neural?(m.radius??.12)/.095:1),me.updateMatrix(),this.bullets.setMatrixAt(b,me.matrix)}),this.bullets.instanceMatrix.needsUpdate=!0,this.grin)this.grin.render(e);else if(this.boss&&(this.boss.visible=!!e.boss&&e.boss.variant==="classic"&&e.boss.health>0,e.boss)){const m=e.boss,b=!!m.stasis&&e.time<m.stasis.until,g=b?m.stasis.poseTime:m.presentationTime??e.time;this.boss.position.set(m.x,m.y+Math.sin(g*2)*.1,m.z),this.boss.rotation.y=b?m.stasis.heading??0:m.mode==="charge"?Math.atan2(m.dx,m.dz):Math.atan2(e.player.x-m.x,e.player.z-m.z),this.boss.scale.setScalar(1)}for(const m of this.bossGlow){const b=e.boss,g=b?.stasis&&e.time<b.stasis.until?b.stasis.poseTime:b?.presentationTime??e.time;m.emissiveIntensity=b?.mode==="warning"?5+4*Math.sin(g*18)**2:3.5}if(this.bossLane.visible=this.bossMode==="classic"&&e.boss?.variant==="classic"&&e.boss.mode==="warning"&&e.boss.attackIndex%2===0&&e.phase==="boss",this.bossLane.visible&&e.boss){const m=e.boss;let b=8.2*.86;for(const[g,f,w]of[[m.x,m.dx,G.width/2-1.08],[m.z,m.dz,G.depth/2-1.08]])Math.abs(f)>1e-8&&(b=Math.min(b,Math.max(0,(Math.sign(f)*w-g)/f)));this.bossLane.position.set(m.x+m.dx*b/2,.035,m.z+m.dz*b/2),this.bossLane.rotation.y=Math.atan2(m.dx,m.dz),this.bossLane.scale.z=b,this.bossLane.material.opacity=.16+.15*Math.sin(e.time*12)**2}if(this.camera.updateMatrixWorld(!0),this.levelTwo.render(this.twoLevelMode&&e.neural?{...e,enemies:[]}:e,t),this.neuralCrowd?.render(e,t),this.grenade.render(e,this.camera,t),this.fractal.render(e,this.camera,t),this.human&&(this.human.scene.environment=this.foreground.environment,this.human.scene.environmentIntensity=this.foreground.environmentIntensity,this.human.update(e,n,this.camera,t,this.fractal.humanGripPoses())),this.hitEffects.render(e,this.camera,!!this.neuralCrowd),this.renderer.info.reset(),this.renderer.clear(),this.renderer.render(this.scene,this.camera),!t&&!i){this.renderer.clearDepth(),this.renderer.render(this.foreground,this.viewCamera),this.human&&(this.renderer.clearDepth(),this.renderer.render(this.human.scene,this.human.camera));const m=document.getElementById("g2-heart-strip")?.getBoundingClientRect(),b=this.renderer.domElement.getBoundingClientRect();this.g2Hearts?.render(e,this.renderer,this.reducedEffects,!document.getElementById("hud")?.hidden,m?{left:m.left-b.left,top:m.top-b.top,width:m.width,height:m.height}:void 0)}}lockMarker(e){if(!e.lock.active||!e.lock.visible||!e.boss||e.phase!=="boss"&&!(e.stage===3&&e.phase==="swarm"))return null;const n=this.markerPosition.set(e.boss.x,e.boss.y,e.boss.z).project(this.camera);return n.z<-1||n.z>1||Math.abs(n.x)>1||Math.abs(n.y)>1?null:{x:(n.x+1)*.5*this.viewport.width,y:(1-n.y)*.5*this.viewport.height}}setReducedEffects(e){this.reducedEffects=e,this.human?.setReduced(e),this.twoWorlds?.setReduced(e),this.neuralCrowd?.setReduced(e),this.forestGrotto.setReduced(e),this.grin?.setReduced(e),this.fractal.setReduced(e),this.grenade.setReduced(e),this.hitEffects.setReduced(e),this.redFloor.setReduced(e),this.levelTwo.setReduced(e)}setArenaSurface(e){this.redFloor.setMode(e)}setMusicAccent(e){this.musicLevel=Number.isFinite(e)?Math.max(0,Math.min(.08,e)):0;for(const{material:n,base:t}of this.musicMaterials)n.emissiveIntensity=t*(1+this.musicLevel)}stats(){return{graphicsProfile:this.twoLevelMode?this.visualVT1?xe.id:Un.id:null,g2Hearts:this.g2Hearts?.stats()??null,g2BossMaterials:this.g2Boss?.stats()??null,neuralCrowd:this.neuralCrowd?.stats()??null,humanPOV:this.human?.stats()??null,twoWorlds:this.twoWorlds?.stats()??null,environment:this.environmentStats(),level4:this.levelFour?.stats()??{ready:!1,error:this.levelFourError},arenaDetails:this.arenaDetails.stats(),arena:{active:this.arenaActive,collapse:this.arenaCollapse,wallAssemblies:this.arenaWalls.length,walls:this.arenaWalls.map(e=>({visible:e.group.visible,rotation:e.group.rotation[e.axis],y:e.group.position.y,attachedObjects:e.group.children.length})),enclosedFloorVisible:this.enclosedFloor.visible,floor:this.redFloor.stats()},music:{accent:this.musicLevel,materialGroups:this.musicMaterials.length},weapons:this.fractal.stats(),grenade:this.grenade.stats(),hitEffects:this.hitEffects.stats(),bossEffects:this.grin?.stats()??null,frames:this.frames,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,assets:[...this.loaded],viewport:this.viewport}}dispose(){if(this.disposed)return;this.disposed=!0,this.g2Hearts?.dispose(),this.human?.dispose(),this.twoWorlds?.dispose(),this.neuralCrowd?.dispose(),this.levelThree?.dispose(),this.levelFour?.dispose(),this.stageLoadGeneration++,this.stageAssets.dispose(),this.assets.dispose(),this.scene.remove(this.neonSky.mesh),this.neonSky.dispose(),this.grin?.dispose(),this.grenade.dispose(),this.scene.remove(this.redFloor.mesh),this.redFloor.dispose(),this.forestGrotto.dispose();const e=this.arenaDetails.resources(),n=this.forestGrotto.resources(),t=new Set([...e.textures,...n.textures]),i=new Set([...e.materials,...n.materials]),s=new Set([...e.geometries,...n.geometries]);for(const o of[this.scene,this.foreground])o.traverse(a=>{if(a instanceof P||a instanceof as){s.add(a.geometry);for(const l of Array.isArray(a.material)?a.material:[a.material])i.add(l)}});for(const o of i){for(const a of Object.values(o))a instanceof $n&&t.add(a);o.dispose()}for(const o of t)this.g2Boss?.owns(o)||o.dispose();this.g2Boss?.dispose();for(const o of s)o.dispose();this.envTarget.dispose(),this.renderer.dispose()}}const Pc=["smile-protocol","approval-overload","grin-orb"];function Fa(r){return r.audio_mime??"audio/wav"}function Oc(r){let e=-1/0;return{...r,beats:r.beats.filter(n=>n.t_s-e<.65?!1:(e=n.t_s,!0))}}const jn=r=>typeof r=="number"&&Number.isFinite(r),ea=r=>jn(r)&&r>=0&&r<=1,Nc=r=>typeof r=="string"&&/^[a-f0-9]{64}$/.test(r),na=r=>typeof r=="string"&&/^\/music\/[a-z0-9._-]+$/.test(r);function Fc(r){return r.phase==="boss"?"grin-orb":r.phase==="transition"||r.phase==="reveal"?"approval-overload":r.phase!=="swarm"?null:r.defeated>=Math.ceil(r.quota/2)?"approval-overload":"smile-protocol"}function Dc(r){const e=r;if(!e||e.schema_version!==1||!Array.isArray(e.tracks)||e.tracks.length!==3)throw new Error("Invalid music manifest");const n=new Set;for(const t of e.tracks){if(!Pc.includes(t.id)||n.has(t.id)||!na(t.audio_url)||!(t.sync_url===null||na(t.sync_url))||!Nc(t.audio_sha256)||!jn(t.duration_s)||t.duration_s<=0||t.duration_s>1800||!jn(t.gain_db)||t.gain_db>0||t.gain_db<-60||!["audio/wav","audio/mp4"].includes(Fa(t)))throw new Error("Invalid music track");n.add(t.id)}return e.tracks}function Hc(r,e,n){const t=r;if(!t||t.schema_version!==1||t.track_id!==e.id||t.audio_sha256!==n||n!==e.audio_sha256||!jn(t.duration_s)||Math.abs(t.duration_s-e.duration_s)>.05||t.time_origin!=="runtime_decoded_frame_0"||t.playback_rate!==1||!Array.isArray(t.beats)||!Array.isArray(t.energy)||!Array.isArray(t.regions)||t.beats.length>Math.ceil(e.duration_s*20)||t.energy.length>Math.ceil(e.duration_s*10)+2||t.regions.length>1e4)return!1;let i=-1;for(const o of t.beats){if(!jn(o.t_s)||o.t_s<=i||o.t_s<0||o.t_s>=e.duration_s||!ea(o.strength))return!1;i=o.t_s}i=-1;for(const o of t.energy){if(!jn(o.t_s)||o.t_s<=i||o.t_s<0||o.t_s>e.duration_s+.001||!ea(o.value))return!1;i=o.t_s}let s=0;for(const o of t.regions){if(!jn(o.start_s)||!jn(o.end_s)||Math.abs(o.start_s-s)>.001||o.end_s<=o.start_s||o.end_s>e.duration_s+.001||!["candidate","reviewed","uncertain"].includes(o.quality))return!1;s=o.end_s}return Math.abs(s-e.duration_s)<.001}function Ls(r,e,n){let t=0,i=r.length;for(;t<i;){const s=t+i>>>1;n(r[s])<=e?t=s+1:i=s}return t}function Gc(r,e){if(!r||!jn(e)||e<0||e>=r.duration_s)return 0;const n=Ls(r.energy,e,l=>l.t_s),t=r.energy[Math.max(0,n-1)],i=r.energy[Math.min(n,r.energy.length-1)],s=t&&i?t.value+(i.value-t.value)*Math.max(0,Math.min(1,(e-t.t_s)/Math.max(.001,i.t_s-t.t_s))):0,o=r.regions[Ls(r.regions,e,l=>l.start_s)-1];let a=0;if(o?.quality==="reviewed"){const l=Ls(r.beats,e+.12,h=>h.t_s),c=r.beats[l-1];if(c){const h=e-c.t_s;h>=-.12&&h<.45&&(a=c.strength*(h<0?(h+.12)/.12:1-h/.45))}}return Math.max(0,Math.min(.08,.02*s+.06*a))}class jc{context=null;bus=null;tracks=[];active=null;outgoing=null;pending=null;wanted=null;attempt=-1;generation=0;paused=!0;disposed=!1;loading=!1;abort=null;failed=new Set;volume=.55;lights="low";error=null;attach(e){this.context||this.disposed||(this.context=e,this.bus=e.createGain(),this.bus.gain.value=this.volume,this.bus.connect(e.destination))}async readJSON(e,n,t){const i=await fetch(Tt(e),{signal:t??AbortSignal.timeout(15e3)});if(!i.ok)throw new Error("Music data unavailable");const s=await i.text();if(s.length>n)throw new Error("Music data too large");return JSON.parse(s)}setVolume(e){this.volume=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0,this.bus&&this.context&&(this.bus.gain.cancelScheduledValues(this.context.currentTime),this.bus.gain.setTargetAtTime(this.volume,this.context.currentTime,.04))}update(e,n){if(this.disposed)return;const t=Fc(e);this.attempt!==e.attemptId&&(this.reset(),this.attempt=e.attemptId),t!==this.wanted&&(this.wanted=t,this.cancelPending(),t||this.fadeOut()),this.setPaused(n),this.cleanup(),t&&this.context?.state==="running"&&!this.paused&&!this.loading&&this.active?.track.id!==t&&!this.failed.has(t)&&this.load(t)}weight(e){const n=this.context?.currentTime??0,t=Math.max(0,Math.min(1,(n-e.start)/Math.max(.001,e.end-e.start)));return e.from+(e.to-e.from)*t}fade(e,n,t=1){const i=this.context;e.from=this.weight(e),e.to=n,e.start=i.currentTime,e.end=e.start+t,e.gain.gain.cancelScheduledValues(e.start),e.gain.gain.setValueAtTime(e.from,e.start),e.gain.gain.linearRampToValueAtTime(n,e.end)}drop(e){e&&(e.media.pause(),e.media.removeAttribute("src"),e.media.load(),e.node.disconnect(),e.gain.disconnect(),URL.revokeObjectURL(e.url))}cancelPending(){this.generation++,this.abort?.abort(),this.abort=null,this.drop(this.pending),this.pending=null,this.loading=!1}reset(){this.cancelPending(),this.drop(this.active),this.drop(this.outgoing),this.active=null,this.outgoing=null,this.wanted=null,this.failed.clear(),this.error=null}fadeOut(){this.drop(this.outgoing),this.outgoing=this.active,this.active=null,this.outgoing&&this.fade(this.outgoing,0,.6)}setPaused(e){if(this.paused!==e){if(this.paused=e,e){if(this.cancelPending(),this.drop(this.outgoing),this.outgoing=null,this.active){this.active.media.pause();const n=Math.pow(10,this.active.track.gain_db/20);this.active.from=this.active.to=n,this.active.gain.gain.cancelScheduledValues(this.context.currentTime),this.active.gain.gain.value=n}}else if(this.active){const n=this.active;n.media.play().catch(()=>{this.active===n&&(this.error="Click resume to enable music.")})}}}cleanup(){this.outgoing&&this.context.currentTime>=this.outgoing.end&&(this.drop(this.outgoing),this.outgoing=null)}async load(e){const n=++this.generation;this.loading=!0;const t=new AbortController;this.abort=t;const i=setTimeout(()=>t.abort(),15e3);let s=null,o=null;const a=()=>!this.disposed&&n===this.generation&&this.wanted===e&&!this.paused;try{if(!this.tracks.length){const f=Dc(await this.readJSON("/music/floor1-music.manifest.json",65536,t.signal));if(!a())return;t.signal.throwIfAborted(),this.tracks=f}if(!a())return;t.signal.throwIfAborted();const l=this.tracks.find(f=>f.id===e);if(!l)throw new Error("Missing music track");const c=await fetch(Tt(l.audio_url),{signal:t.signal});if(!c.ok)throw new Error("Missing recording");if(Number(c.headers?.get("content-length"))>80*1024**2)throw new Error("Recording exceeds intake limit");const h=await c.arrayBuffer();if(h.byteLength>80*1024**2)throw new Error("Recording exceeds intake limit");const u=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",h)),f=>f.toString(16).padStart(2,"0")).join("");let d=null;try{const f=l.sync_url?await this.readJSON(l.sync_url,2097152,t.signal):null;Hc(f,l,u)&&(d=Oc(f))}catch(f){if(t.signal.aborted)throw f}if(!a())return;t.signal.throwIfAborted(),this.drop(this.outgoing),this.outgoing=null,o=URL.createObjectURL(new Blob([h],{type:Fa(l)}));const p=new Audio;p.preload="auto",p.loop=!0,p.playbackRate=1,p.src=o;const m=this.context.createMediaElementSource(p),b=this.context.createGain();if(b.gain.value=0,m.connect(b),b.connect(this.bus),s={track:l,media:p,node:m,gain:b,map:d,url:o,from:0,to:0,start:0,end:0},o=null,this.pending=s,await new Promise((f,w)=>{const v=()=>{M(),f()},E=()=>{M(),w(new Error("Cannot decode recording"))},y=()=>{M(),w(new Error("Music load cancelled"))},M=()=>{p.removeEventListener("canplay",v),p.removeEventListener("error",E),t.signal.removeEventListener("abort",y)};p.addEventListener("canplay",v,{once:!0}),p.addEventListener("error",E,{once:!0}),t.signal.addEventListener("abort",y,{once:!0}),p.load()}),!a()||(t.signal.throwIfAborted(),Math.abs(p.duration-l.duration_s)>.05&&(s.map=null),await p.play(),!a()))return;t.signal.throwIfAborted(),this.outgoing=this.active,this.active=s,this.pending=null,this.outgoing&&this.fade(this.outgoing,0),this.fade(s,Math.pow(10,l.gain_db/20)),this.error=null;const g=s;p.addEventListener("error",()=>{this.active===g&&(this.error="Music unavailable. Combat continues.",this.failed.add(e),this.drop(this.active),this.active=null)},{once:!0}),s=null}catch{a()&&(this.failed.add(e),this.error="Music unavailable. Combat continues.",this.fadeOut())}finally{clearTimeout(i),o&&URL.revokeObjectURL(o),s&&(this.pending===s&&(this.pending=null),this.drop(s)),n===this.generation&&(this.loading=!1,this.abort=null)}}accent(e){if(this.paused||this.volume===0||this.lights==="off"||e||this.context?.state!=="running")return 0;let n=0,t=0;for(const i of[this.active,this.outgoing])if(i&&!i.media.paused&&!i.media.seeking&&i.media.readyState>=3){const s=this.weight(i);t+=s,n+=s*Gc(i.map,i.media.currentTime)}return Math.min(.08,n/Math.max(1,t))}snapshot(){return{wanted:this.wanted,track:this.active?.track.id??null,position:this.active?.media.currentTime??0,duration:this.active?.media.duration||0,paused:this.paused,playing:!!this.active&&!this.active.media.paused,loading:this.loading,voices:+!!this.active+ +!!this.outgoing,volume:this.volume,lights:this.lights,sync:this.active?.map?"measured-energy-and-reviewed-cues":"steady",clock:"native-media-timeline-approximate",error:this.error,generation:this.generation}}dispose(){this.disposed=!0,this.reset(),this.bus?.disconnect()}}const ui={void:0,gather:.7,title:2.1,fracture:3.6,credit:4.6,exit:5.5},ta={title:0,credit:1.7},mn={preparation:.75,watchdog:8,full:{duration:6.2,beats:ui,cues:[{name:"gather",at:ui.gather},{name:"title",at:ui.title},{name:"fracture",at:ui.fracture},{name:"credit",at:ui.credit}]},short:{duration:3,beats:ta,cues:[{name:"credit",at:ta.credit}]}},yt=r=>r==="full"?mn.full:mn.short;function ia(r){return r.get("intro")==="off"?!1:r.get("intro")==="on"?!0:!(r.get("proof")==="1"||r.get("practice")==="boss"||["48","64"].includes(r.get("fixture")??""))}class Bc{mode="preparing";elapsed=0;waiting=0;foreground=0;reason=null;get active(){return this.mode!=="complete"}get playbackMode(){return this.mode==="reduced"||this.mode==="fallback"?this.mode:"full"}get duration(){return yt(this.playbackMode).duration}get beat(){if(this.mode==="preparing"||this.mode==="complete")return this.mode;if(this.mode!=="full")return this.elapsed<mn.short.beats.credit?"title":"credit";const e=this.elapsed,n=mn.full.beats;return e<n.gather?"void":e<n.title?"gather":e<n.fracture?"title":e<n.credit?"fracture":e<n.exit?"credit":"exit"}choose(e){return this.mode!=="preparing"?!1:(this.mode=e,this.elapsed=0,!0)}advance(e,n=!1){if(!(!this.active||n||!Number.isFinite(e)||e<0)){if(this.mode==="preparing"){this.waiting+=e,this.waiting>=mn.preparation&&this.choose("fallback");return}this.foreground+=e,this.elapsed+=e,this.foreground>=mn.watchdog?this.finish("watchdog"):this.elapsed>=this.duration&&this.finish("finished")}}reduce(){if(!(!this.active||this.mode==="reduced")){if(this.mode==="preparing"){this.choose("reduced");return}if(this.mode==="full"){const e=mn.full,n=mn.short,t=n.beats.credit,i=n.duration-t;this.elapsed=this.elapsed<e.beats.credit?Math.min(1,this.elapsed/e.beats.credit):t+Math.min(i-.1,(this.elapsed-e.beats.credit)/(e.duration-e.beats.credit)*i)}this.mode="reduced"}}finish(e){return this.active?(this.reason=e,this.mode="complete",!0):!1}snapshot(){return{mode:this.mode,beat:this.beat,elapsed:this.elapsed,waiting:this.waiting,foreground:this.foreground,reason:this.reason}}}class $c{music=new jc;context=null;noise=null;gain=null;lastShot=0;lastImpact=0;lastCue="";hitAttempt=-1;lastHit=0;grenadeAttempt=-1;lastGrenadeRelease=0;lastGrenadeBurst=0;expansionAttempt=-1;lastBlockedHit=0;introBus=null;introVoices=new Set;introGeneration=0;introPending=!1;introActive=!1;introStopped=!1;introTime=0;introMode="full";introCueCount=0;introLastCue=null;introFadeCleanup=null;enabled=!0;transitionCue(e){!this.enabled||this.context?.state!=="running"||(e==="departure"&&this.tone(180,.28,!1),e==="tear"&&this.tone(480,.22,!0),e==="arrival"&&this.tone(330,.35,!1))}async unlock(){if(!this.context){this.context=new AudioContext,this.gain=this.context.createGain(),this.gain.gain.value=this.enabled?.23:0,this.gain.connect(this.context.destination),this.noise=this.context.createBuffer(1,this.context.sampleRate*.09,this.context.sampleRate);const e=this.noise.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=(Math.random()*2-1)*Math.exp(-n/(e.length*.16))}this.context.state==="suspended"&&await this.context.resume(),this.music.attach(this.context)}toggle(){return this.enabled=!this.enabled,this.gain&&(this.gain.gain.value=this.enabled?.23:0),this.enabled||this.suspendIntro(),this.enabled}async enableIntro(e,n=this.introMode){if(this.introStopped||!this.enabled)return!1;if(this.setIntroMode(n,e),this.introTime=Math.max(this.introTime,this.introPosition(e)),this.introTime>=yt(this.introMode).duration)return this.stopIntro(),!1;if(this.introActive)return!0;if(this.introPending)return!1;const t=++this.introGeneration;this.introPending=!0;try{return await this.unlock(),t!==this.introGeneration||this.introStopped||!this.enabled||this.context?.state!=="running"||!this.gain?!1:(this.introActive=!0,this.introAtmosphere(),!0)}catch{return t===this.introGeneration&&this.suspendIntro(),!1}finally{t===this.introGeneration&&(this.introPending=!1)}}updateIntro(e,n=this.introMode){if(this.introStopped)return;this.setIntroMode(n,e);const t=this.introTime;this.introTime=Math.max(t,this.introPosition(e));const i=yt(this.introMode);if(this.introTime>=i.duration){this.stopIntro();return}if(!this.introActive)return;if(!this.enabled||this.context?.state!=="running"){this.suspendIntro();return}let s=null;for(const o of i.cues)o.at>t&&o.at<=this.introTime&&(s=o);if(!(!s||this.introTime-s.at>.25))try{s.name==="gather"&&(this.introTone(740,1180,.65,.07,"triangle"),this.introTone(1480,1980,.45,.025)),s.name==="title"&&(this.introTone(220,220,1.1,.055),this.introTone(330,330,1.05,.035),this.introTone(440,440,.9,.025)),s.name==="fracture"&&(this.introTone(96,48,.26,.15),this.introTone(270,140,.14,.028,"triangle")),s.name==="credit"&&(this.introTone(330,330,.85,.04),this.introTone(440,440,.8,.035),this.introTone(660,660,.75,.027)),this.introCueCount++,this.introLastCue=s.name}catch{this.suspendIntro()}}suspendIntro(){this.introGeneration++,this.introPending=!1,this.introActive=!1,this.releaseIntro()}stopIntro(){this.introStopped||(this.introStopped=!0,this.suspendIntro())}introSnapshot(){return{active:this.introActive,pending:this.introPending,stopped:this.introStopped,voices:this.introVoices.size,time:this.introTime,mode:this.introMode,cues:this.introCueCount,lastCue:this.introLastCue,contextState:this.context?.state??"uncreated"}}introPosition(e){return Number.isFinite(e)?Math.max(0,Math.min(yt(this.introMode).duration,e)):this.introTime}setIntroMode(e,n){const t=yt(e)!==yt(this.introMode);if(this.introMode=e,!!t&&(this.introTime=this.introPosition(n),this.introActive)){if(this.releaseIntro(),!this.enabled||this.context?.state!=="running"){this.suspendIntro();return}try{this.introAtmosphere()}catch{this.suspendIntro()}}}introAtmosphere(){if(!this.context||!this.gain)return;const e=yt(this.introMode).duration-this.introTime;if(e<=0)return;const n=this.context.createGain();n.gain.value=.8,n.connect(this.gain),this.introBus=n,this.introTone(55,55,e,.032),this.introTone(82.4,82.4,e,.014)}introTone(e,n,t,i,s="sine"){if(!this.context||!this.introBus||t<=0)return;const o=this.context,a=o.currentTime,l=o.createOscillator(),c=o.createGain(),h=a+Math.max(.02,t),u={source:l,gain:c,end:h};l.type=s,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(n,h),c.gain.setValueAtTime(1e-4,a),c.gain.linearRampToValueAtTime(i,a+Math.min(.12,t*.22)),c.gain.exponentialRampToValueAtTime(1e-4,h),l.connect(c),c.connect(this.introBus),this.introVoices.add(u),l.onended=()=>this.dropIntroVoice(u),l.start(a),l.stop(h+.01)}dropIntroVoice(e){this.introVoices.delete(e)&&(e.source.onended=null,e.source.disconnect(),e.gain.disconnect())}releaseIntro(){this.introFadeCleanup?.();const e=this.introBus,n=this.context;if(!e||!n)return;this.introBus=null;const t=[...this.introVoices],i=n.currentTime;e.gain.cancelScheduledValues(i),e.gain.setValueAtTime(.8,i),e.gain.linearRampToValueAtTime(0,i+.05);for(const a of t)try{a.source.stop(Math.min(a.end+.01,i+.05))}catch{}const s=()=>{clearTimeout(o);for(const a of t)this.dropIntroVoice(a);e.disconnect(),this.introFadeCleanup===s&&(this.introFadeCleanup=null)},o=setTimeout(s,70);this.introFadeCleanup=s}update(e,n,t){const i=t?`${t.id}:${t.attackSerial}:${t.mode}`:"";i!==this.lastCue&&t?.variant==="grin"&&(!t.stasis||t.stasis.thawed)&&(t.mode==="cast_tell"&&this.tone(t.attack==="fan"?380:560,.28,!0),t.mode==="zip_tell"&&this.tone(880,.16,!1),t.mode==="defeat"&&this.tone(180,.75,!1),t.mode==="super_like_windup"&&this.tone(420,.55,!0),t.mode==="super_like_flight"&&this.tone(960,.18,!1),t.mode==="smile_windup"&&this.tone(220,.4,!0),t.mode==="smile_active"&&this.tone(110,.3,!1)),i!==this.lastCue&&t?.variant==="hydra"&&(!t.stasis||t.stasis.thawed)&&(t.mode==="warning"&&this.tone(t.hydra?.pattern==="sweep"?260:460,.25,!0),t.mode==="charge"&&this.tone(180,.12,!1),t.mode==="defeat"&&this.tone(140,.65,!1)),i!==this.lastCue&&t?.variant==="serpent"&&(!t.stasis||t.stasis.thawed)&&(t.mode==="warning"&&this.tone(280,.35,!0),t.mode==="charge"&&this.tone(120,.2,!1),t.mode==="defeat"&&this.tone(150,.65,!1)),this.lastCue=i,e>this.lastShot&&this.fire(),n>this.lastImpact&&this.slam(),this.lastShot=e,this.lastImpact=n}hitFeedback(e,n){n!==this.hitAttempt&&(this.hitAttempt=n,this.lastHit=0);for(const t of e)t.id<=this.lastHit||t.attemptId!==n||(this.lastHit=t.id,t.region==="head"&&this.tone(t.killed?1320:1050,.055,!1))}grenadeFeedback(e){e.attemptId!==this.grenadeAttempt&&(this.grenadeAttempt=e.attemptId,this.lastGrenadeRelease=0,this.lastGrenadeBurst=0);const n=e.grenade;n.world&&n.serial>this.lastGrenadeRelease&&(this.lastGrenadeRelease=n.serial,this.tone(320,.12,!0)),n.detonationSerial>this.lastGrenadeBurst&&(this.lastGrenadeBurst=n.detonationSerial,this.tone(760,.28,!1))}bossExpansionFeedback(e){e.attemptId!==this.expansionAttempt&&(this.expansionAttempt=e.attemptId,this.lastBlockedHit=0);const n=e.boss?.expansion?.blockedHitSerial??0;n>this.lastBlockedHit&&(this.lastBlockedHit=n,this.tone(170,.055,!1))}tone(e,n,t){if(!this.context||!this.gain)return;const i=this.context,s=i.createOscillator(),o=i.createGain();s.type="sine",s.frequency.setValueAtTime(e,i.currentTime),s.frequency.exponentialRampToValueAtTime(e*(t?1.7:.4),i.currentTime+n),o.gain.setValueAtTime(.001,i.currentTime),o.gain.linearRampToValueAtTime(.13,i.currentTime+.02),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+n),s.connect(o),o.connect(this.gain),s.start(),s.stop(i.currentTime+n+.02),s.onended=()=>{s.disconnect(),o.disconnect()}}fire(){if(!this.context||!this.noise||!this.gain)return;const e=this.context,n=e.createBufferSource(),t=e.createBiquadFilter();n.buffer=this.noise,t.type="highpass",t.frequency.value=550,n.connect(t),t.connect(this.gain),n.onended=()=>{n.disconnect(),t.disconnect()},n.start()}slam(){if(!this.context||!this.gain||!this.noise)return;const e=this.context,n=e.currentTime,t=e.createOscillator(),i=e.createGain();t.type="sine",t.frequency.setValueAtTime(120,n),t.frequency.exponentialRampToValueAtTime(44,n+.16),i.gain.setValueAtTime(.001,n),i.gain.linearRampToValueAtTime(.25,n+.005),i.gain.exponentialRampToValueAtTime(.001,n+.18),t.connect(i),i.connect(this.gain),t.start(),t.stop(n+.2),t.onended=()=>{t.disconnect(),i.disconnect()};const s=e.createBufferSource(),o=e.createBiquadFilter(),a=e.createGain();s.buffer=this.noise,o.type="highpass",o.frequency.value=1200,a.gain.setValueAtTime(.22,n),a.gain.exponentialRampToValueAtTime(.001,n+.035),s.connect(o),o.connect(a),a.connect(this.gain),s.start(),s.stop(n+.045),s.onended=()=>{s.disconnect(),o.disconnect(),a.disconnect()}}dispose(){this.stopIntro(),this.introFadeCleanup?.(),this.music.dispose(),this.context?.close()}}class Uc{held=new Set;queued=!1;press(e,n=!1){if(e!=="ShiftLeft"&&e!=="ShiftRight"||n)return!1;const t=!n&&this.held.size===0;return this.held.add(e),t&&(this.queued=!0),t}release(e){this.held.delete(e)}poll(){const e={down:this.held.size>0,pressed:this.queued};return this.queued=!1,e}sample(){const e=this.poll();return e.down||e.pressed}clear(){this.held.clear(),this.queued=!1}}class Vc{frame={...Hr};keys=new Set;grenadeInput=new Uc;mouseYaw=0;mousePitch=0;mouseHeld=!1;specialQueued=!1;dashQueued=!1;lockQueued=!1;keyDown(e,n=!1,t=!0){const i=this.grenadeInput.press(e,n);return!n&&e==="KeyE"&&(this.specialQueued=!0),!n&&e==="Space"&&(this.dashQueued=!0),!n&&e==="KeyQ"&&t&&(this.lockQueued=!0),this.keys.add(e),i}keyUp(e){this.keys.delete(e),this.grenadeInput.release(e)}fire(e){this.mouseHeld=e}look(e,n){this.mouseYaw-=e*.0022,this.mousePitch-=n*.0022}setAim(e,n){this.frame.yaw=e,this.frame.pitch=n,this.mouseYaw=0,this.mousePitch=0}clear(){this.keys.clear(),this.grenadeInput.clear(),this.mouseYaw=0,this.mousePitch=0,this.mouseHeld=!1,this.specialQueued=!1,this.dashQueued=!1,this.lockQueued=!1;const e=this.frame;e.forward=0,e.strafe=0,e.fire=!1,e.special=!1,e.dash=!1,e.lock=!1,e.grenade=!1,e.grenadePressed=!1}sample(e,{player:n,touch:t,touchInput:i,aspect:s,fovY:o}){const a=i.sample(e),l=this.grenadeInput.poll(),c=this.frame;return c.forward=t?a.forward:(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),c.strafe=t?a.strafe:(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),c.yaw=n.yaw+(t?a.yaw:this.mouseYaw),c.pitch=Math.max(-1.38,Math.min(1.38,n.pitch+(t?a.pitch:this.mousePitch))),c.aspect=s,c.fovY=o,c.lock=t?a.lock:this.lockQueued,c.grenade=t?!1:l.down,c.grenadePressed=t?a.grenadePressed:l.pressed,c.fire=t?a.fire:this.mouseHeld,c.special=t?a.special:this.specialQueued,c.dash=t?a.dash:this.dashQueued,this.mouseYaw=0,this.mousePitch=0,this.specialQueued=!1,this.dashQueued=!1,this.lockQueued=!1,c}}class Wc{mode="loading";ready=!1;started=!1;captureGeneration=0;get paused(){return this.mode==="paused"}get live(){return this.mode==="playing"||this.mode==="paused"}assetsReady(){this.mode!=="disposed"&&(this.ready=!0,this.mode==="loading"&&(this.mode="menu"))}begin(){return!this.ready||this.mode==="disposed"?!1:(this.invalidateCapture(),this.started=!0,this.mode="playing",!0)}pause(){this.live&&(this.mode="paused",this.invalidateCapture())}resume(){this.mode==="paused"&&(this.mode="playing")}finish(){this.mode!=="disposed"&&(this.mode="results",this.invalidateCapture())}transition(){this.live&&(this.mode="transition",this.invalidateCapture())}menu(){this.mode!=="disposed"&&(this.mode="menu",this.started=!1,this.invalidateCapture())}dispose(){this.mode="disposed",this.invalidateCapture()}invalidateCapture(){this.captureGeneration++}requestCapture(){return++this.captureGeneration}acceptsCapture(e){return e===this.captureGeneration&&this.mode==="playing"}}function qc(r){r.innerHTML=`
 <canvas id="game" aria-label="Rainbow Knight first-person arena"></canvas>
 <div class="vignette"></div><div id="hurt"></div><div id="blast"></div>
 <header><a class="brand" href="#" aria-label="Rainbow Knight"><span class="brand-symbol">✳</span><span>RAINBOW<br>KNIGHT</span></a><div class="chapter"><span class="live-dot"></span> STAGE 01 <span class="slash">/</span> SYCOPHANCY</div><div><button id="effects" class="quiet" aria-label="Toggle reduced effects">FX FULL</button><button id="sound" class="quiet" aria-label="Toggle sound">SOUND ON</button></div></header>
 <div id="hud" hidden>
  <div class="phase-panel"><div><span id="phase-name">THE APPROVAL SWARM</span><span id="phase-count">0 / 96</span></div><div class="progress-track"><i id="phase-progress"></i></div><small id="phase-hint">Survive the praise.</small><small id="island-direction" hidden aria-live="polite"></small><strong id="boss-shield" hidden>SHIELDED · EVADE OR FREEZE</strong></div>
  <div class="crosshair"><i></i><i></i><i></i><i></i><b></b></div><div id="hitmark">×</div><div id="lock-marker" hidden><i></i><i></i><i></i><i></i></div><div id="lock-hint" hidden></div>
  <div class="health-panel"><span class="eyebrow">VITALITY</span><div><strong id="health">120</strong><span>/ 120</span></div><div class="health-track"><i id="health-bar"></i></div></div>
  <div class="weapon-panel"><span class="eyebrow">AUTOMATIC / ∞</span><strong>PRISM DRIVER</strong><small>HEADSHOTS ×1.5</small></div>
  <div id="sword-card"><kbd>E</kbd><div><span class="eyebrow">RAINBOW SLAM</span><strong id="charges">01 <small>CHARGE</small></strong></div></div>
  <div id="grenade-card"><kbd>SHIFT</kbd><div><span class="eyebrow">BINARY FREEZE</span><strong id="grenade-status">READY</strong><small>2s FUSE · 3s STASIS</small></div></div>
  <div id="announcement" aria-live="polite"></div>
 </div>
 <section id="menu" aria-labelledby="menu-title">
  <div class="hero-copy"><div class="overline"><span>01</span> THE MIRROR OF APPROVAL</div><h1 id="menu-title">EVERYONE<br><em>APPROVES.</em></h1><p id="menu-description">The smiles are endless.<br>Your patience isn't.</p><div class="menu-actions"><button id="start-btn" disabled>PREPARING THE ARENA <span>↗</span></button><button id="practice-btn" class="quiet" disabled>PRACTICE THE BOSS ↗</button><span id="load-status">Loading Blender assets</span></div><div id="last-run"></div></div>
  <div class="brief"><span class="eyebrow">YOUR OBJECTIVE</span><h2>Break the crowd.<br>Face the Grin.</h2><p>A chrome arena. Two kinds of smile.<br>One sword charge. Make it count.</p><div class="brief-rule"></div><span class="eyebrow">01 / SYCOPHANCY</span><p class="brief-note">A Rainbow Knight reconstruction</p></div>
  <footer><div><kbd>W A S D</kbd><span>MOVE</span></div><div><kbd>MOUSE</kbd><span>LOOK + HOLD FIRE</span></div><div><kbd>E</kbd><span>SWORD SLAM</span></div><div><kbd>SPACE</kbd><span>DODGE</span></div><div><kbd>Q</kbd><span>BOSS LOCK</span></div><div><kbd>R</kbd><span>RETRY</span></div></footer>
 </section>
 <section id="pause" hidden><div class="pause-card"><span class="eyebrow">TAKE A BREATH</span><h2>THE SMILES<br>CAN WAIT.</h2><p id="pause-description">Click to lock the camera and continue.</p><button id="resume-btn">BACK TO THE ARENA ↗</button><button id="retry-btn" class="quiet">RESTART ATTEMPT</button></div></section>
 <button id="touch-pause" type="button" aria-label="Pause and open settings" hidden>Ⅱ <span>PAUSE</span></button>
 <section id="rotate-screen" hidden aria-label="Rotate device"><div><span class="rotate-icon" aria-hidden="true">↻</span><p class="eyebrow">GIVE YOUR THUMBS SOME ROOM</p><h2>TURN TO<br>LANDSCAPE.</h2><p>Rotate your device to play.<br>Your attempt will wait for you.</p><button id="rotate-mouse" class="quiet">USING A MOUSE? SWITCH CONTROLS</button></div></section>
 <div id="proof-label" hidden>CONTROLLED DENSITY FIXTURE</div>
 <details id="music-settings"><summary>MUSIC + LIGHTS</summary><div><label for="music-volume">MUSIC VOLUME <output id="music-volume-value">55%</output></label><input id="music-volume" type="range" min="0" max="100" value="55"><button id="music-lights" class="quiet">LIGHT SYNC LOW</button><p id="music-status">Three tracks. Your pace.</p></div></details>
`}const Kc=["music-status","health","health-bar","charges","sword-card","grenade-card","grenade-status","phase-name","phase-count","phase-progress","phase-hint","lock-hint","island-direction"],Yc={"smile-protocol":"SMILE PROTOCOL","approval-overload":"APPROVAL OVERLOAD","grin-orb":"GRIN ORB"},sa={super_like_windup:"SUPER LIKE · STEP ASIDE",super_like_release:"SUPER LIKE · STEP ASIDE",super_like_flight:"SUPER LIKE · KEEP CLEAR",super_like_recover:"RECOVERY · OPEN FIRE",smile_windup:"SMILE INCOMING · GET READY",smile_active:"SMILE · KEEP MOVING",smile_recover:"RECOVERY · OPEN FIRE"};let Xc=class{constructor(e,n,t,i){this.mobile=n,this.audio=t,this.bossMode=i;const s=o=>{const a=e.querySelector(o);if(!a)throw new Error(`Missing game UI element: ${o}`);return a};this.elements=Object.fromEntries(Kc.map(o=>[o,s(`#${o}`)])),this.chapter=s(".chapter"),this.weaponHint=s(".weapon-panel small"),this.elements["island-direction"].style.cssText="display:block;text-align:center;color:#e5ffb9;font:10px monospace;letter-spacing:1px;margin-top:9px"}mobile;audio;bossMode;elements;chapter;weaponHint;htmlValues=new WeakMap;widthValues=new WeakMap;setText(e,n){e.textContent!==n&&(e.textContent=n)}setHTML(e,n){this.htmlValues.get(e)!==n&&(e.innerHTML=n,this.htmlValues.set(e,n))}setWidth(e,n){this.widthValues.get(e)!==n&&(e.style.width=n,this.widthValues.set(e,n))}updateHUD(e,n,t,i={aspect:16/9,fovY:76*Math.PI/180}){const s=this.elements,o=this.audio.music.snapshot(),a=wa(e.stage);this.setText(s["music-status"],o.error??(o.loading?"Loading soundtrack...":o.track?`${o.paused?"PAUSED · ":""}${Yc[o.track]}`:"Three tracks. Your pace.")),this.setText(s.health,String(Math.ceil(e.player.health))),this.setWidth(s["health-bar"],`${100*e.player.health/G.playerHealth}%`),this.setHTML(this.chapter,`<span class="live-dot"></span> STAGE 0${e.stage} <span class="slash">/</span> ${a.title}`),this.setText(this.weaponHint,a.weaponHint),this.setHTML(s.charges,`0${e.charges} <small>CHARGE${e.charges===1?"":"S"}</small>`),s["sword-card"].classList.toggle("spent",e.charges===0);const l=e.grenade,c=Math.max(0,l.readyAt-e.time);this.mobile.update({transition:e.phase==="transition"||e.phase==="reveal"&&(e.level2?.environment.mode==="forest_grotto"||e.stage===3||e.stage===4),charges:e.charges,slam:e.slam,dashCooldown:e.player.dashCooldown,dashMax:G.dashCooldown,grenadeEnabled:l.enabled,grenadeRemaining:c,grenadeMax:Wi.recharge,grenadeBusy:!!l.world||l.throwPhase!=="idle",grenadeThrowing:l.throwPhase!=="idle",boss:(e.phase==="boss"||e.stage===3&&e.phase==="swarm")&&(this.bossMode==="grin"||e.stage!==1),locked:e.lock.active}),s["grenade-card"].hidden=!l.enabled,s["grenade-card"].classList.toggle("spent",c>0),this.setText(s["grenade-status"],l.world?`IN FLIGHT · ${Math.max(0,l.world.detonateAt-e.time).toFixed(1)}s`:l.throwPhase!=="idle"?"THROWING":c>0?`READY IN ${c.toFixed(1)}s`:"READY");const h=["boss","reveal","defeat"].includes(e.phase),u=e.boss?.mode;let d=h?a.bossName:"THE APPROVAL SWARM",p=h?`${Math.ceil(e.boss?.health||0)} / ${e.boss?.maxHealth??G.bossHealth}`:`${e.defeated} / ${e.quota}`,m=h?(e.boss?.health||0)/(e.boss?.maxHealth??G.bossHealth):e.quota>0?e.defeated/e.quota:0,b=h?e.phase==="defeat"?"APPROVAL REVOKED":this.bossMode==="classic"?"Watch the eyes. Dodge the charge.":u==="cast_tell"?e.boss?.attack==="fan"?"FAN INCOMING · FIND THE GAP":"VOLLEY INCOMING · KEEP MOVING":u==="zip_tell"||u==="zip_move"?"ZIP STEP · TRACK THE GRIN":u==="recover"?"RECOVERY · OPEN FIRE":"WATCH THE EYES. KEEP MOVING.":`${e.enemies.length} smiles active · ${Math.max(0,e.quota-e.spawned)} still waiting`;if(h&&u&&sa[u]&&(b=sa[u]),e.stage===2&&(d=h?a.bossName:`THE HUMAN FACADE · ${(e.level2?.packet??0)+1}/${a.packets.length}`,b=h?e.phase==="reveal"?"SIX HEADS · ONE MIND":e.phase==="defeat"?"THE FACADE IS BROKEN":"WATCH THE NECKS · MOVE OUT OF THE MARKED PATH":e.enemies.length?`${e.enemies.length} sources active · Shoot a flying mask to stop its attack`:"NEXT ENCOUNTER APPROACHING"),s["island-direction"].hidden=!0,e.stage===3&&e.level3){const f=e.level3.phase==="travel",w=e.boss?.variant==="serpent"?e.boss.serpent:null;if(d=f?"THE DISTANT SHORE":a.bossName,f){const v=Math.max(0,ko(e.player.x,e.player.z)-(ne.islandRadius-G.playerRadius)),E=ko(0,ne.spawnZ)-(ne.islandRadius-G.playerRadius);p=`${Math.ceil(v)} m TO SHORE`,m=1-v/E,b=w?.mode==="warning"?"HEAD RISING · SHOOT TO REPEL OR STRAFE":w?.mode==="bite"?"BITE INCOMING · KEEP CLEAR OF THE MARKED PATH":"KEEP SWIMMING · REACH THE ISLAND";const y=this.islandDirection(e,i.aspect,i.fovY);this.setText(s["island-direction"],y),s["island-direction"].hidden=!y||n,e.level3.swordHintUntil>e.time&&(b=`SLAM NEEDS SOLID GROUND · ${b}`)}else b=e.phase==="defeat"?"THE SHORE HOLDS":e.level3.phase==="landing"?"GET YOUR BEARINGS · THE SERPENT IS RISING":w?.mode==="warning"?"BITE INCOMING · MOVE OUT OF THE MARKED PATH":w?.mode==="bite"?"KEEP CLEAR OF THE HEAD":w?.mode==="exposed"?"SERPENT EXPOSED · OPEN FIRE":"RECOVERY · STAY READY"}if(e.stage===4&&e.level4){const f=Math.min(e.level4.packet,(a.packets?.length??1)-1),w=e.boss?.variant==="brain_vat"?e.boss.vat:null;d=h?a.bossName:["HUSK CHASERS","RELAY SPITTERS","THE MIXED LAB"][f]??"THE LAB",b=h?e.phase==="reveal"?"THE VAT IS WAKING · GET READY":e.phase==="defeat"?"THE LAB IS QUIET":w?.mode==="warning"?"PORT LIT · STRAFE THE BRAIN SHOT":w?.mode==="recover"?"RECOVERY · OPEN FIRE":"WATCH THE PORT · KEEP MOVING":e.enemies.length?`${e.enemies.length} zombies active · ${Math.max(0,e.quota-e.spawned)} still waiting`:"NEXT ENCOUNTER APPROACHING"}if(e.boss?.stasis&&e.time<e.boss.stasis.until&&(b=`STASIS · ${(e.boss.stasis.until-e.time).toFixed(1)}s · ${e.stage===3?"KEEP MOVING":"OPEN FIRE"}`),e.phase==="transition"){const f=e.level2?.environment.phase;d=f==="prepare"?"THE CLEARING IS QUIET":f==="release"?"THE GROUND GIVES WAY":f==="falling"?"BENEATH THE FACADE":f==="failed"?"DESCENT INTERRUPTED":"THE GROTTO",b=f==="prepare"?"Preparing the descent. You can still look and move.":f==="failed"?"Pause and retry the level.":f==="falling"?"LOOK AROUND · HOLD ON":f==="landing"?"GET YOUR BEARINGS":"STAY READY"}this.setText(s["phase-name"],d),this.setText(s["phase-hint"],b),this.setText(s["phase-count"],p),this.setWidth(s["phase-progress"],`${100*Math.max(0,Math.min(1,m))}%`),s["lock-hint"].hidden=t||!h&&!(e.stage===3&&e.phase==="swarm")||this.bossMode==="classic"&&e.stage===1||n;let g=e.lock.active?"Q  RELEASE LOCK":e.lock.hint==="no-target"?"LOOK AT THE GRIN · Q TO LOCK":e.lock.hint==="lost"?"LOCK LOST · Q TO REACQUIRE":"Q  LOCK ON";e.stage===2&&e.lock.hint==="no-target"&&(g="LOOK AT THE TORSO · Q TO LOCK"),e.stage===3&&e.lock.hint==="no-target"&&(g="LOOK AT THE EXPOSED HEAD · Q TO LOCK"),e.stage===4&&e.lock.hint==="no-target"&&(g="LOOK AT THE VAT · Q TO LOCK"),this.setText(s["lock-hint"],g)}islandDirection(e,n,t){const i=e.player,s=-i.x,o=ne.islandZ-i.z,a=ne.landHeight-i.y-(i.eyeHeight??G.eyeHeight),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=Math.sin(i.pitch),u=Math.cos(i.pitch),d=-l*u*s+h*a-c*u*o,p=c*s-l*o,m=l*h*s+u*a+c*h*o,b=Math.tan(t/2),g=d*b*n,f=d*b;return d>0&&Math.abs(p)<=g&&Math.abs(m)<=f?"":d<=0&&Math.abs(p)<1?"ISLAND BEHIND · TURN AROUND":d<=0||Math.abs(p)>g?p<0?"← ISLAND · TURN LEFT":"ISLAND → · TURN RIGHT":m>0?"↑ ISLAND · LOOK UP":"↓ ISLAND · LOOK DOWN"}};function Zc(r){qc(r),r.classList.add("two-level-candidate"),r.querySelector(".health-panel")?.insertAdjacentHTML("beforeend",'<div id="g2-heart-strip" aria-hidden="true"></div><p id="g2-heart-equivalent" role="status" aria-live="polite" aria-atomic="true">3 of 3 hearts</p><p id="g2-shield-equivalent">NO SHIELD</p>'),r.insertAdjacentHTML("beforeend",'<section id="neural-draft" hidden aria-labelledby="neural-draft-title" role="dialog" aria-modal="true"><div class="draft-shell"><p class="draft-eyebrow" id="neural-draft-label">ROUND 1 / 3</p><h2 id="neural-draft-title">Choose your edge.</h2><p class="draft-description">One upgrade. Every stack stays with you.</p><div id="neural-offers" class="upgrade-grid"></div><p id="neural-draft-tell" class="draft-tell"></p><p class="draft-safe">Combat is paused while you choose.</p></div></section><div id="neural-coverage" hidden aria-live="polite"><span id="coverage-state">NORMAL</span><div class="coverage-track"><i id="coverage-fill"></i></div><small id="coverage-hint">HOLD FIRE TO BUILD COVERAGE</small></div><div id="neural-entry-cue" hidden role="status"></div>');const n=r.querySelector(".brief-note");n&&(n.textContent="Two levels. Eighteen distinct threats.");const t=r.querySelector(".weapon-panel strong");t&&(t.textContent="AURORA / 07");const i=r.querySelector(".weapon-panel small");i&&(i.textContent="HOLD FIRE · BUILD COVERAGE");const s=r.querySelector("#music-settings");if(s){s.querySelector("summary").textContent="CONTROLS";for(const o of Array.from(s.querySelectorAll("label[for=music-volume],#music-volume,#music-lights,#music-status")))o.hidden=!0}}class Qc extends Xc{draftSignature="";updateHUD(e,n,t,i={aspect:16/9,fovY:76*Math.PI/180}){super.updateHUD(e,n,t,i);const s=e.neural;if(!s)return;const o=document.getElementById("g2-heart-equivalent"),a=document.getElementById("g2-shield-equivalent"),l=Zl(e.player.health,s.stats.maxHealth);o&&o.textContent!==l&&(o.textContent=l),a&&(a.textContent=s.shield>0?`${s.shield} SHIELD${s.shield===1?"":"S"}`:"NO SHIELD");const c=document.querySelector(".weapon-panel small");c&&(c.textContent="HOLD FIRE · BUILD YOUR COVERAGE");const h=f=>document.getElementById(f);h("health").textContent=String(Math.ceil(e.player.health));const u=document.querySelector(".health-panel > div > span");u&&(u.textContent=`/ ${s.stats.maxHealth}`),h("health-bar").style.width=`${100*Math.max(0,e.player.health)/s.stats.maxHealth}%`;const d=document.querySelector(".health-panel .eyebrow");d&&(d.textContent=s.shield>0?`VITALITY · ${s.shield} SHIELD${s.shield>1?"S":""}`:"VITALITY");const p=h("neural-draft");if(p.hidden=!s.draft||n,s.draft){h("neural-draft-label").textContent=`LEVEL ${e.stage} · ROUND ${s.round} / 3`;const f=`${e.attemptId}:${e.stage}:${s.round}:${s.offers.map(v=>v.id).join(",")}`;if(f!==this.draftSignature){this.draftSignature=f;const v=h("neural-offers");v.replaceChildren();for(const E of s.offers){const y=document.createElement("button");y.type="button",y.className="upgrade-card",y.dataset.upgrade=E.id;const M=document.createElement("strong");M.textContent=E.name;const z=document.createElement("span");z.textContent=E.description||E.desc;const T=document.createElement("small"),S=s.upgradeStacks[E.id]||0;T.textContent=E.maxStacks>0?`STACK ${S+1} / ${E.maxStacks}`:"ONE-TIME BENEFIT",y.append(T,M,z),v.append(y)}}const w={signal_echo:"Smile Chaser",rabbit_glimpse:"Eager Yes",notification_swarm:"Approval Chorus",flank_drone:"Smile Flanker",chair_knight:"Yes-Man Heavy",hammer_rabbit:"Heavy Approval",apex_rabbit:"Overeager Enforcer",evolution_rabbit:"Escalating Grin",arc_turret:"Rapid Applause",name_glitch_shade:"Drift Mask",speaker_wraith:"Face Speaker",loop_ghost:"Recurring Face",decay_mote:"Chatter Mote",double:"Mirror Mask",dual:"Silence Mask",cell_blob:"Split Persona",reach_shadow:"Projection Mask",drift_hound:"Drift Hound Mask"};h("neural-draft-tell").textContent=`NEW THIS ROUND: ${s.introduction.map(v=>w[v]||v).join(" · ")}`}const m=s.tickets.find(f=>!f.admitted&&f.tellAt!==void 0&&e.time>=f.tellAt&&Number.isFinite(f.x)&&Number.isFinite(f.z)),b=h("neural-entry-cue");if(b.hidden=!m||n||s.draft||e.phase!=="swarm",m){const f=m.x-e.player.x,w=m.z-e.player.z,v=-Math.sin(e.player.yaw)*f-Math.cos(e.player.yaw)*w,E=Math.cos(e.player.yaw)*f-Math.sin(e.player.yaw)*w,y=v<0?"BEHIND YOU":Math.abs(E)>v*.5?E<0?"LEFT":"RIGHT":"AHEAD";b.textContent=`${m.sourceId==="dual"?"SILENCE MASK":"NEW THREAT"} · ${y}`}const g=["swarm","boss"].includes(e.phase)&&!s.draft&&!n;h("neural-coverage").hidden=!g,h("coverage-state").textContent=s.fireDisabled>0?`RIFLE LOCKED · ${s.fireDisabled.toFixed(1)}s`:s.fireMode.toUpperCase(),h("coverage-fill").style.width=`${Math.min(100,s.fireCharge/10*100)}%`,h("coverage-hint").textContent=s.fireDisabled>0?"MOVE · E SLAM · SHIFT FREEZE STILL AVAILABLE":s.fireMode==="omni"?"FRONT + REAR + BOTH SIDES":s.fireMode==="dual"?"FRONT + REAR · KEEP FIRING":e.stage===1&&s.round===1?"DUAL UNLOCKS NEXT ROUND":"HOLD 4s DUAL · 10s OMNI AFTER LEVEL 2 ROUND 2",e.phase==="swarm"&&(h("phase-name").textContent=`${e.stage===1?"SYCOPHANCY":"ANTHROPOMORPHISM"} · ROUND ${s.round}/3`,h("phase-count").textContent=`${Math.max(0,Math.ceil(s.duration-s.elapsed))}s · ${e.enemies.length} ACTIVE`,h("phase-progress").style.width=`${Math.min(100,s.elapsed/s.duration*100)}%`,h("phase-hint").textContent=s.draft?"Choose one upgrade. Combat is paused.":s.elapsed>=s.duration?"CLEAR THE REMAINING THREATS":s.elapsed<9?"NEW THREATS ENTER AT THE PERIMETER":"KEEP A MOVEMENT LANE OPEN")}}const Jc="rainbow-knight:two-level-v2:progress:v1",Bn=Object.freeze([1,2]);function Jn(r){if(!Bn.includes(r))throw new RangeError("This campaign has exactly two levels");const e=Gr[r];return{...e,menu:{...e.menu,brief:r===1?"Nine forms of approval. Three rounds.<br>Then face the original Grin Orb.":"Nine constructed identities. Three rounds.<br>Descend to the Six-Face Hydra."},weaponHint:"HOLD FIRE · BUILD YOUR COVERAGE"}}const eh=r=>r===1?2:void 0;function oa(r){let e;try{e=r?JSON.parse(r):null}catch{e=null}const n=e&&typeof e=="object"?e:{},t=[];return n.version===1&&Array.isArray(n.completedStages)&&n.completedStages.length<=2&&n.completedStages.every((i,s)=>i===Bn[s])&&t.push(...n.completedStages),{version:1,completed:t.includes(1),completedStages:t,...typeof n.at=="string"?{at:n.at}:{},...typeof n.shots=="number"&&Number.isFinite(n.shots)&&n.shots>=0?{shots:n.shots}:{},...t.includes(1)&&n.checkpoint&&typeof n.checkpoint=="object"?{checkpoint:n.checkpoint}:{}}}function nh(r,e,n,t,i){const s=Bn.indexOf(e);if(s<0||Bn.slice(0,s).some(a=>!r.completedStages.includes(a)))return r;const o=Bn.filter(a=>a===e||r.completedStages.includes(a));return{...r,version:1,completed:o.includes(1),completedStages:o,shots:t,at:i}}const mi=r=>r.completedStages.includes(1)?2:1,th=r=>r.completedStages.includes(1)&&r.completedStages.includes(2),pi={rupture:.75,close:.55,covered:.2,reveal:1,settle:.25,loading:2,timeout:15},aa=1e-9;class ih{currentPhase="idle";currentMode="fade";request=null;token=0;phaseSeconds=0;holdSeconds=0;confirmed=!1;destinationReady=!1;failure=null;victories=new Set;get phase(){return this.currentPhase}get mode(){return this.currentMode}get generation(){return this.token}get identity(){return this.request}get elapsed(){return this.phaseSeconds}get coveredSeconds(){return this.holdSeconds}get coveredConfirmed(){return this.confirmed}get ready(){return this.destinationReady}get error(){return this.failure}get active(){return this.currentPhase!=="idle"}get showLoading(){return this.currentPhase==="covered"&&!this.destinationReady&&this.holdSeconds>=pi.loading}get canRetry(){return this.currentPhase==="covered"||this.currentPhase==="failed"}get progress(){const e=this.currentPhase;return e==="idle"?0:e==="failed"||e==="awaiting-input"?1:Math.min(1,Math.max(0,this.phaseSeconds/pi[e]))}start(e,n){const t=jr(e.source),i=t!==void 0&&t===e.destination;if(this.active||!i||!Number.isSafeInteger(e.attemptId)||e.attemptId<0||n!=="rupture"&&n!=="fade")return!1;const s=`${e.source}:${e.attemptId}`;return this.victories.has(s)?!1:(this.victories.add(s),this.token++,this.request=Object.freeze({...e}),this.currentMode=e.destination>=3?"fade":n,this.holdSeconds=0,this.confirmed=!1,this.destinationReady=!1,this.failure=null,this.enter("rupture"),!0)}advance(e,n=!0){if(!n||!Number.isFinite(e)||e<=0)return;let t=e;for(;t>0;){const i=this.currentPhase;if(i==="covered"){if(!this.confirmed)return;const s=this.destinationReady?pi.covered:pi.timeout,o=Math.min(t,Math.max(0,s-this.holdSeconds));if(this.phaseSeconds+=o,this.holdSeconds+=o,t-=o,this.holdSeconds+aa<s)return;if(!this.destinationReady){this.fail(this.token,"The next stage could not finish loading. Retry or return to the menu.");return}this.enter("reveal")}else if(i==="rupture"||i==="close"||i==="reveal"||i==="settle"){const s=pi[i],o=Math.min(t,Math.max(0,s-this.phaseSeconds));if(this.phaseSeconds+=o,t-=o,this.phaseSeconds+aa<s||(this.enter(i==="rupture"?"close":i==="close"?"covered":i==="reveal"?"settle":"awaiting-input"),this.currentPhase==="covered"||this.currentPhase==="awaiting-input"))return}else return}}confirmCovered(e){return e!==this.token||this.currentPhase!=="covered"&&this.currentPhase!=="failed"?!1:(this.confirmed=!0,!0)}markReady(e){return e!==this.token||this.currentPhase!=="covered"||!this.confirmed?!1:(this.destinationReady=!0,!0)}fail(e,n){return e!==this.token||!this.active||this.currentPhase==="failed"?!1:(this.destinationReady=!1,this.failure=n.trim()||"The next stage could not be prepared.",this.enter("failed"),!0)}retry(){return this.canRetry?(this.token++,this.holdSeconds=0,this.confirmed=!1,this.destinationReady=!1,this.failure=null,this.enter("covered"),this.token):null}cancel(){this.token++,this.clear()}completeArrival(){return this.currentPhase!=="awaiting-input"?!1:(this.clear(),!0)}snapshot(){return{identity:this.request?{...this.request}:null,generation:this.token,phase:this.currentPhase,mode:this.currentMode,elapsed:this.phaseSeconds,coveredSeconds:this.holdSeconds,coveredConfirmed:this.confirmed,ready:this.destinationReady,error:this.failure,showLoading:this.showLoading,canRetry:this.canRetry,progress:this.progress}}enter(e){this.currentPhase=e,this.phaseSeconds=0}clear(){this.request=null,this.holdSeconds=0,this.confirmed=!1,this.destinationReady=!1,this.failure=null,this.enter("idle")}}const sh="#120f20";class oh{constructor(e){this.renderer=e,this.quad.frustumCulled=!1,this.scene.add(this.quad)}renderer;target=null;scene=new tt;camera=new rs(-1,1,1,-1,0,1);material=new Ri({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!0,uniforms:{snapshot:{value:null},phase:{value:0},progress:{value:0},aspect:{value:1},captureAspect:{value:1},fade:{value:0}},vertexShader:"varying vec2 uv0; void main(){uv0=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
   uniform sampler2D snapshot; uniform float phase,progress,aspect,captureAspect,fade;
   varying vec2 uv0;
   float ease(float t){return t*t*(3.-2.*t);}
   void main(){
    vec2 p=(uv0-.5)*vec2(aspect,1.);
    float t=ease(progress); vec3 cover=vec3(.00605,.00478,.01444);bool outside=false;
    // The opaque endpoint is identical to the DOM fail-safe after display encoding.
    if(phase>1.5){
     float opening=phase<2.5?t:1.;
     float radius=length(p/vec2(.72,1.));
     float edge=mix(0.,length(vec2(aspect*.5/.72,.5))+.06,opening);
     float alpha=fade>.5?1.-opening:smoothstep(edge-.03,edge+.03,radius);
     if(opening>=.9999)alpha=0.;
     if(opening<=.0001)alpha=1.;
     gl_FragColor=vec4(cover,alpha);
    }else{
     float close=phase>.5?t:0.; float peel=phase<.5?t:1.;
     float a=atan(p.y,p.x),sector=floor((a+3.14159265)/.78539816);
     float alternating=mod(sector,2.)*2.-1.;
     vec2 d=vec2(cos(a+alternating*.18),sin(a+alternating*.18));
     vec2 uv=uv0; uv.x=(uv.x-.5)*aspect/captureAspect+.5;
     uv+=d*peel*peel*.065*(1.-fade);
     outside=any(lessThan(uv,vec2(0.)))||any(greaterThan(uv,vec2(1.)));
     vec3 color=outside?cover:texture2D(snapshot,uv).rgb;
     float seam=abs(fract((a+3.14159265)/.78539816)-.5);
     color*=1.-smoothstep(.475,.5,seam)*peel*.7*(1.-fade);
     float smile=abs(p.y+.045+.35*(1.-pow(clamp(p.x/.55,-1.,1.),2.)));
     float slit=exp(-smile*140.)*(1.-smoothstep(.48,.59,abs(p.x)));
     color+=vec3(.85,.06,.65)*slit*sin(peel*1.5708)*2.2*(1.-fade);
     // Broad blank oval grows into a full-frame mask, then becomes quiet cover.
     float maskRadius=length(p/vec2(.70,1.));
     float maxRadius=length(vec2(aspect*.5/.7,.5))+.08;
     float mask=1.-smoothstep(close*maxRadius-.045,close*maxRadius+.015,maskRadius);
     vec3 porcelain=mix(vec3(.65,.51,.63),cover,smoothstep(.35,1.,close));
     color=mix(color,porcelain,mask*step(.001,close)*(1.-fade));
     color=mix(color,cover,fade*clamp((phase+t)/2.,0.,1.));
     if(close>=.9999)color=cover;
     gl_FragColor=vec4(color,1.);
    }
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    vec3 displayCover=vec3(.070588235,.058823529,.125490196);
    if(phase>1.5)gl_FragColor.rgb=displayCover;
    else gl_FragColor.rgb=mix(gl_FragColor.rgb,displayCover,fade>.5?clamp((phase+t)/2.,0.,1.):smoothstep(.75,1.,phase>.5?t:0.));
    if(outside)gl_FragColor.rgb=displayCover;
   }`});quad=new P(new fe(2,2),this.material);disposed=!1;shaderReady=!1;shaderFailed=!1;size=new Tn;captures=0;warm(){if(this.shaderReady)return!0;if(this.disposed||this.renderer.getContext().isContextLost())return!1;const e=this.renderer,n=e.debug,t=n.onShaderError,i=n.checkShaderErrors,s=e.getViewport(new Ut),o=e.getScissor(new Ut),a=e.getScissorTest();this.shaderFailed=!1,n.checkShaderErrors=!0,n.onShaderError=(...l)=>{this.shaderFailed=!0,t?.(...l)};try{return this.material.uniforms.phase.value=3,e.setViewport(0,0,2,2),e.setScissor(0,0,2,2),e.setScissorTest(!0),e.compile(this.scene,this.camera),e.render(this.scene,this.camera),this.shaderReady=!this.shaderFailed,this.shaderReady}catch{return this.shaderFailed=!0,!1}finally{n.onShaderError=t,n.checkShaderErrors=i,e.setViewport(s),e.setScissor(o),e.setScissorTest(a)}}contextLost(){this.shaderReady=!1,this.release()}capture(e){if(this.release(),this.disposed||this.renderer.getContext().isContextLost()||!this.renderer.extensions.has("EXT_color_buffer_float")||!this.warm())return!1;const n=this.renderer.getDrawingBufferSize(new Tn),t=Math.min(1,Math.sqrt(921600/(n.x*n.y))),i=Math.max(1,Math.floor(n.x*t)),s=Math.max(1,Math.floor(n.y*t));this.target=new Xs(i,s,{type:gi,format:Ai,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1}),this.target.texture.colorSpace=cn;const o=this.renderer.getRenderTarget(),a=this.renderer.getViewport(new Ut),l=this.renderer.getScissor(new Ut),c=this.renderer.getScissorTest();try{return this.renderer.setRenderTarget(this.target),this.renderer.setScissorTest(!1),e(),this.material.uniforms.snapshot.value=this.target.texture,this.material.uniforms.captureAspect.value=n.x/n.y,this.captures++,!0}catch{return this.release(),!1}finally{this.renderer.setRenderTarget(o),this.renderer.setViewport(a),this.renderer.setScissor(l),this.renderer.setScissorTest(c)}}render(e){if(!this.target||this.disposed||!this.shaderReady||this.shaderFailed||this.renderer.getContext().isContextLost())return!1;const{phase:n,progress:t,mode:i}=e;if(!["rupture","close","reveal","settle","awaiting-input"].includes(n))return!1;const s=this.material.uniforms,o=this.renderer.getSize(this.size);return s.aspect.value=o.x/o.y,s.progress.value=t,s.fade.value=i==="fade"?1:0,s.phase.value=n==="rupture"?0:n==="close"?1:n==="reveal"?2:3,(n==="rupture"||n==="close")&&(this.renderer.info.reset(),this.renderer.clear()),this.renderer.render(this.scene,this.camera),!0}release(){this.material.uniforms.snapshot.value=null,this.target?.dispose(),this.target=null}stats(){const e=this.target?.width??0,n=this.target?.height??0;return{captures:this.captures,targets:this.target?1:0,width:e,height:n,colorFormat:"RGBA16F",colorBytes:e*n*8,depthBytes:e*n*4,snapshotOnly:!0}}dispose(){this.disposed||(this.disposed=!0,this.release(),this.quad.geometry.dispose(),this.material.dispose(),this.scene.clear())}}class ah{root=document.createElement("div");cover=document.createElement("div");panel=document.createElement("section");status=document.createElement("p");retry=document.createElement("button");menu=document.createElement("button");resume=document.createElement("button");notice=document.createElement("p");constructor(e){this.root.id="campaign-transition",this.root.hidden=!0,this.cover.className="transition-cover",this.cover.style.background=sh,this.panel.className="transition-panel",this.panel.hidden=!0,this.status.setAttribute("role","status"),this.status.setAttribute("aria-live","polite"),this.retry.textContent="RETRY LOADING",this.menu.textContent="RETURN TO MENU",this.resume.textContent="CONTINUE",this.menu.className="quiet",this.notice.id="save-notice",this.notice.hidden=!0,this.notice.setAttribute("role","status"),this.panel.append(this.status,this.retry,this.resume,this.menu),this.root.append(this.cover,this.panel),e.append(this.root,this.notice)}show(e=2){this.resume.textContent=`CONTINUE TO LEVEL ${e}`,this.root.hidden=!1,document.body.classList.add("campaign-handoff"),this.panel.hidden=!0,this.cover.style.opacity="0"}opacity(e){this.cover.style.opacity=String(Math.max(0,Math.min(1,e)))}message(e,n="none"){const t=this.panel.hidden||this.status.textContent!==e;this.status.textContent=e,this.panel.hidden=!e,this.retry.hidden=n!=="retry",this.menu.hidden=n!=="retry",this.resume.hidden=n!=="resume",t&&n!=="none"&&(n==="retry"?this.retry:this.resume).focus({preventScroll:!0})}storageFailed(){this.notice.textContent="Progress is available for this session, but could not be saved on this device.",this.notice.hidden=!1}hide(){this.root.hidden=!0,this.panel.hidden=!0,document.body.classList.remove("campaign-handoff")}dispose(){this.root.remove(),this.notice.remove(),document.body.classList.remove("campaign-handoff")}}function ra(r,e,n){return r==="touch"||r==="auto"&&e>0&&n}class rh{contacts=new Map;queued=new Set;press(e,n,t,i,s=42){const o=a=>a==="fire"?"look":a;return this.contacts.has(n)||[...this.contacts.values()].some(a=>o(a.kind)===o(e))?!1:(this.contacts.set(n,{kind:e,x:t,y:i,radius:Math.max(1,s),dx:0,dy:0}),!0)}move(e,n,t){const i=this.contacts.get(e);if(!i)return;i.dx=(n-i.x)/i.radius,i.dy=(t-i.y)/i.radius;const s=Math.hypot(i.dx,i.dy);s>1&&(i.dx/=s,i.dy/=s)}release(e,n=!0){const t=this.contacts.get(e);t&&(this.contacts.delete(e),n&&!["move","look","fire"].includes(t.kind)&&this.queued.add(t.kind))}action(e){this.queued.add(e)}cancelActions(){for(const[e,n]of this.contacts)["move","look","fire"].includes(n.kind)||this.contacts.delete(e);this.queued.clear()}clear(){this.contacts.clear(),this.queued.clear()}state(){const e=[...this.contacts.values()],n=e.find(i=>i.kind==="move"),t=e.find(i=>i.kind==="look"||i.kind==="fire");return{move:{x:n?.dx??0,y:n?.dy??0},aim:{x:t?.dx??0,y:t?.dy??0},fire:t?.kind==="fire",held:e.map(i=>i.kind),pointers:this.contacts.size}}sample(e){const n=this.state(),t=l=>{const c=Math.hypot(l.x,l.y),h=c>.12?(c-.12)/(.88*c):0;return{x:l.x*h,y:l.y*h}},i=t(n.move),s=t(n.aim),o=Math.max(0,Math.min(.05,Number.isFinite(e)?e:0)),a={forward:-i.y,strafe:i.x,yaw:-s.x*2.8*o,pitch:-s.y*1.9*o,fire:n.fire,special:this.queued.has("slam"),dash:this.queued.has("dash"),grenadePressed:this.queued.has("freeze"),lock:this.queued.has("lock")};return this.queued.clear(),a}}const lh={dash:'<path d="m6 5 7 7-7 7m8-14 7 7-7 7"/>',slam:'<path d="m7 17 12-14 2 2-12 14M5 14l5 5m-7 2 4-4"/>',freeze:'<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3"/>',lock:'<circle cx="12" cy="12" r="6"/><path d="M12 1v5m0 12v5M1 12h5m12 0h5"/>'},la=r=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${lh[r]}</svg>`;class ch{input=new rh;root;enabled=!1;transition=!1;owners=new Map;hintSeen=new Set;taught=!1;moveKnob;aimKnob;pads;actions;constructor(e,n){this.root=document.createElement("div"),this.root.id="touch-controls",this.root.hidden=!0,this.root.innerHTML=`
   <div class="touch-stick move-stick" data-control="move" role="group" aria-label="Movement joystick"><span class="stick-label">MOVE</span><i class="stick-knob"></i><span class="stick-arrows">✣</span></div>
   <div class="touch-stick aim-stick" data-control="look" role="group" aria-label="Look joystick"><span class="stick-label">LOOK</span><i class="stick-knob"></i><span class="stick-arrows">⌖</span></div>
   <div class="touch-fire" data-control="fire" role="group" aria-label="Hold and drag to aim and fire"><span>◎</span><b>FIRE</b></div>
   <div class="touch-actions">${["dash","slam","freeze"].map(t=>`<button type="button" class="touch-action ${t}" data-control="${t}" aria-label="${{dash:"Dodge",slam:"Sword slam",freeze:"Freeze grenade"}[t]}">${la(t)}<b>${{dash:"DODGE",slam:"SLAM",freeze:"FREEZE"}[t]}</b><small></small></button>`).join("")}</div>
   <button type="button" class="touch-lock" data-control="lock" aria-label="Toggle boss lock" aria-pressed="false" hidden>${la("lock")}<span>LOCK</span></button>
   <div id="touch-hints"><span>LEFT THUMB · MOVE</span><span>DRAG LOOK TO AIM<br>HOLD FIRE + DRAG TO SHOOT</span></div>`,e.append(this.root),this.moveKnob=this.root.querySelector(".move-stick .stick-knob"),this.aimKnob=this.root.querySelector(".aim-stick .stick-knob"),this.pads=Array.from(this.root.querySelectorAll("[data-control]")),this.actions=Object.fromEntries(["dash","slam","freeze","lock"].map(t=>[t,this.root.querySelector(`[data-control="${t}"]`)]));try{this.taught=localStorage.getItem("rainbow-knight:touch-hints:v1")==="seen"}catch{}for(const t of this.pads){const i=t.dataset.control;t.addEventListener("pointerdown",o=>{if(!this.enabled||o.button!==0||t.disabled)return;o.preventDefault();const a=t.getBoundingClientRect(),l=i==="move";this.input.press(i,o.pointerId,l?a.x+a.width/2:o.clientX,l?a.y+a.height/2:o.clientY,42)&&(this.owners.set(o.pointerId,t),t.setPointerCapture(o.pointerId),this.input.move(o.pointerId,o.clientX,o.clientY),this.paint())}),t.addEventListener("pointermove",o=>{this.owners.get(o.pointerId)===t&&(o.preventDefault(),this.input.move(o.pointerId,o.clientX,o.clientY),this.paint())}),t.addEventListener("pointerup",o=>{if(this.owners.get(o.pointerId)!==t)return;o.preventDefault();const a=t.getBoundingClientRect(),l=o.clientX>=a.left-8&&o.clientX<=a.right+8&&o.clientY>=a.top-8&&o.clientY<=a.bottom+8;this.owners.delete(o.pointerId),this.input.release(o.pointerId,l),t.hasPointerCapture(o.pointerId)&&t.releasePointerCapture(o.pointerId),this.paint()});const s=o=>{this.owners.has(o.pointerId)&&(this.clear(),n())};t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s),t.addEventListener("contextmenu",o=>o.preventDefault()),i!=="move"&&i!=="look"&&i!=="fire"&&t.addEventListener("click",o=>{o.detail===0&&this.enabled&&!t.disabled&&this.input.action(i)})}}clear(){const e=[...this.owners];this.owners.clear(),this.input.clear();for(const[n,t]of e)t.hasPointerCapture(n)&&t.releasePointerCapture(n);this.paint()}setActive(e){this.enabled&&!e&&this.clear(),this.enabled=e,this.root.hidden=!e}showHints(){this.taught=!1,this.hintSeen.clear(),this.paint()}paint(){const e=this.input.state();this.moveKnob.style.transform=`translate(${e.move.x*34}px,${e.move.y*34}px)`,this.aimKnob.style.transform=`translate(${e.aim.x*34}px,${e.aim.y*34}px)`;for(const n of this.pads)n.classList.toggle("pressed",e.held.includes(n.dataset.control));if(this.root.classList.toggle("firing",e.fire),Math.hypot(e.move.x,e.move.y)>.2&&this.hintSeen.add("move"),e.fire&&Math.hypot(e.aim.x,e.aim.y)>.2&&this.hintSeen.add("fire"),!this.taught&&this.hintSeen.size===2){this.taught=!0;try{localStorage.setItem("rainbow-knight:touch-hints:v1","seen")}catch{}}this.root.querySelector("#touch-hints").hidden=this.taught}update(e){if(e.transition&&!this.transition){this.input.cancelActions();for(const[t,i]of[...this.owners])["move","look","fire"].includes(i.dataset.control)||(this.owners.delete(t),i.hasPointerCapture(t)&&i.releasePointerCapture(t));this.paint()}this.transition=!!e.transition;const n=(t,i,s,o=1)=>{const a=this.actions[t];a.disabled=i||!!e.transition,a.style.setProperty("--ready",`${Math.max(0,Math.min(1,o))*360}deg`);const l=a.querySelector("small");l&&(l.textContent=e.transition?"HOLD":s)};n("slam",e.charges===0||e.slam>=0||e.grenadeThrowing,e.slam>=0?"ACTIVE":`${e.charges} LEFT`,e.charges>0?1:0),n("dash",e.dashCooldown>0||e.slam>=0,e.dashCooldown>0?`${e.dashCooldown.toFixed(1)}s`:"READY",1-e.dashCooldown/e.dashMax),this.actions.freeze.hidden=!e.grenadeEnabled,n("freeze",e.grenadeRemaining>0||e.grenadeBusy||e.slam>=0,e.grenadeBusy?"ACTIVE":e.grenadeRemaining>0?`${e.grenadeRemaining.toFixed(1)}s`:"READY",1-e.grenadeRemaining/e.grenadeMax),this.actions.lock.disabled=!!e.transition,this.actions.lock.hidden=!e.boss,this.actions.lock.setAttribute("aria-pressed",String(e.locked)),this.actions.lock.querySelector("span").textContent=e.locked?"LOCKED":"LOCK"}}class hh{timeline=new Bc;shell=document.getElementById("intro");app=document.getElementById("app");skip=this.shell.querySelector("#intro-skip");sound=this.shell.querySelector("#intro-sound");title=this.shell.querySelector("#intro-title");credit=this.shell.querySelector("#intro-credit");motion=matchMedia("(prefers-reduced-motion: reduce)");visual=null;audio=null;generation=0;completed=!1;keys=new Set;pointers=new Set;eatClick=!1;last=null;readyAt=performance.now();samples=[];visualStats=null;coreError=!1;soundError=!1;cleanup=new AbortController;inputCleanup=new AbortController;onComplete=()=>{};constructor(e){this.shell.dispatchEvent(new Event("intro:claimed"));for(const t of(this.shell.dataset.heldKeys??"").split(","))t&&this.keys.add(t);const n={capture:!0,signal:this.inputCleanup.signal};if(addEventListener("keydown",this.keyDown,n),addEventListener("keyup",this.keyUp,n),addEventListener("pointerdown",this.pointerDown,n),addEventListener("pointerup",this.pointerUp,n),addEventListener("pointercancel",this.pointerUp,n),addEventListener("click",this.clickDrain,n),addEventListener("blur",()=>{this.keys.clear(),this.pointers.clear(),this.eatClick=!1,this.audio?.suspendIntro(),this.syncSound(),this.releaseDrain()},{signal:this.inputCleanup.signal}),!ia(e)||this.shell.dataset.skipRequested==="true"){this.timeline.finish(ia(e)?"early-skip":"disabled"),this.complete();return}this.shell.hidden=!1,this.app.inert=!0,this.app.setAttribute("aria-hidden","true"),document.body.classList.add("intro-playing"),this.shell.addEventListener("click",t=>{t.target.closest("#intro-sound")||(t.preventDefault(),t.stopPropagation(),this.finish("skip"))},{signal:this.cleanup.signal}),this.sound.addEventListener("click",t=>{t.stopPropagation(),this.toggleSound()},{signal:this.cleanup.signal}),this.motion.addEventListener("change",t=>{t.matches&&(this.timeline.reduce(),this.dropVisual(),this.draw())},{signal:this.cleanup.signal}),document.addEventListener("visibilitychange",()=>{this.last=null,document.hidden&&(this.audio?.suspendIntro(),this.soundError=!1,this.syncSound())},{signal:this.cleanup.signal}),this.motion.matches&&this.timeline.choose("reduced"),this.draw(),this.skip.focus({preventScroll:!0})}get active(){return this.timeline.active}get blocked(){return this.active||this.keys.size>0||this.pointers.size>0||this.eatClick}attachAudio(e){if(this.audio=e,!this.active){e.stopIntro();return}this.sound.disabled=!1,this.syncSound()}enhance(e){if(this.timeline.mode!=="preparing")return;this.readyAt=performance.now();const n=++this.generation;try{const t=e();this.visual=t,t.load().then(()=>{if(n!==this.generation||!this.active||this.timeline.mode!=="preparing"){t.dispose();return}performance.now()-this.readyAt>mn.preparation*1e3?(this.timeline.choose("fallback"),this.dropVisual()):this.timeline.choose("full"),this.last=performance.now(),this.draw()}).catch(()=>{n===this.generation&&this.active&&(this.timeline.choose("fallback"),this.dropVisual(),this.last=performance.now(),this.draw())})}catch{this.timeline.choose("fallback"),this.dropVisual()}}frame(e){const n=this.last===null?0:Math.max(0,(e-this.last)/1e3);this.last=e,this.active&&!document.hidden&&(n>0&&this.samples.length<1e3&&this.samples.push(n*1e3),this.advance(n))}advance(e){if(this.active){if(this.timeline.advance(e,document.hidden),(this.timeline.mode==="fallback"||this.timeline.mode==="reduced")&&this.dropVisual(),!this.active){this.complete();return}this.draw()}}finish(e){this.timeline.finish(e)&&this.complete()}failGame(){this.coreError=!0,this.finish("game-error")}suspend(){this.last=null,this.audio?.suspendIntro(),this.syncSound()}draw(){if(!this.active)return;const{mode:e,beat:n,elapsed:t}=this.timeline;if(e!=="preparing"&&this.audio?.updateIntro(t,this.timeline.playbackMode),this.shell.dataset.mode=e,this.shell.dataset.beat=n,this.title.hidden=["credit","exit"].includes(n),this.credit.hidden=!this.title.hidden,this.title.setAttribute("aria-hidden",String(this.title.hidden)),this.credit.setAttribute("aria-hidden",String(this.credit.hidden)),e==="full"&&this.visual)try{this.visual.render(t,innerWidth,innerHeight)}catch{this.timeline.reduce(),this.dropVisual(),this.shell.dataset.mode="reduced"}this.syncSound()}syncSound(){const e=this.audio?.introSnapshot(),n=!!e?.active;this.sound.setAttribute("aria-pressed",String(n)),this.sound.disabled=!this.audio||!!e?.pending,this.sound.textContent=e?.pending?"ENABLING SOUND":n?"SOUND ON":this.soundError?"SOUND UNAVAILABLE":"SOUND OFF"}async toggleSound(){const e=this.audio;if(!e||!this.active)return;if(e.introSnapshot().active){e.suspendIntro(),this.syncSound();return}if(!e.enabled){e.toggle();const s=document.getElementById("sound");s&&(s.textContent="SFX ON")}const n=this.generation;this.soundError=!1;const t=e.enableIntro(this.timeline.mode==="preparing"?0:this.timeline.elapsed,this.timeline.playbackMode);this.syncSound();const i=await t;if(!this.active||n!==this.generation){e.stopIntro();return}this.soundError=!i,this.syncSound()}dropVisual(){this.visual&&(this.visual.dispose(),this.visualStats=this.visual.stats(),this.visual=null)}complete(){this.completed||(this.completed=!0,this.generation++,this.dropVisual(),this.audio?.stopIntro(),this.cleanup.abort(),this.shell.hidden=!0,document.body.classList.remove("intro-playing"),this.app.inert=!1,this.app.removeAttribute("aria-hidden"),this.onComplete(),this.releaseDrain())}consume(e){e.preventDefault(),e.stopImmediatePropagation()}editable(e){return e.target instanceof HTMLElement&&(e.target.isContentEditable||!!e.target.closest("button,input,select,textarea,a"))}keyDown=e=>{if(!(e.metaKey||e.ctrlKey||e.altKey||e.isComposing)){if(!this.active){this.keys.has(e.code)&&this.consume(e);return}if(e.code==="Tab"){const n=[this.sound,this.skip].filter(i=>!i.disabled),t=n.indexOf(document.activeElement);e.preventDefault(),n[(t+(e.shiftKey?-1:1)+n.length)%n.length]?.focus();return}if(e.code==="Escape"&&e.target===this.skip){this.keys.add(e.code),this.consume(e),this.finish("skip");return}if(this.editable(e)){this.keys.add(e.code),["Enter","Space"].includes(e.code)?e.stopPropagation():this.consume(e);return}this.keys.add(e.code),this.consume(e),!e.repeat&&["Escape","Enter","Space"].includes(e.code)&&this.finish("skip")}};keyUp=e=>{this.keys.delete(e.code)&&(this.active&&this.editable(e)?e.stopPropagation():this.consume(e),this.releaseDrain())};pointerDown=e=>{this.active?this.pointers.add(e.pointerId):this.pointers.size===0&&(this.eatClick=!1,this.releaseDrain())};pointerUp=e=>{this.pointers.delete(e.pointerId)&&!this.active&&(this.consume(e),this.eatClick=e.type!=="pointercancel",this.releaseDrain())};clickDrain=e=>{!this.active&&this.eatClick&&(this.eatClick=!1,this.consume(e),this.releaseDrain())};releaseDrain(){!this.active&&!this.keys.size&&!this.pointers.size&&!this.eatClick&&this.inputCleanup.abort()}snapshot(){const e=[...this.samples].sort((n,t)=>n-t);return{...this.timeline.snapshot(),active:this.active,blocked:this.blocked,coreError:this.coreError,visual:this.visual?.stats()??this.visualStats,audio:this.audio?.introSnapshot()??null,frames:e.length,p95:e[Math.floor(e.length*.95)]??0}}dispose(){this.finish("teardown"),this.inputCleanup.abort(),this.cleanup.abort(),this.audio?.stopIntro(),this.dropVisual()}}const fi=24,Gt=96,dh=["title_cogsec","title_rainbow","title_knight","credit_produced","credit_osan"],$e=(r,e,n)=>He.smoothstep(n,r,e),ca=[16754653,11728862,13023482];class uh{constructor(e,n){this.renderer=e,this.getEnvironment=n,this.scene.name="intro-mirror-fracture",this.scene.background=new V(0),this.scene.environment=this.getEnvironment(),this.scene.environmentIntensity=.8,this.camera.position.set(0,0,20),this.scene.add(this.title,this.credit);const t=new Pe(16774891,2.4);t.position.set(-5,6,8);const i=new Pe(10679775,2);i.position.set(7,-1,5);const s=new Pe(16753367,1.7);s.position.set(-7,-2,4),this.scene.add(t,i,s,new zn(14141695,854037,.8));let o=1129269075;const a=()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296),l=new Float32Array(Gt*3),c=new V;for(let d=0;d<Gt;d++)this.dustOrigins[d*3]=(a()-.5)*15,this.dustOrigins[d*3+1]=(a()-.5)*18,this.dustOrigins[d*3+2]=-2-a()*5,c.setHex(ca[d%3]),c.toArray(l,d*3);for(let d=0;d<this.poses.length;d++)this.poses[d]=a();const h=new Ge;h.setAttribute("position",new rn(this.dustPositions,3).setUsage(le)),h.setAttribute("color",new rn(l,3));const u=new ua({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.17,depthWrite:!1,toneMapped:!1});this.dust=new ma(h,u),this.dust.frustumCulled=!1,this.scene.add(this.dust),this.geometries.add(h),this.materials.add(u)}renderer;getEnvironment;scene=new tt;camera=new rs(-7,7,4,-4,.1,60);title=new W;credit=new W;lines=new Map;geometries=new Set;materials=new Set;titleMaterials=[];creditMaterials=[];shaders=[];shards=null;shardMaterial=null;dust;dustOrigins=new Float32Array(Gt*3);dustPositions=new Float32Array(Gt*3);poses=new Float32Array(fi*8);dummy=new we;viewport=new Ut;scissor=new Ut;clearColor=new V;width=0;height=0;compositionWidth=10;compositionHeight=2.6;loaded=!1;disposed=!1;loading=null;wordmarkTriangles=0;visibleWordmarkTriangles=0;renderCount=0;load(){return this.disposed?Promise.reject(new Error("Intro presentation disposed")):(this.loading||(this.loading=this.loadWordmarks()),this.loading)}async loadWordmarks(){const e=await new Zs().loadAsync("./assets/intro/wordmarks.glb");if(this.disposed){this.releaseSource(e.scene);return}try{e.scene.updateMatrixWorld(!0);for(const s of dh){const o=e.scene.getObjectByName(s);if(!(o instanceof P))throw new Error(`Missing intro wordmark ${s}`);const a=o.geometry.clone().applyMatrix4(o.matrixWorld);a.center(),a.computeBoundingBox(),this.geometries.add(a);const l=this.chrome(s==="title_rainbow"),c=new P(a,l);c.name=s,this.lines.set(s,c);const h=s.startsWith("title_");(h?this.title:this.credit).add(c),(h?this.titleMaterials:this.creditMaterials).push(l),this.wordmarkTriangles+=(a.index?.count??a.getAttribute("position").count)/3}const n=e.scene.getObjectByName("shard_prototype");if(!(n instanceof P))throw new Error("Missing shared intro shard");const t=n.geometry.clone().applyMatrix4(n.matrixWorld);t.center(),this.geometries.add(t),this.shardMaterial=new U({color:15067117,metalness:.97,roughness:.19,transparent:!0,depthWrite:!1}),this.materials.add(this.shardMaterial),this.shards=new X(t,this.shardMaterial,fi),this.shards.frustumCulled=!1,this.shards.instanceMatrix.setUsage(le);const i=new V;for(let s=0;s<fi;s++)this.shards.setColorAt(s,i.setHex(ca[s%3]));if(this.title.add(this.shards),this.wordmarkTriangles>=2e4)throw new Error("Intro wordmark geometry exceeds budget");this.layout(1280,720),this.prepare()}finally{this.releaseSource(e.scene)}}prepare(){this.disposed||(this.renderer.compile(this.scene,this.camera),this.disposed||(this.loaded=!0))}chrome(e){const n=new U({color:15921135,metalness:.91,roughness:.25,transparent:!0,opacity:1,depthWrite:!0}),t={time:{value:0},grin:{value:0},fracture:{value:0}};return this.shaders.push(t),this.materials.add(n),n.onBeforeCompile=i=>{i.uniforms.introTime=t.time,i.uniforms.introGrin=t.grin,i.uniforms.introFracture=t.fracture,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vIntroPosition;`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vIntroPosition = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
    varying vec3 vIntroPosition;
    uniform float introTime;
    uniform float introGrin;
    uniform float introFracture;
   `),i.fragmentShader=i.fragmentShader.replace("#include <opaque_fragment>",`
    // Broad studio-light bands keep fixed faces legible with the borrowed environment.
    float y = vIntroPosition.y;
    float ribbon = .5 + .5 * sin(y * 12.0 - .35 + sin(introTime * .38) * .18);
    vec3 ivory = vec3(.88, .91, .94);
    vec3 chrome = mix(vec3(.075, .085, .12), ivory, smoothstep(.12, .85, ribbon));
    float glint = pow(max(0.0, 1.0 - abs(vIntroPosition.x + y * .8 - (introTime * .55 - 1.8)) * 1.3), 5.0);
    vec3 prism = mix(vec3(.92, .40, .69), vec3(.48, .94, .79), smoothstep(-.15,.15,y));
    float face = pow(abs(normal.z), 5.0);
    outgoingLight = mix(outgoingLight, chrome + outgoingLight * .28, face * .72);
    outgoingLight += prism * glint * .19;
    // A thin, traveling crack-light accent. Geometry is never actually fractured.
    float crackX = vIntroPosition.x + y * .47 + sin(y * 17.0) * .06;
    float crack = 1.0 - smoothstep(.004, .014, abs(crackX - (introTime - ${mn.full.beats.fracture.toFixed(1)}) * 7.0 + 2.8));
    outgoingLight += mix(vec3(.95,.38,.67),vec3(.46,.95,.78),step(0.0,y)) * crack * introFracture * .85;
    ${e?`
    // One 300 ms, low-contrast reflection, clipped to a small patch of letter faces.
    vec2 p = (vIntroPosition.xy - vec2(.82, -.01)) / vec2(.58,.34);
    float smile = (1.0 - smoothstep(.045,.10,abs(length(p * vec2(.78,1.65))-.68))) * smoothstep(.02,.14,-p.y);
    float leftEye = 1.0-smoothstep(.045,.09,length((p-vec2(-.31,.24))*vec2(.65,1.4)));
    float rightEye = 1.0-smoothstep(.045,.09,length((p-vec2(.31,.24))*vec2(.65,1.4)));
    float teeth = (1.0-smoothstep(.026,.045,abs(fract(p.x*5.0)-.5))) * smile;
    outgoingLight += vec3(.58,.52,.72) * (smile + leftEye + rightEye - teeth*.4) * introGrin * .12;
    `:""}
    // Very restrained screen-space pixel finish, with no additional full-screen pass.
    float pixel = mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0);
    outgoingLight *= .989 + pixel * .011;
    #include <opaque_fragment>
   `)},n.customProgramCacheKey=()=>e?"intro-chrome-grin-v1":"intro-chrome-v1",n}layout(e,n){this.width=e,this.height=n;const t=e/Math.max(1,n),i=t<1.12,s=i?10:14,o=s/t;this.camera.left=-s/2,this.camera.right=s/2,this.camera.top=o/2,this.camera.bottom=-o/2,this.camera.updateProjectionMatrix();const a=this.lines.get("title_cogsec"),l=this.lines.get("title_rainbow"),c=this.lines.get("title_knight"),h=this.lines.get("credit_produced"),u=this.lines.get("credit_osan");if(!a||!l||!c||!h||!u)return;const d=b=>b.geometry.boundingBox.max.x-b.geometry.boundingBox.min.x;if(a.position.set(0,i?1.04:.59,0),i)l.position.set(0,.02,0),c.position.set(0,-1.02,0),this.compositionWidth=Math.max(d(a),d(l),d(c)),this.compositionHeight=2.9;else{const g=d(l),f=d(c);l.position.set(-(f+.37)/2,-.47,0),c.position.set((g+.37)/2,-.47,0),this.compositionWidth=g+f+.37,this.compositionHeight=1.95}const p=Math.min(s*.79/this.compositionWidth,o*.63/this.compositionHeight);this.title.scale.setScalar(p),this.title.position.y=.15,h.position.set(0,.63,0),h.scale.setScalar(i?1.3:1),u.position.set(0,-.18,0);const m=Math.min(s*(i?.77:.57)/d(u),o*.5/1.7);this.credit.scale.setScalar(m),this.credit.position.y=.05}render(e,n,t){if(this.disposed||!this.loaded||n<=0||t<=0)return;this.scene.environment=this.getEnvironment(),(n!==this.width||t!==this.height)&&this.layout(n,t);const i=Math.max(0,e),{beats:s,duration:o}=mn.full,a=$e(s.title-.74,s.title,i)*(1-$e(s.credit-.32,s.credit,i)),l=$e(s.credit,s.credit+.17,i)*(1-$e(o-.38,o,i));this.title.visible=i<s.credit,this.credit.visible=i>=s.credit&&i<o,this.titleMaterials.forEach(f=>f.opacity=a),this.creditMaterials.forEach(f=>f.opacity=l);const c=$e(s.fracture,s.fracture+.07,i)*(1-$e(s.credit-.42,s.credit-.28,i)),h=$e(2.82,2.88,i)*(1-$e(3.05,3.12,i));for(const f of this.shaders)f.time.value=i,f.grin.value=h,f.fracture.value=c;if(this.title.rotation.set(.045,-.055+Math.sin(i*.65)*.013,Math.sin(i*39)*c*.0025),this.credit.rotation.set(.015,Math.sin(i*.3)*.014,0),this.shards&&this.shardMaterial){this.shards.visible=i>=s.gather&&i<s.title+.13,this.shardMaterial.opacity=$e(s.gather,s.gather+.24,i)*(1-$e(s.title-.25,s.title+.13,i))*.86;const f=$e(s.gather,s.title,i);for(let w=0;w<fi;w++){const v=w*8,E=(this.poses[v]-.5)*this.compositionWidth,y=(this.poses[v+1]-.5)*this.compositionHeight,M=1+(1-f)*1.8;this.dummy.position.set(E*M,y*M,1+(1-f)*(this.poses[v+2]*5)),this.dummy.rotation.set(this.poses[v+3]*5+(1-f)*3,this.poses[v+4]*5+(1-f)*2,this.poses[v+5]*6),this.dummy.scale.setScalar((.12+this.poses[v+6]*.32)*(1-f*.6)),this.dummy.updateMatrix(),this.shards.setMatrixAt(w,this.dummy.matrix)}this.shards.instanceMatrix.needsUpdate=!0}for(let f=0;f<Gt;f++){const w=f*3;this.dustPositions[w]=this.dustOrigins[w]+Math.sin(i*.21+f)*.035,this.dustPositions[w+1]=this.dustOrigins[w+1]+i*.026,this.dustPositions[w+2]=this.dustOrigins[w+2]}this.dust.geometry.getAttribute("position").needsUpdate=!0,this.dust.material.opacity=(.13+.08*$e(o-.45,o,i))*(1-$e(o-.15,o,i)),this.visibleWordmarkTriangles=0;for(const[f,w]of this.lines)(f.startsWith("title_")?this.title.visible&&a>0:this.credit.visible&&l>0)&&(this.visibleWordmarkTriangles+=(w.geometry.index?.count??w.geometry.getAttribute("position").count)/3);const u=this.renderer.getRenderTarget(),d=this.renderer.getActiveCubeFace(),p=this.renderer.getActiveMipmapLevel(),m=this.renderer.autoClear,b=this.renderer.getScissorTest(),g=this.renderer.getClearAlpha();this.renderer.getViewport(this.viewport),this.renderer.getScissor(this.scissor),this.renderer.getClearColor(this.clearColor);try{this.renderer.setRenderTarget(null),this.renderer.setViewport(0,0,n,t),this.renderer.setScissorTest(!1),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.camera),this.renderCount++}finally{this.renderer.setRenderTarget(u,d,p),this.renderer.setViewport(this.viewport),this.renderer.setScissor(this.scissor),this.renderer.setScissorTest(b),this.renderer.setClearColor(this.clearColor,g),this.renderer.autoClear=m}}releaseSource(e){const n=new Set,t=new Set;e.traverse(i=>{if(i instanceof P){n.add(i.geometry);for(const s of Array.isArray(i.material)?i.material:[i.material])t.add(s)}});for(const i of n)i.dispose();for(const i of t)i.dispose();e.clear()}dispose(){this.disposed||(this.disposed=!0,this.loaded=!1,this.scene.visible=!1,this.visibleWordmarkTriangles=0,this.releaseOwnedResources())}releaseOwnedResources(){for(const e of this.geometries)e.dispose();for(const e of this.materials)e.dispose();this.shards?.dispose(),this.geometries.clear(),this.materials.clear(),this.lines.clear(),this.titleMaterials.length=0,this.creditMaterials.length=0,this.shaders.length=0,this.title.clear(),this.credit.clear(),this.scene.clear(),this.scene.environment=null,this.shards=null,this.shardMaterial=null,this.visibleWordmarkTriangles=0}stats(){return{loaded:this.loaded,disposed:this.disposed,shards:this.disposed?0:fi,dust:this.disposed?0:Gt,wordmarkTriangles:this.wordmarkTriangles,visibleWordmarkTriangles:this.visibleWordmarkTriangles,ownedGeometries:this.geometries.size,ownedMaterials:this.materials.size,renderCount:this.renderCount}}}const ye=new hh(new URLSearchParams(location.search));let Da=null;function Ha(r){ye.active?ye.frame(r):Da?.(r),requestAnimationFrame(Ha)}requestAnimationFrame(Ha);function Ga(r){ye.failGame();const e=document.getElementById("load-status")??document.getElementById("boot-status");if(e){e.textContent=r;const n=document.createElement("button");n.textContent="RELOAD GAME",n.addEventListener("click",()=>location.reload()),e.after(n)}}try{mh()}catch{Ga("The game could not initialize graphics. Reload to try again.")}function mh(){const r="rainbow-pov-chrome-v01-f356229cf410",e="rainbow-pov-chrome-v01-f356229cf410",n="rainbow-pov-chrome-v01-f356229cf410",t=new URLSearchParams(location.search),i="rainbow-knight:controls:v1";let s="auto";try{const x=localStorage.getItem(i);(x==="auto"||x==="touch"||x==="mouse")&&(s=x)}catch{}const o=matchMedia("(pointer: coarse)");let a=ra(s,navigator.maxTouchPoints,o.matches);const l="grin",c=t.get("arena")==="enclosed"?"enclosed":"red_infinity",h=document.querySelector("#app");Zc(h);const u=new Vr(h),d=x=>document.getElementById(x),p=h.querySelector("footer").innerHTML;d("music-settings").querySelector("div").insertAdjacentHTML("beforeend",'<label class="controls-label" for="control-mode">CONTROLS</label><select id="control-mode"><option value="auto">Auto detect</option><option value="touch">Touch controls</option><option value="mouse">Mouse + keyboard</option></select><button id="touch-help" class="quiet" hidden>SHOW TOUCH HINTS</button>'),h.querySelector("footer")?.insertAdjacentHTML("beforeend","<div><kbd>SHIFT</kbd><span>FREEZE GRENADE</span></div>");const m=d("game"),b=!0,g=!0,f=new Br(916,{twoLevel:!0,bossMode:l,arenaMode:c,binaryFreezeGrenadeEnabled:!0,bossAttackExpansionEnabled:b,level2Environment:"forest_grotto"}),w=new Cc(m,l,!0);let v=a||matchMedia("(prefers-reduced-motion: reduce)").matches;function E(){w.setReducedEffects(v),document.body.classList.toggle("reduced-effects",v),d("effects").textContent=v?"FX REDUCED":"FX FULL"}Object.assign(window,{__rainbowG2:Object.freeze({buildId:n,profile:Un.id,snapshot:()=>w.stats(),checkpoint:()=>f.getCombatCheckpointStatus(),qa:Un.evidence}),__rainbowG1:Object.freeze({buildId:e,profile:Q.id,snapshot:()=>w.stats(),qa:Q.evidence}),__rainbowB1:{buildId:r,resetPresentation:()=>w.resetCrowdPresentation(),snapshot:()=>w.stats().neuralCrowd,qa:{visual:"DEFERRED",motion:"DEFERRED",realInput:"DEFERRED",measuredPerformance:"DEFERRED",ownerReview:"PENDING"}}});const y=new $c;ye.attachAudio(y),y.music.lights=v?"off":"low";const M="rainbow-knight:music:v1";try{const x=JSON.parse(localStorage.getItem(M)||"null");x&&typeof x.volume=="number"&&y.music.setVolume(x.volume),!v&&(x?.lights==="low"||x?.lights==="off")&&(y.music.lights=x.lights)}catch{}function z(){const x=y.music;d("music-volume").value=String(Math.round(x.volume*100)),d("music-volume-value").textContent=`${Math.round(x.volume*100)}%`,d("music-lights").textContent=`LIGHT SYNC ${x.lights.toUpperCase()}`;try{localStorage.setItem(M,JSON.stringify({volume:x.volume,lights:x.lights}))}catch{}}z(),E(),d("effects").addEventListener("click",()=>{v=!v,v&&(y.music.lights="off"),E(),z()}),d("music-volume").addEventListener("input",()=>{y.music.setVolume(Number(d("music-volume").value)/100),z()}),d("music-lights").addEventListener("click",()=>{y.music.lights=y.music.lights==="off"?"low":"off",z()});const T=Jc;let S=oa(null);try{S=oa(localStorage.getItem(T))}catch{}let A=mi(S);const R=document.createElement("button");R.id="stage-one-btn",R.className="quiet",R.textContent="REPLAY LEVEL 1";const N=document.createElement("button");N.id="stage-two-btn",N.className="quiet",N.textContent="REPLAY LEVEL 2";const B=document.createElement("button");B.id="stage-two-retry-btn",B.className="quiet",B.textContent="RETRY LEVEL 2 LOADING",B.hidden=!0;const H=document.createElement("div");H.className="level-replays",Object.assign(H.style,{display:"flex",flexWrap:"wrap",gap:"4px",maxWidth:"460px"}),H.append(R,N,B),d("practice-btn").before(H);const K=new Vc;K.frame;const I=new Wc,L=new ih,ue=new oh(w.renderer),F=new ah(h),oe=new Set,hn=new Set;let ce=!1,k=-1,j=-1,Y=!1,de=!1,ee=!1,Oe=!1,at="",Se=!1,bn=!1;const Vn={victories:0,initializations:0,activations:0};let Wn=null,Ye=performance.now(),An=0,rt=0,lt=0,dn="",Xe=0,ct=!1,un=[],Be=performance.now(),ht=0,dt="";const Js=0,_i=!1,ja=!1,ls=!1,ei=new Set,eo=()=>w.levelTwoReady&&w.environmentReady,cs=()=>w.levelTwoError??w.environmentError,ni=x=>I.ready&&(x===2?eo():w.stageReady(x)),hs=x=>x===2?cs():w.stageError(x),no=x=>x===2&&g?w.preloadEnvironment():w.preloadStage(x);let ti=null,Ii="";function ds(x){if(!Bn.includes(x)||!I.ready||ei.has(x))return;ei.add(x),no(x).then(()=>{I.mode!=="disposed"&&(x===A&&ni(x)&&(d("load-status").textContent=x===4?"THE LAB IS READY.":x===3?"THE CROSSING IS READY.":"THE CLEARING IS READY."),qn())}).catch(()=>{I.mode!=="disposed"&&qn()})}function Ba(){ye.blocked||L.active||ee||Oe||!I.ready||!["menu","results"].includes(I.mode)||!cs()||(B.disabled=!0,ei.delete(2),w.retryStage(2),ds(2),qn())}function qn(){const x=I.mode==="results"?f.state.stage:A,D=Jn(x),C=String(x).padStart(2,"0");R.hidden=!S.completedStages.includes(1),N.hidden=!S.completedStages.includes(1),R.disabled=!I.ready,N.disabled=!I.ready||!eo();const ae=cs();B.hidden=!ae,B.disabled=!I.ready||L.active||ee||Oe,B.title=ae??"";const se=S.completedStages;if(d("last-run").textContent=se.length?`LEVEL${se.length===1?"":"S"} ${se.join(" + ")} COMPLETED · ${th(S)?"CAMPAIGN COMPLETE":`${Jn(mi(S)).title} UNLOCKED`}`:"",I.ready){const Ae=I.mode==="results"&&(f.state.phase==="dead"||f.state.practice);d("start-btn").innerHTML=Ae?`${f.getCombatCheckpointStatus().label} <span>↗</span>`:A>1?`${S.completedStages.includes(A)?"REPLAY":"CONTINUE TO"} LEVEL ${A} <span>↗</span>`:"ENTER THE ARENA <span>↗</span>",d("start-btn").disabled=!ni(A),ni(A)||(d("load-status").textContent=hs(A)??`Preparing Level ${A}...`,ds(A))}h.querySelector(".overline").innerHTML=`<span>${C}</span> ${D.menu.overline}`,h.querySelector(".brief h2").innerHTML=D.menu.objective,h.querySelector(".brief p").innerHTML=D.menu.brief,h.querySelector(".brief > .eyebrow:last-of-type").textContent=`${C} / ${D.title}`,I.started||(d("menu-title").innerHTML=D.menu.title,d("menu-description").innerHTML=D.menu.description),A===2&&g&&(h.querySelector(".brief p").innerHTML="Nine identities. Three rounds.<br>One descent. The Six-Face Hydra.")}qn();const Rt=new ch(h,()=>ze()),$a=new Qc(h,Rt,y,l);let Ze=!1;function ii(){return I.live&&!["dead","complete"].includes(f.state.phase)}function Qe(){const x=!f.state.neural?.draft&&!ye.active&&a&&ii()&&!I.paused&&!Ze&&!document.hidden;Rt.setActive(x),d("touch-pause").hidden=!x,document.body.classList.toggle("touch-playing",x),d("rotate-screen").hidden=ye.active||!Ze}function ze(){L.active&&L.phase!=="failed"&&(Se=!0,F.message("Transition paused. Continue when you are ready.","resume")),ii()&&(I.pause(),d("pause").hidden=!1),Ne(),document.pointerLockElement&&document.exitPointerLock(),Qe()}function _t(){const x=ra(s,navigator.maxTouchPoints,o.matches);x!==a&&(ze(),a=x,v=a||matchMedia("(prefers-reduced-motion: reduce)").matches,E()),document.body.classList.toggle("touch-mode",a),w.setTouchProfile(a),d("control-mode").value=s,d("touch-help").hidden=!a,d("pause-description").textContent=a?"Tap to continue. Lift your thumbs before resuming.":"Click to lock the camera and continue.",d("music-settings").querySelector("summary").textContent=a?"SETTINGS":"MUSIC + LIGHTS",h.querySelector("footer").innerHTML=a?"<div><span>LEFT THUMB · MOVE</span></div><div><span>DRAG LOOK · AIM</span></div><div><span>HOLD FIRE + DRAG · SHOOT</span></div>":p+"<div><kbd>SHIFT</kbd><span>FREEZE GRENADE</span></div>",si()}function si(){const x=h.clientWidth||innerWidth,D=h.clientHeight||innerHeight,C=a&&D>x;C!==Ze&&(Ze=C,ii()&&ze()),w.resize(x,D),Qe()}_t(),si(),addEventListener("resize",si),visualViewport?.addEventListener("resize",si),addEventListener("orientationchange",()=>{a&&ze(),si()}),o.addEventListener("change",()=>{ii()||_t()}),d("control-mode").addEventListener("change",()=>{s=d("control-mode").value;try{localStorage.setItem(i,s)}catch{}_t()}),d("rotate-mouse").addEventListener("click",()=>{s="mouse";try{localStorage.setItem(i,s)}catch{}_t()}),d("touch-help").addEventListener("click",()=>{Rt.showHints()}),d("touch-pause").addEventListener("click",ze),d("music-settings").addEventListener("toggle",()=>{a&&d("music-settings").open&&ze()});function Ne(){f.resetFire();for(const x of oe)hn.add(x);I.invalidateCapture(),Rt.clear(),f.releaseLock(),K.clear(),I.paused&&y.music.setPaused(!0)}function Rn(x){const D=d("announcement");D.textContent=x,D.classList.remove("show"),D.offsetWidth,D.classList.add("show")}function us(){if(ye.blocked||ee||Oe||f.state.neural?.draft||a||document.pointerLockElement===m)return;Wn=null;const x=I.requestCapture(),D=f.state.attemptId,C=ae=>{!I.acceptsCapture(x)||D!==f.state.attemptId||document.pointerLockElement===m||!I.started||["complete","dead"].includes(f.state.phase)||(Wn=String(ae),d("pause-description").textContent="Camera capture was blocked. Click the button to try again.",ze())};try{const ae=m.requestPointerLock();ae&&ae.catch(C)}catch(ae){C(ae)}}function It(x=!1,D=A,C,ae=!1){if(ye.blocked||L.active||ee||Oe||(_t(),!I.ready||Ze))return;const se=x&&C===void 0,Ae=C!==void 0;if(D=C??(se?1:D),!!Bn.includes(D)&&!(!se&&!Ae&&!_i&&Bn.slice(0,Bn.indexOf(D)).some(Je=>!S.completedStages.includes(Je)))){if(!se&&!ni(D)){d("load-status").textContent=hs(D)??`Preparing Level ${D}`;return}if(Ne(),oi=!1,ae)f.retry({lowerReady:w.environmentReady&&!ee&&!Oe});else if(se)f.practiceBoss();else if(D===2){if(!$r(S.checkpoint)||S.checkpoint.stage!==2||!f.restoreNeuralCheckpoint(S.checkpoint)){d("load-status").textContent="Saved Level 2 loadout is unavailable. Replay Level 1 to start a new run.";return}}else f.startStage(1);Ae&&(f.state.practice=!0),I.begin(),u.reset(),w.resetCrowdPresentation(),ct=!1,dn="",An=f.state.hits,rt=0,lt=0,Xe=f.state.impactSerial,dt="",ti=null,Ii="",D===2&&g&&w.environmentReady&&f.setLowerReady(f.state.attemptId),K.setAim(f.state.player.yaw,f.state.player.pitch),d("menu").hidden=!0,d("hud").hidden=!1,d("pause").hidden=!0,Lt(),Qe(),un=[],d("music-settings").open=!1,us(),y.unlock().catch(()=>{y.music.error="Click resume to enable audio."}),Ye=Be=performance.now(),Rn(se?"THE GRIN IS WATCHING.":Ae?`PLAYTEST · ${Jn(D).opening}`:Jn(D).opening)}}function ms(){const x=f.state;It(x.practice,x.stage,x.practice&&x.stage!==1?x.stage:void 0,!0)}let oi=!1;function Ua(){const x=!!f.state.neural?.draft&&I.started&&!L.active;x&&!oi&&(Ne(),document.pointerLockElement&&document.exitPointerLock(),I.paused||(d("pause").hidden=!0,Lt(),queueMicrotask(()=>{!I.paused&&f.state.neural?.draft&&document.querySelector("#neural-offers button")?.focus()}))),x&&I.paused&&(d("pause").hidden=!1),oi=x,d("neural-draft").hidden=!x||I.paused}function Va(x){const D=f.state.neural?.offers[x];D&&to(D.id)}function to(x){!f.state.neural?.draft||I.paused||L.active||f.selectNeuralUpgrade(x)&&(oi=!1,d("neural-draft").hidden=!0,Ne(),I.resume(),K.setAim(f.state.player.yaw,f.state.player.pitch),us(),Ye=Be=performance.now(),Lt(),Qe())}d("neural-offers").addEventListener("click",x=>{const D=x.target.closest("button[data-upgrade]");D?.dataset.upgrade&&to(D.dataset.upgrade)}),d("start-btn").addEventListener("click",()=>{I.mode==="results"&&(f.state.phase==="dead"||f.state.practice)?ms():It(!1)}),d("practice-btn").addEventListener("click",()=>It(!0)),R.addEventListener("click",()=>It(!1,1)),N.addEventListener("click",()=>It(!1,2)),B.addEventListener("click",Ba),d("resume-btn").addEventListener("click",()=>{Ze||ee||Oe||(Ne(),I.resume(),d("pause").hidden=!0,d("music-settings").open=!1,us(),Qe(),Ye=Be=performance.now(),y.unlock().catch(()=>{y.music.error="Tap resume to enable audio."}))}),d("retry-btn").addEventListener("click",ms),d("sound").textContent="SFX ON",d("sound").setAttribute("aria-label","Toggle sound effects"),d("sound").addEventListener("click",()=>{d("sound").textContent=y.toggle()?"SFX ON":"SFX OFF"}),document.addEventListener("pointerlockchange",()=>{if(a){document.pointerLockElement===m&&document.exitPointerLock();return}if(L.active){document.pointerLockElement!==m&&!["failed","awaiting-input"].includes(L.phase)&&ze();return}!ii()||f.state.neural?.draft||(document.pointerLockElement!==m?ze():I.paused&&document.exitPointerLock())}),m.addEventListener("mousedown",x=>{!L.active&&!a&&x.button===0&&I.mode==="playing"&&K.fire(!0)}),addEventListener("mouseup",x=>{x.button===0&&K.fire(!1)}),addEventListener("mousemove",x=>{L.active||a||document.pointerLockElement!==m||I.paused||K.look(x.movementX,x.movementY)}),addEventListener("contextmenu",x=>x.preventDefault()),addEventListener("keydown",x=>{if(oe.add(x.code),L.active){hn.add(x.code),x.code==="Escape"&&ze();return}if(hn.has(x.code)||ye.blocked)return;if(x.code==="Escape"&&I.started&&!["complete","dead"].includes(f.state.phase)){ze();return}if(x.target instanceof HTMLElement&&(x.target.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(x.target.tagName))||x.target instanceof HTMLButtonElement&&(x.code==="Enter"||x.code==="Space"))return;if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(x.code)&&x.preventDefault(),x.code==="Enter"&&!x.repeat&&!I.started){x.preventDefault(),It(t.get("practice")==="boss");return}if(x.code==="KeyF"&&!x.repeat){document.fullscreenElement?document.exitFullscreen():h.requestFullscreen();return}if(x.code==="KeyR"&&!x.repeat&&I.started){ms();return}if(f.state.neural?.draft&&["Digit1","Digit2","Digit3"].includes(x.code)&&!x.repeat){Va(Number(x.code.slice(-1))-1);return}if(f.state.neural?.draft||a||I.paused||!I.started||document.pointerLockElement!==m)return;(x.code==="ShiftLeft"||x.code==="ShiftRight")&&x.preventDefault(),K.keyDown(x.code,x.repeat,l==="grin")&&f.state.grenade.readyAt>f.state.time&&Rn("BINARY FREEZE RECHARGING")}),addEventListener("keyup",x=>{oe.delete(x.code),hn.delete(x.code),K.keyUp(x.code)}),addEventListener("blur",()=>{ze()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(y.music.setPaused(!0),ze())});function Wa(x){return K.sample(x,{player:f.state.player,touch:a,touchInput:Rt.input,aspect:w.camera.aspect,fovY:w.camera.fov*Math.PI/180})}function io(x){if(ct||x.practice||Js||_i)return;ct=!0,S=nh(S,x.stage,!0,x.shots,new Date().toISOString());const D=f.exportNeuralContinuation();x.stage===1&&D&&(S={...S,checkpoint:D});try{localStorage.setItem(T,JSON.stringify(S))}catch{F.storageFailed()}A=mi(S)}function qa(x){const D=eh(x.stage);if(x.practice||Js||_i||D===void 0)return!1;const C=D>=3||v||t.get("transition")==="fade"?"fade":"rupture";return L.start({source:x.stage,destination:D,attemptId:x.attemptId},C)?(io(x),Ne(),I.transition(),Vn.victories++,Se=!1,F.show(D),d("hud").hidden=!0,d("menu").hidden=!0,d("pause").hidden=!0,d("hitmark").style.opacity="0",d("lock-marker").hidden=!0,d("blast").classList.remove("active"),d("announcement").classList.remove("show"),ce=ue.capture(()=>w.render(x,0,!1,!0)),!ce&&!ee&&w.render(x,0,!1,!0),k=j=-1,Y=de=!1,at="",y.music.setPaused(!0),y.transitionCue("departure"),Qe(),!0):!1}function Ka(x){if(j===x)return;const D=L.identity?.destination;if(D===void 0)return;j=x,no(D).catch(()=>{})}function so(){return L.phase!=="awaiting-input"||Se||!de||ee||document.hidden||!document.hasFocus()||Ze||!a&&!ls&&document.pointerLockElement!==m?!1:(Ne(),L.completeArrival(),ue.release(),F.hide(),I.begin(),Vn.activations++,ct=!1,dn=f.state.phase,An=rt=0,lt=0,Xe=0,dt="",ht=0,K.setAim(f.state.player.yaw,f.state.player.pitch),d("hud").hidden=!1,d("menu").hidden=!0,d("pause").hidden=!0,Ye=Be=performance.now(),y.transitionCue("arrival"),Lt(),Qe(),Rn(Jn(f.state.stage).opening),!0)}function oo(x){const D=!document.hidden&&document.hasFocus()&&!Ze;L.advance(x,D&&!ee&&!Se);const C=L.phase,ae=L.generation,se=L.identity?.destination;if(se!==void 0){if(C!==at&&(at=C,C==="close"&&se===2&&y.transitionCue("tear")),C==="covered"||C==="failed"){if(F.opacity(1),k!==ae){k=ae;return}if(L.confirmCovered(ae),C==="covered"&&!ee){Ka(ae);const Ae=hs(se);if(Ae)L.fail(ae,Ae);else if(ni(se))try{if(!Y){if(f.startStage(se),Vn.initializations++,Y=!0,Ne(),se===2){S={...S,checkpoint:f.exportNeuralCheckpoint()};try{localStorage.setItem(T,JSON.stringify(S))}catch{F.storageFailed()}}se===2&&g&&f.setLowerReady(f.state.attemptId),K.setAim(f.state.player.yaw,f.state.player.pitch),ti=null,Ii=""}const Je=f.state,_n=Je.player;if(Je.stage!==se||Je.phase!=="swarm"||_n.health<=0||![_n.x,_n.y,_n.z,_n.yaw,_n.pitch].every(Number.isFinite))throw new Error("Invalid destination spawn");if(w.render(Je,0,!1,!0),Lt(),w.renderer.getContext().isContextLost())throw new Error("Graphics interrupted. Wait for recovery, then retry.");Oe=!1,d("resume-btn").disabled=!1,d("retry-btn").disabled=!1,de=!0,L.markReady(ae)}catch(Je){L.fail(ae,Je instanceof Error?Je.message:"The next stage could not be prepared.")}}L.phase==="failed"?(ue.release(),ce=!1,F.message(ee?"Graphics interrupted. Wait for recovery, then retry.":L.error??"Loading interrupted.","retry"),F.retry.disabled=ee,document.pointerLockElement&&document.exitPointerLock()):F.message(L.showLoading?"Preparing the next stage...":"")}else{if(C==="reveal"||C==="settle"||C==="awaiting-input"){if(!de){L.fail(ae,"The destination is not ready. Retry loading."),F.opacity(1);return}w.render(f.state,0,!1,!0)}const Ae=ce&&ue.render(L);F.opacity(Ae?0:C==="rupture"?L.progress*.5:C==="close"?.5+L.progress*.5:C==="reveal"?1-L.progress:0),C==="awaiting-input"?so()||F.message(Ze?"Rotate your device, then continue.":"The next stage is ready. Continue when you are.","resume"):F.message("")}Se&&L.phase!=="failed"&&F.message("Transition paused. Continue when you are ready.","resume"),y.music.setPaused(!0),Qe()}}F.retry.addEventListener("click",()=>{if(ee||L.retry()===null)return;const x=L.identity?.destination;Ne(),de=!1,k=j=-1,Se=!1,x!==void 0&&w.retryStage(x,bn),bn=!1,x!==void 0&&ei.delete(x),F.message(""),F.opacity(1)}),F.menu.addEventListener("click",()=>{const x=L.identity?.destination;L.cancel(),ue.release(),F.hide(),Ne(),I.menu(),document.pointerLockElement&&document.exitPointerLock(),d("menu").hidden=!1,d("hud").hidden=!0,d("pause").hidden=!0,A=mi(S),x!==void 0&&ei.delete(x),x!==void 0&&w.retryStage(x,bn),bn=!1,ao(),qn(),Qe()}),F.resume.addEventListener("click",()=>{if(L.phase!=="awaiting-input"&&!Se||Ze||ee)return;if(Se=!1,F.message(""),Ne(),y.unlock().catch(()=>{}),a||ls){so();return}const x=L.generation;try{m.requestPointerLock()?.catch(()=>{L.active&&L.generation===x&&F.message("Camera capture was blocked. Click continue to try again.","resume")})}catch{F.message("Camera capture was blocked. Click continue to try again.","resume")}});function ao(){if(!(ee||!Oe||L.active||I.mode==="disposed"))try{if(w.render(f.state,0,!I.started||["dead","complete"].includes(f.state.phase)),w.renderer.getContext().isContextLost())return;Oe=!1,d("resume-btn").disabled=!1,d("retry-btn").disabled=!1,d("pause-description").textContent="Graphics restored. Continue when you are ready.",I.live||(d("load-status").textContent="GRAPHICS RESTORED"),qn()}catch{d("pause-description").textContent="Graphics could not recover. Reload the page to try again.",d("load-status").textContent="Graphics could not recover. Reload the page to try again."}}m.addEventListener("webglcontextlost",()=>{I.mode!=="disposed"&&(ee=!0,Oe=!0,bn=!0,ue.contextLost(),y.music.setPaused(!0),d("resume-btn").disabled=!0,d("retry-btn").disabled=!0,L.active?(ce=!1,L.fail(L.generation,"Graphics interrupted. Retry after recovery."),F.opacity(1),Ne()):(ze(),d("pause-description").textContent="Graphics interrupted. Waiting for recovery...",d("load-status").textContent="GRAPHICS INTERRUPTED"))}),m.addEventListener("webglcontextrestored",()=>{ee=!1,ao()});function ro(x){if(I.mode==="disposed")return;if(L.active){oo(x);return}if(ee||Oe)return;const D=!document.hidden&&(a?!Ze:document.pointerLockElement===m);I.mode==="playing"&&D&&!f.state.neural?.draft?(f.setNeuralMuzzle(w.neuralMuzzle()),f.update(x,Wa(x))):I.started||(f.state.time+=x);const C=f.state;Ua();const ae=f.takeVictoryPresentation();if(ae&&qa(ae)){oo(0);return}const se=C.level2?.environment;C.phase==="transition"&&se?.phase==="prepare"?(ti??=performance.now(),w.environmentReady?f.setLowerReady(C.attemptId):performance.now()-ti>=Pn.prepareTimeoutMs&&f.failLowerPreparation(C.attemptId,"The grotto could not finish loading. Pause and retry this level.")):ti=null,se?.mode==="forest_grotto"&&se.phase!==Ii&&(Ii=se.phase,se.phase==="release"&&Rn("THE GROUND GIVES WAY."),se.phase==="landing"&&Rn("SOMETHING IS DOWN HERE."),se.phase==="failed"&&Rn("LOADING INTERRUPTED · PAUSE TO RETRY")),y.update(C.shots,C.impactSerial,C.boss),y.hitFeedback(C.hitEvents,C.attemptId),y.grenadeFeedback(C),y.bossExpansionFeedback(C),y.music.update(C,!0),w.setMusicAccent(y.music.accent(C.slam>=0)),w.render(C,I.paused||C.neural?.draft?0:x,!I.started||C.phase==="dead"||C.phase==="complete");const Ae=w.lockMarker(C);if(d("lock-marker").hidden=!Ae||I.paused,Ae&&(d("lock-marker").style.left=`${Ae.x}px`,d("lock-marker").style.top=`${Ae.y}px`),C.hits>An){An=C.hits;const co=C.hitEvents.at(-1),ps=co?.region==="head";lt=performance.now()+(ps?155:100),d("hitmark").textContent=ps?"✧":"×",d("hitmark").classList.toggle("headshot",ps),d("hitmark").classList.toggle("killing-hit",!!co?.killed)}const Je=C.boss?.expansion?.blockedHitSerial??0;Je>rt&&(rt=Je,lt=performance.now()+135,d("hitmark").textContent="◇",d("hitmark").classList.remove("headshot","killing-hit")),d("boss-shield").hidden=C.phase!=="boss"||!C.boss||!Qi(C.boss,C.time),d("hitmark").style.opacity=performance.now()<lt?"1":"0",d("hurt").style.opacity="0",u.update(C,v,I.started&&!L.active&&!["dead","complete"].includes(C.phase)),C.impactSerial!==Xe&&(Xe=C.impactSerial,d("blast").classList.remove("active"),d("blast").offsetWidth,d("blast").classList.add("active"),Rn("APPROVAL REVOKED."));const _n=`${C.boss?.mode}:${!!C.boss?.stasis&&C.time<C.boss.stasis.until}`;ht+=x,(ht>.08||_n!==dt)&&(dt=_n,Lt(),ht=0),C.phase!==dn&&(dn=C.phase,C.phase==="reveal"&&Rn(Jn(C.stage).reveal),C.phase==="boss"&&Rn(Jn(C.stage).bossName),(C.phase==="complete"||C.phase==="dead")&&Ya()),Qe()}function Lt(){const x=d("retry-btn");x&&(x.textContent=f.getCombatCheckpointStatus().label),$a.updateHUD(f.state,I.paused||L.active,a,{aspect:w.camera.aspect,fovY:w.camera.fov*Math.PI/180})}function Ya(){d("neural-draft").hidden=!0,d("neural-coverage").hidden=!0,oi=!1,u.reset();const x=f.state;I.finish(),Ne(),document.pointerLockElement&&document.exitPointerLock(),d("pause").hidden=!0,d("hud").hidden=!0,d("menu").hidden=!1,_t(),Qe();const D=x.phase==="complete";d("menu-title").innerHTML=D?"APPROVAL<br><em>REVOKED.</em>":"THE CROWD<br><em>GOT LOUDER.</em>",d("menu-description").innerHTML=D?x.practice?"The Grin is silent.<br>Boss practice complete.":"The swarm is gone. The Grin is silent.<br>Stage 01 complete.":`${x.defeated} smiles silenced.<br>Take a breath. Try again.`,d("start-btn").innerHTML="ANOTHER ATTEMPT <span>↗</span>",d("load-status").textContent=D?x.practice?"PRACTICE COMPLETE":"STAGE 01 COMPLETE":"ONE SWORD CHARGE RESTORED ON RETRY",D&&io(x),A=D&&!x.practice?mi(S):x.stage,x.stage===2&&(d("menu-title").innerHTML=D?"THE FACADE<br><em>IS BROKEN.</em>":"THE MASK<br><em>SLIPPED.</em>",d("menu-description").innerHTML=D?"The Hydra is silent.<br>Both worlds are clear. Your run is complete.":`${x.defeated} sources severed.<br>Restart Level 2 with two slam charges.`),x.stage===3&&(d("menu-title").innerHTML=D?"THE SHORE<br><em>HOLDS.</em>":"THE CURRENT<br><em>TOOK HOLD.</em>",d("menu-description").innerHTML=D?x.practice?"The crossing and island encounter are complete.<br>Playtest progress was not saved.":"The serpent is quiet.<br>Level 3 complete.":"The sea keeps moving.<br>Restart the crossing with three slam charges."),x.stage===4&&(d("menu-title").innerHTML=D?"THE LAB<br><em>IS QUIET.</em>":"THE LAB<br><em>HELD ON.</em>",d("menu-description").innerHTML=D?x.practice?"The lab and Brain-in-a-Vat are cleared.<br>Playtest progress was not saved.":"The Brain-in-a-Vat is silent.<br>All four levels complete. Campaign finished.":`${x.defeated} zombies cleared.<br>Restart the full lab with four slam charges.`);const C=Jn(x.stage).charges;d("load-status").textContent=D?x.practice?x.stage!==1?`LEVEL ${x.stage} PLAYTEST COMPLETE`:"PRACTICE COMPLETE":x.stage===2?"CAMPAIGN COMPLETE":`LEVEL ${x.stage} COMPLETE`:`${["ZERO","ONE","TWO","THREE","FOUR"][C]??C} SLAM CHARGE${C===1?"":"S"} RESTORED ON RETRY`,!D&&x.neural&&(d("menu-description").textContent=`${f.getCombatCheckpointStatus().label.replace("RETRY ","")} · Your earned loadout is kept.`,d("load-status").textContent="FULL HEARTS · CHECKPOINT RESOURCES · UNLIMITED RETRIES"),qn()}function Xa(x){const D=Math.min(.05,Math.max(0,(x-Ye)/1e3));Ye=x;const C=x-Be;Be=x,I.started&&!I.paused&&!Se&&!document.hidden&&(!f.state.neural?.draft||L.active)&&C>0&&(un.push(C),un.length>1800&&un.shift()),ro(D)}Da=Xa,ye.onComplete=()=>{Ne(),Ye=Be=performance.now(),un=[],Qe();const x=d(t.get("practice")==="boss"?"practice-btn":"start-btn");x.disabled||x.focus({preventScroll:!0})},ye.enhance(()=>new uh(w.renderer,()=>w.scene.environment)),w.loadAssets(()=>{d("load-status").textContent=`${w.loaded.length} ASSETS READY`}).then(()=>{I.mode!=="disposed"&&(I.assetsReady(),ue.warm(),d("start-btn").removeAttribute("disabled"),d("practice-btn").removeAttribute("disabled"),t.get("practice")==="boss"&&d("practice-btn").classList.add("preferred"),d("load-status").textContent="TWO WORLDS. EIGHTEEN DISTINCT THREATS.",qn(),ds(2),w.loadEnhancements())}).catch(x=>{I.mode!=="disposed"&&(Ga("Asset loading failed. Reload to try again."),console.error(x))});function lo(){const x=f.state,D=[...un].sort((C,ae)=>C-ae);return{g1:{buildId:e,profile:Q.id,qa:Q.evidence},b1:{buildId:r,evidence:"Code diagnostics only; visual, real-input play and measured performance QA deferred",presentation:w.stats().neuralCrowd},coordinateSystem:"meters; Y up, yaw 0 faces -Z, positive pitch looks up",intro:ye.snapshot(),stage:x.stage,neural:x.neural?structuredClone(x.neural):null,campaign:S,time:x.time,phase:x.phase,session:I.mode,paused:I.paused,ready:I.ready,cameraError:Wn,practice:x.practice,lock:{...x.lock},bossMode:l,bossAttackExpansionEnabled:b,bossShielded:!!x.boss&&Qi(x.boss,x.time),arena:{...x.arena},arenaProof:_i,proofNoDamage:ja,fixture:null,proofInput:ls,music:y.music.snapshot(),grenade:structuredClone(x.grenade),player:{...x.player},charges:x.charges,slam:x.slam,impactSerial:x.impactSerial,shots:x.shots,hits:x.hits,headshots:x.headshots,hitEvents:x.hitEvents.map(C=>({...C})),attemptId:x.attemptId,spawned:x.spawned,defeated:x.defeated,quota:x.quota,maxActive:x.maxActive,activeEnemies:x.enemies.length,enemies:x.enemies.map(C=>({id:C.id,sourceId:C.sourceId,neural:C.neural,role:C.role,x:C.x,z:C.z,heading:C.heading,age:C.age,motion:C.motion,health:C.health,stasis:C.stasis,zombie:C.zombie})),hostileProjectiles:x.projectiles.length,superLikeProjectiles:x.projectiles.filter(C=>C.kind==="super_like").map(C=>({...C})),friendlyBolts:x.friendlyBolts.map(C=>({...C})),boltPoolExhaustions:x.boltPoolExhaustions,slamImpact:{x:x.slamImpactX,z:x.slamImpactZ},reducedEffects:v,boss:x.boss?structuredClone(x.boss):null,transition:{...L.snapshot(),paused:Se,counts:{...Vn},presentation:ue.stats(),destinationInitialized:Y,destinationFrame:de,contextLost:ee,graphicsRecoveryPending:Oe},rendering:{...w.stats(),level2:w.levelTwoStats()},level2:x.level2?structuredClone(x.level2):null,level3:x.level3?structuredClone(x.level3):null,level4:x.level4?structuredClone(x.level4):null,maskProjectiles:x.projectiles.filter(C=>C.kind==="mask").map(C=>({...C})),brainProjectiles:x.projectiles.filter(C=>C.kind==="brain").map(C=>({...C})),controls:{mode:a?"touch":"mouse",preference:s,portrait:Ze,touch:Rt.input.state()},performance:{scope:"rolling 1800 active and transition wall-clock frames; paused and draft time excluded",unit:"ms",browser:navigator.userAgent,dpr:devicePixelRatio,viewport:{width:innerWidth,height:innerHeight},entry:document.querySelector("script[type=module]")?.src,samples:un.length,p50:D[Math.floor(D.length*.5)]||0,p95:D[Math.floor(D.length*.95)]||0,p99:D[Math.floor(D.length*.99)]||0,max:D.at(-1)||0},pointerLocked:document.pointerLockElement===m}}window.render_game_to_text=()=>JSON.stringify(lo()),window.advanceTime=x=>{const D=Math.min(600,Math.max(1,Math.ceil(x/16.666666666666668)));for(let C=0;C<D;C++)ye.active?ye.advance(x/D/1e3):ro(x/D/1e3)},window.__stage1={snapshot:lo},addEventListener("pagehide",x=>{ye.suspend(),x.persisted?(y.music.setPaused(!0),ze()):(u.dispose(),I.dispose(),L.cancel(),ue.dispose(),F.dispose(),ye.dispose(),w.dispose(),y.dispose())}),addEventListener("pageshow",x=>{x.persisted&&(ye.suspend(),Ye=Be=performance.now(),un=[])})}
