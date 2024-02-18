<template>
  <div class="force-mobile-design">
    
    <q-layout style="min-height: 95vh;">
    <div v-if="!route.meta.auth || userStore.id" id="mainPage" :class="navbarPaddingBottom">
      <router-view />
    </div>

    <nav-menu v-if="route.meta.navMenu"></nav-menu>
  </q-layout>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMainStore } from './stores/main-store';
import { useUserStore } from './stores/user-store';
import NavMenu from './components/nav/NavMenu.vue';

const route = useRoute()
const mainStore = useMainStore()
const userStore = useUserStore()
const navbarPaddingBottom = computed(() => route.meta.navMenu ? 'navbar-padding-bottom' : '')

mainStore.initialize()
</script>

<style>
.navbar-padding-bottom {
  padding-bottom: 62px;
}
.force-mobile-design {
  max-width: 400px;
  background-color: white;
  margin: 15px auto;
}
</style>