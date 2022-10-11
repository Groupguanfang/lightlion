import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    component: () => import("../pages/User/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/forgot",
    component: () => import("../pages/User/ForgotPassword.vue"),
    meta: {
      title: "找回密码",
    },
  },
  {
    path: "/discover",
    component: () => import("../pages/Discover.vue"),
    meta: {
      title: "发现",
    },
  },
  {
    path: "/post/:id",
    component: () => import("../pages/Post/PostItem.vue"),
    meta: {
      title: "文章详情",
    },
  },
  {
    path: "/register",
    component: () => import("../pages/User/Register.vue"),
    meta: {
      title: "注册",
    },
  },
  {
    path: "/usercenter",
    component: () => import("../pages/User/UserCenter.vue"),
    meta: {
      title: "用户中心",
    },
  },
  {
    path: "/admin",
    component: () => import("../pages/Admin/index.vue"),
    meta: {
      title: "超管中心",
    },
  },
  {
    path: "/usercenter/newdraft",
    component: () => import("../pages/User/NewDraft.vue"),
    meta: {
      title: "新建草稿",
    },
  },
  {
    path: "/usercenter/settings",
    component: () => import("../pages/User/Settings.vue"),
    meta: {
      title: "设置",
    },
  },
  {
    path: "/usercenter/media",
    component: () => import("../pages/User/Media.vue"),
    meta: {
      title: "媒体库",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " - 心电社区";
  }
  next();
});

export default router;
