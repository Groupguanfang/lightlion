import{_ as r,r as e,o as d,c as l,a as t,w as s,p as b,b as $,d as h,e as B,T as A}from"./index.0f8492f2.js";import{u as I}from"./user.554fec74.js";const S={},y=o=>(b("data-v-6b300f2d"),o=o(),$(),o),G={class:"home-swiper"},z=y(()=>h("img",{src:B,class:"img"},null,-1));function N(o,n){const c=e("t-swiper-item"),i=e("t-swiper");return d(),l("div",G,[t(i,null,{default:s(()=>[t(c,{class:"item"},{default:s(()=>[z]),_:1})]),_:1})])}const V=r(S,[["render",N],["__scopeId","data-v-6b300f2d"]]);const T={methods:{openBilibili(o){this.$store.commit(o)}}},U={class:"app-gird"};function k(o,n,c,i,p,m){const _=e("t-grid-item"),a=e("t-grid");return d(),l("div",U,[t(a,{column:3},{default:s(()=>[t(_,{text:"\u8155\u4E0AB\u7AD9",onClick:n[0]||(n[0]=u=>m.openBilibili("updateBilibiliStatus")),image:"https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019066-PNG\u56FE\u50CF.png",description:"For Apple Watch"}),t(_,{text:"\u8155\u4E0A\u8D44\u8BAF",image:"https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019065-PNG\u56FE\u50CF-3.png",description:"For Apple Watch"}),t(_,{text:"\u8155\u4E0A\u5C0F\u8BF4",image:"https://td.xhhzs.cn/wp-content/uploads/2022/09/1664019067-PNG\u56FE\u50CF-2.png",description:"For Apple Watch"})]),_:1})])}const C=r(T,[["render",k],["__scopeId","data-v-4793dd5d"]]);const F={components:{TabBar:A,Swiper:V,AppGird:C,UserIcon:I},data(){return{notice:!0}}},P={class:"home padding"},W=h("h1",null,"\u5FC3\u7535\u793E\u533A",-1);function H(o,n,c,i,p,m){const _=e("UserIcon"),a=e("t-avatar"),u=e("t-navbar"),f=e("Swiper"),g=e("t-notice-bar"),v=e("AppGird"),w=e("TabBar");return d(),l("div",P,[t(u,{"right-show":!1,title:"",leftArrow:!1},{left:s(()=>[W]),right:s(()=>[t(a,{size:"small"},{icon:s(()=>[t(_,{style:{"font-size":"16px"}})]),_:1})]),_:1}),t(f),t(g,{id:"home-notice",modelValue:p.notice,"onUpdate:modelValue":n[0]||(n[0]=x=>p.notice=x),content:"\u8155\u4E0A\u6A31\u82B1\u5373\u5C06\u5408\u5E76\u5230\u8155\u4E0AB\u7AD9"},null,8,["modelValue"]),t(v),t(w)])}const q=r(F,[["render",H]]);export{q as default};
