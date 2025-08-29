<template>
  <div class="flex flex-col bg-[url(/image/home/mafia-trilogy.jpg)] 
    bg-size-[auto_150%] bg-center min-h-screen">
    
    <div class="flex-grow relative backdrop-blur-sm 
      flex flex-col justify-center">      
      
      <div class="bg-black p-4">
        <p class="text-xl p-3 text-white">
          "Family. Power. Respect. Live the life of a gangster across three distinct eras of organized crime in America."
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center gap-8 m-4">
        <div class="aspect-square overflow-hidden md:w-80">
          <router-link to="/MafiaI">
            <img src="/image/mafia1/capa.jpg" alt="" class="w-full h-full object-cover object-center">
          </router-link>
        </div>
        <div class="aspect-square overflow-hidden md:w-80">
          <router-link to="/MafiaII">
            <img src="/image/mafia2/capa.jpg" alt="" class="w-full h-full object-cover object-center">
          </router-link>
        </div>
        <div class="aspect-square overflow-hidden md:w-80">
          <router-link to="/MafiaIII">
            <img src="/image/mafia3/capa.avif" alt="" class="w-full h-full object-cover object-center">
          </router-link>
        </div>
      </div>

      <div class="bg-black p-4">
        <p class="mt-2 text-white">
          Mafia: Trilogy is a crime drama video game trilogy bundle consisting of Mafia: Definitive Edition, a remaster of Mafia II, and a re-release of Mafia III, with all DLC of each respective game included.
        </p>
      </div>

    </div>
  </div>
</template>
