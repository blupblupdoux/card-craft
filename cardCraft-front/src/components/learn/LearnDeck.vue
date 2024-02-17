<template>
    <div id="deckLearn">
        <learn-header></learn-header>
        <learn-flashcard></learn-flashcard>
        <learn-actions></learn-actions>
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

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#deckLearn {
    .default-header {
        flex-direction: row;
    }
}
</style>