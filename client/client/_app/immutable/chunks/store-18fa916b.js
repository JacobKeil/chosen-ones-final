import{X as s,Y as c}from"./singletons-c5ff82eb.js";s.disable_scroll_handling;const h=s.goto;s.invalidate;s.invalidateAll;s.prefetch;s.prefetch_routes;s.before_navigate;s.after_navigate;function y(a){const t=a-1;return t*t*t+1}function w(a,{delay:t=0,duration:r=400,easing:i=y,x:p=0,y:f=0,opacity:l=0}={}){const o=getComputedStyle(a),n=+o.opacity,u=o.transform==="none"?"":o.transform,d=n*(1-l);return{delay:t,duration:r,easing:i,css:(e,g)=>`
			transform: ${u} translate(${(1-e)*p}px, ${(1-e)*f}px);
			opacity: ${n-d*g}`}}const m=c([]),_=c([]);async function v(){const t=await(await fetch("/products")).json();m.set(t.products)}async function R(){const t=await(await fetch("/articles")).json();_.set(t.articles)}export{v as a,R as b,_ as c,w as f,h as g,m as p};