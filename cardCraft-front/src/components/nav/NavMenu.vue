<template>
	<div id="navMenu">

		<div v-for="(item, index) in navMenuItems" :key="index" class="nav-menu-item">
			<nav-menu-item
				v-model="drawerOpen"
				:data="item">
			</nav-menu-item>
		</div>
		
		<nav-menu-drawer v-model="drawerOpen" :nav-items="navItems"></nav-menu-drawer>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import NavMenuItem from './NavMenuItem.vue';
import NavMenuDrawer from './NavMenuDrawer.vue';

const { t } = useI18n()

let drawerOpen = ref(false)
const navItems = ref([
	{label: t('nav.homeBtn'), url: '/', click: null, icon: 'home', navMenu: true},
	{label: t('nav.decksBtn'), url: '/decks', click: null, icon: 'style', navMenu: true},
	{label: t('nav.statsBtn'), url: '/stats', click: null, icon: 'o_assessment', navMenu: true},
	{label: t('nav.otherBtn'), url: null, click: 'drawer', icon: 'more_horiz', navMenu: true},
	{label: 'profile', url: '/profile', click: null, icon: '', navMenu: false},
	{label: 'tags', url: '/tags', click: null, icon: '', navMenu: false},
	{label: 'logout', url: null, click: 'logout', icon: '', navMenu: false},
])
const navMenuItems = computed(() => navItems.value.filter(item => item.navMenu))

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#navMenu {
	border-top: solid 1px $light;
	height: 62px;
	position: fixed; 
	width: 100%;
	left:0;
	bottom:0;

	display: flex;
	align-items: center;
	justify-content: center;
}

.nav-menu-item {
	width: 25%;
	text-align: center;
	text-decoration: none;
}
</style>