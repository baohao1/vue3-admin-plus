/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 20:10:59
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const asyncFiles = require.context("./modules", true, /\.ts$/);
let permissionModules: Array<RouteRecordRaw> = [];
asyncFiles.keys().forEach((key) => {
  if (key === "./index.ts") return;
  permissionModules = permissionModules.concat(asyncFiles(key).default);
});

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/dashboard/Index.vue"
          ),
        name: "Dashboard",
        meta: {
          title: "dashboard",
          icon: "#icondashboard",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ "@/views/redirect/Index.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    name: "Login",
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    name: "404",
  },
  ...permissionModules,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
