import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthComponent = defineStore('auth', () => {
       const authStatus = {
              login: Symbol('login'),
              regist: Symbol('regist')
       }
       
       
       const showComponent = ref(authStatus.login)

       const title = {
              login: '使用账号登录',
              regist: '使用验证码注册'
       }

       const authTitle = ref(title.login)
       
       const changeStatus = (auth: symbol, rest: string) => {
              if (authStatus.login || authStatus.regist) {
                     showComponent.value = auth
                     //@ts-ignore
                     authTitle.value = title[rest]
              }
       }



       return { authStatus, showComponent, changeStatus, title, authTitle }
})