<script setup lang="ts"></script>

<template>
        <div class="bg-white w-full h-full rounded-tl-2xl overflow-x-hidden">
                <router-view v-slot="{ Component }">
                        <transition mode="out-in" name="fade">
                                <component :is="Component" />
                        </transition>
                </router-view>
        </div>
</template>

<style scoped>
.fade-enter-from {
        opacity: 0;
}

.fade-enter-active {
        transition: all 1s;
}

.fade-enter-to {
        opacity: 1;
}
</style>
