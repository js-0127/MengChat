<script setup lang="ts"></script>

<template>
        <div class=" bg-white w-full h-full rounded-tl-2xl p-5">
                <router-view v-slot="{ Component }">
                        <transition name="fade">
                                <component :is="Component" />
                        </transition>
                </router-view>
        </div>
</template>

<style scoped>
.fade-enter-from {
        transform: scale(0);
}

.fade-enter-active {
        transition: all 1s;
}

.fade-enter-to {
        transform: scale(1);
}
</style>
