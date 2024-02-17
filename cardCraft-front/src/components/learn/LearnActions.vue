<template>
    <nav-bottom-layout @click="answer">
        <!-- VERSO -->
        <div class="next-flashcard" v-if="learnStore.answerShown">
            {{ t('learn.goToNextFlashcard') }}
            <q-icon name="arrow_circle_right" size="25px" color="primary" style="margin-left: .5rem;" />
        </div>

        <!-- RECTO -->
        <div v-else>
            {{ t('learn.displayAnswer') }}
        </div>
    </nav-bottom-layout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLearnStore } from 'src/stores/learn-store';
import NavBottomLayout from '../nav/NavBottomLayout.vue';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user-store';

const props = defineProps({deckId: String})
const {t} = useI18n()
const learnStore = useLearnStore()
const userStore = useUserStore()
const router = useRouter()

const answer = () => {
    if(learnStore.answerShown) {
        const currentFlashcardId = learnStore.flashcard.id

        api.post('/api/answer/create', {user_id: userStore.id, flashcard_id: currentFlashcardId, type: 0})

        if(learnStore.isLastFlashcard()) {
            learnStore.resetFlashcard()
            router.push('/deck/' + props.deckId)
        } else {
            learnStore.resetFlashcard()
            learnStore.getNextFlashcard(currentFlashcardId)
        } 
    }
}

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

</style>