import { User } from '@/types/user'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
export const useUserStore = defineStore(
        'meng-user',
        () => {
                const user = reactive<User>({
                        token: localStorage.getItem('TOKEN'),
                        username: '',
                        avatar: ''
                })
                // 2. 设置用户信息的函数
                //获取token
                const setToken = async (data: { token: string }) => {
                        user.token = data.token
                        localStorage.setItem('TOKEN', data.token)
                        return 'ok'
                }

                const delUser = () => {
                        user.token = ''
                        user.username = ''
                        user.avatar = ''
                        localStorage.removeItem('TOKEN')
                }
                return { user, setToken, delUser }
        }
)