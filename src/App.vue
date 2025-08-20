<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>
  
<template>
  <NavBar/>
  <router-view :key="$route.fullPath"/>
  <Footer/>
</template>

<style scoped>

</style>
