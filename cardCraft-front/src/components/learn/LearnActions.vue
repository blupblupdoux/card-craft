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