import { defineStore } from 'pinia';

export const useMafia1Store = defineStore('mafia1', {
  state: () => ({
    Name: "Mafia: Definitive Edition",
    CoverImage: '/image/mafia1/capa.webp',
    Plataform: '',
    GameplayImages: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/ss_f531c551d9794deafc1e45421b70e8d4c254aaca.600x338.jpg?t=1750802973",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/ss_53523304d2d0f9846c9c27059334629e8a83144e.600x338.jpg?t=1750802973",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/ss_b78562d5fd27b42dc22b49c03c4d0bb5c0a2f043.600x338.jpg?t=1750802973",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/ss_a542b5e16973c6681192977fb0942e3dfe5b21de.600x338.jpg?t=1750802973",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030840/ss_7a147e0dd092400229c6c1fd513625a62ae9a4eb.600x338.jpg?t=1750802973"
    ],

  }),
  getters: {
    // funções computadas baseadas no estado
  },
  actions: {
    // métodos que podem alterar o estado
  }
});
