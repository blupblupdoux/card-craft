import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const useDecksStore = defineStore('decks', {
  state: () => ({
    decksList: [],
  }),
  getters: {
    //
  },
  actions: {
    fetchDecks() {
      if (this.decksList.length === 0) {
        api.get('/api/decks')
        .then(response => {
          this.decksList = response.data
        })
        .catch(error => {
          console.error(error)
        }) 
      }
    },
    getDeck(id) {
      const deck = this.decksList.filter(deck => deck.id == id)
      return deck.length > 0 ? deck[0] : null
    },
    addDeck(newDeck) {
      this.decksList.push(newDeck)
    },
    updateDeck(newDeck) {
      this.decksList = this.decksList.map(deck => deck.id == newDeck.id ? newDeck : deck);
    }
  },
});
