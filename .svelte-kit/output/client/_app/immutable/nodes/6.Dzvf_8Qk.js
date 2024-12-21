import{s as G,e as N,b as v,t as A,d as O,m as F,f as y,h as E,r as U,k as b,i as B,j as x,v as _,y as D,z as P,w as Q,n as V,A as W,l as z,o as X,p as J,q as L}from"../chunks/scheduler.BnZUYRQB.js";import{S as H,i as K,t as g,a as $,c as Y,f as M,b as q,d as C,m as w,e as h,g as Z}from"../chunks/index.Da715u9Q.js";import{S as j,T as tt,O as et}from"../chunks/OpenFileButton.iOEySLtQ.js";import{C as st,S as nt}from"../chunks/SaveFileButton.CevLkQpK.js";function it(r){let e,a,s="Start",o,t,u="Stop",i,l,p="Log",T,m,n,f,S,k;return{c(){e=N("div"),a=N("button"),a.textContent=s,o=v(),t=N("button"),t.textContent=u,i=v(),l=N("button"),l.textContent=p,T=v(),m=N("div"),n=A("Current Time : "),f=A(r[0]),this.h()},l(c){e=O(c,"DIV",{class:!0});var d=F(e);a=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),y(a)!=="svelte-nrwq9o"&&(a.textContent=s),o=E(d),t=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-vnrg3a"&&(t.textContent=u),i=E(d),l=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),y(l)!=="svelte-1g8rk1w"&&(l.textContent=p),T=E(d),m=O(d,"DIV",{class:!0});var I=F(m);n=U(I,"Current Time : "),f=U(I,r[0]),I.forEach(b),d.forEach(b),this.h()},h(){B(a,"class","text-[10px] rounded-md bg-stone-400 px-2"),B(t,"class","text-[10px] rounded-md bg-stone-400 px-2"),B(l,"class","text-[10px] rounded-md bg-stone-400 px-2"),B(m,"class","text-xs"),B(e,"class","flex p-0 m-0 bg-gray-900 text-white gap-2 py-1")},m(c,d){x(c,e,d),_(e,a),_(e,o),_(e,t),_(e,i),_(e,l),_(e,T),_(e,m),_(m,n),_(m,f),S||(k=[D(a,"click",function(){P(r[1])&&r[1].apply(this,arguments)}),D(t,"click",function(){P(r[2])&&r[2].apply(this,arguments)}),D(l,"click",r[3])],S=!0)},p(c,[d]){r=c,d&1&&Q(f,r[0])},i:V,o:V,d(c){c&&b(e),S=!1,W(k)}}}function rt(r,e,a){let{slide:s}=e,{currentTime:o}=e,{start:t}=e,{stop:u}=e;function i(){localStorage.setItem("slide",JSON.stringify(s)),alert("Saved to localstorage")}return r.$$set=l=>{"slide"in l&&a(4,s=l.slide),"currentTime"in l&&a(0,o=l.currentTime),"start"in l&&a(1,t=l.start),"stop"in l&&a(2,u=l.stop)},[o,t,u,i,s]}class at extends H{constructor(e){super(),K(this,e,rt,it,G,{slide:4,currentTime:0,start:1,stop:2})}}function R(r){let e,a,s,o,t,u,i,l;e=new tt({props:{$$slots:{default:[ot]},$$scope:{ctx:r}}}),s=new at({props:{currentTime:r[0],slide:r[1],start:r[6],stop:r[5]}});function p(n){r[7](n)}function T(n){r[8](n)}let m={currentTime:r[0]};return r[1].items!==void 0&&(m.items=r[1].items),r[1].slideExtra!==void 0&&(m.slideExtra=r[1].slideExtra),t=new r[2]({props:m}),J.push(()=>M(t,"items",p)),J.push(()=>M(t,"slideExtra",T)),{c(){q(e.$$.fragment),a=v(),q(s.$$.fragment),o=v(),q(t.$$.fragment)},l(n){C(e.$$.fragment,n),a=E(n),C(s.$$.fragment,n),o=E(n),C(t.$$.fragment,n)},m(n,f){w(e,n,f),x(n,a,f),w(s,n,f),x(n,o,f),w(t,n,f),l=!0},p(n,f){const S={};f&1026&&(S.$$scope={dirty:f,ctx:n}),e.$set(S);const k={};f&1&&(k.currentTime=n[0]),f&2&&(k.slide=n[1]),s.$set(k);const c={};f&1&&(c.currentTime=n[0]),!u&&f&2&&(u=!0,c.items=n[1].items,L(()=>u=!1)),!i&&f&2&&(i=!0,c.slideExtra=n[1].slideExtra,L(()=>i=!1)),t.$set(c)},i(n){l||(g(e.$$.fragment,n),g(s.$$.fragment,n),g(t.$$.fragment,n),l=!0)},o(n){$(e.$$.fragment,n),$(s.$$.fragment,n),$(t.$$.fragment,n),l=!1},d(n){n&&(b(a),b(o)),h(e,n),h(s,n),h(t,n)}}}function ot(r){let e,a,s,o,t,u;return e=new st({props:{callback:r[3],title:"New ",icon:"🎉"}}),s=new et({props:{callback:r[4],importAccept:".js",regexReplaceFilter:/export\s+const\s+\w+\s*=\s*/}}),t=new nt({props:{content:r[1],PreTextToAdd:"export const Slide"}}),{c(){q(e.$$.fragment),a=v(),q(s.$$.fragment),o=v(),q(t.$$.fragment)},l(i){C(e.$$.fragment,i),a=E(i),C(s.$$.fragment,i),o=E(i),C(t.$$.fragment,i)},m(i,l){w(e,i,l),x(i,a,l),w(s,i,l),x(i,o,l),w(t,i,l),u=!0},p(i,l){const p={};l&2&&(p.content=i[1]),t.$set(p)},i(i){u||(g(e.$$.fragment,i),g(s.$$.fragment,i),g(t.$$.fragment,i),u=!0)},o(i){$(e.$$.fragment,i),$(s.$$.fragment,i),$(t.$$.fragment,i),u=!1},d(i){i&&(b(a),b(o)),h(e,i),h(s,i),h(t,i)}}}function lt(r){let e,a,s=r[1]&&R(r);return{c(){s&&s.c(),e=z()},l(o){s&&s.l(o),e=z()},m(o,t){s&&s.m(o,t),x(o,e,t),a=!0},p(o,[t]){o[1]?s?(s.p(o,t),t&2&&g(s,1)):(s=R(o),s.c(),g(s,1),s.m(e.parentNode,e)):s&&(Z(),$(s,1,1,()=>{s=null}),Y())},i(o){a||(g(s),a=!0)},o(o){$(s),a=!1},d(o){o&&b(e),s&&s.d(o)}}}function ft(r,e,a){const s=j.EqsEditor;let o=0,t,u;function i(){a(1,t=j.Canvas.getNewSlide())}function l(f){a(1,t=f)}X(async()=>{a(1,t=j.Eqs.getDemoSlide())});function p(){a(0,o=0),clearInterval(u)}function T(){u=setInterval(()=>{a(0,o+=1)},1e3)}function m(f){r.$$.not_equal(t.items,f)&&(t.items=f,a(1,t))}function n(f){r.$$.not_equal(t.slideExtra,f)&&(t.slideExtra=f,a(1,t))}return[o,t,s,i,l,p,T,m,n]}class pt extends H{constructor(e){super(),K(this,e,ft,lt,G,{})}}export{pt as component};