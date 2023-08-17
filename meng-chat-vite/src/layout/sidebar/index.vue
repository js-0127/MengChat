<script setup lang="ts">
import { routes } from '@/router'
import { RouteRecordRaw, useRoute } from 'vue-router';

const route = useRoute()

const routerList = routes[0].children
const routeIsActive = (targetRoute: RouteRecordRaw) => {
        return targetRoute.path === route.path;
};
</script>

<template>
        <div class=" w-full h-full py-2 px-3">
                <div class="h-10 w-10">
                        <img src="/src/assets/tm.gif" alt="" class="w-full h-full rounded-3xl avatar">
                </div>
                <div class="mt-3 list w-full">
                        <ul class="w-full h-full flex flex-col mt-4 items-center">
                                <router-link :to="item.path"
                                        class="item w-14 mt-1 h-14 flex-col flex items-center justify-center"
                                        v-for="(item, index) in routerList" :key="index"
                                        :class="{ 'active': routeIsActive(item) }">
                                        <img :src="`/src/assets/icons/${routeIsActive(item) ? item.meta?.activeIcon : item.meta?.icon}.svg`"
                                                alt="">
                                        <span class=" text-xs message mt-1">
                                                {{ item.meta?.title }}
                                        </span>
                                </router-link>

                        </ul>
                </div>
        </div>
</template>

<style scoped>
.avatar:hover {
        transform: scale(1.1);
        transition: all .3s ease;
        cursor: pointer
}

.list {
        height: calc(100% - 4.25rem);
}

.item:hover {
        background-color: rgb(38, 50, 73);
        cursor: pointer;
        border-radius: 12px;
}

.item:hover .message {
        color: white
}


.message {
        font-family: sans-serif;
        color: #c1c5ce;
}

.active {
        background-color: rgb(38, 50, 73);
        border-radius: 12px;
}

.active .message {
        color: white
}
</style>
