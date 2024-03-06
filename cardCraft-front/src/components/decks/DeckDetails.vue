<template>
    <div id="deckDetails">
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
                <div class="deck-details-total-cards">{{ t('flashcards.totalFlashcard', { number: deck.flashcards.length }) }}</div>
                <flashcard-card v-for="flashcard in deck.flashcards" 
                    :key="'deck-flashcard-card-' + flashcard.id" 
                    :deck-id="props.deckId" 
                    :flashcard="flashcard">
                </flashcard-card>
            </div>
        </div>
        <deck-details-actions :deck="deck"></deck-details-actions>  
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useDecksStore } from 'src/stores/decks-store';
import { reactive } from 'vue';
import DeckDetailsActions from './components/DeckDetailsActions.vue';
import BackArrow from '../common/BackArrow.vue';
import FlashcardCard from './components/FlashcardCard.vue'

const props = defineProps({ deckId: String})
const { t } = useI18n()
const deckStore = useDecksStore()

const deck = reactive(deckStore.getDeck(props.deckId))

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

@media (min-width: 600px) {

    .header-icons {
        padding-left: 2rem !important;
        padding-top: 2rem !important;
    }

    .header-content {
        text-align: center;
    }

    .deck-details-cards {
        padding-top: 2rem;
        padding-right: 20%;
        padding-left: 20%;
    }
}
</style>