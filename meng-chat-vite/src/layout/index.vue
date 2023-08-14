<script setup lang="ts">
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import Sidebar from './sidebar/index.vue'
</script>

<template>
  <div class="h-screen w-screen layout relative">
    <div class="tabbar h-16 fixed top-0  left-16">
      <Tabbar></Tabbar>
    </div>
    <div class="sidebar h-full w-16">
    
      <Sidebar></Sidebar>
    </div>
    <div class="main absolute top-16 left-16">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  background-color: rgb(55, 68, 99);
}

.tabbar {
  width: calc(100% - 4rem);
}

.main {
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
}
</style>
