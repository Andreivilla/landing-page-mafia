<template>
  <div>
    <h2 class="text-white text-center text-3xl">Midia</h2>
    <ul class="m-4">
      <li class=" font-logo mb-4 h-full w-full" v-for="(image, i) in images" :key="i">
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