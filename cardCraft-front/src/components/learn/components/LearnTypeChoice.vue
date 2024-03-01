<template>

  <header-default :text="t('learn.choseTypeTitle')" :route="'/deck/' + props.deckId"></header-default>

  <div id="learnChoiceTypes" class="page-padding-default">
    <div v-for="type in learnStore.learningTypesOptions" 
        :key="'learning-type-' + type" 
        @click="learnStore.updateLearningType(type)"
        class="learning-type-box">

      <!-- Title -->
      <div class="learning-type-title">
        {{ t('learn.learningTypeTitle-' + type) }}
      </div>

      <!-- Desciption -->
      <div class="learning-type-description">
        {{ t('learn.learningTypeDescription-' + type) }}
      </div>

    </div>
  </div>
</template>

<script setup>
import { useLearnStore } from 'src/stores/learn-store';
import { useI18n } from 'vue-i18n';

import HeaderDefault from 'src/components/common/HeaderDefault.vue';

const props = defineProps({deckId: String})
const learnStore = useLearnStore()
const {t} = useI18n()
</script>

<style lang="scss" scoped>
@import '../../../css/quasar.variables.scss';

#learnChoiceTypes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.learning-type-box {
  border: 2px solid $primary;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1.5rem;
  width: 90%;
  height: 9rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.learning-type-title {
  color: $primary;
  font-size: x-large;
  font-weight: bold;
}
</style>