//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router'
//@ts-ignore
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import { useUserStore } from './store'
import pinia from './store'
const userStore = useUserStore(pinia)
//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to: any, _from: any, next: any) => {
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数
  nprogress.start()
  //获取token,去判断用户登录、还是未登录
  const token = userStore.user.token
  //获取用户名字
  const username = userStore.user.username
  //用户登录判断
  if (token) {
    //登录成功,访问login,不能访问,指向首页
    if (to.path == '/auth') {
      next({ path: '/' })
    } else {
      //登录成功访问其余六个路由(登录排除)
      //有用户信息
      if (username) {
        //放行
        next()
      } else {
        //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
        try {
          //获取用户信息
        //   await userStore.getUser()
          //放行
          //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
          next()
        } catch (error) {
          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关的数据清空
          userStore.delUser()
          next({ path: '/auth'})
        }
      }
    }
  } else {
    //用户未登录判断
    if (to.path == '/auth') {
      next()
    } else {
      next({ path: '/auth'})
    }
  }
})
//全局后置守卫
router.afterEach((to: any) => {
  document.title = `檬 ${to.meta.title}`
  nprogress.done()
})
