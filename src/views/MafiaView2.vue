<template>
  <div class="relative min-h-screen flex flex-col bg-black">

    <div
      class="inset-0 bg-no-repeat flex items-end justify-center bg-cover h-lvw md:max-h-320"
      :style="`background-image: url(${baseUrl + store.CoverImage})`"
    >
      <!-- Conteúdo visível e nítido -->
      <div class="z-10 p-10">
        <div class="bg-black p-3">
          <h1 class="text-l md:text-5xl text-white text-center">
            {{ store.Slogan }}
          </h1>
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
import { useRoute } from 'vue-router'
import { useMafia2Store } from '../stores/stores'
import MediaList from '../components/MediaList.vue'
import BuyPlataform from '../components/BuyPlataform.vue'

const route = useRoute()
let store = useMafia2Store(route.params.widgetID)
const baseUrl = import.meta.env.BASE_URL
</script>
