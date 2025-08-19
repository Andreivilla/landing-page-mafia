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
    SteamPlataform: [{price: 229.90, url: "https://store.steampowered.com/app/1030840/Mafia_Definitive_Edition/"},{price: 341.92, url:"https://store.steampowered.com/bundle/48195/Mafia_Trilogy/"}],
    XboxPlataform: [{price: 164.95, url: "https://www.xbox.com/pt-BR/games/store/mafia-definitive-edition/9NZC09NNR93L"},{price: 249.90, url:"https://www.xbox.com/pt-BR/games/store/mafia-trilogy/9NKG0X1MGQTX"}],
    EpicPlataform: [{price: 229.90, url: "https://store.epicgames.com/pt-BR/p/mafia-definitive-edition"},{price: 279, url:"https://store.epicgames.com/pt-BR/bundles/mafia-trilogy"}],
    
    CurrentPlataformName: 'Steam',
    CurrentPlataform: [{price: 229.90, url: "https://store.steampowered.com/app/1030840/Mafia_Definitive_Edition/"},{price: 341.92, url:"https://store.steampowered.com/bundle/48195/Mafia_Trilogy/"}],
  }),
  getters: {
    // funções computadas baseadas no estado
  },
  actions: {
    changePlataform(plataform) {
      if(plataform === 'steam'){
        this.CurrentPlataform = this.SteamPlataform;
        this.CurrentPlataformName = 'Steam';
      }else if(plataform === 'epic'){
        this.CurrentPlataform = this.EpicPlataform;
        this.CurrentPlataformName = 'Epic';
      }else if(plataform === 'xbox'){
        this.CurrentPlataform = this.XboxPlataform;
        this.CurrentPlataformName = 'Xbox';
      }
    }
  }
});
