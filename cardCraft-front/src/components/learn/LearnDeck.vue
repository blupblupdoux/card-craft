<template>
    <div id="deckLearn">
        <learn-header></learn-header>
    </div>
</template>

<script setup>
import { useDecksStore } from 'src/stores/decks-store';
import LearnHeader from './LearnHeader.vue';

const props = defineProps({ deckId: String })
const deckStore = useDecksStore()

const deck = deckStore.getDeck(props.deckId)
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#deckLearn {
    .default-header {
        flex-direction: row;
    }
}
</style>