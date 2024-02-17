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

const props = defineProps({ deckId: String })
const learnStore = useLearnStore()

learnStore.getFlashcardsToLearn(props.deckId)
learnStore.getNextFlashcard(null)

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