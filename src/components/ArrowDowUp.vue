<template>
    <button 
      @click="menuClick()" 
      class="transition-transform duration-300 flex justify-center items-center"
    >
      <svg 
        :class="isPressed ? 'rotate-180' : 'rotate-0'" 
        class="w-8 h-8 text-white transform transition-transform duration-300" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
</template>

<script setup>
import { ref } from 'vue'


const isPressed = ref(false)
const emit = defineEmits(['changeArrow'])

function menuClick() {
  isPressed.value = !isPressed.value;
  emit('changeArrow');
}
</script>
