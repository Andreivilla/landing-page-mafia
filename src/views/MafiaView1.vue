<template>
  <GamePage
  :store="store"
  />
</template>

<script setup>
  import GamePage from '../components/GamePage.vue';
  import { useMafia1Store } from '../stores/stores';

  const store = useMafia1Store();
</script>
