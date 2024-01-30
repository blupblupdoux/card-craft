<template>
  <q-drawer 
    id="navDrawer"
    v-model="model" 
    side="right" 
    :width="250"
    overlay 
    bordered
  >

    <!-- HEADER -->
    <div id="navDrawerHeader" class="header-primary">
        <div>{{ t('nav.drawerTitle') + ' ' + name }}</div>
    </div>

    <!-- Links -->
    <div id="navDrawerMain">
        <nav-menu-item
			v-for="(item, index) in navItems"
			:data="item"
			:key="index">
		</nav-menu-item>
    </div>
  </q-drawer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useUserStore } from 'src/stores/user-store';
import { computed } from 'vue';
import NavMenuItem from './NavMenuItem.vue';

const props = defineProps({navItems: Object})
const model = defineModel()

const { t } = useI18n()
const userStore = useUserStore()

const name = computed(() => userStore.name ?? userStore.username)
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

.q-drawer--right.q-drawer--bordered {
    border-left: none;
}

#navDrawerHeader {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

#navDrawerMain {
    padding: 1rem;
}

</style>