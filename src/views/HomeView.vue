<template>
  <section class="flex bg-zinc-50">
    <the-nav></the-nav>
    <the-header></the-header>
  </section>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import TheHeader from '../components/TheHeader.vue'
import TheNav from '../components/TheNav.vue'

onBeforeMount(() => {

});
</script>