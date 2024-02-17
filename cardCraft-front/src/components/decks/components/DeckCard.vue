<template>
    <div @click="router.push('/deck/' + deck.id)" class="deck-card" :style="'border: 2px solid '+ deck.color +';'">
        <!-- Card header -->
        <div class="deck-card-header" :style="'background-color: ' + deck.color + ';'"></div>

        <!-- Card content -->
        <div class="deck-card-content">
            <div class="deck-card-name">{{ deck.name }}</div>
        </div>
        
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({deck: Object})
const router = useRouter()
</script>

<style>
.deck-card {
    height: 11rem;
    width: 48%;
    border-radius: 10px;
    margin-bottom: 1rem;
}
.deck-card-header {
    height: 58%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
.deck-card-content {
    padding: .5rem;
    height: 42%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.deck-card-name {
    font-size: .9rem;
    text-align: center;
}
</style>