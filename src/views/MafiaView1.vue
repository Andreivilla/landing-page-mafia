<template>
  <div class="relative min-h-screen flex flex-col bg-black">

    <div
      class="inset-0 bg-no-repeat flex flex-col bg-cover h-100 justify-end"
      style="background-image: url('/image/mafia1/capa.webp');"
    >
      <!-- Conteúdo visível e nítido -->
      <div class="z-10 p-10">
        <div class="bg-black p-3">
          <h1 class="text-2xl text-white">QUANDO NEM TUDO É O QUE PARECE</h1>
        </div>
      </div>
    </div>
    
    <div class="bg-black text-white p-3">
      <p> Definitive Edition conta a história de Tommy Angelo, um taxista 
      trabalhador que mal consegue pagar as contas na cidade americana de 
      Lost Heaven nos idos de 1930. Em uma noite fatídica, ele tem um encontro 
      inesperado com a Máfia Italiana, que mostra a ele uma vida de recompensas 
      grandes demais para se ignorar. Agora ele se vê envolvido no violento mundo 
      do crime organizado, fazendo trabalhos para a organização de Don Salieri, 
      que está em guerra contra uma cruel família de mafiosos, os Morello. 
      Como Tommy, você deverá estabelecer-se no traiçoeiro submundo de Lost 
      Heaven, onde nem tudo é o que se parece — inclusive a certeza de quem são 
      seus aliados e inimigos.</p>
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
import { useMafia1Store } from '../stores/stores';
import BuyPlataform from '../components/BuyPlataform.vue';
import MediaList from '../components/MediaList.vue';

const store = useMafia1Store();
  
</script>

<style scoped>

</style>