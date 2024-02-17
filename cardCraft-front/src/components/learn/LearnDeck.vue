<template>
    <div id="deckLearn" v-if="learnStore.flashcard">
        <learn-header></learn-header>
        <learn-flashcard></learn-flashcard>
        <learn-actions :deck-id="props.deckId"></learn-actions>
    </div>
</template>

<script setup>
import { useLearnStore } from 'src/stores/learn-store';
import LearnHeader from './LearnHeader.vue';
import LearnActions from './LearnActions.vue';
import LearnFlashcard from './LearnFlashcard.vue';
import { api } from 'src/boot/axios';
import { useDecksStore } from 'src/stores/decks-store';

const props = defineProps({ deckId: String })
const learnStore = useLearnStore()
const decksStore = useDecksStore()

learnStore.getFlashcardsToLearn(props.deckId)
learnStore.getNextFlashcard(null)

api.put('/api/deck/edit/lastLearnAt', {id: props.deckId})
    .then(response => {
        decksStore.updateDeck(response.data)
    })

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#deckLearn {
    .default-header {
        flex-direction: row;
    }

    #navMenu {
        font-style: italic;
    }
}
</style>