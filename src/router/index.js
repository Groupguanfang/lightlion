import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  //
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "心电社区",
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
