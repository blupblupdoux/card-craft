<template>
    <div class="default-header header-primary">
        <back-arrow :to="route"></back-arrow>
        <div class="header-title">{{ text }}</div>
    </div>
</template>

<script setup>
import BackArrow from './BackArrow.vue';

const props = defineProps({text: String, route: String})
</script>

<style lang="scss">
.default-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .q-icon {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }

    .header-title {
        padding-top: 1rem;
    }
}
</style>