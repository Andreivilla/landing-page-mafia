<template>
  <div class="bg-black ">
    <div class="flex justify-center">
      <a href="https://2k.com/en-US/" class="m-4">
        <img src="/image/util/icon-2k.png" alt="" class="h-10 ">
      </a>
      <a href="https://www.instagram.com/mafiagame/" class="m-4">
        <img src="/image/util/icon-instagram.png" alt="" class="h-10 filter invert">
      </a>
      <a href="https://www.youtube.com/mafiagame" class="m-4">
        <img src="/image/util/icon-youtube.png" alt="" class="h-10 filter invert">
      </a>
      <a href="https://x.com/mafiagame" class="m-4">
        <img src="/image/util/icon-x.png" alt="" class="h-10 filter invert">
      </a>
    </div>

    <div :class="isGameOpen ? 'block' : 'hidden'">
      <ul class="md:flex items-center justify-between text-base pt-4 md:pt-0">
        <li><router-link to="/MafiaI" class="font-logo m-2 w-full px-0 block text-white text-xl">
            MAFIA I
          </router-link>
        </li>
        <li><router-link to="/MafiaII" class="font-logo m-2 w-full px-0 block text-white text-xl">
            MAFIA II
          </router-link>
        </li>
        <li><router-link to="/MafiaIII" class="font-logo m-2 w-full px-0 block text-white text-xl">
            MAFIA III
          </router-link>
        </li>
      </ul>
    </div>

    <ArrowDowUp
      class="md:hidden block w-full"
      @change-arrow="changeGameOpen"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowDowUp from './ArrowDowUp.vue';

const isGameOpen = ref(false);

function changeGameOpen(){
  isGameOpen.value =! isGameOpen.value;
}
</script>