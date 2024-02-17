<template>
    <div id="decksPage" class="page-padding-default">

        <!-- Buttons / filters -->
        <div id="decksFilters">
            <q-btn icon="add" to="/deck/create" :label="t('decks.addDeck')" size="md" color="primary" />
            <div style="margin-top: 3px;">
                <!-- <q-btn icon="tag" :label="t('decks.tagBtn')" size="sm" outline rounded color="dark" style="margin-right: 10px;" /> -->

                <q-btn-dropdown icon="sort" :label="t('decks.sortBtn')" size="sm" outline rounded color="dark">
                    <q-list>
                        <q-item v-for="item in sort" :key="item.key" clickable v-close-popup @click="sortSelected = item.key">
                            <q-item-section>
                                <q-item-label>{{ item.label }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
        </div>

        <!-- Search -->
        <q-input v-model="query" :label="t('common.search')" dense outlined>
            <template v-slot:append>
              <q-icon name="search" color="primary" />
            </template>
        </q-input>

        <!-- Decks list -->
        <div id="decksList">
            <deck-card v-for="deck in filteredDecks" :key="'deck-card-' + deck.id" :deck="deck"></deck-card>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, reactive, ref } from 'vue';
import { useDecksStore } from 'src/stores/decks-store';
import DeckCard from './components/DeckCard.vue';

const { t } = useI18n()
const decksStore = useDecksStore()
let query = ref('')
let sortSelected = ref('created-new')
const sort = reactive([
    { key: 'asc', label: t('decks.sortAsc') },
    { key: 'desc', label: t('decks.sortDesc') },
    { key: 'created-new', label: t('decks.sortCreatedNew') },
    { key: 'created-old', label: t('decks.sortCreatedOld') }
])

// Decks initalization
decksStore.fetchDecks()

const filteredDecks = computed(() => {
    let decks = decksStore.decksList
    if (query.value !== '') { 
        decks = decksStore.decksList.filter(deck => deck.name.toLowerCase().includes(query.value.toLowerCase()))
    }
    return sortDecks(decks)
})

const sortDecks = (decks) => {
    switch (sortSelected.value) {
        case 'asc':
            decks.sort((a, b) => a.name.localeCompare(b.name))
            break
        case 'desc':
            decks.sort((a, b) => a.name.localeCompare(b.name)).reverse()
            break
        case 'created-new':
            decks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            break
        case 'created-old':
            decks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).reverse()
            break
    }
    return decks
}
</script>

<style lang="scss">
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
    justify-content: space-between;

    .q-btn-dropdown__arrow {
        display: none;
    }
}

#decksList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>