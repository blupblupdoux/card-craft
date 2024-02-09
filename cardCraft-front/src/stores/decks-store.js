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
    addFlashcardToDeck(deck, newFlashcard) {
      let deckCopy = { ...deck }
      deckCopy.flashcards.push(newFlashcard)
      this.updateDeck(deckCopy)
    },
    // getFlashcardFromDeck(deck, flashcardId) {
    //   const flashcard = deck.flashcards.filter(flashcard => flashcard.id == flashcardId)
    //   return flashcard.length > 0 ? flashcard[0] : null
    // }
  },
});
