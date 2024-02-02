<template>
    <div v-if="'id' in deck">
         <div>
            <header-default :text="'coucou'" route="/decks"></header-default>
            <div></div>
        </div>
        <deck-details-actions :deck="deck"></deck-details-actions>  
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useDecksStore } from 'src/stores/decks-store';
import DeckDetailsActions from './DeckDetailsActions.vue';
import HeaderDefault from '../common/HeaderDefault.vue';

const props = defineProps({ id: String })
const { t } = useI18n()
const decksStore = useDecksStore()

let deck = decksStore.getDeck(props.id)

</script>

<style>
</style>