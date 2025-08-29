<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>
  
<template>
  <div class="min-h-screen flex flex-col w-full bg-black">
    <NavBar class="max-w-screen-2xl mx-auto" />

    <!-- Conteúdo principal que cresce -->
    <router-view
      :key="$route.fullPath"
      class="flex-1 max-w-screen-2xl mx-auto"
    />

    <!-- Footer sempre no fim da tela -->
    <Footer class="max-w-screen-2xl mx-auto" />
  </div>
</template>


<style scoped>

</style>
