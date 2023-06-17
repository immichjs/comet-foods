<template>
  <header class="w-full flex justify-between items-center h-20 pl-8 pr-16">
    <div class="flex items-center gap-4">
      <div class="border-2 border-white duration-150 rounded-full p-[1px] relative">
        <img src="https://picsum.photos/512/512" class="w-12 rounded-full cursor-pointer" @click="toggleMenuProfile()">

        <section :class="{ 'opacity-0': !menuProfileVisible }">
          <div class="absolute w-64 bg-white shadow text-zinc-600 text-sm rounded-md font-medium left-0 top-[4.5rem]">
            <div
              class="flex gap-4 text-md items-center select-none cursor-pointer hover:bg-purple-800 duration-150 py-2 px-6 hover:text-white rounded-tr rounded-tl group">
              <i class="bx bxs-server text-lg text-purple-700 group-hover:text-white"></i>
              <span>Meus dados</span>
            </div>
            <div
              class="flex gap-4 text-md items-center select-none cursor-pointer hover:bg-purple-800 duration-150 py-2 px-6 hover:text-white group">
              <i class="bx bxs-wallet text-lg text-purple-700 group-hover:text-white"></i>
              <span>Formas de pagamento</span>
            </div>
            <div
              class="flex gap-4 text-md items-center select-none cursor-pointer hover:bg-purple-800 duration-150 py-2 px-6 hover:text-white group">
              <i class="bx bxs-home text-lg text-purple-700 group-hover:text-white"></i>
              <span>Endereço</span>
            </div>
            <div
              class="flex gap-4 text-md items-center select-none cursor-pointer hover:bg-red-500 duration-150 py-2 px-6 hover:text-white rounded-bl rounded-br group"
              @click="logout()">
              <i class="bx bx-power-off text-lg text-red-500 group-hover:text-white"></i>
              <span>Sair</span>
            </div>
          </div>
        </section>
      </div>
      <span class="text-sm font-medium text-zinc-500 truncate max-w-[10rem]">Olá, <strong class="text-purple-800">Michel
          França de Assis</strong></span>
      <div class="w-1 h-4 border-r"></div>
      <div class="cursor-pointer text-zinc-500 hover:text-purple-600 text-xl">
        <i class="bx bxs-bell duration-100"></i>
      </div>
    </div>

    <div class="flex items-center border w-[20rem] overflow-hidden rounded-lg focus:border-purple-600">
      <input type="text" class="py-2 px-3 outline-none w-full text-sm bg-white"
        placeholder="Não encontrou o que procura?">
      <i class="bx bx-search px-1.5 text-lg text-purple-800"></i>
    </div>

    <div class="flex gap-4 items-center text-xl py-2 px-4">
      <div class="relative group cursor-pointer text-zinc-500 hover:text-purple-600">
        <the-tooltip message="Meus favoritos" class="-left-[7rem] top-[2.5rem]">
          <div class="absolute w-2 h-2 rotate-45 -top-1 right-[.65rem] bg-purple-800"></div>
        </the-tooltip>
        <i class="bx bxs-heart"></i>
      </div>
      <div
        class="flex gap-4 items-center text-zinc-500 group cursor-pointer whitespace-nowrap border py-2 px-4 bg-white rounded-lg hover:border-purple-600 duration-150">
        <span class="text-sm font-medium group-hover:text-purple-600">Meu carrinho</span>
        <i class="bx bxs-basket group-hover:text-purple-600"></i>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

import TheTooltip from './TheTooltip.vue';

import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const menuProfileVisible = ref(false)

const toggleMenuProfile = () => menuProfileVisible.value = !menuProfileVisible.value
const logout = () => {
  userStore.$reset()
  router.push('/login')
}
</script>