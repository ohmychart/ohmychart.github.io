import{S as R,i as T,s as U,k as h,y as A,a as D,q as J,l as g,m as $,z as k,c as V,r as K,h as p,n as b,p as z,O as L,b as W,A as B,E as n,u as P,g as C,d as G,B as M,G as X}from"./index.3e30f378.js";import{H as Y,b as Z,F as x,S as ee}from"./NavScreen.8549ea3f.js";function te(l){let t,i,m,r,s,_,S=l[0].title+"",E,H,v,w=l[0].intro+"",F,N,o,c,I,q,f,u;return i=new Y({}),o=new Z({props:{slug:l[0].slug,desc:l[0].desc}}),f=new x({}),{c(){t=h("div"),A(i.$$.fragment),m=D(),r=h("main"),s=h("div"),_=h("h1"),E=J(S),H=D(),v=h("div"),F=J(w),N=D(),c=h("div"),A(o.$$.fragment),q=D(),A(f.$$.fragment),this.h()},l(e){t=g(e,"DIV",{class:!0});var a=$(t);k(i.$$.fragment,a),m=V(a),r=g(a,"MAIN",{class:!0});var d=$(r);s=g(d,"DIV",{class:!0});var y=$(s);_=g(y,"H1",{class:!0});var O=$(_);E=K(O,S),O.forEach(p),H=V(y),v=g(y,"DIV",{class:!0});var j=$(v);F=K(j,w),j.forEach(p),y.forEach(p),N=V(d),c=g(d,"DIV",{style:!0});var Q=$(c);k(o.$$.fragment,Q),d.forEach(p),q=V(a),k(f.$$.fragment,a),a.forEach(p),this.h()},h(){b(_,"class","feature-title svelte-92lrwd"),b(v,"class","feature-intro svelte-92lrwd"),b(s,"class","feature-header svelte-92lrwd"),z(c,"display","contents"),z(c,"--ambi-color",I=l[0].color),b(r,"class","feature-content svelte-92lrwd"),b(t,"class","feature-screen svelte-92lrwd"),L(t,"hide",l[1].showNav)},m(e,a){W(e,t,a),B(i,t,null),n(t,m),n(t,r),n(r,s),n(s,_),n(_,E),n(s,H),n(s,v),n(v,F),n(r,N),n(r,c),B(o,c,null),n(t,q),B(f,t,null),u=!0},p(e,[a]){(!u||a&1)&&S!==(S=e[0].title+"")&&P(E,S),(!u||a&1)&&w!==(w=e[0].intro+"")&&P(F,w),a&1&&I!==(I=e[0].color)&&z(c,"--ambi-color",I);const d={};a&1&&(d.slug=e[0].slug),a&1&&(d.desc=e[0].desc),o.$set(d),(!u||a&2)&&L(t,"hide",e[1].showNav)},i(e){u||(C(i.$$.fragment,e),C(o.$$.fragment,e),C(f.$$.fragment,e),u=!0)},o(e){G(i.$$.fragment,e),G(o.$$.fragment,e),G(f.$$.fragment,e),u=!1},d(e){e&&p(t),M(i),M(o),M(f)}}}function ae(l,t,i){let m;X(l,ee,s=>i(1,m=s));let{data:r}=t;return l.$$set=s=>{"data"in s&&i(0,r=s.data)},[r,m]}class ne extends R{constructor(t){super(),T(this,t,ae,te,U,{data:0})}}export{ne as S};
