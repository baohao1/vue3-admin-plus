const menu = [
  {
    path: "/",
    title: "首页",
    id: "1",
    icon: "el-icon-s-shop",
    component: "Layout",
    redirect: "/dashboard",
    menusub: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/dashboard/Index.vue"
          ),
        name: "Dashboard",
        title: "首页",
        id: "1-1",
        icon: "el-icon-s-shop",
        meta: {
          title: "dashboard",
          icon: "#icondashboard",
          affix: true,
        },
      },
    ],
  },
];

export default menu;
