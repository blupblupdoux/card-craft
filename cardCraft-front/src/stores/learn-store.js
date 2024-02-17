import { defineStore } from 'pinia';

export const useLearnStore = defineStore('learn', {
  state: () => ({
    currentDeckId: null,
    learningQueue: []
  }),
  getters: {
    //
  },
  actions: {
    //
  },
});
