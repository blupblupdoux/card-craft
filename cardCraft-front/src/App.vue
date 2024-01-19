<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from './stores/user-store';
const userStore = useUserStore()

onMounted(() => {
  userStore.initialize()
})

</script>

<style>

#q-app {
  padding: 0 1rem;
}

</style>