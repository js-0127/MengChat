<script setup lang="ts"></script>

<template>
        <aside class="w-96 bg-white  h-full  rounded-tl-2xl overflow-x-hidden overflow-y-auto  py-3">
                <nav class="h-12 fixed top-14 z-20 bg-white w-96 rounded-tl-2xl flex px-3 mr-2 items-center">
                        <div class="h-8 w-8 icon flex justify-center items-center">
                                <img src="/src/assets/icons/list.svg" alt="" class="w-4 h-4">
                        </div>
                        <span class="text-base pl-1">消息</span>
                </nav>
                <main class=" chatList p-3 z-0 h-auto w-full pr-2  flex flex-col items-center overflow-y-auto mt-5">
                        <li class="chat  rounded-md h-16  w-full mt-1 flex items-center " v-for="i in 15" :key="i">
                                <div class="avatar rounded-3xl h-10 w-10 ml-2">
                                        <img src="/src/assets/15.jpg" alt="" class=" h-full w-full  rounded-3xl">
                                </div>
                                <div class="composing flex flex-col ml-2 w-5/6">
                                        <div class="top flex justify-between">
                                                <h3 class="title text-md">丁璐瑶</h3>
                                                <h6 class="date  text-gray-400 ">2022年8月19日</h6>
                                        </div>
                                        <span class="content  text-gray-400">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
                                </div>
                        </li>
                </main>
        </aside>
</template>

<style scoped>
aside:hover::-webkit-scrollbar {
        display: block;
}

aside:hover .chatList {
        padding-right: 0px;
}

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

.icon:hover {
        background: #e8e9e9;
        border-radius: 4px;
        cursor: pointer;
}

.chatList::-webkit-scrollbar {
        /* 设置滚动条宽度 */
        width: 8px;
}

.chatList::-webkit-scrollbar-thumb {
        height: 10px;
        background-color: rgb(180, 182, 183);
        /* 设置滑块的背景颜色 */
        border-radius: 5px;
        /* 设置滑块的圆角 */
}

.chatList::-webkit-scrollbar-thumb:hover {
        background-color: rgb(121, 123, 127);
        /* 设置鼠标悬浮时滑块的背景颜色 */
}

.chat {
        transition: all .3s ease;
}

.chat:hover {
        cursor: pointer;
        background-color: rgb(244, 244, 244);
}

.title {
        color: #1f2329
}

.date {
        font-size: 13px;
}

.content {
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
}
</style>
