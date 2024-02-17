<template>
    <div id="learnHeader" class="header-primary">
        <back-arrow route="/decks"></back-arrow>
        <div style="align-self: center;">
            {{ currentIndex + '/' + totalFlashcards }}
        </div>
        <div><q-icon name="settings" size="35px" color="white" /></div>
    </div>
</template>

<script setup>
import BackArrow from '../common/BackArrow.vue';
import { useLearnStore } from 'src/stores/learn-store';
import { computed } from 'vue';

const props = defineProps({route: String})
const learnStore = useLearnStore()

const currentIndex = computed(() => learnStore.getFlashcardIndex(learnStore.flashcard.id) + 1)
const totalFlashcards = computed(() => learnStore.learningQueue.length)

</script>

<style lang="scss">
#learnHeader {
    height: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: white;
    padding: .5rem 1rem;
    font-size: large;
}
</style>