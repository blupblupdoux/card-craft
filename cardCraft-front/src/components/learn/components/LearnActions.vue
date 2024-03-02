<template>
    <nav-bottom-layout @click="answer">

        <!-- RECTO -->
        <div v-if="!learnStore.answerShown">
          {{ t('learn.displayAnswer') }}
        </div>

        <!-- VERSO -->
        <div v-else class="next-flashcard">
          <learn-action-assessment v-if="learnStore.learningType === 'sa'"></learn-action-assessment>
          <learn-action-default v-else></learn-action-default>
        </div>
        
        
    </nav-bottom-layout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLearnStore } from 'src/stores/learn-store';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user-store';

import NavBottomLayout from '../../nav/NavBottomLayout.vue';
import LearnActionDefault from './LearnActionDefault.vue';
import LearnActionAssessment from './LearnActionAssessment.vue';

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
            learnStore.resetLearningSession()
            router.push('/deck/' + props.deckId)
        } else {
            learnStore.resetFlashcard()
            learnStore.getNextFlashcard(currentFlashcardId)
        } 
    }
}

</script>