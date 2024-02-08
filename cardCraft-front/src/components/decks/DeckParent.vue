<template>
    <div id="deckParent" v-if="deck || loaded">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useDecksStore } from 'src/stores/decks-store';
import { onMounted, ref } from 'vue';

const props = defineProps({ deckId: String })
const decksStore = useDecksStore()
let loaded = ref(false)

let deck = null

const fetchDeck = () => {
    deck = decksStore.getDeck(props.deckId);
    if (!deck) {
        api.get('/api/deck/' + props.deckId).then(response => {
            decksStore.addDeck(response.data)
            loaded.value = true
        })
    }
}

onMounted(() => { 
    fetchDeck() // If needed, fetch the deck in DB
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