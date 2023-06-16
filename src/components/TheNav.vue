<template>
  <nav class="bg-white border-r h-screen w-24 shadow">
    <section class="flex flex-col py-4 h-full">
      <div class="flex items-center justify-center">
        <img src="../assets/images/comet-logo-2.png" class="w-12">
      </div>

      <section class="flex flex-col items-center text-2xl text-zinc-700 mt-8">
        <div class="flex justify-center py-6 cursor-pointer duration-100 hover:bg-zinc-200 w-full relative group">
          <i class='bx bxs-store-alt'></i>
          <the-tooltip message="Recomendações"></the-tooltip>
        </div>
        <div class="flex justify-center py-6 cursor-pointer duration-100 hover:bg-zinc-200 w-full relative group">
          <i class='bx bxs-baguette'></i>
          <the-tooltip message="Entradas"></the-tooltip>
        </div>
        <div class="flex justify-center py-6 cursor-pointer duration-100 hover:bg-zinc-200 w-full relative group">
          <i class='bx bxs-pizza'></i>
          <the-tooltip message="Pizzas"></the-tooltip>
        </div>
        <div class="flex justify-center py-6 cursor-pointer duration-100 hover:bg-zinc-200 w-full relative group">
          <i class='bx bxs-drink'></i>
          <the-tooltip message="Bebidas"></the-tooltip>
        </div>
        <div class="flex justify-center py-6 cursor-pointer duration-100 hover:bg-zinc-200 w-full relative group">
          <i class='bx bxs-receipt'></i>
          <the-tooltip message="Meus pedidos"></the-tooltip>
        </div>
      </section>

      <div class="flex items-center justify-center text-2xl text-zinc-700 mt-auto">
        <div class="flex justify-center py-6 cursor-pointer duration-100 hover:bg-zinc-200 w-full relative group">
          <i class='bx bx-log-out'></i>
          <the-tooltip message="Sair" color="bg-red-500"></the-tooltip>
        </div>
      </div>
    </section>
  </nav>
</template>

<script setup>
import TheTooltip from '../components/TheTooltip.vue'
</script>