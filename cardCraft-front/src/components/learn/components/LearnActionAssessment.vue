<template>
  <div class="learn-action-assessment">
    <div class="learn-action-correct">
      <q-icon name="r_check_circle" size="25px" color="positive" style="margin-left: .5rem;" />
      <span>{{ t('learn.learnActionCorrect') }}</span>
    </div>

    <div class="learn-action-wrong">
      <q-icon name="r_cancel" size="25px" color="negative" style="margin-left: .5rem;" />
      <span>{{ t('learn.learnActionWrong') }}</span>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const {t} = useI18n()
</script>

<style lang="scss">
@import '../../../css/quasar.variables.scss';

.learn-action-assessment {
  display: flex;
  width: 100vw;
  height: $navHeight;
}

.learn-action-correct, .learn-action-wrong {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.learn-action-correct span, .learn-action-wrong span {
  margin-left: .3rem;
  margin-right: .5rem;
  font-weight: bold;
}

.learn-action-correct {
  color: $positive;
  border-right: 1px solid $light;
}

.learn-action-wrong {
  color: $negative;
}
</style>