<template>
    <div class="deck-card" :style="'border: 2px solid '+ deck.color +';'">
        <!-- Card header -->
        <div class="deck-card-header" :style="'background-color: ' + deck.color + ';'"></div>

        <!-- Card content -->
        <div class="deck-card-content">
            <div class="deck-card-name">{{ deck.name }}</div>
        </div>
        
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const props = defineProps({deck: Object})
const { t } = useI18n()
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