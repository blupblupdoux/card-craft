<template>
    <div id="decksPage">
        <q-btn icon="add" to="/deck/create" :label="t('decks.addDeck')" color="primary" />

        <q-btn icon="add" to="/deck/1/edit" label="edit" color="primary" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import { api } from 'src/boot/axios';
import { useDecksStore } from 'src/stores/decks-store';

const { t } = useI18n()
const decksStore = useDecksStore()

onMounted(() => {
    if (decksStore.decksList.length === 0) {
        api.get('/api/decks')
        .then(response => {
            decksStore.decksList = response.data
        })
        .catch(error => {
            console.error(error)
        }) 
    }
})
</script>

<style>
#decksPage .q-btn {
    padding: 4px 16px 4px 10px;
}
</style>