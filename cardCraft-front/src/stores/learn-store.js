import { defineStore } from 'pinia';
import { useDecksStore } from 'src/stores/decks-store';

export const useLearnStore = defineStore('learn', {
  state: () => ({
    deckId: null,
    flashcard: null,
    learningQueue: [],
    answerShown: false
  }),
  getters: {
    //
  },
  actions: {
    updateAnswerShown(bool) {
      this.answerShown = bool
    },
    getNextFlashcard() {
      let nextIndex = 0

      if(this.flashcard) {
        const currentIndex = this.learningQueue.findIndex(card => card.id === this.flashcard.id)
        nextIndex = currentIndex + 1
      }

      this.flashcard = this.learningQueue[nextIndex]
    },
    getFlashcardsToLearn(deckId) {
      const deckStore = useDecksStore()
      const deck = deckStore.getDeck(deckId)

      this.deckId = deckId
      this.learningQueue = deck.flashcards.sort(() => Math.random() - 0.5)
    }
  },
});
