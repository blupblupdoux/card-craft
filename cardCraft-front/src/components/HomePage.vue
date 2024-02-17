<template>
    <div class="page-padding-default">
        <h2>{{ t('home.lastLearntDecks') }}</h2>
        <div>
            <deck-card v-for="deck in lastLearntDecks" :key="'deck-card-' + deck.id" :deck="deck"></deck-card>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import DeckCard from './decks/components/DeckCard.vue';
import { api } from 'src/boot/axios';
import { reactive } from 'vue';

const { t } = useI18n()
let lastLearntDecks = reactive({})

api.get('/api/decks/lastLearnt')
    .then(response => {
        Object.assign(lastLearntDecks, response.data)
    })

</script>