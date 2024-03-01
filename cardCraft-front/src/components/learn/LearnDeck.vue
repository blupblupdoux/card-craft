<template>
    <learn-type-choice v-if="!learnStore.learningType" :deck-id="props.deckId"></learn-type-choice>

    <div id="deckLearn" v-if="learnStore.learningType && learnStore.flashcard">
        <learn-header :deck-id="props.deckId"></learn-header>
        <learn-flashcard></learn-flashcard>
        <learn-actions :deck-id="props.deckId"></learn-actions>
    </div>
</template>

<script setup>
import { useLearnStore } from 'src/stores/learn-store';
import { api } from 'src/boot/axios';
import { useDecksStore } from 'src/stores/decks-store';

import LearnHeader from './components/LearnHeader.vue';
import LearnActions from './components/LearnActions.vue';
import LearnFlashcard from './components/LearnFlashcard.vue';
import LearnTypeChoice from './components/LearnTypeChoice.vue';

const props = defineProps({ deckId: String })
const learnStore = useLearnStore()
const decksStore = useDecksStore()

learnStore.getFlashcardsToLearn(props.deckId)
learnStore.getNextFlashcard(null)

api.put('/api/deck/edit/lastLearnAt', {id: props.deckId})
    .then(response => {
        decksStore.updateDeckField(props.deckId, response.data.field, response.data.value)
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