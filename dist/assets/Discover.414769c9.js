import"./axios.78089565.js";import{a as g}from"./Home.1b152a0c.js";import{_ as p,r as s,o,c as r,n as l,m as $,a as i,w as v,F as k,q as B,T as x,d}from"./index.df7c3758.js";const y={data(){return{post:[],loading:!0}},async mounted(){let t=await g();this.post=t.data,console.log(this.post),this.loading=!1},methods:{go(t){this.$router.push("/post/"+t)}}},C={class:"post-list"};function L(t,u,m,h,n,_){const a=s("t-loading"),c=s("t-cell"),f=s("t-list");return o(),r("div",C,[n.loading?(o(),l(a,{key:0,theme:"dots"})):$("",!0),i(f,null,{default:v(()=>[(o(!0),r(k,null,B(n.post,e=>(o(),l(c,{onClick:V=>_.go(e.id),key:e,title:e.title,description:e.data},null,8,["onClick","title","description"]))),128))]),_:1})])}const P=p(y,[["render",L]]),T={components:{TabBar:x,PostList:P}},b={class:"discover"},w=d("div",{class:"padding"},[d("h1",null,"\u53D1\u73B0")],-1);function N(t,u,m,h,n,_){const a=s("PostList"),c=s("TabBar");return o(),r("div",b,[w,i(a),i(c)])}const E=p(T,[["render",N]]);export{E as default};
