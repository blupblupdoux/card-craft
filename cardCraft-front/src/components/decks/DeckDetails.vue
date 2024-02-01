<template>
    <div v-show="deck">
        <div>
            <header-default :text="'coucou'" route="/decks"></header-default>
            <div></div>
        </div>
        <deck-details-actions :deck="deck"></deck-details-actions>  
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import DeckDetailsActions from './DeckDetailsActions.vue';
import { reactive, onMounted } from 'vue';
import { useDecksStore } from 'src/stores/decks-store';

const props = defineProps({ id: String })
const { t } = useI18n()
const decksStore = useDecksStore()

const deck = decksStore.getDeck(props.id)

console.log(deck);
</script>

<style>
</style>