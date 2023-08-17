<script setup lang="ts">
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import Sidebar from './sidebar/index.vue'
</script>

<template>
  <div class="h-screen layout w-screen relative bg-[#242e4a]">
    <div class="tabbar h-14 fixed top-0 left-16">
      <Tabbar></Tabbar>
    </div>
    <div class="sidebar h-full w-16 ">
      <Sidebar></Sidebar>
    </div>
    <div class="main absolute top-14 left-16 bg-[#384868]">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped>
.tabbar {
  width: calc(100% - 4rem);
  background: linear-gradient(to left, #384868 20%, #242e4a 40%, #384868 100%);
}

.main {
  width: calc(100% - 4rem);
  height: calc(100% - 3.5rem);
}

.sidebar {
  background: linear-gradient(#384868 50%, #242e4a 100%);
}
</style>
