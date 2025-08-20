<template>
  <GamePage
  :store="store"
  />
</template>

<script setup>
  import GamePage from '../components/GamePage.vue';
  import { useMafia3Store } from '../stores/stores';

  const store = useMafia3Store();
</script>
