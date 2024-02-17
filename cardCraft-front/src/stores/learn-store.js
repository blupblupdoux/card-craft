import { defineStore } from 'pinia';

export const useLearnStore = defineStore('learn', {
  state: () => ({
    deckId: null,
    flashcard: null,
    learningQueue: []
  }),
  getters: {
    //
  },
  actions: {
    shuffleFlashcards(flashcards) {
      this.learningQueue = flashcards.sort(() => 0.5 - Math.random())
    }
  },
});
