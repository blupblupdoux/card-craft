<template>
    <div id="decksPage" class="page-padding-default">

        <!-- Buttons / filters -->
        <div id="decksFilters">
            <q-btn icon="add" to="/deck/create" :label="t('decks.addDeck')" size="md" color="primary" />
            <div style="margin-top: 3px;">
                <q-btn icon="tag" :label="t('decks.tagBtn')" size="sm" outline rounded color="dark" style="margin-right: 10px;" />
                <q-btn icon="sort" :label="t('decks.sortBtn')" size="sm" outline rounded color="dark" />
            </div>
        </div>

        <!-- Search -->
        <q-input :label="t('common.search')" dense outlined>
            <template v-slot:append>
              <q-icon name="search" color="primary" />
            </template>
        </q-input>

        <!-- Decks list -->
        <div id="decksList">
            <deck-card v-for="deck in decksStore.decksList" :key="'deck-card-' + deck.id" :deck="deck"></deck-card>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import { api } from 'src/boot/axios';
import { useDecksStore } from 'src/stores/decks-store';
import DeckCard from './DeckCard.vue';

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
#decksPage {
    .q-btn {
        padding: 4px 16px 4px 10px;
    }

    .q-field, #decksList {
        margin-top: 1.5rem;
    }
} 

#decksFilters {
    display: flex;
    align-items:center;
    justify-content: space-between
}
</style>