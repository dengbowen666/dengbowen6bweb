import{p as h,A as b,B as g}from"../modules/unplugin-icons-nQZdasAd.js";import{d as x,z as $,o as p,b as k,e as t,f as y,h as C,c as w,k as B,B as r,aa as P,l as c,q as S,s as z}from"../modules/vue-Cf4XnK-O.js";import{u as _,f as E}from"./context-BzNN74_T.js";import"../index-rdwDz_Gq.js";import"../modules/shiki-DBXA-YK4.js";function d(e){return e.startsWith("/")?"/"+e.slice(1):e}function N(e,o=!1){const n=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?o?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const O={class:"my-auto w-full"},V=x({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){_();const o=e,n=$(()=>N(o.background,!0));return(s,i)=>(p(),k("div",{class:"slidev-layout cover text-center",style:C(n.value)},[t("div",O,[y(s.$slots,"default")])],4))}}),A=t("h1",null,"Welcome to Slidev",-1),G=t("p",null,"Presentation slides for developers",-1),H={class:"pt-12"},I={class:"abs-br m-6 flex gap-2"},R={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},T={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:n,$clicksContext:s,$clicks:i,$page:W,$renderContext:j,$frontmatter:u}=_();return s.setup(),(q,a)=>{const m=h,v=b,f=g;return p(),w(V,S(z(r(E)(r(u),0))),{default:B(()=>[A,G,t("div",H,[t("span",{onClick:a[0]||(a[0]=(...l)=>r(o).nav.next&&r(o).nav.next(...l)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[P(" Press Space for next page "),c(m,{class:"inline"})])]),t("div",I,[t("button",{onClick:a[1]||(a[1]=l=>r(o).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[c(v)]),t("a",R,[c(f)])])]),_:1},16)}}},L=T;export{L as default};
