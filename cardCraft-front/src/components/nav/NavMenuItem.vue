<template>
	<component :is="data.url ? 'router-link' : 'span'" :to="data.url" class="nav-menu-item">
		<q-icon :name="data.icon" size="35px" />
		<div class="nav-menu-item-label">{{ data.label }}</div>
	</component>
</template>

<script setup>
const props = defineProps({
  data: Object
})
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