import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from "@/router";
import { RouteLocationNormalized } from "vue-router";
import { useStore } from "./store/index";
NProgress.configure({ showSpinner: false });

async function hello(): Promise<string> {
  return "hello1";
}

router.beforeEach(
  // eslint-disable-next-line space-before-function-paren
  async (
    to: RouteLocationNormalized,
    _: RouteLocationNormalized,
    next: any
  ) => {
    // 路由守卫
    NProgress.start();
    const store = useStore();
    if (store.state.user.token) {
      console.log("有");
      if (to.path === "/login") {
        next({ path: "/" });
        NProgress.done();
      } else {
        next();
        NProgress.done();
        // try {
        //   await hello();
        // } catch (err) {
        //   next({ path: "/login" });
        //   NProgress.done();
        // }
      }
    } else {
      console.log("没有");
      if (to.path === "/login") {
        next();
        NProgress.done();
      } else {
        next({ path: "/login" });
        NProgress.done();
      }
    }
  }
);
