<template>
  <div class="flex justify-center">
    <div class="bg-black m-4">
      <button @click="changePlataform('epic')">
        <img src="/image/util/icon-epic.png" alt="" class="h-10 w-10 object-cover">
      </button>
    </div>
    <div class="bg-black m-4">
      <button @click="changePlataform('xbox')">
        <img src="/image/util/icon-xbox.png" alt=""class="h-10 w-10 object-cover filter invert">
      </button>
    </div>
    <div class="bg-black m-4">
      <button @click="changePlataform('steam')">
        <img src="/image/util/icon-steam.png" alt=""class="h-10 w-10 object-cover">
      </button>
    </div>      
  </div>
  
  <h1 class="text-white text-center text-3xl">{{ CurrentPlataformName }}</h1>

  <ul class="m-4 grid grid-cols-1 gap-4 md:grid-cols-2">
    <li>
      <!-- Centering wrapper -->
      <div class="m-2 relative flex flex-col text-white bg-secondary-gray shadow-md bg-clip-border rounded-xl md:h-[700px]">
        <div class="relative mx-4 mt-4 overflow-hidden bg-white bg-clip-border rounded-xl md:h-[600px]">
            <img
                :src="store.CoverImage"
                alt="card-image" 
                class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-white">
                    {{ store.Name }}
                </p>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {{ CurrentPlataform[0].price }}
                </p>
            </div>
        </div>
        <div class="p-6 pt-0">
          <a
            :href="CurrentPlataform[0].url"
            class="bg-primary-red align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button">
            Comprar Agora
          </a>
        </div>
      </div>
    </li>
      
    <li>
      <div class="m-2 relative flex flex-col text-white bg-secondary-gray shadow-md bg-clip-border rounded-xl md:h-[700px]">
        <div class="relative mx-4 mt-4 overflow-hidden bg-white bg-clip-border rounded-xl md:h-[600px]">
            <img
                src="/image/home/mafia-trilogy.jpg"
                alt="card-image" 
                class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-white">
                    Mafia Trilogy
                </p>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {{ CurrentPlataform[1].price }}
                </p>
            </div>
        </div>
        <div class="p-6 pt-0">
            <a
              :href="CurrentPlataform[1].url"
              class="bg-primary-red align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button">
              Comprar Agora
            </a>
        </div>
      </div>
    </li>
  </ul>

</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  store: Object,
});

const CurrentPlataform = computed(() => props.store.CurrentPlataform);
const CurrentPlataformName = computed(() => props.store.CurrentPlataformName);

function changePlataform(plataform) {
  props.store.changePlataform(plataform);
}

</script>