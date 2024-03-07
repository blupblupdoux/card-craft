<template>

	<nav-menu-drawer 
		v-model="drawerOpen" 
		:nav-items="navItems"
		side="right"
		:show-if-above="drawerOpen"
		:breakpoint="1"
		>
	</nav-menu-drawer>

<!--  v-if="route.meta.navMenu && mainStore.isMobile" -->
	<nav-bottom-layout>
		<nav-menu-item
			v-for="(item, index) in navMenuItems"
			v-model="drawerOpen"
			:data="item"
			:key="index">
		</nav-menu-item>
	</nav-bottom-layout>	

	
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useMainStore } from 'src/stores/main-store';

import NavBottomLayout from './NavBottomLayout.vue';
import NavMenuItem from './NavMenuItem.vue';
import NavMenuDrawer from './NavMenuDrawer.vue';


const { t } = useI18n()
const route = useRoute()
const mainStore = useMainStore()

let drawerOpen = ref(false)
const navItems = ref([
	{label: t('nav.homeBtn'), url: '/', click: null, icon: 'home', navMenu: true},
	{label: t('nav.decksBtn'), url: '/decks', click: null, icon: 'style', navMenu: true},
	{label: t('nav.statsBtn'), url: '/stats', click: null, icon: 'o_assessment', navMenu: true},
	{label: t('nav.otherBtn'), url: null, click: 'drawer', icon: 'more_horiz', navMenu: true},
	{label: t('nav.profileBtn'), url: '/profile', click: null, icon: 'person', navMenu: false},
	{label: t('nav.tagsBtn'), url: '/tags', click: null, icon: 'label', navMenu: false},
	{label: t('nav.logoutBtn'), url: null, click: 'logout', icon: 'logout', navMenu: false},
])

const navMenuItems = computed(() => navItems.value.filter(item => item.navMenu))
</script>