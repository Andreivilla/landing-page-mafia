import { defineStore } from 'pinia';

export const useMafia1Store = defineStore('mafia1', {
  state: () => ({
    Name: "Mafia: Definitive Edition",
    Slogan: "QUANDO NEM TUDO É O QUE PARECE",
    GameDescription: `Lost Heaven, 1930. Enquanto se esforçava para sobreviver 
    como taxista, Tommy Angelo tem um encontro involuntário com a Máfia, que 
    revela uma vida de recompensas grande demais para ser ignorada. Um clássico 
    adorado, fielmente refeito e expandido do zero .`,
    CoverImage: '/image/mafia1/capa.jpg',
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

export const useMafia2Store = defineStore('mafia2', {
  state: () => ({
    Name: "Mafia II: Definitive Edition",
    Slogan: "QUANDO TUDO AINDA NÃO É O BASTANTE",
    GameDescription: `Empire Bay, 1943. De volta aos Estados Unidos, de licença 
    da Segunda Guerra Mundial, Vito Scaletta se envolve em uma vida de crimes 
    para pagar dívidas familiares. Este favorito dos fãs foi remasterizado com 
    melhorias impressionantes de áudio e vídeo, e todos os DLCs estão incluídos.`,
    CoverImage: '/image/mafia2/capa.jpg',
    Plataform: '',
    GameplayImages: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_d29c8180a12271dd692e5601af95a82c0e016b98.600x338.jpg?t=1747682590",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_f6d60fcb54fce33e1365861d472508a7f6350d2a.600x338.jpg?t=1747682590",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_dc2a279273bd3f92401bda589e3220f119c40dcb.600x338.jpg?t=1747682590",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_d95de409e6b7e123348e1c9fc42277232901e613.600x338.jpg?t=1747682590",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_3422719dda375300922c14a8493235fc95beeed3.600x338.jpg?t=1747682590",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_7bd7a6afa135b6149afe79497475db12e8769557.600x338.jpg?t=1747682590",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030830/ss_baeeec8c3efb5a55952df81549b52ebb7c123d81.600x338.jpg?t=1747682590",
    ],
    SteamPlataform: [{price: 169.99, url: "https://store.steampowered.com/app/1030830/Mafia_II_Definitive_Edition/"},{price: 341.92, url:"https://store.steampowered.com/bundle/48195/Mafia_Trilogy/"}],
    XboxPlataform: [{price: 124.95, url: "https://www.xbox.com/pt-BR/games/store/mafia-ii-definitive-edition/9n000033sqdr"},{price: 249.90, url:"https://www.xbox.com/pt-BR/games/store/mafia-trilogy/9NKG0X1MGQTX"}],
    EpicPlataform: [{price: 169.99, url: "https://store.epicgames.com/pt-BR/p/mafia-ii-definitive-edition"},{price: 279, url:"https://store.epicgames.com/pt-BR/bundles/mafia-trilogy"}],
    
    CurrentPlataformName: 'Steam',
    CurrentPlataform: [{price: 169.99, url: "https://store.steampowered.com/app/1030840/Mafia_Definitive_Edition/"},{price: 341.92, url:"https://store.steampowered.com/bundle/48195/Mafia_Trilogy/"}],
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

export const useMafia3Store = defineStore('mafia3', {
  state: () => ({
    Name: "Mafia III: Definitive Edition",
    Slogan: "QUANDO TUDO ESTÁ PERDIDO",
    GameDescription: `New Bordeaux, 1968. Para se vingar da traição suprema, 
    Lincoln Clay precisa definir uma nova geração de família criminosa, 
    derrubando a antiga da maneira que quiser. Uma experiência narrativa 
    premiada, reintroduzida em um pacote completo.`,
    CoverImage: '/image/mafia3/capa.avif',
    Plataform: '',
    GameplayImages: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_5b51d533d6e270d41ccb65d4bed3d5126944d56c.600x338.jpg?t=1746716602",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_0e69751604b920c1cb3e75b1835c428086eb3b5b.600x338.jpg?t=1746716602",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_46e353b74657a90375e889012bc8eeb35801fccb.600x338.jpg?t=1746716602",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_b94ae5618c3f0112bb178bc97941e5fcdd0158eb.600x338.jpg?t=1746716602",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_9703339bcb7337d897c3db1db1e33051b72b1c46.600x338.jpg?t=1746716602",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_4747fb9e9e634cae3d394c16b72a6c1ef840cef8.600x338.jpg?t=1746716602",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/360430/ss_9b5f6a18f85256b0fd0d5f8409fb370c0ae0ce97.600x338.jpg?t=1746716602",
    ],
    SteamPlataform: [{price: 169.99, url: "https://store.steampowered.com/app/360430/Mafia_III_Definitive_Edition/?l=portuguese"},{price: 341.92, url:"https://store.steampowered.com/bundle/48195/Mafia_Trilogy/"}],
    XboxPlataform: [{price: 124.95, url: "https://www.xbox.com/pt-BR/games/store/mafia-iii-definitive-edition/BVZLS7XZ68KF"},{price: 249.90, url:"https://www.xbox.com/pt-BR/games/store/mafia-trilogy/9NKG0X1MGQTX"}],
    EpicPlataform: [{price: 169.99, url: "https://store.epicgames.com/pt-BR/p/mafia-iii-definitive-edition"},{price: 279, url:"https://store.epicgames.com/pt-BR/bundles/mafia-trilogy"}],
    
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