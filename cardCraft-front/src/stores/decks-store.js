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
    async getDeck(id) {
      const deck = this.decksList.filter(deck => deck.id == id)

      if (deck.length === 0) {
        const response = await api.get('/api/deck/' + id)
        return response.data
      }

      return deck[0]
    },
    addDeck(newDeck) {
      this.decksList.shift(newDeck)
    },
    updateDeck(newDeck) {
      this.decksList = this.decksList.map(deck => deck.id == newDeck.id ? newDeck : deck);
    }
  },
});
