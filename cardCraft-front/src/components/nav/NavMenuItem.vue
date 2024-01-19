<template>
	<component :is="data.url ? 'router-link' : 'span'" :to="data.url" @click="!data.url ? drawerOpen = !drawerOpen : null" class="nav-menu-item">
		<q-icon :name="data.icon" size="35px" />
		<div class="nav-menu-item-label">{{ data.label }}</div>
	</component>

	<nav-menu-drawer v-model="drawerOpen"></nav-menu-drawer>
</template>

<script setup>
import NavMenuDrawer from './NavMenuDrawer.vue';
import { ref } from 'vue'

const props = defineProps({
  data: Object
})
let drawerOpen = ref(false)

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

.nav-menu-item {
	width: 25%;
	text-align: center;
	text-decoration: none;

	.q-icon {
		color: $light;
	}

	.nav-menu-item-label {
		font-size: x-small;
		color: $light;
		font-weight: bold;
	}

	&.router-link-active .q-icon, &.router-link-active .nav-menu-item-label {
		color: $primary;
	}
}

</style>