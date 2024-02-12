import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const useDecksStore = defineStore('decks', {
  state: () => ({
    decksList: []
  }),
  getters: {
    //
  },
  actions: {
    fetchDecks() {
      api.get('/api/decks')
      .then(response => this.decksList = response.data)
      .catch(error => console.error(error)) 
    },
    getDeck(id) {
      const deck = this.decksList.filter(deck => deck.id == id)
      return deck.length > 0 ? deck[0] : null
    },
    addDeck(newDeck) {
      this.decksList.unshift(newDeck)
    },
    updateDeck(updatedDeck) {
      this.decksList = this.decksList.map(deck => deck.id == updatedDeck.id ? updatedDeck : deck);
    },
    getFlashcardFromDeck(deck, flashcardId) {
      const flashcard = deck.flashcards.filter(flashcard => flashcard.id == flashcardId)
      return flashcard.length > 0 ? flashcard[0] : null
    },
    addFlashcardsToDeck(deck, newFlashcards) {
      let deckCopy = { ...deck }
      let currentFlashcards = deckCopy.flashcards ?? []
      deckCopy.flashcards = [...currentFlashcards, ...newFlashcards]
      this.updateDeck(deckCopy)
    },
    updateFlashcardsFromDeck(deck, updatedFlashcard) {
      let deckCopy = { ...deck }
      deckCopy.flashcards = deckCopy.flashcards.map(flashcard => flashcard.id == updatedFlashcard.id ? updatedFlashcard : flashcard);
      this.updateDeck(deckCopy)
    },
  },
});
