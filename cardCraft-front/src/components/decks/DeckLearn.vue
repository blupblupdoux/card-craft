<template>
    <div id="deckLearn">
        
    </div>
</template>

<script setup>
import { useDecksStore } from 'src/stores/decks-store';

const props = defineProps({ deckId: String })
const deckStore = useDecksStore()

const deck = deckStore.getDeck(props.deckId)
let flashcards = deck.flashcards.sort(() => 0.5 - Math.random());
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';


</style>