import{g as f}from"./User.5191ff0e.js";import{g as h}from"./Home.462fffc6.js";import{h as b}from"./axios.7518e71f.js";import{_ as i,r as o,o as r,c as _,a as n,w as l,l as v,d as m}from"./index.b9e81a62.js";async function $(e){return await b.post("/announcement",{data:e,cookie:localStorage.getItem("token")})}const x={data(){return{announcement:"",loading:!0}},async mounted(){const e=await h();this.announcement=e.data.data[0].value,this.loading=!1},methods:{async updateAnnouncement(){const e=await $(this.announcement,localStorage.getItem("token"));console.log(e)}}},V={class:"setting-item"},k=v(" \u4FDD\u5B58\u516C\u544A ");function y(e,t,p,g,a,u){const d=o("t-input"),s=o("t-button");return r(),_("div",V,[n(d,{disabled:a.loading,modelValue:a.announcement,"onUpdate:modelValue":t[0]||(t[0]=c=>a.announcement=c),label:"\u4E00\u53E5\u8BDD\u516C\u544A"},null,8,["disabled","modelValue"]),n(s,{onClick:t[1]||(t[1]=c=>u.updateAnnouncement()),theme:"primary",block:""},{default:l(()=>[k]),_:1})])}const A=i(x,[["render",y]]);const w={components:{AnnouncementVue:A},async mounted(){(await f(localStorage.getItem("token"))).data.profile.level!=10&&(this.$router.go(-1),this.$toast.fail("\u60A8\u65E0\u6743\u8BBF\u95EE\u8BE5\u9875\u9762"))},methods:{}},C={class:"admin-index padding"},I=m("h1",null,"\u7BA1\u7406\u4E3B\u9875",-1),S=m("div",{class:"about"},"\u524D\u7AEF\uFF1AZero \u540E\u7AEF\uFF1AZero Copyright Since 2022",-1);function B(e,t,p,g,a,u){const d=o("AnnouncementVue"),s=o("t-tab-panel"),c=o("t-tabs");return r(),_("div",C,[I,n(c,{"default-value":"general"},{default:l(()=>[n(s,{class:"padding",value:"general",label:"\u901A\u7528"},{default:l(()=>[n(d)]),_:1}),n(s,{class:"padding",value:"about",label:"\u5173\u4E8E"},{default:l(()=>[S]),_:1})]),_:1})])}const U=i(w,[["render",B]]);export{U as default};