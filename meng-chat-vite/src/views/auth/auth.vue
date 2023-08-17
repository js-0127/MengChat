<script setup lang="ts">
import FormLogin from '@/components/auth/FormLogin.vue'
import FormRegister from '@/components/auth/FormRegister.vue' 
import AuthBg from '@/components/auth/AuthBg.vue'
import { storeToRefs } from 'pinia';
import {useAuthComponent} from '@/store/index'

const {showComponent} = storeToRefs(useAuthComponent())
const {authStatus} = useAuthComponent()


</script>
<template>
    <div class="relative min-h-screen flex overflow-hidden">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
            <AuthBg></AuthBg>
           
            <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                <div class="max-w-md w-full mx-auto space-y-8">
               
                  <Transition name="fade" mode="out-in"> 
                    <FormLogin v-if="showComponent === authStatus.login"></FormLogin>
                    <FormRegister v-else-if="showComponent === authStatus.regist"></FormRegister>
                  </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease;
  transform: translateX(0%);

}

.fade-enter-from {
  opacity: .2;
  transform: translateX(10%);
}
.fade-leave-to {
  opacity: .2;
  transform: translateX(-10%);
}

</style>
