import{r as fe,p as Pi,A as to,J as wt,R as qe,L as eo,K as bt,T as io,M as E,N as jt,Q as S0,U as xn,X as Be,Y as st,q as P,V as bn,Z as z,_ as oo,$ as so,a0 as ao,a1 as ro,o as cn,a2 as tn,C as $,a3 as f0,a4 as lo,a5 as A0,I as U,j as en,m as D,a6 as Ci,a7 as Pt,a8 as yt,a9 as dt,B as Tn,g as Lt,aa as yn,ab as En,ac as un,ad as ge,ae as Ft,af as ho,ag as vt,ah as Wt,ai as on,aj as Nn,ak as fn,al as vn,am as jn,an as On,ao as B,ap as nn,f as Kn,e as Gn,aq as me,ar as Xn,as as ji,at as Ve,au as U0,av as Li,aw as Fi,P as an,ax as kt,ay as H0,az as I0,aA as g0,aB as hn,b as Xt,O as co,c as we,t as J,aC as Le,aD as mo,aE as qn,aF as q0,aG as po,aH as uo,aI as fo,aJ as go,aK as ae,aL as wo,aM as Oi,W as Wi,aN as bo,aO as yo,aP as xo,aQ as vo,v as ko,u as Mo,aR as zo,E as R0,aS as _o}from"./render-Bg8D-hWd.js";const mn=Object.freeze({id:"rainbow-visual-vt1-proof-v1.1",enemy:"flank_drone",baseline:"4843f68802f325d36045084e82b4cc807104fee8",body:Object.freeze({radius:.24,height:1.8,maxRadius:.97,maxTop:.995,headLow:.725,headHigh:.992,triangles:5368,bones:48,influences:4}),capacity:Object.freeze({live:128,remains:16,reducedRemains:4,remainsSeconds:1.2}),caps:Object.freeze({crowdDrawGroups:40,roomTriangles:24e3,roomDraws:85,textureBytes:32*1024*1024,runtimeBytes:32*1024*1024,editableBytes:128*1024*1024}),evidence:Object.freeze({code:"RECORDED_SEPARATELY",visual:"OWNER_QA_PENDING",motion:"OWNER_QA_PENDING",performance:"OWNER_QA_PENDING"})});function So(){return!0}const Ao={signal_echo:{hp:2,size:15,speed:82,behavior:"chase",touchDamage:1},rabbit_glimpse:{hp:1,size:12,speed:128,behavior:"dash",touchDamage:1},notification_swarm:{hp:1,size:10,speed:104,behavior:"swarm",touchDamage:1},name_glitch_shade:{hp:2,size:14,speed:88,behavior:"phase",touchDamage:1},flank_drone:{hp:2,size:12,speed:96,behavior:"ranged",touchDamage:1,projectileSpeed:196,shootCooldownOpenMin:.9,shootCooldownOpenMax:1.45,shootCooldownMin:1,shootCooldownMax:1.7,firstShotDelay:.6},speaker_wraith:{hp:3,size:15,speed:78,behavior:"ranged",touchDamage:1,projectileSpeed:180},chair_knight:{hp:4,size:17,speed:72,behavior:"tank",touchDamage:1},hammer_rabbit:{hp:5,size:16,speed:108,behavior:"charge",touchDamage:1},loop_ghost:{hp:2,size:13,speed:98,behavior:"chase",touchDamage:1},decay_mote:{hp:1,size:8,speed:152,behavior:"swarm",touchDamage:1},double:{hp:5,size:15,speed:116,behavior:"mirror",touchDamage:1},dual:{hp:1,size:13,speed:198,behavior:"homing_missile",touchDamage:0},apex_rabbit:{hp:6,size:17,speed:126,behavior:"charge",touchDamage:2},cell_blob:{hp:2,size:11,speed:88,behavior:"blob",touchDamage:1},reach_shadow:{hp:3,size:13,speed:0,behavior:"wallhand",touchDamage:2},evolution_rabbit:{hp:10,size:19,speed:122,behavior:"boss",touchDamage:2},drift_hound:{hp:3,size:13,speed:110,behavior:"phase",touchDamage:1},arc_turret:{hp:2,size:11,speed:88,behavior:"ranged",touchDamage:1,projectileSpeed:220,shootCooldownOpenMin:.94,shootCooldownOpenMax:1.68,shootCooldownMin:.9,shootCooldownMax:1.46,firstShotDelay:.35}},Io={signal_echo:2.05,rabbit_glimpse:1.85,notification_swarm:1.55,name_glitch_shade:2.35,flank_drone:1.8,speaker_wraith:2.6,chair_knight:2.75,hammer_rabbit:2.7,loop_ghost:2.25,decay_mote:1.3,double:2.5,dual:1.65,apex_rabbit:3.15,cell_blob:1.7,reach_shadow:2.5,evolution_rabbit:3.6,drift_hound:1.65,arc_turret:2.15},E0=Object.freeze(Object.fromEntries(Object.entries(Ao).map(([s,n])=>[s,Object.freeze({...n,height:Io[s],name:s.split("_").map(t=>t[0].toUpperCase()+t.slice(1)).join(" ")})]))),Zt=Object.freeze(Object.keys(E0)),V0={1:["signal_echo","rabbit_glimpse","notification_swarm","flank_drone","chair_knight","hammer_rabbit","apex_rabbit","evolution_rabbit","arc_turret"],2:["name_glitch_shade","speaker_wraith","loop_ghost","decay_mote","double","dual","cell_blob","reach_shadow","drift_hound"]},Di={enemies:128,entryTell:.75},Y0=[["chaser"],["shooter"],["chaser","shooter"],["chaser","shooter","shooter"],["chaser","chaser","shooter","shooter"]],X0=[Array.from({length:16},()=>"chaser"),Array.from({length:8},()=>"shooter"),Array.from({length:72},(s,n)=>n%4===3?"shooter":"chaser")],$i={1:{id:1,title:"SYCOPHANCY",charges:1,quota:96,boss:"grin",arena:"configured",assets:"approval",menu:{overline:"THE MIRROR OF APPROVAL",objective:"Break the crowd.<br>Face the Grin.",brief:"A chrome arena. Two kinds of smile.<br>One sword charge. Make it count.",title:"EVERYONE<br><em>APPROVES.</em>",description:"The smiles are endless.<br>Your patience isn't."},opening:"SMILE. THEY ARE WATCHING.",reveal:"THE GRIN IS WATCHING.",bossName:"GRIN ORB",weaponHint:"HEADSHOTS ×1.5"},2:{id:2,title:"ANTHROPOMORPHISM",charges:2,quota:Y0.reduce((s,n)=>s+n.length,0),boss:"hydra",arena:"enclosed",assets:"anthropomorphism",packets:Y0,menu:{overline:"THE HUMAN FACADE",objective:"Break the masks.<br>Face the Hydra.",brief:"Five encounters. Six faces.<br>Two sword charges. One way through.",title:"THEY LOOK<br><em>HUMAN.</em>",description:"A familiar face. An unfamiliar mind.<br>Enter Anthropomorphism."},opening:"THEY ONLY LOOK HUMAN.",reveal:"SIX FACES. ONE MIND.",bossName:"THE SIX-FACE HYDRA",weaponHint:"BREAK THE MASK. FIND THE SOURCE."},3:{id:3,title:"COGNITIVE DRIFT",charges:3,quota:1,boss:"serpent",arena:"ocean",assets:"drift",menu:{overline:"THE DISTANT SHORE",objective:"Reach the island.<br>Face what follows.",brief:"An open sea. One fixed destination.<br>Three sword charges. Save them for land.",title:"SOMETHING<br><em>FOLLOWS.</em>",description:"Cross the water. Watch the wake.<br>The shore is real."},opening:"KEEP THE ISLAND IN SIGHT.",reveal:"IT FOLLOWED YOU ASHORE.",bossName:"THE RED SERPENT",weaponHint:"SHOOT THE EXPOSED HEAD · SLAM ON LAND"},4:{id:4,title:"COGNITIVE OFFLOADING",charges:4,quota:X0.reduce((s,n)=>s+n.length,0),boss:"brain_vat",arena:"enclosed",assets:"offloading",packets:X0,menu:{overline:"THE FINAL LAB",objective:"Clear the lab.<br>Face the Brain-in-a-Vat.",brief:"Two zombie roles. One finite encounter.<br>Four sword charges. The final fight.",title:"THE LAB<br><em>IS AWAKE.</em>",description:"Follow the cables. Watch the firing port.<br>The final encounter awaits."},opening:"THE LAB IS AWAKE.",reveal:"ONE BRAIN. ONE FINAL FIGHT.",bossName:"BRAIN-IN-A-VAT",weaponHint:"WATCH THE PORT · STRAFE THE BRAIN SHOTS"}};function Ro(s){const n=$i[s];if(!n)throw new RangeError(`Unknown stage: ${s}`);return n}const C={width:13.65,depth:14.3,eyeHeight:1.62,playerRadius:.28,speed:3.45,dashSpeed:9.5,dashSeconds:.18,dashCooldown:1.4,playerHealth:120,gunRate:12,gunDamage:14,enemyHealth:42,swordDamage:240,bossHealth:840,ordinaryTarget:48,hardCap:64,quota:$i[1].quota,projectileCap:192,tracerCap:48,contactDamage:7,headshotMultiplier:1.5,hitEventCap:16,hitEventSeconds:.24},Rn={speed:60,lifetime:.6,range:35,cap:32,muzzleRight:.24,muzzleDown:.18},sn={summonEnd:.1,raiseEnd:.32,apex:.5,impact:.68,dissolve:.95,duration:1.1,standingHeight:1.8,ceiling:4.8,strikeForward:.72},it={release:.25,recovery:.5,fuse:2,radius:.126,speed:5.4,upward:1.44},Z0=1.44,K0=.16,dn={bodyRadius:Z0,orbRadius:K0,orbCap:32,muzzleDown:.56,muzzleForward:Z0+K0+.03,revealSeconds:1.5,defeatSeconds:.9},X={spawnZ:3.9,halfWidth:4*C.speed,islandRadius:.45*Rn.range,islandZ:3.9-75*C.speed-.45*Rn.range,beachWidth:4.8,landHeight:.8,headRadius:1.05},Eo=(s,n)=>Math.hypot(s,n-X.islandZ);function Ct(s,n){return X.landHeight*Math.max(0,Math.min(1,(X.islandRadius-Eo(s,n))/X.beachWidth))}const rt={upperY:0,lowerY:-10*sn.standingHeight,release:.6,fall:2.2,landing:.75,prepareTimeoutMs:2e4};function gn(s){return s.stage===3?Ct(s.player.x,s.player.z):s.stage===2&&s.level2?.environment.mode==="forest_grotto"?s.level2.environment.floorY:0}const To=Object.freeze([]);function T0(s,n=0){return s.lifelikeEvents?Object.freeze(s.lifelikeEvents.records.filter(t=>t.id>n)):To}function Ln(s){const n=new Set,t=new Set,e=new Set;s.traverse(i=>{if(i instanceof E){n.add(i.geometry);for(const o of Array.isArray(i.material)?i.material:[i.material])t.add(o)}});for(const i of t){for(const o of Object.values(i))o instanceof jt&&e.add(o);i.dispose()}n.forEach(i=>i.dispose()),e.forEach(i=>i.dispose())}function gt(s,n,t=15e3){return n=fe(n),s.load(n,async e=>{const i=await fetch(n,{signal:e});if(!i.ok)throw new Error(`Model request failed: ${n} (${i.status})`);const o=await i.arrayBuffer();if(e.aborted)throw new Error("Model request cancelled");return(await new Pi().parseAsync(o,n.slice(0,n.lastIndexOf("/")+1))).scene},Ln,t)}function xt(s,n,t=8e3){return n=fe(n),s.load(n,async e=>{const i=await fetch(n,{signal:e});if(!i.ok)throw new Error(`Texture request failed: ${n} (${i.status})`);const o=await i.blob();if(e.aborted)throw new Error("Texture request cancelled");const r=URL.createObjectURL(o);try{return await new io().loadAsync(r)}finally{URL.revokeObjectURL(r)}},e=>e.dispose(),t)}function w0(s,n){return n=fe(n),s.load(n,async t=>{const e=await fetch(n,{signal:t});if(!e.ok)throw new Error(`HDR request failed: ${n} (${e.status})`);const i=await e.arrayBuffer();if(t.aborted)throw new Error("HDR request cancelled");const o=new to().parse(i),r=new wt(o.data,o.width,o.height,qe,o.type);return r.colorSpace=eo,r.minFilter=r.magFilter=bt,r.generateMipmaps=!1,r.flipY=!0,r.needsUpdate=!0,r},t=>t.dispose(),8e3)}async function Bi(s,n){return n=fe(n),s.load(n,async t=>{const e=await fetch(n,{signal:t});if(!e.ok)throw Error(`VT1 asset unavailable: ${n}`);const i=await e.arrayBuffer();if(t.aborted)throw Error("VT1 load cancelled");return new Pi().parseAsync(i,n.slice(0,n.lastIndexOf("/")+1))},t=>Ln(t.scene))}function Q0(s){Ln(s.root),s.material.dispose(),s.maps.forEach(n=>n.dispose())}async function Po(s){const n=await Bi(s,"/assets/visual-vt1/sideways-compliment.glb"),t=[];let e=null;try{const i=[];if(n.scene.traverse(a=>{a instanceof S0&&i.push(a)}),i.length!==1)throw Error("VT1 requires one authored skin, not a rigid kit");const o=i[0],r=o.geometry;for(const a of["position","normal","uv","skinIndex","skinWeight"])if(!r.getAttribute(a))throw Error(`VT1 skin lacks ${a}`);if((r.index?.count??r.getAttribute("position").count)/3>mn.body.triangles)throw Error("VT1 triangle cap");if(o.skeleton.bones.length>mn.body.bones)throw Error("VT1 bone cap");for(const a of["idle","walk","aim","release","hit","death"])if(!n.animations.some(l=>l.name===a))throw Error(`VT1 authored clip missing: ${a}`);for(const a of["basecolor","normal","orm"]){const l=await xt(s,`/assets/visual-vt1/sideways-${a}.png`);t.push(l);const h=a==="orm"?256:512,c=l.image;if(c.width!==h||c.height!==h)throw Error(`VT1 ${a} atlas dimensions`);l.flipY=!1,l.colorSpace=a==="basecolor"?xn:Be,l.generateMipmaps=!0,l.minFilter=st,l.magFilter=bt}return e=new P({name:"VT1_opal_chrome_and_skin",map:t[0],normalMap:t[1],normalScale:new bn(.34,.34),roughnessMap:t[2],metalnessMap:t[2],roughness:1,metalness:1,envMapIntensity:.75,vertexColors:!!r.getAttribute("color")}),{root:n.scene,mesh:o,clips:n.animations,maps:t,material:e}}catch(i){throw Ln(n.scene),e?.dispose(),t.forEach(o=>o.dispose()),i}}function Co(s,n){const t=oo(s.root);let e;if(t.traverse(l=>{l instanceof S0&&(e=l)}),!e)throw Error("VT1 clone lost skin");const i=new so(t),o={};for(const l of s.clips){const h=l.clone();["aim","release","hit"].includes(h.name)&&ao.makeClipAdditive(h,0,h);const c=i.clipAction(h);c.setLoop(ro,1/0).play(),c.enabled=!0,c.setEffectiveWeight(0),o[h.name]=c}const r=e.geometry.getAttribute("position"),a=[];for(let l=0;l<r.count;l++)r.getY(l)<.1&&a.push(l);return{root:t,mesh:e,mixer:i,actions:o,distance:0,lastX:n.x,lastZ:n.z,lastTime:-1,lastRelease:-100,lastHit:-100,lastBorn:-1,lastProjectileId:-1,feet:a,groundOffset:0,frozen:!1,disposed:!1}}function Ni(s,n,t){n>s.lastProjectileId&&t>=s.lastBorn&&(s.lastProjectileId=n,s.lastBorn=t,s.lastRelease=t)}const Jt=(s,n=0,t=1)=>Math.max(n,Math.min(t,s)),Qe=new z;function jo(s,n,t,e,i=null){if(s.disposed)throw Error("VT1 pose already disposed");const o=!!n.stasis&&t.time<Math.max(n.stasis.until,n.stasis.thawUntil);if(i===null&&o&&s.lastTime>=0){s.lastTime=t.time,s.lastX=n.x,s.lastZ=n.z,s.frozen=!0;return}const r=s.lastTime<0?0:Math.max(0,Math.min(.12,t.time-s.lastTime)),a=Math.hypot(n.x-s.lastX,n.z-s.lastZ);s.lastTime>=0&&!s.frozen&&(s.distance+=Math.min(a,.6));const l=r>0?a/r:Math.hypot(n.neural?.vx??0,n.neural?.vz??0);s.lastTime=t.time,s.lastX=n.x,s.lastZ=n.z,s.frozen=!1;for(const f of t.projectiles)f.neural&&f.ownerId===n.id&&f.bornAt!==void 0&&Ni(s,f.id,f.bornAt);const h=(f,v,w)=>{const k=s.actions[f];k.enabled=!0,k.setEffectiveWeight(w),k.time=Math.max(0,Math.min(k.getClip().duration-1e-7,v*k.getClip().duration))},c=f=>(f%1+1)%1,p=Jt(l/.8),u=Jt(n.neural?.tell??0),m=(Math.imul(n.id+7,1664525)>>>0)%1009/1009;if(i!==null){for(const f of Object.values(s.actions))f.setEffectiveWeight(0);h("death",Jt((t.time-i)/mn.capacity.remainsSeconds),1)}else{h("death",0,0),h("idle",c(n.age/2.4+m),1-p),h("walk",c(s.distance/.55+m),p),h("aim",u,u*.75);const f=t.time-s.lastRelease,v=t.time-s.lastHit;h("release",Jt(f/.22),f>=0&&f<.22?(1-f/.22)*(e?.72:1):0),h("hit",Jt(v/.2),v>=0&&v<.2?(1-v/.2)*.7:0)}s.mixer.update(0),s.root.updateMatrixWorld(!0),s.mesh.skeleton.update();let d=1/0;const g=s.mesh.geometry.getAttribute("position");for(const f of s.feet)Qe.fromBufferAttribute(g,f),s.mesh.applyBoneTransform(f,Qe),d=Math.min(d,Qe.y);s.groundOffset=Number.isFinite(d)?-d:0}function Lo(s,n,t){if(t){const e=Math.hypot(s.x,s.z),i=mn.body.radius*mn.body.maxRadius;e>i&&(s.x*=i/e,s.z*=i/e),s.y=Math.max(0,Math.min(mn.body.height*mn.body.maxTop,s.y)),n>=mn.body.height*mn.body.headLow&&(s.y=Math.max(mn.body.height*mn.body.headLow,Math.min(mn.body.height*mn.body.headHigh,s.y)))}else s.y=Math.max(0,s.y);return s}function Bt(s){s.disposed||(s.disposed=!0,s.mixer.stopAllAction(),s.mixer.uncacheRoot(s.root),s.root.clear())}const Nt=new cn,J0=new tn,ze=new tn,zt=new z,ni=new $(16777215),Fo=new $(10809343);class Oo{constructor(n,t){this.asset=t,this.root.name="VT1-authored-Sideways-Compliment",n.add(this.root),this.geometry=t.mesh.geometry.clone(),this.liveAttribute=new f0(new Float32Array(144),1),this.geometry.setAttribute("vt1Live",this.liveAttribute),this.paletteData=new Float32Array(768*144),this.palette=new wt(this.paletteData,192,144,qe,lo),this.palette.minFilter=this.palette.magFilter=A0,this.palette.generateMipmaps=!1,this.palette.needsUpdate=!0,this.material=t.material.clone(),Object.assign(this.material,{defines:{USE_SKINNING:""}}),this.material.onBeforeCompile=e=>{e.uniforms.vt1BonePalette={value:this.palette},e.uniforms.bindMatrix={value:t.mesh.bindMatrix},e.uniforms.bindMatrixInverse={value:t.mesh.bindMatrixInverse},e.vertexShader=e.vertexShader.replace("#include <skinning_pars_vertex>",`uniform mat4 bindMatrix; uniform mat4 bindMatrixInverse; uniform highp sampler2D vt1BonePalette; attribute float vt1Live;
mat4 getBoneMatrix(const in float i){int x=int(i)*4;int y=gl_InstanceID;return mat4(texelFetch(vt1BonePalette,ivec2(x,y),0),texelFetch(vt1BonePalette,ivec2(x+1,y),0),texelFetch(vt1BonePalette,ivec2(x+2,y),0),texelFetch(vt1BonePalette,ivec2(x+3,y),0));}`),e.vertexShader=e.vertexShader.replace("#include <skinning_vertex>",`#include <skinning_vertex>
if(vt1Live>0.5){float r=length(transformed.xz);if(r>0.2328)transformed.xz*=0.2328/r;transformed.y=clamp(transformed.y,0.0,1.791);if(position.y>=1.305)transformed.y=clamp(transformed.y,1.305,1.7856);}else{transformed.y=max(0.0,transformed.y);}`)},this.material.customProgramCacheKey=()=>"rainbow-vt1-instanced-skin-v1",this.mesh=new U(this.geometry,this.material,144),this.mesh.name="VT1-one-draw-deforming-crowd",this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(en),this.root.add(this.mesh)}asset;root=new D;mesh;palette;paletteData;geometry;material;liveAttribute;records=new Map;remains=[];attempt=-1;stage=-1;lastTime=-1;cursor=0;reduced=!1;disposed=!1;count=0;bases=new Map;lastRows=[];record(n){let t=this.records.get(n.id);return t||(t={enemy:structuredClone(n),pose:Co(this.asset,n),deadAt:null},this.records.set(n.id,t)),t.enemy=structuredClone(n),t}setReduced(n){this.reduced=n,this.pruneRemains()}pruneRemains(){const n=this.reduced?4:16;for(;this.remains.length>n;)Bt(this.remains.shift().pose)}reset(){for(const n of this.records.values())Bt(n.pose);for(const n of this.remains)Bt(n.pose);this.records.clear(),this.remains=[],this.attempt=this.stage=-1,this.lastTime=-1,this.cursor=0,this.count=0,this.mesh.count=0,this.bases.clear(),this.lastRows=[]}render(n,t=!0,e){if(this.mesh.count=0,this.count=0,this.bases.clear(),this.lastRows=[],this.root.visible=t&&!this.disposed,this.disposed)return;if((this.attempt!==n.attemptId||this.stage!==n.stage||n.time<this.lastTime)&&(this.reset(),this.attempt=n.attemptId,this.stage=n.stage),this.lastTime=n.time,n.phase==="dead"||n.phase==="complete"){this.reset(),this.cursor=n.lifelikeEvents?.serial??0;return}if(!t)return;for(const o of n.enemies)o.sourceId==="flank_drone"&&o.neural&&o.health>0&&this.record(o);for(const o of T0(n,this.cursor)){if(this.cursor=Math.max(this.cursor,o.id),o.attemptId!==n.attemptId)continue;if(o.kind==="projectile"){if(o.allegiance==="hostile"&&o.ownerId!==void 0&&o.bornAt!==void 0){const a=this.records.get(o.ownerId);a&&Ni(a.pose,o.projectileId,o.bornAt)}continue}if(o.sourceId!=="flank_drone")continue;const r=this.record(o.snapshot);o.kind==="hit"&&(r.pose.lastHit=o.time),o.kind==="removal"&&(this.records.delete(o.targetId),o.reason==="killed"&&n.time-o.time<1.2?(r.deadAt=o.time,this.remains.push(r),this.pruneRemains()):Bt(r.pose))}const i=new Set;for(const o of n.enemies)o.sourceId!=="flank_drone"||!o.neural||o.health<=0||this.count>=128||(i.add(o.id),this.draw(this.record(o),n),this.count++);for(const[o,r]of this.records)i.has(o)||(Bt(r.pose),this.records.delete(o));this.remains=this.remains.filter(o=>{const r=o.deadAt!==null&&n.time>=o.deadAt&&n.time-o.deadAt<1.2&&(!e||e.has(o.enemy.id));return r||Bt(o.pose),r}),this.pruneRemains();for(const o of this.remains)this.draw(o,n);this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.liveAttribute.needsUpdate=!0,this.palette.needsUpdate=!0}draw(n,t){const e=this.mesh.count++;if(e>=144)throw Error("VT1 capacity exceeded");const i=n.enemy;jo(n.pose,i,t,this.reduced,n.deadAt);const o=n.pose.mesh.skeleton.boneMatrices;J0.makeTranslation(0,n.pose.groundOffset,0);for(let a=0;a<48;a++)a<n.pose.mesh.skeleton.bones.length?(ze.fromArray(o,a*16),ze.premultiply(J0)):ze.identity(),ze.toArray(this.paletteData,e*48*16+a*16);Nt.position.set(i.x,gn(t),i.z),Nt.rotation.set(0,i.heading,0),Nt.scale.set(i.radius/.24,i.neural.height/1.8,i.radius/.24),Nt.updateMatrix(),this.mesh.setMatrixAt(e,Nt.matrix),n.deadAt===null&&this.bases.set(i.id,Nt.matrix.toArray());const r=(i.flash>0?ni:i.stasis&&t.time<i.stasis.until?Fo:ni).clone();n.deadAt!==null&&r.multiplyScalar(Math.max(.35,1-(t.time-n.deadAt)/1.2)),this.mesh.setColorAt(e,r),this.liveAttribute.setX(e,n.deadAt===null?1:0),this.lastRows.push({id:i.id,row:e,dead:n.deadAt!==null,pose:n.pose})}poseStatus(n){const t=this.records.get(n)?.pose;return t?{lastRelease:t.lastRelease,lastProjectileId:t.lastProjectileId,frozen:t.frozen}:null}actorBase(n){const t=this.bases.get(n);return t?[...t]:null}apertureIntersection(n,t,e){const i=this.lastRows.find(u=>u.id===n&&!u.dead),o=this.bases.get(n);if(!i||!o)return null;const r=i.pose.mesh.skeleton.bones.findIndex(u=>u.name==="chest");if(r<0)throw Error("VT1 chest aperture bone missing");const l=new tn().fromArray(i.pose.mesh.skeleton.boneMatrices,r*16).premultiply(new tn().makeTranslation(0,i.pose.groundOffset,0)).premultiply(new tn().fromArray(o)).clone().invert(),h=new z(t.x,t.y,t.z).applyMatrix4(l),c=new z(e.x,e.y,e.z).transformDirection(l);if(Math.abs(c.z)<1e-8)return{forward:!1,ellipse:1/0};const p=(.075-h.z)/c.z;return h.addScaledVector(c,p),{forward:p>=0,ellipse:Math.hypot(h.x/.017,(h.y-1.152)/.024),nativeIntersection:h.toArray()}}vertices(n,t=!0){const e=this.lastRows.find(a=>a.id===n);if(!e)return null;const i=e.pose.mesh.geometry,o=i.getAttribute("position"),r=[];for(let a=0;a<o.count;a++)zt.fromBufferAttribute(o,a),e.pose.mesh.applyBoneTransform(a,zt),zt.y+=e.pose.groundOffset,t&&Lo(zt,o.getY(a),!e.dead),r.push(zt.x,zt.y,zt.z);return r}stats(){return{profile:mn.id,identity:"flank_drone",actors:this.count,remains:this.remains.length,drawGroups:1,bones:this.asset.mesh.skeleton.bones.length,triangles:(this.geometry.index?.count??this.geometry.getAttribute("position").count)/3,paletteBytes:this.paletteData.byteLength,capacity:128,reduced:this.reduced,disposed:this.disposed,ownerQA:"PENDING",measuredPerformance:null}}dispose(){this.disposed||(this.reset(),this.disposed=!0,this.mesh.dispose(),this.geometry.dispose(),this.material.dispose(),this.palette.dispose(),this.root.removeFromParent())}}function Wo(s){if(!s||typeof s!="object")return!1;const n=s;if(n.schema!=="rainbow-g2-motion-v1"||n.rootTranslation!==!1||!n.curves||!n.hero)return!1;for(const t of["support","weight","settle","turn"]){const e=n.curves[t];if(!Array.isArray(e)||e.length<3||e.length>16||!Array.isArray(e[0])||e[0][0]!==0||!Array.isArray(e.at(-1))||e.at(-1)?.[0]!==1)return!1;for(let i=0;i<e.length;i++)if(!Array.isArray(e[i])||e[i].length!==2||!e[i].every(Number.isFinite)||Math.abs(e[i][1])>1||i>0&&e[i][0]<=e[i-1][0])return!1}for(const t of Zt){const e=n.hero[t];if(!e||![e.stance,e.stride,e.weight,e.secondaryLag].every(Number.isFinite)||e.stance<.5||e.stance>.8||e.stride<.08||e.stride>.2||e.weight<0||e.weight>.02||e.secondaryLag<0||e.secondaryLag>.25)return!1}return Object.keys(n.hero).length===18}function Fe(s,n){const t=Math.max(0,Math.min(1,n));let e=1;for(;e<s.length-1&&s[e][0]<t;)e++;const i=s[e-1],o=s[e],r=(t-i[0])/Math.max(1e-8,o[0]-i[0]),a=r*r*(3-2*r);return i[1]+(o[1]-i[1])*a}function Do(s,n,t,e,i,o,r,a,l,h,c,p){const u=s.g2Motion;if(!u)return;const m=u.hero[s.id];if(!m)return;const d=(o/(Math.PI*2)%1+1)%1,g=Fe(u.curves.weight,d),f=p?.4:1,v=Fe(u.curves.turn,Math.abs(c)),w=(b,S,_,A)=>{const I=s.jointIndex[b];I!==void 0&&(e[I].x+=S,e[I].y+=_,e[I].z+=A)},k=(b,S)=>{const _=s.jointIndex[b];_!==void 0&&(t[_].y+=S)},M=g*m.weight*r*(1-a*.7)*(1-l*.45);k("pelvis",-Math.abs(M)*.32),k("lumbar",-Math.abs(M)*.58),k("chest",-Math.abs(M)),w("pelvis",0,Math.sin(o)*.018*r,Math.cos(o)*.013*r),w("lumbar",0,-Math.sin(o)*.014*r,-Math.cos(o)*.009*r),w("chest",Math.sin(o*2-m.secondaryLag)*.01*r,-Math.sin(o)*.023*r,-c*.009),w("head",-Math.sin(o*2-m.secondaryLag)*.004*r,Math.sign(c)*v*.021,0);const y=Fe(u.curves.settle,h);for(const b of[-1,1]){const S=b<0?"L":"R",_=Math.sin(o+(b<0?0:Math.PI));w(`shoulder${S}`,_*.028*r,c*.01,-b*a*.018),w(`elbow${S}`,-_*.032*r+y*.018,0,0),w(`hand${S}`,_*.018*r-y*.016,0,b*Math.sin(i*1.1+m.secondaryLag)*.007*f)}w("headJaw",Math.sin(i*1.2-m.secondaryLag)*.017*f+y*.012,0,0)}function $o(s,n,t){s.colorSpace=xn,n.colorSpace=Be,t.colorSpace=Be;for(const i of[s,n,t])i.flipY=!1,i.wrapS=i.wrapT=Ci,i.generateMipmaps=!0,i.minFilter=st,i.magFilter=bt,i.needsUpdate=!0;return new P({name:"RK_G2_Shared_Atlas",map:s,normalMap:n,normalScale:new bn(.55,.55),roughnessMap:t,metalnessMap:t,roughness:1,metalness:1,envMapIntensity:.62})}const Bo=Object.freeze({crowdRGBAWithMipmaps:16777216,bossRGBAWithMipmaps:12582912,totalRGBAWithMipmaps:29360128,measuredGPUMemory:null});class No{maps=[];pending=null;disposed=!1;load(n){return this.disposed?Promise.reject(Error("G2 boss materials disposed")):this.pending??=this.loadMaps(n).catch(t=>{throw this.maps.forEach(e=>e.dispose()),this.maps=[],this.pending=null,t})}async loadMaps(n){for(const t of["basecolor","normal","orm"]){const e=await xt(n,`/assets/graphics-g2/boss-${t}.png`);if(this.disposed)throw e.dispose(),Error("G2 boss materials disposed during load");e.colorSpace=t==="basecolor"?xn:Be,e.flipY=!1,e.wrapS=e.wrapT=Ci,e.generateMipmaps=!0,e.minFilter=st,e.needsUpdate=!0,this.maps.push(e)}}apply(n){if(this.maps.length!==3)throw Error("G2 boss atlas is not ready");n.traverse(t=>{if(t instanceof E)for(const e of Array.isArray(t.material)?t.material:[t.material])!(e instanceof P)||/Emission|Fractal|Deep_Recess|Hair/.test(e.name)||(e.normalMap=this.maps[1],e.normalScale.set(/Skin|Face/.test(e.name)?.2:.42,/Skin|Face/.test(e.name)?.2:.42),/Woven|Pixel_Shell/.test(e.name)&&(e.roughnessMap=this.maps[2],e.roughness=.78,e.metalness=Math.max(e.metalness,.12),e.envMapIntensity=.59),/Woven/.test(e.name)&&!e.map&&(e.map=this.maps[0],e.color.setHex(10725053)),e.needsUpdate=!0)})}owns(n){return this.maps.includes(n)}stats(){return{textures:this.maps.length,sharedBetweenBosses:!0,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.maps.forEach(n=>n.dispose()),this.maps=[])}}function Gi(s){!(s instanceof P)||/Emission|Energy|Fractal/i.test(s.name)||(/Black|Graphite|Metal|Shell|Body/i.test(s.name)&&(s.roughness=Math.max(.32,Math.min(.76,s.roughness)),s.envMapIntensity=.68),/White|Porcelain|Ceramic/i.test(s.name)&&(s.roughness=.43,s.envMapIntensity=.61),s.needsUpdate=!0)}const Go=["g2_shell","g2_limb","g2_extremity","g2_head","g2_jaw","g2_code_spine","g2_code_ribbon","g2_code_zero","g2_code_one"];class Uo{constructor(n){this.assets=n}assets;model=null;textures=[];material=null;kit=null;disposed=!1;pending=null;load(){return this.disposed?Promise.reject(new Error("G2 art loader disposed")):this.pending??=this.loadKit().catch(n=>{throw this.release(),this.pending=null,n})}async loadKit(){const n=await gt(this.assets,"/assets/graphics-g2/crowd-kit.glb");if(this.disposed)throw Ln(n),Error("G2 art disposed during load");this.model=n,n.updateMatrixWorld(!0);const t=new Map;for(const i of Go){const o=n.getObjectByName(i);if(!(o instanceof E)||t.has(i))throw Error(`G2 required authored form missing: ${i}`);const r=o.geometry;for(const l of["position","normal","uv"])if(!r.getAttribute(l))throw Error(`G2 ${i} lacks ${l}`);const a=r.getAttribute("position");if(a.count>4096)throw Error(`G2 ${i} vertex budget exceeded`);for(const l of a.array)if(!Number.isFinite(l))throw Error(`G2 ${i} contains a nonfinite vertex`);r.applyMatrix4(o.matrixWorld),r.computeBoundingBox(),r.computeBoundingSphere(),t.set(i,r)}for(const i of["basecolor","normal","orm"]){const o=await xt(this.assets,`/assets/graphics-g2/crowd-${i}.png`);if(this.disposed)throw o.dispose(),Error("G2 art disposed during texture load");this.textures.push(o);const r=o.image;if(r?.width!==1024||r?.height!==1024)throw Error(`G2 ${i} atlas must be 1024 square`)}this.material=$o(this.textures[0],this.textures[1],this.textures[2]);const e=await this.assets.load("G2 motion library",async i=>{const o=await fetch(fe("/assets/graphics-g2/crowd-motion.json"),{signal:i});if(!o.ok)throw Error("G2 motion library unavailable");const r=await o.json();if(!Wo(r))throw Error("G2 motion library invalid");return r},()=>{});if(this.disposed)throw Error("G2 art disposed during motion load");return this.kit={geometry:t,material:this.material,motion:e}}release(){this.model&&Ln(this.model),this.model=null,this.material?.dispose(),this.material=null,this.textures.forEach(n=>n.dispose()),this.textures=[],this.kit=null}stats(){return{loaded:!!this.kit,forms:this.kit?.geometry.size??0,textures:this.textures.length,storage:Bo,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.release())}}const Ot=Object.freeze({id:"rainbow-combat-g2-v1",baseline:"7df5612a582358c3cf41ae6a936e94897b3143ef",heroRoster:Object.freeze(["hammer_rabbit","rabbit_glimpse","flank_drone"]),rollout:"FULL_ROSTER_OWNER_QA_PENDING",sampling:Object.freeze({exposure:.92,desktopPixelRatio:1.5,touchPixelRatio:1,viewmodelFov:55}),caps:Object.freeze({actors:128,friendly:128,hostile:192,crowdDrawGroups:40,kitDrawGroups:32,retainedMaskGroups:8,atriumDraws:85,atriumTriangles:24e3,grinTriangles:13404,hydraTriangles:24896,runtimeArtBytes:32*1024*1024,editableArtBytes:128*1024*1024,incrementalTextureBytes:32*1024*1024,impactParticles:192,reducedImpactParticles:48,contactDecals:24,reducedContactDecals:8,particleSeconds:.65,decalSeconds:1.2,remains:16,reducedRemains:4,remainsSeconds:1.2,heartMeshes:6,heartTriangles:720,heartDrawCalls:12,splashes:3,splashSeconds:.65,splashOpacity:.35,reducedSplashSeconds:.25,reducedSplashOpacity:.15}),geometry:Object.freeze({radius:.97,top:.995,headLow:.725,headHigh:.992}),evidence:Object.freeze({hero:"OWNER_QA_PENDING",visual:"OWNER_QA_PENDING",motion:"OWNER_QA_PENDING",realInput:"OWNER_QA_PENDING",measuredPerformance:"OWNER_QA_PENDING",ownerReview:"PENDING"})}),V=Object.freeze({id:"rainbow-graphics-g1-v1",baseline:"293b3984bb26eb8ba0e8565e7b71b8879e3c6933",palette:Object.freeze({concrete:12171181,metal:3752004,pine:5269573,limestone:10920080,bone:16769445,teal:1351581,pink:15088504}),sampling:Object.freeze({exposure:.92,desktopPixelRatio:1.5,touchPixelRatio:1,viewmodelFov:55}),atrium:Object.freeze({sky:13094352,ambient:1.18,key:2.85,fill:.48,environment:.46,concreteNormal:.22,steelNormal:.085}),forest:Object.freeze({sky:14014407,ambient:1.28,key:2.82,fill:.4,environment:.5,groundNormal:.29,rockNormal:.48}),grotto:Object.freeze({sky:6449251,ambient:.96,key:1.82,coolBounce:7.8,warmBounce:9.6,environment:.3}),crowd:Object.freeze({boneRoughness:.66,paperRoughness:.88,metalRoughness:.38,metalness:.62,cavityRoughness:.98,codeRoughness:.56,codeEmission:.3,environment:.48,stance:.67,strideLift:.027,torsoCounter:.016,settle:.008}),motion:Object.freeze({foliageRadians:.012,fernRadians:.035,reducedWind:.35,gripRadians:.006,gripSeconds:.18}),effects:Object.freeze({coreEmission:1.1,hostileEmission:.82,tailEmission:.38,contactEmission:.85,friendlyTail:.23,hostileTail:.18,sparkRadius:.012}),caps:Object.freeze({actors:128,friendly:128,hostile:192,contacts:96,remains:16,reducedRemains:4,remainsSeconds:1.2,crowdDrawGroups:40,atriumDraws:85,atriumTriangles:24e3,newTextureBytes:49152,newGpuTextureBytes:65532}),evidence:Object.freeze({visual:"DEFERRED",motion:"DEFERRED",realInput:"DEFERRED",measuredPerformance:"DEFERRED",ownerReview:"PENDING"})}),Ho=Object.freeze({signal_echo:Object.freeze({stance:.69,stride:.94,settle:.8,follow:.7}),rabbit_glimpse:Object.freeze({stance:.6,stride:1.05,settle:.7,follow:1.15}),notification_swarm:Object.freeze({stance:.67,stride:1,settle:.35,follow:1.05}),flank_drone:Object.freeze({stance:.65,stride:1.02,settle:.68,follow:1.08}),chair_knight:Object.freeze({stance:.74,stride:.92,settle:1.2,follow:.62}),hammer_rabbit:Object.freeze({stance:.7,stride:.95,settle:1,follow:.82}),apex_rabbit:Object.freeze({stance:.66,stride:1.04,settle:.95,follow:.95}),evolution_rabbit:Object.freeze({stance:.72,stride:.92,settle:1.1,follow:.72}),arc_turret:Object.freeze({stance:.71,stride:.91,settle:.8,follow:.68}),name_glitch_shade:Object.freeze({stance:.67,stride:1,settle:.4,follow:1.1}),speaker_wraith:Object.freeze({stance:.73,stride:.9,settle:1.05,follow:.72}),loop_ghost:Object.freeze({stance:.67,stride:1,settle:.35,follow:1.12}),decay_mote:Object.freeze({stance:.67,stride:1,settle:.25,follow:1.18}),double:Object.freeze({stance:.67,stride:1,settle:.65,follow:.9}),dual:Object.freeze({stance:.67,stride:1,settle:.35,follow:1.08}),cell_blob:Object.freeze({stance:.67,stride:1,settle:.6,follow:.88}),reach_shadow:Object.freeze({stance:.67,stride:1,settle:.3,follow:.68}),drift_hound:Object.freeze({stance:.63,stride:1.06,settle:.9,follow:1.02})}),pe={name_glitch_shade:9991381,speaker_wraith:8441821,loop_ghost:11705301,decay_mote:12300012,double:9687771,dual:15777143,cell_blob:11838185,reach_shadow:14462332,drift_hound:10068695};function Ui(s,n,t,e,i=.854,o=!0){const r=s.joint("head","root",[0,i,.16],[.07,.11,.055]);if(o){s.ell(r,"bone",T.shell,[0,0,-.085],[t*.56,.103,e*.85],{region:"head"});for(const d of[-1,1])s.ell(r,"code",pe[s.id],[d*t*.46,-.004,-.017],[t*.069,.081,.095],{region:"head"});s.wear(r,[-t*.32,.056,e*.57],[.012,.05,.012],"head")}if(!n)return r;n.updateMatrixWorld(!0);const a=new dt().setFromObject(n),l=a.getSize(new z),h=a.getCenter(new z);if(![l.x,l.y,l.z].every(Number.isFinite)||l.y<=0||Math.max(l.x,l.z)<=0)throw Error("Invalid retained mask geometry");const c=t/Math.max(l.x,1e-8),p=.192/l.y,u=e/Math.max(l.z,1e-8),m=new tn().makeScale(c,p,u);return m.setPosition(-h.x*c,-h.y*p,-h.z*u+.06),n.traverse(d=>{if(!(d instanceof E))return;const g=d.geometry.clone().applyMatrix4(d.matrixWorld),f=Array.isArray(d.material)?d.material:[d.material];if(f.length===1){s.source(r,g,f[0],m.clone());return}const v=g.index?g.toNonIndexed():g;for(const w of v.groups){const k=new Tn;for(const M of Object.keys(v.attributes)){const y=v.getAttribute(M);k.setAttribute(M,new Lt(y.array.slice(w.start*y.itemSize,(w.start+w.count)*y.itemSize),y.itemSize,y.normalized))}s.source(r,k,f[w.materialIndex??0],m.clone())}v!==g&&v.dispose(),g.dispose()}),r}function tt(s,n,t,e=.07,i=T.code,o=!1){o?s.ring(n,"code",i,t,[e,.034,.045],.17):s.box(n,"code",i,t,[e*.26,.067,.052])}function lt(s,n,t,e=.33,i=0){const o=s.joint(n,"root",t,[.13,.11,.11]);s.link(o,"bone",T.shell,[0,0,0],[i,-e,0],.05,.031);for(let r=0;r<4;r++)tt(s,o,[i*r/3,-e*r/3,.045],.046,pe[s.id],r%2===0);return o}function ti(s,n=.43,t=.29,e=[-.27,.27]){for(const i of e)for(const o of[-1,1]){const r=`${o<0?"L":"R"}${i<0?"Back":"Front"}`,a=(t-.025)/2,l=s.joint(`hip${r}`,"root",[o*n,t,i],[.7,.1,.1]),h=s.joint(`knee${r}`,l,[0,-a,0],[1.1,.06,.06]),c=s.joint(`foot${r}`,h,[0,-a,0],[.68,.07,.08]);s.ell(l,"bone",T.shell,[0,0,0],[.155,.079,.15]),s.link(l,"bone",T.shell,[0,0,0],[0,-a,0],.07,.05),s.ell(h,"code",pe[s.id],[0,0,0],[.073,.032,.075]),s.link(h,"bone",T.shell,[0,0,0],[0,-a,0],.045,.034),s.ell(c,"code",pe[s.id],[0,0,.045],[.136,.025,.166])}}function qo(s,n,t){const e=pe[n];if(e===void 0)throw Error(`Not a mask ${n}`);switch(Ui(s,t,n==="decay_mote"?.63:n==="drift_hound"||n==="speaker_wraith"?.8:.72,n==="drift_hound"?.44:.28),n){case"name_glitch_shade":{for(let i=0;i<6;i++){const o=.15+i*.099,r=Math.sin(i*.9)*.18,a=s.joint(`spine${i}`,"root",[r,o,-.045],[.11,.12,.11]);s.ell(a,"bone",T.shell,[0,0,0],[.19,.068,.19]);for(const l of[-1,1])s.link(a,"code",e,[l*.11,0,0],[l*(.34+.04*Math.sin(i)),.008,-.1],.036,.025),tt(s,a,[l*.36,0,-.09],.055,e,i%2===0)}lt(s,"strandL",[-.23,.34,-.13],.29,-.06),lt(s,"strandR",[.26,.3,-.1],.25,.05);break}case"speaker_wraith":{s.joint("chest","root",[0,.46,0],[.075,.06,.07]),s.box("chest","bone",T.shell,[0,0,-.075],[1.04,.44,.35]),s.ell("chest","bone",T.shell,[0,0,.09],[.55,.23,.28]),s.ell("chest","cavity",T.ink,[0,.01,.34],[.39,.16,.048]),s.joint("diaphragm","chest",[0,.01,.33],[.06,.06,.06]);for(let i=0;i<3;i++)s.ring("diaphragm","code",i%2?e:T.shell,[0,0,i*.019],[.3-i*.065,.12-i*.024,.08],.12);for(const i of[-1,1]){const o=s.joint(`support${i<0?"L":"R"}`,"root",[i*.53,.45,0],[.075,.07,.05]);s.ell(o,"bone",T.shell,[0,0,0],[.095,.25,.17]);for(let r=0;r<4;r++)tt(s,o,[i*.026,-.16+r*.1,.17],.056,e,r%2===0)}ti(s,.35,.22,[0]),s.wear("chest",[-.26,.14,.33],[.025,.065,.01]);break}case"loop_ghost":{s.joint("loop","root",[0,.44,-.045],[.08,.12,.075]),s.ring("loop","bone",T.shell,[0,0,0],[.43,.32,.36],.16),s.ring("loop","code",e,[0,0,.14],[.43,.32,.06],.038);for(let i=0;i<5;i++)tt(s,"loop",[Math.sin(i*1.5)*.32,Math.cos(i*1.5)*.27,.26],.041,e,i%2===0);lt(s,"strandL",[-.2,.2,0],.16,-.12),lt(s,"strandR",[.17,.22,0],.18,.12),lt(s,"strandBack",[0,.2,-.19],.17);break}case"decay_mote":{s.joint("diamond","root",[0,.46,-.04],[.11,.14,.1]),s.add("diamond","bone",new yt(1,1),T.shell,[0,0,0],[.52,.27,.42]);for(let i=0;i<4;i++){const o=i*Math.PI/2,r=s.joint(`flutter${i}`,"diamond",[Math.cos(o)*.43,Math.sin(o)*.21,0],[.16,.16,.13]);s.ell(r,"code",e,[Math.cos(o)*.05,Math.sin(o)*.032,0],[.1,.046,.08]),tt(s,r,[0,0,.066],.045,e,i%2===0)}s.wear("diamond",[-.19,.11,.27],[.022,.071,.01]);break}case"double":{s.joint("bridge","root",[0,.58,-.08],[.05,.08,.05]),s.link("bridge","bone",T.shell,[-.48,0,0],[.48,0,0],.065);for(const i of[-1,1]){const o=s.joint(`column${i<0?"L":"R"}`,"root",[i*.43,.42,.02],[.11,.11,.085]);s.ell(o,"bone",T.shell,[0,0,0],[.19,.3,.24]),s.ell(o,"code",e,[i*.13,0,.15],[.04,.24,.068]);for(let r=0;r<5;r++)tt(s,o,[-i*.03,-.19+r*.093,.25],.065,e,r%2===0);s.wear(o,[-i*.08,.17,.22],[.02,.056,.01])}lt(s,"strandL",[-.43,.16,.02],.12,-.03),lt(s,"strandR",[.43,.16,.02],.12,.03);break}case"dual":{s.joint("dart","root",[0,.4,-.01],[.12,.1,.11]),s.add("dart","bone",new Pt(1,1,12,1),T.shell,[0,0,0],[.39,.61,.49],{rotation:[Math.PI,0,0]});for(const i of[-1,1]){const o=s.joint(`fin${i<0?"L":"R"}`,"dart",[i*.33,.09,0],[.14,.11,.11]);s.ell(o,"code",e,[i*.06,-.025,0],[.15,.11,.09])}for(const i of[-1,1])s.box("head","metal",e,[0,-.039,.258],[.4,.013,.03],{region:"head",rotation:[0,0,i*.18]});break}case"cell_blob":{for(const i of[-1,1]){const o=s.joint(`lobe${i<0?"L":"R"}`,"root",[i*.34,.36,-.02],[.065,.09,.07]);s.ell(o,"bone",T.shell,[0,0,0],[.39,.3,.48]),s.ring(o,"code",e,[0,0,.31],[.29,.23,.17],.09);for(let r=0;r<3;r++)tt(s,o,[(r-1)*.12,.1,.43],.049,e,r%2===0);s.wear(o,[-i*.16,.13,.4],[.025,.075,.01])}s.joint("seam","root",[0,.44,.43],[.05,.05,.05]),s.ell("seam","code",15457783,[0,0,0],[.037,.32,.039],{parentOnly:!0}),s.box("seam","cavity",T.ink,[.044,0,.025],[.017,.55,.024],{parentOnly:!0});break}case"reach_shadow":{s.joint("forearm","root",[0,.3,-.2],[.1,.12,.09]),s.ell("forearm","bone",T.shell,[0,0,0],[.21,.25,.2]),s.joint("palm","root",[0,.44,.07],[.13,.11,.11]),s.ell("palm","bone",13153181,[0,0,0],[.37,.14,.19]),s.ell("palm","code",e,[0,.008,.181],[.22,.075,.025]);for(let i=0;i<4;i++){const o=s.joint(`finger${i}`,"palm",[(i-1.5)*.18,.1,.012],[.35,.09,.1]);s.ell(o,"bone",13153181,[0,.065,0],[.069,.083,.066]);const r=s.joint(`fingerTip${i}`,o,[0,.12,0],[.35,.09,.1]);s.ell(r,"bone",13153181,[0,.035,.007],[.061,.052,.062]),tt(s,o,[0,.061,.063],.034,e)}s.joint("thumb","palm",[-.35,-.025,.01],[.24,.15,.12]),s.ell("thumb","bone",13153181,[-.069,.035,0],[.1,.07,.066]),s.wear("palm",[-.15,.063,.192],[.024,.065,.01]);break}case"drift_hound":{ti(s,.44,.3),s.joint("chest","root",[0,.43,-.045],[.1,.11,.08]),s.ell("chest","bone",T.shell,[0,0,0],[.48,.16,.55]),s.joint("muzzle","root",[0,.669,.24],[.09,.08,.075]),s.ell("muzzle","bone",T.shell,[0,0,0],[.36,.112,.49]),s.ell("muzzle","code",e,[0,.014,.43],[.23,.045,.042]);for(const i of[-1,1])for(let o=0;o<4;o++)tt(s,"chest",[i*.4,-.08+o*.058,.03],.05,e,o%2===0);lt(s,"tail",[0,.44,-.53],.21,.12),s.wear("chest",[-.25,.095,.36],[.028,.071,.01]);break}default:throw Error(`Unknown B1 mask ${n}`)}}const Vo=Object.freeze({signal_echo:{name:"Agreeing Pilgrim",silhouette:"bowed upright figure"},rabbit_glimpse:{name:"Eager Arrow",silhouette:"leaning arrow and twin tabs"},notification_swarm:{name:"Applause Bloom",silhouette:"open five-skull ring"},flank_drone:{name:"Sideways Compliment",silhouette:"asymmetric crescent and outward palm"},chair_knight:{name:"Approval Throne",silhouette:"heavy shrine block on squat feet"},hammer_rabbit:{name:"Clapping Idol",silhouette:"heavy upright U and raised thumbs"},apex_rabbit:{name:"Praise Hound",silhouette:"low four-support wedge and three tabs"},evolution_rabbit:{name:"Coronation Engine",silhouette:"five-face crown fan"},arc_turret:{name:"Ovation Fork",silhouette:"open palms on a narrow fork"}}),Ne=s=>s in Vo,Yo=Object.freeze({bone:16769445,pink:15088504,teal:1351581,orange:16747026,gold:16037938,ink:2431529,stone:8876131}),F=Yo;class P0{positions=[];colors=[];add(n,t,e=0,i=0,o=0,r=1,a=1,l=1,h=0,c=0){const p=n.index?n.toNonIndexed():n,u=p.getAttribute("position"),m=new z,d=new $(t),g=new tn().compose(new z(e,i,o),new yn().setFromEuler(new En(0,c,h)),new z(r,a,l));for(let f=0;f<u.count;f++)m.fromBufferAttribute(u,f).applyMatrix4(g),this.positions.push(m.x,m.y,m.z),this.colors.push(d.r,d.g,d.b);p!==n&&p.dispose(),n.dispose()}box(n,t,e,i,o,r,a,l=0){this.add(new un(1,1,1),a,n,t,e,i,o,r,l)}facet(n,t,e,i,o,r,a,l=0){const h=new ge(n.map(([p,u])=>new bn(p,u))),c=l?new Ft(h,{depth:l,bevelEnabled:!1,steps:1,curveSegments:1}).translate(0,0,-l/2):new ho(h);this.add(c,a,t,e,i,o,r,1)}disc(n,t,e,i,o,r,a=8){this.add(new vt(1,a),r,n,t,e,i,o,1)}flower(n,t,e,i,o,r=F.pink){const a=Array.from({length:16},(l,h)=>{const c=h*Math.PI/8,p=h%2?.62:1;return[Math.cos(c)*p,Math.sin(c)*p]});this.facet(a,n,t,e,i,o,r),this.disc(n,t,e+.002,i*.3,o*.3,F.teal,6)}banner(n,t,e,i,o,r){this.facet([[-.5,.5],[.5,.5],[.5,-.34],[.22,-.5],[0,-.25],[-.22,-.5],[-.5,-.34]],n,t,e,i,o,r,.025),this.flower(n,t+.05*o,e+.018,i*.32,o*.22,r===F.teal?F.bone:F.ink),this.box(n,t+o*.37,e+.018,i,.045*o,.008,F.gold)}blossom(n,t,e,i,o){this.add(new Wt(1,0),F.orange,n,t,e,i,o,i*.35),this.disc(n,t,e+i*.33,i*.47,o*.5,F.gold,6)}collar(n,t,e,i,o,r=7){for(let a=0;a<r;a++){const l=Math.PI*2*a/r;this.blossom(n+Math.cos(l)*i,t+Math.sin(l)*o,e,i*.32,o*.43)}}skull(n,t,e,i,o){const r=[[-.5,.12],[-.46,.37],[-.28,.5],[.28,.5],[.46,.37],[.5,.12],[.36,-.16],[.3,-.46],[-.3,-.46],[-.36,-.16]];this.facet(r,n,t,e,i,o,F.bone,.13);const a=e+.071;for(const l of[-1,1])this.flower(n+l*i*.235,t+o*.14,a,i*.205,o*.23),this.disc(n+l*i*.235,t+o*.14,a+.003,i*.132,o*.148,F.ink),this.disc(n+l*i*.235,t+o*.14,a+.005,i*.045,o*.052,F.teal,4);this.facet([[0,1],[-1,-1],[1,-1]],n,t-o*.065,a+.003,i*.052,o*.06,F.ink),this.box(n,t-o*.28,a,i*.64,o*.24,.008,F.ink);for(let l=0;l<5;l++)this.box(n+(l-2)*i*.115,t-o*.28,a+.008,i*.077,o*.185,.01,F.bone);this.flower(n,t+o*.365,a,i*.105,o*.1)}hand(n,t,e,i,o,r){if(this.box(n,t,e,i,o,.14,F.bone),r){this.box(n-i*.3,t+o*.68,e,i*.3,o*.68,.13,F.bone);for(let a=0;a<2;a++)this.box(n+i*.1,t+(a-.5)*o*.25,e+.073,i*.65,.008,.008,F.stone)}else{for(let a=0;a<4;a++)this.box(n+(a-1.5)*i*.245,t+o*.7-Math.abs(a-1.5)*o*.08,e,i*.18,o*.55,.12,F.bone);this.box(n-i*.59,t,e,i*.25,o*.45,.12,F.bone,-.5)}this.flower(n,t,e+.08,i*.37,o*.38)}finish(n){const t=new Tn;t.setAttribute("position",new on(this.positions,3)),t.setAttribute("color",new on(this.colors,3));const e=t.getAttribute("position");let i=1/0,o=-1/0,r=0;for(let l=0;l<e.count;l++)i=Math.min(i,e.getY(l)),o=Math.max(o,e.getY(l)),r=Math.max(r,Math.hypot(e.getX(l),e.getZ(l)));for(let l=0;l<e.count;l++)e.setXYZ(l,e.getX(l)/r,(e.getY(l)-i)/(o-i),e.getZ(l)/r);if(n!==void 0){const l=new P0;l.disc(0,n,.854,.13,.035,F.bone),l.disc(0,n,.86,.085,.023,F.ink),t.setAttribute("position",new on([...Array.from(e.array),...l.positions],3)),t.setAttribute("color",new on([...this.colors,...l.colors],3))}t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere();const a=new P({vertexColors:!0,roughness:1,metalness:0,flatShading:!0});return a.name="sycophancy-painted-facets",[{geometry:t,material:a}]}}function Xo(s){const n=new P0,t=(a=.38,l=.08)=>{for(const h of[-1,1])n.box(h*a,l,.05,.25,.13,.38,F.bone),n.box(h*a,l+.1,0,.15,.13,.19,F.teal)},e=(a=0,l=.44,h=.5,c=.28)=>{n.box(a,l,0,h,c,.32,F.teal),n.banner(a,l,.18,h*.8,c*.94,F.pink)},i=(a,l,h,c,p)=>{n.collar(a,l-p*.12,h-.025,c*.57,p*.48),n.skull(a,l,h,c,p)};if(s==="signal_echo"){t(.24);for(const a of[-1,1])n.box(a*.24,.31,-.09,.13,.27,.13,F.bone,a*.09),n.banner(a*.32,.49,.02,.25,.33,a<0?F.teal:F.pink);e(0,.55,.36,.28),i(-.08,.83,.19,.65,.25),n.box(.09,.6,.32,.18,.2,.13,F.bone,-.4),n.box(-.08,.57,.38,.18,.14,.13,F.bone,.4)}if(s==="rabbit_glimpse"){t(.35);for(const a of[-1,1])n.box(a*.29,.3,-a*.12,.14,.28,.13,F.bone,a*.45),n.banner(a*.4,.58,-.04,.44,.23,a<0?F.teal:F.pink);e(.1,.54,.36,.23),i(.15,.72,.28,.59,.2);for(const a of[-1,1])n.box(.15+a*.24,.93,.1,.13,.31,.07,F.bone,-a*.13),n.flower(.15+a*.24,.96,.14,.058,.041,F.orange),n.box(a*.42,.48,.23,.13,.22,.12,F.bone,a*.4)}if(s==="notification_swarm")for(let a=0;a<5;a++){const l=Math.PI/2+a*Math.PI*2/5,h=Math.cos(l)*.68,c=.5+Math.sin(l)*.34;n.blossom(h,c,0,.33,.18),n.skull(h,c,.17,.43,.19)}if(s==="flank_drone"){for(let a=0;a<5;a++){const l=Math.PI*.45+a*Math.PI*.28,h=Math.cos(l)*.66,c=.5+Math.sin(l)*.37;n.banner(h,c,0,.44,.25,a%2?F.teal:F.pink),a%2===0&&n.blossom(h,c,.05,.22,.08)}i(-.42,.57,.22,.54,.22),n.box(.18,.61,.36,.64,.08,.16,F.orange),n.hand(.44,.64,.61,.42,.2,!1)}if(s==="chair_knight"){t(.48),n.box(0,.54,-.03,1.46,.65,.7,F.bone),n.box(0,.62,.34,1.1,.39,.055,F.ink),n.skull(0,.65,.43,.61,.24),n.collar(0,.7,.35,.43,.16);for(const a of[-1,1])n.box(a*.62,.52,.39,.23,.54,.1,F.bone),n.flower(a*.62,.52,.45,.105,.09),n.banner(a*.56,.95,-.07,.32,.27,a<0?F.teal:F.pink),n.box(a*.75,.83,0,.07,.51,.08,F.gold);n.banner(0,.4,.44,.53,.2,F.pink),n.box(0,.81,.39,1.49,.04,.06,F.teal)}if(s==="hammer_rabbit"){t(.43),e(0,.44,.9,.37),i(0,.66,.22,.59,.23);for(const a of[-1,1])n.box(a*.65,.6,0,.3,.36,.32,F.teal),n.banner(a*.65,.59,.18,.29,.31,F.pink),n.collar(a*.65,.81,.03,.19,.055,5),n.hand(a*.65,.88,.08,.36,.18,!0)}if(s==="apex_rabbit"){n.box(0,.43,-.02,1.2,.27,.7,F.teal);for(const a of[-1,1])for(const l of[-.35,.34])n.box(a*.51,.2,l,.2,.33,.16,F.bone,a*-.18),n.box(a*.54,.07,l+.09,.3,.13,.29,F.bone);for(const a of[-1,1])n.banner(a*.46,.49,.31,.4,.27,a<0?F.teal:F.pink),n.blossom(a*.6,.4,.3,.23,.072);i(0,.48,.59,.72,.22);for(let a=-1;a<=1;a++)n.banner(a*.25,.79-Math.abs(a)*.04,0,.18,.42,a===0?F.teal:F.pink)}if(s==="evolution_rabbit"){n.facet([[-1,.22],[-.85,.5],[.85,.5],[1,.22],[.58,-.5],[-.58,-.5]],0,.34,0,1,.47,F.teal,.4);for(let a=-2;a<=2;a++){const l=a*.32,h=.66-Math.abs(a)*.075;n.banner(l,.85-Math.abs(a)*.065,-.12,.21,.36,a%2?F.orange:F.pink),i(l,h,.28,.39,.16),n.banner(l,.36,.35,.3,.3,a%2?F.bone:F.pink)}n.box(0,.49,.39,1.66,.035,.05,F.gold),n.facet([[0,-1],[1,0],[0,1],[-1,0]],0,.105,.16,.24,.11,F.orange)}if(s==="arc_turret"){t(.27),e(0,.35,.3,.32),i(0,.59,.32,.42,.18);for(const a of[-1,1])n.box(a*.49,.59,0,.11,.51,.14,F.teal,a*-.29),n.banner(a*.65,.65,.035,.21,.28,F.pink),n.hand(a*.69,.88,.08,.32,.17,!1),n.box(a*.69,.77,.08,.31,.035,.16,F.orange)}const o=E0[s].height,r=["flank_drone","evolution_rabbit","arc_turret"].includes(s);return n.finish(r?Math.min(1.35,o*.64)/o:void 0)}function Zo(s,n,t){const e=n==="hammer_rabbit",i=n==="rabbit_glimpse",o=n==="flank_drone";if(!e&&!i&&!o)throw Error(`G2 hero rollout gate does not include ${n}`);const r=(v,w,k,M,y="body",b=16777215,S=[0,0,0])=>s.authored(v,t.geometry.get(w),t.material,b,k,M,{region:y,rotation:S}),a=(v,w,k,M,y=16777215)=>s.authoredLink(v,t.geometry.get("g2_limb"),t.material,y,w,k,M),l=e?.39:i?.25:.31,h=e?.35:i?.36:.26,c=e||i?.55:.49,p=o?-.15:0;s.joint("pelvis","root",[0,h+.017,-.015],[.085,.09,.07]),r("pelvis","g2_shell",[0,0,0],[l*.79,.075,e?.22:.16]),s.joint("chest","root",[p,c,o?-.07:0],[.13,.13,.09]),r("chest","g2_shell",[0,0,0],[l,e?.16:.15,e?.265:.21],"body",e?16773852:i?15007734:15268095),s.joint("lumbar","root",[p*.35,(h+c)*.5,0],[.07,.08,.05]),r("lumbar","g2_limb",[0,0,0],[l*.6,(c-h)*.56,.17]);for(const v of[-1,1]){const w=v<0?"L":"R",k=v*(e?.3:i?.27:.235),M=(h-.04)/2,y=s.joint(`hip${w}`,"pelvis",[k,-.017,.015],[.68,.13,.12]),b=s.joint(`knee${w}`,y,[0,-M,0],[1.08,.07,.07]),S=s.joint(`foot${w}`,b,[0,-M,0],[.69,.09,.1]);r(y,"g2_limb",[0,-M*.52,0],[e?.105:.08,M*.64,.082]),r(b,"g2_limb",[0,-M*.52,.005],[e?.075:.054,M*.63,.06]),r(S,"g2_extremity",[0,0,.086],[e?.14:.12,.032,e?.23:.22],"body",16777215)}const u=o?-.39:i?.045:0,m=e?.835:i?.826:.844,d=e?.08:i?.19:.13,g=s.joint("head","root",[u,m,d],[.1,.13,.1]);r(g,"g2_head",[0,0,0],[e?.36:i?.31:.29,e?.104:i?.093:.091,e?.255:.23],"head");const f=s.joint("headJaw",g,[0,-.072,.007],[.19,.05,.07]);if(r(f,"g2_jaw",[0,0,0],[e?.36:i?.31:.29,.08,e?.255:.23],"head"),s.joint("neck","root",[u*.75,.732,d*.65],[.07,.08,.06]),r("neck","g2_limb",[0,-.017,0],[e?.16:.115,.081,.115]),i)for(const v of[-1,1]){const w=s.joint(`tab${v<0?"L":"R"}`,"root",[v*.24+.035,.916,-.11],[.17,.12,.15]);r(w,"g2_limb",[0,.016,0],[.07,.043,.061],"head",16766628)}if(o)for(let v=0;v<4;v++){const w=.48+v*.62,k=s.joint(`crescent${v}`,"chest",[Math.cos(w)*.44,Math.sin(w)*.265,-.01],[.08,.09,.06]);r(k,"g2_shell",[0,0,0],[.2,.11,.2],"body",v%2?16760269:12976127,[0,0,w-1.15])}for(const v of o?[1]:[-1,1]){const w=v<0?"L":"R",k=e?.56:i?.43:.5,M=[v*(k-.16),e?.61:i?.59:.56,0],y=[v*(k-.045),e?.716:i?.49:.61,.02],b=[v*k,e?.806:i?.55:.67,.075],S=s.joint(`shoulder${w}`,"chest",[M[0]-p,M[1]-c,M[2]-(o?-.07:0)],[.16,.15,.16]);r(S,"g2_extremity",[0,0,0],[e?.12:.09,.048,.087]),a(S,[0,0,0],[y[0]-M[0],y[1]-M[1],.02],e?.091:.065);const _=s.joint(`elbow${w}`,S,[y[0]-M[0],y[1]-M[1],y[2]-M[2]],[.2,.14,.15]);a(_,[0,0,0],[b[0]-y[0],b[1]-y[1],.055],e?.076:.058);const A=s.joint(`hand${w}`,_,[b[0]-y[0],b[1]-y[1],b[2]-y[2]],[.2,.17,.16]);r(A,"g2_extremity",[0,.005,0],[e?.114:.088,.049,.076]);const I=e?3:4;for(let j=0;j<I;j++){const G=s.joint(`hand${w}Finger${j}`,A,[(j-(I-1)/2)*.048,.04,.01],[.4,.08,.08]);r(G,"g2_limb",[0,.031,.016],[.026,e?.035:.051,.027])}const R=s.joint(`hand${w}Thumb`,A,[-v*.088,.018,0],[.27,.16,.14]);r(R,"g2_limb",[0,e?.046:.021,0],[.037,e?.061:.041,.034])}for(const[v,w,k]of[["head",[-.16,.025,.21],"head"],["chest",[-.12,.06,.25],"body"]])s.authored(v,t.geometry.get("g2_code_one"),t.material,9202819,[...w],[.011,.029,.009],{region:k,minWear:1,rotation:[0,0,-.26]}),s.authored(v,t.geometry.get("g2_code_one"),t.material,3286846,[w[0]+.024,w[1]-.02,w[2]+.004],[.018,.01,.009],{region:k,minWear:2,rotation:[0,0,.2]})}function Ko(s,n){const t=(r,a,l,h,c=16777215,p={})=>{const u=n.geometry.get(a);if(!u)throw Error(`Missing G2 roster form ${a}`);s.authored(r,u,n.material,c,l,h,p)};return{part:t,link:(r,a,l,h,c=16777215,p="g2_limb")=>{const u=n.geometry.get(p);if(!u)throw Error(`Missing G2 roster form ${p}`);s.authoredLink(r,u,n.material,c,a,l,h)},mark:(r,a,l=!1,h=.045,c=16777215,p={})=>t(r,l?"g2_code_zero":"g2_code_one",a,[h*(l?1:.34),h,.012],c,p),wear:(r,a,l="body")=>{t(r,"g2_code_one",a,[.011,.029,.009],7825537,{region:l,minWear:1,rotation:[0,0,-.26]}),t(r,"g2_code_one",[a[0]+.025,a[1]-.021,a[2]+.004],[.018,.01,.009],3352126,{region:l,minWear:2,rotation:[0,0,.2]})}}}const pn=16772558,mt=10216150,_t=15970247,St=16766878;function Et(s,n,t,e,i=[0],o=.08,r=pn){for(const a of i)for(const l of[-1,1]){const h=`${l<0?"L":"R"}${i.length===1?"":a<0?"Back":"Front"}`,c=(e-.034)/2,p=s.joint(`hip${h}`,"root",[l*t,e,a],[.68,.12,.11]),u=s.joint(`knee${h}`,p,[0,-c,0],[1.08,.06,.07]),m=s.joint(`foot${h}`,u,[0,-c,0],[.69,.08,.09]);n.part(p,"g2_limb",[0,-c*.47,0],[o,c*.66,o],r),n.part(u,"g2_limb",[0,-c*.49,.002],[o*.7,c*.66,o*.74],r),n.part(m,"g2_extremity",[0,0,.066],[o*1.48,.03,i.length>1?.166:.2],r)}}function ne(s,n,t,e,i,o){s.joint("pelvis","root",[0,e,0],[.08,.09,.07]),n.part("pelvis","g2_shell",[0,0,0],[t*.8,.08,o*.8],mt),s.joint("lumbar","root",[0,(e+i)*.5,-.025],[.07,.08,.05]),n.part("lumbar","g2_limb",[0,0,0],[t*.53,(i-e)*.64,o*.69],pn),s.joint("chest","root",[0,i,0],[.13,.13,.09]),n.part("chest","g2_shell",[0,0,0],[t,.16,o],mt),n.wear("chest",[-t*.33,.067,o*.91])}function Gt(s,n,t,e,i=.33,o=.096,r=.23){const a=s.joint(t,"root",e,[.1,.13,.1]);n.part(a,"g2_head",[0,0,0],[i,o,r],pn,{region:"head"});const l=s.joint(`${t}Jaw`,a,[0,-o*.69,.007],[.19,.05,.07]);return n.part(l,"g2_jaw",[0,0,0],[i,o*.77,r],pn,{region:"head"}),n.wear(a,[-i*.63,o*.31,r*.72],"head"),a}function _e(s,n,t,e){s.joint("neck","root",t,[.075,.09,.06]),n.part("neck","g2_limb",[0,0,0],e,pn)}function ei(s,n,t,e,i,o,r=.85,a=!1){const l=t<0?"L":"R",h=s.joint(`shoulder${l}`,"root",e,[.17,.14,.17]),c=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],p=[o[0]-i[0],o[1]-i[1],o[2]-i[2]];n.part(h,"g2_extremity",[0,0,0],[.102*r,.048,.093*r],pn),n.link(h,[0,0,0],c,.07*r,mt);const u=s.joint(`elbow${l}`,h,c,[.2,.14,.15]);n.link(u,[0,0,0],p,.058*r,mt);const m=s.joint(`hand${l}`,u,p,[.2,.17,.16]);n.part(m,"g2_extremity",[0,0,0],[.116*r,.051*r,.081*r],pn);const d=a?3:4;for(let f=0;f<d;f++){const v=s.joint(`hand${l}Finger${f}`,m,[(f-(d-1)/2)*.053*r,.037*r,.012],[.4,.08,.08]);n.part(v,"g2_limb",[0,.032*r,.012],[.027*r,(a?.036:.056)*r,.027*r],pn)}const g=s.joint(`hand${l}Thumb`,m,[-t*.096*r,.018*r,0],[.27,.16,.14]);return n.part(g,"g2_limb",[0,.027*r,0],[.036*r,(a?.068:.039)*r,.03*r],pn),m}function Qo(s,n,t){switch(n){case"signal_echo":{Et(s,t,.24,.355),ne(s,t,.3,.35,.545,.25),Gt(s,t,"head",[-.04,.853,.13],.34,.093,.23),_e(s,t,[-.025,.723,.074],[.12,.098,.13]);for(const e of[-1,1]){ei(s,t,e,[e*.32,.603,0],[e*.265,.505,.18],[e*.072,.56+(e<0?.01:-.01),e<0?.35:.42],.68);const i=s.joint(`paper${e<0?"L":"R"}`,"chest",[e*.245,-.045,-.07],[.16,.1,.1]);t.part(i,"g2_code_ribbon",[e*.025,-.05,0],[.125,.15,.031],e<0?mt:_t,{rotation:[0,0,e*.12]})}t.part("chest","g2_code_zero",[0,.014,.228],[.073,.091,.017],St);break}case"notification_swarm":{s.joint("ring","root",[0,.61,-.035],[.075,.1,.075]),t.part("ring","g2_code_zero",[0,0,0],[.54,.25,.22],pn),t.part("ring","g2_code_zero",[0,0,.14],[.54,.25,.038],mt);for(let e=0;e<5;e++){const i=e*Math.PI*2/5+Math.PI/2,o=Math.cos(i)*.57,r=.847+Math.sin(i)*.043,a=s.joint(`petal${e}`,"ring",[Math.cos(i)*.49,Math.sin(i)*.205,-.025],[.13,.1,.12]);t.part(a,"g2_shell",[0,0,0],[.21,.088,.16],e%2?_t:St,{rotation:[0,0,i-Math.PI/2]}),t.link(a,[0,.025,0],[o-Math.cos(i)*.49,r-(.61+Math.sin(i)*.205)-.049,.11],.057,pn),Gt(s,t,`head${e}`,[o,r,.1],.173,.045,.17)}break}case"chair_knight":{Et(s,t,.43,.23,[0],.098),ne(s,t,.54,.26,.45,.35),t.part("chest","g2_shell",[0,.105,-.15],[.58,.195,.27],pn),Gt(s,t,"head",[0,.848,.265],.33,.083,.21),_e(s,t,[0,.7,.16],[.16,.14,.16]);for(const e of[-1,1]){t.part("chest","g2_limb",[e*.5,0,.19],[.105,.185,.14],pn,{rotation:[0,0,e*.14]});const i=s.joint(`pole${e<0?"L":"R"}`,"root",[e*.62,.57,-.14],[.04,.04,.04]);t.part(i,"g2_limb",[0,0,0],[.034,.32,.038],St),t.part(i,"g2_code_ribbon",[0,.278,.007],[.13,.068,.027],e<0?mt:_t),t.part("chest","g2_code_zero",[e*.33,.016,.32],[.096,.109,.022],St)}break}case"apex_rabbit":{Et(s,t,.42,.31,[-.29,.29],.085),ne(s,t,.48,.34,.465,.45),t.part("chest","g2_shell",[0,.105,.2],[.26,.16,.22],pn,{rotation:[.16,0,0]}),_e(s,t,[0,.67,.235],[.19,.125,.17]),Gt(s,t,"head",[0,.823,.32],.34,.076,.28);for(let e=-1;e<=1;e++){const i=s.joint(`tab${e+1}`,"root",[e*.26,.83-Math.abs(e)*.012,-.22],[.15,.1,.13]);t.part(i,"g2_code_ribbon",[0,0,0],[.087,.077,.039],e===0?mt:_t,{region:"head",rotation:[0,0,-e*.16]})}break}case"evolution_rabbit":{Et(s,t,.35,.27,[0],.09),ne(s,t,.54,.3,.405,.33),t.part("chest","g2_shell",[0,.086,-.105],[.56,.16,.24],pn);for(let e=-2;e<=2;e++){const i=e*.295,o=.849-Math.abs(e)*.01,r=s.joint(`neck${e+2}`,"chest",[e*.2,.095,-.065],[.06,.07,.055]);t.link(r,[0,0,0],[i-e*.2,o-.405-.095-.042,.225],.075,pn),Gt(s,t,`head${e+2}`,[i,o,.21],.17,.048,.19);const a=s.joint(`crown${e+2}`,"root",[i,.923-Math.abs(e)*.012,-.09],[.08,.09,.06]);t.part(a,"g2_code_ribbon",[0,0,0],[.079,.039,.036],e%2?St:_t,{region:"head",rotation:[0,0,-e*.06]});const l=s.joint(`paper${e+2}`,"chest",[e*.23,-.01,.3],[.15,.08,.1]);t.part(l,"g2_code_ribbon",[0,-.028,0],[.1,.12,.027],e%2?pn:_t)}break}case"arc_turret":{Et(s,t,.245,.32,[0],.073),ne(s,t,.235,.335,.465,.22),_e(s,t,[0,.675,.12],[.11,.12,.12]),Gt(s,t,"head",[0,.818,.22],.255,.075,.22);for(const e of[-1,1]){ei(s,t,e,[e*.285,.555,0],[e*.47,.68,.025],[e*.59,.785,.065],.89);const i=s.joint(`paper${e<0?"L":"R"}`,`elbow${e<0?"L":"R"}`,[0,-.02,.055],[.2,.09,.12]);t.part(i,"g2_code_ribbon",[0,-.024,0],[.082,.085,.025],e<0?_t:St)}t.part("chest","g2_code_zero",[0,.015,.212],[.063,.08,.015],St);break}default:throw Error(`Unknown G2 smile ${n}`)}}const Jo={name_glitch_shade:12427501,speaker_wraith:10281706,loop_ghost:13219309,decay_mote:13944565,double:11134957,dual:16765848,cell_blob:13548528,reach_shadow:15123619,drift_hound:11779561};function Ut(s,n,t,e,i,o,r){const a=s.joint(t,"root",e,[.15,.13,.12]);n.link(a,[0,.015,0],[o,-i,0],.047,r,"g2_code_spine");for(let l=0;l<4;l++)n.mark(a,[o*l/3,-i*l/3,.04],l%2===0,.026,r)}function ns(s,n,t,e){const i=Jo[n];if(i===void 0)throw Error(`Unknown G2 mask ${n}`);const o=n==="decay_mote"?.63:n==="drift_hound"||n==="speaker_wraith"?.8:.72,r=n==="drift_hound"?.44:.28;Ui(s,e,o,r,.854,!1),t.wear("head",[-o*.3,.045,r*.62],"head"),t.part("head","g2_code_spine",[0,0,-.07],[o*.53,.102,r*.76],i,{region:"head"});const a=s.joint("neck","root",[0,.736,.045],[.07,.09,.06]);switch(t.part(a,"g2_code_spine",[0,0,0],[.12,.096,.13],i),n){case"name_glitch_shade":{for(let l=0;l<6;l++){const h=.155+l*.102,c=Math.sin(l*.9)*.16,p=s.joint(`spine${l}`,"root",[c,h,-.045],[.12,.13,.12]);t.part(p,"g2_code_spine",[0,0,0],[.185,.081,.175],i,{rotation:[0,0,-Math.cos(l*.9)*.18]});for(const u of[-1,1])t.part(p,"g2_code_ribbon",[u*.24,-.012,-.02],[.2,.048,.082],i,{rotation:[0,u*.18,-u*.17]}),t.mark(p,[u*.37,-.012,.071],l%2===0,.044,i)}t.part("spine4","g2_shell",[0,.028,-.055],[.28,.138,.15],i),Ut(s,t,"strandL",[-.24,.32,-.13],.25,-.075,i),Ut(s,t,"strandR",[.23,.28,-.1],.22,.06,i);break}case"speaker_wraith":{s.joint("chest","root",[0,.47,-.01],[.085,.08,.08]),t.part("chest","g2_shell",[0,0,-.04],[.48,.22,.28],i),s.joint("diaphragm","chest",[0,.005,.245],[.07,.07,.07]);for(let l=0;l<3;l++)t.part("diaphragm","g2_code_zero",[0,0,l*.019],[.31-l*.065,.145-l*.027,.031],l%2?4340834:i);for(const l of[-1,1]){const h=s.joint(`support${l<0?"L":"R"}`,"chest",[l*.43,-.015,-.015],[.085,.08,.07]);t.part(h,"g2_code_spine",[0,0,0],[.11,.255,.17],i);for(let c=0;c<4;c++)t.mark(h,[l*.03,-.17+c*.11,.16],c%2===0,.036,i)}Et(s,t,.32,.23,[0],.08,i),t.wear("chest",[-.24,.115,.21]);break}case"loop_ghost":{s.joint("loop","root",[0,.455,-.045],[.095,.14,.09]);for(let l=0;l<4;l++){const h=l*Math.PI/2;t.part("loop","g2_shell",[Math.cos(h)*.34,Math.sin(h)*.255,0],l%2?[.29,.084,.16]:[.1,.23,.16],i,{rotation:[0,0,l%2?0:-.06]})}t.part("loop","g2_code_zero",[0,0,.11],[.39,.29,.057],i),Ut(s,t,"strandL",[-.21,.22,-.015],.16,-.105,i),Ut(s,t,"strandR",[.19,.23,-.015],.17,.1,i),Ut(s,t,"strandBack",[0,.22,-.18],.17,0,i);break}case"decay_mote":{s.joint("diamond","root",[0,.46,-.04],[.13,.16,.12]),t.part("diamond","g2_code_spine",[0,0,0],[.43,.26,.31],i),t.part("diamond","g2_shell",[0,.025,-.018],[.37,.17,.29],i,{rotation:[0,0,.55]});for(let l=0;l<4;l++){const h=l*Math.PI/2,c=s.joint(`flutter${l}`,"diamond",[Math.cos(h)*.37,Math.sin(h)*.21,.015],[.18,.18,.15]);t.part(c,"g2_code_ribbon",[Math.cos(h)*.065,Math.sin(h)*.038,0],[.12,.067,.049],i,{rotation:[0,0,h]}),t.mark(c,[0,0,.052],l%2===0,.031,i)}t.wear("diamond",[-.19,.11,.245]);break}case"double":{s.joint("bridge","root",[0,.59,-.075],[.06,.095,.06]),t.link("bridge",[-.43,0,0],[.43,0,0],.072,i);for(const l of[-1,1]){const h=s.joint(`column${l<0?"L":"R"}`,"root",[l*.37,.41,.005],[.12,.12,.1]);t.part(h,"g2_shell",[0,0,-.025],[.2,.285,.22],i),t.part(h,"g2_code_spine",[l*.12,0,.1],[.075,.26,.09],i);for(let c=0;c<5;c++)t.mark(h,[-l*.025,-.185+c*.092,.202],c%2===0,.042,i);Ut(s,t,`strand${l<0?"L":"R"}`,[l*.37,.17,.005],.115,l*.025,i)}break}case"dual":{s.joint("dart","root",[0,.425,-.012],[.14,.12,.13]),t.part("dart","g2_code_spine",[0,0,0],[.31,.3,.32],i,{rotation:[0,0,Math.PI]});for(const l of[-1,1]){const h=s.joint(`fin${l<0?"L":"R"}`,"dart",[l*.29,.063,0],[.16,.13,.13]);t.part(h,"g2_code_ribbon",[l*.075,0,-.01],[.14,.107,.052],i,{rotation:[0,l*.22,-l*.3]}),t.part("dart","g2_code_spine",[l*.175,.06,-.01],[.105,.2,.16],i,{rotation:[0,0,l*.29]}),t.part("head","g2_code_one",[0,-.039,.258],[.2,.007,.017],i,{region:"head",rotation:[0,0,l*.18]})}break}case"cell_blob":{for(const l of[-1,1]){const h=s.joint(`lobe${l<0?"L":"R"}`,"root",[l*.31,.37,-.01],[.08,.1,.08]);t.part(h,"g2_shell",[0,0,0],[.34,.285,.39],i),t.part(h,"g2_code_spine",[-l*.145,.085,-.02],[.18,.21,.25],i,{rotation:[0,0,-l*.26]}),t.part(h,"g2_code_zero",[0,.015,.3],[.225,.21,.045],i);for(let c=0;c<3;c++)t.mark(h,[(c-1)*.105,.09,.366],c%2===0,.027,i)}s.joint("seam","root",[0,.43,.371],[.05,.05,.05]),t.part("seam","g2_code_ribbon",[0,0,0],[.034,.3,.027],15655418,{parentOnly:!0}),t.part("seam","g2_code_one",[.036,0,.027],[.01,.267,.012],3220796,{parentOnly:!0});break}case"reach_shadow":{s.joint("forearm","root",[0,.295,-.15],[.12,.14,.11]),t.part("forearm","g2_limb",[0,0,0],[.19,.255,.18],i,{rotation:[-.24,0,0]}),s.joint("palm","forearm",[0,.151,.2],[.15,.13,.13]),t.part("palm","g2_extremity",[0,0,0],[.345,.115,.17],i);for(let h=0;h<4;h++){const c=s.joint(`finger${h}`,"palm",[(h-1.5)*.167,.069,.01],[.37,.1,.11]);t.part(c,"g2_code_spine",[0,.058,0],[.068,.084,.064],i);const p=s.joint(`fingerTip${h}`,c,[0,.117,0],[.37,.1,.11]);t.part(p,"g2_code_spine",[0,.034,.007],[.058,.056,.061],i),t.mark(c,[0,.053,.062],!1,.029,i)}const l=s.joint("thumb","palm",[-.318,-.02,.005],[.27,.17,.14]);t.part(l,"g2_code_spine",[-.06,.035,0],[.102,.073,.062],i,{rotation:[0,0,-.55]}),t.part("palm","g2_code_ribbon",[0,.017,.147],[.23,.066,.021],i),t.wear("palm",[-.15,.055,.164]);break}case"drift_hound":{Et(s,t,.415,.295,[-.265,.265],.078,i),s.joint("chest","root",[0,.435,-.055],[.12,.13,.1]),t.part("chest","g2_shell",[0,0,0],[.46,.175,.49],i),s.joint("muzzle","root",[0,.66,.225],[.11,.1,.09]),t.part("muzzle","g2_shell",[0,0,0],[.32,.116,.355],i);const l=s.joint("tail","chest",[0,.025,-.445],[.15,.15,.12]);t.part(l,"g2_code_spine",[.025,-.015,-.08],[.066,.068,.195],i,{rotation:[.28,-.24,0]});for(const h of[-1,1])for(let c=0;c<2;c++)t.mark("chest",[h*.35,-.04+c*.11,.27],c===0,.028,i);break}}}function ts(s,n,t,e){if(n==="hammer_rabbit"||n==="rabbit_glimpse"||n==="flank_drone"){Zo(s,n,t);return}const i=Ko(s,t);Ne(n)?Qo(s,n,i):ns(s,n,i,e)}const Hi=new Set;function es(s){const t=new Uint8Array(16384);let e=s==="bone"?1847:s==="paper"?3889:7907;for(let o=0;o<64;o++)for(let r=0;r<64;r++){e=Math.imul(e,1664525)+1013904223>>>0;const a=(e>>>24)/255,l=s==="metal"?.7+.18*Math.sin(o*Math.PI/2)+a*.12:s==="paper"?.55+(r%4===0||o%4===0?.2:0)+a*.25:.66+a*.34,h=Math.round(105+l*45),c=Math.round(221+l*34);t.set([h,c,128,255],(o*64+r)*4)}const i=new wt(t,64,64);return i.name=`g1-original-${s}-microstructure`,i.wrapS=i.wrapT=Nn,i.repeat.setScalar(s==="metal"?8:6),i.magFilter=bt,i.minFilter=st,i.generateMipmaps=!0,i.needsUpdate=!0,Hi.add(i),i}function is(s){const n=V.crowd,t=s==="bone"?n.boneRoughness:s==="paper"?n.paperRoughness:s==="metal"?n.metalRoughness:s==="code"?n.codeRoughness:n.cavityRoughness,e=new P({roughness:t,metalness:s==="metal"?n.metalness:0,envMapIntensity:n.environment,emissive:s==="code"?1380389:0,emissiveIntensity:s==="code"?n.codeEmission:0});if(s==="bone"||s==="paper"||s==="metal"){const i=es(s);e.roughnessMap=i,e.bumpMap=i,e.bumpScale=s==="bone"?.0015:s==="paper"?.001:8e-4;let o=!1;e.addEventListener("dispose",()=>{o||(o=!0,Hi.delete(i),i.dispose())})}return e.name=`g1-solid-${s}`,e}function os(s,n,t,e){const i=new $(s),o=t.y<-.025?.91:t.y>.025?1.025:1,r=t.z<-.02?.95:1,a=e==="cavity"?.92:1,l=/knee|hip|neck|elbow|spine|support/.test(n)?.92:1;return i.multiplyScalar(Math.min(1.03,o*r*a*l))}const ii=new WeakSet;function C0(s,n){s instanceof P&&(s.emissiveIntensity>0&&s.emissive.getHex()!==0||ii.has(s)||(ii.add(s),s.roughness=Math.max(n==="boss"?.42:.32,Math.min(.94,s.roughness*.94)),s.envMapIntensity=n==="boss"?.52:.72,s.needsUpdate=!0))}class ss{clones=new Map;links=[];disposed=!1;apply(n,t,e=()=>!0){this.disposed||n.traverse(i=>{if(!(i instanceof E)||this.links.some(a=>a.mesh===i))return;const o=i.material,r=a=>{if(!e(a))return a;let l=this.clones.get(a);return l||(l=a.clone(),t(l),this.clones.set(a,l)),l};this.links.push({mesh:i,original:o}),i.material=Array.isArray(o)?o.map(r):r(o)})}stats(){return{materials:this.clones.size,newTextures:0,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0;for(const{mesh:n,original:t}of this.links)n.material=t;for(const n of this.clones.values())n.dispose();this.links=[],this.clones.clear()}}}function Qn(s,n,t,e=.42,i=.105,o=.27){const r="head",a=s.joint(n,"root",t,[.1,.1,.1]);s.ell(a,"bone",T.bone,[0,.012,-.025],[e,i,o*.72],{region:r}),s.ell(a,"bone",T.bone,[0,-i*.46,.035],[e*.84,i*.55,o*.57],{region:r});for(const c of[-1,1]){const p=c*e*.43,u=i*.13,m=o*.65;s.ell(a,"cavity",T.ink,[p,u,m],[e*.29,i*.4,.042],{region:r}),s.ring(a,"paper",T.pink,[p,u,m+.019],[e*.31,i*.44,.075],.13,{region:r}),s.ell(a,"code",T.teal,[p,u,m+.047],[e*.052,i*.12,.014],{region:r}),s.ell(a,"bone",T.bone,[c*e*.81,-i*.34,o*.47],[e*.15,i*.36,.068],{region:r});const d=s.joint(`${n}Lid${c<0?"L":"R"}`,a,[p,u+i*.4,m+.047],[.08,.08,.08]);s.ell(d,"bone",T.bone,[0,0,0],[e*.24,i*.036,.018],{region:r})}s.ell(a,"cavity",T.ink,[0,-i*.25,o*.78],[e*.095,i*.2,.025],{region:r}),s.ell(a,"cavity",T.ink,[0,-i*.68,o*.6],[e*.54,i*.17,.055],{region:r});const l=s.joint(`${n}Jaw`,a,[0,-i*.63,.025],[.18,.05,.07]);for(const c of[-1,1])s.link(l,"bone",T.bone,[c*e*.71,0,-.05],[c*e*.51,-i*.24,o*.55],e*.062,e*.047,{region:r});s.ell(l,"bone",T.bone,[0,-i*.22,o*.56],[e*.55,i*.14,.034],{region:r});for(let c=-2;c<=2;c++)s.ell(l,"bone",T.bone,[c*e*.2,-i*.09,o*.61],[e*.074,i*.16,.026],{region:r});const h=s.joint(`${n}Flower`,a,[0,i*.72,o*.46],[.16,.16,.16]);for(let c=0;c<5;c++){const p=c*Math.PI*2/5;s.ell(h,"paper",T.orange,[Math.cos(p)*e*.1,Math.sin(p)*i*.1,0],[e*.08,i*.15,.025],{region:r,maxWear:c===1?1:2})}return s.ell(h,"metal",T.gold,[0,0,.023],[e*.065,i*.07,.015],{region:r}),s.wear(a,[-e*.55,i*.47,o*.6],[e*.029,i*.5,.01],r),a}function ht(s,n=.34,t=.365,e){for(const i of e===void 0?[0]:[-e,e])for(const o of[-1,1]){const r=`${o<0?"L":"R"}${e===void 0?"":i<0?"Back":"Front"}`,a=n*o,l=(t-.028)/2,h=s.joint(`hip${r}`,"root",[a,t,i],[.62,.12,.1]),c=s.joint(`knee${r}`,h,[0,-l,0],[1.05,.05,.05]),p=s.joint(`foot${r}`,c,[0,-l,0],[.65,.06,.08]);s.ell(h,"bone",T.bone,[0,0,0],[.108,.05,.11]),s.link(h,"paper",T.teal,[0,-.016,0],[0,-l,0],.079,.065),s.ell(c,"bone",T.bone,[0,0,0],[.081,.036,.077]),s.link(c,"bone",T.bone,[0,-.012,0],[0,-l,.01],.047,.033),s.ell(p,"bone",T.bone,[0,0,.045],[.145,.028,.205]);for(const u of[-1,0,1])s.ell(p,"bone",T.bone,[u*.071,-.003,.2],[.037,.023,.055])}}function At(s,n=.38,t=.16,e=.54,i=.32){s.joint("pelvis","root",[0,.37,0],[.065,.075,.075]),s.ell("pelvis","paper",T.teal,[0,0,0],[n*.8,.095,i*.75]),s.joint("chest","root",[0,e,0],[.11,.1,.07]),s.ell("chest","paper",T.teal,[0,0,0],[n,t,i]);for(const o of[-1,1])s.ell("chest","bone",T.bone,[o*n*.7,0,-.025],[n*.21,t*.97,i*.84]),s.link("chest","metal",T.gold,[o*n*.44,-t*.8,i*.91],[o*n*.44,t*.8,i*.91],.016);for(let o=0;o<4;o++)s.ell("chest","bone",o%2?T.bone:T.stone,[0,-t*.7+o*t*.43,-i*.97],[n*.15,t*.15,.033]);return s.banner("chest",[0,0,i*.99],[n*.9,t*1.44,.026],T.pink),s.wear("chest",[-n*.38,t*.47,i*.99],[.025,.05,.01]),"chest"}function Oe(s,n,t,e,i,o=1){const r=s.joint(n,"root",t,[.18,.15,.14]);s.ell(r,"bone",T.bone,[0,0,0],[.13*o,.061*o,.105*o]);const a=e?3:4;for(let h=0;h<a;h++){const c=s.joint(`${n}Finger${h}`,r,[(h-(a-1)/2)*.053*o,.041*o,.027*o],[.38,.07,.08]);s.ell(c,"bone",T.bone,[0,.044*o,0],[.025*o,(e?.032:.062)*o,.041*o]),s.ell(c,"bone",T.bone,[0,.07*o,.016*o],[.024*o,.022*o,.04*o])}const l=s.joint(`${n}Thumb`,r,[-i*.109*o,.016*o,0],[.24,.14,.12]);return s.ell(l,"bone",T.bone,[0,.055*o,0],[.042*o,.087*o,.044*o]),s.ring(r,"paper",T.pink,[0,0,.109*o],[.059*o,.033*o,.03*o],.16),r}function Je(s,n,t=.6,e=!1){for(const i of[-1,1]){const o=i<0?"L":"R",r=n?.6:.58,a=n?.7:.48,l=n?.83:.57,h=s.joint(`shoulder${o}`,"root",[i*(t-.08),r,0],[.13,.12,.13]);s.ell(h,"bone",T.bone,[0,0,0],[.115,.05,.11]),s.link(h,"paper",T.teal,[0,0,0],[i*.04,a-r,.02],.09,.075);const c=s.joint(`elbow${o}`,"root",[i*(t-.04),a,.02],[.18,.1,.13]);s.ell(c,"bone",T.bone,[0,0,0],[.088,.042,.082]),s.link(c,"paper",T.teal,[0,0,0],[i*.04,l-a,.03],.072,.056),Oe(s,`hand${o}`,[i*t,l,.08],!e,i,.85);const p=s.joint(`paper${o}`,c,[0,.015,.105],[.22,.1,.12]);s.banner(p,[0,-.035,0],[.16,.13,.026],i<0?T.pink:T.orange)}}function as(s,n){switch(n){case"signal_echo":{ht(s,.24,.37),At(s,.31,.18,.54,.3),Qn(s,"head",[-.04,.858,.12],.38,.092,.25),s.joint("neck","root",[0,.704,.055],[.06,.06,.06]),s.ell("neck","bone",T.bone,[0,0,0],[.12,.071,.12]);for(const t of[-1,1]){const e=s.joint(`shoulder${t<0?"L":"R"}`,"root",[t*.36,.6,0],[.16,.12,.13]);s.link(e,"paper",T.teal,[0,0,0],[-t*.21,-.06,.21],.065)}Oe(s,"handL",[-.08,.57,.33],!1,-1,.65),Oe(s,"handR",[.07,.55,.4],!1,1,.65);for(const t of[-1,1]){const e=s.joint(`paper${t<0?"L":"R"}`,"root",[t*.35,.52,-.045],[.16,.1,.1]);s.banner(e,[0,-.045,0],[.21,.28,.035],t<0?T.teal:T.pink)}break}case"rabbit_glimpse":{ht(s,.32,.36),At(s,.25,.16,.53,.24),Qn(s,"head",[.07,.827,.23],.32,.081,.24);for(const t of[-1,1]){const e=s.joint(`tab${t<0?"L":"R"}`,"root",[t*.26+.06,.914,-.12],[.15,.1,.15]);s.ell(e,"bone",T.bone,[0,.029,-.01],[.075,.047,.07],{region:"head"}),s.banner(e,[0,.01,.07],[.095,.055,.028],T.orange,"head")}Je(s,!1,.46);break}case"notification_swarm":{s.joint("ring","root",[0,.69,0],[.06,.08,.055]),s.ring("ring","bone",T.bone,[0,0,0],[.62,.26,.36],.115);for(let t=0;t<5;t++){const e=t*Math.PI*2/5+Math.PI/2,i=Math.cos(e)*.58,o=.846+Math.sin(e)*.054;Qn(s,`head${t}`,[i,o,.11],.185,.046,.18);const r=s.joint(`petal${t}`,"ring",[Math.cos(e)*.59,Math.sin(e)*.23,0],[.13,.09,.12]);s.ell(r,"paper",t%2?T.pink:T.orange,[0,0,-.04],[.21,.08,.16],{maxWear:t===2?1:2})}break}case"flank_drone":{s.joint("chest","root",[-.13,.49,-.08],[.1,.1,.07]);for(let t=0;t<6;t++){const e=.6+t*.54,i=s.joint(`crescent${t}`,"chest",[Math.cos(e)*.47,Math.sin(e)*.3,0],[.08,.09,.06]);s.ell(i,"paper",t%2?T.pink:T.teal,[0,0,0],[.2,.1,.24]),s.ell(i,"metal",T.gold,[0,0,.21],[.14,.025,.025])}Qn(s,"head",[-.4,.844,.15],.3,.077,.23),ht(s,.26,.24),s.joint("elbowR","root",[.16,.59,.1],[.12,.11,.12]),s.link("elbowR","paper",T.orange,[0,0,0],[.32,.06,.1],.074),Oe(s,"handR",[.51,.67,.21],!1,1,.87);break}case"chair_knight":{ht(s,.49,.23),At(s,.65,.22,.46,.46),s.ell("chest","bone",T.bone,[0,.1,-.16],[.68,.18,.43]),s.ell("chest","cavity",T.ink,[0,.12,.36],[.44,.13,.071]),Qn(s,"head",[0,.839,.34],.36,.08,.2);for(const t of[-1,1]){const e=s.joint(`pole${t<0?"L":"R"}`,"root",[t*.64,.54,-.16],[.035,.035,.035]);s.link(e,"metal",T.gold,[0,-.2,0],[0,.39,0],.031),s.banner(e,[0,.31,0],[.24,.19,.04],t<0?T.teal:T.pink),s.ell("chest","bone",T.bone,[t*.63,0,.28],[.13,.21,.16])}break}case"hammer_rabbit":{ht(s,.33,.36),At(s,.42,.16,.53,.34),Qn(s,"head",[0,.844,.09],.36,.086,.27),Je(s,!0,.62),s.joint("neck","root",[0,.724,.035],[.065,.06,.05]),s.ell("neck","bone",T.bone,[0,0,0],[.14,.07,.15]);for(const t of[-1,1])s.ring("chest","metal",T.gold,[t*.17,.018,.325],[.071,.041,.04],.13);break}case"apex_rabbit":{ht(s,.48,.34,.35),At(s,.59,.16,.46,.51),Qn(s,"head",[0,.802,.37],.38,.066,.33),s.ell("chest","bone",T.bone,[0,.19,.25],[.27,.18,.23]);for(let t=-1;t<=1;t++){const e=s.joint(`tab${t+1}`,"root",[t*.27,.831-Math.abs(t)*.028,-.23],[.15,.1,.13]);s.banner(e,[0,0,0],[.16,.26,.07],t===0?T.teal:T.pink,"head")}break}case"evolution_rabbit":{ht(s,.38,.26),At(s,.56,.14,.38,.37),s.ell("chest","bone",T.bone,[0,-.035,-.18],[.58,.11,.22]);for(let t=-2;t<=2;t++){Qn(s,`head${t+2}`,[t*.3,.841-Math.abs(t)*.009,.22],.183,.049,.21);const e=s.joint(`crown${t+2}`,"root",[t*.3,.907-Math.abs(t)*.017,-.16],[.08,.09,.06]);s.banner(e,[0,0,0],[.16,.1,.07],t%2?T.orange:T.pink,"head");const i=s.joint(`paper${t+2}`,"chest",[t*.25,-.02,.34],[.15,.08,.1]);s.banner(i,[0,0,0],[.21,.22,.035],t%2?T.bone:T.pink)}break}case"arc_turret":{ht(s,.27,.33),At(s,.24,.16,.45,.23),Qn(s,"head",[0,.812,.24],.265,.062,.23),Je(s,!0,.61,!0),s.ell("chest","metal",T.gold,[0,-.11,.19],[.09,.033,.036]);break}}}const T=Object.freeze({bone:16769445,pink:15088504,teal:1351581,orange:16747026,gold:16037938,ink:2431529,stone:8876131,code:11705301,shell:3155775,ice:8441821}),oi=Object.freeze({actors:128,maxJoints:64,maxParts:768,headLow:.72,radius:1,height:1}),b0=new Map,Tt=new Map;function rs(s){let n=2166136261;const t=e=>{for(let i=0;i<e.length;i++){const o=Math.round(e[i]*1e6);n=Math.imul(n^o&255,16777619),n=Math.imul(n^o>>>8&255,16777619),n=Math.imul(n^o>>>16&255,16777619),n=Math.imul(n^o>>>24&255,16777619)}};for(const e of Object.keys(s.attributes).sort())t(s.getAttribute(e).array);return s.index&&t(s.index.array),`${s.getAttribute("position").count}/${s.index?.count??0}/${n>>>0}`}function ls(s){const n=rs(s),t=b0.get(n);if(t)return t.geometry!==s&&s.dispose(),t;s.computeBoundingBox(),s.computeBoundingSphere();const e={key:n,geometry:s,refs:0};return b0.set(n,e),e}function hs(s){let n=Tt.get(s);if(n)return n;const t=is(s);return n={key:s,material:t,refs:0},Tt.set(s,n),n}class cs{joints=[];jointIndex={};parts=[];feet=[];geometries=new Set;materials=new Set;id;family;disposed=!1;constructor(n,t){this.id=n,this.family=t,this.joint("root",null,[0,0,0],[0,0,0])}joint(n,t,e,i=[.18,.18,.18]){if(n in this.jointIndex)throw Error(`Duplicate ${this.id} joint ${n}`);const o=t===null?-1:this.jointIndex[t];if(t!==null&&o===void 0)throw Error(`Missing parent ${t}`);if(this.joints.length>=oi.maxJoints)throw Error("B1 joint capacity exceeded");const r=this.joints.length;return this.jointIndex[n]=r,this.joints.push({name:n,parent:o,position:[...e],limit:[...i]}),n.startsWith("foot")&&this.feet.push(r),n}add(n,t,e,i,o=[0,0,0],r=[1,1,1],a={}){if(this.jointIndex[n]===void 0)throw Error(`Unknown ${n}`);const h=new tn().compose(new z(...o),new yn().setFromEuler(new En(...a.rotation??[0,0,0])),new z(...r));this.retainPart(n,e,hs(t),i,h,a)}retainPart(n,t,e,i,o,r){const a=ls(t);this.geometries.has(a)||(a.refs++,this.geometries.add(a)),this.materials.has(e)||(e.refs++,this.materials.add(e));const l=a.geometry.boundingBox.clone();this.parts.push({name:`${this.id}/${n}/${this.parts.length}`,joint:this.jointIndex[n],geometry:a.geometry,material:e.material,fixed:o,color:e.key.startsWith("source/")||e.key.startsWith("g2/")?new $(i):os(i,n,new z().setFromMatrixPosition(o),e.key),batchKey:`${a.key}/${e.key}`,region:r.region??"body",minWear:r.minWear??0,maxWear:r.maxWear??2,parentOnly:r.parentOnly??!1,bounds:l,support:ds(l)})}source(n,t,e,i){const o=`source/${e.uuid}`;let r=Tt.get(o);if(!r){const a=e.clone();a.name=e.name,r={material:a,refs:0,key:o},Tt.set(o,r)}this.retainPart(n,t,r,16777215,i,{region:"head"})}authored(n,t,e,i,o,r,a={}){const l=`g2/${e.uuid}`;let h=Tt.get(l);h||(h={material:e.clone(),refs:0,key:l},Tt.set(l,h));const c=new tn().compose(new z(...o),new yn().setFromEuler(new En(...a.rotation??[0,0,0])),new z(...r));this.retainPart(n,t.clone(),h,i,c,a)}authoredLink(n,t,e,i,o,r,a){const l=new z(...o),h=new z(...r),c=h.clone().sub(l),p=c.length(),u=new yn().setFromUnitVectors(new z(0,1,0),c.normalize()),m=new En().setFromQuaternion(u);this.authored(n,t,e,i,l.add(h).multiplyScalar(.5).toArray(),[a*1.35,p*.62,a*1.35],{rotation:[m.x,m.y,m.z]})}ell(n,t,e,i,o,r={}){this.add(n,t,new fn(1,8,6),e,i,o,r)}box(n,t,e,i,o,r={}){this.add(n,t,new un(1,1,1),e,i,o,r)}ring(n,t,e,i,o,r=.1,a={}){this.add(n,t,new vn(1,r,5,16),e,i,o,a)}link(n,t,e,i,o,r,a=r,l={}){const h=new z(...i),c=new z(...o),p=c.clone().sub(h),u=p.length(),m=new yn().setFromUnitVectors(new z(0,1,0),p.normalize()),d=new En().setFromQuaternion(m);this.add(n,t,new jn(a/r,1,1,8,1),e,h.add(c).multiplyScalar(.5).toArray(),[r,u,r],{...l,rotation:[d.x,d.y,d.z]})}banner(n,t,e,i,o="body"){for(const r of[!1,!0]){const a=r?[[-.5,.5],[.5,.5],[.5,-.38],[.25,-.21],[.1,-.5],[-.12,-.28],[-.4,-.45]]:[[-.5,.5],[.5,.5],[.5,-.34],[0,-.5],[-.5,-.34]],l=new ge(a.map(([h,c])=>new bn(h,c)));this.add(n,"paper",new Ft(l,{depth:1,steps:1,bevelEnabled:!1,curveSegments:1}).translate(0,0,-.5),i,t,e,{region:o,minWear:r?2:0,maxWear:r?2:1})}}wear(n,t,e,i="body"){this.box(n,"cavity",T.stone,t,[e[0],e[1],.012],{region:i,minWear:1,rotation:[0,0,-.27]}),this.box(n,"cavity",T.ink,[t[0]+e[0]*1.8,t[1]-.025,t[2]+.003],[e[0]*2.2,e[1]*.3,.018],{region:i,minWear:2,rotation:[0,.12,.2]})}dispose(){if(!this.disposed){this.disposed=!0;for(const n of this.geometries)--n.refs===0&&(n.geometry.dispose(),b0.delete(n.key));for(const n of this.materials)--n.refs===0&&(n.material.dispose(),Tt.delete(n.key))}}finish(){const n=this.parts;if(n.length>oi.maxParts)throw Error(`B1 ${this.id} part cap exceeded`);const t=new Set(n.map(e=>e.material));return{id:this.id,family:this.family,joints:this.joints,parts:n,jointIndex:Object.freeze({...this.jointIndex}),footJoints:this.feet,geometryCost:()=>({parts:n.length,joints:this.joints.length,vertices:n.reduce((e,i)=>e+i.geometry.getAttribute("position").count,0),triangles:n.reduce((e,i)=>e+(i.geometry.index?.count??i.geometry.getAttribute("position").count)/3,0),materials:t.size}),dispose:()=>this.dispose()}}}function ds(s){const n=[];for(const t of[s.min.x,s.max.x])for(const e of[s.min.y,s.max.y])for(const i of[s.min.z,s.max.z])n.push(t,e,i);return new Float32Array(n)}function ms(s,n,t){const e=new cs(s,Ne(s)?"sycophancy":"mask");try{t?ts(e,s,t,n):Ne(s)?as(e,s):qo(e,s,n);const i=e.finish();return t&&(i.g2Motion=t.motion),i}catch(i){throw e.dispose(),i}}const Se=16,Ae=4,re=1.2,qi=(s=1)=>({attemptId:s,lastSerial:-1,headWear:0,bodyWear:0,wear:0,region:"body",hitAt:-100,deadAt:null});function ps(s,n){return!Number.isFinite(s)||!Number.isFinite(n)||n<=0?0:s/n<=.33?2:s/n<=.67?1:0}function us(s,n,t){return!Number.isInteger(n.id)||n.id<0||!Number.isInteger(n.attemptId)||!Number.isInteger(n.targetId)||n.attemptId!==s.attemptId||n.targetId!==t||n.id<=s.lastSerial||s.deadAt!==null||![n.time,n.damage,n.health,n.maxHealth].every(Number.isFinite)||n.time<0||n.time<s.hitAt||n.damage<=0||n.maxHealth<=0||n.health<0||n.health>n.maxHealth||n.killed!==(n.health===0)||n.region!=="body"&&n.region!=="head"?!1:(s.lastSerial=n.id,s.region=n.region,s.hitAt=n.time,n.killed?s.deadAt=n.time:(s.wear=Math.max(s.wear,ps(n.health,n.maxHealth)),n.region==="head"?s.headWear=Math.max(s.headWear,s.wear):s.bodyWear=Math.max(s.bodyWear,s.wear)),!0)}function fs(s,n){const t=n-s.hitAt;return s.deadAt===null&&t>=0&&t<.24?Math.sin(Math.PI*t/.24)*Math.exp(-t*7):0}function gs(s,n){if(s.deadAt===null)return 1;const t=Math.max(0,n-s.deadAt);return t<.85?1:Math.max(0,1-(t-.85)/(re-.85))}function ws(s,n,t){const e=h=>{const c=Math.max(0,Math.min(1,h));return c*c*(3-2*c)},i=Math.max(0,n-s),o=e(i/.2),r=e((i-.12)/.46),a=t&1?1:-1,l=Math.sin(Math.max(0,i-.58)*17)*Math.exp(-Math.max(0,i-.58)*14);return{age:i,buckle:o,tip:r,roll:a*1.57*r,pitch:.12*r,settle:l,expired:i>=re}}const $n=(s,n=0,t=1)=>Math.max(n,Math.min(t,s)),si=s=>{const n=$n(s);return n*n*(3-2*n)},qt=Math.PI*2,bs=s=>(Math.imul(s+7,1664525)>>>0)%1009/1009*qt;function Vi(s,n=1){return{id:s.id,attemptId:n,distance:0,clock:s.age,lastTime:-1/0,lastX:s.x,lastZ:s.z,lastHeading:s.heading,speed:0,turnRate:0,supportSpeed:0,supportTurn:0,releaseAt:-100,lastReleaseId:-1,frozen:!1,pose:null,joints:[],liveMatrices:[],deathMatrices:null,localPosition:[],localRotation:[],localScale:[]}}const ct=new z,ai=new yn,Ht=new tn,Pn=new tn;new z(1,1,1);function Yt(s,n){let t=1/0,e=-1/0,i=0,o=1/0,r=-1/0;for(let a=0;a<s.length;a++){if(!n.visible[a])continue;const l=s[a],h=n.matrices[a];for(let c=0;c<l.support.length;c+=3)ct.fromArray(l.support,c).applyMatrix4(h),t=Math.min(t,ct.y),e=Math.max(e,ct.y),i=Math.max(i,Math.hypot(ct.x,ct.z)),l.region==="head"&&(o=Math.min(o,ct.y),r=Math.max(r,ct.y))}return{low:t,high:e,radius:i,headLow:o,headHigh:r}}function se(s,n,t,e){for(let i=0;i<s.matrices.length;i++)(!e||t[i].region===e)&&s.matrices[i].premultiply(n)}function ys(s,n){let t=Yt(s.parts,n);const e=t.radius>.97?.97/t.radius:1;if(e<1&&(Pn.makeScale(e,1,e),se(n,Pn,s.parts)),Number.isFinite(t.low)&&(t.low<0||s.footJoints.length>0&&Math.abs(t.low)>1e-9)&&(Pn.makeTranslation(0,-t.low,0),se(n,Pn,s.parts)),t=Yt(s.parts,n),t.high>.995&&(Pn.makeScale(1,.995/t.high,1),se(n,Pn,s.parts)),t=Yt(s.parts,n),Number.isFinite(t.headLow)&&(t.headLow<.725||t.headHigh>.992)){const i=Math.max(.001,t.headHigh-t.headLow),o=Math.min(1,(.992-.725)/i),r=Math.max(.725,Math.min(t.headLow,.992-i*o));Pn.makeScale(1,o,1),Pn.setPosition(0,r-t.headLow*o,0),se(n,Pn,s.parts,"head")}n.envelope=Yt(s.parts,n),n.grounded=n.envelope.low>=-1e-6&&(s.footJoints.length===0||n.envelope.low<=1e-5)}function xs(s,n){s.pose&&s.pose.matrices.length===n.parts.length||(s.pose={matrices:n.parts.map(()=>new tn),visible:n.parts.map(()=>!0),alpha:1,grounded:!0,envelope:{low:0,high:1,radius:1,headLow:.72,headHigh:1}},s.joints=n.joints.map(()=>new tn),s.localPosition=n.joints.map(t=>new z(...t.position)),s.localRotation=n.joints.map(()=>new En),s.localScale=n.joints.map(()=>new z(1,1,1)),s.liveMatrices=n.parts.map(()=>new tn))}function vs(s,n,t,e){for(let i=0;i<n.parts.length;i++){const o=n.parts[i],r=o.region==="head"?t.headWear:t.bodyWear;e.visible[i]=r>=o.minWear&&r<=o.maxWear&&!(s.neural?.child&&o.parentOnly)}}function ks(s,n,t,e,i){const o=t.pose;t.deathMatrices||(t.deathMatrices=t.liveMatrices.map(c=>c.clone()));const r=ws(i.deadAt,n.time,s.id),a=s.neural.height,l=a/s.radius;Pn.makeScale(1/Math.max(s.radius,1e-6),1/a,1/Math.max(s.radius,1e-6)),Ht.makeRotationFromEuler(new En(r.pitch,0,r.roll)),Pn.multiply(Ht),Ht.makeScale(s.radius,a,s.radius),Pn.multiply(Ht);for(let c=0;c<e.parts.length;c++){o.matrices[c].copy(t.deathMatrices[c]);const p=e.joints[e.parts[c].joint].name,u=(p.startsWith("knee")?.012:p.includes("hand")?.009:p.includes("Jaw")?.006:0)*r.buckle;o.matrices[c].elements[13]-=u,o.matrices[c].premultiply(Pn),(p.includes("paper")||p.includes("Flower"))&&(o.matrices[c].elements[12]+=.012*r.settle*l)}const h=Yt(e.parts,o);return Ht.makeTranslation(0,-h.low,0),se(o,Ht,e.parts),o.alpha=gs(i,n.time),o.envelope=Yt(e.parts,o),o.grounded=Math.abs(o.envelope.low)<1e-5,o}function y0(s,n,t,e,i=qi(n.attemptId),o=!1){if(!s.neural||s.sourceId!==e.id)throw Error("B1 pose requires matching neural actor and recipe");xs(t,e);const r=t.pose;if(vs(s,e,i,r),i.deadAt!==null)return Number.isFinite(t.lastTime)||y0(s,n,t,e,{...i,deadAt:null},o),ks(s,n,t,e,i);const a=s.neural,l=!!s.stasis&&n.time<Math.max(s.stasis.until,s.stasis.thawUntil),h=!Number.isFinite(t.lastTime),c=h?0:$n(n.time-t.lastTime,0,.12);if(l&&!h)return t.frozen=!0,t.lastTime=n.time,t.lastX=s.x,t.lastZ=s.z,t.lastHeading=s.heading,r.alpha=1,r;const p=Math.hypot(s.x-t.lastX,s.z-t.lastZ);if(n.time<t.lastTime||t.id!==s.id||t.attemptId!==(n.attemptId??1)){const x=Vi(s,n.attemptId);return Object.assign(t,x),y0(s,n,t,e,i,o)}t.speed=h?Math.hypot(a.vx,a.vz):c>0?p/c:t.speed,t.distance+=h||l?0:Math.min(p,Math.max(.5,s.radius*6));const m=1-Math.exp(-c*16);t.supportSpeed=h?t.speed:t.supportSpeed+(t.speed-t.supportSpeed)*m;const d=Math.atan2(Math.sin(s.heading-t.lastHeading),Math.cos(s.heading-t.lastHeading));t.turnRate=c>0?$n(d/c,-3,3):t.turnRate,t.supportTurn=h?t.turnRate:t.supportTurn+(t.turnRate-t.supportTurn)*(1-Math.exp(-c*11)),l||(t.clock+=c),t.lastTime=n.time,t.lastX=s.x,t.lastZ=s.z,t.lastHeading=s.heading,t.frozen=l;for(const x of n.projectiles)x.neural&&x.ownerId===s.id&&x.attemptId===n.attemptId&&x.id>t.lastReleaseId&&Number.isFinite(x.bornAt)&&(t.lastReleaseId=x.id,t.releaseAt=x.bornAt);for(const x of n.lifelikeEvents?.records??[])x.kind==="projectile"&&x.allegiance==="hostile"&&x.ownerId===s.id&&x.attemptId===n.attemptId&&x.projectileId>t.lastReleaseId&&Number.isFinite(x.bornAt)&&(t.lastReleaseId=x.projectileId,t.releaseAt=x.bornAt);for(let x=0;x<e.joints.length;x++)t.localPosition[x].set(...e.joints[x].position),t.localRotation[x].set(0,0,0),t.localScale[x].set(1,1,1);const g=x=>e.jointIndex[x],f=(x,W=0,H=0,kn=0)=>{const Mn=g(x);Mn!==void 0&&t.localRotation[Mn].set(W,H,kn)},v=(x,W=0,H=0,kn=0)=>{const Mn=g(x);Mn!==void 0&&t.localPosition[Mn].add(ct.set(W,H,kn))},w=(x,W=1,H=1,kn=1)=>{const Mn=g(x);Mn!==void 0&&t.localScale[Mn].set(W,H,kn)},k=bs(s.id),M=t.clock,y=(x,W=0)=>Math.sin(M*x+k+W),b=o?.45:1,S=Ho[e.id],_=$n(t.supportSpeed/Math.max(a.speed,.01)),A=t.distance/Math.max(.17,s.radius*1.35)*qt,I=y(1.8)*b,R=a.state==="warmup"?$n(1-a.stateTimer/Math.max(a.stateDuration,.001)):0,j=a.state==="dash"?1:0,G=a.state==="recover"?1-$n(1-a.stateTimer/Math.max(a.stateDuration,.001)):0,N=$n(a.tell),Q=n.time-t.releaseAt,Y=Q>=0&&Q<.22?Math.sin(Math.PI*Q/.22)*Math.exp(-Q*8):0,L=$n(t.supportTurn/3,-1,1),Z=fs(i,n.time);for(const x of e.footJoints){const W=e.joints[x],H=e.joints[W.parent],kn=e.joints[H.parent];if(!H||!kn)continue;const Mn=W.name.includes("L")?0:Math.PI,Ji=W.name.includes("Back")?Math.PI:0,Xe=((A+Mn+Ji)%qt+qt)%qt/qt,ye=e.g2Motion?.hero[e.id],xe=ye?.stance??S.stance,Ze=Xe<xe,ve=Ze?Xe/xe:(Xe-xe)/(1-xe),Ke=_*(1-R*.78)*(1-j*.15),ke=ye?ye.stride*Ke:(s.sourceId==="chair_knight"?.1:s.sourceId==="rabbit_glimpse"?.18:.135)*Ke*S.stride,D0=Ze?ke/2-ke*ve:-ke/2+ke*si(ve),no=Ze?0:(ye&&e.g2Motion?Fe(e.g2Motion.curves.support,ve):Math.sin(Math.PI*si(ve)))*V.crowd.strideLift*Ke,$t=-H.position[1],Mt=-W.position[1],$0=$t+Mt-no-.001,B0=Math.min($t+Mt-5e-5,Math.hypot($0,D0)),Me=Math.acos($n((B0*B0-$t*$t-Mt*Mt)/(2*$t*Mt),-1,1)),N0=Math.atan2(D0,$0),G0=Math.atan2(Mt*Math.sin(Me),$t+Mt*Math.cos(Me));f(kn.name,-N0-G0),f(H.name,Me),f(W.name,N0+G0-Me)}switch(e.joints.forEach((x,W)=>{if(/^head\d*$/.test(x.name)&&f(x.name,y(.56,W*.17)*.012*b,y(.73,W*.49)*.026*b+L*.025,0),x.name.includes("Jaw")&&f(x.name,(.028+y(1.2,W*.21)*.015)*b+Y*.05),x.name.includes("Lid")){const H=(M+k+W*.039)%4.7,kn=H<.17?Math.sin(Math.PI*H/.17):0;w(x.name,1,1+kn*11,1),v(x.name,0,-kn*.024,0)}x.name.includes("Flower")&&f(x.name,y(1.6,W*.2)*.055*b,0,y(1.1,W*.3)*.03*b),x.name.includes("paper")&&f(x.name,y(3.1,W*.6)*.07*_+y(1.9,W*.7)*.025*b,L*.03,0),x.name.includes("Finger")&&f(x.name,.05+N*.13+y(1.1,W*.4)*.02*b-Y*.13),x.name.includes("Thumb")&&f(x.name,y(1.3,W)*.04*b+R*.06)}),s.sourceId){case"signal_echo":w("chest",1+I*.012,1+I*.008,1+I*.02),f("chest",.035+_*.012,0,-L*.02),f("head",-.025+y(.7)*.015,L*.028,0),v("handL",-Z*.025,0,0),v("handR",Z*.025,0,0),f("handL",y(1.4)*.025,0,.025),f("handR",y(1.4,.6)*.025,0,-.025);break;case"rabbit_glimpse":v("chest",0,-R*.026+G*.009,0),f("chest",-.075*R+.066*j,L*.04,0),f("head",R*.032-j*.025,L*.03,0);for(const x of["L","R"])f(`tab${x}`,-R*.13+j*.08+y(4,x==="L"?.2:.8)*_*.03),f(`hand${x}`,-R*.11+j*.1);break;case"notification_swarm":f("ring",y(2.6)*.03,L*.046,y(3.1)*.025);for(let x=0;x<5;x++)f(`petal${x}`,y(3.8,x*.9)*.08,0,y(2.7,x)*.045),v(`head${x}`,0,y(2.1,x*.7)*.004,0);break;case"flank_drone":f("chest",-_*.025,L*.05,-_*.034);for(let x=0;x<6;x++)f(`crescent${x}`,y(1.8,x*.6)*.03,L*.028,0);f("elbowR",-.07*N+.11*Y,L*.03),f("handR",-.08*N+.12*Y);break;case"chair_knight":v("chest",0,-Math.abs(Math.sin(A))*.01*_,0),f("chest",-Z*.027,Math.sin(A)*.012*_,-L*.018),f("head",y(.5)*.016,L*.016),f("poleL",y(1.2)*.018*b),f("poleR",y(1.2,.7)*.018*b);break;case"hammer_rabbit":w("chest",1+I*.012,1+I*.005,1+I*.018),f("chest",-R*.033+j*.03,Math.sin(A)*-.025*_,-L*.018),v("pelvis",0,-R*.014,0);for(const x of["L","R"])f(`shoulder${x}`,-R*.045+j*.034+Math.sin(A+(x==="L"?0:Math.PI))*.024*_),f(`elbow${x}`,R*.058-G*.023),f(`hand${x}`,-R*.105+j*.064+y(1.4,x==="L"?0:.5)*.025*b);break;case"apex_rabbit":w("chest",1+I*.012,1-R*.065+I*.008,1+R*.025),f("chest",-.025*R+.032*j,Math.sin(A)*.025*_,-L*.02),f("head",R*.025-j*.02,L*.025);for(let x=0;x<3;x++)f(`tab${x}`,-R*.06+j*.08+y(2.2,x)*.035*b);break;case"evolution_rabbit":f("chest",-R*.027+j*.025,L*.026,Math.sin(A)*.01*_);for(let x=0;x<5;x++)f(`crown${x}`,-R*.035+j*.04+y(1.7,x*.6)*.035+Y*.025),f(`head${x}`,y(.65,x*.7)*.018+Y*.031,L*.028+y(.8,x*.5)*.025);break;case"arc_turret":w("chest",1+I*.011,1+I*.007,1+I*.018);for(const x of["L","R"])f(`shoulder${x}`,-N*.045),f(`elbow${x}`,N*.065-Y*.08),f(`hand${x}`,-N*.08+Y*.1);break;case"name_glitch_shade":for(let x=0;x<6;x++)v(`spine${x}`,y(4.5,x*.52)*.03*_,0,0),f(`spine${x}`,0,L*.04,y(2.2,x*.5)*.035);f("strandL",y(2.5,.7)*.07,L*.07),f("strandR",y(2.5,1.2)*.07,L*.06);break;case"speaker_wraith":w("diaphragm",1+y(5.7)*.018+N*.06,1+y(5.7)*.015+N*.03,1+Y*.09),v("diaphragm",0,0,-Y*.035),f("chest",-N*.022+Y*.034,L*.026),f("supportL",y(1.4)*.016),f("supportR",y(1.4,.9)*.016);break;case"loop_ghost":f("loop",y(1.5)*.024,y(1.2)*.075+L*.037,0),f("strandL",y(2.7,.6)*.09,L*.06),f("strandR",y(2.7,1.3)*.09,L*.065),f("strandBack",y(2.7,2)*.08);break;case"decay_mote":f("diamond",y(4.4)*.028,L*.055,y(5.2)*.04);for(let x=0;x<4;x++)f(`flutter${x}`,y(10.3,x*.8)*.13,0,y(8.7,x)*.08);break;case"double":for(const x of[-1,1]){const W=x<0?"L":"R",H=x<0?0:.18;f(`column${W}`,y(2.2,H)*.016,-x*Math.sin(A+H)*.037*_,-x*L*.035),v(`column${W}`,0,Math.sin(A+H)*x*.012*_,0),f(`strand${W}`,-x*Math.sin(A+H)*.04*_)}break;case"dual":f("dart",-_*.038,L*.065,y(3.6)*.021),f("finL",y(5.1)*.038,L*.04),f("finR",y(5.1,.6)*.038,L*.04);break;case"cell_blob":for(const x of[-1,1]){const W=x<0?"L":"R",H=y(6,x*.6);w(`lobe${W}`,1+H*.036,1-H*.028,1+H*.018),f(`lobe${W}`,0,L*.045,x*H*.016),v(`lobe${W}`,x*H*.006,0,0)}w("seam",1,1-y(6)*.014,1);break;case"reach_shadow":f("forearm",-.06*N,L*.05),f("palm",-.055*N+y(2.8)*.012,L*.03);for(let x=0;x<4;x++)f(`finger${x}`,.22*(1-N)+y(1.7,x*.6)*.025),f(`fingerTip${x}`,.23*(1-N));f("thumb",N*.1);break;case"drift_hound":f("chest",y(4.5)*.023,Math.sin(A)*.035*_,-L*.024),w("chest",1,1+y(2.3)*.012,1+y(2.3)*.017),f("muzzle",y(4.5,.3)*.018,L*.037),f("tail",y(3.3,.6)*.07,-L*.08);break}const O=(x,W=0,H=0,kn=0)=>{const Mn=g(x);Mn!==void 0&&(t.localRotation[Mn].x+=W,t.localRotation[Mn].y+=H,t.localRotation[Mn].z+=kn)};switch(s.sourceId){case"signal_echo":O("chest",y(.85)*.007*b),O("head",-y(.85,.14)*.008*b),O("handL",y(1.1)*.012*b,0,-N*.007),O("handR",y(1.1,.3)*.009*b,0,N*.007);break;case"rabbit_glimpse":O("head",-.015*G),O("tabL",-.027*G+y(5.1)*.012*_),O("tabR",-.021*G+y(5.1,.5)*.013*_),O("handL",.022*G),O("handR",.018*G);break;case"notification_swarm":for(let x=0;x<5;x++)O(`head${x}`,y(.91,x*1.13)*.01*b,y(.62,x*.91)*.012*b),O(`petal${x}`,y(2.15,x*1.3)*.018*b,0,-L*.01);break;case"flank_drone":O("chest",0,-L*.012,L*.009),O("handR",-.035*Y);for(let x=0;x<6;x++)O(`crescent${x}`,y(2.1,x*.54-.3)*.012*b);break;case"chair_knight":O("chest",Math.sin(A*2-.25)*.008*_),O("head",-Math.sin(A*2-.36)*.006*_),O("poleL",-L*.009,0,y(.85)*.008*b),O("poleR",-L*.009,0,y(.85,.7)*.007*b);break;case"hammer_rabbit":for(const x of["L","R"]){const W=x==="L"?0:.35;O(`shoulder${x}`,y(1.3,W)*.01*b),O(`elbow${x}`,-y(1.3,W-.2)*.013*b),O(`hand${x}`,y(1.3,W-.4)*.018*b+.018*G),O(`hand${x}Thumb`,y(1.05,W)*.014*b)}break;case"apex_rabbit":O("chest",Math.sin(A*2-.2)*.01*_,0,Math.sin(A)*.005*_),O("head",-Math.sin(A*2-.4)*.009*_);for(let x=0;x<3;x++)O(`tab${x}`,y(2.35,x*.8)*.012*b-.015*G);break;case"evolution_rabbit":for(let x=0;x<5;x++)O(`head${x}`,y(.82,x*1.19)*.008*b,y(.59,x*1.31)*.012*b),O(`crown${x}`,-y(.82,x*1.19-.3)*.014*b),O(`paper${x}`,y(2.2,x*.72)*.015*b);break;case"arc_turret":O("chest",-.01*N+.014*Y);for(const x of["L","R"]){O(`elbow${x}`,-.018*Y),O(`hand${x}`,.025*Y);for(let W=0;W<4;W++)O(`hand${x}Finger${W}`,(W+1)*.005*N)}break;case"name_glitch_shade":for(let x=0;x<6;x++)O(`spine${x}`,y(1.45,x*.44)*.009*b,y(1.1,x*.52)*.012*b);break;case"speaker_wraith":O("chest",.012*Y),O("supportL",-y(1.5)*.009*b),O("supportR",-y(1.5,.8)*.009*b),v("diaphragm",0,0,y(2.2)*.004*b);break;case"loop_ghost":O("loop",y(.72)*.011*b,0,y(1.13)*.01*b),O("strandBack",y(1.13,.4)*.022*b);break;case"decay_mote":for(let x=0;x<4;x++)O(`flutter${x}`,y(6.7,x*1.1)*.022*b,0,y(3.8,x*.9)*.012*b);break;case"double":O("bridge",0,-Math.sin(A-.18)*.012*_),O("columnL",y(.92)*.009*b),O("columnR",-y(.92,.24)*.009*b);break;case"dual":O("dart",y(1.65)*.008*b),O("finL",y(2.1)*.013*b,-L*.015),O("finR",y(2.1,.36)*.013*b,-L*.015);break;case"cell_blob":for(const x of[-1,1]){const W=g(`lobe${x<0?"L":"R"}`);if(W!==void 0){const H=t.localScale[W];H.y=1/(H.x*H.z),O(`lobe${x<0?"L":"R"}`,y(1.2,x)*.008*b)}}break;case"reach_shadow":for(let x=0;x<4;x++)O(`finger${x}`,y(1.15,x*.45)*.007*b),O(`fingerTip${x}`,-y(1.15,x*.45-.25)*.008*b);O("thumb",y(.95)*.009*b);break;case"drift_hound":O("chest",Math.sin(A*2-.18)*.011*_),O("muzzle",-Math.sin(A*2-.32)*.009*_),O("tail",y(2.15)*.018*b,Math.sin(A-.42)*.012*_);break}const Un=_*(1-R*.8)*(1-j*.55),be=Math.sin(A*2-.32),at=Math.sin(A-.2);for(let x=0;x<e.joints.length;x++){const W=e.joints[x].name,H=t.localRotation[x];if(["chest","bridge","diamond","dart","loop","palm"].includes(W)&&(H.y-=at*V.crowd.torsoCounter*Un,H.z+=L*.006*b,e.footJoints.length&&(t.localPosition[x].y-=Math.max(0,be)*V.crowd.settle*Un*S.settle)),/paper|Flower|crown|tab|strand|tail|fin|flutter|petal|pole|crescent/.test(W)){const kn=Math.sin(A-.5-x*.11)*_*.009+Math.sin(M*1.12+k+x*.37)*.008*b;H.x+=kn*(1-R*.35)*S.follow,H.z-=L*.008}/^head\d*$/.test(W)&&(H.y+=at*.004*Un)}Do(e,s,t.localPosition,t.localRotation,M,A,_,R,j,G,L,o);for(let x=0;x<e.joints.length;x++){const W=e.joints[x].name;i.region==="head"&&/^head\d*$/.test(W)?t.localRotation[x].x-=Z*.075:i.region==="body"&&["chest","diamond","dart","loop","palm","bridge"].includes(W)&&(t.localRotation[x].x-=Z*.034)}for(let x=0;x<e.joints.length;x++){const W=e.joints[x],H=t.localRotation[x];H.set($n(H.x,-W.limit[0],W.limit[0]),$n(H.y,-W.limit[1],W.limit[1]),$n(H.z,-W.limit[2],W.limit[2])),ai.setFromEuler(H),t.joints[x].compose(t.localPosition[x],ai,t.localScale[x]),W.parent>=0&&t.joints[x].premultiply(t.joints[W.parent])}for(let x=0;x<e.parts.length;x++)r.matrices[x].multiplyMatrices(t.joints[e.parts[x].joint],e.parts[x].fixed);r.alpha=1,ys(e,r);for(let x=0;x<r.matrices.length;x++)t.liveMatrices[x].copy(r.matrices[x]);return r}const te=new cn,n0=new tn,ri=new tn,t0=new $,li=new $(16777215),Ms=new $(10809343);class zs{constructor(n,t=new Set){this.excludedIds=t,this.root.name="g2-articulated-hero-crowd",n.add(this.root)}excludedIds;root=new D;recipes=new Map;pools=new Map;actors=new Map;remains=[];attempt=-1;stage=-1;time=-1;cursor=0;reduced=!1;disposed=!1;lastActors=0;actorBases=new Map;visibleParts=0;load(n,t){if(!(this.recipes.size||this.disposed))try{for(const i of Zt)this.excludedIds.has(i)||this.recipes.set(i,ms(i,n.get(i),t));const e=new Map;for(const i of this.recipes.values()){const o=new Map;for(const r of i.parts)o.set(r.batchKey,(o.get(r.batchKey)??0)+1);for(const r of i.parts){const a=o.get(r.batchKey);a>(e.get(r.batchKey)?.n??0)&&e.set(r.batchKey,{n:a,part:r})}}if(e.size>V.caps.crowdDrawGroups)throw Error("G1 crowd draw-group cap exceeded");for(const[i,{n:o,part:r}]of e){const a=new U(r.geometry,r.material,(128+Se)*o);a.name=`b1-joint-batch-${i}`,a.frustumCulled=!1,a.count=0,a.instanceMatrix.setUsage(en),this.pools.set(i,a),this.root.add(a)}}catch(e){throw this.clearLoadedResources(),e}}clearLoadedResources(){for(const n of this.pools.values())n.dispose(),n.removeFromParent();this.pools.clear();for(const n of this.recipes.values())n.dispose();this.recipes.clear(),this.reset()}setReduced(n){this.reduced=n,n&&(this.remains=this.remains.slice(-Ae))}reset(){this.actors.clear(),this.remains=[],this.cursor=0,this.attempt=-1,this.stage=-1,this.time=-1,this.actorBases.clear();for(const n of this.pools.values())n.count=0}record(n,t){let e=this.actors.get(n.id);return e||(e={enemy:n,tracking:Vi(n,t.attemptId),damage:qi(t.attemptId)},this.actors.set(n.id,e)),e.enemy=n,e}render(n,t=!0,e){for(const o of this.pools.values())o.count=0;if(this.lastActors=0,this.visibleParts=0,this.actorBases.clear(),this.root.visible=t&&!this.disposed,this.disposed)return;if((n.attemptId!==this.attempt||n.stage!==this.stage||n.time<this.time)&&(this.reset(),this.attempt=n.attemptId,this.stage=n.stage),this.time=n.time,n.phase==="dead"||n.phase==="complete"){this.actors.clear(),this.remains=[],this.cursor=n.lifelikeEvents?.serial??0;return}if(!t)return;for(const o of n.enemies)o.sourceId&&o.neural&&o.health>0&&!this.excludedIds.has(o.sourceId)&&this.record(o,n);for(const o of T0(n,this.cursor)){if(this.cursor=Math.max(this.cursor,o.id),o.attemptId!==n.attemptId||o.kind==="projectile"||this.excludedIds.has(o.sourceId))continue;const r=this.record(o.snapshot,n);o.kind==="hit"&&us(r.damage,o,o.targetId),o.kind==="removal"&&(o.reason==="killed"&&!this.remains.some(a=>a.enemy.id===o.targetId)&&n.time-o.time<re&&(r.damage.deadAt===null&&(r.damage.deadAt=o.time),this.remains.push({enemy:structuredClone(o.snapshot),tracking:r.tracking,damage:r.damage,diedAt:o.time}),this.remains=this.remains.slice(-(this.reduced?Ae:Se))),this.actors.delete(o.targetId))}const i=new Set;for(const o of n.enemies){if(!o.sourceId||!o.neural||o.health<=0||this.lastActors>=128||this.excludedIds.has(o.sourceId))continue;const r=this.record(o,n);i.add(o.id),this.draw(r,n,!1),this.lastActors++}for(const o of this.actors.keys())i.has(o)||this.actors.delete(o);this.remains=this.remains.filter(o=>n.time>=o.diedAt&&n.time-o.diedAt<re&&(!e||e.has(o.enemy.id))).slice(-(this.reduced?Ae:Se));for(const o of this.remains)this.draw(o,n,!0);for(const o of this.pools.values())o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}draw(n,t,e){const i=n.enemy;if(!i.sourceId||!i.neural)return;const o=this.recipes.get(i.sourceId);if(!o)return;const r=y0(i,t,n.tracking,o,n.damage,this.reduced);te.position.set(i.x,gn(t),i.z),te.rotation.set(0,i.heading,0),te.scale.set(i.radius,i.neural.height,i.radius),te.updateMatrix(),n0.copy(te.matrix),e||this.actorBases.set(i.id,n0.toArray());const a=i.flash>0?li:i.stasis&&t.time<i.stasis.until?Ms:li;for(let l=0;l<o.parts.length;l++){const h=o.parts[l];if(!r.visible[l]||i.neural.child&&h.parentOnly)continue;const c=this.pools.get(h.batchKey);if(c.count>=c.instanceMatrix.count)throw new Error(`B1 batch overflow ${h.batchKey}`);ri.multiplyMatrices(n0,r.matrices[l]),c.setMatrixAt(c.count,ri),t0.copy(h.color).multiply(a),e&&t0.multiplyScalar(Math.max(.35,r.alpha)),c.setColorAt(c.count++,t0),this.visibleParts++}}actorBase(n){const t=this.actorBases.get(n);return t?[...t]:null}geometryCosts(){return{drawGroups:this.pools.size,instanceCapacity:[...this.pools.values()].reduce((n,t)=>n+t.instanceMatrix.count,0),classes:Object.fromEntries([...this.recipes].map(([n,t])=>[n,t.geometryCost()])),measuredPerformance:null}}stats(){return{profile:Ot.id,rollout:Ot.rollout,actors:this.lastActors,remains:this.remains.length,trackedActors:this.actors.size,visibleParts:this.visibleParts,drawGroups:this.pools.size,capacity:128,remainsCapacity:this.reduced?Ae:Se,remainsSeconds:re,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0;for(const n of this.pools.values())n.dispose();this.pools.clear();for(const n of this.recipes.values())n.dispose();this.recipes.clear(),this.actors.clear(),this.remains=[],this.root.removeFromParent()}}}class _s{root=new D;fragments;marks;contacts=[];seen=new Set;attempt=-1;time=-1;cursor=0;hitCursor=0;reduced=!1;disposed=!1;dummy=new cn;axis=new z;up=new z(0,1,0);tint=new $;constructor(n){this.root.name="g2-confirmed-material-impacts",n.add(this.root);const t=new Tn;t.setAttribute("position",new on([0,.045,0,-.017,-.026,.012,.022,-.02,.008,0,-.014,-.017],3)),t.setIndex([0,1,2,0,2,3,0,3,1,1,3,2]),t.computeVertexNormals(),this.fragments=new U(t,new P({color:16777215,roughness:.35,metalness:.54,envMapIntensity:.65,emissive:7376793,emissiveIntensity:.18}),84),this.marks=new U(new On(.026,.042,12),new B({color:14152168,transparent:!0,opacity:.33,depthWrite:!1,side:nn,toneMapped:!0}),24);for(const e of[this.fragments,this.marks])e.count=0,e.frustumCulled=!1,e.instanceMatrix.setUsage(en),this.root.add(e)}setReduced(n){this.reduced=n}reset(){this.contacts=[],this.seen.clear(),this.attempt=-1,this.time=-1,this.cursor=0,this.hitCursor=0,this.fragments.count=this.marks.count=0}add(n){this.seen.has(n.key)||(this.seen.add(n.key),this.contacts.push(n))}render(n,t=!0){if(this.fragments.count=this.marks.count=0,this.root.visible=t&&!this.disposed,this.disposed)return;if((n.attemptId!==this.attempt||n.time<this.time)&&(this.reset(),this.attempt=n.attemptId),this.time=n.time,!t||["ready","dead","complete"].includes(n.phase)){this.contacts=[];return}for(const r of n.lifelikeEvents?.records??[])if(!(r.id<=this.cursor)&&(this.cursor=Math.max(this.cursor,r.id),!(r.attemptId!==n.attemptId||n.time+1e-9>=r.time+1.2||n.time<r.time)))if(r.kind==="projectile"&&(r.reason==="hit"||r.reason==="geometry")){const a=r.targetId===void 0?void 0:n.enemies.find(p=>p.id===r.targetId),l=n.lifelikeEvents?.records.find(p=>(p.kind==="hit"||p.kind==="removal")&&p.attemptId===n.attemptId&&p.targetId===r.targetId),h=a?.sourceId??(l&&"sourceId"in l?l.sourceId:void 0),c=h&&["name_glitch_shade","speaker_wraith","loop_ghost","decay_mote","double","dual","cell_blob","reach_shadow","drift_hound"].includes(h);this.add({key:`p${r.id}`,at:r.time,x:r.x,y:r.y,z:r.z,vx:r.vx,vy:r.vy,vz:r.vz,layer:r.region==="boss"?"boss":r.reason==="geometry"?"world":c?"code":"bone",seed:r.id})}else r.kind==="hit"&&r.cause==="sword"&&this.add({key:`s${r.id}`,at:r.time,x:r.x,y:r.y,z:r.z,vx:r.x-n.slamImpactX,vy:.8,vz:r.z-n.slamImpactZ,layer:"bone",seed:r.id});for(const r of n.hitEvents??[])r.id<=this.hitCursor||(this.hitCursor=Math.max(this.hitCursor,r.id),r.attemptId===n.attemptId&&Number.isFinite(r.damage)&&r.damage>0&&r.time<=n.time&&r.region==="boss"&&n.time+1e-9<r.time+1.2&&!n.lifelikeEvents?.records.some(a=>a.kind==="projectile"&&a.reason==="hit"&&a.targetId===r.targetId&&a.time===r.time)&&this.add({key:`b${r.id}`,at:r.time,x:r.x,y:r.y,z:r.z,vx:r.x-n.player.x,vy:.5,vz:r.z-n.player.z,layer:"boss",seed:r.id}));this.contacts=this.contacts.filter(r=>n.time+1e-9<r.at+1.2).slice(-(this.reduced?8:24));const e=new Set(this.contacts.map(r=>r.key));for(const r of this.seen)e.has(r)||this.seen.delete(r);const i=this.reduced?32:84,o=this.reduced?4:6;for(const r of this.contacts){const a=n.time-r.at,l=r.layer==="code"?12688117:r.layer==="boss"?15774331:r.layer==="world"?10934233:15851453;if(this.axis.set(r.vx,r.vy,r.vz),this.axis.lengthSq()<1e-9&&this.axis.set(0,-1,0),this.axis.normalize().multiplyScalar(-1),n.time+1e-9<r.at+.65)for(let h=0;h<o&&this.fragments.count<i;h++){const c=r.seed*.73+h*2.399963,p=.11+h%3*.18,u=1-a/.65;this.dummy.position.set(r.x,r.y,r.z).addScaledVector(this.axis,a*(h===0?.07:.7)),h>0&&(this.dummy.position.x+=Math.cos(c)*a*p,this.dummy.position.z+=Math.sin(c)*a*p,this.dummy.position.y+=Math.sin(c*.71)*a*.35-a*a*.45),this.dummy.rotation.set(c,a*(this.reduced?0:3.2)+c*.3,h);const m=h===0?Math.max(.05,1-a/.085)*2.4:u*(r.layer==="boss"?1.1:.8);this.dummy.scale.set(m*(r.layer==="code"?.4:1),m,m*.38),this.dummy.updateMatrix(),this.fragments.setMatrixAt(this.fragments.count,this.dummy.matrix),this.fragments.setColorAt(this.fragments.count++,this.tint.setHex(h===0?16252912:l))}if(this.marks.count<(this.reduced?8:24)){this.dummy.position.set(r.x,r.y,r.z).addScaledVector(this.axis,.007),r.y-gn(n)<.24?(this.dummy.position.y=gn(n)+.018,this.dummy.rotation.set(-Math.PI/2,0,0)):this.dummy.quaternion.setFromUnitVectors(new z(0,0,1),this.axis);const h=1-a/1.2;this.dummy.scale.setScalar((.65+a*.45)*h),this.dummy.updateMatrix(),this.marks.setMatrixAt(this.marks.count,this.dummy.matrix),this.marks.setColorAt(this.marks.count++,this.tint.setHex(l))}}this.fragments.instanceMatrix.needsUpdate=!0,this.marks.instanceMatrix.needsUpdate=!0,this.fragments.instanceColor&&(this.fragments.instanceColor.needsUpdate=!0),this.marks.instanceColor&&(this.marks.instanceColor.needsUpdate=!0)}stats(){return{contacts:this.contacts.length,particles:this.fragments.count,decals:this.marks.count,maxParticles:this.reduced?32:84,maxDecals:this.reduced?8:24,particleSeconds:.65,decalSeconds:1.2,lights:0,actualEventsOnly:!0,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0;for(const n of[this.fragments,this.marks])n.dispose(),n.geometry.dispose(),n.material.dispose();this.contacts=[],this.seen.clear(),this.root.removeFromParent()}}}function Ss(s,n=V.effects.contactEmission){return new P({color:s,emissive:s,emissiveIntensity:n,roughness:.39,metalness:.08,envMapIntensity:.36})}function As(s){s instanceof B?s.toneMapped=!0:s instanceof P&&(s.roughness=Math.max(.3,s.roughness),s.envMapIntensity=.42)}const zn=new cn,Is=new z(0,1,0),It=new z;function ee(s,n=1){return Ss(s,n)}function ie(s,n,t,e){const i=new U(s,n,t);return i.name=e,i.frustumCulled=!1,i.count=0,i.instanceMatrix.setUsage(en),i}function e0(s,n,t){s.count>=s.instanceMatrix.count||(zn.position.set(n.x,n.y,n.z),zn.rotation.set(0,0,0),zn.scale.setScalar(t),zn.updateMatrix(),s.setMatrixAt(s.count++,zn.matrix))}function hi(s,n,t,e,i){if(s.count>=s.instanceMatrix.count)return;It.set(t.x,t.y,t.z);const o=It.length();o<1e-8||(It.multiplyScalar(1/o),zn.position.set(n.x-It.x*i*.5,n.y-It.y*i*.5,n.z-It.z*i*.5),zn.quaternion.setFromUnitVectors(Is,It),zn.scale.set(e,i,e),zn.updateMatrix(),s.setMatrixAt(s.count++,zn.matrix))}class Rs{root=new D;friendly;hostile;friendlyTail;hostileTail;hostileRim;g2;all;attempt=-1;lastTime=-1;stage=-1;reduced=!1;disposed=!1;constructor(n){this.root.name="g2-real-projectiles",n.add(this.root),this.g2=new _s(this.root),this.friendly=ie(new fn(1,10,6),ee(12910581,V.effects.coreEmission),128,"all-neural-friendly-rounds"),this.hostile=ie(new fn(1,12,8),ee(16748252,V.effects.hostileEmission),192,"b1-neural-hostile-orbs"),this.friendlyTail=ie(new jn(.2,1,1,8),ee(4967109,V.effects.tailEmission),128,"b1-friendly-velocity-tails"),this.hostileTail=ie(new jn(.2,1,1,8),ee(10961049,V.effects.tailEmission),192,"b1-hostile-velocity-tails"),this.hostileRim=ie(new vn(1,.09,4,12),ee(16765931,.4),192,"b1-hostile-curved-bands"),this.all=[this.friendly,this.hostile,this.friendlyTail,this.hostileTail,this.hostileRim],this.root.add(...this.all)}setReduced(n){this.reduced=n,this.g2.setReduced(n)}reset(){this.g2.reset(),this.attempt=-1,this.lastTime=-1,this.stage=-1;for(const n of this.all)n.count=0}render(n,t=!0){for(const e of this.all)e.count=0;if(this.root.visible=t&&!this.disposed,!this.disposed){if((this.attempt!==n.attemptId||n.time<this.lastTime||this.stage!==n.stage)&&(this.reset(),this.attempt=n.attemptId,this.stage=n.stage),this.lastTime=n.time,n.phase==="dead"||n.phase==="complete"){this.g2.render(n,!1);return}if(t){for(const e of n.friendlyBolts){if(e.life<=0||this.friendly.count>=128)continue;const i=e.radius??.08;e0(this.friendly,e,i),hi(this.friendlyTail,e,{x:e.vx,y:e.vy,z:e.vz},i*.4,this.reduced?.12:V.effects.friendlyTail)}for(const e of n.projectiles){if(!e.neural||e.owner==="boss"||e.kind||e.life<=0||this.hostile.count>=192)continue;const i=e.radius??.12;if(e0(this.hostile,e,i),hi(this.hostileTail,e,{x:e.vx,y:e.vy,z:e.vz},i*.45,this.reduced?.1:V.effects.hostileTail),!this.reduced){const o=this.hostileRim.count;e0(this.hostileRim,e,i*.96),zn.rotation.set(n.time*2+e.id,e.id*.81,n.time*.7),zn.scale.setScalar(i*.96),zn.position.set(e.x,e.y,e.z),zn.updateMatrix(),this.hostileRim.setMatrixAt(o,zn.matrix)}}this.g2.render(n,t);for(const e of this.all)e.instanceMatrix.needsUpdate=!0}}}stats(){return{friendly:this.friendly.count,hostile:this.hostile.count,contacts:this.g2.stats().contacts,g2:this.g2.stats(),maxFriendly:128,maxHostile:192,maxContacts:96,actualContactsOnly:!0,disposed:this.disposed}}dispose(){if(!this.disposed){this.disposed=!0,this.g2.dispose();for(const n of this.all)n.dispose(),n.geometry.dispose(),n.material.dispose();this.root.removeFromParent()}}}function Es(s,n,t,e){const i=s.getAttribute("position"),o=s.getAttribute("color"),r=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){const l=n+i.getX(a),h=t+i.getY(a),c=e+i.getZ(a),p=Math.exp(-(l*l+c*c)/125),u=Math.exp(-Math.max(0,h)*1.7),m=h>5.4?.03:0;r[a*3]=(o?o.getX(a):1)*(.91+.065*p+m),r[a*3+1]=(o?o.getY(a):1)*(.94+.03*p-u*.023),r[a*3+2]=(o?o.getZ(a):1)*(.96+.012*p-u*.045)}s.setAttribute("color",new Lt(r,3))}function Ts(s,n,t){s.color.setHex(14477800),s.groundColor.setHex(5460318),s.intensity=1.12,n.color.setHex(16770491),n.intensity=2.93,n.position.set(-11,22,-7),t.color.setHex(11852260),t.intensity=.52,t.position.set(10,7,10)}function Ps(s,n){for(const t of s.children)t instanceof Kn?(t.color.setHex(14740180),t.groundColor.setHex(4148553),t.intensity=1.2):t instanceof Gn&&(t.position.x<0?(t.color.setHex(16768945),t.intensity=2.91):(t.color.setHex(12506588),t.intensity=.43));for(const t of n.children)t instanceof Kn?(t.color.setHex(12900824),t.groundColor.setHex(6707023),t.intensity=.94):t instanceof me&&(t.color.setHex(t.position.x<0?10471885:14924443),t.intensity=t.position.x<0?8:9.8)}function Cs(s,n){const t=new $;for(let e=0;e<s.count;e++){s.instanceColor?s.getColorAt(e,t):t.setHex(16777215);const i=.91+e%5*.017;t.multiply(new $(i,i+(n?.035:.018),i-.025)),s.setColorAt(e,t)}s.instanceColor&&(s.instanceColor.needsUpdate=!0)}class js{last=NaN;attempt=-1;time=0;sample(n,t){return t!==this.attempt||n<this.last?(this.time=0,this.last=n,this.attempt=t):Number.isFinite(this.last)&&(this.time+=Math.max(0,Math.min(.12,n-this.last))),this.last=n,this.time}reset(){this.last=NaN,this.attempt=-1,this.time=0}}class Ls{rows=[];clock=new js;matrix=new tn;flex=new tn;disposed=!1;add(n,t=!1){n.traverse(e=>{if(!(e instanceof U)||this.rows.some(c=>c.mesh===e))return;const i=Array.isArray(e.material)?e.material:[e.material];if(!t&&!i.some(c=>c.alphaTest>0||/twig|needle|fern/i.test(c.name)))return;const o=Array.from({length:e.count},(c,p)=>{const u=new tn;return e.getMatrixAt(p,u),u});e.computeBoundingSphere(),e.geometry.computeBoundingSphere();const r=e.boundingSphere.clone(),a=e.geometry.boundingSphere,l=o.reduce((c,p)=>Math.max(c,p.getMaxScaleOnAxis()),0),h=t?V.motion.fernRadians:V.motion.foliageRadians;e.boundingSphere.radius+=(a.center.length()+a.radius)*l*h,this.rows.push({mesh:e,fern:t,base:o,bounds:r})})}update(n,t,e){if(this.disposed)return;const i=this.clock.sample(n,t),o=V.motion;for(const r of this.rows){const a=(r.fern?o.fernRadians:o.foliageRadians)*(e?o.reducedWind:1);for(let l=0;l<r.base.length;l++){const h=l*2.399963,c=(Math.sin(i*.83+h)*.7+Math.sin(i*1.61+h*.47)*.3)*a;this.flex.makeRotationZ(c),this.matrix.multiplyMatrices(r.base[l],this.flex),r.mesh.setMatrixAt(l,this.matrix)}r.mesh.instanceMatrix.needsUpdate=!0}}stats(){return{groups:this.rows.length,instances:this.rows.reduce((n,t)=>n+t.base.length,0),clock:this.clock.time,maxTreeRadians:V.motion.foliageRadians,maxFernRadians:V.motion.fernRadians,newDraws:0}}dispose(){if(!this.disposed){this.disposed=!0;for(const n of this.rows)n.base.forEach((t,e)=>n.mesh.setMatrixAt(e,t)),n.mesh.instanceMatrix.needsUpdate=!0,n.mesh.boundingSphere?.copy(n.bounds);this.rows=[],this.clock.reset()}}}function Fs(s,n){for(let t=0;t<s.count;t++){const e=.91+t%7*.017;s.setColorAt(t,new $().setRGB(e*(n?.98:1),e,e*.96))}s.instanceColor&&(s.instanceColor.needsUpdate=!0)}function Os(s,n,t,e){const i=s.getAttribute("position"),o=new Float32Array(i.count*3);for(let r=0;r<i.count;r++){const a=i.getX(r)+n,l=i.getY(r)+t,h=i.getZ(r)+e,c=.97+.018*Math.sin(a*.83+h*.61)+.012*Math.sin(h*2.3-a*.29),p=.045*Math.max(0,1-Math.max(0,l)/.65),u=Math.max(.88,Math.min(1,c-p));o.set([u,u*.996,u*.983],r*3)}s.setAttribute("color",new Lt(o,3))}const Ie="/assets/level2-environment/",We={leftX:-6.955,rightX:C.width/2+.13,topY:.68,halfDepth:C.depth/2},Ws=(s,n=0,t=1)=>Math.max(n,Math.min(t,s)),ci=s=>{const n=Ws(s);return n*n*(3-2*n)},q=new cn;class di{root=new D;forest=new D;lower=new D;common=new D;clearing=new D;lip=new D;releaseOutline;forestLights=new D;lowerLights=new D;forestLighting=[];lowerLighting=[];forestFog=new Xn(13159611,29,64);lowerFog=new Xn(6120031,23,51);forestSky=new $(14014407);lowerSky=new $(6449251);blendedSky=new $;blendedFog=new Xn(14076848,22,59);groundMaterial=new P({color:11054485,roughness:.96,metalness:0,envMapIntensity:.37});trailMaterial=new P({color:12038039,roughness:.93,metalness:0,envMapIntensity:.36});rockMaterial=new P({color:10920080,roughness:.89,metalness:0,envMapIntensity:.4});farPineMaterial=new P({color:16777215,roughness:1,envMapIntensity:.25,alphaTest:.38,side:nn,depthWrite:!0});farPines;geometries=new Set;materials=new Set;textures=new Set;target=null;loaded=!1;disposed=!1;active=!1;forestVisible=!1;lowerVisible=!1;phase="forest";triangleBudget=0;viewTriangles={forest:0,grotto:0,shaft:0,clearing:0};instances=0;reduced=!1;cosmeticGround=new D;boundaryRails=new D;lowerLedges=new D;wind=new Ls;constructor(n){this.root.name="level-2-forest-grotto",this.root.visible=!1,n.add(this.root),this.forest.name="sunrise-pine-clearing",this.lower.name="dry-shaft-grotto",this.common.name="shared-open-shaft",this.clearing.name="coherent-clearing-floor",this.lip.name="retained-shaft-lip",this.forestLights.name="forest-illumination",this.lowerLights.name="grotto-illumination",this.root.add(this.forest,this.lower,this.common,this.forestLights,this.lowerLights),this.forest.add(this.clearing),this.common.add(this.lip);const t=C.width,e=C.depth;this.plane(t,e,0,0,0,this.groundMaterial,this.clearing);const i=new Tn().setFromPoints([new z(-t/2+.04,.018,-e/2+.04),new z(t/2-.04,.018,-e/2+.04),new z(t/2-.04,.018,e/2-.04),new z(-t/2+.04,.018,e/2-.04)]);this.releaseOutline=new ji(i,new Ve({color:13938807,transparent:!0,opacity:0,depthWrite:!1})),this.releaseOutline.name="support-release-outline",this.clearing.add(this.releaseOutline);const o=62;for(const r of[-1,1])this.plane(o,(o-e)/2,0,-.025,r*(e+(o-e)/2)/2,this.groundMaterial,this.forest),this.plane((o-t)/2,e,r*(t+(o-t)/2)/2,-.025,0,this.groundMaterial,this.forest);this.plane(t+3.2,e+3.2,0,rt.lowerY,0,this.trailMaterial,this.common),this.cosmeticGround.name="cosmetic-pine-floor-detail",this.clearing.add(this.cosmeticGround),this.boundaryRails.name="visible-left-right-rock-root-lanes",this.forest.add(this.boundaryRails),this.lowerLedges.name="dry-limestone-footing-and-strata",this.lower.add(this.lowerLedges),this.makeGroundDetail(),this.makeBerm(),this.makeBoundaryRails(),this.makeShaft(),this.makeLowerLedges(),this.makeFarPines(),this.makeLight(),Ps(this.forestLights,this.lowerLights),this.remember(this.root)}makeBerm(){const n=[],t=[],e=[];for(let a=0;a<3;a++){const l=[],h=[.025,.75,2.1][a];for(let c=0;c<48;c++){const p=c/48*Math.PI*2,u=Math.cos(p),m=Math.sin(p),d=Math.min((C.width/2+h)/Math.max(.001,Math.abs(u)),(C.depth/2+h)/Math.max(.001,Math.abs(m)));l.push(new z(u*d,a===1?.92+Math.sin(c*2.7)*.13:a===0?.025:.04,m*d))}e.push(l)}const i=a=>{n.push(a.x,a.y,a.z),t.push(a.x/1.8,a.z/1.8)};for(let a=0;a<2;a++)for(let l=0;l<48;l++){const h=(l+1)%48,c=e[a][l],p=e[a][h],u=e[a+1][l],m=e[a+1][h];for(const d of[c,p,u,p,m,u])i(d)}const o=new Tn;o.setAttribute("position",new on(n,3)),o.setAttribute("uv",new on(t,2)),o.computeVertexNormals();const r=new E(o,this.rockMaterial);r.name="continuous-perimeter-rock-bank",this.forest.add(r)}makeBoundaryRails(){const n=new U(new U0(1,0),this.rockMaterial,36);n.name="thirty-six-boundary-limestone-blocks";const t=new P({color:6181184,roughness:1,metalness:0});for(const[e,i]of[-1,1].map(o=>[o,o*(C.width/2+.4)])){for(let o=0;o<18;o++){const r=-6.7700000000000005+o*(C.depth-.76)/17;q.position.set(i+e*(.025*Math.sin(o*3.17)),.26+o%3*.05,r),q.rotation.set(.09*Math.sin(o),o*1.57,.07*Math.cos(o)),q.scale.set(.29,.37+o%4*.045,.44),q.updateMatrix(),n.setMatrixAt((e<0?0:18)+o,q.matrix)}for(let o=0;o<2;o++){const r=[];for(let c=0;c<=18;c++)r.push(new z(e*(C.width/2+.17+o*.12+.025*Math.sin(c*2.1)),.51+o*.16+.035*Math.sin(c*1.39),-14.3/2+.38+c*(C.depth-.76)/18));const a=new Li(r),l=new Fi(a,54,o===0?.075:.055,5,!1),h=new E(l,t);h.name=`${e<0?"left":"right"}-continuous-root-rail-${o}`,this.boundaryRails.add(h)}}n.computeBoundingSphere(),this.boundaryRails.add(n),this.instances+=36}makeLowerLedges(){const t=new U(new U0(1,0),this.rockMaterial,56);t.name="dry-perimeter-limestone-taluses";for(let o=0;o<56;o++){const r=o%4,a=Math.floor(o/4),l=(a-6.5)/6.5,h=r<2?(r===0?-1:1)*(C.width/2+.82):l*(C.width/2+.3),c=r<2?l*(C.depth/2+.3):(r===2?-1:1)*(C.depth/2+.82);q.position.set(h,rt.lowerY+.23+o%3*.07,c),q.rotation.set(.1*Math.sin(o*2),o*2.31,.08*Math.cos(o)),q.scale.set(r<2?.43:.63,.31+o%4*.055,r<2?.63:.43),q.updateMatrix(),t.setMatrixAt(o,q.matrix)}t.computeBoundingSphere(),this.lowerLedges.add(t),this.instances+=56;const e=new P({color:9145982,roughness:1}),i=new U(new un(1,1,1),e,24);for(let o=0;o<24;o++){const r=o%4,a=Math.floor(o/4),l=r<2?C.depth:C.width;q.position.set(r<2?(r===0?-1:1)*(C.width/2+1.12):0,rt.lowerY+1.65+a*2.7,r<2?0:(r===2?-1:1)*(C.depth/2+1.12)),q.rotation.set(0,0,0),q.scale.set(r<2?.24:l+.9,.045+a%3*.027,r<2?l+.9:.24),q.updateMatrix(),i.setMatrixAt(o,q.matrix)}i.computeBoundingSphere(),i.name="horizontal-limestone-bedding-seams",this.lowerLedges.add(i),this.instances+=24}plane(n,t,e,i,o,r,a){const l=new an(n,t);l.rotateX(-Math.PI/2);const h=l.getAttribute("position"),c=l.getAttribute("uv");for(let u=0;u<c.count;u++)c.setXY(u,(h.getX(u)+e)/2.6,(h.getZ(u)+o)/2.6);const p=new E(l,r);return p.position.set(e,i,o),a.add(p),p}makeGroundDetail(){const n=new P({color:7498318,roughness:1,metalness:0,side:nn}),t=new an(.022,.18);t.rotateX(-Math.PI/2);const e=new U(t,n,240);for(let h=0;h<240;h++){const c=h%8,p=c*Math.PI/4+.18*Math.sin(h*3.71),u=.65+.32*(.5+.5*Math.sin(h*7.19)),m=Math.cos(p)*C.width*.48*u,d=Math.sin(p)*C.depth*.48*u;q.position.set(m,.008,d),q.rotation.set(0,h*2.39,0),q.scale.setScalar(.65+h%7*.16),q.updateMatrix(),e.setMatrixAt(h,q.matrix),e.setColorAt(h,new $().setRGB(.87+h%5*.026,.86+h%5*.024,.79+h%5*.025))}e.computeBoundingSphere(),this.cosmeticGround.add(e),this.instances+=240;const i=new U(new vt(.2,7).rotateX(-Math.PI/2),new P({color:7304784,roughness:1,transparent:!0,opacity:.34,depthWrite:!1}),36);for(let h=0;h<36;h++)q.position.set(Math.sin(h*7.91)*6.2,.006,Math.cos(h*4.73)*6.5),q.rotation.set(0,h,0),q.scale.set(.6+h%3,.8,.4+h%2),q.updateMatrix(),i.setMatrixAt(h,q.matrix);i.computeBoundingSphere(),this.cosmeticGround.add(i),this.instances+=36;const o=document.createElement("canvas");o.width=o.height=32;const r=o.getContext("2d"),a=r.createRadialGradient(16,16,1,16,16,16);a.addColorStop(0,"rgba(31,44,29,.5)"),a.addColorStop(1,"rgba(31,44,29,0)"),r.fillStyle=a,r.fillRect(0,0,32,32);const l=new U(new an(1,1).rotateX(-Math.PI/2),new B({map:new kt(o),transparent:!0,opacity:.3,depthWrite:!1}),72);for(let h=0;h<72;h++)q.position.set(Math.sin(h*8.3)*6.3,.01,Math.cos(h*11.7)*6.7),q.rotation.set(0,-.6+h*.13,0),q.scale.set(.7+h%4*.35,1,1.1+h%5*.33),q.updateMatrix(),l.setMatrixAt(h,q.matrix);l.computeBoundingSphere(),this.cosmeticGround.add(l),this.instances+=72}makeShaft(){const n=C.width+2.5,t=C.depth+2.5,e=[];for(let c=0;c<32;c++){const p=c/32*Math.PI*2,u=Math.cos(p),m=Math.sin(p),d=Math.min(n/2/Math.max(1e-4,Math.abs(u)),t/2/Math.max(1e-4,Math.abs(m)));e.push(new bn(u*(d+.2*Math.sin(c*7.1)),m*(d+.2*Math.sin(c*7.1))))}const i=[],o=[];for(let c=0;c<e.length;c++){const p=e[c],u=e[(c+1)%e.length];for(const[m,d,g,f,v]of[[p.x,-18,p.y,c/3,0],[u.x,-18,u.y,(c+1)/3,0],[p.x,.45,p.y,c/3,5],[u.x,-18,u.y,(c+1)/3,0],[u.x,.45,u.y,(c+1)/3,5],[p.x,.45,p.y,c/3,5]])i.push(m,d,g),o.push(f,v)}const r=new Tn;r.setAttribute("position",new on(i,3)),r.setAttribute("uv",new on(o,2)),r.computeVertexNormals();const a=new E(r,this.rockMaterial);a.material.side=nn,this.common.add(a);const l=this.rockMaterial;for(const c of[-1,1]){const p=new E(new un(n+1.7,.52,.85),l);p.position.set(0,.05,c*(t/2+.3)),this.lip.add(p);const u=new E(new un(.85,.52,t+1.7),l);u.position.set(c*(n/2+.3),.05,0),this.lip.add(u)}const h=new B({color:3688244});for(let c=0;c<8;c++){const p=c*Math.PI/4,u=new E(new Pt(.8,3.5,5),h);u.position.set(Math.cos(p)*(n/2+2),1.8,Math.sin(p)*(t/2+2)),this.lip.add(u)}}makeFarPines(){const n=new an(1,1).translate(0,.5,0),t=this.farPines=new U(n,this.farPineMaterial,96);t.name="forty-eight-far-pine-cutouts";let e=90210;const i=()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296);for(let o=0;o<48;o++){const r=o*2.399963+(i()-.5)*.55,a=23.5+i()*6.8,l=Math.cos(r)*a+(i()-.5)*1.2,h=Math.sin(r)*a+(i()-.5)*1.2,c=8.3+i()*5.5,p=i()*Math.PI;for(let u=0;u<2;u++)q.position.set(l,-.02,h),q.rotation.set(0,p+u*Math.PI/2,0),q.scale.set(c,c,1),q.updateMatrix(),t.setMatrixAt(o*2+u,q.matrix)}t.computeBoundingSphere(),this.forest.add(t),this.instances+=96}makeLight(){const n=new Kn(14936022,4804924,V.forest.ambient);this.forestLights.add(n);const t=new Gn(16768941,V.forest.key);t.position.set(-12,11,-17),this.forestLights.add(t);const e=new Gn(12241615,V.forest.fill);e.position.set(6,5,4),this.forestLights.add(e);const i=new E(new fn(1.35,12,8),new B({color:16769440,fog:!1}));i.position.set(-22,17,-35),this.forest.add(i),this.lowerLights.add(new Kn(13161687,7232838,V.grotto.ambient));const o=new Gn(14018023,V.grotto.key);o.position.set(-3,9,2),this.lowerLights.add(o);const r=new me(11979205,V.grotto.coolBounce,21,2);r.position.set(-3,rt.lowerY+5,-5),this.lowerLights.add(r);const a=new me(14730137,V.grotto.warmBounce,19,2);a.position.set(5,rt.lowerY+6,4),this.lowerLights.add(a);for(const l of this.forestLights.children)l instanceof H0&&this.forestLighting.push({light:l,intensity:l.intensity});for(const l of this.lowerLights.children)l instanceof H0&&this.lowerLighting.push({light:l,intensity:l.intensity})}remember(n){n.traverse(t=>{if(t instanceof E||t instanceof I0){this.geometries.add(t.geometry);for(const e of Array.isArray(t.material)?t.material:[t.material]){this.materials.add(e);for(const i of Object.values(e))i instanceof jt&&this.textures.add(i)}}})}scatter(n,t,e,i){n.updateWorldMatrix(!0,!0);const o=new dt().setFromObject(n),r=o.getCenter(new z),a=new tn().makeTranslation(-r.x,-o.min.y,-r.z),l=new D;return l.name=i,n.traverse(h=>{if(!(h instanceof E))return;const c=h.geometry.clone().applyMatrix4(h.matrixWorld).applyMatrix4(a),p=new U(c,h.material,t.length);t.forEach((u,m)=>{q.position.set(u.x,u.y,u.z),q.rotation.set(0,u.yaw,0),typeof u.scale=="number"?q.scale.setScalar(u.scale):q.scale.copy(u.scale),q.updateMatrix(),p.setMatrixAt(m,q.matrix)}),/pines|ferns/.test(i)&&(Fs(p,/ferns/.test(i)),Cs(p,/ferns/.test(i))),p.computeBoundingSphere(),l.add(p),this.instances+=t.length}),e.add(l),this.remember(l),/near-pines|boundary-ferns/.test(i)&&this.wind.add(l,/ferns/.test(i)),l}async load(n,t){if(this.loaded)return;const e=[],i=[];let o=null,r=!1;try{for(const A of["pine","fern","rocks","cliff"])e.push(await gt(n,`${Ie}${A}.glb`));for(const A of["forest-ground","rock-face","rocky-trail"])for(const I of["diff","normal","arm"]){const R=await xt(n,`${Ie}${A}-${I}.jpg`);R.wrapS=R.wrapT=Nn,R.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),I==="diff"&&(R.colorSpace=xn),i.push(R)}const a=await xt(n,`${Ie}pine-impostor.png`);if(a.colorSpace=xn,a.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()),i.push(a),o=await w0(n,`${Ie}forest-slope.hdr`),this.disposed)throw new Error("Forest renderer disposed");e.forEach(A=>this.remember(A)),i.forEach(A=>this.textures.add(A)),r=!0;for(const[A,I,R]of[[0,this.groundMaterial,1],[3,this.rockMaterial,1],[6,this.trailMaterial,1]]){const[j,G,N]=i.slice(A,A+3);for(const Q of[j,G,N])Q.repeat.set(R,R);Object.assign(I,{map:j,normalMap:G,roughnessMap:N,metalnessMap:N,aoMap:N,aoMapIntensity:.6}),I.normalScale.set(I===this.rockMaterial?V.forest.rockNormal:V.forest.groundNormal,I===this.rockMaterial?V.forest.rockNormal:V.forest.groundNormal),I.needsUpdate=!0}this.farPineMaterial.map=a,this.farPineMaterial.needsUpdate=!0;const l=a.image;this.farPines.geometry.scale(l.width/l.height,1,1),this.farPines.computeBoundingSphere();const[h,c,p,u]=e;for(const A of[h,c])A.traverse(I=>{if(I instanceof E)for(const R of Array.isArray(I.material)?I.material:[I.material])(R.transparent||R.alphaTest>0||/twig|needle|fern/i.test(R.name))&&(R.transparent=!1,R.opacity=1,R.alphaTest=.38,R.side=nn,R.depthWrite=!0,R.needsUpdate=!0)});const m=h.getObjectByName("near")??h,d=h.getObjectByName("mid")??m,g=new dt().setFromObject(m).getSize(new z).y||20,f=(A,I)=>Array.from({length:A},(R,j)=>{const G=(j+.25)*Math.PI*2/A;return{x:Math.cos(G)*(I+j%3*.9),y:0,z:Math.sin(G)*(I+1+j%4*.5),yaw:j*2.37,scale:(9+j%4*.75)/g}});this.scatter(m,f(6,11.5),this.forest,"six-near-pines"),this.scatter(d,f(18,18),this.forest,"eighteen-mid-pines");const v=(A,I,R)=>Array.from({length:A},(j,G)=>{const N=(G+.4)*Math.PI*2/A,Q=Math.cos(N),Y=Math.sin(N),L=Math.min((C.width/2+I)/Math.max(.001,Math.abs(Q)),(C.depth/2+I)/Math.max(.001,Math.abs(Y)));return{x:Q*L,y:0,z:Y*L,yaw:G*2.1,scale:R*(.7+G%4*.13)}}),w=new dt().setFromObject(c).getSize(new z).y||1,k=new dt().setFromObject(p).getSize(new z);this.scatter(c,v(24,.8,.85/w),this.forest,"twenty-four-boundary-ferns");const M=v(12,.8,1).map(A=>({...A,scale:new z(1.35/Math.max(.01,k.x),.56/Math.max(.01,k.y),1.05/Math.max(.01,k.z))}));this.scatter(p,M,this.forest,"twelve-low-rock-berms");const y=new dt().setFromObject(u).getSize(new z),b=[];for(const A of["x","z"])for(const I of[-1,1])for(const R of[-1,1]){const j=A==="x"?C.width:C.depth,G=A==="x"?C.depth/2:C.width/2;b.push({x:A==="x"?R*j*.28:I*(G+1.65),z:A==="x"?I*(G+1.65):R*j*.28,y:rt.lowerY-.35,yaw:A==="x"?I<0?0:Math.PI:I<0?Math.PI/2:-Math.PI/2,scale:new z(j*.67/Math.max(.01,y.x),19/Math.max(.01,y.y),1.55/Math.max(.01,y.z))})}u.traverse(A=>{A instanceof E&&(A.material=this.rockMaterial)}),this.scatter(u,b,this.lower,"eight-irregular-cliff-modules");const S=new g0(t);try{this.target=S.fromEquirectangular(o)}finally{S.dispose(),o.dispose(),o=null}this.remember(this.root),this.triangleBudget=0;const _=A=>{let I=0;return A.traverse(R=>{R instanceof E&&(I+=(R.geometry.index?.count??R.geometry.getAttribute("position").count)/3*(R instanceof U?R.count:1))}),I};this.viewTriangles={forest:_(this.forest),grotto:_(this.lower),shaft:_(this.common),clearing:_(this.clearing)},this.triangleBudget=this.viewTriangles.forest+this.viewTriangles.grotto+this.viewTriangles.shaft,this.loaded=!0}catch(a){throw r||(e.forEach(Ln),i.forEach(l=>l.dispose())),o?.dispose(),a}}update(n,t,e){const i=n.level2?.environment,o=n.phase==="dead"||n.phase==="complete";if(this.active=(!t||o)&&n.stage===2&&i?.mode==="forest_grotto"&&this.loaded,this.root.visible=this.active,!this.active)return this.forestVisible=this.lowerVisible=!1,!1;this.phase=i.phase,this.wind.update(n.time,n.attemptId??1,this.reduced),this.forestVisible=["forest","prepare","release","failed"].includes(this.phase)||this.phase==="falling"&&n.player.y>-.55,this.lowerVisible=!this.forestVisible,this.forest.visible=this.forestVisible,this.lower.visible=this.lowerVisible;const r=this.phase==="falling"||this.phase==="landing"||this.phase==="grotto";this.clearing.position.y=0,this.clearing.visible=!r,this.common.visible=r,this.releaseOutline.visible=this.phase==="release",this.releaseOutline.material.opacity=this.phase==="release"?.15+.35*ci(i.elapsed/rt.release):0;const a=ci(i.floorY/rt.lowerY);for(const{light:l,intensity:h}of this.forestLighting)l.intensity=h*(1-a);for(const{light:l,intensity:h}of this.lowerLighting)l.intensity=h*a;return this.blendedSky.copy(this.forestSky).lerp(this.lowerSky,a),this.blendedFog.color.copy(this.forestFog.color).lerp(this.lowerFog.color,a),this.blendedFog.near=this.forestFog.near+(this.lowerFog.near-this.forestFog.near)*a,this.blendedFog.far=this.forestFog.far+(this.lowerFog.far-this.forestFog.far)*a,e.background=this.blendedSky,e.fog=this.blendedFog,e.environment=this.target.texture,e.environmentIntensity=V.forest.environment+(V.grotto.environment-V.forest.environment)*a,!0}setReduced(n){this.reduced=n,this.cosmeticGround.visible=!n}textureSet(){return this.textures}resources(){return{geometries:this.geometries,materials:this.materials,textures:this.textures}}environmentTexture(){return this.target?.texture??null}stats(){const n=this.active?(this.forestVisible?this.viewTriangles.forest-(this.clearing.visible?0:this.viewTriangles.clearing):this.viewTriangles.grotto)+(this.common.visible?this.viewTriangles.shaft:0):0;return{profile:Ot.id,wind:this.wind.stats(),loaded:this.loaded,active:this.active,phase:this.phase,forestVisible:this.forestVisible,grottoVisible:this.lowerVisible,shaftVisible:this.active&&this.common.visible,clearingVisible:this.active&&this.forestVisible&&this.clearing.visible,clearingY:this.clearing.position.y,fullEnvironmentsVisible:Number(this.forestVisible)+Number(this.lowerVisible),instances:this.instances,triangles:this.triangleBudget,visibleTriangles:n,trianglesByRoot:{...this.viewTriangles},nearPines:6,midPines:18,farPines:48,ferns:24,rocks:12,cliffModules:8,boundaryRails:{...We,visible:this.active&&this.forestVisible},dryGrotto:!0,reduced:this.reduced,transitionSimulationUnchanged:!0}}dispose(){this.disposed=!0,this.wind.dispose(),this.target?.dispose(),this.target=null}}const mi=Object.freeze(["/assets/smile-chaser.glb","/assets/smile-shooter.glb","/assets/level2/mask.glb"]),le={signal_echo:{name:"Agreeing Pilgrim",family:"smile",asset:0,silhouette:"bowed upright figure",head:1,chest:1,feet:1,depth:1,lean:.09,crest:0,color:15518934},rabbit_glimpse:{name:"Eager Arrow",family:"smile",asset:0,silhouette:"leaning arrow and twin tabs",head:.83,chest:.65,feet:1.35,depth:.8,lean:.27,crest:2,color:16766617},notification_swarm:{name:"Applause Bloom",family:"smile",asset:0,silhouette:"open five-skull ring",head:1.28,chest:.65,feet:.65,depth:.86,lean:0,crest:3,color:12577235},flank_drone:{name:"Sideways Compliment",family:"smile",asset:1,silhouette:"asymmetric crescent and outward palm",head:.92,chest:.82,feet:1,depth:1.15,lean:-.06,crest:1,color:11134436},chair_knight:{name:"Approval Throne",family:"smile",asset:0,silhouette:"heavy shrine block on squat feet",head:.82,chest:1.65,feet:1.4,depth:1.5,lean:-.06,crest:4,color:14663100},hammer_rabbit:{name:"Clapping Idol",family:"smile",asset:0,silhouette:"heavy upright U and raised thumbs",head:1.12,chest:1.4,feet:1.2,depth:1.18,lean:.18,crest:5,color:15255204},apex_rabbit:{name:"Praise Hound",family:"smile",asset:0,silhouette:"low four-support wedge and three tabs",head:.86,chest:1.55,feet:1.32,depth:1.35,lean:.31,crest:6,color:15841726},evolution_rabbit:{name:"Coronation Engine",family:"smile",asset:1,silhouette:"five-face crown fan",head:1.3,chest:1.2,feet:.85,depth:1.15,lean:.12,crest:7,color:14796269},arc_turret:{name:"Ovation Fork",family:"smile",asset:1,silhouette:"open palms on a narrow fork",head:.75,chest:1.05,feet:1.25,depth:.78,lean:0,crest:8,color:16768697},name_glitch_shade:{name:"Drift Mask",family:"mask",asset:2,silhouette:"tall swaying S code body",head:.77,chest:.6,feet:.45,depth:.72,lean:.2,crest:0,color:9991381},speaker_wraith:{name:"Face Speaker",family:"mask",asset:2,silhouette:"wide squared code chest and mouth aperture",head:.92,chest:1.25,feet:.82,depth:.72,lean:0,crest:1,color:8441821},loop_ghost:{name:"Recurring Face",family:"mask",asset:2,silhouette:"slender oval code loop",head:.67,chest:.48,feet:.37,depth:.65,lean:.15,crest:2,color:11705301},decay_mote:{name:"Chatter Mote",family:"mask",asset:2,silhouette:"tiny diamond of rapid scattered code",head:1.16,chest:.63,feet:.18,depth:.65,lean:0,crest:3,color:12300012},double:{name:"Mirror Mask",family:"mask",asset:2,silhouette:"paired symmetric mirrored code columns",head:.85,chest:1.15,feet:.75,depth:.77,lean:0,crest:4,color:9687771},dual:{name:"Silence Mask",family:"mask",asset:2,silhouette:"fragile pointed dart with crossed mouth lock",head:.82,chest:.5,feet:.13,depth:1.15,lean:.28,crest:5,color:15777143},cell_blob:{name:"Split Persona",family:"mask",asset:2,silhouette:"two lobes with a bright vertical split seam",head:1.06,chest:1.3,feet:1,depth:1.05,lean:0,crest:6,color:11838185},reach_shadow:{name:"Projection Mask",family:"mask",asset:2,silhouette:"spread physical hand below anchored mask",head:.88,chest:.58,feet:.62,depth:.72,lean:0,crest:7,color:14462332},drift_hound:{name:"Drift Hound Mask",family:"mask",asset:2,silhouette:"low long muzzle and four code haunches",head:1.35,chest:.8,feet:1.1,depth:1.35,lean:.3,crest:8,color:10068695}},x0=(s,n=0,t=1)=>Math.max(n,Math.min(t,s)),_n=new cn,Ds=new z(0,1,0),i0=new z,pi=new $(16777215),$s=new $(10809343),Bs=Object.fromEntries(Zt.map(s=>[s,new $(le[s].color)]));function Cn(s,n=0){return new P({color:s,emissive:s,emissiveIntensity:n,roughness:.66,metalness:.12})}function An(s,n,t,e){const i=new U(s,n,t);return i.name=e,i.frustumCulled=!1,i.instanceMatrix.setUsage(en),i.count=0,i}function Wn(s,n,t,e,i,o,r,a=0,l){s.count>=s.instanceMatrix.count||(_n.position.set(n,t,e),_n.rotation.set(0,a,0),_n.scale.set(i,o,r),_n.updateMatrix(),s.setMatrixAt(s.count,_n.matrix),l&&s.setColorAt(s.count,l),s.count++)}function ui(s,n,t,e,i){if(s.count>=s.instanceMatrix.count)return;i0.set(t.x-n.x,t.y-n.y,t.z-n.z);const o=i0.length();o<1e-6||(_n.position.set((n.x+t.x)/2,(n.y+t.y)/2,(n.z+t.z)/2),_n.quaternion.setFromUnitVectors(Ds,i0.multiplyScalar(1/o)),_n.scale.set(e,o,e),_n.updateMatrix(),s.setMatrixAt(s.count,_n.matrix),s.count++)}function Ns(s,n,t,e,i,o,r=1,a=1,l=1){const h=new E(n,t);return h.position.set(e,i,o),h.scale.set(r,a,l),s.add(h),h}function fi(s){const n=s.geometry.clone().applyMatrix4(s.matrixWorld);if(n.deleteAttribute("tangent"),n.deleteAttribute("color"),n.getAttribute("uv")||n.setAttribute("uv",new Lt(new Float32Array(n.getAttribute("position").count*2),2)),!n.index)return n;const t=n.toNonIndexed();return n.dispose(),t}function Gs(s,n){if(Ne(n))return Xo(n);const t=le[n],e=new D,i=new dt;s.updateMatrixWorld(!0),i.setFromObject(s);const o=i.getSize(new z),r=i.getCenter(new z),a=Math.max(o.x,o.z)/2,l=new Set,h=new Set;s.traverse(b=>{if(!(b instanceof E)||t.family==="smile"&&/Antenna|Crown_Spike|Shoulder_Spike/.test(b.name)&&t.crest!==0)return;const S=fi(b),_=S.getAttribute("position");for(let A=0;A<_.count;A++){let I=(_.getX(A)-r.x)/a,R=(_.getY(A)-i.min.y)/o.y,j=(_.getZ(A)-r.z)/a;if(t.family==="smile"){const G=R>.68?t.head:R>.33?t.chest:t.feet;I*=G,j=j*t.depth+t.lean*(R-.28)}else I*=t.head*.77,j=j*.35+.2,R=.62+R*.38,n==="drift_hound"&&(I*=1.1,j+=.18*(1-R));_.setXYZ(A,I,R,j)}S.computeVertexNormals(),l.add(S),e.add(new E(S,b.material))});const c=Cn(t.family==="smile"?12366267:2432310),p=Cn(t.color,.34),u=Cn(15849654),m=Cn(2629173);[c,p,u,m].forEach(b=>h.add(b)),n==="cell_blob"&&(u.name="parent-only-split-seam");const d=(b,S,_,A,I,R=1,j=1,G=1)=>(l.add(b),Ns(e,b,S,_,A,I,R,j,G)),g=(b,S,_,A,I,R,j=p)=>d(new un(1,1,1),j,b,S,_,A,I,R),f=(b,S,_,A,I,R=p)=>d(new vn(1,.09,4,18),R,b,S,_,A,I,.3);if(t.family==="smile"){const b=t.crest;if(b===1&&g(.62,.92,-.1,.09,.22,.1),b===2)for(const S of[-1,1])g(S*.4,.92,-.05,.17,.35,.18,u);if(b===3)for(let S=0;S<5;S++){const _=S*Math.PI*2/5;d(new Wt(.18,0),p,Math.cos(_)*.82,.7+Math.sin(_)*.07,-.08,1,.6,1)}if(b===4)for(const S of[-1,1])d(new fn(1,10,6),c,S*.58,.48,-.05,.36,.22,.42);if(b===5)for(const S of[-1,1])g(S*.73,.61,.15,.3,.25,.28,u),g(S*.86,.77,.16,.14,.28,.16,u);if(b===6||b===7){const S=b===6?3:5;for(let _=0;_<S;_++)g((_-(S-1)/2)*.24,.94-Math.abs(_-(S-1)/2)*.024,0,.12,.22,.13,u)}if(b===8)for(const S of[-1,1]){g(S*.69,.58,.3,.21,.3,.28,u);for(const _ of[-.05,.05])g(S*.69+_,.78,.29,.045,.13,.1)}}else{for(let b=0;b<7;b++){const S=.11+b*.088,_=Math.sin((b+1)/8*Math.PI),A=n==="name_glitch_shade"?Math.sin(S*7)*.22:n==="drift_hound"?.23*(1-S):0,I=t.chest*(.32+.42*_);for(const R of[-1,1]){const j=R*I+A;g(j,S,0,.075,.065,.14),g(j*.55,S,-.21*t.depth,.045,.055,.075)}g(A,S,0,.12*t.chest,.09,.13,c)}if(n==="speaker_wraith"){for(const b of[-1,1])g(b*.65,.43,0,.12,.4,.18,c);for(let b=0;b<4;b++)g(0,.32+b*.085,.2,1,.033,.06);g(0,.7,.43,.4,.04,.05,m)}if(n==="loop_ghost"&&f(0,.46,-.1,.54,.43),n==="decay_mote"){const b=d(new yt(1,0),c,0,.4,-.05,.55,.32,.38);b.rotation.y=Math.PI/4}if(n==="double")for(const b of[-1,1])g(b*.55,.43,.2,.11,.49,.06),g(b*.69,.43,.05,.06,.4,.06,u);if(n==="dual"){const b=d(new Pt(.45,.6,4),c,0,.3,-.08);b.rotation.z=Math.PI;const S=g(0,.69,.46,.4,.055,.055,u),_=g(0,.69,.46,.4,.055,.055,u);S.rotation.z=.7,_.rotation.z=-.7}if(n==="cell_blob"){for(const b of[-1,1])f(b*.42,.36,-.05,.39,.31);g(0,.62,.49,.043,.7,.035,u)}if(n==="reach_shadow"){g(0,.39,.12,.63,.25,.14,u);for(let S=0;S<4;S++)g((S-1.5)*.18,.58+.025*Math.sin(S),.12,.12,.25,.14,u);const b=g(-.48,.4,.13,.14,.28,.14,u);b.rotation.z=-.45}if(n==="drift_hound")for(const b of[-1,1])for(const S of[-.35,.35])g(b*.55,.19,S,.15,.28,.16,c),g(b*.55,.08,S+.1,.2,.06,.25)}e.updateMatrixWorld(!0);const v=new Map;e.traverse(b=>{if(!(b instanceof E))return;const S=fi(b),_=Array.isArray(b.material)?b.material:[b.material];if(_.length>1&&S.groups.length){for(const A of S.groups){const I=S.clone(),R=S.getAttribute("position"),j=S.getAttribute("normal"),G=S.getAttribute("uv");for(const[Q,Y]of[["position",R],["normal",j],["uv",G]]){const L=Array.from(Y.array).slice(A.start*Y.itemSize,(A.start+A.count)*Y.itemSize);I.setAttribute(Q,new on(L,Y.itemSize))}I.clearGroups();const N=_[A.materialIndex??0];v.set(N,[...v.get(N)??[],I])}S.dispose()}else{const A=_[0];v.set(A,[...v.get(A)??[],S])}});let w=1/0,k=-1/0,M=0;for(const b of v.values())for(const S of b){const _=S.getAttribute("position");for(let A=0;A<_.count;A++)w=Math.min(w,_.getY(A)),k=Math.max(k,_.getY(A)),M=Math.max(M,Math.hypot(_.getX(A),_.getZ(A)))}const y=[];for(const[b,S]of v){for(const I of S){const R=I.getAttribute("position");for(let j=0;j<R.count;j++)R.setXYZ(j,R.getX(j)/M,(R.getY(j)-w)/(k-w),R.getZ(j)/M);I.computeVertexNormals()}const _=hn(S,!1);if(S.forEach(I=>I.dispose()),!_)throw new Error(`Cannot merge ${n}`);_.computeBoundingBox(),_.computeBoundingSphere();const A=b.clone();A instanceof P&&(A.roughness=Math.max(A.roughness,.48),A.envMapIntensity=.55),y.push({geometry:_,material:A})}return l.forEach(b=>b.dispose()),h.forEach(b=>b.dispose()),y}function Us(s,n){const t=s.neural;if(!t||t.state!=="warmup"&&t.state!=="dash")return null;const e=x0((n.neural?.elapsed??0)/(n.neural?.duration??1)),i=t.behavior==="dash"?2.45:t.behavior==="boss"?3.2*(e>.62?1.45:1):3*(1+e*.22);let o=t.state==="dash"?Math.hypot(t.vx,t.vz)*Math.max(0,t.stateTimer):t.speed*i*.28;for(const[r,a,l]of[[s.x,t.chargeDirX,C.width/2-s.radius],[s.z,t.chargeDirZ,C.depth/2-s.radius]])Math.abs(a)>1e-8&&(o=Math.min(o,Math.max(0,((a>0?l:-l)-r)/a)));return{x:s.x,z:s.z,endX:s.x+t.chargeDirX*o,endZ:s.z+t.chargeDirZ*o,width:s.radius*2,length:o,y:gn(n)+.025}}function Hs(s,n){const t=s.neural;return{root:{x:t.side<0?We.leftX:We.rightX,y:gn(n)+We.topY,z:t.rootZ},hand:{x:s.x,y:gn(n)+t.height*.39,z:s.z},danger:{x:s.x,z:s.z,radius:s.radius,height:t.height}}}function qs(s){const n=s.neural;return!n||n.draft?[]:n.tickets.filter(t=>!t.admitted&&t.tellAt!==void 0&&s.time>=t.tellAt&&Number.isFinite(t.x)&&Number.isFinite(t.z)).slice(0,Di.enemies)}function Vs(){const s=new ge;return s.moveTo(0,-.55),s.bezierCurveTo(-.15,-.35,-.68,.05,-.55,.35),s.bezierCurveTo(-.4,.62,-.08,.56,0,.31),s.bezierCurveTo(.08,.56,.4,.62,.55,.35),s.bezierCurveTo(.68,.05,.15,-.35,0,-.55),new Ft(s,{depth:.14,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.045,bevelThickness:.035,curveSegments:6}).translate(0,0,-.07)}class Ys{constructor(n,t,e="articulated",i=!1){this.visualVT1=i,this.representation=e,this.assets=t,this.root.name="two-level-neural-crowd",this.root.visible=!1,n.add(this.root),e==="articulated"&&(this.g2Assets=new Uo(t),this.articulated=new zs(this.root,new Set(i?["flank_drone"]:[])),this.rounds=new Rs(this.root));const o=new B({color:16758896,transparent:!0,opacity:.7,depthWrite:!1,side:nn});this.shadow=An(new vt(1,16).rotateX(-Math.PI/2),new B({color:1577758,transparent:!0,opacity:.24,depthWrite:!1}),128,"neural-ground-shadows"),this.lanes=An(new an(1,1).rotateX(-Math.PI/2),o,640,"locked-dash-and-fan-warnings"),this.entry=An(new On(.8,1,24).rotateX(-Math.PI/2),o.clone(),128,"physical-edge-entry-tells"),this.posts=An(new jn(1,1,1,6),Cn(16762774,.6),256,"entry-warning-posts"),this.tether=An(new jn(1,1,1,6),Cn(7560848,.15),128,"harmless-anchored-reach-tethers"),this.anchors=An(new un(1,1,1),Cn(13153181),128,"physical-rail-reach-roots"),this.danger=An(new On(.88,1,24).rotateX(-Math.PI/2),o.clone(),128,"actual-hand-danger-footprints"),this.flashes=An(new Wt(1,1),Cn(16761194,1.4),256,"palm-mouth-release-warnings"),this.zeros=An(new vn(.045,.008,3,8),Cn(11703785,.35),2304,"binary-zero-strands"),this.ones=An(new un(.014,.082,.012),Cn(11703785,.35),2304,"binary-one-strands"),this.hearts=An(Vs(),Cn(15826328,.15),128,"source-heart-pickups"),this.bolts=An(new jn(1,1,1,6),Cn(8648431,2),128,e==="baseline"?"all-neural-friendly-rounds":"baseline-neural-friendly-rounds"),this.lockCross=An(new un(1,1,1),Cn(16764040,.7),256,"silence-rifle-lock-crosses"),this.mutable=[this.shadow,this.lanes,this.entry,this.posts,this.tether,this.anchors,this.danger,this.flashes,this.zeros,this.ones,this.hearts,this.bolts,this.lockCross],this.root.add(...this.mutable)}visualVT1;root=new D;models=new Map;sourceModels=[];loading=null;loaded=!1;disposed=!1;reduced=!1;last={actors:0,dashLanes:0,entryTells:0,reachHands:0,rangeTells:0,pickups:0,friendlyBolts:0,fireDisabled:0};shadow;lanes;entry;posts;tether;anchors;danger;flashes;zeros;ones;hearts;bolts;lockCross;mutable;assets;g2Assets=null;vt1Character=null;vt1Crowd=null;vt1DeathCursor=0;vt1Deaths=[];vt1DeathAttempt=-1;vt1DeathStage=-1;vt1DeathTime=-1;articulated=null;rounds=null;representation;async load(){return this.loading??=this.loadAssets()}async loadAssets(){try{for(const t of mi){const e=await gt(this.assets,t);if(this.disposed)throw Ln(e),new Error("Crowd disposed during load");this.sourceModels.push(e)}if(this.representation==="baseline")for(const t of Zt){const e=Gs(this.sourceModels[le[t].asset],t),i=e.map((o,r)=>An(o.geometry,o.material,128,`${t}-source-part-${r}`));this.models.set(t,i),this.root.add(...i)}const n=this.g2Assets?await this.g2Assets.load():void 0;if(this.visualVT1){const t=await Po(this.assets);if(this.disposed)throw Q0(t),Error("VT1 crowd disposed during load");this.vt1Character=t,this.vt1Crowd=new Oo(this.root,t),this.vt1Crowd.setReduced(this.reduced)}this.articulated?.load(new Map(Zt.map(t=>[t,this.sourceModels[le[t].asset]])),n),this.loaded=!0}catch(n){throw this.clearModels(),this.loading=null,n}}setReduced(n){this.reduced=n,this.articulated?.setReduced(n),this.rounds?.setReduced(n),this.vt1Crowd?.setReduced(n)}reset(){this.articulated?.reset(),this.rounds?.reset(),this.vt1Crowd?.reset(),this.vt1DeathCursor=0,this.vt1Deaths=[],this.vt1DeathAttempt=this.vt1DeathStage=-1,this.vt1DeathTime=-1}actorBase(n){return this.vt1Crowd?.actorBase(n)??this.articulated?.actorBase(n)??null}vt1Vertices(n){return this.vt1Crowd?.vertices(n)??null}geometryCosts(){const n=this.articulated?.geometryCosts();return n?{...n,drawGroups:n.drawGroups+(this.vt1Crowd?1:0),vt1:this.vt1Crowd?.stats()??null}:null}sharedDeathIds(n){if(this.visualVT1){(n.attemptId!==this.vt1DeathAttempt||n.stage!==this.vt1DeathStage||n.time<this.vt1DeathTime)&&(this.vt1Deaths=[],this.vt1DeathCursor=0,this.vt1DeathAttempt=n.attemptId,this.vt1DeathStage=n.stage),this.vt1DeathTime=n.time;for(const t of T0(n,this.vt1DeathCursor))this.vt1DeathCursor=Math.max(this.vt1DeathCursor,t.id),t.attemptId===n.attemptId&&t.kind==="removal"&&t.reason==="killed"&&!this.vt1Deaths.some(e=>e.id===t.targetId)&&this.vt1Deaths.push({id:t.targetId,time:t.time});return this.vt1Deaths=this.vt1Deaths.filter(t=>n.time>=t.time&&n.time-t.time<1.2).slice(-(this.reduced?4:16)),(n.phase==="dead"||n.phase==="complete")&&(this.vt1Deaths=[]),new Set(this.vt1Deaths.map(t=>t.id))}}render(n,t=!1){const e=this.loaded&&!this.disposed&&!t&&!!n.neural&&(n.stage===1||n.stage===2);this.root.visible=e,this.last={actors:0,dashLanes:0,entryTells:0,reachHands:0,rangeTells:0,pickups:0,friendlyBolts:0,fireDisabled:n.neural?.fireDisabled??0};for(const a of this.mutable)a.count=0;for(const a of this.models.values())for(const l of a)l.count=0;const i=this.sharedDeathIds(n);if(this.articulated?.render(n,e,i),this.rounds?.render(n,e),this.vt1Crowd?.render(n,e,i),!e)return;const o=gn(n),r=n.neural;for(const a of n.enemies){if(!a.sourceId||!a.neural||a.health<=0||this.last.actors>=128)continue;const l=a.neural,h=le[a.sourceId],c=this.models.get(a.sourceId)??[],p=a.stasis&&n.time<a.stasis.until,u=a.flash>0?pi:p?$s:pi;for(const d of c)l.child&&d.material.name==="parent-only-split-seam"||Wn(d,a.x,o,a.z,a.radius,l.height,a.radius,a.heading,u);Wn(this.shadow,a.x,o+.012,a.z,a.radius,1,a.radius),this.last.actors++;const m=Us(a,n);if(m&&m.length>0&&(Wn(this.lanes,(m.x+m.endX)/2,m.y,(m.z+m.endZ)/2,m.width,1,m.length,Math.atan2(l.chargeDirX,l.chargeDirZ)),this.last.dashLanes++),l.behavior==="ranged"||l.behavior==="boss"){const d=l.behavior==="boss"?x0(1-l.shootCooldown/.4):l.tell;if(d>0){const g=o+Math.min(1.35,l.height*.64),f=.045+.08*d;if(Wn(this.flashes,a.x+Math.sin(a.heading)*a.radius*.88,g,a.z+Math.cos(a.heading)*a.radius*.88,f,f,f),this.last.rangeTells++,l.behavior==="boss"){const v=r.elapsed/r.duration>.62?5:3;for(let w=0;w<v;w++){const k=Math.atan2(n.player.x-a.x,n.player.z-a.z)-.26+.52*w/(v-1),M=1.25;Wn(this.lanes,a.x+Math.sin(k)*M*.5,o+.027,a.z+Math.cos(k)*M*.5,.035,1,M,k)}}}}if(l.behavior==="wallhand"){const d=Hs(a,n);Wn(this.anchors,d.root.x,d.root.y,d.root.z,.19,.17,.25),ui(this.tether,d.root,d.hand,.025),Wn(this.danger,a.x,o+.028,a.z,a.radius,1,a.radius),this.last.reachHands++}if(h.family==="mask"){const d=a.age,g=this.reduced?8:16;for(let f=0;f<g;f++){const v=f/(g-1),w=f*2.4+d*.6+l.localSeed,k=a.radius*(.29+.2*Math.sin(v*Math.PI)),M=l.behavior==="swarm"||l.behavior==="phase"?Math.sin(d*(l.behavior==="swarm"?5.2:4.5)+l.localSeed+v)*a.radius*.12:0,y=(f+a.id)%2?this.ones:this.zeros;Wn(y,a.x+Math.cos(w)*k+M,o+l.height*(.09+v*.57),a.z+Math.sin(w)*k,1,1,1,-w,Bs[a.sourceId])}}if(a.sourceId==="dual"){const d=Math.atan2(n.player.x-a.x,n.player.z-a.z),g=a.x+Math.sin(d)*a.radius*.8,f=a.z+Math.cos(d)*a.radius*.8;for(const v of[-1,1]){const w=this.lockCross;if(w.count>=w.instanceMatrix.count)break;_n.position.set(g,o+l.height*.74,f),_n.rotation.set(0,d,v*.7),_n.scale.set(a.radius*.8,.028,.025),_n.updateMatrix(),w.setMatrixAt(w.count++,_n.matrix)}}}for(const a of qs(n)){const l=E0[a.sourceId].size*.02,h=x0((n.time-a.tellAt)/Di.entryTell),c=a.x,p=a.z;Wn(this.entry,c,o+.025,p,l+.18,1,l+.18);for(const u of[-1,1])Wn(this.posts,c+u*(l+.15),o+1.1,p,.017,2.2,.017);Wn(this.flashes,c,o+.4+h*1.45,p,.065,.065,.065),this.last.entryTells++}for(const a of r.pickups)Wn(this.hearts,a.x,a.y,a.z,a.radius*1.5,a.radius*1.5,a.radius*1.5,Math.atan2(n.player.x-a.x,n.player.z-a.z)),this.last.pickups++;if(this.representation==="baseline")for(const a of n.friendlyBolts){if(a.life<=0)continue;const l=Math.hypot(a.x-a.px,a.y-a.py,a.z-a.pz),h=Math.hypot(a.vx,a.vy,a.vz)||1,c=Math.min(.32,Math.max(.09,l));ui(this.bolts,{x:a.x-a.vx/h*c,y:a.y-a.vy/h*c,z:a.z-a.vz/h*c},a,Math.max(.018,(a.radius??.08)*.38)),this.last.friendlyBolts++}this.rounds&&(this.last.friendlyBolts=this.rounds.stats().friendly);for(const a of[...this.mutable,...Array.from(this.models.values()).flat()])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}stats(){return{profile:this.visualVT1?mn.id:this.representation==="articulated"?Ot.id:"retained-baseline",vt1:this.vt1Crowd?.stats()??null,representation:this.representation,articulated:this.articulated?.stats()??null,projectiles:this.rounds?.stats()??null,loaded:this.loaded,disposed:this.disposed,reduced:this.reduced,capacity:128,sourceIds:[...Zt],levelOneIds:[...V0[1]],levelTwoIds:[...V0[2]],sourceAssets:[...mi],modelDrawGroups:Array.from(this.models.values()).reduce((n,t)=>n+t.length,0),...this.last,gpuVisualQA:"unverified",measuredFPS:null}}clearModels(){this.vt1Crowd?.dispose(),this.vt1Crowd=null,this.vt1Character&&Q0(this.vt1Character),this.vt1Character=null,this.articulated?.clearLoadedResources();for(const n of this.models.values())for(const t of n)t.dispose(),t.removeFromParent(),t.geometry.dispose(),t.material.dispose();this.models.clear(),this.sourceModels.forEach(Ln),this.sourceModels=[],this.loaded=!1}dispose(){if(this.disposed)return;this.disposed=!0,this.articulated?.dispose(),this.g2Assets?.dispose(),this.rounds?.dispose(),this.clearModels();const n=new Set,t=new Set;for(const e of this.mutable)e.dispose(),n.add(e.geometry),t.add(e.material);n.forEach(e=>e.dispose()),t.forEach(e=>e.dispose()),this.root.removeFromParent()}}const De=40;function gi(s){return Number.isFinite(s)?Math.max(0,s)/De:0}function Xs(){const n=[],t=[],e=[],i=Array.from({length:18},(l,h)=>{const c=h/18*Math.PI*2;return new bn(Math.pow(Math.sin(c),3),(13*Math.cos(c)-5*Math.cos(2*c)-2*Math.cos(3*c)-Math.cos(4*c)+2)/17)});for(const[l,h]of[[1,-.1],[1,.04],[.79,.17]])for(const c of i)n.push(c.x*l,c.y*l,h),t.push((c.x*l+1)/2,(c.y*l+1)/2);const o=n.length/3;n.push(0,0,-.1),t.push(.5,.5);const r=n.length/3;n.push(0,.03,.24),t.push(.5,.515);for(let l=0;l<18;l++){const h=(l+1)%18;for(let c=0;c<2;c++){const p=c*18+l,u=c*18+h,m=(c+1)*18+l,d=(c+1)*18+h;e.push(p,m,u,u,m,d)}e.push(o,l,h,r,36+h,36+l)}const a=new Tn;return a.setAttribute("position",new on(n,3)),a.setAttribute("uv",new on(t,2)),a.setIndex(e),a.computeVertexNormals(),a.computeBoundingSphere(),a}const Zs=`varying vec3 vN; varying vec2 vUv; varying vec3 vP;
void main(){vUv=uv;vN=normalize(normalMatrix*normal);vP=(modelViewMatrix*vec4(position,1.0)).xyz;gl_Position=projectionMatrix*vec4(vP,1.0);}`,Ks=`uniform float fill;uniform float clock;uniform float loss;varying vec3 vN;varying vec2 vUv;varying vec3 vP;
void main(){vec3 n=normalize(vN);float filled=fill<=0.0?0.0:step(vUv.x,fill);float diffuse=.5+.5*max(0.,dot(n,normalize(vec3(-.5,.8,1.))));
float rim=pow(1.-abs(n.z),1.4);float spec=pow(max(0.,dot(n,normalize(vec3(-.35,.7,1.5)))),28.);
vec3 spectrum=.5+.5*cos(vec3(0.,2.094,4.188)+(vUv.y*.65+vUv.x*.28+clock)*6.28318);
vec3 chrome=vec3(.72,.81,.82)*diffuse+spec*.62+spectrum*(.17+rim*.48);
vec3 empty=vec3(.035,.053,.069)+vec3(.07,.10,.12)*rim+spec*.035;
vec3 c=mix(empty,chrome,filled);c+=vec3(.13,.10,.16)*loss;
// A crisp neutral divider shows partial health independently of hue.
if(fill>0.&&fill<1.&&abs(vUv.x-fill)<.022)c=mix(c,vec3(.95,.98,1.),.8);
gl_FragColor=vec4(c,1.);}`;function Qs(s,n){const t=Number.isFinite(n)?Math.max(De,Math.min(240,n)):120,e=Number.isFinite(s)?Math.max(0,Math.min(t,s)):0,i=Math.ceil(t/De);return{capacity:i,hearts:gi(e),maximum:gi(t),fills:Array.from({length:i},(o,r)=>Math.max(0,Math.min(1,e/De-r)))}}class Js{scene=new Xt;camera=new co(0,1,1,0,-10,10);geometry=Xs();meshes=[];width=1;height=1;time=-1;attempt=-1;previousHealth=0;lossUntil=-1;disposed=!1;constructor(){this.scene.name="g2-dimensional-heart-hud";for(let n=0;n<6;n++){const t=new we({vertexShader:Zs,fragmentShader:Ks,uniforms:{fill:{value:1},clock:{value:0},loss:{value:0}},depthTest:!1,depthWrite:!1,toneMapped:!1}),e=new E(this.geometry,t);e.name=`g2-heart-${n+1}`,e.frustumCulled=!1,this.meshes.push(e),this.scene.add(e)}}resize(n,t){this.width=n,this.height=t,this.camera.right=n,this.camera.top=t,this.camera.updateProjectionMatrix()}render(n,t,e,i,o){if(this.disposed||!i||!n.neural)return;(this.attempt!==n.attemptId||n.time<this.time)&&(this.attempt=n.attemptId,this.lossUntil=-1,this.previousHealth=n.player.health),n.player.health<this.previousHealth&&(this.lossUntil=n.time+.18),this.previousHealth=n.player.health,this.time=n.time;const r=Qs(n.player.health,n.neural.stats.maxHealth),a=o?Math.max(22,Math.min(38,o.height,o.width/r.capacity-6)):30,l=o?.left??20,h=o?.top??24;for(let c=0;c<6;c++){const p=this.meshes[c];p.visible=c<r.capacity,p.visible&&(p.position.set(l+a/2+c*(a+6),this.height-h-a/2,0),p.scale.set(a/2,a/2,a/2),p.material.uniforms.fill.value=r.fills[c],p.material.uniforms.clock.value=e?0:n.time%8/8,p.material.uniforms.loss.value=n.time<this.lossUntil?1:0)}t.clearDepth(),t.render(this.scene,this.camera)}stats(){return{meshes:6,triangles:this.geometry.index.count/3*6,maxDrawCalls:6,newFramebuffers:0,shimmerCycleSeconds:8,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.geometry.dispose(),this.meshes.forEach(n=>n.material.dispose()),this.scene.clear())}}class na{constructor(n){this.asset=n,this.root.name="g2-presentation-only-rifle-alignment",this.root.add(n.root),this.flash=n.root.getObjectByName("shot_discharge_only")??null,this.flashPosition=this.flash?.position.clone()??null}asset;root=new D;canonical=null;sample=null;width=1280;height=720;disposed=!1;flash;flashPosition;resize(n,t){this.width=n,this.height=t}beforeSourceUpdate(){this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.flash&&this.flashPosition&&this.flash.position.copy(this.flashPosition)}canonicalSocketPoint(){return this.canonical?.clone()??this.asset.muzzleSocket.getWorldPosition(new z)}update(n,t,e,i){if(this.canonical=this.asset.muzzleSocket.getWorldPosition(new z),this.disposed||i||!this.asset.root.visible||!this.asset.weapon.visible){this.sample=null;return}const o=this.asset.root.getObjectByName("dark_optical_bore_at_real_depth"),r=this.asset.root.getObjectByName("eight_petal_muzzle_iris");if(!o||!r){this.sample=null;return}const a=Math.tan(J.degToRad(e.fov/2))/Math.tan(J.degToRad(t.fov/2)),l=Z=>(Z.x*=a,Z.y*=a,e.localToWorld(Z)),h=Z=>(e.worldToLocal(Z),Z.x/=a,Z.y/=a,Z),c=l(this.canonical.clone()),p=l(o.getWorldPosition(new z)),u=r.getWorldPosition(new z),m=r.localToWorld(new z(0,0,-1)),d=m.clone().sub(u).normalize(),g=l(m.clone()).sub(l(u.clone())).normalize(),f=e.getWorldDirection(new z),w=n.friendlyBolts.filter(Z=>Z.attemptId===n.attemptId&&Z.life>0&&.95-Z.life<=.08&&new z(Z.vx,Z.vy,Z.vz).normalize().dot(f)>.6).sort((Z,O)=>O.id-Z.id)[0],k=w?new z(w.x,w.y,w.z).addScaledVector(new z(w.vx,w.vy,w.vz),-Math.max(0,.95-w.life)):null,M=k??c,y=w?M.clone().add(new z(w.vx,w.vy,w.vz).normalize()):e.position.clone().addScaledVector(f,Math.max(10,(n.neural?.stats.bulletSpeed??30)*.95)),b=h(M.clone()),S=h(y),_=S.sub(b).normalize(),A=o.getWorldPosition(new z);this.root.quaternion.setFromUnitVectors(d,_),this.root.position.copy(b).sub(A.applyQuaternion(this.root.quaternion)),this.root.updateMatrixWorld(!0),this.flash&&(this.flash.position.copy(this.asset.weapon.worldToLocal(o.getWorldPosition(new z))),n.lifelikeEvents?.records.some(O=>O.kind==="projectile"&&O.allegiance==="friendly"&&O.reason==="geometry"&&O.attemptId===n.attemptId&&n.time-O.time>=0&&n.time-O.time<.06)&&!w&&(this.flash.visible=!1)),this.root.updateMatrixWorld(!0);const I=l(o.getWorldPosition(new z)),R=r.getWorldPosition(new z),j=r.localToWorld(new z(0,0,-1)),G=l(j).sub(l(R)).normalize(),N=I.clone().project(e),Q=p.clone().project(e),Y=k?.clone().project(e),L=Z=>Y?Math.hypot((Y.x-Z.x)*this.width/2,(Y.y-Z.y)*this.height/2):null;this.sample={attemptId:n.attemptId,time:n.time,shotCount:n.shots,boltId:w?.id??null,cssPixels:L(N),axisDegrees:w?J.radToDeg(G.angleTo(new z(w.vx,w.vy,w.vz))):null,beforeCSSPixels:L(Q),beforeAxisDegrees:w?J.radToDeg(g.angleTo(new z(w.vx,w.vy,w.vz))):null,canonicalSocket:c.toArray(),visibleBore:I.toArray(),boltOrigin:k?.toArray()??null,status:w?"PRESENTATION_ALIGNED_TO_RECORDED_FORWARD_ROUND_OWNER_QA_PENDING":"COSMETIC_IDLE_ALIGNMENT_NO_BIRTH_MEASUREMENT"}}stats(){return{status:"PRESENTATION_CORRECTION_OWNER_QA_PENDING",correctionApplied:!0,authoritativeSocketUnchanged:!0,sample:this.sample?structuredClone(this.sample):null}}dispose(){this.disposed||(this.beforeSourceUpdate(),this.disposed=!0,this.sample=null,this.canonical=null,this.root.removeFromParent())}}class ta{materials=new ss;attempt=-1;shots=0;shotAt=-100;fingers=[];disposed=!1;constructor(n){this.materials.apply(n.root,t=>{if(!(t instanceof P))return;const e=t.name.toLowerCase();/glove|fabric|sleeve|skin|embroidery/.test(e)?(t.roughness=Math.min(.98,t.roughness+.02),t.envMapIntensity=.42):/graphite|titanium|ceramic|champagne/.test(e)&&(t.roughness=Math.min(.65,t.roughness+.055),t.envMapIntensity=.76)},t=>t instanceof P&&/glove|fabric|sleeve|skin|embroidery|graphite|titanium|ceramic|champagne/i.test(t.name));for(const t of["left","right"])for(const e of["middle","ring","little"]){const i=n.joints.get(`${t}_${e}_DIP`);i&&this.fingers.push({object:i,offset:0})}}beforeSourceUpdate(){for(const n of this.fingers)n.object.rotation.x-=n.offset,n.offset=0}update(n,t,e,i,o){if(this.disposed)return;this.attempt!==n.attemptId&&(this.attempt=n.attemptId,this.shots=n.shots,this.shotAt=-100),n.shots>this.shots&&(this.shotAt=n.time),this.shots=n.shots;const r=n.stage===2?Math.max(0,Math.min(1,(n.level2?.environment.floorY??0)/-18)):0;i.color.setHex(n.stage===1?16773595:14213585).lerp(new $(13161687),r),i.groundColor.setHex(n.stage===1?6712165:5398857).lerp(new $(6707270),r),i.intensity=1.08,o.color.setHex(n.stage===1?16774116:16771265).lerp(new $(14740454),r),o.intensity=1.85-.2*r;const a=n.time-this.shotAt,l=V.motion,h=!t&&!e&&a>=0&&a<l.gripSeconds?Math.sin(Math.PI*a/l.gripSeconds)*Math.exp(-a*14)*l.gripRadians:0;for(const c of this.fingers)c.offset=h,c.object.rotation.x+=h}stats(){return{profile:V.id,...this.materials.stats(),terminalFingers:this.fingers.length,maxGripRadians:V.motion.gripRadians,socketsUnchanged:!0}}dispose(){this.disposed||(this.beforeSourceUpdate(),this.disposed=!0,this.materials.dispose())}}const o0={position:[.18,-.15,-.8],rotation:[.015,.3,-.025],scale:.84},s0={fov:55,near:.025,far:12},wn=Math.PI*2,Hn=J.clamp,wi=[16738930,16763241,15919762,7334593,6805247,9145599,15176447];new z(0,1,0);const bi=new z(0,0,1),a0=s=>(s=Hn(s,0,1),s*s*(3-2*s));function v0(s,n=.009){const t=new ge;for(let e=0;e<s.length;e++){const i=new bn(...s[e]),o=new bn(...s[(e+s.length-1)%s.length]),r=new bn(...s[(e+1)%s.length]),a=Math.min(n,i.distanceTo(o)*.32),l=Math.min(n,i.distanceTo(r)*.32),h=i.clone().add(o.sub(i).normalize().multiplyScalar(a)),c=i.clone().add(r.sub(i).normalize().multiplyScalar(l));e===0?t.moveTo(h.x,h.y):t.lineTo(h.x,h.y),t.quadraticCurveTo(i.x,i.y,c.x,c.y)}return t.closePath(),t}function Yn(s,n,t=.004){const e=v0(s.map(([o,r])=>[-o,r]),t*2),i=new Ft(e,{depth:n,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:t,bevelThickness:t*.7,curveSegments:4});return i.translate(0,0,-n/2),i.rotateY(Math.PI/2),i}function r0(s,n,t,e=.004,i=32){const o=Math.min(e,(n-s)*.35,t*.24),r=t/2,a=[[s,-r+o],[s+o,-r],[n-o,-r],[n,-r+o],[n,r-o],[n-o,r],[s+o,r],[s,r-o],[s,-r+o]].map(([h,c])=>new bn(h,c)),l=new go(a,i);return l.rotateX(Math.PI/2),l}function ea(s,n,t,e,i){const o=new ge;o.absarc(0,0,n,e,e+i,!1),o.lineTo(Math.cos(e+i)*s,Math.sin(e+i)*s),o.absarc(0,0,s,e+i,e,!0),o.closePath();const r=new Ft(o,{depth:t,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.002,bevelSegments:2,steps:1,curveSegments:16});return r.translate(0,0,-t/2),r}function Dn(s,n,t=48,e=6){return new Fi(new Li(s.map(i=>new z(...i))),t,n,e,!1)}function et(s,n=16){const t=[],e=[],i=[],o=s[s.length-1].z<s[0].z;for(let a=0;a<s.length;a++)for(let l=0;l<=n;l++){const h=l/n*wn,c=s[a];t.push((c.cx??0)+Math.cos(h)*c.w,(c.cy??0)+Math.sin(h)*c.h,c.z),e.push(l/n,a/(s.length-1))}for(let a=0;a<s.length-1;a++)for(let l=0;l<n;l++){const h=a*(n+1)+l,c=h+n+1;o?i.push(h,c,h+1,h+1,c,c+1):i.push(h,h+1,c,h+1,c+1,c)}for(const a of[0,s.length-1]){const l=s[a],h=t.length/3;t.push(l.cx??0,l.cy??0,l.z),e.push(.5,.5);for(let c=0;c<n;c++){const p=a*(n+1)+c;a===0!==o?i.push(h,p+1,p):i.push(h,p,p+1)}}const r=new Tn;return r.setAttribute("position",new on(t,3)),r.setAttribute("uv",new on(e,2)),r.setIndex(i),r.computeVertexNormals(),r}function ia(s,n=-.12*Math.PI,t=1.12*Math.PI,e=.0024){const o=[],r=[],a=[],h=s.length*21;for(let p=0;p<2;p++)for(let u=0;u<s.length;u++)for(let m=0;m<=20;m++){const d=s[u],g=n+(t-n)*m/20,f=p===0?0:e;o.push(Math.cos(g)*(d.w-f),Math.sin(g)*(d.h-f),d.z),r.push(m/20,u/(s.length-1))}for(let p=0;p<s.length-1;p++)for(let u=0;u<20;u++){const m=p*21+u,d=m+21;a.push(m,m+1,d,m+1,d+1,d),a.push(m+h,d+h,m+1+h,m+1+h,d+h,d+1+h)}for(const p of[0,s.length-1])for(let u=0;u<20;u++){const m=p*21+u,d=m+1,g=m+h,f=d+h;p===0?a.push(m,g,d,d,g,f):a.push(m,d,g,d,f,g)}for(const p of[0,20])for(let u=0;u<s.length-1;u++){const m=u*21+p,d=m+21,g=m+h,f=d+h;p===0?a.push(m,d,g,d,f,g):a.push(m,g,d,d,g,f)}const c=new Tn;return c.setAttribute("position",new on(o,3)),c.setAttribute("uv",new on(r,2)),c.setIndex(a),c.computeVertexNormals(),c}function oa(s=1){return et([{z:-.044,w:.029*s,h:.0018},{z:-.038,w:.041*s,h:.005},{z:-.018,w:.043*s,h:.007},{z:.013,w:.034*s,h:.006},{z:.036,w:.024*s,h:.004},{z:.042,w:.021*s,h:.0018}],16)}function l0(s,n=0){const t=s.getAttribute("position"),e=[];for(let i=0;i<t.count;i++){const o=Math.atan2(t.getY(i),t.getX(i))/wn+t.getZ(i)*1.9+n,r=new $().setHSL((o%1+1)%1,.83,.62);e.push(r.r,r.g,r.b)}return s.setAttribute("color",new on(e,3)),s}class sa{root=new D;movementRoot=new D;actionRoot=new D;weapon=new D;muzzleSocket=new cn;joints=new Map;artParts=[];geometries=new Set;materials=new Set;textures=new Set;skeletons=new Set;cache=new Map;glove;gloveDigits;skin;cloth;cuff;thread;pearl;gold;gunmetal;titanium;rubber;seam;energy;glass;coreMaterial;lensMaterial;bolt=new D;coil=new D;trigger=new D;iris=[];vents=[];hands=[];indicators=[];flash;flashMaterial;clearHalo;muzzleLight=new me(12053247,0,.8,2);recoil=0;recoilVelocity=0;shotAge=10;shotIndex=0;triggerAmount=0;swayX=0;swayY=0;locomotion=0;motionPhase=0;lastClear=0;clearAge=10;disabledAmount=0;disposed=!1;presentationRest=[];basePosition=new z(...o0.position);baseRotation=new En(...o0.rotation);screws=[];constructor(){this.root.name="AURORA_07_VIEW_ROOT",this.movementRoot.name="movement_inertia_root",this.actionRoot.name="action_recoil_root",this.weapon.name="AURORA_07_original_rifle",this.root.add(this.movementRoot),this.movementRoot.add(this.actionRoot),this.actionRoot.add(this.weapon),this.root.position.copy(this.basePosition),this.root.rotation.copy(this.baseRotation),this.root.scale.setScalar(o0.scale);const n=this.makeWeave();this.pearl=this.mat(new Le({name:"Aurora / pearl ceramic enamel",color:16052453,metalness:.14,roughness:.25,clearcoat:.85,clearcoatRoughness:.2,iridescence:.2,iridescenceIOR:1.38,iridescenceThicknessRange:[180,310],envMapIntensity:1.2})),this.gold=this.mat(new P({name:"Aurora / satin champagne titanium nitride",color:14265936,metalness:.86,roughness:.24,envMapIntensity:1.35})),this.gunmetal=this.mat(new P({name:"Aurora / graphite machined receiver",color:2107954,metalness:.82,roughness:.3,envMapIntensity:1.3})),this.titanium=this.mat(new P({name:"Aurora / brushed bright titanium",color:10267056,metalness:.92,roughness:.25,envMapIntensity:1.35})),this.rubber=this.mat(new P({name:"Aurora / tactile woven black glove",color:1514787,metalness:.03,roughness:.89,normalMap:n,normalScale:new bn(.32,.32)})),this.glove=this.mat(new P({name:"Knight / soft charcoal tactical glove",color:3159346,metalness:0,roughness:.88,normalMap:n,normalScale:new bn(.23,.23)})),this.gloveDigits=this.mat(new P({name:"Knight / continuously skinned glove fingers",color:3817018,metalness:0,roughness:.88,vertexColors:!0,normalMap:n,normalScale:new bn(.18,.18)})),this.skin=this.mat(new P({name:"Knight / warm natural human skin",color:12553318,metalness:0,roughness:.7,normalMap:this.makeSkinGrain(),normalScale:new bn(.1,.1)})),this.cloth=this.mat(new P({name:"Knight / woven muted sage sleeve",color:6648424,metalness:0,roughness:.96,normalMap:n,normalScale:new bn(.4,.4)})),this.cuff=this.mat(new P({name:"Knight / folded olive charcoal fabric",color:4871501,metalness:0,roughness:.98,normalMap:n,normalScale:new bn(.43,.43)})),this.thread=this.mat(new P({name:"Knight / subdued champagne embroidery",color:11114608,metalness:0,roughness:.93})),this.seam=this.mat(new P({name:"Aurora / recessed graphite seam",color:527892,metalness:.18,roughness:.64})),this.energy=this.mat(new P({name:"Aurora / optical crystal filaments",color:16777215,vertexColors:!0,emissive:8298179,emissiveIntensity:.52,metalness:.3,roughness:.16})),this.glass=this.mat(new Le({name:"Aurora / reactor sapphire lens",color:12380415,metalness:.05,roughness:.06,clearcoat:1,transparent:!0,opacity:.27,depthWrite:!1,side:mo,iridescence:.85,iridescenceIOR:1.6,iridescenceThicknessRange:[240,460]})),this.coreMaterial=this.fieldMaterial(!1),this.lensMaterial=this.fieldMaterial(!0),this.makeReceiver(),this.makeBarrel(),this.makeIris(),this.makeSights(),this.makeGrip(),this.makeStock(),this.batchStaticSpars(),this.makeFasteners(),this.hands.push(this.makeHand("right"),this.makeHand("left")),this.flashMaterial=this.mat(new B({name:"Aurora / brief discharge",color:14548223,transparent:!0,opacity:0,depthWrite:!1,blending:qn,toneMapped:!1,side:nn})),this.flash=new D,this.flash.name="shot_discharge_only",this.flash.position.set(0,0,-.916),this.weapon.add(this.flash);const t=this.mesh("solid_short_discharge_core",new yt(.035,0),this.flashMaterial,this.flash);t.scale.set(.5,.5,2.7),t.position.z=-.02;for(let i=0;i<6;i++){const o=this.mesh("directional_iris_flare_"+i,new an(.008,.058),this.flashMaterial,this.flash);o.rotation.z=i*wn/6,o.position.set(Math.cos(i*wn/6)*.012,Math.sin(i*wn/6)*.012,-.023)}this.flash.visible=!1,this.muzzleLight.position.set(0,0,-.94),this.weapon.add(this.muzzleLight),this.muzzleSocket.name="muzzle_socket",this.muzzleSocket.position.set(0,0,-.925),this.weapon.add(this.muzzleSocket),this.joints.set("muzzle_socket",this.muzzleSocket),this.clearHalo=this.makeClearHalo(),this.clearHalo.visible=!1,this.root.updateMatrixWorld(!0);const e=[this.movementRoot,this.actionRoot,this.trigger,this.bolt,this.coil,...this.iris,...this.vents,this.flash,this.clearHalo,...this.hands.flatMap(i=>[i.root,i.wrist,...i.fingers.flatMap(o=>o.joints)])];this.presentationRest=e.map(i=>({object:i,position:i.position.clone(),quaternion:i.quaternion.clone(),scale:i.scale.clone(),visible:i.visible}))}mat(n){return this.materials.add(n),n}own(n){return this.geometries.add(n),n}geom(n,t){let e=this.cache.get(n);return e||(e=this.own(t()),this.cache.set(n,e)),e}mesh(n,t,e,i=this.weapon,o=[0,0,0]){this.own(t);const r=new E(t,e);return r.name=n,r.position.set(...o),r.castShadow=!1,r.receiveShadow=!1,i.add(r),this.artParts.push(n),r}group(n,t=this.weapon,e=[0,0,0]){const i=new D;return i.name=n,i.position.set(...e),t.add(i),this.joints.set(n,i),i}box(n,t,e,i,o=this.weapon,r=.006){return this.mesh(n,this.geom("rounded:"+t.join(",")+":"+r,()=>new q0(...t,Math.min(...t)<.035?1:2,r)),i,o,e)}ring(n,t,e,i,o,r,a=this.weapon){return this.mesh(n,this.geom(`ring:${t}:${e}:${i}`,()=>r0(t,e,i)),r,a,o)}addScrew(n,t=[-1,0,0],e=1){this.screws.push({p:n,q:new yn().setFromUnitVectors(bi,new z(...t)),s:e})}makeSkinGrain(){const t=new Uint8Array(65536);let e=7631;for(let o=0;o<16384;o++){e=e*1664525+1013904223>>>0;const r=o*4;t[r]=124+(e>>>12&7),t[r+1]=124+(e>>>20&7),t[r+2]=254,t[r+3]=255}const i=new wt(t,128,128);return i.wrapS=i.wrapT=Nn,i.repeat.set(4,4),i.magFilter=bt,i.minFilter=st,i.generateMipmaps=!0,i.needsUpdate=!0,this.textures.add(i),i}bone(n,t,e){const i=new po;return i.name=n,i.position.set(...e),t.add(i),this.joints.set(n,i),i}skinDigit(n,t,e,i,o){const r=i.reduce((M,y)=>M+y,0),a=i[0],l=a+i[1],h=30,c=14,p=[];for(let M=0;M<=h;M++){const y=M/h*r,b=y/r,S=Math.exp(-Math.pow((y-a)/.009,2))*.05+Math.exp(-Math.pow((y-l)/.006,2))*.035;let _=o*(1-.23*b+S);b>.92&&(_*=Math.sqrt(Math.max(.035,1-Math.pow((b-.92)/.083,2)))),p.push({z:-y,w:_,h:_*(.9+.06*Math.sin(b*Math.PI))})}const u=et(p,c),m=u.getAttribute("position"),d=[],g=[],f=[],v=e[0].position;for(let M=0;M<m.count;M++){const y=-m.getZ(M),b=a0((y-(a-.007))/.014),S=a0((y-(l-.005))/.01);g.push(0,1,2,0),f.push(1-b,b*(1-S),S,0);const _=Math.max(Math.exp(-Math.pow((y-a)/.0019,2)),Math.exp(-Math.pow((y-l)/.0015,2))),A=Hn(m.getY(M)/o,0,1),I=1-_*.18*A;d.push(I,I,I),m.setXYZ(M,m.getX(M)+v.x,m.getY(M)+v.y,m.getZ(M)+v.z)}u.setAttribute("color",new on(d,3)),u.setAttribute("skinIndex",new uo(g,4)),u.setAttribute("skinWeight",new on(f,4));const w=new S0(this.own(u),this.gloveDigits);w.name=n+"_continuous_soft_glove",w.frustumCulled=!1,w.castShadow=!1,w.receiveShadow=!1,t.add(w),this.artParts.push(w.name),this.root.updateMatrixWorld(!0);const k=new fo(e);return w.bind(k),this.skeletons.add(k),w}makeWeave(){const t=new Uint8Array(65536);for(let i=0;i<128;i++)for(let o=0;o<128;o++){const r=(i*128+o)*4,a=Math.sin(o*Math.PI/2),l=Math.cos(i*Math.PI/2),h=(o+i)%13===0?3:0;t[r]=128+a*15,t[r+1]=128+l*15,t[r+2]=251-h,t[r+3]=255}const e=new wt(t,128,128);return e.wrapS=e.wrapT=Nn,e.repeat.set(5,5),e.magFilter=bt,e.minFilter=st,e.generateMipmaps=!0,e.needsUpdate=!0,this.textures.add(e),e}fieldMaterial(n){return this.mat(new we({name:n?"Aurora / living side prism field":"Aurora / axial plasma field",uniforms:{uTime:{value:0},uPulse:{value:0},uDim:{value:0},uSide:{value:n?1:0}},vertexShader:"varying vec3 vP; varying vec3 vN; varying vec3 vV; void main(){vP=position; vec4 mv=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}",fragmentShader:`varying vec3 vP; varying vec3 vN; varying vec3 vV;uniform float uTime,uPulse,uDim,uSide;
vec3 rainbow(float x){return .54+.44*cos(6.2831853*(x+vec3(0.,.34,.67)));}
void main(){vec2 q=mix(vP.xy,vP.yz,uSide);float r=length(q);float a=atan(q.y,q.x);float flow=a*2.6-r*51.+uTime*.5;float fil=pow(.5+.5*sin(flow*2.+sin(a*7.-uTime*.72)*1.8),12.);float fine=pow(.5+.5*sin(a*23.+r*184.-uTime*1.3),34.);float rim=pow(1.-abs(dot(normalize(vN),normalize(vV))),2.4);vec3 col=rainbow(a/6.2831853+r*2.1-uTime*.06);col*=.32+fil*.7+fine*.24;col+=vec3(.25,.6,.7)*rim*.5;col+=uPulse*(.2+fil*.55);col=mix(col,vec3(.08,.14,.17),uDim*.8);gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`,toneMapped:!0}))}makeReceiver(){this.box("continuous_graphite_receiver_chassis",[.143,.148,.53],[0,.012,.005],this.gunmetal,this.weapon,.016);const n=[[.262,.049],[.224,.108],[.052,.109],[.018,.089],[-.214,.089],[-.279,.044],[-.279,-.035],[-.196,-.083],[.039,-.076],[.083,-.1],[.229,-.095],[.27,-.052]];for(const r of[-1,1]){this.mesh(`receiver_${r}_gold_inset_gasket`,Yn(n,.019,.003),this.gold,this.weapon,[r*.086,0,0]);const a=n.map(([l,h])=>[l*.986,h*.9+.001]);this.mesh(`receiver_${r}_sculpted_pearl_cheek`,Yn(a,.025,.006),this.pearl,this.weapon,[r*.089,0,0]),this.mesh(`receiver_${r}_separated_rear_panel`,Yn([[.25,.05],[.212,.082],[.082,.081],[.053,.045],[.059,-.022],[.22,-.028],[.252,-.005]],.019,.005),this.pearl,this.weapon,[r*.111,.006,0]),this.mesh(`receiver_${r}_graphite_access_inlay`,Yn([[.204,.059],[.084,.059],[.066,.04],[.077,.016],[.218,.017],[.235,.033]],.012,.002),this.gunmetal,this.weapon,[r*.123,0,0]),this.mesh(`receiver_${r}_lower_seam`,Dn([[r*.108,-.058,.204],[r*.112,-.057,.075],[r*.11,-.047,.052]],.0022,22,5),this.seam),this.mesh(`receiver_${r}_front_seam`,Dn([[r*.111,.067,-.25],[r*.113,.067,-.19],[r*.116,.045,-.167]],.0022,22,5),this.seam);for(const l of[[.231,.032],[.079,.043],[-.247,.027],[-.199,-.05]])this.addScrew([r*.131,l[1],l[0]],[r,0,0],.75);this.box(`cooling_pocket_${r}`,[.014,.035,.097],[r*.083,-.07,-.215],this.seam)}this.box("underslung_titanium_load_path",[.16,.026,.49],[0,-.087,-.043],this.titanium,this.weapon,.006),this.box("lower_pearl_handguard_shelf",[.161,.047,.366],[0,-.092,-.397],this.pearl,this.weapon,.012),this.box("support_grip_thermal_pad",[.155,.025,.316],[0,-.126,-.421],this.rubber,this.weapon,.009);const t=this.group("side_reactor_optical_assembly",this.weapon,[-.12,.007,-.1]);t.rotation.y=-Math.PI/2,this.ring("reactor_counterbore",.084,.113,.033,[0,0,0],this.seam,t),this.ring("reactor_champagne_outer_bezel",.084,.108,.018,[0,0,.015],this.gold,t),this.ring("reactor_double_lipped_titanium_inner_race",.078,.087,.018,[0,0,.024],this.titanium,t),this.ring("reactor_thin_dark_optical_gasket",.076,.079,.008,[0,0,.033],this.seam,t);const e=this.mesh("recessed_live_optical_vortex",this.geom("lensdisc",()=>new fn(.077,48,24)),this.lensMaterial,t,[0,0,.015]);e.scale.z=.18,this.lensMaterial.uniforms.uSide.value=0;const i=[];for(let r=0;r<7;r++){const a=[];for(let h=0;h<=64;h++){const c=h/64,p=r*wn/7+c*4.45,u=.012+c*.059;a.push([Math.cos(p)*u,Math.sin(p)*u,.031+Math.sin(c*Math.PI)*.004])}const l=Dn(a,.0014,48,5);l0(l,r/7),i.push(l)}this.mesh("seven_nested_crystal_lens_filaments",hn(i,!1),this.energy,t),i.forEach(r=>r.dispose());const o=this.mesh("convex_sapphire_lens_with_physical_parallax",this.geom("lenscover",()=>new fn(.0785,48,24)),this.glass,t,[0,0,.03]);o.scale.z=.115;for(let r=0;r<8;r++){const a=r*wn/8+.17,l=-.146,h=.007+Math.sin(a)*.099,c=-.1-Math.cos(a)*.099;this.addScrew([l,h,c],[-1,0,0],.67)}this.makeLabel("AURORA   /   07",[-.137,.04,.137],.103,.02,-Math.PI/2),this.makeLabel("PRISMATIC DRIVE",[-.108,-.052,-.024],.076,.011,-Math.PI/2)}makeBarrel(){this.ring("barrel_receiver_dark_sleeve",.06,.096,.115,[0,0,-.322],this.gunmetal),this.ring("receiver_barrel_titanium_coupling",.061,.102,.022,[0,0,-.352],this.titanium),this.coil=this.group("reactor_coil_rotating_assembly",this.weapon,[0,0,-.553]),this.mesh("axial_live_prism_cylinder",this.geom("plasma-cylinder",()=>{const e=new jn(.066,.066,.351,48,1,!0);return e.rotateX(Math.PI/2),e}),this.coreMaterial,this.coil);const n=[];for(let e=0;e<7;e++){const i=[];for(let r=0;r<=108;r++){const a=r/108,l=e*wn/7+a*wn*1.1;i.push([Math.cos(l)*.07,Math.sin(l)*.07,(a-.5)*.354])}const o=Dn(i,.0035,80,5);l0(o,e/7),n.push(o)}this.mesh("seven_continuous_prismatic_conductors",hn(n,!1),this.energy,this.coil),n.forEach(e=>e.dispose()),this.mesh("single_sapphire_reactor_envelope",this.geom("clear-barrel",()=>{const e=new jn(.078,.078,.34,48,1,!0);return e.rotateX(Math.PI/2),e}),this.glass,this.weapon,[0,0,-.553]);const t=[];for(let e=0;e<4;e++){const i=-.402-e*.111;this.ring("coil_band_"+e+"_gold_rear_lip",.078,.097,.012,[0,0,i+.018],this.gold),this.ring("coil_band_"+e+"_titanium_front_lip",.078,.092,.01,[0,0,i-.013],this.titanium);for(let o=0;o<3;o++){const r=o*wn/3+.12,a=ea(.081,.103,.033,r,wn/3-.21);a.translate(0,0,i),t.push(a),this.group(`coil_band_${e}_ceramic_arch_${o}`,this.weapon,[0,0,i])}}this.mesh("twelve_independent_ceramic_coil_arches_batched",hn(t,!1),this.pearl).userData.parts=Array.from({length:12},(e,i)=>"coil_ceramic_arch_"+i),t.forEach(e=>e.dispose());for(let e=0;e<4;e++){const i=Math.PI/4+e*Math.PI/2,o=.093,r=[Math.cos(i)*o,Math.sin(i)*o,-.568];this.box("barrel_longitudinal_dark_spar_"+e,[.013,.015,.389],r,this.gunmetal,this.weapon,.003).rotation.z=i,this.box("barrel_gold_spar_edge_"+e,[.004,.004,.331],[r[0]*1.07,r[1]*1.07,r[2]],this.gold,this.weapon,.001).rotation.z=i}this.bolt=this.group("independent_recoil_coil_shuttle",this.weapon,[0,0,-.764]),this.ring("shuttle_polished_slide",.06,.091,.082,[0,0,0],this.titanium,this.bolt);for(let e=0;e<6;e++){const i=e*wn/6;this.box("shuttle_recessed_slide_channel_"+e,[.012,.004,.065],[Math.cos(i)*.092,Math.sin(i)*.092,0],this.seam,this.bolt,.002).rotation.z=i-Math.PI/2}for(const e of[-1,1]){const i=this.group("disabler_vent_hinge_"+e,this.weapon,[e*.092,.022,-.271]);this.mesh("disabler_vent_pearl_flap_"+e,Yn([[-.08,.021],[.051,.021],[.07,.002],[.051,-.021],[-.076,-.021]],.006,.003),this.pearl,i),this.vents.push(i)}}makeIris(){const n=this.group("eight_petal_muzzle_iris",this.bolt,[0,0,-.085]);this.ring("muzzle_outer_graphite_support",.068,.118,.057,[0,0,0],this.gunmetal,n),this.ring("muzzle_back_beveled_ceramic_band",.087,.123,.024,[0,0,.019],this.pearl,n),this.ring("muzzle_front_champagne_lip",.084,.121,.013,[0,0,-.029],this.gold,n),this.ring("muzzle_inner_black_recessed_bore",.035,.084,.045,[0,0,-.017],this.seam,n),this.ring("muzzle_inner_titanium_ring",.042,.047,.019,[0,0,-.044],this.titanium,n);const t=v0([[0,-.006],[.038,-.022],[.087,-.01],[.057,.018],[.016,.024]],.002),e=new Ft(t,{depth:.008,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:3});e.translate(-.073,0,0);const i=new Ft(v0([[.005,-.004],[.039,-.015],[.077,-.008],[.052,.012],[.018,.017]],.001),{depth:.002,bevelEnabled:!0,bevelSize:.001,bevelThickness:.001,bevelSegments:1,curveSegments:3});i.translate(-.073,0,-.002),l0(i);for(let o=0;o<8;o++){const r=o*wn/8,a=this.group("iris_petal_hinge_"+o,n,[Math.cos(r)*.075,Math.sin(r)*.075,-.043]);a.rotation.z=r+.27,this.mesh("iris_petal_"+o+"_titanium_blade",this.own(e),this.titanium,a);const l=this.mat(new Le({name:"Iris crystal "+o,color:wi[o%7],metalness:.4,roughness:.16,emissive:wi[o%7],emissiveIntensity:.22,clearcoat:1,iridescence:.7}));this.mesh("iris_petal_"+o+"_optical_inlay",this.own(i),l,a),this.iris.push(a),this.mesh("iris_petal_hinge_cap_"+o,this.geom("iris-pin",()=>{const h=new jn(.005,.005,.005,10);return h.rotateX(Math.PI/2),h}),this.gold,n,[Math.cos(r)*.099,Math.sin(r)*.099,-.039])}this.mesh("dark_optical_bore_at_real_depth",this.geom("bore",()=>new vt(.044,48)),this.seam,n,[0,0,-.047]).rotation.y=Math.PI}makeSights(){this.box("raised_graphite_optics_rail",[.109,.03,.494],[0,.113,-.088],this.gunmetal,this.weapon,.004);const n=[];for(let o=0;o<17;o++){const r=new q0(.129,.018,.016,1,.002);r.translate(0,.136,.14-o*.026),n.push(r)}const t=this.mesh("seventeen_individually_cut_picatinny_teeth",hn(n,!1),this.gunmetal);t.userData.parts=Array.from({length:17},(o,r)=>"rail_tooth_"+r),n.forEach(o=>o.dispose()),this.box("rail_gold_front_terminal",[.128,.032,.031],[0,.133,-.311],this.gold,this.weapon,.005);const e=this.group("rear_open_reflex_sight",this.weapon,[0,.147,.079]);this.box("sight_polished_base",[.115,.016,.075],[0,.003,0],this.gold,e,.004),this.ring("sight_pearl_faceted_hood",.037,.048,.018,[0,.048,0],this.pearl,e).scale.set(1,.89,1),this.ring("sight_thin_gold_hood_reveal",.035,.038,.021,[0,.048,-.004],this.gold,e).scale.set(1,.89,1),this.box("sight_center_fine_post",[.003,.024,.006],[0,.022,-.005],this.titanium,e,.001);const i=this.mat(new P({name:"Sight luminous pip",color:11993070,emissive:6412984,emissiveIntensity:.65,roughness:.3}));this.box("sight_inlaid_fiber_tip",[.004,.004,.007],[0,.035,-.005],i,e,.001);for(let o=0;o<3;o++){const r=this.mat(new P({name:"Actual sustained tier indicator "+o,color:2700866,emissive:8051918,emissiveIntensity:0,metalness:.5,roughness:.3})),a=this.box("sustained_fire_tier_indicator_"+o,[.01,.006,.014],[-.036+o*.015,.15,-.185],r);this.indicators.push(a)}}makeGrip(){const n=this.group("pistol_grip_structural_mount",this.weapon,[0,-.095,.101]);n.rotation.x=-.12,n.scale.set(1,.7,.65);const t=[[.058,.004],[-.05,.006],[-.051,-.08],[-.087,-.235],[-.018,-.253],[.047,-.23],[.043,-.08]];this.mesh("pistol_grip_gold_chamfer_frame",Yn(t,.052,.006),this.gold,n),this.mesh("pistol_grip_dark_tactile_core",Yn(t.map(([r,a])=>[r*.92,a*.968]),.054,.008),this.rubber,n,[0,0,0]);for(const r of[-1,1])this.mesh("pistol_grip_ceramic_backstrap_"+r,Yn([[.049,-.032],[.049,-.196],[.017,-.239],[-.003,-.234],[.021,-.18],[.023,-.034]],.009,.004),this.pearl,n,[r*.031,0,0]);this.box("pistol_grip_gold_heel",[.078,.027,.131],[0,-.245,-.012],this.gold,n,.009);const e=[[0,-.078,.075],[0,-.127,.074],[0,-.184,.063],[0,-.191,-.062],[0,-.174,-.092],[0,-.075,-.092]];this.mesh("continuous_titanium_trigger_guard",Dn(e,.009,44,8),this.titanium),this.mesh("gold_trigger_guard_inner_lip",Dn(e.map(([r,a,l])=>[r-.01,a+.003,l]),.0025,44,5),this.gold),this.trigger=this.group("trigger_pivot",this.weapon,[0,-.084,.033]),this.mesh("trigger_curved_finger_contact",Dn([[0,0,0],[0,-.036,-.006],[0,-.061,.006],[0,-.067,.018]],.006,28,8),this.gold,this.trigger);const i=this.group("gun_grip_main",this.weapon,[.051,-.194,.164]);i.userData.contact="right palm and individually curled digits";const o=this.group("gun_grip_support",this.weapon,[-.11,-.123,-.496]);o.userData.contact="left palm against the forward insulated handguard; four fingers around its front edge"}makeStock(){this.box("stock_dark_upper_spine",[.096,.074,.281],[0,.027,.36],this.gunmetal,this.weapon,.01);for(const n of[-1,1]){this.mesh("stock_"+n+"_sculpted_pearl_cheek",Yn([[.49,.062],[.281,.067],[.245,.035],[.286,.001],[.478,-.016],[.508,.014]],.017,.007),this.pearl,this.weapon,[n*.057,0,0]),this.mesh("stock_"+n+"_gold_lower_reveal",Yn([[.48,-.018],[.281,-.008],[.266,-.02],[.477,-.032]],.012,.002),this.gold,this.weapon,[n*.056,0,0]);const t=this.box("stock_skeletal_diagonal_strut_"+n,[.018,.022,.205],[n*.045,-.071,.401],this.titanium,this.weapon,.004);t.rotation.x=-.59}this.box("stock_shoulder_butt_carrier",[.109,.204,.043],[0,-.023,.51],this.gold,this.weapon,.012),this.box("stock_shoulder_rubber_pad",[.116,.196,.034],[0,-.024,.542],this.rubber,this.weapon,.015),this.box("stock_shoulder_pearl_inset",[.121,.146,.01],[0,-.018,.527],this.pearl,this.weapon,.008)}batchStaticSpars(){for(const n of["barrel_longitudinal_dark_spar_","barrel_gold_spar_edge_"]){const t=this.weapon.children.filter(o=>o instanceof E&&o.name.startsWith(n)),e=t.map(o=>(o.updateMatrix(),o.geometry.clone().applyMatrix4(o.matrix)));if(!e.length)continue;const i=this.mesh(n+"four_member_batch",hn(e,!1),t[0].material);i.userData.parts=t.map(o=>o.name),t.forEach(o=>{const r=new cn;r.name=o.name,r.position.copy(o.position),r.quaternion.copy(o.quaternion),r.userData.geometryIn=i.name,this.weapon.add(r),o.removeFromParent()}),e.forEach(o=>o.dispose())}}makeFasteners(){const n=r0(.0018,.0054,.003,6e-4,12),t=new U(this.own(n),this.titanium,this.screws.length),e=new cn;t.name="receiver_recessed_hex_fastener_family",this.screws.forEach((i,o)=>{e.position.set(...i.p),e.quaternion.copy(i.q),e.scale.setScalar(i.s),e.updateMatrix(),t.setMatrixAt(o,e.matrix)}),t.instanceMatrix.needsUpdate=!0,this.weapon.add(t),this.artParts.push(t.name),t.userData.instanceNames=this.screws.map((i,o)=>"counterbored_hex_fastener_"+o)}makeLabel(n,t,e,i,o){if(typeof document>"u")return;const r=document.createElement("canvas");r.width=768,r.height=128;const a=r.getContext("2d");if(!a)return;a.clearRect(0,0,r.width,r.height),a.fillStyle="#d9c58d",a.font='500 55px "Arial", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(n,384,64);const l=new kt(r);l.colorSpace=xn,this.textures.add(l);const h=this.mat(new B({name:"Engraved maker typography "+n,map:l,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,toneMapped:!0})),c=this.mesh("laser_engraved_"+n.replaceAll(" ","_"),new an(e,i),h,this.weapon,t);c.rotation.y=o}makeHand(n){const t=n==="right",e=this.group(n+"_armature",this.actionRoot),i=this.group(n+"_metacarpal_palm",e),o=this.group(n+"_wrist_overlap_joint",e,[0,0,.064]);e.position.set(...t?[.051,-.194,.164]:[-.11,-.123,-.496]),t?e.rotation.z=-Math.PI/2:(e.rotation.z=Math.PI/2,e.rotateX(.4));const r=et([{z:-.061,w:.048,h:.021},{z:-.041,w:.055,h:.025},{z:.016,w:.05,h:.026},{z:.048,w:.04,h:.022},{z:.071,w:.032,h:.02}],22);t||r.scale(1.1,1.07,1),this.mesh(n+"_sculpted_anatomical_glove_palm",r,this.glove,i);const a=oa(.92);a.scale(1,.16,1),this.mesh(n+"_soft_dorsal_glove_panel",a,this.glove,i,[0,.025,.001]);const l=[];for(const I of[-1,1])l.push(Dn([[I*.028,.0245,-.03],[I*.032,.0257,-.012],[I*.025,.0255,.012],[I*.019,.0237,.03]],65e-5,20,4));this.mesh(n+"_subtle_glove_stitching",hn(l,!1),this.seam,i),l.forEach(I=>I.dispose()),this.mesh(n+"_thumb_saddle_glove",this.geom("thumb-saddle",()=>new fn(.024,18,12)),this.glove,i,[t?-.048:.048,-.003,.014]).scale.set(.74,1.05,1.22);const h=[];for(const I of[-.032,-.01,.012,.032])for(let R=0;R<2;R++)h.push(Dn([[I-.007,.02,-.046-R*.004],[I,.024,-.049-R*.004],[I+.007,.02,-.046-R*.004]],.0012,8,5));this.mesh(n+"_soft_knuckle_crease_folds",hn(h,!1),this.glove,i),h.forEach(I=>I.dispose());const c=[],p=["index","middle","ring","little"],u=t?[-.037,-.012,.014,.037]:[.037,.012,-.014,-.03],m=t?[[.043,.03,.023],[.06,.05,.031],[.057,.048,.03],[.05,.045,.026]]:[[.055,.03,.023],[.06,.042,.026],[.063,.039,.025],[.062,.034,.023]];for(let I=0;I<4;I++){const R=this.bone(n+"_"+p[I]+"_MCP",i,[u[I],t&&I>1?-.004:0,-.049-(I===1?.006:0)]),j=[R],G=[];for(let N=1;N<3;N++)j.push(this.bone(n+"_"+p[I]+"_"+(N===1?"PIP":"DIP"),j[N-1],[0,0,-m[I][N-1]]));this.skinDigit(n+"_"+p[I],i,j,m[I],I===3?.009:.011),j.forEach((N,Q)=>{const Y=t?I===0?Q===0?-.22:Q===1?-.62:-.67:Q===0?-.6:Q===1?-1.35:-1.25:Q===0?-.65:Q===1?-1.3:-1.1;N.rotation.x=Y,G.push(Y)}),R.rotation.y=(I-1.4)*.035,c.push({name:p[I],root:R,joints:j,rest:G})}const d=[this.bone(n+"_thumb_CMC_opposition",i,[t?-.047:.047,-.007,.026])];if(d.push(this.bone(n+"_thumb_MCP",d[0],[0,0,-.032])),d.push(this.bone(n+"_thumb_IP",d[1],[0,0,-.029])),this.skinDigit(n+"_thumb",i,d,[.032,.029,.023],.014),d[0].rotation.set(.24,-.85,-.65),d[1].rotation.x=-.6,d[2].rotation.x=-.6,!t){const I=[new z(.012,.011,-.027),new z(.004,-.009,-.027),new z(.01,-.01,-.018)];let R=e.quaternion.clone();d.forEach((j,G)=>{const N=I[G].normalize().negate(),Q=new z().crossVectors(G===0?new z(0,1,.2):new z(-1,.1,.1),N).normalize(),Y=new z().crossVectors(N,Q).normalize(),L=new yn().setFromRotationMatrix(new tn().makeBasis(Q,Y,N));j.quaternion.copy(R.clone().invert().multiply(L)),R=L})}const f=(t?new z(.22,-.31,.54):new z(-.46,-.33,-.035)).clone().sub(e.position).applyQuaternion(e.quaternion.clone().invert()),v=f.clone().sub(o.position).normalize();o.quaternion.slerp(new yn().setFromUnitVectors(bi,v),.6),this.mesh(n+"_soft_glove_wrist",et([{z:-.013,w:.032,h:.022},{z:.008,w:.033,h:.024},{z:.029,w:.034,h:.025},{z:.037,w:.034,h:.025}],20),this.glove,o),this.mesh(n+"_stitched_glove_cuff",ia([{z:.024,w:.035,h:.026},{z:.027,w:.036,h:.027},{z:.036,w:.036,h:.027},{z:.04,w:.034,h:.025}],0,wn,.003),this.glove,o);const w=this.box(n+"_fabric_wrist_closure",[.048,.006,.018],[0,.029,.016],this.glove,o,.004);w.rotation.z=-.08,this.mesh(n+"_wrist_cuff_seam",Dn([[-.029,.02,.032],[-.018,.026,.033],[0,.028,.034],[.019,.026,.033],[.031,.019,.032]],7e-4,20,4),this.seam,o);const k=this.group(n+"_forearm_twist",o,[0,0,.059]),M=f.clone().sub(o.position).applyQuaternion(o.quaternion.clone().invert()).sub(k.position),y=Math.min(M.length(),.345),b=M.normalize(),S=new z(0,1,.42).applyQuaternion(e.quaternion.clone().invert()).applyQuaternion(o.quaternion.clone().invert()).normalize(),_=new z().crossVectors(S,b).normalize(),A=new z().crossVectors(b,_).normalize();return k.quaternion.setFromRotationMatrix(new tn().makeBasis(_,A,b)),this.makeForearm(n,k,y),e.userData.contact=t?"Right index inside guard; middle/ring/little wrap pistol grip.":"Left palm fits the near handguard wall; fingers curl around the front edge and the thumb opposes above it.",{root:e,palm:i,wrist:o,wristQuaternion:o.quaternion.clone(),fingers:c,thumb:d,forearm:k,position:e.position.clone(),quaternion:e.quaternion.clone()}}makeForearm(n,t,e){const i=[];for(const[w,k,M,y]of[[.029,.031,.022,0],[.045,.033,.025,.15],[.059,.036,.029,.55]])i.push({p:new z(0,0,w),q:new yn().slerp(t.quaternion,y),w:k,h:M});for(let w=1;w<=15;w++){const k=w/15*e,M=k/e;i.push({p:new z(0,0,k).applyQuaternion(t.quaternion).add(t.position),q:t.quaternion.clone(),w:.034+.027*Math.pow(M,.55),h:.027+.019*Math.pow(M,.62)})}const o=et(i.map((w,k)=>({z:k,w:w.w,h:w.h})),32),r=o.getAttribute("position");for(let w=0;w<i.length;w++)for(let k=0;k<=32;k++){const M=w*33+k,y=i[w],b=new z(r.getX(M),r.getY(M),0).applyQuaternion(y.q).add(y.p);r.setXYZ(M,b.x,b.y,b.z)}for(let w=0;w<2;w++){const k=w===0?0:i.length-1,M=i.length*33+w;r.setXYZ(M,...i[k].p.toArray())}o.computeVertexNormals(),this.mesh(n+"_continuous_human_wrist_forearm",o,this.skin,t.parent);const a=Math.min(.15,e*.4),l=a+.048,h=.034+.027*Math.pow(a/e,.55),c=.027+.019*Math.pow(a/e,.62),p=et([{z:a-.005,w:h+.001,h:c+.001},{z:a,w:h+.007,h:c+.007},{z:a+.01,w:h+.012,h:c+.011},{z:a+.023,w:h+.01,h:c+.009},{z:a+.034,w:h+.013,h:c+.012},{z:l,w:h+.007,h:c+.007}],28);this.mesh(n+"_rolled_fabric_sleeve_cuff",p,this.cuff,t);const u=[];for(let w=0;w<=18;w++){const k=w/18,M=l+(e+.025-l)*k;u.push({z:M,w:h+.007+k*.011,h:c+.007+k*.011,cx:Math.sin(k*3)*.002,cy:Math.sin(k*5)*.002})}const m=et(u,24),d=m.getAttribute("position");for(let w=0;w<u.length;w++)for(let k=0;k<=24;k++){const M=w*25+k,y=k/24*wn,b=1+Math.sin(w*1.63+y*3)*.035+Math.sin(w*2.67-y*2)*.022;d.setX(M,d.getX(M)*b),d.setY(M,d.getY(M)*b)}m.computeVertexNormals(),this.mesh(n+"_soft_woven_sleeve",m,this.cloth,t);const g=u.map(w=>[-w.w*.7,w.h*.73+.001,w.z]);this.mesh(n+"_sleeve_tailoring_seam",Dn(g,9e-4,36,4),this.cuff,t);const f=[];for(let w=0;w<22;w++){const k=.05*Math.PI+w*.9*Math.PI/22,M=k+.018,y=Dn([[Math.cos(k)*(h+.012),Math.sin(k)*(c+.011),a+.011],[Math.cos(M)*(h+.012),Math.sin(M)*(c+.011),a+.011]],65e-5,2,4);f.push(y)}this.mesh(n+"_cuff_embroidered_thread",hn(f,!1),this.thread,t),f.forEach(w=>w.dispose());const v=this.group(n+"_elbow_connected_joint",t,[0,0,e]);v.rotation.set(.22,n==="left"?-.18:.12,0),this.mesh(n+"_bunched_fabric_elbow",et([{z:-.025,w:.064,h:.051},{z:0,w:.071,h:.059},{z:.019,w:.067,h:.054},{z:.042,w:.07,h:.057},{z:.065,w:.067,h:.054}],24),this.cuff,v),this.mesh(n+"_upper_sleeve_continuation",et([{z:.042,w:.067,h:.054},{z:.12,w:.073,h:.058},{z:.25,w:.076,h:.063},{z:.4,w:.079,h:.065}],24),this.cloth,v)}makeClearHalo(){const n=this.group("instant_clear_left_hand_resonance",this.actionRoot,[-.27,-.09,-.33]),t=this.mat(new B({name:"Clear resonance hand gesture",color:15132671,transparent:!0,opacity:.55,depthWrite:!1,blending:qn,toneMapped:!1}));for(let e=0;e<3;e++)this.mesh("clear_gesture_resonance_ring_"+e,r0(.075+e*.016,.0765+e*.016,.002,2e-4,48),t,n).rotation.set(.22*e,.2*e,0);return n}resetPresentation(){if(!this.disposed){this.recoil=0,this.recoilVelocity=0,this.shotAge=10,this.shotIndex=0,this.triggerAmount=0,this.swayX=0,this.swayY=0,this.locomotion=0,this.motionPhase=0,this.lastClear=0,this.clearAge=10,this.disabledAmount=0;for(const n of this.presentationRest){const t=n.object;t.position.copy(n.position),t.quaternion.copy(n.quaternion),t.scale.copy(n.scale),t.visible=n.visible}for(const n of[this.coreMaterial,this.lensMaterial])n.uniforms.uTime.value=0,n.uniforms.uPulse.value=0,n.uniforms.uDim.value=0;this.energy.emissiveIntensity=.52;for(const n of this.indicators){const t=n.material;t.color.setHex(2700866),t.emissiveIntensity=0}this.flashMaterial.opacity=0,this.muzzleLight.intensity=0,this.clearHalo.children.forEach(n=>{n instanceof E&&(n.material.opacity=.55)}),this.root.updateMatrixWorld(!0)}}update(n,t){if(this.disposed)return;n=Hn(n,0,.05),this.shotAge+=n,this.clearAge+=n,t.shot&&(this.shotAge=0,this.shotIndex++,this.recoilVelocity+=2.85,this.recoil=Math.min(this.recoil+.1,.9));const e=Math.max(1,Math.ceil(n/.008)),i=n/e;for(let g=0;g<e;g++)this.recoilVelocity+=(-390*this.recoil-30*this.recoilVelocity)*i,this.recoil+=this.recoilVelocity*i;this.recoil=Hn(this.recoil,-.1,1);const o=Math.exp(-this.shotAge*37),r=Math.sin(Hn(this.shotAge/.105,0,1)*Math.PI),a=t.fire&&t.disabled<=0?1:0;this.triggerAmount=J.damp(this.triggerAmount,a,28,n),this.trigger.rotation.x=-this.triggerAmount*.17,this.swayX=J.damp(this.swayX,Hn(-t.yawDelta*2,-.03,.03),10,n),this.swayY=J.damp(this.swayY,Hn(t.pitchDelta*2,-.024,.024),10,n),this.locomotion=J.damp(this.locomotion,Hn(t.speed,0,1),8,n),this.motionPhase+=n*(4+this.locomotion*5.5);const l=Math.sin(t.time*1.8),h=Math.sin(this.motionPhase),c=this.recoil;this.movementRoot.position.set(this.swayX*.38+h*.004*this.locomotion,l*.0014+Math.cos(this.motionPhase*2)*.003*this.locomotion,this.locomotion*.009),this.movementRoot.rotation.set(this.swayY*.65,this.swayX*.8,h*.008*this.locomotion),this.actionRoot.position.set(Math.sin(this.shotIndex*2.4)*o*7e-4,0,c*.12),this.actionRoot.rotation.set(c*.15,Math.sin(this.shotIndex*2.4)*o*.0012,-c*.009),this.bolt.position.z=-.764+r*.02,this.coil.rotation.z=t.time*.11+this.shotIndex*.004+r*.037,this.iris.forEach((g,f)=>{g.rotation.z=f*wn/8+.27+r*.18,g.rotation.y=r*.095}),this.disabledAmount=J.damp(this.disabledAmount,t.disabled>0?1:0,12,n),this.vents.forEach((g,f)=>{g.rotation.z=(f===0?-1:1)*this.disabledAmount*.33});for(const g of[this.coreMaterial,this.lensMaterial])g.uniforms.uTime.value=t.time,g.uniforms.uPulse.value=o*.8,g.uniforms.uDim.value=this.disabledAmount;this.energy.emissiveIntensity=.36+o*.48+(t.tier>=1?.14:0),this.indicators.forEach((g,f)=>{const v=g.material,w=f===0?t.fire:f===1?t.charge>=4&&t.tier>=1:t.charge>=10&&t.tier>=2;v.color.setHex(w?9100751:2503740),v.emissiveIntensity=w?.85:0}),this.flash.visible=this.shotAge<.032,this.flashMaterial.opacity=Hn(1-this.shotAge/.034,0,1)*.74,this.flash.rotation.z=this.shotIndex*.73,this.flash.scale.setScalar(.7+o*.3),this.muzzleLight.intensity=this.flash.visible?o*.6:0;const p=this.hands[0],u=this.hands[1];p.fingers[0].joints[1].rotation.x=p.fingers[0].rest[1]-this.triggerAmount*.12,p.fingers[0].joints[2].rotation.x=p.fingers[0].rest[2]-this.triggerAmount*.075,p.wrist.quaternion.copy(p.wristQuaternion),p.wrist.rotateY(-c*.018),u.wrist.quaternion.copy(u.wristQuaternion),u.wrist.rotateY(c*.021),t.clear>0&&this.lastClear<=0&&(this.clearAge=0),this.lastClear=t.clear;const m=this.clearAge,d=m<.46?Math.sin(Math.PI*Hn(m/.46,0,1)):0;u.root.position.copy(u.position),u.root.quaternion.copy(u.quaternion),d>0?(u.root.position.x-=d*.29,u.root.position.y+=d*.075-Math.sin(Math.PI*d)*.095,u.root.position.z+=d*.045,u.root.rotateZ(-d*.46),u.fingers.forEach(g=>g.joints.forEach((f,v)=>f.rotation.x=g.rest[v]*(1-a0((d-.25)/.75)*.72)))):u.fingers.forEach(g=>g.joints.forEach((f,v)=>f.rotation.x=g.rest[v])),this.clearHalo.visible=m>=0&&m<.38,this.clearHalo.scale.setScalar(.75+m*1.8),this.clearHalo.rotation.z=t.time*.7,this.clearHalo.children.forEach(g=>{g instanceof E&&(g.material.opacity=.46*(1-Hn(m/.38,0,1)))})}stats(){let n=0,t=0,e=0;const i=new Set;return this.root.traverse(o=>{if(o instanceof E){n++;const r=o.geometry,a=o instanceof U?o.count:1;t+=(r.index?r.index.count:r.getAttribute("position").count)/3*a,i.add(r)}}),i.forEach(o=>e+=o.getAttribute("position").count),{design:"AURORA / 07 original parameterized hero asset",meshes:n,drawCallsUpperBound:n,triangles:Math.round(t),uniqueVertices:e,uniqueGeometries:i.size,materials:this.materials.size,artPieces:this.artParts.length,joints:this.joints.size,articulatedFingers:10,skinnedDigits:this.skeletons.size,skinBones:30,irisPetals:8,handCount:2,recoil:this.recoil,shotAge:this.shotAge,clearAge:this.clearAge,disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.root.removeFromParent(),this.geometries.forEach(n=>n.dispose()),this.materials.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.skeletons.forEach(n=>n.dispose()),this.skeletons.clear(),this.geometries.clear(),this.materials.clear(),this.textures.clear())}}class aa{scene=new Xt;camera=new ae(s0.fov,1,s0.near,s0.far);asset=new sa;g1=new ta(this.asset);g2=new na(this.asset);sky=new Kn(16774626,5465216,1.05);key=new Gn(16777215,2);reduced=!1;attempt=-1;lastShots=0;lastX=0;lastZ=0;lastYaw=0;lastPitch=0;handRest;constructor(){this.scene.name="retained-human-first-person-view",this.scene.add(this.g2.root),this.scene.add(this.sky),this.key.position.set(-1,3,3),this.scene.add(this.key),this.handRest=["left_armature","right_armature"].map(n=>{const t=this.asset.joints.get(n);return{object:t,position:t.position.clone(),quaternion:t.quaternion.clone()}})}resize(n,t){this.g2.resize(n,t),this.camera.aspect=n/t,this.camera.updateProjectionMatrix()}update(n,t,e,i,o){this.g2.beforeSourceUpdate(),this.g1.beforeSourceUpdate(),this.attempt!==n.attemptId&&(this.attempt=n.attemptId,this.asset.resetPresentation(),this.lastShots=n.shots,this.lastX=n.player.x,this.lastZ=n.player.z,this.lastYaw=n.player.yaw,this.lastPitch=n.player.pitch);for(const c of this.handRest)c.object.position.copy(c.position),c.object.quaternion.copy(c.quaternion),c.object.visible=!0;const r=n.neural,a=t>0?Math.hypot(n.player.x-this.lastX,n.player.z-this.lastZ)/t:0,l=r?.fireMode==="omni"?2:r?.fireMode==="dual"?1:0;this.asset.update(t,{time:n.time,fire:!!r&&r.fireCharge>0,shot:n.shots>this.lastShots,charge:r?.fireCharge??0,tier:l,disabled:r?.fireDisabled??0,speed:a/(r?.stats.moveSpeed??3.45),yawDelta:n.player.yaw-this.lastYaw,pitchDelta:n.player.pitch-this.lastPitch,clear:0});const h=n.slam>=0||n.grenade.throwPhase!=="idle";if(this.asset.root.visible=!i&&!["ready","dead","complete"].includes(n.phase),this.asset.weapon.visible=!h,h){const c=Math.tan(J.degToRad(this.camera.fov/2))/Math.tan(J.degToRad(e.fov/2));this.asset.root.updateMatrixWorld(!0);const p=this.asset.actionRoot.getWorldQuaternion(new yn).invert();this.handRest.forEach((u,m)=>{const d=o[m];if(!d)return;u.object.visible=d.visible;const g=d.position.clone();g.x*=c,g.y*=c,u.object.position.copy(this.asset.actionRoot.worldToLocal(g)),u.object.quaternion.copy(p).multiply(d.quaternion)})}this.g1.update(n,h,this.reduced,this.sky,this.key),this.asset.root.updateMatrixWorld(!0),this.g2.update(n,this.camera,e,h),this.lastShots=n.shots,this.lastX=n.player.x,this.lastZ=n.player.z,this.lastYaw=n.player.yaw,this.lastPitch=n.player.pitch}muzzle(n){if(!this.asset.root.visible||!this.asset.weapon.visible)return null;const t=this.g2.canonicalSocketPoint(),e=Math.tan(J.degToRad(n.fov/2))/Math.tan(J.degToRad(this.camera.fov/2));return t.x*=e,t.y*=e,n.localToWorld(t),{x:t.x,y:t.y,z:t.z}}canonicalMuzzleViewPoint(){return this.g2.canonicalSocketPoint()}setReduced(n){this.reduced=n}stats(){return{g2:this.g2.stats(),g1:this.g1.stats(),source:"ed44f565b124a1664c1de905d94a2419769e1938",human:!0,viewmodelFov:this.camera.fov,asset:this.asset.stats()}}dispose(){this.g2.dispose(),this.g1.dispose(),this.asset.dispose(),this.scene.clear()}}class yi{constructor(n,t,e,i){this.hall=n,this.details=t,this.roof=e,this.panels=i}hall;details;roof;panels;disposed=!1;loaded=!1;attached=[];triangles=0;draws=0;static createPanels(n,t,e){const i=[];for(const[o,r,a]of[[0,e/2+.38,0],[1,e/2+.38,Math.PI],[2,t/2+.38,Math.PI/2],[3,t/2+.38,-Math.PI/2]]){const l=new D;l.name=`heavy-reveal-panel-${o}`,l.rotation.y=a;const h=o===1||o===3?-1:1;o<2?l.position.z=-r*h:l.position.x=-r*h,n.add(l),i.push(l)}return i}async load(n){if(this.loaded||this.disposed)return;const t=await Bi(n,"/assets/visual-vt1/atrium-proof.glb");if(this.disposed)throw Ln(t.scene),Error("VT1 room disposed during load");const e=new Map;t.scene.traverse(a=>{if(a instanceof E)for(const l of Array.isArray(a.material)?a.material:[a.material])l instanceof P&&e.set(l.name,l)});const i=[],o=[],r=(a,l,h,c)=>{const p=e.get(a);if(!p)throw Error(`Palace material input missing: ${a}`);const u=p.clone();return u.name=`palace-${a}`,u.color.setHex(l),u.roughness=h,u.metalness=c,u.emissive.setHex(0),u.emissiveIntensity=0,i.push(u),u};try{for(const d of["atrium_static","atrium_detail","atrium_roof","panel_0","panel_1","panel_2","panel_3"])if(!t.scene.getObjectByName(d))throw Error(`VT1 room group missing: ${d}`);const a=r("VT1_pearl_enamel",13748144,.86,.025),l=r("VT1_graphite_structure",3420727,.8,.1),h=r("VT1_satin_machined_alloy",10322246,.45,.67),c=r("VT1_recess_dark_rubber",1580068,.95,.02),p=new Map,u=(d,g,f,v=0,w=0,k=0,M=new En)=>{const y=new tn().compose(new z(v,w,k),new yn().setFromEuler(M),new z(1,1,1));g.applyMatrix4(y),o.push(g);const b=p.get(d)??new Map,S=b.get(f)??[];S.push(g),b.set(f,S),p.set(d,b)},m=(d,g,f,v,w,k,M,y)=>u(d,new un(f,v,w),g,k,M,y);for(const[d,g]of this.panels.entries()){const f=d<2?13.65:14.3,v=f/2;m(g,a,f+.3,5.15,.34,0,2.575,-.08),m(g,l,f+.3,.62,.42,0,.31,-.055),m(g,h,f+.3,.032,.045,0,.63,.185),m(g,l,f+.3,.19,.48,0,4.965,-.015),m(g,h,f+.3,.037,.045,0,4.845,.245),m(g,a,f+.3,.09,.43,0,5.105,-.025);for(const w of[-f*.3,f*.3]){m(g,c,1.55,2.45,.025,w,1.225,.104);for(const k of[-1,1])m(g,l,.11,2.55,.1,w+k*.825,1.275,.165),m(g,h,.022,2.53,.025,w+k*.785,1.265,.23),m(g,l,.745,2.38,.02,w+k*.3875,1.225,.125);m(g,h,1.59,.028,.025,w,2.466,.23),m(g,a,1.9,.14,.12,w,2.66,.16),m(g,h,.012,2.31,.016,w,1.225,.147)}for(let w=0;w<6;w++){const k=-v+(w+.5)*f/6;m(g,l,f/6-.25,1.4,.025,k,3.77,.105),m(g,a,f/6-.35,1.29,.03,k,3.77,.13);for(const M of[-1,1])m(g,h,.023,1.34,.018,k+M*(f/12-.15),3.77,.16);m(g,h,f/6-.3,.026,.018,k,4.425,.16),m(g,h,f/6-.3,.026,.018,k,3.115,.16)}for(let w=0;w<=6;w++){const k=-v+w*f/6;m(g,a,.145,4.06,.15,k,2.69,.15),m(g,l,.22,.16,.18,k,.74,.15),m(g,a,.25,.12,.18,k,4.7,.15),m(g,h,.015,3.67,.017,k+.055,2.72,.235)}}for(let d=0;d<4;d++){const g=d<2?13.65:14.3,f=d<2?7.53:7.205,v=new En(0,[0,Math.PI,Math.PI/2,-Math.PI/2][d],0),w=new tn().makeRotationY(v.y).setPosition(d===2?-f:d===3?f:0,0,d===0?-f:d===1?f:0),k=(M,y,b,S,_,A,I)=>{const R=new un(y,b,S);R.translate(_,A,I),R.applyMatrix4(w),u(this.roof,R,M)};k(l,g+.3,.21,.63,0,5.505,-.13),k(h,g+.3,.038,.04,0,5.632,.2),k(c,g+.3,3.89,.14,0,7.61,-1.08),k(a,g+.3,.22,.88,0,8.42,-.48),k(h,g+.3,.035,.07,0,8.285,-.075);for(let M=0;M<7;M++){const y=-g/2+(M+.5)*g/7;k(l,g/7-.18,1.91,.16,y,6.94,-.71),k(c,g/7-.34,1.73,.08,y,6.94,-.59),k(h,.02,1.7,.018,y-g/14+.2,6.94,-.54);for(let b=0;b<4;b++)k(l,.042,.53,.075,y+(b-1.5)*.33,6.1,-.2);k(h,g/7-.08,.045,.1,y,6.38,-.18)}for(let M=0;M<=7;M++){const y=-g/2+M*g/7;k(a,.18,4.63,.4,y,8.065,-.11),k(h,.028,4.19,.018,y-.054,8.06,.101),k(l,.34,.16,.57,y,5.78,-.1),k(a,.33,.15,.52,y,10.38,-.1)}}for(const d of[-6.2,-4.14,-2.07,0,2.07,4.14,6.2]){for(const g of[-1,1]){const f=new z(g*7.13,8.67,d),v=new z(g*3.92,10.36,d),w=v.clone().sub(f),k=new un(.17,w.length(),.22),M=new yn().setFromUnitVectors(new z(0,1,0),w.normalize());k.applyQuaternion(M),u(this.roof,k,a,...f.clone().add(v).multiplyScalar(.5).toArray()),m(this.roof,l,3.05,.075,1.88,g*5.45,10.565,d)}m(this.roof,a,7.86,.17,.22,0,10.36,d),m(this.roof,h,7.7,.027,.032,0,10.245,d)}u(this.roof,new vn(1.02,.044,6,64),h,0,8.79,-7.08),u(this.roof,new vn(1.14,.016,5,64),l,0,8.79,-7.08),u(this.roof,new vn(.52,.032,6,32,Math.PI),h,0,8.68,-7.06,new En(0,0,Math.PI));for(const d of[-.31,.31])m(this.roof,h,.047,.17,.055,d,9.12,-7.06);m(this.roof,h,.025,.43,.028,0,10.06,-7.08);for(const[d,g]of p){const f=new D;f.name=`palace-${d.name}`;for(const[v,w]of g){const k=hn(w,!1);if(!k)throw Error("Palace static merge failed");const M=new E(k,v);M.name=v.name,f.add(M),this.triangles+=(k.index?.count??k.getAttribute("position").count)/3,this.draws++}d.add(f),this.attached.push(f)}if(this.triangles>22e3||this.draws>70)throw Error("Palace room representation reserve exceeded");this.loaded=!0}catch(a){for(const l of this.attached)Ln(l),l.removeFromParent();throw this.attached=[],i.forEach(l=>l.dispose()),a}finally{o.forEach(a=>a.dispose()),Ln(t.scene)}}stats(){return{loaded:this.loaded,disposed:this.disposed,kind:"palace-of-applause-v0.1",layoutChanged:!1,triangles:this.triangles,draws:this.draws}}detach(){this.disposed||(this.disposed=!0,this.attached.forEach(n=>n.removeFromParent()),this.attached=[])}}const ra=s=>Math.max(0,Math.min(1,s)),la=s=>{const n=ra(s);return n*n*(3-2*n)},ha="/assets/pbr/",In={doorHeight:2.45,doorWidth:1.55,roofHeight:10.7,floorTile:3.2,groundSpan:512,groundStep:128,openingLift:6.2};class ca{root=new D;scene;hall=new D;details=new D;roof=new D;panels=[];floor;redInlay;light=new D;sky=new $(13094352);fog=new Xn(13094352,34,82);geometries=new Set;materials=new Set;textures=new Set;concrete=new P({color:12171181,roughness:.9,metalness:.02,envMapIntensity:.3,vertexColors:!0});stone=new P({color:11776681,roughness:.78,metalness:.025,envMapIntensity:.36,vertexColors:!0});steel=new P({color:9476503,roughness:.39,metalness:.78,envMapIntensity:.6});darkSteel=new P({color:3752004,roughness:.58,metalness:.62,envMapIntensity:.42});mirror=new P({color:12569033,roughness:.12,metalness:.97,envMapIntensity:.75});recess=new P({color:2436396,roughness:.96,metalness:.04});grout=new P({color:6843495,roughness:.92,metalness:0});glass=new P({color:14213855,roughness:.26,metalness:.25,transparent:!0,opacity:.27,depthWrite:!1});warmLamp=new P({color:16246732,emissive:16178093,emissiveIntensity:.36,roughness:.5});crimson=new P({color:7681602,roughness:.68,metalness:.18,emissive:6496303,emissiveIntensity:.13,transparent:!0,opacity:0,depthWrite:!1});reduced=!1;active=!1;opened=0;loaded=!1;disposed=!1;failures=[];vt1=null;triangles=0;meshes=0;constructor(n,t=!1){this.scene=n,this.root.name="two-worlds-industrial-atrium",this.root.visible=!1,n.add(this.root),this.hall.name="physical-exhibition-hall",this.details.name="cosmetic-atrium-detail",this.roof.name="daylit-steel-roof",this.light.name="neutral-atrium-daylight",this.root.add(this.hall,this.details,this.roof,this.light),this.floor=this.box(In.groundSpan,.22,In.groundSpan,0,-.115,0,this.stone,this.root,"continuous-concrete-boss-ground"),t?(this.panels.push(...yi.createPanels(this.root,C.width,C.depth)),this.vt1=new yi(this.hall,this.details,this.roof,this.panels),this.stone.color.setHex(5854799),this.stone.roughness=.86,this.stone.metalness=.025,this.sky.setHex(1580068),this.fog.color.copy(this.sky)):(this.makeFloor(),this.makeEnclosure(),this.makeCourt()),this.makeLights();const e=new On(4.5,4.72,112).rotateX(-Math.PI/2);this.redInlay=new E(e,this.crimson),this.redInlay.position.y=.016,this.redInlay.name="localized-crimson-ground-inlay",this.root.add(this.redInlay),this.mergeStatic(this.hall),this.mergeStatic(this.details),this.mergeStatic(this.roof);for(const i of this.panels)this.mergeStatic(i);this.remember()}box(n,t,e,i,o,r,a,l,h=""){const c=new un(n,t,e),p=c.getAttribute("uv");for(let m=0;m<6;m++)for(let d=m*4;d<m*4+4;d++){const g=m<2?e:(m<4,n),f=m<2?t:m<4?e:t;p.setXY(d,p.getX(d)*g/In.floorTile,p.getY(d)*f/In.floorTile)}(a===this.concrete||a===this.stone)&&(Os(c,i,o,r),Es(c,i,o,r));const u=new E(c,a);return u.position.set(i,o,r),u.name=h,l.add(u),u}beam(n,t,e,i,o){const r=t.clone().sub(n),a=this.box(e,r.length(),e,0,0,0,i,o);return a.position.copy(n).add(t).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new z(0,1,0),r.normalize()),a}makeFloor(){const{width:n,depth:t}=C;for(const e of[-1,1])this.box(n,.018,.26,0,.004,e*(t/2-.55),this.grout,this.hall),this.box(.26,.018,t,e*(n/2-.55),.004,0,this.grout,this.hall);for(let e=-7;e<=7;e++)this.box(.016,.01,44,e*In.floorTile,.003,0,this.grout,this.details),this.box(44,.01,.016,0,.003,e*In.floorTile,this.grout,this.details);for(const[e,i]of[[2.76,2.79],[2.87,2.91]]){const o=new E(new On(e,i,80).rotateX(-Math.PI/2),this.steel);o.position.y=.009,this.details.add(o)}for(const e of[-1,1])for(let i=-6;i<=6;i++)this.box(.13,.012,.045,e*(n/2-.19),.004,i*.8,this.darkSteel,this.details),this.box(.045,.012,.13,i*.8,.004,e*(t/2-.19),this.darkSteel,this.details)}makeEnclosure(){const{width:n,depth:t}=C;for(const[e,i,o,r]of[[0,n,t/2+.38,0],[1,n,t/2+.38,Math.PI],[2,t,n/2+.38,Math.PI/2],[3,t,n/2+.38,-Math.PI/2]]){const a=new D;a.name=`heavy-reveal-panel-${e}`,a.rotation.y=r;const l=e===1||e===3?-1:1;e<2?a.position.z=-o*l:a.position.x=-o*l,this.panels.push(a),this.root.add(a);const h=i/2,c=[-i*.3,i*.3];this.box(i+.3,2.4,.42,0,3.94,-.04,this.concrete,a);const p=[-h-.15,...c.flatMap(u=>[u-.84,u+.84]),h+.15];for(let u=0;u<p.length;u+=2){const m=p[u],d=p[u+1];this.box(d-m,2.72,.42,(m+d)/2,1.36,-.04,this.concrete,a)}for(const u of c)this.door(u,a,e);for(let u=-h+.2;u<h;u+=1.65){this.box(.025,2.15,.016,u,3.94,.181,this.grout,a);for(const m of[3.12,4.69])this.box(.054,.054,.02,u+.21,m,.19,this.recess,a)}this.box(i+.3,.12,.52,0,2.77,0,this.steel,a),this.box(i+.3,.1,.48,0,5.13,0,this.darkSteel,a),this.box(i+.3,.12,.48,0,.08,0,this.grout,a);for(const u of[-h+.14,0,h-.14])this.box(.22,5.3,.46,u,2.65,.05,this.steel,a),this.box(.29,.16,.58,u,.16,.05,this.darkSteel,a);for(const u of[-i*.15,i*.15])this.box(.9,1.28,.045,u,3.93,.195,this.darkSteel,a),this.box(.83,1.2,.02,u,3.93,.226,this.mirror,a);for(const u of[-1,1])for(let m=0;m<6;m++){const d=u*(i*.17+m*.19),g=this.box(.03,.62,.035,d,3.22,.238,this.mirror,a);g.rotation.z=u*.19,this.box(.11,.025,.032,d,3.61,.24,this.darkSteel,a)}e===0&&this.sign(a,i)}}door(n,t,e){const i=In.doorHeight,o=In.doorWidth;this.box(o,i,.15,n,i/2,-.1,this.recess,t);for(const r of[-1,1])this.box(.08,i+.1,.28,n+r*(o/2+.02),i/2,.08,this.steel,t),this.box(o/2-.035,i-.08,.04,n+r*o/4,i/2,.015,this.darkSteel,t),this.box(.018,i-.1,.018,n+r*.016,i/2,.045,this.steel,t),this.box(.025,.36,.055,n+r*.14,1.04,.1,this.steel,t),this.box(.018,.46,.018,n+r*(o/2-.15),i-.4,.045,this.mirror,t);this.box(o+.17,.1,.28,n,i+.045,.08,this.steel,t),this.box(o+.2,.035,.51,n,.025,.04,this.steel,t),this.box(.4,.065,.07,n,i+.23,.2,this.warmLamp,t),this.box(.25,.36,.03,n+o/2+.24,1.46,.2,this.steel,t);for(let r=0;r<e+1;r++)this.box(.13,.012,.015,n+o/2+.24,1.57-r*.047,.225,this.recess,t)}sign(n,t){if(this.box(4,.73,.055,0,4.06,.24,this.steel,n),typeof document>"u")return;const e=document.createElement("canvas");e.width=1024,e.height=192;const i=e.getContext("2d");if(!i)return;i.fillStyle="#c4c5ba",i.fillRect(0,0,1024,192),i.fillStyle="#363e3c",i.textAlign="center",i.font="600 49px Arial",i.fillText("EVERYONE APPROVES.",512,86),i.font="24px Arial",i.fillText("01   /   SYCOPHANCY   /   EXHIBITION COURT",512,142);const o=new kt(e);o.colorSpace=xn,this.textures.add(o);const r=new P({map:o,roughness:.84,metalness:.06}),a=new E(new an(3.88,.67),r);a.position.set(0,4.06,.275),n.add(a);for(const l of[-t*.41,t*.41]){const h=new E(new vn(.29,.024,5,28),this.steel);h.position.set(l,3.94,.24),n.add(h);for(const p of[-.08,.08])this.box(.028,.062,.024,l+p,4.02,.24,this.darkSteel,n);const c=new E(new vn(.15,.016,5,20,Math.PI),this.darkSteel);c.rotation.z=Math.PI,c.position.set(l,3.94,.245),n.add(c)}}makeCourt(){const n=In.roofHeight;for(let t=-18;t<=18;t+=6){this.box(38,.24,.22,0,n,t,this.darkSteel,this.roof),this.box(38,.12,.13,0,n+1.15,t,this.steel,this.roof);for(let e=-18;e<18;e+=3)this.beam(new z(e,n,t),new z(e+1.5,n+1.15,t),.085,this.steel,this.roof),this.beam(new z(e+1.5,n+1.15,t),new z(e+3,n,t),.085,this.steel,this.roof)}for(let t=-18;t<=18;t+=3)this.box(.1,.14,38,t,n+1.19,0,this.steel,this.roof);for(const t of[-1,1]){this.box(6.1,.1,38,t*14.4,n+1.35,0,this.concrete,this.roof),this.box(38,.1,5,0,n+1.35,t*16,this.concrete,this.roof),this.box(.08,4,36,t*18.5,8,0,this.glass,this.roof),this.box(36,4,.08,0,8,t*18.5,this.glass,this.roof),this.box(.32,.4,38,t*18.5,5.78,0,this.concrete,this.roof),this.box(38,.4,.32,0,5.78,t*18.5,this.concrete,this.roof);for(let e=-18;e<=18;e+=3)this.box(.095,4.8,.14,t*18.5,8.2,e,this.steel,this.roof),this.box(.14,4.8,.095,e,8.2,t*18.5,this.steel,this.roof);this.box(.08,.1,36,t*18.1,6.78,0,this.steel,this.roof),this.box(36,.1,.08,0,6.78,t*18.1,this.steel,this.roof)}for(const t of[-15,-9,-3,3,9,15])for(const e of[-1,1]){this.box(5.72,.035,4.72,e*14.4,n+1.27,t,this.recess,this.roof);for(const i of[-2.72,2.72])this.box(.035,.075,4.76,e*14.4+i,n+1.23,t,this.steel,this.roof)}for(const t of this.panels)for(const e of[-1,1])this.box(.36,5.4,.7,e*6.3,2.7,-.56,this.concrete,t),this.box(.28,.18,.36,e*6.3,1.85,-.13,this.steel,t)}makeLights(){const n=new Kn(14871020,6908767,V.atrium.ambient);this.light.add(n);const t=new Gn(16773334,V.atrium.key);t.position.set(-13,21,-9),this.light.add(t);const e=new Gn(13163749,V.atrium.fill);e.position.set(9,7,9),this.light.add(e),Ts(n,t,e)}mergeStatic(n){const t=new Map;for(const e of[...n.children]){if(!(e instanceof E)||Array.isArray(e.material)||e.material.transparent)continue;e.updateMatrix();const i=e.geometry.clone().applyMatrix4(e.matrix),o=t.get(e.material)??[];o.push(i),t.set(e.material,o),e.geometry.dispose(),n.remove(e)}for(const[e,i]of t){const o=hn(i,!1);if(i.forEach(r=>r.dispose()),o){const r=new E(o,e);r.name=`batched-${n.name}-${e.uuid.slice(0,8)}`,n.add(r)}}}remember(){this.triangles=0,this.meshes=0,this.root.traverse(n=>{if(n instanceof E){this.meshes++,this.geometries.add(n.geometry),this.triangles+=(n.geometry.index?.count??n.geometry.getAttribute("position").count)/3;for(const t of Array.isArray(n.material)?n.material:[n.material]){this.materials.add(t);for(const e of Object.values(t))e instanceof jt&&this.textures.add(e)}}})}async load(n,t){if(this.loaded||this.disposed)return;if(this.vt1){if(await this.vt1.load(n),this.disposed)return;this.remember()}const e=[["concrete_floor_diff_1k.jpg","map"],["concrete_floor_nor_gl_1k.jpg","normalMap"],["concrete_floor_rough_1k.jpg","roughnessMap"],["metal_plate_02_nor_gl_1k.jpg","normalMap"],["metal_plate_02_rough_1k.jpg","roughnessMap"]];for(let i=0;i<e.length;i++){const[o,r]=e[i];try{const a=await xt(n,ha+o);if(this.disposed){a.dispose();return}a.wrapS=a.wrapT=Nn,a.anisotropy=Math.min(4,t?.capabilities.getMaxAnisotropy()??1),r==="map"&&(a.colorSpace=xn),this.textures.add(a);for(const l of i<3?[this.stone,this.concrete]:[this.steel,this.darkSteel])l[r]=a,l.normalScale.setScalar(i<3?V.atrium.concreteNormal:V.atrium.steelNormal),l.needsUpdate=!0}catch{this.failures.push(o)}}this.loaded=!0}update(n,t){if(this.active=!this.disposed&&n.stage===1,this.root.visible=this.active,!this.active)return!1;const e=!t&&n.arena.active&&["reveal","boss","defeat","dead","complete"].includes(n.phase);this.opened=e?n.phase==="reveal"?la(n.phaseTime/dn.revealSeconds):1:0;for(const o of this.panels)o.position.y=this.opened*In.openingLift;const i=o=>Math.round(o/In.groundStep)*In.groundStep;return this.floor.position.x=i(n.player.x),this.floor.position.z=i(n.player.z),this.redInlay.visible=this.opened>0,this.crimson.opacity=this.opened*(this.reduced?.22:.32),this.redInlay.position.x=n.arena.centerX,this.redInlay.position.z=n.arena.centerZ,this.details.visible=!this.reduced,this.scene.background=this.sky,this.scene.fog=this.fog,this.scene.environmentIntensity=V.atrium.environment,!0}setReduced(n){this.reduced=n,this.details.visible=!n}resources(){return{geometries:this.geometries,materials:this.materials,textures:this.textures}}stats(){return{active:this.active,loaded:this.loaded,optionalMapFailures:[...this.failures],style:this.vt1?"palace-of-applause-v0.1":"grounded-industrial-atrium",profile:this.vt1?mn.id:Ot.id,opening:this.opened,panels:this.panels.length,doorHeight:In.doorHeight,doorWidth:In.doorWidth,groundY:-.005,continuousGround:!0,collisionChanges:!1,triangles:this.triangles,meshDraws:this.meshes,reduced:this.reduced,localizedCrimson:this.active&&this.opened>0,sourceReceipt:"public/assets/pbr/sources.json",measuredGPU:!1}}dispose(){this.disposed||(this.disposed=!0,this.vt1?.detach(),this.root.removeFromParent(),this.geometries.forEach(n=>n.dispose()),this.materials.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.root.clear())}}class h0{disposed=!1;active=0;waiting=[];controllers=new Set;concurrency;constructor(n=2){if(!Number.isInteger(n)||n<1)throw new RangeError("Invalid asset concurrency");this.concurrency=n}async load(n,t,e,i=15e3){if(this.disposed)throw new Error("Asset loader disposed");if(await new Promise(r=>{this.waiting.push(()=>{this.active++,r()}),this.drain()}),this.disposed)throw this.active--,this.drain(),new Error("Asset loader disposed");const o=new AbortController;this.controllers.add(o);try{return await new Promise((r,a)=>{let l=!1;const h=()=>{l=!0,clearTimeout(p),o.signal.removeEventListener("abort",c)},c=()=>{l||(h(),a(new Error(`Asset unavailable: ${n}`)))},p=setTimeout(()=>o.abort(),i);o.signal.addEventListener("abort",c,{once:!0}),Promise.resolve().then(()=>t(o.signal)).then(u=>{if(l||this.disposed||o.signal.aborted){e(u);return}h(),r(u)},u=>{l||(h(),a(u))})})}finally{this.controllers.delete(o),this.active--,this.drain()}}drain(){for(;this.active<this.concurrency&&this.waiting.length;)this.waiting.shift()()}dispose(){this.disposed=!0;for(const n of this.controllers)n.abort();this.drain()}}class da{mesh;clock=0;lastTime=null;constructor(){const n=new we({side:wo,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{skyPhoto:{value:null},hasPhoto:{value:0},skyTime:{value:0},horizon:{value:new $(2497330)},bossMix:{value:0}},vertexShader:`varying vec3 skyDirection;
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
    }`});this.mesh=new E(new fn(60,32,16),n),this.mesh.name="approval-eclipse-sky",this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3}setTexture(n){const t=this.mesh.material.uniforms;t.skyPhoto.value!==n&&t.skyPhoto.value?.dispose(),n.wrapS=Nn,t.skyPhoto.value=n,t.hasPhoto.value=1}update(n,t,e,i,o){this.lastTime!==null&&!o&&(this.clock+=Math.max(0,Math.min(t-this.lastTime,.1))),this.lastTime=t,this.mesh.position.copy(n.position);const r=this.mesh.material.uniforms;r.skyTime.value=this.clock,r.horizon.value.copy(e),r.bossMix.value=J.clamp(i,0,1)}dispose(){this.mesh.material.uniforms.skyPhoto.value?.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class ma{mounts=[];tread=new P({color:11577783,metalness:.72,roughness:.63,envMapIntensity:.6});rubber=new P({color:7827843,metalness:0,roughness:.86,envMapIntensity:.25});ready=[];failures=[];unusedGeometries=new Set;unusedMaterials=new Set;unusedTextures=new Set;constructor(n,t,e,i){n.forEach((r,a)=>{const l=new D;l.name="industrial-wall-fixtures",l.rotation.y=[0,Math.PI,Math.PI/2,-Math.PI/2][a],r.add(l),this.mounts.push(l)});const o=(r,a,l,h)=>{const c=a.map(([m,d,g,f])=>{const v=new an(m,d).rotateX(-Math.PI/2).translate(g,.022,f),w=v.getAttribute("uv");for(let k=0;k<w.count;k++)w.setXY(k,w.getX(k)*m/h,w.getY(k)*d/h);return v}),p=hn(c,!1);c.forEach(m=>m.dispose());const u=new E(p,l);u.name=r,t.add(u)};o("industrial-tread-perimeter",[[.65,i-1.8,-e/2+.72,0],[.65,i-1.8,e/2-.72,0],[e-2.1,.65,0,-i/2+.72],[e-2.1,.65,0,i/2-.72]],this.tread,.65),o("rubber-service-pads",[[2,.65,-3.6,-i/2+.7],[2,.65,3.6,i/2-.7]],this.rubber,1.1)}async load(n){for(const[t,e]of[["metal_grate_rusty",this.tread],["rubber_tiles",this.rubber]]){const i=[];try{for(const o of["diff","nor_gl","arm"]){const r=await xt(n,`/assets/pbr/${t}_${o}_1k.jpg`);r.wrapS=r.wrapT=Nn,r.anisotropy=2,i.push(r)}i[0].colorSpace=xn,e.map=i[0],e.normalMap=i[1],e.roughnessMap=i[2],e.aoMap=i[2],e.metalnessMap=i[2],e.normalScale.setScalar(t==="rubber_tiles"?.28:.42),e.needsUpdate=!0,this.ready.push(t)}catch(o){i.forEach(r=>r.dispose()),this.failures.push(t),console.warn("Arena surface uses base material:",t,o)}}for(const t of["security-camera-01","power-box-01","modular-industrial-pipes-01"])try{const e=await gt(n,`/assets/arena-${t}.glb`,8e3);e.updateMatrixWorld(!0),e.traverse(i=>{if(i instanceof E){this.unusedGeometries.add(i.geometry);for(const o of Array.isArray(i.material)?i.material:[i.material]){this.unusedMaterials.add(o);for(const r of Object.values(o))r instanceof jt&&this.unusedTextures.add(r);o instanceof P&&(o.envMapIntensity=.65,o.roughness=Math.max(.38,o.roughness),o.transparent=!1,o.depthWrite=!0)}}}),t==="modular-industrial-pipes-01"?this.pipes(e):this.fixtures(e,t==="security-camera-01"),this.ready.push(t)}catch(e){this.failures.push(t),console.warn("Optional arena fixture unavailable:",t,e)}}fixtures(n,t){const e=new dt().setFromObject(n),i=e.getSize(new z),o=e.getCenter(new z),r=t?.88/Math.max(i.x,i.y,i.z):.88/i.y;n.position.sub(o),n.scale.setScalar(r),n.position.multiplyScalar(r);for(let a=0;a<this.mounts.length;a++){if(!t&&a>1)continue;const l=new D;l.name=t?"surveillance-camera":"closed-power-box",l.position.set(t?a%2===0?4.65:-4.65:a===0?-3.6:3.6,t?3.88:1.65,t?.57:.23),l.add(n.clone(!0)),this.mounts[a].add(l);const h=new E(new fn(t?.022:.018,6,4),new B({color:t?16736474:7405528}));h.name="status-indicator",h.position.set(.11,t?-.04:.15,t?.45:.1),l.add(h)}}pipes(n){const t=r=>{const a=n.getObjectByName("modular_industrial_pipes_01_"+r);if(!a)throw new Error("Missing pipe part "+r);let l;if(a.traverse(m=>{m instanceof E&&(l=m)}),!l)throw new Error("Missing pipe mesh");const h=l.geometry.clone().applyMatrix4(l.matrixWorld);h.computeBoundingBox();const c=h.boundingBox,p=c.getCenter(new z),u=c.getSize(new z);return h.translate(-p.x,-p.y,-p.z),{geometry:h,material:l.material,size:u}},e=t("pipe02"),i=t("pipe08"),o=new cn;for(const r of this.mounts){const a=new U(e.geometry,e.material,6);a.name="instanced-overhead-pipes";for(let h=0;h<6;h++)o.position.set(-5+h*2,4.12,.3),o.rotation.set(0,0,Math.PI/2),o.scale.setScalar(2/e.size.y),o.updateMatrix(),a.setMatrixAt(h,o.matrix);a.instanceMatrix.needsUpdate=!0,r.add(a);const l=new E(i.geometry,i.material);l.name="pipe-valve",l.rotation.z=Math.PI/2,l.position.set(0,4.12,.37),r.add(l)}}stats(){return{loaded:[...this.ready],failed:[...this.failures],wallFixtures:this.mounts.map(n=>({objects:n.children.length,visible:n.parent?.visible??!1})),cameras:this.ready.includes("security-camera-01")?4:0,powerBoxes:this.ready.includes("power-box-01")?2:0}}resources(){return{geometries:this.unusedGeometries,materials:this.unusedMaterials,textures:this.unusedTextures}}}const Ge=(s,n,t)=>Math.max(n,Math.min(t,s)),he=(s,n,t)=>({x:s.x+(n.x-s.x)*t,y:s.y+(n.y-s.y)*t,z:s.z+(n.z-s.z)*t}),Ue=s=>{const n=Ge(s,0,1);return n*n*(3-2*n)};function xi(s,n=s.hydra?.elapsed??0){const t=s.stasis&&!s.stasis.thawed?s.hydra?.heldPose:void 0;t&&(n=t.elapsed);const e=t?.attacks??s.hydra?.attacks,i=Math.atan2(s.dx,s.dz),o={x:Math.cos(i),z:-Math.sin(i)},r={x:Math.sin(i),z:Math.cos(i)},a=(c,p,u)=>({x:s.x+o.x*c+r.x*u,y:p+(s.floorY??0),z:s.z+o.z*c+r.z*u}),l=[a(0,1.42,0),a(0,1.73,-.02),a(0,1.99,-.09),a(0,2.2,-.14)],h=[];for(let c=0;c<6;c++){const p=(c-2.5)*.59,u=Math.abs(c-2.5)/2.5,m=a(p,3.78-u*.5+Math.sin(n*.7+c)*.025,.02+u*.24),d=l[3],g=e?.find(b=>b.head===c&&b.committed&&n>=b.start&&n<b.start+b.warning+b.strike+b.retract);let f=m,v=!1,w=!1,k=0,M=null;if(g){const b=n-g.start,S=a(p,3.4-u*.2,-.72);if(v=b<g.warning,w=b>=g.warning&&b<g.warning+g.strike,M=g.id,k=Ge(b/g.warning,0,1),v)f=he(m,S,Ue(b/g.warning));else if(w){const _=Ge((b-g.warning)/g.strike,0,1);f=vi(s,g,_,S)}else{const _=vi(s,g,1,S);f=he(_,m,Ue((b-g.warning-g.strike)/g.retract))}}const y=[];for(let b=0;b<=5;b++){const S=b/5,_=he(d,f,S),A=Math.sin(Math.PI*S);_.x+=o.x*p*.2*A,_.z+=o.z*p*.2*A,_.y+=.32*A,y.push(_)}h.push({id:c,points:y,position:f,active:w&&!t,warning:v&&!t,progress:k,attackId:M})}return{stem:l,heads:h}}function vi(s,n,t,e){if(n.sweep){const i=n.heading-Math.PI*2/9+Math.PI*4/9*Ge((t-.3)/.7,0,1),o={x:s.x+Math.sin(i)*n.reach,y:n.target.y,z:s.z+Math.cos(i)*n.reach};return t<.3?he(e,o,Ue(t/.3)):o}return he(e,n.target,Ue(t))}const k0=1e-9,pa=(s,n,t)=>Math.max(n,Math.min(t,s));function ua(s,n){return!!s.stasis&&n<s.stasis.until-k0}function fa(s,n,t,e,i,o,r=0){if(![s.x,s.y,s.z,s.yaw,s.pitch].every(Number.isFinite))return null;const a=pa(s.pitch,-Math.PI/9,Math.PI/9),l=Math.cos(a),h=-Math.sin(s.yaw),c=-Math.cos(s.yaw),p=it.radius;if(!n&&(Math.abs(s.x)>C.width/2-C.playerRadius+k0||Math.abs(s.z)>C.depth/2-C.playerRadius+k0))return null;for(const u of[.52,.25,0]){const m=s.x+h*u,d=s.z+c*u,g=s.y+(s.eyeHeight??C.eyeHeight)-.22;if(!(g<r+p||!n&&(g>r+sn.ceiling-p||Math.abs(m)>C.width/2-p||Math.abs(d)>C.depth/2-p)))return{id:t,attemptId:e,phase:i,releasedAt:o,detonateAt:o+it.fuse,x:m,y:g,z:d,vx:h*l*it.speed,vy:Math.sin(a)*it.speed+it.upward,vz:c*l*it.speed,radius:p,roll:0,distanceRolled:0,grounded:!1}}return null}function ga(s,n=0){return{x:s.x,y:n+1.62+Math.sin(s.age*1.7+s.id)*.06,z:s.z}}const ln=new cn,wa=new z(0,1,0),c0=new z,ba=new $(7468031),ya=new $(10049023),xa=new $(16774116);function va(s){const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d");t.clearRect(0,0,64,64),t.fillStyle="white",t.font="bold 55px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(s,32,33);const e=new kt(n);return e.colorSpace=xn,e}function Re(s,n,t){const e=new U(s,n,t);return e.frustumCulled=!1,e.instanceMatrix.setUsage(en),e.count=0,e}function ki(s,n,t,e,i){c0.set(e.x-t.x,e.y-t.y,e.z-t.z);const o=c0.length();ln.position.set((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2),ln.quaternion.setFromUnitVectors(wa,c0.normalize()),ln.scale.set(i,o,i),ln.updateMatrix(),s.setMatrixAt(n,ln.matrix)}class ka{constructor(n,t=null){this.g2Materials=t,this.root.name="level-2-anthropomorphism",this.root.visible=!1,n.add(this.root),this.glyphs=[0,1].map(e=>Re(new an(.095,.135),new B({map:va(String(e)),color:16777215,transparent:!0,alphaTest:.15,side:nn,depthWrite:!1}),192)),this.architecture=this.glyphs.map(e=>Re(e.geometry,e.material,100)),this.necks=Re(new jn(1,1,1,10,1),new P({color:13147531,roughness:.78,metalness:0,envMapIntensity:.52}),40),this.cores=Re(new Wt(.19,1),new P({color:2167095,emissive:6568637,emissiveIntensity:1.5,roughness:.3,metalness:.55}),4),this.root.add(...this.glyphs,...this.architecture,this.necks,this.cores);for(let e=0;e<6;e++){const i=new E(new On(.26,.31,32),new B({color:16759155,transparent:!0,opacity:.7,depthWrite:!1,side:nn}));i.rotation.x=-Math.PI/2,i.visible=!1,this.root.add(i),this.rings.push(i);const o=new E(new vn(.29,.011,5,32),new B({color:14131199,transparent:!0,opacity:.7,depthWrite:!1}));o.visible=!1,this.root.add(o),this.halos.push(o);const r=new Tn;r.setAttribute("position",new Lt(new Float32Array(78),3)),r.setDrawRange(0,0);const a=new I0(r,new Ve({color:16759155,transparent:!0,opacity:.65,depthWrite:!1}));a.frustumCulled=!1,a.visible=!1,this.root.add(a),this.paths.push(a)}for(let e=0;e<2;e++){const i=this.architecture[e];let o=0;for(let r=0;r<5;r++)for(let a=0;a<16;a++)if((r+a)%2===e)for(const l of[-1,1])ln.position.set((a-7.5)*.75,.55+r*.69,l*(C.depth/2-.13)),ln.rotation.set(0,l>0?Math.PI:0,0),ln.scale.setScalar(2.4),ln.updateMatrix(),i.setMatrixAt(o,ln.matrix),i.setColorAt(o++,r%2?new $(5514559):new $(7942982));i.count=o,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}g2Materials;root=new D;masks=[];heads=[];body=null;glyphs;architecture;necks;cores;rings=[];paths=[];pathKeys=Array(6).fill("");halos=[];loaded=!1;reduced=!1;resources=[];async load(n){if(this.loaded)return;const t=[];try{for(const a of["mask","hydra-body","hydra-heads"])t.push(await gt(n,this.g2Materials&&a!=="mask"?`/assets/graphics-g2/${a}-visual.glb`:`/assets/level2/${a}.glb`));const[e,i,o]=t;this.g2Materials?.apply(i),this.g2Materials?.apply(o);for(const a of[i,o])a.traverse(l=>{if(l instanceof E)for(const h of Array.isArray(l.material)?l.material:[l.material])C0(h,"boss")});const r=Array.from({length:6},(a,l)=>{const h=`head_${String(l+1).padStart(2,"0")}`,c=o.getObjectByName(h);if(!c)throw new Error(`Hydra asset missing ${h}`);return c});this.resources.push(e,o);for(let a=0;a<6;a++){const l=e.clone(!0);l.visible=!1,this.root.add(l),this.masks.push(l)}this.body=i,this.root.add(i);for(const a of r)a.removeFromParent(),a.position.set(0,0,0),a.quaternion.identity(),this.root.add(a),this.heads.push(a);this.loaded=!0}catch(e){throw t.forEach(Ln),e}}setReduced(n){this.reduced=n}render(n,t=!1){const e=n.stage===2&&!t;if(this.root.visible=e,!e)return;for(const a of this.architecture)a.visible=n.level2?.environment.mode!=="forest_grotto";for(const a of this.masks)a.visible=!1;for(const a of this.heads)a.visible=!1;for(const a of[...this.rings,...this.paths,...this.halos])a.visible=!1;this.necks.count=0,this.cores.count=0;for(const a of this.glyphs)a.count=0;this.body&&(this.body.visible=!1);let i=0;const o=[0,0];n.enemies.slice(0,4).forEach((a,l)=>{const h=ga(a),c=a.age,p=a.mask,u=p?.mode==="warning",m=p?.mode==="away"||p?.mode==="recovery",d=a.flash>0?xa:a.role==="shooter"?ba:ya,g=this.masks[i++];if(g){g.visible=!m,g.position.set(h.x,h.y,h.z),g.rotation.set(0,a.heading,a.role==="chaser"?.06:0);const f=p?.mode==="reform"?Math.max(.1,1-p.timer/.35):1;g.scale.setScalar(f)}ln.position.set(a.x,.98,a.z),ln.rotation.set(0,c*.4,0),ln.scale.setScalar(1),ln.updateMatrix(),this.cores.setMatrixAt(l,ln.matrix),this.cores.setColorAt(l,d),this.cores.count++;for(let f=0;f<80;f++){const v=(f+a.id)%2,w=this.glyphs[v],k=Math.floor(f/10),M=f%10*Math.PI/5+k*.21,y=a.role==="shooter",b=(y?.34:.23)*(1-k*.057),S=y?0:Math.sin(k*.5+c*.4)*.1;ln.position.set(a.x+Math.cos(M)*b+S,.38+k*.145,a.z+Math.sin(M)*b),ln.rotation.set(0,M+Math.PI/2,y?0:Math.sin(c+f)*.08),ln.scale.setScalar(u?1.08:1),ln.updateMatrix(),w.setMatrixAt(o[v],ln.matrix),w.setColorAt(o[v]++,d)}if(u){const f=this.halos[l];f.visible=!0,f.position.set(h.x,h.y,h.z),f.rotation.set(0,a.heading,0),f.scale.setScalar(1+Math.sin(c*12)*.08)}});for(const a of n.projectiles.filter(l=>l.kind==="mask").slice(0,2)){const l=this.masks[i++];if(!l)break;l.visible=!0,l.position.set(a.x,a.y,a.z),l.rotation.set(0,Math.atan2(a.vx,a.vz),0),l.scale.setScalar(1)}this.glyphs.forEach((a,l)=>{a.count=o[l],a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)}),this.cores.instanceMatrix.needsUpdate=!0,this.cores.instanceColor&&(this.cores.instanceColor.needsUpdate=!0);const r=n.boss;if(r?.variant==="hydra"&&this.body){const a=xi(r),l=n.phase==="defeat";this.body.visible=!0,this.body.position.set(r.x,gn(n),r.z),this.body.rotation.y=Math.atan2(r.dx,r.dz);let h=0;for(let c=1;c<a.stem.length;c++)ki(this.necks,h++,a.stem[c-1],a.stem[c],.15);for(const c of a.heads){for(let m=1;m<c.points.length;m++)ki(this.necks,h++,c.points[m-1],c.points[m],.1);const p=this.heads[c.id];if(p&&(p.visible=!0,p.position.set(c.position.x,c.position.y,c.position.z),(!r.stasis||n.time>=r.stasis.until)&&p.rotation.set(0,Math.atan2(n.player.x-c.position.x,n.player.z-c.position.z),0)),l)continue;const u=r.hydra?.attacks.find(m=>m.id===c.attackId);if((c.warning||c.active)&&u){const m=this.rings[c.id];m.visible=!0,m.position.set(u.target.x,gn(n)+.025,u.target.z),m.scale.setScalar(c.active?1:1.25-c.progress*.25);const d=this.paths[c.id],g=d.geometry.getAttribute("position");d.visible=!0;const f=`${n.attemptId}:${u.id}`;if(this.pathKeys[c.id]!==f){const w=Array.from({length:26},(k,M)=>{const y=u.start+u.warning+Math.min(u.strike-1e-6,u.strike*M/25),b=xi(r,y).heads[c.id].position;return{x:b.x,y:gn(n)+.03,z:b.z}});w.forEach((k,M)=>g.setXYZ(M,k.x,k.y,k.z)),g.needsUpdate=!0,d.geometry.setDrawRange(0,w.length),this.pathKeys[c.id]=f}const v=this.halos[c.id];v.visible=!this.reduced,v.position.set(c.position.x,c.position.y,c.position.z),v.lookAt(n.player.x,C.eyeHeight+n.player.y,n.player.z),v.scale.setScalar(1.12)}}this.necks.count=h,this.necks.instanceMatrix.needsUpdate=!0}}stats(){return{loaded:this.loaded,heads:this.heads.length,maskSlots:this.masks.length,glyphCap:384,neckSegments:this.necks.count}}}function Ma(s){const n=s.boss;return n?.variant!=="serpent"?!1:n.y>0&&["warning","bite","emerge","exposed"].includes(n.serpent.mode)}function za(s){const n=s.boss;if(n?.variant!=="serpent")return null;const t=n.serpent,e=n.presentationTime??s.time,i=Math.sin(t.heading),o=Math.cos(t.heading),r=[];for(let a=1;a<=14;a++){const l=a*1.02,h=Math.sin(e*1.7-a*.55)*.65;r.push({x:n.x-i*l+o*h,y:n.y-Math.min(3.1,a*.46),z:n.z-o*l-i*h,radius:Math.max(.16,.9-a*.046)})}return{head:{x:n.x,y:n.y,z:n.z},heading:t.heading,exposed:Ma(s),jaw:t.mode==="warning"?.3+.5*Math.min(1,t.elapsed/t.duration):t.mode==="bite"?1:.15,segments:r}}const d0=32,Rt=128,Jn=64,Ee=4,nt=24,Te=4;class Mi{group=new D;geometries=new Set;materials=new Set;dummy=new cn;color=new $;body;fins;head=new D;jaw=new D;tail=new D;mouth;red;water;warning;presence;warningOutline;warningPositions=new Float32Array((Jn*Ee*6+nt*Te*12)*3);outlinePositions=new Float32Array((nt*2+Jn*2)*3);disposed=!1;waterTime=0;constructor(){this.group.name="level-3-drift-procedural-prototype",this.group.visible=!1;const n=new Kn(12966358,5331021,1.8),t=new Gn(16774104,2.1);t.position.set(-8,16,6),this.group.add(n,t),this.water=this.material(new we({uniforms:{time:{value:0},islandZ:{value:X.islandZ},islandRadius:{value:X.islandRadius}},vertexShader:`varying vec3 worldPoint;
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
    }`}));const e=this.mesh(new an(1600,1600),this.water,this.group);e.name="fixed-ocean-surface",e.rotation.x=-Math.PI/2,e.position.set(0,-.018,X.islandZ/2),this.presence=this.mesh(new vt(1,32),this.material(new B({color:3153709,transparent:!0,opacity:.42,depthWrite:!1})),this.group),this.presence.rotation.x=-Math.PI/2,this.presence.scale.set(1.3,5,1),this.presence.visible=!1,this.makeIsland(),this.makeBoundary(),this.red=this.material(new P({color:11873844,roughness:.46,metalness:.04}));const i=this.material(new P({color:7346987,roughness:.7})),o=this.material(new P({color:16771508,roughness:.52})),r=this.material(new P({color:1382682,roughness:.62})),a=this.geometry(new fn(1,16,12));this.body=this.pool(a,this.red,d0),this.body.name="serpent-canonical-segments",this.fins=this.pool(this.geometry(new Pt(1,1,3)),i,d0),this.group.add(this.body,this.fins,this.head,this.tail),this.head.name="serpent-prototype-head",this.mesh(a,this.red,this.head).scale.set(X.headRadius,.88*X.headRadius,X.headRadius);for(const d of[-1,1]){const g=this.mesh(a,o,this.head);g.position.set(d*.57,.31,.71),g.scale.set(.39,.53,.29);const f=this.mesh(a,r,this.head);f.position.set(d*.57,.31,.978),f.scale.set(.075,.3,.035);const v=this.mesh(a,this.red,this.head);v.position.set(d*.57,.78,.64),v.scale.set(.45,.13,.26),v.rotation.z=d*-.18;const w=this.mesh(a,r,this.head);w.position.set(d*.22,-.06,1.018),w.scale.set(.06,.045,.02);const k=this.mesh(new Pt(.48,.8,3),i,this.head);k.position.set(d*.97,.04,-.27),k.rotation.z=d*-Math.PI/2,k.scale.z=.32}this.mouth=this.mesh(a,r,this.head),this.mouth.position.set(0,-.38,.91),this.mouth.scale.set(.72,.23,.15);const h=this.mesh(new vn(.61,.055,6,24,Math.PI),o,this.head);h.position.set(0,-.17,.99),h.rotation.z=Math.PI,h.scale.y=.47,this.jaw.position.set(0,-.41,.12),this.head.add(this.jaw);const c=this.mesh(a,this.red,this.jaw);c.position.set(0,-.07,.28),c.scale.set(.77,.22,.67);for(let d=0;d<7;d++){const g=this.mesh(new Pt(.052,.15,3),o,this.head);g.position.set((d-3)*.155,-.36,.997-Math.abs(d-3)*.019),g.rotation.z=Math.PI}const p=this.geometry(new Pt(.53,1.45,3));for(const d of[-1,1]){const g=this.mesh(p,i,this.tail);g.position.set(d*.27,0,.36),g.rotation.set(Math.PI/2,0,d*.65),g.scale.z=.32}const u=this.geometry(new Tn);u.setAttribute("position",new Lt(this.warningPositions,3).setUsage(en)),this.warning=this.mesh(u,this.material(new B({color:14049845,side:nn,transparent:!0,opacity:.48,depthWrite:!1})),this.group),this.warning.name="authoritative-bite-capsule",this.warning.frustumCulled=!1,this.warning.visible=!1;const m=this.geometry(new Tn);m.setAttribute("position",new Lt(this.outlinePositions,3).setUsage(en)),this.warningOutline=new ji(m,this.material(new Ve({color:16768407}))),this.warningOutline.frustumCulled=!1,this.warningOutline.visible=!1,this.group.add(this.warningOutline)}geometry(n){return this.geometries.add(n),n}material(n){return this.materials.add(n),n}mesh(n,t,e){this.geometries.add(n),this.materials.add(t);const i=new E(n,t);return e.add(i),i}pool(n,t,e){const i=new U(n,t,e);return i.instanceMatrix.setUsage(en),i.frustumCulled=!1,i}makeIsland(){const t=[],e=[],i=[];t.push(0,Ct(0,X.islandZ),X.islandZ),e.push(.42,.47,.35);for(let a=0;a<13;a++){const l=X.islandRadius-X.beachWidth+X.beachWidth*a/12;for(let h=0;h<Rt;h++){const c=h*Math.PI*2/Rt,p=Math.sin(c)*l,u=X.islandZ+Math.cos(c)*l,m=Ct(p,u),d=a/12,g=Math.sin(h*.87+a*.8)*.012;t.push(p,m,u),e.push(.49+d*.19+g,.49+d*.13+g,.36+d*.1+g);const f=1+a*Rt+h,v=1+a*Rt+(h+1)%Rt;if(a===0)i.push(0,f,v);else{const w=f-Rt,k=v-Rt;i.push(w,f,v,w,v,k)}}}const o=this.geometry(new Tn);o.setAttribute("position",new on(t,3)),o.setAttribute("color",new on(e,3)),o.setIndex(i),o.computeVertexNormals();const r=this.mesh(o,this.material(new P({vertexColors:!0,roughness:.98,side:nn})),this.group);r.name="fixed-island-drift-ground"}makeBoundary(){const n=this.material(new B({color:9549221})),t=this.pool(this.geometry(new fn(1,8,4)),n,288);this.group.add(t),t.name="fixed-safe-corridor-and-island-foam";let e=0;for(const a of[-1,1])for(let l=0;l<88;l++){const h=X.spawnZ+5-(X.spawnZ+5-X.islandZ)*l/87;Math.hypot(X.halfWidth,h-X.islandZ)<X.islandRadius+.2||(this.dummy.position.set(a*X.halfWidth,.01,h),this.dummy.rotation.set(0,0,0),this.dummy.scale.set(.13,.023,.65+(.5+.5*Math.sin(l*2.17))*.55),this.dummy.updateMatrix(),t.setMatrixAt(e++,this.dummy.matrix))}for(let a=0;a<112;a++){const l=a*Math.PI*2/112,h=X.islandRadius+.06;this.dummy.position.set(Math.sin(l)*h,.02,X.islandZ+Math.cos(l)*h),this.dummy.rotation.set(0,l,0),this.dummy.scale.set(.36,.028,.1),this.dummy.updateMatrix(),t.setMatrixAt(e++,this.dummy.matrix)}t.count=e,t.instanceMatrix.needsUpdate=!0;const i=this.material(new P({color:4608597,roughness:.95,flatShading:!0})),o=this.pool(this.geometry(new Wt(1,0)),i,23);this.group.add(o);let r=0;for(let a=0;a<20;a++){const l=1.16+a*(Math.PI*2-2.32)/19,h=X.islandRadius+1.15;this.dummy.position.set(Math.sin(l)*h,.12,X.islandZ+Math.cos(l)*h),this.dummy.rotation.set(.2,l,.1),this.dummy.scale.set(.62+a%3*.12,.55+a%4*.18,.62),this.dummy.updateMatrix(),o.setMatrixAt(r++,this.dummy.matrix)}for(let a=0;a<3;a++)this.dummy.position.set((a-1)*3.2,2.8,X.islandZ-X.islandRadius-4),this.dummy.rotation.set(.12,a*.37,.08),this.dummy.scale.set(2.2,4.8-a*.8,1.6),this.dummy.updateMatrix(),o.setMatrixAt(r++,this.dummy.matrix);o.count=r,o.instanceMatrix.needsUpdate=!0}updateWarning(n,t,e,i){const o=Math.hypot(e-n,i-t),r=o>1e-8?(e-n)/o:0,a=o>1e-8?(i-t)/o:1,l=X.headRadius;let h=0,c=0;const p=(m,d)=>{const g=n+r*m+a*d,f=t+a*m-r*d,v=h++*3;this.warningPositions[v]=g,this.warningPositions[v+1]=Ct(g,f)+.045,this.warningPositions[v+2]=f};for(let m=0;m<Jn;m++){const d=o*m/Jn,g=o*(m+1)/Jn;for(let f=0;f<Ee;f++){const v=-l+2*l*f/Ee,w=-l+2*l*(f+1)/Ee;p(d,v),p(g,v),p(g,w),p(d,v),p(g,w),p(d,w)}}for(let m=0;m<2;m++)for(let d=0;d<nt;d++){const g=m===0?Math.PI/2:-Math.PI/2,f=g+d*Math.PI/nt,v=g+(d+1)*Math.PI/nt,w=m*o;for(let k=0;k<Te;k++){const M=l*k/Te,y=l*(k+1)/Te,b=(S,_)=>p(w+Math.cos(S)*_,Math.sin(S)*_);b(f,M),b(f,y),b(v,y),b(f,M),b(v,y),b(v,M)}}const u=(m,d)=>{const g=n+r*m+a*d,f=t+a*m-r*d,v=c++*3;this.outlinePositions[v]=g,this.outlinePositions[v+1]=Ct(g,f)+.055,this.outlinePositions[v+2]=f};for(let m=0;m<nt;m++){const d=Math.PI/2+m*Math.PI/nt;u(Math.cos(d)*l,Math.sin(d)*l)}for(let m=0;m<Jn;m++)u(o*m/Jn,-l);for(let m=0;m<nt;m++){const d=-Math.PI/2+m*Math.PI/nt;u(o+Math.cos(d)*l,Math.sin(d)*l)}for(let m=0;m<Jn;m++)u(o*(1-m/Jn),l);this.warning.geometry.setDrawRange(0,h),this.warning.geometry.getAttribute("position").needsUpdate=!0,this.warningOutline.geometry.setDrawRange(0,c),this.warningOutline.geometry.getAttribute("position").needsUpdate=!0}update(n,t){if(this.group.visible=!this.disposed&&n.stage===3,!this.group.visible)return;t||(this.waterTime=n.time),this.water.uniforms.time.value=this.waterTime;const e=n.boss,i=e?.variant==="serpent";this.head.visible=this.tail.visible=this.body.visible=this.fins.visible=i;const o=za(n);if(this.presence.visible=i&&!o?.exposed,this.presence.visible&&e&&(this.presence.position.set(e.x,.006,e.z),this.presence.rotation.z=-e.serpent.heading),this.warning.visible=this.warningOutline.visible=!1,e?.variant!=="serpent"||!o)return;const r=Math.min(d0,o.segments.length);this.head.position.set(o.head.x,o.head.y,o.head.z),this.head.rotation.set(0,o.heading,0),this.jaw.rotation.x=Math.max(0,Math.min(1,o.jaw))*.48,this.mouth.scale.y=.23+o.jaw*.18,this.red.emissive.setHex(e.flash>0?7880496:0),this.red.emissiveIntensity=e.flash>0?.65:0,this.body.count=r,this.fins.count=0;for(let l=0;l<r;l++){const h=o.segments[l];if(this.dummy.position.set(h.x,h.y,h.z),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(h.radius),this.dummy.updateMatrix(),this.body.setMatrixAt(l,this.dummy.matrix),this.color.setHex(l%2===0?16777215:15115163),this.body.setColorAt(l,this.color),l%3===1){const c=l?o.segments[l-1]:o.head;this.dummy.position.y+=h.radius*.92,this.dummy.rotation.set(0,Math.atan2(c.x-h.x,c.z-h.z),0),this.dummy.scale.set(h.radius*.36,h.radius*.95,h.radius*.85),this.dummy.updateMatrix(),this.fins.setMatrixAt(this.fins.count++,this.dummy.matrix)}}if(this.body.instanceMatrix.needsUpdate=!0,this.body.instanceColor&&(this.body.instanceColor.needsUpdate=!0),this.fins.instanceMatrix.needsUpdate=!0,r){const l=o.segments[r-1],h=r>1?o.segments[r-2]:o.head;this.tail.position.set(l.x,l.y,l.z),this.tail.rotation.set(0,Math.atan2(l.x-h.x,l.z-h.z),0),this.tail.scale.setScalar(Math.max(.2,l.radius*2))}else this.tail.visible=!1;const a=e.serpent;(a.mode==="warning"||a.mode==="bite")&&(this.warning.visible=this.warningOutline.visible=!0,this.updateWarning(a.fromX,a.fromZ,a.toX,a.toZ))}dispose(){if(!this.disposed){this.disposed=!0,this.group.visible=!1,this.group.removeFromParent(),this.group.traverse(n=>{n instanceof U&&n.dispose()});for(const n of this.geometries)n.dispose();for(const n of this.materials)n.dispose();this.geometries.clear(),this.materials.clear(),this.group.clear()}}}const _a=`{
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
`,Pe=(s,n)=>s!==void 0&&Number.isFinite(s)?s:n;function He(s){const n=Pe(s.motion?.phase,s.id),t=Pe(s.motion?.bobRate,7),e=Math.sin(Pe(s.age,0)*t+n);return{y:.022+e*.035,yaw:Pe(s.heading,0),roll:e*.022}}function Yi(s,n){const t=He(s),e=Math.cos(t.roll),i=Math.sin(t.roll),o=Math.cos(t.yaw),r=Math.sin(t.yaw),a=e*n.x-i*n.y,l=i*n.x+e*n.y;return{x:s.x+o*a+r*n.z,y:t.y+l,z:s.z-r*a+o*n.z}}const zi={head:{x:0,y:1.67,z:-.015,radius:.3}},$e={muzzleY:1.05,muzzleForward:1.1,shotRadius:.162};function Sa(s){return Yi(s,{x:0,y:1.24,z:.58})}function Aa(s){const n=s.vat.heading,t=Math.cos(n),e=Math.sin(n),i=(r,a,l)=>({x:s.x+t*r+e*l,y:a,z:s.z-e*r+t*l});return{heading:n,primitives:[[0,1.65,1.88,0,.68],[-.97,.42,1.22,0,.22],[.97,.42,1.22,0,.22],[-.39,.22,.77,0,.22],[.39,.22,.77,0,.22],[0,1.02,1.12,.85,.2]].map(([r,a,l,h,c])=>({a:i(r,a,h),b:i(r,l,h),radius:c})),lowerCollar:{center:i(0,1.14,0),radiusX:1.45/2,radiusZ:1.36/2,halfHeight:.25/2}}}function Ia(s){return{x:s.x+Math.sin(s.vat.heading)*$e.muzzleForward,y:$e.muzzleY,z:s.z+Math.cos(s.vat.heading)*$e.muzzleForward}}const Ce=JSON.parse(_a),Ra=new $(16777215),_i=new $(16766445),Si=new $(10341600);class Ea{group=new D;geometry=new Set;materials=new Map;primitives=new Map;templates=new Map;dummy=new cn;shadows;husks=[];relay=[];shots=[];relayWarnings;boss=new D;bossBrain=new D;bossCore=new D;bossPort=new D;bossWarning;bossCrack;bossMaterials=[];room=new D;signTexture;signMaterial;ownedBasic=new Set;disposed=!1;shotBound=1;counts={zombies:0,relays:0,brains:0,boss:0};attempt=-1;constructor(){if(Ce.schema!==1)throw new Error("Unsupported Level 4 runtime model kit");this.group.name="level-4-cognitive-offloading-laboratory",this.group.visible=!1,this.room.name="finite-lab-13.65x14.3",this.group.add(this.room,this.boss);for(const[m,d]of Object.entries(Ce.materials)){const g=new P({color:d.color,roughness:d.roughness,metalness:.06,flatShading:!0});d.emissive&&(g.emissive.set(d.color),g.emissiveIntensity=d.emissive),d.opacity!==void 0&&(g.transparent=!0,g.opacity=d.opacity,g.depthWrite=!1,g.side=nn),this.materials.set(m,g)}this.addModel("lab",this.room);const n=new Kn(14151135,4931678,1.45),t=new Gn(16773081,1.7);t.position.set(-3.4,4.6,2.1),this.group.add(n,t),this.makeCrowd("husk",this.husks,C.hardCap),this.makeCrowd("relay",this.relay,C.hardCap),this.makeCrowd("projectile",this.shots,C.projectileCap),this.shotBound=0;for(const m of this.model("projectile").values()){const d=m.getAttribute("position");for(let g=0;g<d.count;g++)this.shotBound=Math.max(this.shotBound,Math.hypot(d.getX(g),d.getY(g),d.getZ(g)))}this.boss.name="brain-in-a-vat-two-arms-two-legs",this.boss.add(this.bossCore,this.bossBrain,this.bossPort);const e=new Map([["brain",this.bossBrain],["port",this.bossPort],["structure",this.bossCore]]),i=new Map;for(const[m,d]of e)for(const[g,f]of this.model("boss",m)){let v=i.get(g);v||(v=this.materials.get(g).clone(),v.userData={baseColor:v.color.clone(),baseEmission:v.emissiveIntensity},this.bossMaterials.push(v),i.set(g,v));const w=new E(f,v);w.name=`vat-${m}-${g}`,d.add(w)}const o=new B({color:16753113,transparent:!0,opacity:.8,depthWrite:!1,side:nn});this.ownedBasic.add(o);const r=this.track(new On(.24,.285,12));this.bossWarning=new E(r,o),this.bossWarning.name="brain-vat-port-anticipation",this.group.add(this.bossWarning),this.relayWarnings=this.pool(r,o,C.hardCap),this.group.add(this.relayWarnings);const a=new B({color:856096,transparent:!0,opacity:.31,depthWrite:!1});this.ownedBasic.add(a),this.shadows=this.pool(this.track(new vt(1,12)),a,C.hardCap+1),this.group.add(this.shadows);const l=new Ve({color:16056297,transparent:!0,opacity:.82,depthWrite:!1});this.ownedBasic.add(l);const h=this.track(new Tn().setFromPoints([new z(-.37,2.24,.669),new z(-.08,1.97,.674),new z(-.08,1.97,.674),new z(.12,2.03,.674),new z(-.08,1.97,.674),new z(-.18,1.62,.674),new z(-.18,1.62,.674),new z(.11,1.42,.674),new z(.12,2.03,.674),new z(.35,1.77,.674)]));this.bossCrack=new Oi(h,l),this.boss.add(this.bossCrack);const c=document.createElement("canvas");c.width=1024,c.height=128;const p=c.getContext("2d");p.fillStyle="#25273d",p.fillRect(0,0,1024,128),p.fillStyle="#d6fbe4",p.font="bold 41px monospace",p.textAlign="center",p.fillText("04 / COGNITIVE OFFLOADING",512,54),p.fillStyle="#bfaad6",p.font="23px monospace",p.fillText("NEURAL SYSTEMS LABORATORY",512,96),this.signTexture=new kt(c),this.signTexture.colorSpace=xn,this.signMaterial=new B({map:this.signTexture});const u=new E(this.track(new an(5.3,.66)),this.signMaterial);u.name="stage-four-lab-sign",u.position.set(0,3.9,-7.049),this.room.add(u)}track(n){return this.geometry.add(n),n}primitive(n){const t=this.primitives.get(n);if(t)return t;const e=n==="box"?new un(1,1,1):n==="sphere"?new fn(.5,8,6):n==="cylinder"?new jn(.5,.5,1,12):new vn(.43,.07,4,12);return this.track(e),this.primitives.set(n,e),e}model(n,t){const e=n+":"+(t??"*"),i=this.templates.get(e);if(i)return i;const o=new Map;for(const a of Ce.models[n]){if(t==="structure"?a.group==="brain"||a.group==="port":t&&a.group!==t)continue;this.dummy.position.fromArray(a.position),this.dummy.rotation.set(...a.rotation),this.dummy.scale.fromArray(a.size),this.dummy.updateMatrix();const l=this.primitive(a.kind).clone().applyMatrix4(this.dummy.matrix),h=l.toNonIndexed();l.dispose();const c=o.get(a.material)??[];c.push(h),o.set(a.material,c)}const r=new Map;for(const[a,l]of o){const h=hn(l,!1);if(l.forEach(c=>c.dispose()),!h)throw new Error(`Level 4 model merge failed: ${e}/${a}`);r.set(a,this.track(h))}return this.templates.set(e,r),r}addModel(n,t){for(const[e,i]of this.model(n)){const o=new E(i,this.materials.get(e));o.name=`${n}-${e}`,t.add(o)}}pool(n,t,e){const i=new U(n,t,e);return i.instanceMatrix.setUsage(en),i.frustumCulled=!1,i.count=0,i}makeCrowd(n,t,e){for(const[i,o]of this.model(n)){const r=this.pool(o,this.materials.get(i),e);r.name=`instanced-${n}-${i}`,this.group.add(r),t.push(r)}}updateZombies(n,t,e){for(const i of n)i.count=t.length,t.forEach((o,r)=>{const a=He(o);this.dummy.position.set(o.x,a.y,o.z),this.dummy.rotation.set(0,a.yaw,a.roll),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),i.setMatrixAt(r,this.dummy.matrix),i.setColorAt(r,o.flash>0?_i:o.stasis&&e.time<o.stasis.until?Si:Ra)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}update(n,t){if(this.group.visible=!this.disposed&&n.stage===4,!this.group.visible)return;this.attempt!==n.attemptId&&(this.attempt=n.attemptId,this.bossCrack.visible=!1);const e=n.enemies.slice(0,C.hardCap),i=e.filter(l=>l.role==="shooter");this.updateZombies(this.husks,e,n),this.updateZombies(this.relay,i,n);const o=i.filter(l=>l.zombie?.mode==="warning"&&!(l.stasis&&n.time<l.stasis.until));this.relayWarnings.count=o.length,o.forEach((l,h)=>{const c=Sa(l),p=He(l);this.dummy.position.set(c.x,c.y,c.z),this.dummy.rotation.set(0,p.yaw,p.roll),this.dummy.scale.setScalar(t?.75:.72+.1*Math.sin(n.time*14)),this.dummy.updateMatrix(),this.relayWarnings.setMatrixAt(h,this.dummy.matrix)}),this.relayWarnings.instanceMatrix.needsUpdate=!0;const r=n.projectiles.filter(l=>l.kind==="brain").slice(0,C.projectileCap);for(const l of this.shots)l.count=r.length,r.forEach((h,c)=>{this.dummy.position.set(h.x,h.y,h.z),this.dummy.rotation.set(t?0:n.time*3,Math.atan2(h.vx,h.vz),0),this.dummy.scale.setScalar((h.radius??$e.shotRadius)/this.shotBound),this.dummy.updateMatrix(),l.setMatrixAt(c,this.dummy.matrix)}),l.instanceMatrix.needsUpdate=!0;const a=n.boss?.variant==="brain_vat"?n.boss:null;if(this.boss.visible=!!a,this.bossWarning.visible=!1,this.bossCrack.visible=!1,this.shadows.count=e.length+(a?1:0),e.forEach((l,h)=>{this.dummy.position.set(l.x,.016,l.z),this.dummy.rotation.set(-Math.PI/2,0,0),this.dummy.scale.set(.35,.32,1),this.dummy.updateMatrix(),this.shadows.setMatrixAt(h,this.dummy.matrix)}),a){const l=Aa(a),h=!!a.stasis&&n.time<a.stasis.until,c=a.vat.mode==="defeat",p=a.vat.mode==="warning"&&!h&&!c;this.boss.position.set(a.x,0,a.z),this.boss.rotation.set(0,l.heading,0),this.bossCore.position.y=c?-.1*Math.min(1,a.vat.elapsed/.7):0,this.bossBrain.position.y=0,this.bossBrain.scale.setScalar(1),this.bossCrack.visible=c||a.health/a.maxHealth<.35;for(const m of this.bossMaterials)m.emissiveIntensity=m.userData.baseEmission*(c?.08:p?1.5:1),m.color.copy(m.userData.baseColor),h?m.color.multiply(Si):a.flash>0&&m.color.lerp(_i,.44);const u=Ia(a);this.bossWarning.visible=p,this.bossWarning.position.set(u.x,u.y,u.z+.001),this.bossWarning.rotation.set(0,l.heading,0),this.bossWarning.scale.setScalar(t?1:1+.16*Math.sin(n.time*13)),this.dummy.position.set(a.x,.018,a.z),this.dummy.rotation.set(-Math.PI/2,0,0),this.dummy.scale.set(.91,.81,1),this.dummy.updateMatrix(),this.shadows.setMatrixAt(e.length,this.dummy.matrix)}this.shadows.instanceMatrix.needsUpdate=!0,this.counts={zombies:e.length,relays:i.length,brains:r.length,boss:a?1:0}}stats(){return{ready:!this.disposed,artStatus:Ce.artStatus,relayArt:"ART-01 draft zombie with canister; owner approval pending",footprint:{width:C.width,depth:C.depth},counts:this.counts,geometry:this.geometry.size,materials:this.materials.size+this.bossMaterials.length+this.ownedBasic.size+1,modelExport:"assets/level4/kit.json",boundedPools:!0}}dispose(){this.disposed||(this.disposed=!0,this.group.visible=!1,this.group.removeFromParent(),this.group.traverse(n=>{n instanceof U&&n.dispose()}),this.geometry.forEach(n=>n.dispose()),this.materials.forEach(n=>n.dispose()),this.bossMaterials.forEach(n=>n.dispose()),this.ownedBasic.forEach(n=>n.dispose()),this.signMaterial.dispose(),this.signTexture.dispose(),this.geometry.clear(),this.materials.clear(),this.templates.clear(),this.primitives.clear(),this.group.clear())}}const m0={thumbMuzzleForward:dn.bodyRadius+.5+.04,thumbMuzzleDown:dn.muzzleDown};function Xi(s,n){const t=s.expansion?.action;return s.health>0&&s.mode==="smile_active"&&!!t&&t.kind==="smile"&&n>=t.phaseStartedAt-1e-9&&n<t.endsAt-1e-9&&!ua(s,n)}class Ta{constructor(n){this.scene=n,this.model=this.fallback(),this.root.add(this.model),this.root.visible=this.ring.visible=this.shield.visible=!1,this.scene.add(this.root,this.ring,this.shield),this.buildTrails()}scene;root=new D;model;trails=[];trailMaterial=new B({color:16754415,transparent:!0,opacity:.16,depthWrite:!1,blending:qn});ringMaterial=new B({color:16755948,transparent:!0,opacity:.8,depthWrite:!1,blending:qn});ring=new E(new vn(1,.025,4,40),this.ringMaterial);shieldMaterial=new B({color:15260927,transparent:!0,opacity:.23,wireframe:!0,depthWrite:!1});shield=new E(new fn(dn.bodyRadius*1.04,16,10),this.shieldMaterial);target=new z;reduced=!1;authored=!1;mode="none";live=!1;charge=!1;shieldActive=!1;materialCount=0;triangles=0;fallback(){const n=new D,t=new P({color:16758983,roughness:.42,emissive:8263254,emissiveIntensity:.3}),e=new P({color:2428966,roughness:.6}),i=[],o=(h,c,p,u,m,d)=>new un(u,m,d).translate(h,c,p);i.push(o(.015,-.14,0,.46,.52,.3),o(-.2,.28,.01,.17,.44,.25),o(-.2,.02,.01,.17,.27,.25));for(let h=0;h<4;h++)i.push(o(.06,.035-h*.115,.15,.43-h*.026,.104,.16));i.push(o(.015,-.44,0,.3,.12,.24));const r=hn(i,!1);i.forEach(h=>h.dispose()),n.add(new E(r,t));const a=[o(-.06,-.085,.236,.035,.048,.014),o(.09,-.085,.236,.035,.048,.014)];for(let h=0;h<7;h++){const c=(h-3)*.027;a.push(o(.015+c,-.195+4*c*c,.236,.029,.02,.014))}const l=hn(a,!1);return a.forEach(h=>h.dispose()),n.add(new E(l,e)),n}releaseModel(){const n=new Set,t=new Set,e=new Set;this.model.traverse(i=>{if(i instanceof E){e.add(i.geometry);for(const o of Array.isArray(i.material)?i.material:[i.material])n.add(o)}});for(const i of n){for(const o of Object.values(i))o instanceof jt&&t.add(o);i.dispose()}for(const i of t)i.dispose();for(const i of e)i.dispose();this.root.remove(this.model)}buildTrails(){for(const i of this.trails)this.scene.remove(i);this.trails[0]?.geometry.dispose(),this.trails=[],this.model.updateMatrixWorld(!0);const n=[],t=new Set;this.triangles=0,this.model.traverse(i=>{if(!(i instanceof E))return;const o=i.geometry.clone().applyMatrix4(i.matrixWorld);o.deleteAttribute("uv"),o.deleteAttribute("tangent"),o.deleteAttribute("color"),n.push(o),this.triangles+=(o.index?.count??o.getAttribute("position").count)/3;for(const r of Array.isArray(i.material)?i.material:[i.material])t.add(r)});const e=hn(n,!1);n.forEach(i=>i.dispose()),this.materialCount=t.size;for(let i=0;i<2;i++){const o=new E(e,this.trailMaterial);o.visible=!1,this.scene.add(o),this.trails.push(o)}}addAsset(n){this.releaseModel(),this.model=n,this.root.add(n),this.authored=!0,this.root.position.set(0,0,0),this.root.rotation.set(0,0,0),this.root.scale.setScalar(1),this.root.updateMatrixWorld(!0),this.buildTrails()}setReduced(n){this.reduced=n}render(n){this.root.visible=this.ring.visible=this.shield.visible=!1;for(const p of this.trails)p.visible=!1;this.live=this.charge=this.shieldActive=!1,this.mode="none";const t=n.boss;if(!t||t.variant!=="grin"||n.phase!=="boss"||!t.expansion)return;this.mode=t.mode;const e=!!t.stasis&&n.time<t.stasis.until,i=n.projectiles.find(p=>p.kind==="super_like"&&p.ownerId===t.id&&p.attemptId===n.attemptId),o=J.clamp(1-t.timer/Math.max(.001,t.modeDuration),0,1),r=dn.bodyRadius*1.2;if(i){if(this.live=!0,this.root.visible=!0,this.root.position.set(i.x,i.y,i.z),this.root.rotation.set(0,Math.atan2(i.vx,i.vz),0),this.root.scale.setScalar(r),!this.reduced)for(let p=0;p<2;p++){const u=this.trails[p],m=(p+1)*.065;u.position.set(i.x-i.vx*m,i.y-i.vy*m,i.z-i.vz*m),u.rotation.copy(this.root.rotation),u.scale.setScalar(r*(1-(p+1)*.09)),u.visible=!0}}else!e&&t.mode==="super_like_windup"&&(this.charge=!0,this.root.visible=!0,this.root.position.set(t.x+t.dx*m0.thumbMuzzleForward,t.y-m0.thumbMuzzleDown,t.z+t.dz*m0.thumbMuzzleForward),this.root.rotation.set(0,Math.atan2(t.dx,t.dz),0),this.root.scale.setScalar(r*(.16+o*.44)),this.ring.position.copy(this.root.position),this.target.set(this.ring.position.x+t.dx,this.ring.position.y,this.ring.position.z+t.dz),this.ring.lookAt(this.target),this.ring.scale.setScalar(.25+o*.42),this.ringMaterial.color.setHex(16755948),this.ringMaterial.opacity=this.reduced?.45:.7,this.ring.visible=!0);const a=Xi(t,n.time),l=!e&&t.mode==="smile_windup";this.shieldActive=a,(a||l)&&(this.shield.position.set(t.x,t.y,t.z),this.shield.rotation.set(0,0,0),this.shield.scale.setScalar(1),this.shieldMaterial.color.setHex(a?15131391:10975684),this.shieldMaterial.opacity=a?this.reduced?.16:.23:.025+o*.045,a&&n.time-(t.expansion.blockedHitAt??-100)<.13&&(this.shieldMaterial.opacity=.44),this.shield.visible=!0);const h=t.expansion.lastImpact,c=h?n.time-h.time:99;h&&c>=0&&c<.32&&h.reason!=="expiry"&&(this.ring.position.set(h.x,h.y,h.z),this.target.set(n.player.x,1.62+n.player.y,n.player.z),this.ring.lookAt(this.target),this.ring.scale.setScalar(.15+c*3.3),this.ringMaterial.color.setHex(h.reason==="sword"?16773057:16754414),this.ringMaterial.opacity=(this.reduced?.35:.72)*(1-c/.32),this.ring.visible=!0)}stats(){return{asset:this.authored?"authored":"fallback",mode:this.mode,liveThumb:this.live,chargeVisible:this.charge,trailCount:this.trails.filter(n=>n.visible).length,trailCap:2,shieldActive:this.shieldActive,shieldVisible:this.shield.visible,shieldOpacity:this.shield.visible?this.shieldMaterial.opacity:0,effectCount:this.ring.visible?1:0,effectCap:1,thumbTriangles:this.triangles,thumbDrawGroups:this.materialCount,reduced:this.reduced}}dispose(){this.releaseModel();for(const n of this.trails)this.scene.remove(n);this.trails[0]?.geometry.dispose(),this.trailMaterial.dispose(),this.ring.geometry.dispose(),this.ringMaterial.dispose(),this.shield.geometry.dispose(),this.shieldMaterial.dispose(),this.scene.remove(this.root,this.ring,this.shield)}}class Pa{constructor(n,t){this.scene=n,this.boss=t,this.expansion=new Ta(n),t.traverse(r=>{if(r instanceof E)for(const a of Array.isArray(r.material)?r.material:[r.material])C0(a,"boss")}),t.traverse(r=>{if(r instanceof E)for(const a of Array.isArray(r.material)?r.material:[r.material])a instanceof P&&!this.materials.some(l=>l.material===a)&&this.materials.push({material:a,color:a.color.clone(),emission:a.emissiveIntensity})});for(const r of["grin_orb_eyes","grin_orb_halo","grin_orb_jaw","grin_orb_charm_left","grin_orb_charm_right"]){const a=t.getObjectByName(r);a&&this.pivots.set(r,{node:a,rotation:a.rotation.clone(),position:a.position.clone()})}const e=t.getObjectByName("grin_orb_eyes");e?.traverse(r=>{if(!(r instanceof E)||r.geometry.morphAttributes.position?.length)return;const a=r.geometry.getAttribute("position"),l=new on(new Float32Array(a.count*3),3);for(let h=0;h<l.count;h++){const c=a.getX(h),p=c<0?-.51:.51;l.setXYZ(h,p+(c-p)*.61,.36+(a.getY(h)-.36)*.61,a.getZ(h))}r.geometry.morphAttributes.position=[l],r.geometry.morphTargetsRelative=!1,r.updateMorphTargets(),this.eyes.push(r)}),this.eyeCenters=new U(new yt(.058),new B({color:15466484}),2),this.eyeCenters.visible=!1;for(let r=0;r<2;r++)this.dummy.position.set(r===0?-.51:.51,.36,1.32),this.dummy.scale.setScalar(1),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.eyeCenters.setMatrixAt(r,this.dummy.matrix);this.eyeCenters.instanceMatrix.needsUpdate=!0,(e??t).add(this.eyeCenters);const i=new fn(dn.bodyRadius,12,8);for(let r=0;r<3;r++){const a=new E(i,this.ghostMaterial);a.visible=!1,n.add(a),this.ghosts.push(a)}this.castRing=new E(new vn(.4,.035,5,32),new B({color:16741107,transparent:!0,opacity:.85,depthWrite:!1,blending:qn})),this.castRing.visible=!1,n.add(this.castRing),this.zipPath=new E(new an(.07,1).rotateX(-Math.PI/2),new B({color:11529948,transparent:!0,opacity:.35,depthWrite:!1,side:nn})),this.zipPath.visible=!1,n.add(this.zipPath),this.burst=new U(new yt(.055),new B({color:16777215,transparent:!0,opacity:1}),96),this.burst.count=0,this.burst.frustumCulled=!1,this.burst.instanceMatrix.setUsage(en),n.add(this.burst);const o=[16157647,12058593,16773072,13080831];for(let r=0;r<96;r++)this.burst.setColorAt(r,new $(o[r%4]))}scene;boss;projectilePools=[];materials=[];pivots=new Map;ghostMaterial=new B({color:15622375,transparent:!0,opacity:.13,wireframe:!0,depthWrite:!1});ghosts=[];castRing;zipPath;burst;dummy=new cn;white=new $(16773610);target=new z;frozen=!1;poseClock=0;expansion;eyes=[];eyeCenters;reduced=!1;charcoal=new $(2298678);pale=new $(15597556);addProjectileAsset(n){n.updateMatrixWorld(!0),n.traverse(t=>{if(!(t instanceof E))return;const e=t.geometry.clone().applyMatrix4(t.matrixWorld),i=new U(e,t.material,dn.orbCap);i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(en),this.scene.add(i),this.projectilePools.push(i)})}addSuperLikeAsset(n){this.expansion.addAsset(n)}setReduced(n){this.reduced=n,this.expansion.setReduced(n)}render(n){this.expansion.render(n),this.eyeCenters.visible=!1;const t=n.boss,e=!!t&&t.variant==="grin"&&["reveal","boss","defeat"].includes(n.phase);this.boss.visible=e,this.castRing.visible=!1,this.zipPath.visible=!1,this.burst.count=0;for(const w of this.ghosts)w.visible=!1;const i=n.projectiles.filter(w=>w.owner==="boss"&&w.kind!=="super_like"&&w.kind!=="brain").slice(0,dn.orbCap);for(const w of this.projectilePools)w.count=i.length,i.forEach((k,M)=>{this.dummy.position.set(k.x,k.y,k.z),this.dummy.rotation.set(0,Math.atan2(n.player.x-k.x,n.player.z-k.z),Math.sin(n.time*4+k.id)*.16),this.dummy.scale.setScalar(k.radius??dn.orbRadius),this.dummy.updateMatrix(),w.setMatrixAt(M,this.dummy.matrix)}),w.instanceMatrix.needsUpdate=!0;if(this.frozen=!1,!t||!e)return;const o=!!t.stasis&&n.time<t.stasis.until,r=o?t.stasis:null,a=r?.poseTime??t.presentationTime??n.time,l=r?.mode??t.mode;this.frozen=o,this.poseClock=a,this.boss.position.set(t.x,t.y,t.z),this.boss.rotation.y=r?r.heading??0:["cast_tell","cast_release"].includes(t.mode)||t.mode.startsWith("super_like")||t.mode.startsWith("smile_")?Math.atan2(t.dx,t.dz):Math.atan2(n.player.x-t.x,n.player.z-t.z);const h=n.phase==="defeat",c=l==="cast_tell",p=l==="zip_move",u=n.phase==="reveal",m=Math.max(0,Math.min(1,1-(r?.timer??t.timer)/Math.max(.01,r?.modeDuration??t.modeDuration))),d=l==="super_like_windup"||l==="super_like_flight"||l==="super_like_recover",g=l==="smile_windup"||l==="smile_active"||l==="smile_recover",f=d?l==="super_like_windup"?m:l==="super_like_recover"?1-m:1:g?l==="smile_windup"?m:l==="smile_recover"?1-m:1:0,v=Xi(t,n.time);this.boss.scale.setScalar(u?.88+.12*Math.min(1,n.phaseTime/dn.revealSeconds):h?1+n.phaseTime*.08:1);for(const w of this.materials)w.material.color.copy(w.color),g&&w.material.name==="RK_Grin_Pixel_Shell"&&w.material.color.lerp(this.charcoal,f*.88),g&&w.material.name==="RK_Grin_Cream_Teeth"&&w.material.color.lerp(this.pale,f),d&&w.material.name==="RK_Grin_Deep_Recess"&&w.material.color.multiplyScalar(1-f*.6),w.material.color.lerp(this.white,t.flash>0?.8:0),w.material.emissiveIntensity=w.emission*(c?1.2+m*.9:h?2:1+f*.28),w.material.transparent=h,w.material.opacity=h?Math.max(0,1-n.phaseTime/dn.defeatSeconds):1;for(const w of this.eyes)w.morphTargetInfluences&&(w.morphTargetInfluences[0]=f);this.eyeCenters.visible=g&&f>.5;for(const[w,k]of this.pivots)k.node.rotation.copy(k.rotation),k.node.position.copy(k.position),w==="grin_orb_halo"&&(k.node.rotation.y+=a*(c?1.8:.35)),w.includes("charm")&&(k.node.rotation.z+=Math.sin(a*2.4+(w.includes("left")?0:1.2))*.075+Math.sin(a*1.15+(w.includes("left")?.2:1.7))*.02),w==="grin_orb_jaw"&&(c&&(k.node.position.y-=m*.09),k.node.position.y-=f*(d?.2:.12),k.node.rotation.x+=f*(d?.12:.08),k.node.rotation.x+=Math.sin(a*1.2-.16)*.012*(this.reduced?.35:1),k.node.position.y-=Math.sin(a*1.2)*.008*(this.reduced?.35:1));if(!o&&(c||t.mode==="cast_release")&&(this.castRing.position.set(t.x+t.dx*dn.muzzleForward,t.y-dn.muzzleDown,t.z+t.dz*dn.muzzleForward),this.target.copy(this.castRing.position).add(new z(t.aimX,t.aimY,t.aimZ)),this.castRing.lookAt(this.target),this.castRing.scale.setScalar(.55+m*(t.attack==="fan"?1.7:.9)),this.castRing.visible=!0),!o&&t.mode==="zip_tell"){const w=t.zipToX-t.x,k=t.zipToZ-t.z,M=Math.hypot(w,k);this.zipPath.position.set(t.x+w/2,.04,t.z+k/2),this.zipPath.rotation.y=Math.atan2(w,k),this.zipPath.scale.set(1,1,M),this.zipPath.visible=M>.01}if(p&&!o)for(let w=0;w<3;w++){const k=Math.max(0,t.zipElapsed/Math.max(.01,t.zipDuration)-(w+1)*.11),M=k*k*(3-2*k);this.ghosts[w].position.set(t.zipFromX+(t.zipToX-t.zipFromX)*M,t.y,t.zipFromZ+(t.zipToZ-t.zipFromZ)*M),this.ghosts[w].visible=!0}if(v&&!this.reduced)for(let w=0;w<2;w++)this.ghosts[w].position.set(t.x-t.dx*(w+1)*.6,t.y,t.z-t.dz*(w+1)*.6),this.ghosts[w].visible=!0;if(h){this.burst.count=96;const w=n.phaseTime;for(let k=0;k<96;k++){const M=k*2.399963,y=1-2*(k+.5)/96,b=Math.sqrt(1-y*y),S=2+k%7*.27;this.dummy.position.set(t.x+Math.cos(M)*b*(1.3+w*S),t.y+y*(1.3+w*S)-w*w,t.z+Math.sin(M)*b*(1.3+w*S)),this.dummy.rotation.set(M+w*3,w*2,k),this.dummy.scale.setScalar(Math.max(.01,1-w/dn.defeatSeconds)),this.dummy.updateMatrix(),this.burst.setMatrixAt(k,this.dummy.matrix)}this.burst.instanceMatrix.needsUpdate=!0}}stats(){return{bossOrbDrawGroups:this.projectilePools.length,orbCap:dn.orbCap,afterimageCap:3,burstCap:96,frozen:this.frozen,poseClock:this.poseClock,expansion:this.expansion.stats(),pose:{x:this.boss.position.x,y:this.boss.position.y,z:this.boss.position.z,yaw:this.boss.rotation.y,haloY:this.pivots.get("grin_orb_halo")?.node.rotation.y??null,jawY:this.pivots.get("grin_orb_jaw")?.node.position.y??null,charmZ:this.pivots.get("grin_orb_charm_left")?.node.rotation.z??null,irisContraction:this.eyes[0]?.morphTargetInfluences?.[0]??0}}}dispose(){this.expansion.dispose()}}class Ca{sparks;rings;flowers;dummy=new cn;towardCamera=new z;pink=new $(16744669);mint=new $(11665378);ordinary=new $(16770776);attempt=-1;impact=0;impactTime=-10;ix=0;iy=0;iz=0;heads=0;reduced=!1;rainbow=[16729973,16762177,16121712,7405520,5691135,10777855,16345573].map(n=>new $(n));constructor(n,t,e=!1){this.sparks=new U(new yt(.025,0),new B({transparent:!0,opacity:.95,depthWrite:!1}),e?48:C.hitEventCap*8),this.rings=new U(new On(.073,.086,4),new B({color:11665378,transparent:!0,opacity:.9,depthWrite:!1,side:nn}),e?0:C.hitEventCap),this.flowers=new U(new an(.23,.23),new B({map:t,transparent:!0,opacity:.85,depthWrite:!1,side:nn,blending:qn,toneMapped:!1}),e?0:8);for(const i of[this.sparks,this.rings,this.flowers])As(i.material),i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(en),n.add(i)}setReduced(n){this.reduced=n}render(n,t,e=!1){let i=0,o=0,r=0;this.heads=0,n.attemptId!==this.attempt&&(this.attempt=n.attemptId,this.impact=0,this.impactTime=-10),n.impactSerial>this.impact&&(this.impact=n.impactSerial,this.impactTime=n.time,this.ix=n.slamImpactX,this.iy=gn(n),this.iz=n.slamImpactZ),(n.phase==="dead"||n.phase==="complete")&&(this.impactTime=-10);const a=n.time-this.impactTime,l=e?.65:.85;if(a>=0&&n.time+1e-9<this.impactTime+l){const h=this.reduced?12:40;for(let c=0;c<h;c++){const p=c*2.399963,u=1.3+c%5*.8;this.dummy.position.set(this.ix+Math.cos(p)*u*a,this.iy+.06+Math.max(0,(2.5+c%4*.35)*a-4.3*a*a),this.iz+Math.sin(p)*u*a),this.dummy.rotation.set(c,a*5,c*.3),this.dummy.scale.set(1.7*(1-a/l),4*(1-a/l),1.7*(1-a/l)),this.dummy.updateMatrix(),this.sparks.setMatrixAt(i,this.dummy.matrix),this.sparks.setColorAt(i++,this.rainbow[c%7])}}for(const h of n.hitEvents){if(e||e&&n.lifelikeEvents?.records.some(d=>d.kind==="hit"&&d.cause==="gun"&&d.attemptId===h.attemptId&&d.targetId===h.targetId&&d.time===h.time))continue;const c=n.time-h.time;if(h.attemptId!==n.attemptId||c<0||c>=C.hitEventSeconds)continue;const p=h.region==="head",u=1-c/C.hitEventSeconds;this.towardCamera.set(t.position.x-h.x,t.position.y-h.y,t.position.z-h.z).normalize(),r<8&&(this.dummy.position.set(h.x,h.y,h.z).addScaledVector(this.towardCamera,.05),this.dummy.quaternion.copy(t.quaternion),this.dummy.rotateZ(h.id*.71+c*2),this.dummy.scale.setScalar((p?1.5:1)*(1+c*5)*u*(this.reduced?.65:1)),this.dummy.updateMatrix(),this.flowers.setMatrixAt(r++,this.dummy.matrix));const m=p?8:3;for(let d=0;d<m&&i<this.sparks.instanceMatrix.count;d++){const g=d*2.399963+h.id*.47,f=1-2*(d+.5)/m,v=Math.sqrt(Math.max(0,1-f*f)),w=.025+c*(p?1.35:.8)*(h.killed?1.15:1);this.dummy.position.set(h.x+Math.cos(g)*v*w,h.y+f*w,h.z+Math.sin(g)*v*w).addScaledVector(this.towardCamera,.025+c*.25),this.dummy.rotation.set(g,c*12,d),this.dummy.scale.setScalar(u*(p?1.3:.8)),this.dummy.updateMatrix(),this.sparks.setMatrixAt(i,this.dummy.matrix),this.sparks.setColorAt(i,p?d%2?this.mint:this.pink:this.rainbow[(d+h.id)%7]),i++}p&&o<C.hitEventCap&&(this.dummy.position.set(h.x,h.y,h.z).addScaledVector(this.towardCamera,.045),this.dummy.quaternion.copy(t.quaternion),this.dummy.rotateZ(Math.PI/4),this.dummy.scale.setScalar((1+c*6)*u),this.dummy.updateMatrix(),this.rings.setMatrixAt(o++,this.dummy.matrix),this.heads++)}if(n.slam>=.1&&n.slam<.6&&!this.reduced)for(let h=0;h<8&&i<this.sparks.instanceMatrix.count;h++){const c=(n.time*1.3+h*.13)%1;this.dummy.position.set(.09+Math.sin(h*2.4)*.09,.1+Math.cos(h*2.4)*.13-c*.35,-.6).applyMatrix4(t.matrixWorld),this.dummy.rotation.set(h,n.time*3,h),this.dummy.scale.set(.45,1.4*(1-c),.45),this.dummy.updateMatrix(),this.sparks.setMatrixAt(i,this.dummy.matrix),this.sparks.setColorAt(i++,this.rainbow[h%7])}this.sparks.count=i,this.rings.count=o,this.flowers.count=r,this.flowers.instanceMatrix.needsUpdate=!0,this.sparks.instanceMatrix.needsUpdate=!0,this.rings.instanceMatrix.needsUpdate=!0,this.sparks.instanceColor&&(this.sparks.instanceColor.needsUpdate=!0)}stats(){return{sparks:this.sparks.count,headRings:this.heads,impactFlowers:this.flowers.count,maxSparks:this.sparks.instanceMatrix.count}}}const Vt=(s,n,t)=>{const e=J.clamp((t-s)/(n-s),0,1);return e*e*(3-2*e)},ja=new z(0,1,0);function Zi(s){const n=s.grenade.throwStartedAt,t=n===null?-1:s.time-n,e=s.grenade.enabled&&s.grenade.throwPhase!=="idle"&&t>=0&&t<it.recovery,i=Vt(0,.18,t),o=Vt(.18,.32,t),r=Vt(.34,.5,t),a=Vt(.16,it.release,t);let l=.3-.1*o+.07*r,h=-.64+.38*i-.35*r,c=-.54-.24*o+.12*r,p=.12-o*.43,u=-.3,m=.15+o*.18;if(e){const d=fa(s.player,s.arena.active||s.stage===3,0,s.attemptId,s.phase==="boss"?"boss":"swarm",s.time,gn(s));if(d){const g=Math.sin(s.time*14)*s.player.dash*.018,f=new z(d.x-s.player.x,d.y-(s.player.eyeHeight??C.eyeHeight)-s.player.y,d.z-s.player.z).applyEuler(new En(-s.player.pitch,-s.player.yaw,-g,"ZXY")),v=a*(1-r);l=J.lerp(l,f.x,v),h=J.lerp(h,f.y,v),c=J.lerp(c,f.z,v),p=J.lerp(p,-s.player.pitch,v),u=J.lerp(u,0,v),m=J.lerp(m,-g,v)}}return{active:e,t,held:e&&t<it.release,holster:e?Math.min(Vt(0,.12,t),1-r):0,x:l,y:h,z:c,rx:p,ry:u,rz:m}}function La(){const s=document.createElement("canvas");s.width=512,s.height=512;const n=s.getContext("2d"),t=(o,r)=>{n.save(),n.translate(o%4*128,Math.floor(o/4)*128),r(),n.restore()};for(const o of[0,1])t(o,()=>{n.strokeStyle=o===0?"#ff304b":"#ff91a0",n.lineWidth=o===0?4:5;for(const[r,a,l,h]of[[7,7,1,1],[121,7,-1,1],[7,121,1,-1],[121,121,-1,-1]])n.beginPath(),n.moveTo(r+l*23,a),n.lineTo(r,a),n.lineTo(r,a+h*23),n.stroke()});for(const[o,r]of[[2,"0"],[3,"1"]])t(o,()=>{n.font="900 92px monospace",n.textAlign="center",n.fillStyle="#ff6478",n.fillText(r,64,100)});["ERR_MOVE_LOCK","THREAD_PAUSED","STASIS 3s","STASIS 2s","STASIS 1s"].forEach((o,r)=>t(4+r,()=>{n.fillStyle="rgba(28,2,11,.82)",n.fillRect(2,45,124,36),n.fillStyle="#fff0f2",n.font="bold 14px monospace",n.textAlign="center",n.fillText(o,64,68),n.fillStyle="#ff304b",n.fillRect(2,44,124,2),n.fillRect(2,81,124,2)})),t(9,()=>{n.strokeStyle="#ff4f69",n.lineWidth=6,n.beginPath();for(let o=0;o<12;o++){const r=o*Math.PI/6;n.moveTo(64+Math.cos(r)*39,64+Math.sin(r)*39),n.lineTo(64+Math.cos(r+.3)*57,64+Math.sin(r+.3)*57)}n.stroke(),n.fillStyle="#fff0ed",n.fillRect(57,35,14,58),n.fillRect(35,57,58,14)}),t(10,()=>{n.strokeStyle="#ff516b",n.lineWidth=4;for(const[o,r,a,l]of[[9,9,1,1],[119,9,-1,1],[9,119,1,-1],[119,119,-1,-1]])n.beginPath(),n.moveTo(o+a*19,r),n.lineTo(o,r),n.lineTo(o,r+l*19),n.stroke();n.fillStyle="#2b0812",n.fillRect(80,6,37,22),n.fillStyle="#ffd2da",n.fillRect(89,10,6,14),n.fillRect(102,10,6,14)});const i=new kt(s);return i.colorSpace=xn,i.magFilter=A0,i.name="Binary authored glyph and stasis atlas",i}class Fa{constructor(n,t){this.scene=n,this.foreground=t,n.add(this.worldRoot),t.add(this.heldRoot),this.heldRoot.name="binary-held-view",this.worldRoot.name="binary-world-view",this.heldRoot.visible=!1,this.worldRoot.visible=!1,this.addFallback();const e=new an(1,1);this.tiles=new f0(new Float32Array(128),1),this.alpha=new f0(new Float32Array(128),1),this.tiles.setUsage(en),this.alpha.setUsage(en),e.setAttribute("binaryTile",this.tiles),e.setAttribute("binaryAlpha",this.alpha);const i=new B({map:La(),transparent:!0,depthWrite:!1,side:nn,toneMapped:!1});i.onBeforeCompile=o=>{o.vertexShader=`attribute float binaryTile; attribute float binaryAlpha; varying float vBinaryTile; varying float vBinaryAlpha;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBinaryTile=binaryTile;vBinaryAlpha=binaryAlpha;`),o.fragmentShader=`varying float vBinaryTile; varying float vBinaryAlpha;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <map_fragment>","vec2 binaryUV=(vMapUv+vec2(mod(vBinaryTile,4.0),3.0-floor(vBinaryTile/4.0)))*0.25; diffuseColor*=texture2D(map,binaryUV); diffuseColor.a*=vBinaryAlpha;")},i.customProgramCacheKey=()=>"binary-stasis-atlas-v1",this.cards=new U(e,i,128),this.cards.name="binary-stasis-shared-cards",this.cards.count=0,this.cards.frustumCulled=!1,this.cards.instanceMatrix.setUsage(en),n.add(this.cards),this.particles=new U(new yt(.018,0),new P({color:592141,metalness:.4,roughness:.18}),48),this.particles.name="binary-shared-fragments-drops",this.particles.count=0,this.particles.frustumCulled=!1,this.particles.instanceMatrix.setUsage(en),n.add(this.particles),this.pulse=new E(new On(.91,1,48,1,.12,Math.PI*1.78),new B({color:16737401,transparent:!0,opacity:0,depthWrite:!1,side:nn,toneMapped:!1})),this.pulse.rotation.x=-Math.PI/2,this.pulse.visible=!1,n.add(this.pulse),this.armed=new E(new On(.14,.146,20),new B({color:16752814,transparent:!0,opacity:0,depthWrite:!1,side:nn,toneMapped:!1})),this.armed.visible=!1,n.add(this.armed),this.shadow=new E(new vt(.14,16),new B({color:1049866,transparent:!0,opacity:.45,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,n.add(this.shadow)}scene;foreground;heldRoot=new D;worldRoot=new D;cards;tiles;alpha;particles;pulse;shadow;armed;d=new cn;p=new z;axis=new z;projected=new z;energy=[];reduced=!1;loaded=!1;disposed=!1;labelRects=[];count=0;tags=0;frozen=0;particleCount=0;role="hidden";rotation=0;grounded=!1;fallbackGeometry=null;fallbackMaterial=null;addFallback(){this.fallbackGeometry=new Wt(.115,1),this.fallbackMaterial=new P({color:5376025,emissive:16065090,emissiveIntensity:.25,metalness:.5,roughness:.35});for(const n of[this.heldRoot,this.worldRoot]){const t=new E(this.fallbackGeometry,this.fallbackMaterial);t.name="binary-readable-fallback",t.scale.y=1.25,n.add(t)}}addAsset(n){if(this.disposed)return;const t=n.getObjectByName("binary_grenade_held"),e=n.getObjectByName("binary_grenade_world");if(!t||!e)throw new Error("Grenade GLB must contain held and world LOD groups.");for(const i of[t,e])i.traverse(o=>{if(o instanceof E)for(const r of Array.isArray(o.material)?o.material:[o.material])C0(r,"utility"),Gi(r)});this.heldRoot.clear(),this.worldRoot.clear(),this.heldRoot.add(t),this.worldRoot.add(e),this.fallbackGeometry?.dispose(),this.fallbackMaterial?.dispose(),this.fallbackGeometry=null,this.fallbackMaterial=null,n.traverse(i=>{if(i instanceof E)for(const o of Array.isArray(i.material)?i.material:[i.material])o instanceof P&&o.name==="RK_Binary_Emission"&&!this.energy.includes(o)&&this.energy.push(o)}),t.traverse(i=>{if(i instanceof E)for(const o of Array.isArray(i.material)?i.material:[i.material])o instanceof P&&o.name==="RK_Binary_Emission"&&!this.energy.includes(o)&&this.energy.push(o)}),this.loaded=!0}setReduced(n){this.reduced=n}card(n,t,e,i,o,r,a,l,h=0){this.count>=128||(this.d.position.set(n,t,e),this.d.quaternion.copy(l.quaternion),h&&this.d.rotateZ(h),this.d.scale.set(i,o,1),this.d.updateMatrix(),this.cards.setMatrixAt(this.count,this.d.matrix),this.tiles.setX(this.count,r),this.alpha.setX(this.count,a),this.count++)}fragment(n,t,e,i,o){this.particleCount>=48||(this.d.position.set(n,t,e),this.d.rotation.set(o,o*.6,o*.3),this.d.scale.set(i,i*1.7,i),this.d.updateMatrix(),this.particles.setMatrixAt(this.particleCount++,this.d.matrix))}render(n,t,e){this.count=0,this.tags=0,this.frozen=0,this.particleCount=0,this.role="hidden",this.grounded=!1,this.labelRects.length=0;const i=!e&&n.grenade.enabled&&["swarm","boss"].includes(n.phase),o=Zi(n),r=i?n.grenade.world:null;this.heldRoot.visible=i&&o.held,this.worldRoot.visible=!!r,this.shadow.visible=!!r,this.armed.visible=!1,this.pulse.visible=!1,this.heldRoot.position.set(o.x,o.y,o.z),this.heldRoot.rotation.set(o.rx,o.ry,o.rz),this.heldRoot.visible&&(this.role="held");let a=.85;if(r){this.role=r.grounded?"rolling":"flying",this.grounded=r.grounded,this.rotation=r.roll,this.worldRoot.position.set(r.x,r.y,r.z),this.axis.set(r.vz,0,-r.vx),this.axis.lengthSq()<1e-7&&this.axis.set(1,0,0),this.axis.normalize(),this.worldRoot.quaternion.setFromAxisAngle(this.axis,r.roll),this.worldRoot.rotateY(Math.atan2(-r.vx,-r.vz));const l=n.stage===3?Ct(r.x,r.z):gn(n);this.shadow.position.set(r.x,l+.025,r.z);const h=r.y-l,c=Math.max(.5,1-h*.16);this.shadow.scale.setScalar(c),this.shadow.material.opacity=Math.max(.1,.5-h*.12);const p=Vt(r.detonateAt-.35,r.detonateAt,n.time);a+=p*(this.reduced?.25:.85),this.armed.visible=p>0,this.armed.position.copy(this.worldRoot.position),this.armed.quaternion.copy(t.quaternion),this.armed.scale.setScalar(1.7-p*.6),this.armed.material.opacity=p*(this.reduced?.3:.65);const u=n.time-r.releasedAt;if(!this.reduced&&n.slam<0&&u<.55)for(let m=0;m<8;m++){const d=(m+1)*.018,g=u+d;this.fragment(r.x-r.vx*d,r.y-r.vy*d-g*g*.28,r.z-r.vz*d,.6+m*.035,m+n.time)}}for(const l of this.energy)l.emissiveIntensity=a;if(i){const l=n.grenade.lastDetonation,h=l?n.time-l.time:100;if(l&&h>=0&&h<.6){const m=n.stage===3?Ct(l.x,l.z):gn(n);this.pulse.visible=!0,this.pulse.position.set(l.x,m+.035,l.z),this.pulse.rotation.z=h*.35,this.pulse.scale.setScalar(.24+h*(this.reduced?5:16)),this.pulse.material.opacity=(1-h/.6)*(this.reduced?.3:.8),h<.18&&!this.reduced&&this.card(l.x,l.y+.1,l.z,.3+h*3,.3+h*3,9,(1-h/.18)*.8,t);const d=this.reduced?0:n.slam>=0?8:32;for(let g=0;g<d;g++){const f=g*2.399963,v=.8+g%5*.23,w=h*v;this.fragment(l.x+Math.cos(f)*w,Math.max(m+.04,l.y+Math.sin(g*3.1)*w+.2-h*h*2),l.z+Math.sin(f)*w,1-h/.6,f+h*2)}}const c=[];for(const m of n.enemies)m.health>0&&m.stasis&&n.time<m.stasis.until+.25&&c.push({id:m.id,x:m.x,y:1.12,z:m.z,head:Yi(m,zi.head),radius:.58,stasis:m.stasis,boss:!1,distance:(m.x-n.player.x)**2+(m.z-n.player.z)**2});const p=n.boss;p&&p.health>0&&p.stasis&&n.time<p.stasis.until+.25&&c.push({id:p.id,x:p.x,y:p.y,z:p.z,head:{x:p.x,y:p.y,z:p.z},radius:p.visualRadius,stasis:p.stasis,boss:!0,distance:(p.x-n.player.x)**2+(p.z-n.player.z)**2}),c.sort((m,d)=>Number(d.boss&&n.lock.active)-Number(m.boss&&n.lock.active)||m.distance-d.distance);let u=0;for(const m of c){const d=m.stasis.until-n.time,g=d>0,f=g?.74:Math.max(0,1+d/.25)*.6;g&&this.frozen++,this.p.set(m.head.x,m.head.y,m.head.z),this.projected.copy(this.p).applyMatrix4(t.matrixWorldInverse);const v=Math.max(.1,-this.projected.z);this.axis.copy(t.position).sub(this.p);const w=this.axis.length(),k=m.boss?(n.boss?.bodyRadius??m.radius)+.05:zi.head.radius+.05;w>.001&&this.p.addScaledVector(this.axis,Math.min(k,Math.max(0,w-.18))/w);const M=this.p.x,y=this.p.y,b=this.p.z;if(this.projected.copy(this.p).project(t),this.projected.z<0||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3)continue;this.p.applyMatrix4(t.matrixWorldInverse);const S=m.radius,_=Math.max(.1,-this.p.z),A=2*_*Math.tan(t.fov*Math.PI/360),I=A*t.aspect,R=Math.min(m.boss?S*2.35*_/v:.76,I*(m.boss?.36:.17)),j=Math.min(m.boss?S*2.35*_/v:.72,A*(m.boss?.66:.24));if(this.card(M,y,b,R,j,m.boss?this.reduced?1:0:10,f,t),u<(this.reduced?4:12)&&g){u++,this.p.set(m.x,m.y,m.z).applyMatrix4(t.matrixWorldInverse);const G=Math.min(m.boss?2.7:1.65,Math.max(.1,-this.p.z)*2*Math.tan(t.fov*Math.PI/360)*t.aspect*.085),N=m.boss?m.y+S+.25:m.head.y+.46;this.p.set(m.x,N,m.z).project(t);const Q=.1,Y=.105,L={left:this.p.x-Q,right:this.p.x+Q,bottom:this.p.y-Y,top:this.p.y+Y},Z=this.p.z>0&&this.p.z<1&&L.left>-.94&&L.right<.94&&L.bottom>-.73&&L.top<.6,O=this.labelRects.some(Un=>L.left<Un.right&&L.right>Un.left&&L.bottom<Un.top&&L.top>Un.bottom);if(Z&&!O&&(this.tags++,this.labelRects.push(L),this.card(m.x,N,m.z,G,G,6+Math.min(2,Math.max(0,3-Math.ceil(d))),f,t),this.reduced||this.card(m.x,N+G*.3,m.z,G,G,m.boss?5:4,f*.85,t)),!this.reduced){const Un=n.time*.45+m.id*1.7;this.p.copy(t.position).sub(new z(m.x,m.y,m.z)),this.axis.crossVectors(ja,this.p).normalize();const be=Math.max(.005,Math.min(.65,A*.034));for(let at=0;at<2;at++){const x=at===0?-1:1;this.card(m.x+this.axis.x*x*(S+.22),m.y+Math.sin(Un+at)*.27,m.z+this.axis.z*x*(S+.22),be*.72,be,2+(m.id+at)%2,f*.9,t,Math.sin(Un)*.1)}}}}}this.cards.count=this.count,this.cards.instanceMatrix.needsUpdate=!0,this.tiles.needsUpdate=!0,this.alpha.needsUpdate=!0,this.particles.count=this.particleCount,this.particles.instanceMatrix.needsUpdate=!0}stats(){return{asset:this.loaded?"authored":"readable-fallback",held:this.heldRoot.visible,world:this.worldRoot.visible,worldState:this.role,grounded:this.grounded,rollRadians:this.rotation,cards:this.count,cardCapacity:128,detailedTags:this.tags,tagCapacity:12,frozenActors:this.frozen,particles:this.particleCount,particleCapacity:48,pulse:this.pulse.visible,armedCue:this.armed.visible,reducedEffects:this.reduced,extraFxDraws:[this.cards.count>0,this.particles.count>0,this.pulse.visible,this.shadow.visible,this.armed.visible].filter(Boolean).length}}dispose(){this.disposed=!0}}const Vn={scale:.7,appear:.07,handoff:.61};function ce(s,n,t){const e=J.clamp((t-s)/(n-s),0,1);return e*e*(3-2*e)}function Ki(s){const n=ce(sn.summonEnd,sn.raiseEnd,s),t=ce(sn.apex,sn.impact,s);return{position:new z(.24-.205*n,-.46+.76*n-.4*t,-.88+.16*n),rotation:new En(-.17+n*.62-t*2.9,.05,-.15+.12*n),scale:Math.max(.01,ce(Vn.appear,.15,s))}}function Oa(s){const n=s.getObjectByName("sword_tip");if(!n)throw new Error("Sword asset is missing its floor-contact socket");return s.updateWorldMatrix(!0,!0),s.worldToLocal(n.getWorldPosition(new z)).multiplyScalar(Vn.scale)}function Wa(s,n,t,e,i){const o=ce(sn.dissolve,sn.duration,s),r=ce(Vn.handoff,sn.impact,s),a=Ki(Vn.handoff),l=a.position.applyMatrix4(e.matrixWorld),h=e.quaternion.clone().multiply(new yn().setFromEuler(a.rotation)),c=new z(-Math.sin(i)*.18,-1,-Math.cos(i)*.18).normalize(),p=new yn().setFromUnitVectors(new z(0,1,0),c),u=t.clone().sub(n.clone().applyQuaternion(p).multiplyScalar(1-o));return{visible:s>=Vn.handoff&&s<sn.duration,position:l.lerp(u,r),rotation:h.slerp(p,r),scale:Vn.scale*(1-o)}}class Da{material=new Le({name:"RK_Liquid_Reactor",color:16777215,metalness:.18,roughness:.18,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.2,emissive:16777215,emissiveIntensity:.22});clock={value:0};surge={value:0};lastTime=null;constructor(){this.material.customProgramCacheKey=()=>"rk-liquid-reactor-v1",this.material.onBeforeCompile=n=>{n.uniforms.liquidTime=this.clock,n.uniforms.liquidSurge=this.surge,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLiquidPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLiquidPosition=position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
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
   `)}}update(n,t,e){this.lastTime!==null&&!e&&(this.clock.value+=Math.max(0,Math.min(.05,n-this.lastTime))),this.lastTime=n,this.surge.value=e?0:J.clamp(t,0,1)}}const $a=new z(0,1,0),Ai=[16728687,16760114,16383848,6487988,4971519,7821055,16018431],oe=(s,n,t)=>{const e=J.clamp((t-s)/(n-s),0,1);return e*e*(3-2*e)};function Ba(){const s=document.createElement("canvas");s.width=512,s.height=512;const n=s.getContext("2d");n.translate(256,256);for(let i=0;i<4;i++){const o=220-i*43;n.lineWidth=i===3?3:2;for(let r=0;r<12;r++)n.save(),n.rotate(r*Math.PI/6+i*.12),n.strokeStyle=`hsla(${r*30+i*45},100%,70%,.88)`,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(o*.66,-o*.47,o*.98,-o*.2,o,0),n.bezierCurveTo(o*.98,o*.2,o*.66,o*.47,0,0),n.stroke(),n.restore()}for(let i=0;i<7;i++)n.strokeStyle=`hsla(${i*51},100%,67%,.85)`,n.lineWidth=3,n.beginPath(),n.arc(0,0,222+i*3,0,Math.PI*2),n.stroke();const t=n.createRadialGradient(0,0,0,0,0,75);t.addColorStop(0,"rgba(255,255,220,1)"),t.addColorStop(.25,"rgba(255,237,120,.7)"),t.addColorStop(1,"rgba(255,100,200,0)"),n.fillStyle=t,n.fillRect(-80,-80,160,160);const e=new kt(s);return e.colorSpace=xn,e}class Na{constructor(n,t){this.scene=n,this.foreground=t,this.map=Ba();const e=i=>new B({map:this.map,transparent:!0,opacity:i,depthWrite:!1,side:nn,blending:qn,toneMapped:!1});this.muzzle=new E(new an(.2,.2),e(.85)),this.foreground.add(this.muzzle),this.core=new U(new fn(.026,8,6),new B({color:16775654,toneMapped:!1}),Rn.cap),this.ribbons=new U(new jn(.004,.024,1,5),new B({transparent:!0,opacity:.66,depthWrite:!1,blending:qn,toneMapped:!1}),Rn.cap*3),this.boltGlow=new U(new fn(.067,8,6),new B({color:9038591,transparent:!0,opacity:.16,depthWrite:!1,blending:qn,toneMapped:!1}),Rn.cap);for(const i of[this.core,this.ribbons,this.boltGlow])i.count=0,i.frustumCulled=!1,i.instanceMatrix.setUsage(en),n.add(i);this.muzzleLight=new me(16771778,0,2.2,2),this.muzzleLight.position.set(Rn.muzzleRight,-.18,-.78),t.add(this.muzzleLight),this.wave=new E(new an(2,2),e(.9)),this.wave.rotation.x=-Math.PI/2,n.add(this.wave),this.column=new E(new jn(.012,.07,1,7),new B({map:this.map,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:qn,toneMapped:!1,side:nn})),n.add(this.column),this.contactStar=new E(new an(2,2),e(.8)),this.contactStar.rotation.x=-Math.PI/2,n.add(this.contactStar),this.shockRing=new E(new On(.94,1,64),new B({color:16771765,transparent:!0,opacity:0,depthWrite:!1,side:nn,blending:qn,toneMapped:!1})),this.shockRing.rotation.x=-Math.PI/2,n.add(this.shockRing),this.fragments=new U(new yt(.045,0),new B({transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),24),this.fragments.count=0,this.fragments.frustumCulled=!1,this.fragments.instanceMatrix.setUsage(en);for(let i=0;i<24;i++)this.fragments.setColorAt(i,new $(Ai[i%7]));n.add(this.fragments),t.add(this.gunRoot,this.swordRoot);for(const i of[-1,1]){const o=this.makeHand(i);t.add(o),this.hands.push(o)}}scene;foreground;gunRoot=new D;swordRoot=new D;gun=null;sword=null;worldSword=null;hands=[];energy=[];muzzle;core;ribbons;boltGlow;muzzleLight;wave;column;contactStar;shockRing;fragments;d=new cn;map;lastImpact=0;attempt=-1;impactTime=-10;ix=0;iz=0;muzzleLocal=new z(0,0,-1);tipOffset=new z(0,1.3,0);impactYaw=0;shellGrain=null;metalNormal=null;metalRoughness=null;reduced=!1;phase="idle";humanPOV=!1;externalBolts=!1;setExternalBolts(n){this.externalBolts=n}gripPoses=[];setHumanPOV(n){this.humanPOV=n}humanGripPoses(){return this.gripPoses}liquidReactor=new Da;makeHand(n){const t=new D,e=new Map,i=new P({color:1512994,metalness:.45,roughness:.48}),o=new P({color:15789279,metalness:.35,roughness:.35}),r=new P({color:16238357,metalness:.65,roughness:.29}),a=(l,h,c)=>{const p=new un(...l);p.translate(...h);const u=e.get(c)||[];u.push(p),e.set(c,u)};a([.095,.105,.16],[0,0,0],i),a([.1,.08,.08],[0,-.015,.08],r),a([.11,.12,.29],[0,-.08,.24],o),a([.082,.065,.25],[0,-.005,.23],i);for(let l=0;l<4;l++)a([.021,.035,.082],[-.038+l*.025,.057,-.015],o),a([.021,.026,.055],[-.038+l*.025,.031,-.06],i);a([.031,.055,.065],[n*.058,.02,-.025],r);for(const[l,h]of e)t.add(new E(hn(h,!1),l)),h.forEach(c=>c.dispose());return t}addGun(n){this.gun=n,n.scale.setScalar(.48),this.gunRoot.add(n),n.updateMatrixWorld(!0);const t=n.getObjectByName("muzzle_socket");t&&(t.getWorldPosition(this.muzzleLocal),this.gunRoot.worldToLocal(this.muzzleLocal)),this.finishShells(n),n.traverse(e=>{e instanceof E&&e.name.startsWith("gun_reactor__")&&(e.material=this.liquidReactor.material)}),this.collectEnergy(n)}addSword(n){this.sword=n,n.scale.setScalar(Vn.scale),this.swordRoot.add(n),this.tipOffset.copy(Oa(n)),this.finishShells(n),this.worldSword=n.clone(!0),this.worldSword.visible=!1,this.scene.add(this.worldSword),this.collectEnergy(n)}setSurfaceMaps(n,t){this.metalNormal=n,this.metalRoughness=t;for(const e of[n,t])e.wrapS=e.wrapT=Nn,e.repeat.set(2,2);this.gun&&this.finishShells(this.gun),this.sword&&this.finishShells(this.sword)}finishShells(n){if(!this.shellGrain){const i=new Uint8Array(65536);let o=916;for(let r=0;r<16384;r++){o=Math.imul(o,1664525)+1013904223>>>0;const a=220+(o>>>27);i.set([a,a,a,255],r*4)}this.shellGrain=new wt(i,128,128),this.shellGrain.wrapS=this.shellGrain.wrapT=Nn,this.shellGrain.repeat.set(6,6),this.shellGrain.magFilter=bt,this.shellGrain.minFilter=st,this.shellGrain.generateMipmaps=!0,this.shellGrain.needsUpdate=!0}const t=new Set;n.traverse(e=>{if(e instanceof E)for(const i of Array.isArray(e.material)?e.material:[e.material]){if(!(i instanceof P)||t.has(i)||!/RK_Weapon_(Neon_Yellow|Porcelain_White|Structural_Black)/.test(i.name))continue;t.add(i),Gi(i);const o=i.name.includes("White"),r=i.name.includes("Black");i.metalness=o?.12:r?.78:.82,i.roughness=o?.48:r?.61:.4,i.envMapIntensity=.8,i.roughnessMap=this.metalRoughness||this.shellGrain,i.normalMap=this.metalNormal,i.normalScale.setScalar(o?.08:.16),i.bumpMap=this.metalNormal?null:this.shellGrain,i.bumpScale=.0012,i.needsUpdate=!0}})}collectEnergy(n){n.traverse(t=>{if(t instanceof E)for(const e of Array.isArray(t.material)?t.material:[t.material])e instanceof P&&/energy|fractal/i.test(e.name)&&!this.energy.includes(e)&&(this.energy.push(e),e.map&&(e.map.wrapS=e.map.wrapT=Nn))})}setReduced(n){this.reduced=n}get effectTexture(){return this.map}render(n,t,e){const i=gn(n);this.liquidReactor.update(n.time,n.shotFlash,this.reduced),this.attempt!==n.attemptId&&(this.attempt=n.attemptId,this.lastImpact=0,this.impactTime=-10),n.impactSerial>this.lastImpact&&(this.lastImpact=n.impactSerial,this.impactTime=n.time,this.ix=n.slamImpactX,this.iz=n.slamImpactZ,this.impactYaw=n.player.yaw),(n.phase==="dead"||n.phase==="complete")&&(this.impactTime=-10);const o=n.slam,r=o>=0,a=oe(sn.summonEnd,sn.raiseEnd,o),l=oe(sn.dissolve,sn.duration,o),h=Zi(n);this.phase=h.active?h.held?"grenade-prepare":"grenade-return":r?o<.1?"summon":o<.32?"raise":o<.5?"jump":o<.68?"downstroke":o<.95?"impact":"return":"idle";const c=Math.max(h.holster,r?o<.1?oe(0,.1,o):1-oe(.95,1.1,o):0);this.gunRoot.visible=!e&&(!r||o<.1||o>.95)&&(!h.active||h.t<.12||h.t>.37),this.gunRoot.position.set(Rn.muzzleRight-this.muzzleLocal.x,Rn.muzzleDown*-1-this.muzzleLocal.y-c*.5,-.78-this.muzzleLocal.z+n.shotFlash*.035),this.gunRoot.position.x+=Math.sin(n.time*2.1)*.006,this.gunRoot.rotation.set(n.shotFlash*.025+c*.25,0,-.025);const p=Ki(o);if(this.swordRoot.visible=!e&&r&&o>=Vn.appear&&o<Vn.handoff,this.swordRoot.position.copy(p.position),this.swordRoot.rotation.copy(p.rotation),this.swordRoot.scale.setScalar(p.scale),this.worldSword&&(this.worldSword.visible=!e&&r&&o>=Vn.handoff&&o<sn.duration,this.worldSword.visible)){const d=new z(-Math.sin(n.player.yaw),0,-Math.cos(n.player.yaw)),g=new z(o<sn.impact?n.player.x+d.x*sn.strikeForward:n.slamImpactX,i+.025,o<sn.impact?n.player.z+d.z*sn.strikeForward:n.slamImpactZ),f=Wa(o,this.tipOffset,g,t,o<sn.impact?n.player.yaw:this.impactYaw);this.worldSword.quaternion.copy(f.rotation),this.worldSword.position.copy(f.position),this.worldSword.scale.setScalar(f.scale)}if(this.gunRoot.updateMatrixWorld(!0),this.swordRoot.updateMatrixWorld(!0),this.worldSword?.updateMatrixWorld(!0),this.hands.forEach((d,g)=>{d.visible=!e,d.scale.setScalar(1);const f=g===0?-1:1;if(h.active)g===1?(d.position.set(h.x,h.y-.07,h.z+.025),d.rotation.set(h.rx+.15,h.ry,h.rz)):(d.position.set(-.18+oe(.1,.19,h.t)*.31,-.36,-.57),d.rotation.set(.22,0,-.3),d.visible=!e&&h.t<.24);else if(!r||o<.1){const v=this.gun?.getObjectByName(g===0?"gun_grip_support":"gun_grip_main");v&&v.getWorldPosition(d.position),d.position.x+=f*.023,d.rotation.set(g===0?.1:-.2,f*.13,f*.15)}else if(o<Vn.handoff){const v=this.sword?.getObjectByName(g===0?"sword_grip_support":"sword_grip_main");v&&v.getWorldPosition(d.position),d.position.x+=f*.047,d.rotation.set(.1+a*.1,f*.08,f*.18)}else{const v=this.worldSword?.getObjectByName(g===0?"sword_grip_support":"sword_grip_main");if(v&&(v.getWorldPosition(d.position),t.worldToLocal(d.position)),d.position.x+=f*.043,d.rotation.set(-.15,f*.08,f*.12),l>0){const w=this.gun?.getObjectByName(g===0?"gun_grip_support":"gun_grip_main");if(w){const k=w.getWorldPosition(new z);k.x+=f*.023,d.position.lerp(k,l)}d.quaternion.slerp(new yn().setFromEuler(new En(g===0?.1:-.2,f*.13,f*.15)),l)}}d.scale.multiplyScalar(.66)}),this.gripPoses=this.hands.map(d=>({position:d.position.clone(),quaternion:d.quaternion.clone(),visible:d.visible})),this.humanPOV){this.gunRoot.visible=!1;for(const d of this.hands)d.visible=!1}for(const d of this.energy)d.emissiveIntensity=(this.reduced?.65:.95)+Math.sin(n.time*3.5)*.12+(r?.22:0),d.map&&(d.map.offset.x=Math.sin(n.time*.3)*.035,d.map.offset.y=n.time*.022);this.muzzle.visible=!e&&!r&&!h.active&&n.shotFlash>0,this.muzzle.position.set(Rn.muzzleRight,-.18,-.78-.012),this.muzzle.rotation.z=n.shots*1.7,this.muzzle.scale.setScalar(this.reduced?.6:.9+n.shotFlash*.7),this.muzzle.visible=this.muzzle.visible&&!this.humanPOV,this.muzzleLight.intensity=this.muzzle.visible&&!this.reduced?Math.min(2.4,n.shotFlash*8):0;let u=0;this.core.count=Math.min(Rn.cap,n.friendlyBolts.length),this.boltGlow.count=this.reduced?0:this.core.count,n.friendlyBolts.slice(0,Rn.cap).forEach((d,g)=>{const f=new z(d.vx,d.vy,d.vz).normalize();this.d.position.set(d.x,d.y,d.z),this.d.quaternion.setFromUnitVectors($a,f),this.d.scale.set(.65,3.4,.65),this.d.updateMatrix(),this.core.setMatrixAt(g,this.d.matrix),this.boltGlow.setMatrixAt(g,this.d.matrix);const v=Math.min(.95,(Rn.lifetime-d.life)*Rn.speed);for(let w=0;w<3;w++)this.d.position.set(d.x,d.y,d.z).addScaledVector(f,-v*.5),this.d.position.x+=Math.sin(n.time*28+g+w*2)*.014,this.d.position.y+=Math.cos(n.time*28+g+w*2)*.014,this.d.scale.set(.55,v,.55),this.d.updateMatrix(),this.ribbons.setMatrixAt(u,this.d.matrix),this.ribbons.setColorAt(u++,new $(Ai[(g+w*2)%7]))}),this.ribbons.count=u,this.externalBolts&&(this.core.count=0,this.boltGlow.count=0,this.ribbons.count=0),this.core.instanceMatrix.needsUpdate=!0,this.boltGlow.instanceMatrix.needsUpdate=!0,this.ribbons.instanceMatrix.needsUpdate=!0,this.ribbons.instanceColor&&(this.ribbons.instanceColor.needsUpdate=!0);const m=n.time-this.impactTime;if(this.wave.visible=m>=0&&m<1.2,this.column.visible=m>=0&&m<.22&&!this.reduced,this.wave.visible&&(this.wave.position.set(this.ix,i+.038,this.iz),this.wave.scale.setScalar(.3+Math.min(1,m/.45)*19),this.wave.rotation.z=m*.12,this.wave.material.opacity=Math.max(0,1-m/1.2)*(this.reduced?.38:.95)),this.column.visible){const d=(1-m/.22)*2.8;this.column.position.set(this.ix,i+d/2,this.iz),this.column.scale.set(1,d,1),this.column.material.opacity=(1-m/.22)*.72}this.contactStar.visible=m>=0&&m<.32,this.shockRing.visible=m>=0&&m<.55,this.contactStar.visible&&(this.contactStar.position.set(this.ix,i+.043,this.iz),this.contactStar.scale.setScalar(.4+m*3),this.contactStar.material.opacity=(1-m/.32)*(this.reduced?.3:.85)),this.shockRing.visible&&(this.shockRing.position.set(this.ix,i+.046,this.iz),this.shockRing.scale.setScalar(.35+19*Math.min(1,m/.45)),this.shockRing.material.opacity=(1-m/.55)*(this.reduced?.16:.55)),this.fragments.count=!this.reduced&&m>=0&&m<.55?24:0;for(let d=0;d<this.fragments.count;d++){const g=d*2.399963,f=1.3+d%5*.33;this.d.position.set(this.ix+Math.sin(g)*m*f,i+.055+Math.max(0,(1.8+d%3*.35)*m-3.6*m*m),this.iz+Math.cos(g)*m*f),this.d.rotation.set(m*5+d,g,m*3),this.d.scale.setScalar(1-m/.55),this.d.updateMatrix(),this.fragments.setMatrixAt(d,this.d.matrix)}this.fragments.instanceMatrix.needsUpdate=!0,this.fragments.material.opacity=Math.max(0,1-m/.55)}stats(){return{surfaceProfile:Ot.id,phase:this.phase,bolts:this.core.count,boltCapacity:Rn.cap,slamWave:this.wave.visible,groundSword:this.worldSword?.visible??!1,groundTip:this.worldSword?.visible?this.worldSword.getObjectByName("sword_tip")?.getWorldPosition(new z).toArray():null,handCount:this.hands.length,reducedEffects:this.reduced,impactFragments:this.fragments.count,fragmentCapacity:24,contactStar:this.contactStar.visible,shellTextureSize:128}}}const Bn={color:1574671,floorSize:192,snap:16,period:12,fadeNear:24,fadeFar:62},Ii=(s,n)=>(s%n+n)%n;function Ri(s,n,t=0){return{flow:[Ii(s/Bn.period+t*.008,1),Ii(n/Bn.period-t*.004,1)],glyphCell:[Math.floor(s/.9),Math.floor(n/1.3)]}}function Ga(){const n=new Uint8Array(1048576),t=Math.PI*2;for(let i=0;i<512;i++)for(let o=0;o<512;o++){const r=o/512*t,a=i/512*t,l=Math.sin(r+Math.sin(a)*1.8)+.5*Math.sin(2*a-r),h=Math.sin(2*r+a+l)+.5*Math.sin(r-3*a+l*.7),c=Math.sin(7*r-5*a+h*3)+.45*Math.cos(11*r+7*a+l*2),p=(i*512+o)*4;n[p]=Math.round(128+h*69),n[p+1]=Math.round(128+c*75),n[p+2]=Math.round(128+Math.sin(3*r+2*a+l)*120),n[p+3]=255}const e=new wt(n,512,512,qe);return e.name="red-infinity-seamless-flow",e.wrapS=e.wrapT=Nn,e.magFilter=bt,e.minFilter=st,e.generateMipmaps=!0,e.needsUpdate=!0,e}function Ua(){const t=new Uint8Array(2048),e=[["01110","11011","11011","11011","11011","11011","01110"],["00100","01100","00100","00100","00100","00100","01110"]];for(let o=0;o<2;o++)for(let r=0;r<7;r++)for(let a=0;a<5;a++)if(e[o][r][a]==="1")for(let l=0;l<2;l++)for(let h=0;h<2;h++){const c=((13-r*2+l)*32+o*16+3+a*2+h)*4;t[c]=t[c+1]=t[c+2]=t[c+3]=255}const i=new wt(t,32,16,qe);return i.name="red-infinity-binary-01",i.magFilter=A0,i.minFilter=st,i.generateMipmaps=!0,i.needsUpdate=!0,i}const Ha=`
varying vec3 vArenaWorld;
void main(){
 vec4 world=modelMatrix*vec4(position,1.0);
 vArenaWorld=world.xyz;
 gl_Position=projectionMatrix*viewMatrix*world;
}`,qa=`
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
}`;class Va{mesh;fallback=new B({color:4330273,fog:!0,toneMapped:!1});shader=null;textures=[];mode="liquid";failure=null;time=0;reduced=!1;warmed=!1;constructor(){this.fallback.name="red-infinity-flat-fallback",this.mesh=new E(new an(Bn.floorSize,Bn.floorSize).rotateX(-Math.PI/2),this.fallback),this.mesh.name="red-infinity-reused-ground",this.mesh.frustumCulled=!1,this.mesh.visible=!1;try{const n=Ga();this.textures.push(n);const t=Ua();this.textures.push(t),this.shader=new we({name:"red-infinity-liquid-binary",vertexShader:Ha,fragmentShader:qa,depthWrite:!0,transparent:!1,toneMapped:!1,uniforms:{flowMap:{value:n},glyphMap:{value:t},arenaTime:{value:0},debugGrid:{value:0},horizonColor:{value:new $(Bn.color)}}}),this.mesh.material=this.shader}catch{this.fail("texture-creation")}}fail(n){this.failure=n,this.mesh.material=this.fallback}setMode(n){this.mode=n,this.applyMode()}setReduced(n){this.reduced=n,this.applyMode()}setHorizon(n){this.shader&&this.shader.uniforms.horizonColor.value.copy(n)}applyMode(){this.mesh.material=!this.failure&&!this.reduced&&this.mode!=="flat"&&this.shader?this.shader:this.fallback,this.shader&&(this.shader.uniforms.debugGrid.value=this.mode==="grid"?1:0)}warm(n){if(this.warmed)return;this.warmed=!0;const t=new Xt,e=new ae(75,1,.1,8),i=new E(this.mesh.geometry,this.shader??this.fallback);t.add(i),e.position.set(0,2,1),e.lookAt(0,0,0);const o=new Wi(4,4),r=n.getRenderTarget(),a=n.debug.onShaderError;n.debug.onShaderError=(l,h,c,p)=>{l.getShaderSource(p)?.includes("RK_RED_INFINITY_SURFACE")?this.fail("shader-compile"):a?a(l,h,c,p):console.error("Shader compilation failed while preparing arena.")};try{n.setRenderTarget(o),n.compile(t,e),n.render(t,e)}catch{this.fail("shader-warmup")}finally{n.setRenderTarget(r),n.debug.onShaderError=a,o.dispose(),this.applyMode()}}update(n,t,e){this.mesh.position.set(Math.round(n/Bn.snap)*Bn.snap,0,Math.round(t/Bn.snap)*Bn.snap),this.time=this.mode==="static"?0:e,this.shader&&(this.shader.uniforms.arenaTime.value=this.time)}stats(){return{mode:this.mesh.material===this.fallback?"flat":this.mode,requestedMode:this.mode,failure:this.failure,warmed:this.warmed,visible:this.mesh.visible,center:{x:this.mesh.position.x,y:this.mesh.position.y,z:this.mesh.position.z},size:Bn.floorSize,geometryCount:1,triangles:2,textures:this.textures.length,textureSizes:this.textures.map(n=>({width:n.image.width,height:n.image.height})),textureBytesWithMipmaps:Math.ceil((512*512*4+512*4)*4/3),animationTime:this.time,patternAtOrigin:Ri(0,0,this.time),patternAtNegativeMark:Ri(-17.25,-9.75,this.time)}}dispose(){this.shader?.dispose(),this.fallback.dispose();for(const n of this.textures)n.dispose();this.mesh.geometry.dispose()}}const Ya=[15828937,10941663,12886266,16769722,15621876,10333695],rn=new cn;function p0(s,n=.35,t=.42){return new P({color:s,metalness:n,roughness:t})}function je(s,n=1){return new P({color:s,emissive:s,emissiveIntensity:n,metalness:.25,roughness:.3})}class Xa{constructor(n,t="grin",e=!1,i=So()){this.bossMode=t,this.twoLevelMode=e,this.visualVT1=i,this.renderer=new bo({canvas:n,antialias:!1,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=xn,this.renderer.toneMapping=yo,this.renderer.toneMappingExposure=.92,this.renderer.autoClear=!1,this.renderer.info.autoReset=!1,this.scene.background=new $(2497330),this.scene.fog=new Xn(2497330,14,36);const o=new g0(this.renderer),r=new xo;this.envTarget=o.fromScene(r,.06),this.scene.environment=this.envTarget.texture,this.foreground.environment=this.envTarget.texture,r.dispose(),o.dispose(),this.scene.add(this.legacyLights),this.legacyLights.add(new Kn(14540799,3287100,.62));const a=new Gn(16771541,2.25);a.position.set(-4,8,4),this.legacyLights.add(a);const l=new Gn(10083583,.65);l.position.set(5,3,-5),this.legacyLights.add(l),this.foreground.add(new Kn(16774626,5465216,1.05));const h=new Gn(16777215,2);h.position.set(-1,3,3),this.foreground.add(h),this.makeArena(),this.forestGrotto=new di(this.scene),this.g2Boss=this.twoLevelMode?new No:null,this.levelTwo=new ka(this.scene,this.g2Boss),this.scene.add(this.redFloor.mesh),this.scene.add(this.neonSky.mesh);const c=new URLSearchParams(location.search).get("arena_surface");(c==="liquid"||c==="static"||c==="flat"||c==="grid")&&this.redFloor.setMode(c),this.fractal=new Na(this.scene,this.foreground),this.twoLevelMode&&(this.g2Hearts=new Js,this.human=new aa,this.human.scene.environment=this.envTarget.texture,this.twoWorlds=new ca(this.scene,this.visualVT1),this.fractal.setHumanPOV(!0),this.fractal.setExternalBolts(!0),this.neuralCrowd=new Ys(this.scene,this.assets,"articulated",this.visualVT1)),this.grenade=new Fa(this.scene,this.foreground),this.hitEffects=new Ca(this.scene,this.fractal.effectTexture,this.twoLevelMode),this.bullets=new U(new Wt(.095,1),je(16746475,3),C.projectileCap),this.bullets.instanceMatrix.setUsage(en),this.bullets.frustumCulled=!1,this.scene.add(this.bullets),this.bullets.count=0,this.shadowPool=new U(new vt(.46,16),new B({color:1510695,transparent:!0,opacity:.28,depthWrite:!1}),C.hardCap),this.shadowPool.instanceMatrix.setUsage(en),this.shadowPool.frustumCulled=!1,this.scene.add(this.shadowPool),this.shadowPool.count=0,this.shooterWarnings=new U(new On(.14,.2,20),new B({color:16729316,side:nn,transparent:!0,opacity:.85}),C.hardCap),this.shooterWarnings.instanceMatrix.setUsage(en),this.shooterWarnings.frustumCulled=!1,this.shooterWarnings.count=0,this.scene.add(this.shooterWarnings),this.bossLane=new E(new an(2.72,1).rotateX(-Math.PI/2),new B({color:16727454,transparent:!0,opacity:.35,depthWrite:!1,side:nn})),this.bossLane.visible=!1,this.scene.add(this.bossLane)}bossMode;twoLevelMode;visualVT1;assets=new h0(2);stageAssets=new h0(2);stageLoadGeneration=0;disposed=!1;enhancementLoad=null;levelTwoLoad=null;environmentLoad=null;environmentGPUReady=!1;forestEnvironmentActive=!1;legacyLights=new D;legacyEnvironmentIntensity=1;legacyForegroundIntensity=1;instanceColor=new $;markerPosition=new z;previewEnemies=[{id:1,role:"chaser",x:0,z:-.8},{id:2,role:"shooter",x:1.6,z:-2.4},{id:3,role:"chaser",x:-1.4,z:-2.3}].map(n=>({...n,age:0,flash:0,radius:.44,health:42,maxHealth:42,shotTimer:1,heading:0}));renderer;scene=new Xt;camera=new ae(76,1,.06,80);foreground=new Xt;viewCamera=new ae(76,1,.01,10);loaded=[];enemyPools={chaser:[],shooter:[]};shadowPool;shooterWarnings;bullets;boss=null;grin=null;hitEffects;fractal;human=null;g2Hearts=null;g2Boss=null;twoWorlds=null;neuralCrowd=null;resetCrowdPresentation(){this.neuralCrowd?.reset()}neuralMuzzle(){return this.human?.muzzle(this.camera)??null}grenade;bossGlow=[];musicMaterials=[];musicLevel=0;bossLane;envTarget;viewport={width:1280,height:720};arenaWalls=[];enclosedFloor=new D;floorMaterial=null;wallMaterial=null;arenaDetails;levelTwo;levelThree=null;levelFour=null;levelFourError=null;labActive=!1;labBackground=new $(2631224);labFog=new Xn(2631224,18,36);oceanActive=!1;oceanBackground=new $(9743798);oceanFog=new Xn(9743798,340,670);forestGrotto;themedStage=1;levelTwoError=null;environmentError=null;get levelTwoReady(){return this.levelTwo.stats().loaded}get environmentReady(){return this.environmentGPUReady&&this.forestGrotto.stats().loaded&&this.levelTwoReady}levelTwoStats(){return this.levelTwo.stats()}environmentStats(){return{...this.forestGrotto.stats(),gpuReady:this.environmentGPUReady,error:this.environmentError}}enclosedFloorState=[];redFloor=new Va;neonSky=new da;arenaActive=!1;arenaCollapse=0;arenaAttempt=-1;arenaTime=0;normalBackground=new $(2497330);normalFog=new Xn(2497330,14,36);arenaFog=new Xn(Bn.color,48,74);arenaBackground=new $(Bn.color);arenaColor=new $;reducedEffects=!1;frames=0;box(n,t,e,i,o,r,a,l=this.scene){const h=new un(n,t,e);if(a===this.wallMaterial){const p=h.getAttribute("uv");for(let u=0;u<p.count;u++)p.setXY(u,p.getX(u)*Math.max(n,e)/2,p.getY(u)*t/2)}const c=new E(h,a);return c.position.set(i-l.position.x,o-l.position.y,r-l.position.z),l.add(c),c}makeArena(){const{width:n,depth:t}=C;this.enclosedFloor.name="accepted-enclosed-floor",this.scene.add(this.enclosedFloor);for(const[M,y,b,S]of[[0,-t/2,"x",-1],[0,t/2,"x",1],[-n/2,0,"z",1],[n/2,0,"z",-1]]){const _=new D;_.name=`collapsing-wall-${this.arenaWalls.length}`,_.position.set(M,0,y),this.scene.add(_),this.arenaWalls.push({group:_,axis:b,sign:S,position:_.position.clone(),rotation:_.rotation.clone(),visible:!0})}const[e,i,o,r]=this.arenaWalls.map(M=>M.group),a=p0(8749714,.12,.76);this.floorMaterial=a,this.box(n,.2,t,0,-.1,0,a,this.enclosedFloor);const l=p0(12366282,.84,.42),h=p0(2169648,.7,.4);this.wallMaterial=l;const c=je(15562460,1.2),p=je(10285013,1.1),u=c.clone(),m=p.clone();this.musicMaterials.push({material:u,base:1.2},{material:m,base:1.1}),this.box(n+.3,4.8,.2,0,2.4,-t/2,l,e),this.box(n+.3,4.8,.2,0,2.4,t/2,l,i),this.box(.2,4.8,t,-n/2,2.4,0,l,o),this.box(.2,4.8,t,n/2,2.4,0,l,r);for(const M of[-t/2+.12,t/2-.12]){const y=M<0?e:i;this.box(n,.085,.06,0,.14,M,c,y),this.box(n,.07,.05,0,3.5,M,m,y);for(let b=-6;b<=6;b+=2)this.box(.06,4.5,.07,b,2.25,M,h,y),this.box(.025,1.3,.08,b,.85,M,c,y)}for(const M of[-n/2+.12,n/2-.12]){const y=M<0?o:r;this.box(.05,.08,t,M,.14,0,p,y),this.box(.05,.07,t,M,3.5,0,u,y);for(let b=-6;b<=6;b+=2)this.box(.07,4.5,.06,M,2.25,b,h,y),this.box(.08,1.3,.025,M,.85,b,p,y)}const d=new vo(14,28,14126542,7889531);d.position.y=.012,d.scale.x=n/14,d.scale.z=t/14,d.material.transparent=!0,d.material.opacity=.09,this.enclosedFloor.add(d);for(let M=0;M<3;M++){const y=new E(new On(1.65+M*.12,1.67+M*.12,96),new B({color:Ya[M],transparent:!0,opacity:.5,side:nn}));y.rotation.x=-Math.PI/2,y.position.y=.02,this.enclosedFloor.add(y)}const g=document.createElement("canvas");g.width=1024,g.height=256;const f=g.getContext("2d");f.clearRect(0,0,1024,256),f.textAlign="center",f.fillStyle="#ecb9e4",f.font="900 83px Arial",f.fillText("EVERYONE APPROVES.",512,110),f.fillStyle="#a6e2d9",f.font="28px monospace",f.fillText("01   /   SYCOPHANCY",512,176);const v=new kt(g);v.colorSpace=xn;const w=new E(new an(6.6,1.65),new B({map:v,transparent:!0,depthWrite:!1}));w.position.set(0,3.18,.15),e.add(w);const k=je(16361948,.7);this.musicMaterials.push({material:k,base:.7});for(const M of[-4.5,4.5]){const y=new E(new vn(.5,.035,6,32),k);y.position.set(M,2.6,.2),e.add(y);for(const S of[-.15,.15])this.box(.05,.14,.045,M+S,2.7,-t/2+.23,k,e);const b=new E(new vn(.27,.026,4,20,Math.PI),k);b.rotation.z=Math.PI,b.position.set(M,2.59,.23),e.add(b)}this.arenaDetails=new ma(this.arenaWalls.map(M=>M.group),this.enclosedFloor,n,t),this.enclosedFloor.traverse(M=>{if(M instanceof E||M instanceof Oi)for(const y of Array.isArray(M.material)?M.material:[M.material])this.enclosedFloorState.push({material:y,opacity:y.opacity,transparent:y.transparent,depthWrite:y.depthWrite,polygonOffset:y.polygonOffset,polygonOffsetFactor:y.polygonOffsetFactor,polygonOffsetUnits:y.polygonOffsetUnits})})}updateArena(n,t){if(!(!t&&n.arena.mode==="red_infinity"&&n.arena.active&&["reveal","boss","defeat"].includes(n.phase))){if(this.arenaActive){for(const l of this.arenaWalls)l.group.position.copy(l.position),l.group.rotation.copy(l.rotation),l.group.visible=l.visible;for(const l of this.enclosedFloorState){const h=l.material.transparent!==l.transparent;Object.assign(l.material,{opacity:l.opacity,transparent:l.transparent,depthWrite:l.depthWrite,polygonOffset:l.polygonOffset,polygonOffsetFactor:l.polygonOffsetFactor,polygonOffsetUnits:l.polygonOffsetUnits}),h&&(l.material.needsUpdate=!0)}this.enclosedFloor.traverse(l=>{l.renderOrder=0}),this.enclosedFloor.visible=!0,this.scene.background=this.normalBackground,this.scene.fog=this.normalFog}this.redFloor.mesh.visible=!1,this.arenaActive=!1,this.arenaCollapse=0,this.arenaAttempt=-1,this.arenaTime=0;return}(this.arenaAttempt!==n.attemptId||!this.arenaActive)&&(this.arenaAttempt=n.attemptId,this.arenaTime=n.time),this.arenaActive=!0;const i=n.phase==="reveal"?Math.min(1,Math.max(0,n.phaseTime/dn.revealSeconds)):1,o=Math.min(1,i/.88),r=o*o*(3-2*o)*95*Math.PI/180;this.arenaCollapse=i;for(const l of this.arenaWalls)l.group.rotation[l.axis]=l.rotation[l.axis]+l.sign*r,l.group.position.y=l.position.y-Math.max(0,(i-.7)/.3)*.5,l.group.visible=i<.97;const a=Math.min(1,i/.8);if(this.enclosedFloor.visible=a<1,a<1){for(const l of this.enclosedFloorState){const h=!l.material.transparent;l.material.transparent=!0,l.material.depthWrite=!1,l.material.opacity=l.opacity*(1-a),l.material.polygonOffset=!0,l.material.polygonOffsetFactor=-1,l.material.polygonOffsetUnits=-1,h&&(l.material.needsUpdate=!0)}this.enclosedFloor.traverse(l=>{l.renderOrder=1})}this.redFloor.mesh.visible=!0,this.redFloor.update(n.player.x,n.player.z,n.time-this.arenaTime),this.arenaColor.copy(this.normalBackground).lerp(this.arenaBackground,a),this.scene.background=this.arenaColor,this.arenaFog.color.copy(this.arenaColor),this.arenaFog.near=14+34*a,this.arenaFog.far=36+38*a,this.scene.fog=this.arenaFog,this.redFloor.setHorizon(this.arenaColor)}async loadAssets(n){this.g2Boss&&await this.g2Boss.load(this.assets),this.neuralCrowd&&(await this.neuralCrowd.load(),this.loaded.push("all-eighteen-neural-identities"),n("all-eighteen-neural-identities")),this.visualVT1&&this.twoWorlds&&(await this.twoWorlds.load(this.assets,this.renderer),this.loaded.push("vt1-authored-atrium"),n("vt1-authored-atrium"));for(const t of["smile-chaser","smile-shooter",this.bossMode==="classic"?"grin-orb":"grin-orb-v2",...this.bossMode==="grin"?["smile-orb"]:[],"machine-gun-v2","rainbow-sword-v2"]){const e=this.twoLevelMode&&t==="grin-orb-v2"?"/assets/graphics-g2/grin-visual.glb":`/assets/${t}.glb`,i=await gt(this.assets,e);if(i.updateMatrixWorld(!0),t==="smile-chaser"||t==="smile-shooter"){const o=t==="smile-chaser"?"chaser":"shooter",r=new Map;i.traverse(a=>{if(!(a instanceof E))return;const l=a.material,h=a.geometry.clone().applyMatrix4(a.matrixWorld);h.deleteAttribute("uv"),h.deleteAttribute("tangent"),h.deleteAttribute("color");const c=l.name||l.uuid,p=r.get(c)||{mat:l,geoms:[]};p.geoms.push(h),r.set(c,p)});for(const a of r.values()){const l=hn(a.geoms,!1);if(!l)throw new Error("Cannot merge enemy geometry");const h=a.mat.clone();h instanceof P&&(h.roughness=Math.max(h.roughness,.3),h.envMapIntensity=.65);const c=new U(l,h,C.hardCap);c.instanceMatrix.setUsage(en),c.frustumCulled=!1,c.count=0,this.enemyPools[o].push(c),this.scene.add(c),a.geoms.forEach(p=>p.dispose())}i.traverse(a=>{if(a instanceof E){a.geometry.dispose();for(const l of Array.isArray(a.material)?a.material:[a.material])l.dispose()}})}else t==="grin-orb"||t==="grin-orb-v2"?(this.g2Boss?.apply(i),this.boss=i,i.visible=!1,this.scene.add(i),t==="grin-orb-v2"&&(this.grin=new Pa(this.scene,i)),i.traverse(o=>{o instanceof E&&o.material instanceof P&&o.material.name==="RK_Magenta_Emission"&&!this.bossGlow.includes(o.material)&&this.bossGlow.push(o.material)})):t==="smile-orb"?this.grin.addProjectileAsset(i):t==="machine-gun-v2"?this.fractal.addGun(i):this.fractal.addSword(i);this.loaded.push(t),n(t)}this.redFloor.warm(this.renderer)}preloadStage(n,t=()=>{}){if(n===3)return this.levelThree||(this.levelThree=new Mi,this.scene.add(this.levelThree.group)),Promise.resolve();if(n===4){if(!this.levelFour&&!this.levelFourError)try{this.levelFour=new Ea,this.scene.add(this.levelFour.group),this.loaded.includes("offloading")||this.loaded.push("offloading"),t("offloading")}catch(i){this.levelFourError="Level 4 art could not initialize. Retry loading or return to the menu.",console.warn(this.levelFourError,i)}return Promise.resolve()}if(Ro(n).assets!=="anthropomorphism")return Promise.resolve();if(this.levelTwoLoad)return this.levelTwoLoad;const e=this.stageLoadGeneration;return this.levelTwoLoad=this.levelTwo.load(this.stageAssets).then(()=>{this.disposed||e!==this.stageLoadGeneration||(this.loaded.includes("anthropomorphism")||this.loaded.push("anthropomorphism"),t("anthropomorphism"))}).catch(i=>{this.disposed||e!==this.stageLoadGeneration||(this.levelTwoError="Level 2 art could not load. Retry loading or return to the menu.",console.warn(this.levelTwoError,i))}),this.levelTwoLoad}stageReady(n){return n===4?!!this.levelFour&&!this.levelFourError:n===2?this.levelTwoReady:!0}stageError(n){return n===4?this.levelFourError:n===2?this.levelTwoError:null}retryStage(n,t=!1){n===2&&this.retryStageTwo(t),n===4&&(this.levelFour?.dispose(),this.levelFour=null,this.levelFourError=null,this.preloadStage(n))}preloadEnvironment(n=()=>{}){const t=this.stageLoadGeneration;return this.environmentLoad??=this.prepareEnvironment(n).catch(e=>{throw!this.disposed&&t===this.stageLoadGeneration&&(this.environmentError="The forest and grotto could not load. Retry loading or return to the menu."),e})}async prepareEnvironment(n){const t=this.stageLoadGeneration,e=this.forestGrotto,i=this.levelTwo,o=this.stageAssets,r=()=>this.disposed||t!==this.stageLoadGeneration;if(await this.preloadStage(2,n),r()||!i.stats().loaded)throw new Error("Level 2 actors unavailable");if(await e.load(o,this.renderer),r())throw new Error("Stage load superseded");if(await o.load("forest-grotto-gpu",async a=>{const l=new Set(e.textureSet());i.root.traverse(f=>{if(f instanceof E)for(const v of Array.isArray(f.material)?f.material:[f.material])for(const w of Object.values(v))w instanceof jt&&l.add(w)});for(const f of l)this.renderer.initTexture(f);const h=new Xt,c=e.root.clone(!0),p=i.root.clone(!0);h.environment=e.environmentTexture(),h.add(c,p);for(const f of[c,p])f.traverse(v=>{v.visible=!0,v instanceof E&&(v.frustumCulled=!1,v instanceof U&&v.count===0&&(v.count=1))});const u=c.getObjectByName("sunrise-pine-clearing"),m=c.getObjectByName("dry-shaft-grotto"),d=new Wi(2,2),g=new ae(76,1,.05,90);try{for(const f of[!0,!1]){if(a.aborted||r())throw new Error("Environment warmup cancelled");if(u.visible=f,m.visible=!f,h.environmentIntensity=f?.58:.35,h.fog=new Xn(f?14076848:2369075,f?22:24,f?59:55),g.position.set(0,f?1.62:-16.38,3.9),g.lookAt(0,f?1.5:-16.5,-2),this.renderer.compile(h,g),a.aborted||r())throw new Error("Environment warmup cancelled");const v=this.renderer.getRenderTarget();try{this.renderer.setRenderTarget(d),this.renderer.clear(),this.renderer.render(h,g)}finally{this.renderer.setRenderTarget(v)}}}finally{d.dispose(),h.traverse(f=>{f instanceof U&&f.dispose()}),h.clear()}},()=>{},2e4),r())throw new Error("Stage load superseded");this.environmentGPUReady=!0,this.loaded.includes("forest-grotto")||this.loaded.push("forest-grotto"),n("forest-grotto")}retryStageTwo(n=!1){if(this.stageLoadGeneration++,this.stageAssets.dispose(),this.stageAssets=new h0(2),this.levelTwoLoad=null,this.environmentLoad=null,this.levelTwoError=null,this.environmentError=null,this.environmentGPUReady=!1,n||!this.forestGrotto.stats().loaded){const t=this.forestGrotto;t.dispose(),t.root.removeFromParent();const e=t.resources();t.root.traverse(i=>{i instanceof U&&i.dispose()}),e.geometries.forEach(i=>i.dispose()),e.materials.forEach(i=>i.dispose()),e.textures.forEach(i=>i.dispose()),this.forestGrotto=new di(this.scene)}}loadEnhancements(n=()=>{}){return this.enhancementLoad??=this.enhance(n)}async enhance(n){try{const t=await gt(this.assets,"/assets/binary-grenade.glb",8e3);this.grenade.addAsset(t),this.loaded.push("binary-grenade"),n("binary-grenade")}catch(t){if(this.disposed)return;console.warn("Binary grenade uses readable fallback; authored art did not load.",t),n("binary-grenade fallback")}if(this.grin){try{const t=await gt(this.assets,"/assets/super-like.glb",8e3);this.grin.addSuperLikeAsset(t),this.loaded.push("super-like"),n("super-like")}catch(t){if(this.disposed)return;console.warn("Super Like uses readable fallback; authored art did not load.",t),n("super-like fallback")}this.grin.setReduced(this.reducedEffects)}if(await this.loadPhotographicSurfaces(),this.twoWorlds&&await this.twoWorlds.load(this.assets,this.renderer),!this.disposed&&(await this.arenaDetails.load(this.assets),!this.disposed))try{const t=await w0(this.assets,"/assets/pbr/approaching_storm_2k.hdr");this.neonSky.setTexture(t)}catch(t){this.disposed||console.warn("Cloud photograph unavailable; using the procedural eclipse sky.",t)}}async loadPhotographicSurfaces(){const n="/assets/pbr/",t=async(i,o=1,r=o)=>{const a=await xt(this.assets,n+i);return a.wrapS=a.wrapT=Nn,a.repeat.set(o,r),a.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),a},e=[];try{const i=await t("metal_plate_02_nor_gl_1k.jpg");e.push(i);const o=await t("metal_plate_02_rough_1k.jpg");e.push(o),this.fractal.setSurfaceMaps(i,o),this.wallMaterial&&(this.wallMaterial.normalMap=i,this.wallMaterial.roughnessMap=o,this.wallMaterial.normalScale.set(.16,.16),this.wallMaterial.needsUpdate=!0),e.length=0;const r=await t("concrete_floor_diff_1k.jpg",C.width/2.1,C.depth/2.1);e.push(r),r.colorSpace=xn;const a=await t("concrete_floor_nor_gl_1k.jpg",C.width/2.1,C.depth/2.1);e.push(a);const l=await t("concrete_floor_rough_1k.jpg",C.width/2.1,C.depth/2.1);e.push(l),this.floorMaterial&&(Object.assign(this.floorMaterial,{map:r,normalMap:a,roughnessMap:l,envMapIntensity:.55}),this.floorMaterial.normalScale.set(.38,.38),this.floorMaterial.needsUpdate=!0,e.length=0)}catch(i){this.disposed||console.warn("Photographic surface maps unavailable; using base materials.",i)}finally{e.forEach(i=>i.dispose())}if(!this.disposed)try{const i=await w0(this.assets,n+"studio_small_01_1k.hdr"),o=new g0(this.renderer);try{const r=o.fromEquirectangular(i);this.envTarget.dispose(),this.envTarget=r,this.forestEnvironmentActive||(this.scene.environment=this.foreground.environment=r.texture),this.legacyEnvironmentIntensity=.55,this.legacyForegroundIntensity=.85,this.forestEnvironmentActive||(this.scene.environmentIntensity=.55,this.foreground.environmentIntensity=.85),this.scene.environmentRotation.y=this.foreground.environmentRotation.y=.65}finally{i.dispose(),o.dispose()}}catch(i){this.disposed||console.warn("Studio reflection map unavailable; using room reflections.",i)}}setTouchProfile(n){this.renderer.setPixelRatio(Math.min(devicePixelRatio,n?1:1.5))}resize(n,t){this.viewport={width:n,height:t},this.human?.resize(n,t),this.g2Hearts?.resize(n,t),this.renderer.setSize(n,t,!1),this.camera.aspect=n/t,this.camera.updateProjectionMatrix(),this.viewCamera.aspect=n/t,this.viewCamera.updateProjectionMatrix()}render(n,t,e=!1,i=!1){this.frames++,this.themedStage!==n.stage&&(this.themedStage=n.stage,this.floorMaterial?.color.setHex(n.stage===2?5126214:8749714),this.wallMaterial?.color.setHex(n.stage===2?6634064:12366282),this.normalBackground.setHex(n.stage===2?2364198:2497330),this.normalFog.color.copy(this.normalBackground)),this.updateArena(n,e);const o=n.stage===3,r=n.stage===4;if(!o&&this.oceanActive||!r&&this.labActive){this.enclosedFloor.visible=!this.arenaActive;for(const d of this.arenaWalls)d.group.visible=!this.arenaActive&&d.visible;this.scene.background=this.arenaActive?this.arenaColor:this.normalBackground,this.scene.fog=this.arenaActive?this.arenaFog:this.normalFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=this.legacyEnvironmentIntensity,this.foreground.environmentIntensity=this.legacyForegroundIntensity}const a=this.forestGrotto.update(n,e,this.scene);if(this.legacyLights.visible=!a&&!o&&!r,a){this.enclosedFloor.visible=!1;for(const d of this.arenaWalls)d.group.visible=!1;this.redFloor.mesh.visible=!1,this.foreground.environment=this.forestGrotto.environmentTexture(),this.foreground.environmentIntensity=.7}else if(this.forestEnvironmentActive){this.enclosedFloor.visible=!0;for(const d of this.arenaWalls)d.group.visible=d.visible;this.scene.background=this.normalBackground,this.scene.fog=this.normalFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=this.legacyEnvironmentIntensity,this.foreground.environmentIntensity=this.legacyForegroundIntensity}if(this.forestEnvironmentActive=a,o){this.levelThree||(this.levelThree=new Mi,this.scene.add(this.levelThree.group)),this.enclosedFloor.visible=!1;for(const d of this.arenaWalls)d.group.visible=!1;this.redFloor.mesh.visible=!1,this.scene.background=this.oceanBackground,this.scene.fog=this.oceanFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=.35,this.foreground.environmentIntensity=.7}if(this.oceanActive=o,this.levelThree&&(this.levelThree.group.visible=o,o&&this.levelThree.update(n,this.reducedEffects)),r){!this.levelFour&&!this.levelFourError&&this.preloadStage(4),this.enclosedFloor.visible=!1;for(const d of this.arenaWalls)d.group.visible=!1;this.redFloor.mesh.visible=!1,this.scene.background=this.labBackground,this.scene.fog=this.labFog,this.scene.environment=this.foreground.environment=this.envTarget.texture,this.scene.environmentIntensity=.28,this.foreground.environmentIntensity=.7}this.labActive=r,this.levelFour&&(this.levelFour.group.visible=r,r&&this.levelFour.update(n,this.reducedEffects));const l=o?800:80;this.camera.far!==l&&(this.camera.far=l,this.camera.updateProjectionMatrix());const h=n.slam-sn.impact,c=76+(!e&&!this.reducedEffects&&h>=0&&h<.18?Math.sin(h/.18*Math.PI)*1.25:0);if(this.camera.fov!==c&&(this.camera.fov=this.viewCamera.fov=c,this.camera.updateProjectionMatrix(),this.viewCamera.updateProjectionMatrix()),this.camera.rotation.order="YXZ",this.camera.position.set(n.player.x,(n.player.eyeHeight??C.eyeHeight)+n.player.y,n.player.z),this.camera.rotation.set(n.player.pitch,n.player.yaw,Math.sin(n.time*14)*n.player.dash*.018),e){const d=a?gn(n):0;this.camera.position.set(3.7,d+1.85,5.6),this.camera.lookAt(0,d+1.1,-1.2)}if(e&&o&&(this.camera.position.set(0,1.6,X.spawnZ),this.camera.lookAt(0,2,X.islandZ)),this.neonSky.update(this.camera,n.time,this.arenaActive?this.arenaColor:this.normalBackground,this.arenaCollapse,this.reducedEffects),this.neonSky.mesh.visible=!a&&!o&&!r,this.twoWorlds&&(this.twoWorlds.update(n,e),n.stage===1)){this.enclosedFloor.visible=!1;for(const d of this.arenaWalls)d.group.visible=!1;this.legacyLights.visible=!1,this.redFloor.mesh.visible=!1,this.neonSky.mesh.visible=!1,this.scene.environment=this.envTarget.texture}if(e)for(const d of this.previewEnemies)d.age=n.time,d.heading=Math.atan2(this.camera.position.x-d.x,this.camera.position.z-d.z);const p=this.twoLevelMode&&!e?[]:n.stage!==1?[]:e?this.previewEnemies:n.enemies;for(const d of["chaser","shooter"]){const g=p.filter(v=>v.role===d),f=g.map(He);for(const v of this.enemyPools[d])v.count=g.length,g.forEach((w,k)=>{const M=f[k];rn.position.set(w.x,M.y,w.z),rn.rotation.set(0,M.yaw,M.roll),rn.scale.setScalar(1),rn.updateMatrix(),v.setMatrixAt(k,rn.matrix),v.setColorAt(k,this.instanceColor.setHex(w.flash>0?16770790:16777215))}),v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0)}this.shadowPool.count=p.length;const u=this.twoLevelMode||e||n.stage===2||r?[]:n.enemies.filter(d=>d.role==="shooter"&&d.shotTimer<.55&&!(d.stasis&&n.time<d.stasis.until));this.shooterWarnings.count=u.length,u.forEach((d,g)=>{const f=Math.atan2(n.player.x-d.x,n.player.z-d.z);rn.position.set(d.x+Math.sin(f)*.6,1.38,d.z+Math.cos(f)*.6),rn.rotation.set(0,f,0),rn.scale.setScalar(1+(1-d.shotTimer/.55)*1.5),rn.updateMatrix(),this.shooterWarnings.setMatrixAt(g,rn.matrix)}),this.shooterWarnings.instanceMatrix.needsUpdate=!0,p.forEach((d,g)=>{rn.position.set(d.x,.025,d.z),rn.rotation.set(-Math.PI/2,0,0),rn.scale.set(1,1,1),rn.updateMatrix(),this.shadowPool.setMatrixAt(g,rn.matrix)}),this.shadowPool.instanceMatrix.needsUpdate=!0;const m=(this.grin?n.projectiles.filter(d=>d.owner!=="boss"):n.projectiles).filter(d=>d.kind!=="mask"&&d.kind!=="brain"&&!(this.twoLevelMode&&this.neuralCrowd&&d.neural&&d.owner!=="boss"));if(this.bullets.count=m.length,m.forEach((d,g)=>{rn.position.set(d.x,d.y,d.z),rn.rotation.set(n.time*5,g,n.time*3),rn.scale.setScalar(d.neural?(d.radius??.12)/.095:1),rn.updateMatrix(),this.bullets.setMatrixAt(g,rn.matrix)}),this.bullets.instanceMatrix.needsUpdate=!0,this.grin)this.grin.render(n);else if(this.boss&&(this.boss.visible=!!n.boss&&n.boss.variant==="classic"&&n.boss.health>0,n.boss)){const d=n.boss,g=!!d.stasis&&n.time<d.stasis.until,f=g?d.stasis.poseTime:d.presentationTime??n.time;this.boss.position.set(d.x,d.y+Math.sin(f*2)*.1,d.z),this.boss.rotation.y=g?d.stasis.heading??0:d.mode==="charge"?Math.atan2(d.dx,d.dz):Math.atan2(n.player.x-d.x,n.player.z-d.z),this.boss.scale.setScalar(1)}for(const d of this.bossGlow){const g=n.boss,f=g?.stasis&&n.time<g.stasis.until?g.stasis.poseTime:g?.presentationTime??n.time;d.emissiveIntensity=g?.mode==="warning"?5+4*Math.sin(f*18)**2:3.5}if(this.bossLane.visible=this.bossMode==="classic"&&n.boss?.variant==="classic"&&n.boss.mode==="warning"&&n.boss.attackIndex%2===0&&n.phase==="boss",this.bossLane.visible&&n.boss){const d=n.boss;let g=8.2*.86;for(const[f,v,w]of[[d.x,d.dx,C.width/2-1.08],[d.z,d.dz,C.depth/2-1.08]])Math.abs(v)>1e-8&&(g=Math.min(g,Math.max(0,(Math.sign(v)*w-f)/v)));this.bossLane.position.set(d.x+d.dx*g/2,.035,d.z+d.dz*g/2),this.bossLane.rotation.y=Math.atan2(d.dx,d.dz),this.bossLane.scale.z=g,this.bossLane.material.opacity=.16+.15*Math.sin(n.time*12)**2}if(this.camera.updateMatrixWorld(!0),this.levelTwo.render(this.twoLevelMode&&n.neural?{...n,enemies:[]}:n,e),this.neuralCrowd?.render(n,e),this.grenade.render(n,this.camera,e),this.fractal.render(n,this.camera,e),this.human&&(this.human.scene.environment=this.foreground.environment,this.human.scene.environmentIntensity=this.foreground.environmentIntensity,this.human.update(n,t,this.camera,e,this.fractal.humanGripPoses())),this.hitEffects.render(n,this.camera,!!this.neuralCrowd),this.renderer.info.reset(),this.renderer.clear(),this.renderer.render(this.scene,this.camera),!e&&!i){this.renderer.clearDepth(),this.renderer.render(this.foreground,this.viewCamera),this.human&&(this.renderer.clearDepth(),this.renderer.render(this.human.scene,this.human.camera));const d=document.getElementById("g2-heart-strip")?.getBoundingClientRect(),g=this.renderer.domElement.getBoundingClientRect();this.g2Hearts?.render(n,this.renderer,this.reducedEffects,!document.getElementById("hud")?.hidden,d?{left:d.left-g.left,top:d.top-g.top,width:d.width,height:d.height}:void 0)}}lockMarker(n){if(!n.lock.active||!n.lock.visible||!n.boss||n.phase!=="boss"&&!(n.stage===3&&n.phase==="swarm"))return null;const t=this.markerPosition.set(n.boss.x,n.boss.y,n.boss.z).project(this.camera);return t.z<-1||t.z>1||Math.abs(t.x)>1||Math.abs(t.y)>1?null:{x:(t.x+1)*.5*this.viewport.width,y:(1-t.y)*.5*this.viewport.height}}setReducedEffects(n){this.reducedEffects=n,this.human?.setReduced(n),this.twoWorlds?.setReduced(n),this.neuralCrowd?.setReduced(n),this.forestGrotto.setReduced(n),this.grin?.setReduced(n),this.fractal.setReduced(n),this.grenade.setReduced(n),this.hitEffects.setReduced(n),this.redFloor.setReduced(n),this.levelTwo.setReduced(n)}setArenaSurface(n){this.redFloor.setMode(n)}setMusicAccent(n){this.musicLevel=Number.isFinite(n)?Math.max(0,Math.min(.08,n)):0;for(const{material:t,base:e}of this.musicMaterials)t.emissiveIntensity=e*(1+this.musicLevel)}stats(){return{graphicsProfile:this.twoLevelMode?this.visualVT1?mn.id:Ot.id:null,g2Hearts:this.g2Hearts?.stats()??null,g2BossMaterials:this.g2Boss?.stats()??null,neuralCrowd:this.neuralCrowd?.stats()??null,humanPOV:this.human?.stats()??null,twoWorlds:this.twoWorlds?.stats()??null,environment:this.environmentStats(),level4:this.levelFour?.stats()??{ready:!1,error:this.levelFourError},arenaDetails:this.arenaDetails.stats(),arena:{active:this.arenaActive,collapse:this.arenaCollapse,wallAssemblies:this.arenaWalls.length,walls:this.arenaWalls.map(n=>({visible:n.group.visible,rotation:n.group.rotation[n.axis],y:n.group.position.y,attachedObjects:n.group.children.length})),enclosedFloorVisible:this.enclosedFloor.visible,floor:this.redFloor.stats()},music:{accent:this.musicLevel,materialGroups:this.musicMaterials.length},weapons:this.fractal.stats(),grenade:this.grenade.stats(),hitEffects:this.hitEffects.stats(),bossEffects:this.grin?.stats()??null,frames:this.frames,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,assets:[...this.loaded],viewport:this.viewport}}dispose(){if(this.disposed)return;this.disposed=!0,this.g2Hearts?.dispose(),this.human?.dispose(),this.twoWorlds?.dispose(),this.neuralCrowd?.dispose(),this.levelThree?.dispose(),this.levelFour?.dispose(),this.stageLoadGeneration++,this.stageAssets.dispose(),this.assets.dispose(),this.scene.remove(this.neonSky.mesh),this.neonSky.dispose(),this.grin?.dispose(),this.grenade.dispose(),this.scene.remove(this.redFloor.mesh),this.redFloor.dispose(),this.forestGrotto.dispose();const n=this.arenaDetails.resources(),t=this.forestGrotto.resources(),e=new Set([...n.textures,...t.textures]),i=new Set([...n.materials,...t.materials]),o=new Set([...n.geometries,...t.geometries]);for(const r of[this.scene,this.foreground])r.traverse(a=>{if(a instanceof E||a instanceof I0){o.add(a.geometry);for(const l of Array.isArray(a.material)?a.material:[a.material])i.add(l)}});for(const r of i){for(const a of Object.values(r))a instanceof jt&&e.add(a);r.dispose()}for(const r of e)this.g2Boss?.owns(r)||r.dispose();this.g2Boss?.dispose();for(const r of o)r.dispose();this.envTarget.dispose(),this.renderer.dispose()}}const M0=document.querySelector("#game"),Zn=document.getElementById("viewport"),z0=document.getElementById("status"),Ei=document.getElementById("error"),Kt=document.querySelector("#profile"),ot=document.querySelector("#scene"),pt=document.querySelector("#angle");let _0="";M0.addEventListener("webglcontextcreationerror",s=>{_0=s.statusMessage||"Browser reported WebGL context creation failure"});new URLSearchParams(location.search).has("capture")&&document.body.classList.add("capture");let Sn=null,K=null,Qt=!1,Fn=!1,de=!1,ut=!1,ue=0,u0=0,Ti=0,ft=!1;const j0=916,L0=1/120;function Dt(s){!Sn||!K||!Qt||(Sn.render(K.state,s,!1),z0.textContent=`rainbow-github-pages-v01-86fe171c6791 | ${Kt.value} | ${ot.value} / ${pt.value} | seed ${j0} | frame ${ue}
${Zn.clientWidth}×${Zn.clientHeight} CSS · DPR ${devicePixelRatio} · exposure .92 · ${ut?"reduced":"full"} effects · controlled fixture, visual quality unaccepted`)}function Ye(){if(Sn){if(Fn=!1,ue=0,document.getElementById("play").textContent="Play motion",K=new Mo(j0,{twoLevel:!0,bossMode:"grin",bossAttackExpansionEnabled:!0,binaryFreezeGrenadeEnabled:!0,arenaMode:"red_infinity",level2Environment:"forest_grotto"}),ot.value==="grin")K.practiceBoss();else{K.startStage(1),K.state.practice=!0,K.selectNeuralUpgrade(K.state.neural.offers[0].id),K.state.neural.tickets=[];const s=ot.value==="stress128"?128:ot.value==="stress16"?16:ot.value==="mixed"?9:2;for(let t=0;t<s;t++){const e=ot.value==="mixed"?zo[1][t%9]:t%2?"signal_echo":"flank_drone";K.spawnNeuralEnemy(e,s===2?(t-.5)*1.2:(t%8-3.5)*1.1,Math.floor(t/8)*.48-4)}const n=K.state.player;pt.value==="spawn"&&(n.x=0,n.z=5.9,n.yaw=0,n.pitch=0),pt.value==="busy"&&(n.x=4.8,n.z=4.9,n.yaw=.67,n.pitch=0),pt.value==="oblique"&&(n.x=-4.6,n.z=3.7,n.yaw=-.55,n.pitch=-.13),pt.value==="ceiling"&&(n.x=0,n.z=4.8,n.yaw=0,n.pitch=.52)}Sn.resetCrowdPresentation(),Dt(0)}}function F0(){if(!(!K||!Sn||!Qt)){for(let s=0;s<2;s++){const n=ue/60,t=K.state.player;K.setNeuralMuzzle(Sn.neuralMuzzle()),K.update(L0,{...R0,fire:de,forward:ft?.4:0,strafe:ft?.3:0,yaw:ft?n*.18:t.yaw,pitch:ft?Math.sin(n*.32)*.17:t.pitch})}ue++,Dt(1/60)}}function O0(){Sn?.resize(Math.max(1,Zn.clientWidth),Math.max(1,Zn.clientHeight)),Dt(0)}async function W0(){const s=++u0;Qt=!1,Fn=!1,Sn?.dispose(),Sn=null,Ei.textContent="";try{const n=Kt.value==="baseline"?new Xa(M0,"grin",!0,!0):new ko(M0,"grin",!0,!0);if(Sn=n,await n.loadAssets(t=>z0.textContent=`Preparing ${Kt.value}: ${t}`),s!==u0){n.dispose();return}n.setReducedEffects(ut),Qt=!0,O0(),Ye()}catch(n){s===u0&&(Ei.textContent=(_0?"Graphics context: "+_0+`
`:"")+(n instanceof Error?n.stack??n.message:String(n)),z0.textContent="Required assets or graphics unavailable. No fallback is a pass.")}}Kt.addEventListener("change",()=>{W0()});ot.addEventListener("change",Ye);pt.addEventListener("change",Ye);document.getElementById("reset").addEventListener("click",Ye);document.getElementById("play").addEventListener("click",()=>{Fn=!Fn,document.getElementById("play").textContent=Fn?"Pause motion":"Play motion"});document.getElementById("step").addEventListener("click",()=>{Fn=!1,F0()});document.getElementById("fire").addEventListener("click",()=>{de=!de,document.getElementById("fire").textContent=de?"FIRE ON":"FIRE OFF",Dt(0)});document.getElementById("fx").addEventListener("click",()=>{ut=!ut,Sn?.setReducedEffects(ut),document.getElementById("fx").textContent=ut?"FX REDUCED":"FX FULL",Dt(0)});document.getElementById("size").addEventListener("change",s=>{const n=s.target.value;if(n==="auto")Zn.style.width="",Zn.style.height="";else{const[t,e]=n.split("x").map(Number);Zn.style.width=t+"px",Zn.style.height=e+"px"}O0()});document.getElementById("walk").addEventListener("click",()=>{ft=!ft,document.getElementById("walk").textContent=ft?"MOVE ON":"MOVE OFF"});document.getElementById("fall").addEventListener("click",()=>{if(K){for(const s of K.state.enemies)s.health=0,_o(K.state,s,"killed");K.state.enemies=[],Fn=!0,Dt(0)}});document.getElementById("sword").addEventListener("click",()=>{!K||!Sn||(K.update(L0,{...R0,special:!0,yaw:K.state.player.yaw,pitch:K.state.player.pitch}),Fn=!0)});document.getElementById("grenade").addEventListener("click",()=>{!K||!Sn||(K.update(L0,{...R0,grenade:!0,yaw:K.state.player.yaw,pitch:K.state.player.pitch}),Fn=!0)});addEventListener("resize",O0);document.addEventListener("visibilitychange",()=>{document.hidden&&(Fn=!1)});function Qi(s){Fn&&Qt&&!document.hidden&&s-Ti>=1e3/60&&(Ti=s,F0()),requestAnimationFrame(Qi)}requestAnimationFrame(Qi);Object.assign(window,{__rainbowMotionLiquidReview:Object.freeze({snapshot:()=>({buildId:"rainbow-github-pages-v01-86fe171c6791",ready:Qt,profile:Kt.value,scene:ot.value,view:pt.value,seed:j0,frame:ue,reduced:ut,dpr:devicePixelRatio,css:[Zn.clientWidth,Zn.clientHeight],state:K?structuredClone(K.state):null,renderer:Sn?.stats()??null}),fixture:async(s,n,t)=>{Kt.value=s,ot.value=n,pt.value=t,await W0()},step:(s=1)=>{Fn=!1;for(let n=0;n<s;n++)F0()},motion:(s,n=!1,t=!1)=>{Fn=s,de=n,ft=t},reduced:s=>{ut=s,Sn?.setReducedEffects(s),Dt(0)},evidence:"CONTROLLED_RUNTIME_FIXTURE_NOT_OWNER_QA"})});W0();
