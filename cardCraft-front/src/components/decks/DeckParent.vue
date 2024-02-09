<template>
    <div id="deckParent" v-if="loaded">
        <router-view :deck="deck"></router-view>
    </div>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useDecksStore } from 'src/stores/decks-store';
import { computed } from 'vue';
import { onMounted, reactive } from 'vue';

const props = defineProps({ deckId: String })
const decksStore = useDecksStore()

let deck = reactive({})
const loaded = computed(() => deck && 'id' in deck)

const fetchDeck = () => {
    Object.assign(deck, decksStore.getDeck(props.deckId));

    if (!loaded.value) {
        api.get('/api/deck/' + props.deckId).then(response => {
            decksStore.addDeck(response.data)
            Object.assign(deck, decksStore.getDeck(props.deckId));
        })
    }
}

onMounted(() => { 
    fetchDeck()
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

    .deck-details-cards {
        height: 62vh;
        position: relative;
        top: -40px;
        background-color: white;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        box-shadow: 0px -2px 17px 0px rgba(0, 0, 0, 0.25);
    }

    .deck-details-total-cards {
        color: $primary;
        font-size: large;
        font-weight: bold;
        margin-left: .5rem;
        margin-bottom: 1rem;
    }
}</style>