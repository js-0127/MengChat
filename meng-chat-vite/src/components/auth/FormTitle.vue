<script setup lang="ts">
const props = defineProps({
  title: String,
  subTitle: String
})
</script>

<template>
        <div class="text-center">
                <h2 class="mt-6 text-3xl font-bold text-gray-900">{{ props.title }}</h2>
        </div>
        <div class="flex items-center justify-center space-x-2">
                <span class="line"></span>
                <span class="text-gray-300 font-normal">{{ props.subTitle }}</span>
                <span class="line"></span>
        </div>
</template>

<style scoped>
@tailwind components;

@layer components {
     .line {
        @apply h-px w-16 bg-gray-200
    }
}
</style>
