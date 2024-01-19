<template>
	<div id="navMenu">
			<nav-menu-item v-for="(item, index) in navItems" 
				:key="index" 
				:data="item">
			</nav-menu-item>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useI18n } from 'vue-i18n';
import NavMenuItem from './NavMenuItem.vue';

const userStore = useUserStore()
const { t } = useI18n()

const navItems = ref([
	{label: t('nav.homeBtn'), url: '/', icon: 'home'},
	{label: t('nav.decksBtn'), url: '/decks', icon: 'style'},
	{label: t('nav.statsBtn'), url: '/stats', icon: 'o_assessment'},
	{label: t('nav.otherBtn'), url: null, icon: 'more_horiz'},
])

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
</style>