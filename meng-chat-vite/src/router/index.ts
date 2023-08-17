import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: '首页',
          icon: 'message',
          activeIcon: 'message-active'
        }
      },

      {
        path: '/message',
        name: 'Message',
        component: () => import("@/views/message/index.vue"),
        meta: {
          title: '消息',
          icon: 'message',
          activeIcon: 'message-active'
        }
      },

      {
        path: '/address',
        name: 'Address',
        component: () => import("@/views/address/index.vue"),
        meta: {
          title: '通讯录',
          icon: 'address',
          activeIcon: 'address-active'
        }
      },
      {
        path: '/calender',
        name: 'Calender',
        component: () => import("@/views/calender/index.vue"),
        meta: {
          title: '日历',
          icon: 'calender',
          activeIcon: 'calender-active'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: '更多',
          icon: 'about',
          activeIcon: 'about-active'
        }
      },
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
