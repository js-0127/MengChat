<script setup lang="ts">
import FormTitle from './FormTitle.vue';
import { useAuthComponent, useUserStore } from '@/store/index.ts'
import type ElMessage from 'element-plus'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { authLogin } from '@/api/auth/index'
import { loginType } from '@/types/auth'
import router from '@/router';
const { authStatus, changeStatus } = (useAuthComponent())
const { loginForm } = storeToRefs(useAuthComponent())


const store = useUserStore()
//控制密码显隐
const show = ref(false)
const changeShow = () => {
    show.value = !show.value
}

const login = async (loginForm: loginType) => {
    const res = await authLogin(loginForm)
    if (res.code == 200) {
        //@ts-ignore
        ElMessage({
            type: 'success',
            message: '登录成功'
        })
        //@ts-ignore
        store.setToken(res.data)

        router.push('/')
    }

}
</script>

<template>
    <div class="mt-8 space-y-6">
        <FormTitle title="欢迎回来" sub-title="使用账号登录"></FormTitle>
        <input type="hidden" name="remember" value="true" />
        <div class="relative">
            <label class="login-form-label">账号</label>
            <input class="login-form-input" type="" placeholder="请输入账号" v-model="loginForm.username" />
        </div>
        <div class="mt-8 content-center relative">
            <label class="login-form-label">密码</label>
            <input class="login-form-input" :type="show ? 'input' : 'password'" placeholder="请输入密码"
                v-model="loginForm.password" />
            <img :src="show ? '/src/assets/icons/eye-on.svg' : '/src/assets/icons/eye-off.svg'" alt=""
                class="absolute right-4 top-10 w-5" @click="changeShow()">
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox"
                    class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">记住我</label>
            </div>
            <div class="text-sm">
                <a href="#" class="text-indigo-400 hover:text-blue-500">忘记密码？</a>
            </div>
        </div>
        <div>
            <button @click="login(loginForm)"
                class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l  hover:from-blue-500  hover:to-indigo-600  text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">登
                录</button>
        </div>
        <p class="items-centerjustify-centermt-10 text-center text-md text-gray-500">
            <span>还没有账号？</span>
            <a href="javascript:;" @click="changeStatus(authStatus.regist)"
                class=" text-indigo-400 hover:text-blue-500  no-underline hover:underline  cursor-pointer transition ease-in duration-300">立即注册</a>
        </p>
    </div>
</template>

<style scoped>
@tailwind components;

@layer components {
    .login-form-label {
        @apply ml-3 text-sm font-bold text-gray-700 tracking-wide
    }

    .login-form-input {
        @apply w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500
    }

}
</style>
