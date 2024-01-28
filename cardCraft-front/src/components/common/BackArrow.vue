<template>
    <router-link :to="route">
        <q-icon name="keyboard_backspace" size="35px" color="white" />
    </router-link>
</template>

<script setup>
const props = defineProps({ route: String })
</script>