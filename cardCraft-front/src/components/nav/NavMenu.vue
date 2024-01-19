<template>
	<div id="navMenu">
			<nav-menu-item v-for="(item, index) in navItems" 
				:key="index" 
				:data="item">
			</nav-menu-item>
	</div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store';
import NavMenuItem from './NavMenuItem.vue';

const userStore = useUserStore()

const navItems = ref([
	{label: 'Home', url: '/', icon: ''},
	{label: 'Decks', url: '/decks', icon: ''},
	{label: 'Stats', url: '/stats', icon: ''},
	{label: 'Other', url: '', icon: ''},
])

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#navMenu {
	border-top: solid 1px $light;
	height: 55px;
	position: fixed; 
	width: 100%;
	left:0;
	bottom:0
}
</style>