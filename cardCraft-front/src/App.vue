<template>
  <q-layout>
    <div id="mainPage">
      <router-view />
    </div>

    <nav-menu v-if="route.meta.auth"></nav-menu>
  </q-layout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from './stores/user-store';
import { useRoute } from 'vue-router';
import NavMenu from './components/nav/NavMenu.vue';

const userStore = useUserStore()
const route = useRoute()

onMounted(() => {
  userStore.initialize()
})

</script>

<style>

#mainPage {
  padding: 1rem 1rem 0;
}

</style>