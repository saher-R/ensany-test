import{u as f,c as v,r as e,o as i,a as o,b as a,t as _,d as C,n as p,l as L,v as F,F as S,e as w,j as M,x as V,q as $}from"./index-72606741.js";import{_ as b}from"./Custom_pagination-5fd9f7c5.js";const z={class:"Campaigns"},G={class:"section-top"},P={class:"title"},R={class:"input-div"},j=a("i",{class:"fa-solid fa-angle-up"},null,-1),E={class:"content"},K={class:"search"},q=a("i",{class:"uil uil-search"},null,-1),H={class:"options"},J=["onClick"],O={class:"cards"},Q={class:"repate-the-cards-camera","data-aos":"fade-up"},W={class:"items-container-div"},X=$('<a href="#"><img src="https://ensany.com/platform_images/1609962455.jpeg" alt=""></a><h3><a href="#"> A Better Better Better Place For 130 Orphans In Rumah Amal Limpahan Kasih </a></h3><div class="line-div---"><div class="line-persent"><div class="number-persent"><div class="number"> % 35 </div></div></div></div><div class="nums"><span><div><span>USD</span><span>3580</span></div><div> Target </div></span><span><div><span>USD</span><span>0</span></div><div> collected </div></span></div><div class="donate-div"><a href="#" class="donate-now"> donate now <i class="fa-solid fa-gift"></i></a><a href="#" class="more"> show more <i class="fa-solid fa-arrow-right"></i></a></div>',5),Y=[X],ea={__name:"Campaigns",setup(Z){const h=f(),l=h.Campaigns_Translations,c=v(()=>h.currentLanguage),y=l.ar,g=l.en,k=l.tr;let B=v(()=>T());function T(){switch(c.value){case"en":return g;case"ar":return y;case"tr":return k;default:return g}}const A=f(),d=A.GeneralSec_Translations,N=d.ar,m=d.en,U=d.tr;v(()=>x());function x(){switch(c.value){case"en":return m;case"ar":return N;case"tr":return U;default:return m}}e(1),e(2),e(880);const I=e(["Afghanistan","Algeria","Argentina","Australia","Bangladesh","Belgium","Bhutan","Brazil","Canada","China","Denmark","Ethiopia","Finland","France","Germany","Hungary","Iceland","India","Indonesia","Iran","Italy","Japan","Malaysia","Maldives","Mexico","Morocco","Nepal","Netherlands","Nigeria","Norway","Pakistan","Peru","Russia","Romania","South Africa","Spain","Sri Lanka","Sweden","Switzerland","Thailand","Turkey","Uganda","Ukraine","United States","United Kingdom","Vietnam"]),u=e(""),n=e(""),t=e(!1);return(D,r)=>(i(),o("div",z,[a("div",{class:p(`content-page container ${C(c)=="ar"&&"rtl"}`)},[a("div",G,[a("div",P,_(C(B).title),1),a("div",R,[a("div",{class:p(`wrapper ${t.value&&"active"}`)},[a("div",{class:"select-btn",onClick:r[0]||(r[0]=s=>t.value=!t.value)},[a("span",null,_(n.value==""?"All Carigories":n.value),1),j]),a("div",E,[a("div",K,[q,L(a("input",{spellcheck:"false",type:"text",placeholder:"Search","onUpdate:modelValue":r[1]||(r[1]=s=>u.value=s),id:"searchCountry"},null,512),[[F,u.value]])]),a("ul",H,[(i(!0),o(S,null,w(I.value,s=>L((i(),o("li",{class:p(`${s.toLowerCase()==n.value.toLowerCase()&&"selected"}`),onClick:()=>{D.selectCountry=s,n.value=s,t.value=!1}},_(s),11,J)),[[V,s==null?void 0:s.trim().toLowerCase().includes(u.value.trim().toLowerCase())]])),256))])])],2)])]),a("div",O,[a("div",Q,[(i(),o(S,null,w(7,s=>a("div",W,Y)),64))])]),M(b)],2)]))}};export{ea as default};