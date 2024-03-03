<template>
    <nav-bottom-layout>

        <!-- RECTO -->
        <div v-if="!learnStore.answerShown">
          {{ t('learn.displayAnswer') }}
        </div>

        <!-- VERSO -->
        <div v-else>
          <learn-action-assessment v-if="learnStore.learningType === 'sa'"></learn-action-assessment>
          <learn-action-default v-else></learn-action-default>
        </div>
        
    </nav-bottom-layout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLearnStore } from 'src/stores/learn-store';

import NavBottomLayout from '../../nav/NavBottomLayout.vue';
import LearnActionDefault from './LearnActionDefault.vue';
import LearnActionAssessment from './LearnActionAssessment.vue';

const props = defineProps({deckId: String})
const {t} = useI18n()
const learnStore = useLearnStore()

</script>