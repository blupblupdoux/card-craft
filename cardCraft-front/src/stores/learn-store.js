import { defineStore } from 'pinia';
import { useDecksStore } from 'src/stores/decks-store';
import { useUserStore } from './user-store';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useLearnStore = defineStore('learn', () => {

  const router = useRouter()
  const userStore = useUserStore()
  const deckStore = useDecksStore()
  
  const deckId = ref(null)
  const flashcard = ref(null)
  const learningQueue = ref([])
  const answerShown = ref(false)
  const learningType = ref(null)
  const learningTypesOptions = ['training', 'sa', 'mcq']

  const resetLearningSession = () => {
    resetFlashcard()
    deckId.value = null
    learningQueue.value = []
    learningType.value = null
  }

  const resetFlashcard = () => {
    flashcard.value = null
    answerShown.value = false
  }

  const updateAnswerShown = (bool) => {
    answerShown.value = bool
  }

  const updateLearningType = (newType) => {
    learningType.value = newType
  }

  const getFlashcardIndex = (flashcardId) => {
    return learningQueue.value.findIndex(card => card.id === flashcardId)
  }

  const getNextFlashcard = (flashcardId) => {
    let nextIndex = 0

    if(flashcardId) {
      const currentIndex = getFlashcardIndex(flashcardId)
      nextIndex = currentIndex + 1
    }

    flashcard.value = learningQueue.value[nextIndex]
  }

  const getFlashcardsToLearn = (deckId) =>  {
    const deck = deckStore.getDeck(deckId)
    deckId = deckId
    learningQueue.value = deck.flashcards.sort(() => Math.random() - 0.5)
  }

  const isLastFlashcard = () => {
    const index = getFlashcardIndex(flashcard.value.id)
    const totalFlashcard = learningQueue.value.length
    return (index + 1) === totalFlashcard
  }

  const answerFlashcard = (answerValue) => {
    const currentFlashcardId = flashcard.value.id

    api.post('/api/answer/create', {
      user_id: userStore.id, 
      flashcard_id: currentFlashcardId, 
      type: learningType.value,
      answer: answerValue
    })

    if(isLastFlashcard()) {
      resetLearningSession()
      router.push('/deck/' + deckId.value)
    } else {
      resetFlashcard()
      getNextFlashcard(currentFlashcardId)
    } 
  }

  return {deckId, flashcard, learningQueue, answerShown, learningType, learningTypesOptions, resetLearningSession, resetFlashcard, updateAnswerShown, updateLearningType, getFlashcardIndex, getNextFlashcard, getFlashcardsToLearn, isLastFlashcard, answerFlashcard}
});
