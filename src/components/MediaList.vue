<template>
  
    <h2 class="text-white text-center text-3xl">Midia</h2>
    <div class="flex justify-center mb-4">
      <ul class="m-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <li class="font-logo h-full w-full" v-for="(image, i) in images" :key="i">
          <img :src="image" alt="">
        </li>
      </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  images: Array
})
</script>

<style scoped>

</style>