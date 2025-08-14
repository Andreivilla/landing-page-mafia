import { defineStore } from 'pinia';

export const useTodos = defineStore('todos', {
  state: () => ({
    // estado reativo
  }),
  getters: {
    // funções computadas baseadas no estado
  },
  actions: {
    // métodos que podem alterar o estado
  }
});
