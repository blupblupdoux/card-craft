<template>
  <div @click="answer" class="next-flashcard full-nav-size">
    {{ t('learn.goToNextFlashcard') }}
    <q-icon name="arrow_circle_right" size="25px" color="primary" style="margin-left: .5rem;" />
  </div>
</template>

<script setup>
import { useLearnStore } from 'src/stores/learn-store';
import { useI18n } from 'vue-i18n';

const {t} = useI18n()
const learnStore = useLearnStore()
const answer = () => learnStore.answerFlashcard()
</script>

<style lang="scss">
@import '../../../css/quasar.variables.scss';

.next-flashcard {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>