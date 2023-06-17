<template>
  <nav class="bg-white h-screen w-[5.5rem] shadow rounded-tr-xl rounded-br-xl">
    <section class="flex flex-col py-4 h-full">
      <div class="flex items-center justify-center">
        <img src="../assets/images/comet-logo-2.png" class="w-8">
      </div>

      <section class="flex flex-col items-center text-xl text-zinc-600 mt-8">
        <div
          class="flex justify-center py-5 cursor-pointer duration-100 hover:bg-zinc-200 hover:text-purple-800 rounded-xl w-full relative group"
          v-for="menuItem in listNavMenuItems" :key="menuItem">
          <div class="w-2 h-[1.25rem] bg-purple-800 opacity-0 rounded-lg group-hover:opacity-100 absolute -left-1"></div>
          <i :class='menuItem.icon'></i>
          <the-tooltip :message="menuItem.message" class="left-[5.75rem] top-[.75rem]">
            <div class="absolute w-2 h-2 rotate-45 -left-1 top-4 bg-purple-800"></div>
          </the-tooltip>
        </div>
      </section>

      <div class="flex items-center justify-center text-xl text-zinc-700 mt-auto">
        <div
          class="flex justify-center py-5 cursor-pointer duration-100 hover:bg-zinc-200 hover:text-red-600 w-full relative group rounded-xl"
          @click="logout()">
          <div class="w-2 h-[1.25rem] bg-red-600 opacity-0 rounded-lg group-hover:opacity-100 absolute -left-1"></div>
          <i class='bx bx-power-off'></i>
          <the-tooltip message="Sair" color="bg-red-600" class="left-[5.75rem] top-[.75rem]">
            <div class="absolute w-2 h-2 rotate-45 -left-1 top-4 bg-red-600"></div>
          </the-tooltip>
        </div>
      </div>
    </section>
  </nav>
</template>

<script setup>
import TheTooltip from '../components/TheTooltip.vue'

import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore';
import { reactive } from 'vue';

const userStore = useUserStore()
const router = useRouter()

const listNavMenuItems = reactive([
  { icon: 'bx bxs-hot', message: 'Promoções' },
  { icon: 'bx bxs-baguette', message: 'Entradas' },
  { icon: 'bx bxs-cheese', message: 'Porções' },
  { icon: 'bx bxs-beer', message: 'Bebidas' },
  { icon: 'bx bxs-pizza', message: 'Pizzas' },
  { icon: 'bx bxs-cake', message: 'Sobremesas' },
])

const logout = () => {
  userStore.$reset()
  router.push('/login')
}
</script>