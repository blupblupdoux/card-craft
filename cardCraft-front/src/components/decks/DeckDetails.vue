<template>
    <div id="deckDetails" v-if="deck && ('id' in deck)">
         <div>
            <!-- Header -->
            <div class="header-primary">
                <div class="header-icons">
                    <back-arrow to="/decks"></back-arrow>
                </div>
                <div class="header-content">
                    <div>{{ deck.name }}</div>
                    <div class="deck-details-description">{{ deck.description }}</div>
                </div>
            </div>

            <!-- Cards list -->
            <div class="deck-details-cards page-padding-default">
                <div class="deck-details-total-cards">{{ t('flashcards.totalFlashcard', {number: 1}) }}</div>
                <flashcard-card></flashcard-card>
            </div>
        </div>
        <deck-details-actions :deck="deck"></deck-details-actions>  
    </div>
</template>

<script setup>
import { useDecksStore } from 'src/stores/decks-store';
import { reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import DeckDetailsActions from './DeckDetailsActions.vue';
import BackArrow from '../common/BackArrow.vue';
import FlashcardCard from '../flashcards/FlashcardCard.vue'

const props = defineProps({ id: String })
const decksStore = useDecksStore()
const { t } = useI18n()

let deck = reactive({});

const getDeck = async () => {
    const result = await decksStore.getDeck(props.id)
    Object.assign(deck, result);
}

onMounted(() => {
    getDeck()
})


</script>

<style lang="scss">
#deckDetails {
    .header-primary {
        height: 38vh;
    }
    .header-icons {
        padding: .5rem .5rem 0rem .5rem;
    }
    .header-content {
        padding: .5rem 2rem 2rem 2rem;
    }
    .deck-details-description {
        font-size: small;
        margin-top: 1rem;
    }
    .deck-details-cards{
        height: 62vh;
        position: relative;
        top: -40px;
        background-color: white;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        box-shadow: 0px -2px 17px 0px rgba(0,0,0,0.25);
    }
    .deck-details-total-cards {
        color: $primary;
        font-size: large;
        font-weight: bold;
        margin-left: .5rem;
        margin-bottom: 1rem;
    }
}
</style>