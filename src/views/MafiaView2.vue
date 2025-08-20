<template>
  <GamePage
  :store="store"
  />
</template>

<script setup>
  import GamePage from '../components/GamePage.vue';
  import { useMafia2Store } from '../stores/stores';

  const store = useMafia2Store();
</script>