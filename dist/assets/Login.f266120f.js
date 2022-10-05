import{l as k}from"./User.7a199d69.js";import{g as w,h as l,u as j,i as V,j as $,_ as P,r as u,o as z,c as S,a as s,w as f,l as g,f as I,d as _,p as A,b as H}from"./index.cca8fa7f.js";import{_ as L}from"./logo.78864314.js";import"./axios.eec18f4d.js";function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function y(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?h(Object(o),!0).forEach(function(n){$(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}var x={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.25 1.75a3 3 0 100 6 3 3 0 000-6zm-2 3a2 2 0 114 0 2 2 0 01-4 0zM2 3a1 1 0 011-1h3.5a1 1 0 011 1v3.5a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 0v3.5h3.5V3H3zM2 9.5a1 1 0 011-1h3.5a1 1 0 011 1V13a1 1 0 01-1 1H3a1 1 0 01-1-1V9.5zm1 0V13h3.5V9.5H3zM8.5 9.5a1 1 0 011-1H13a1 1 0 011 1V13a1 1 0 01-1 1H9.5a1 1 0 01-1-1V9.5zm1 3.5H13V9.5H9.5V13z",fillOpacity:.9}}]},D=w({name:"AppIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,t){var{attrs:o}=t,n=l(()=>e.size),{className:r,style:d}=j(n),i=l(()=>["t-icon","t-icon-app",r.value]),c=l(()=>y(y({},d.value),o.style)),p=l(()=>({class:i.value,style:c.value,onClick:m=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:m})}}));return()=>V(x,p.value)}});function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?O(Object(o),!0).forEach(function(n){$(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}var M={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 8.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM11.5 10.99a12.77 12.77 0 00-9 .75v1.76h7v1H2a.5.5 0 01-.5-.5v-2.28c0-.37.2-.7.54-.87a13.79 13.79 0 019.46-.9v1.04zM12.75 13.75V16h1v-2.25H16v-1h-2.25V10.5h-1v2.25H10.5v1h2.25z"}}]},U=w({name:"UserAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,t){var{attrs:o}=t,n=l(()=>e.size),{className:r,style:d}=j(n),i=l(()=>["t-icon","t-icon-user-add",r.value]),c=l(()=>b(b({},d.value),o.style)),p=l(()=>({class:i.value,style:c.value,onClick:m=>{var a;return(a=e.onClick)===null||a===void 0?void 0:a.call(e,{e:m})}}));return()=>V(M,p.value)}});const B={components:{AppIcon:D}},E={class:"login-options"},N=g(" \u5FD8\u8BB0\u5BC6\u7801 ");function F(e,t,o,n,r,d){const i=u("AppIcon"),c=u("t-button");return z(),S("div",E,[s(c,{shape:"round",onClick:t[0]||(t[0]=p=>e.$router.push("/forgot"))},{icon:f(()=>[s(i)]),default:f(()=>[N]),_:1})])}const T=P(B,[["render",F]]);const K={components:{UserAddIcon:U,LoginOptions:T},data(){return{username:"",password:"",buttonLoading:!1}},mounted(){I(localStorage.getItem("token"))?this.$router.push("/login"):(this.$router.push("/usercenter"),this.$toast("\u60A8\u5DF2\u767B\u5F55\uFF0C\u4E3A\u60A8\u8DF3\u8F6C\u5230\u7528\u6237\u4E2D\u5FC3"))},methods:{async loginActionTo(){this.buttonLoading=!0;const e=await k(this.username,this.password);console.log(e.data),e.data.code!==500?(localStorage.setItem("token",e.data[0].token),this.$router.push("/usercenter")):this.$toast(e.data.message),this.buttonLoading=!1}}},C=e=>(A("data-v-506dfa97"),e=e(),H(),e),q={class:"login"},G=g(" \u767B\u5F55 "),J=C(()=>_("span",null,"\xA0\u6CE8\u518C",-1)),Q={class:"padding"},R=C(()=>_("img",{class:"logo",src:L,alt:"logo"},null,-1)),W=g(" \u767B\u5F55 ");function X(e,t,o,n,r,d){const i=u("UserAddIcon"),c=u("t-navbar"),p=u("t-input"),m=u("t-button"),a=u("LoginOptions");return z(),S("div",q,[s(c,{rightShow:!1},{right:f(()=>[_("span",{onClick:t[0]||(t[0]=v=>e.$router.push("/register"))},[s(i),J])]),default:f(()=>[G]),_:1}),_("main",Q,[R,s(p,{modelValue:r.username,"onUpdate:modelValue":t[1]||(t[1]=v=>r.username=v),label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"]),s(p,{type:"password",modelValue:r.password,"onUpdate:modelValue":t[2]||(t[2]=v=>r.password=v),label:"\u5BC6\u7801",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"]),s(m,{loading:r.buttonLoading,block:"",style:{"margin-top":"10px"},theme:"primary",onClick:t[3]||(t[3]=v=>d.loginActionTo())},{default:f(()=>[W]),_:1},8,["loading"]),s(a,{class:"bottom"})])])}const oe=P(K,[["render",X],["__scopeId","data-v-506dfa97"]]);export{oe as default};