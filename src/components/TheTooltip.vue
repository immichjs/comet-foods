<template>
  <div class="flex items-center justify-center absolute bg-purple-800 text-white text-sm font-medium whitespace-nowrap px-4 py-2.5 rounded-lg left-[7rem] top-5 opacity-0 group-hover:opacity-100 pointer-events-none tracking-wider" :class="[color]">
    <div class="absolute w-2 h-2 rotate-45 -left-1 top-4" :class="[color]"></div>
    {{ message }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  message: { type: String, default: '' },
  color: { type: String, default: 'bg-purple-800' }
})
</script>