<template>
    <div id="learnHeader" class="header-primary">
        <back-arrow route="/decks"></back-arrow>
        <div>1/12</div>
        <div><q-icon name="settings" size="35px" color="white" /></div>
    </div>
</template>

<script setup>
import BackArrow from '../common/BackArrow.vue';

const props = defineProps({route: String})
</script>

<style lang="scss">
#learnHeader {
    height: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: white;
    padding: .5rem 1rem;
}
</style>