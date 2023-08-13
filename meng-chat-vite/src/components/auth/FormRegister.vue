<script setup lang="ts">
import FormTitle from './FormTitle.vue';
import { useAuthComponent } from '@/store/index.ts'
import { storeToRefs } from 'pinia';
import { getCaptcha, authRegister } from '@/api/auth/index'
import { onMounted, reactive, ref } from 'vue';
import { registerType } from '@/types/auth'
import type ElMessage from 'element-plus'
import '../../assets/icons/eye-off.svg'
import '../../assets/icons/eye-on.svg'
const captcha = ref<HTMLDivElement>()
const { authStatus, changeStatus } = (useAuthComponent())
const { loginForm } = storeToRefs(useAuthComponent())
const refreshCatptcha = async () => {
    const res = await getCaptcha()
    captcha.value!.innerHTML = res.data as unknown as string
}

onMounted(() => {
    refreshCatptcha()
})

const registerForm = reactive<registerType>({
    username: '',
    password: '',
    password_isConfirmed: '',
    text: ''
})



const register = async (form: registerType) => {
    const res = await authRegister(form)
    console.log(res);
    if (res.code == 200) {
        //@ts-ignore
        ElMessage({
            message: '注册成功',
            type: 'success',
        })
        loginForm.value.username = registerForm.username
        loginForm.value.password = registerForm.password
        changeStatus(authStatus.login)

    }
}

const show = ref(false)

const changeShow = () => {
    show.value = !show.value
}
</script>

<template>
    <div class="mt-8 space-y-6">
        <FormTitle title="初次光临" sub-title="注册账号"></FormTitle>
        <input type="hidden" name="remember" value="true" />
        <div class="relative">
            <label class="login-form-label">账号</label>
            <input class="login-form-input" placeholder="请输入账号" type="input" v-model="registerForm.username" />
        </div>
        <div class="mt-8 content-center relative">
            <label class="login-form-label">密码</label>
            <input class="login-form-input" :type="show ? 'input' : 'password'" placeholder="请输入密码" v-model="registerForm.password" />
            <img :src="show ? '/src/assets/icons/eye-on.svg' : '/src/assets/icons/eye-off.svg'" alt=""
                class="absolute right-4 top-10 w-5" @click="changeShow()">
        </div>

        <div class="mt-8 content-center relative">
            <label class="login-form-label">确认密码</label>
            <input class="login-form-input" :type="show ? 'input' : 'password'" placeholder="确认密码"
                v-model="registerForm.password_isConfirmed" />
        </div>
        <div class="mt-8 content-center">
            <label class="login-form-label">验证码</label>
            <div class="flex w-full h-ful items-center">
                <input class="login-form-input" type="input" v-model="registerForm.text" placeholder="请输入验证码" />
                <div ref="captcha" class=" w-26 h-10" @click="refreshCatptcha()"></div>
            </div>
        </div>
        <div>
            <button @click="register(registerForm)"
                class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l  hover:from-blue-500  hover:to-indigo-600  text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">注
                册</button>
        </div>
        <p class="items-centerjustify-centermt-10 text-center text-md text-gray-500">
            <span>已有账号？</span>
            <a href="javascript:;" @click="changeStatus(authStatus.login)"
                class=" text-indigo-400 hover:text-blue-500  no-underline hover:underline  cursor-pointer transition ease-in duration-300">立即登录</a>
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
