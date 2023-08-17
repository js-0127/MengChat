<script setup lang="ts">
import { ref, computed } from 'vue'

const chatValue = ref('')
const isDisabled = computed(() => {
        return chatValue.value === "";
});

</script>

<template>
        <article class="chatBox absolute top-0  left-80  h-full bg-[#fcfcfc]">
                <header class="navbar bg-[#fbfbfc] fixed w-full h-16"></header>
                <main class="chatContent bg-[#fcfcfc] w-full h-auto overflow-auto"></main>
                <footer class="footer h-12 fixed  bottom-4 rounded-xl flex items-center">
                        <textarea ref="textarea" v-model="chatValue"
                                class="input h-full focus:outline-none w-full rounded-lg px-2 py-3" placeholder="发送给 丁璐瑶" />
                        <div class="ability fixed bottom-4 right-24 w-auto h-12 flex items-center justify-between">
                                <el-tooltip class="box-item" effect="dark" content="表情" placement="top">
                                        <button class="sendIcon h-7 w-8 flex justify-center items-center rounded-lg">
                                                <img src="/src/assets/icons/emoji.svg" alt="" class="w-5 h-5" />
                                        </button>
                                </el-tooltip>

                                <el-tooltip class="box-item" effect="dark" content="更多" placement="top">
                                        <button class="sendIcon h-7 w-8 flex justify-center items-center rounded-lg">
                                                <img src="/src/assets/icons/more.svg" alt="" class="w-5 h-5" />
                                        </button>
                                </el-tooltip>

                                <el-tooltip class="box-item" effect="dark" content="发送" placement="top">
                                        <button type="button" :class="{ isDisabled: isDisabled, send: !isDisabled }"
                                                class="h-7 w-9 flex justify-center items-center z-10 rounded-lg">
                                                <img :src="`/src/assets/icons/${isDisabled ? 'send' : 'send-active'}.svg`"
                                                        alt="" class="w-6 h-6" />
                                        </button>
                                </el-tooltip>
                        </div>
                </footer>

        </article>
</template>



<style scoped>
/* 设置滚动条的轨道样式 */
::-webkit-scrollbar {
        display: none;
        /* 设置滚动条宽度 */
        width: 8px;
}

/* 设置滚动条的滑块样式 */
::-webkit-scrollbar-thumb {
        background-color: #888;
        /* 设置滑块的背景颜色 */
        border-radius: 5px;
        /* 设置滑块的圆角 */
}

/* 设置滚动条在鼠标悬浮时的样式 */
::-webkit-scrollbar-thumb:hover {
        background-color: #555;
        /* 设置鼠标悬浮时滑块的背景颜色 */
}

/* 设置滚动条轨道两端的按钮样式 */
::-webkit-scrollbar-button {
        display: none;
}



::-webkit-scrollbar {
        /* 设置滚动条宽度 */
        width: 6px;
}

::-webkit-scrollbar-thumb {
        background-color: rgb(180, 182, 183);
        /* 设置滑块的背景颜色 */
        border-radius: 5px;
        /* 设置滑块的圆角 */
}

::-webkit-scrollbar-thumb:hover {
        background-color: rgb(121, 123, 127);
        /* 设置鼠标悬浮时滑块的背景颜色 */
}

.chatBox {
        width: calc(100% - 320px);
}

.chatBox>.chatContent {
        height: calc(100% - 80px);
}

.navbar {
        border-bottom: 1px solid rgb(219, 219, 220);
}

.footer {
        left: 400px;
        width: calc(100% - 480px);
        border: 1px solid rgb(222, 222, 223);
}

.input {
        color: rgb(31, 35, 41);
        font-size: 14px;
        font-family: "Gill Sans", sans-serif;
        border: 1px solid rgb(222, 222, 223);
}

.input:focus {
        border: 1px solid rgb(187, 191, 196);
}

.input:focus .footer {
        border-color: rgb(187, 191, 196);
}

.input::placeholder {
        line-height: 25px;
        color: rgb(174, 175, 178);
        font-size: 14px;
}

.ability>button:hover {
        background-color: rgb(227, 228, 229);
}

.ability>.sendIcon {
        cursor: pointer;
}

.send {
        background-color: rgb(220, 230, 253);
}

.ability>.send:hover {
        background-color: rgb(187, 206, 248);
}

.isDisabled {
        cursor: not-allowed;
}
</style>
