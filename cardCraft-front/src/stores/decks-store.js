import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useDecksStore = defineStore('decks', () => {

  const decksList = ref([])

  const fetchDecks = () => {
    api.get('/api/decks')
    .then(response => decksList.value = response.data)
    .catch(error => console.error(error)) 
  }

  const getDeck = (id) => {
    const deck = decksList.value.filter(deck => deck.id == id)
    return deck.length > 0 ? deck[0] : null
  }

  const addDeck = (newDeck) => {
    decksList.value.unshift(newDeck)
  }

  const updateDeck = (updatedDeck) => {
    decksList.value = decksList.value.map(deck => deck.id == updatedDeck.id ? updatedDeck : deck);
  }

  const updateDeckField = (id, field, value) => {
    decksList.value = decksList.value.map(deck => {
      if(deck.id == id ) deck[field] = value
      return deck
    });
  }

  const getFlashcardFromDeck = (deck, flashcardId) => {
    const flashcard = deck.flashcards.filter(flashcard => flashcard.id == flashcardId)
    return flashcard.length > 0 ? flashcard[0] : null
  }

  const addFlashcardsToDeck = (deck, newFlashcards) => {
    let deckCopy = { ...deck }
    let currentFlashcards = deckCopy.flashcards ?? []
    deckCopy.flashcards = [...currentFlashcards, ...newFlashcards]
    updateDeck(deckCopy)
  }

  const updateFlashcardsFromDeck = (deck, updatedFlashcard) => {
    let deckCopy = { ...deck }
    deckCopy.flashcards = deckCopy.flashcards.map(flashcard => flashcard.id == updatedFlashcard.id ? updatedFlashcard : flashcard);
    updateDeck(deckCopy)
  }

  return {decksList, fetchDecks, getDeck, addDeck, updateDeck, updateDeckField, getFlashcardFromDeck, addFlashcardsToDeck, updateFlashcardsFromDeck}
});
