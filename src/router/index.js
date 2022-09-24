import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/bilibili",
    component: () => import("../pages/Bilibili.vue"),
  },
  {
    path: "/news",
    component: () => import("../pages/News.vue"),
  },
  {
    path: "/novel",
    component: () => import("../pages/Novel.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
