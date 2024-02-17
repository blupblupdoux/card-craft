<template>
    <div>
        
    </div>
</template>

<script setup>
import { useLearnStore } from 'src/stores/learn-store';

const learnStore = useLearnStore()

learnStore.getNextFlashcard()

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';


</style>