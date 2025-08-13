<script setup>
  import { ref } from 'vue';
  import HamburgerMenu from './HamburgerMenu.vue';

  const menuOpen = ref(false);

  function changeMenu(){
    menuOpen.value = !menuOpen.value;
  }
</script>

<template>
<header class="lg:px-16 px-4 bg-black flex flex-wrap items-center py-4 shadow-md z-50">
  <div class="flex-1 flex justify-between items-center">
      <router-link to="/" class="font-logo text-4xl font-bold">MAFIA</router-link>
  </div>
    <HamburgerMenu 
      class="md:hidden block"
      @changeMenu="changeMenu"
    /> 

  <div :class="menuOpen ? 'block' : 'hidden'" class="md:flex md:items-center md:w-auto w-full">
      <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><router-link to="/MafiaI" class="font-logo md:p-4 py-3 px-0 block text-white hover:text-primary-red text-2xl">
                  MAFIA<span class="text-primary-red text-2xl">I</span>
                </router-link>
              </li>
              <li><router-link to="/MafiaII" class="font-logo md:p-4 py-3 px-0 block text-white hover:text-primary-red text-2xl">
                  MAFIA<span class="text-primary-red">II</span>
                </router-link>
              </li>
              <li><router-link to="/MafiaIII" class="font-logo md:p-4 py-3 px-0 block text-white hover:text-primary-red text-2xl">
                  MAFIA<span class="text-primary-red">III</span>
                </router-link>
              </li>
          </ul>
      </nav>
  </div>
</header>
</template>

<style scoped>

</style>