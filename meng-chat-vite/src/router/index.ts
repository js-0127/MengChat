import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/auth'
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/auth.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((_from, _to, next) => {
    nprogress.start()
    next()

})
router.afterEach((to: any) => {
    nprogress.done()
    document.title = to.meta.title || '檬'
})

export default router