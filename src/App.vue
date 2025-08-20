<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>
  
<template>
  <NavBar class="max-w-screen-2xl mx-auto"/>
  <router-view :key="$route.fullPath" class="max-w-screen-2xl mx-auto"/>
  <Footer class="max-w-screen-2xl mx-auto"/>
</template>

<style scoped>

</style>
