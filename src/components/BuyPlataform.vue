<template>
  <div class="flex justify-center">
    <div class="border-solid bg-black m-4">
      <img src="/image/util/icone-epic.png" alt="" class="h-10 w-10 object-cover">
      
    </div>
    <div class="border-solid bg-black m-4">
      <img src="/image/util/icone-xbox.png" alt=""class="h-10 w-10 object-cover filter invert">
    </div>
    <div class="border-solid bg-black m-4">
      <img src="/image/util/icone-steam.png" alt=""class="h-10 w-10 object-cover">
    </div>      
  </div>
  
  <ul >
    <li>
      <!-- Centering wrapper -->
      <div class="m-2 relative flex flex-col text-white bg-secondary-gray shadow-md bg-clip-border rounded-xl">
        <div class="relative mx-4 mt-4 overflow-hidden bg-white bg-clip-border rounded-xl">
            <img
                :src="store.CoverImage"
                alt="card-image" class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-white">
                    {{ store.Name }}
                </p>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {{ current_price_single }}
                </p>
            </div>
        </div>
        <div class="p-6 pt-0">
            <button
                class="bg-primary-red align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button">
                Add to Cart
            </button>
        </div>
      </div>
    </li>
    <li>
      <!-- Centering wrapper -->
      <div class="m-2 relative flex flex-col text-white bg-secondary-gray shadow-md bg-clip-border rounded-xl">
        <div class="relative mx-4 mt-4 overflow-hidden bg-white bg-clip-border rounded-xl">
            <img
                src="/image/home/mafia-trilogy.jpg"
                alt="card-image" class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-white">
                    {{ store.Name }}
                </p>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {{ current_price_bundle }}
                </p>
            </div>
        </div>
        <div class="p-6 pt-0">
            <button
                class="bg-primary-red align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button">
                Add to Cart
            </button>
        </div>
      </div>
    </li>
  </ul>

</template>
<script setup>
import { ref } from 'vue';

const current_price_single = ref(23.1);
const current_price_bundle = ref(23.1);

defineProps({
  store: Object,
});


</script>