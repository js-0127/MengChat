import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
//@ts-expect-error
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
nprogress.configure({ showSpinner: false });
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import("@/layout/home/index.vue"),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/auth/auth.vue"),
    meta: {
      title: '登录'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
