import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  //
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("../pages/User/Login.vue"),
  },
  {
    path: "/discover",
    component: () => import("../pages/Discover.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
