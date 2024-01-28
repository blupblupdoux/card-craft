<template>
    <div id="decksPage">
        <q-btn icon="add" to="/deck/create" :label="t('decks.addDeck')" color="primary" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style>
#decksPage .q-btn {
    padding: 4px 16px 4px 10px;
}
</style>