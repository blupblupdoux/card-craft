<template>
    <nav-bottom-layout @click="answer">
        <!-- VERSO -->
        <div v-if="learnStore.answerShown">
            {{ t('learn.goToNextFlashcard') }}
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

const {t} = useI18n()
const learnStore = useLearnStore()

const answer = () => {
    if(learnStore.answerShown) {
        
    }
}

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';


</style>