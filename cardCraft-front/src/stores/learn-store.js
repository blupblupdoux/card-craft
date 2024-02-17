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
    resetFlashcard() {
      this.flashcard = null
      this.answerShown = false
    },
    updateAnswerShown(bool) {
      this.answerShown = bool
    },
    getNextFlashcard(flashcardId) {
      let nextIndex = 0

      console.log('flashcardId: ' + flashcardId)

      if(flashcardId) {
        const currentIndex = this.learningQueue.findIndex(card => card.id === flashcardId)
        console.log('currentIndex: ' + currentIndex);
        nextIndex = currentIndex + 1
      }

      console.log('nextIndex: ' + nextIndex);

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
