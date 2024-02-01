<template>
  <q-layout>
    <div id="mainPage" :class="navbarPaddingBottom">
      <router-view />
    </div>

    <nav-menu v-if="route.meta.navMenu"></nav-menu>
  </q-layout>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from './stores/user-store';
import { useRoute } from 'vue-router';
import NavMenu from './components/nav/NavMenu.vue';

const userStore = useUserStore()
const route = useRoute()
const navbarPaddingBottom = computed(() => route.meta.navMenu ? 'navbar-padding-bottom' : '')

onMounted(() => {
  userStore.initialize()
})

</script>

<style>
.navbar-padding-bottom {
  padding-bottom: 62px;
}
</style>