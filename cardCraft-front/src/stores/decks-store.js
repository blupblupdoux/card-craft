import { defineStore } from 'pinia';

export const useDecksStore = defineStore('decks', {
  state: () => ({
    decksList: [],
  }),
  getters: {
    //
  },
  actions: {
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
