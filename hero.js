// Animated pixel header: night arena skyline, a basketball arcs into the hoop. Fits any width.
(()=>{const c=document.getElementById('hero');if(!c)return;const H=70;let W=160;const g=c.getContext('2d');
function size(){const r=c.getBoundingClientRect();W=Math.max(110,Math.round(H*r.width/Math.max(1,r.height)));c.width=W;c.height=H;}
size();addEventListener('resize',size);
const sky=['#0b0820','#140e30','#1d1240','#2e1850','#46205e','#7a2a66','#a8366a'];let t=0,last=performance.now();
const stars=[...Array(60)].map((_,i)=>[(i*73)%997/997,(i*37)%331/331*.55,i%5]);
function px(x,y,w,h,col){g.fillStyle=col;g.fillRect(Math.round(x),Math.round(y),w,h);}
function frame(now){t+=Math.min(.05,(now-last)/1000);last=now;const T=t%4.4;
 for(let i=0;i<7;i++)px(0,i*6,W,6,sky[i]);
 for(const [sx,sy,k] of stars)if((Math.floor(t*2+k)%5)!==0)px(sx*W,sy*42,1,1,k?'#fff':'#ffd76a');
 for(let x=0,i=0;x<W;i++){const bw=4+(i*7)%9,bh=4+(i*13)%12;px(x,42-bh,bw,bh,'#2a1844');if((i*5)%3===0)px(x+1,42-bh+2,1,1,'#ffcf5a');x+=bw+1;}
 for(let y=42;y<H;y++)px(0,y,W,1,((y-42)>>2)%2?'#9a6230':'#b0743a');
 px(0,44,W,1,'rgba(255,255,255,.8)');
 const hx=Math.round(W*.82);px(hx+6,24,2,22,'#3a3a48');px(hx+4,14,2,12,'#f4f4f8');px(hx+4,17,2,4,'#e8305a');px(hx-6,24,10,1,'#ff8a1f');
 for(let r=0;r<4;r++)for(let i=0;i<4;i++)px(hx-5+i*3-(T>2.6&&T<3.3?Math.sin(T*30+r):0),26+r*2,1,1,'#fff');
 const sx=Math.round(W*.12),sy=56,ex=hx-1,ey=23,arc=u=>[sx+(ex-sx)*u,sy+(ey-sy)*u-Math.sin(u*Math.PI)*30];
 let bx=-9,by=-9;
 if(T<0.5){bx=sx;by=sy;}else if(T<2.6){const u=(T-0.5)/2.1;[bx,by]=arc(u);for(let k=1;k<9;k++){const [qx,qy]=arc(Math.max(0,u-k*.03));px(qx,qy,1,1,'rgba(255,198,26,.7)');}}
 else if(T<3.2){bx=ex;by=ey+(T-2.6)*30;}else if(T<4.2&&Math.floor(T*6)%2===0){g.fillStyle='#ffc61a';g.font='8px monospace';g.fillText('SWISH!',hx-30,12);}
 px(bx-1,by-1,4,4,'#f07c1c');px(bx,by,2,1,'#141414');px(bx+1,by-1,1,4,'#141414');
 requestAnimationFrame(frame);}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)requestAnimationFrame(frame);})();
