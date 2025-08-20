<template>
  <div class="relative min-h-screen flex flex-col bg-black">

    <div
      class="inset-0 bg-no-repeat flex flex-col bg-cover h-100 justify-end"
      :style="`background-image: url(${store.CoverImage})`"
    >
      <!-- Conteúdo visível e nítido -->
      <div class="z-10 p-10">
        <div class="bg-black p-3">
          <h1 class="text-xl text-white"> {{ store.Slogan }} </h1>
        </div>
      </div>
    </div>
    
    <div class="bg-black text-white p-3">
      <p>{{ store.GameDescription }}</p>
    </div>

    <MediaList 
      :images="store.GameplayImages"
    />

    <BuyPlataform
      :store="store"
    />
    
  </div>
</template>

<script setup>
import BuyPlataform from '../components/BuyPlataform.vue';
import MediaList from '../components/MediaList.vue';

const props = defineProps({
  store: Object,
})

</script>