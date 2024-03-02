import { defineStore } from 'pinia';
import { useDecksStore } from 'src/stores/decks-store';
import { useUserStore } from './user-store';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';

export const useLearnStore = defineStore('learn', {
  state: () => ({
    deckId: null,
    flashcard: null,
    learningQueue: [],
    answerShown: false,
    learningType: null,
    learningTypesOptions: ['training', 'sa', 'mcq']
  }),
  getters: {
    //
  },
  actions: {
    resetLearningSession() {
      this.resetFlashcard()
      this.deckId = null
      this.learningQueue = []
      this.learningType = null
    },
    resetFlashcard() {
      this.flashcard = null
      this.answerShown = false
    },
    updateAnswerShown(bool) {
      this.answerShown = bool
    },
    updateLearningType(newType) {
      this.learningType = newType
    },
    getFlashcardIndex(flashcardId) {
      return this.learningQueue.findIndex(card => card.id === flashcardId)
    },
    getNextFlashcard(flashcardId) {
      let nextIndex = 0

      if(flashcardId) {
        const currentIndex = this.getFlashcardIndex(flashcardId)
        nextIndex = currentIndex + 1
      }

      this.flashcard = this.learningQueue[nextIndex]
    },
    getFlashcardsToLearn(deckId) {
      const deckStore = useDecksStore()
      const deck = deckStore.getDeck(deckId)

      this.deckId = deckId
      this.learningQueue = deck.flashcards.sort(() => Math.random() - 0.5)
    },
    isLastFlashcard() {
      const index = this.getFlashcardIndex(this.flashcard.id)
      const totalFlashcard = this.learningQueue.length
      return (index + 1) === totalFlashcard
    },
    answerFlashcard(answerValue) {

      if(answerValue) {
        console.log(answerValue)
        return
      }

      const router = useRouter()
      const userStore = useUserStore()
      const currentFlashcardId = this.flashcard.id

      api.post('/api/answer/create', {user_id: userStore.id, flashcard_id: currentFlashcardId, type: 0})

      if(this.isLastFlashcard()) {
        this.resetLearningSession()
        router.push('/deck/' + this.deckId)
      } else {
        this.resetFlashcard()
        this.getNextFlashcard(currentFlashcardId)
      } 
    }
  },
});
