<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>

</style>
