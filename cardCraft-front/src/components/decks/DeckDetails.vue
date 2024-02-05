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

            </div>
        </div>
        <deck-details-actions :deck="deck"></deck-details-actions>  
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useDecksStore } from 'src/stores/decks-store';
import DeckDetailsActions from './DeckDetailsActions.vue';
import BackArrow from '../common/BackArrow.vue';
import { reactive, onMounted } from 'vue';

const props = defineProps({ id: String })
const { t } = useI18n()
const decksStore = useDecksStore()

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
}
</style>