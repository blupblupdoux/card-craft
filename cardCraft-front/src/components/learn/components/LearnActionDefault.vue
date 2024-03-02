<template>
  <div class="next-flashcard">
    {{ t('learn.goToNextFlashcard') }}
    <q-icon name="arrow_circle_right" size="25px" color="primary" style="margin-left: .5rem;" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const {t} = useI18n()
</script>