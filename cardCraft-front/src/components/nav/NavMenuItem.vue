<template>
	<component :is="data.url ? 'router-link' : 'span'" 
			:to="data.url" 
			@click="onNavItemClick" 
			class="nav-menu-item"
	>
		<q-icon :name="data.icon" size="35px" />
		<div class="nav-menu-item-label">{{ data.label }}</div>
	</component>
</template>

<script setup>

const props = defineProps({data: Object})
const model = defineModel()

const onNavItemClick = () => {
	if(props.data.click === 'drawer') {
		model.value = !model.value
	} else if(props.data.click === 'logout') {
		console.log('logout')
	}
 }
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';


// Default design
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
}

// Drawer design
#navDrawerMain {
	.nav-menu-item {
		width: 100%;
		text-align: left;
		display: flex;
		align-items: center;
		margin-bottom: 1rem;

		.nav-menu-item-label {
			font-size: medium;
			margin-left: 1rem;
		}
	}
}

.nav-menu-item.router-link-active .q-icon, 
.nav-menu-item.router-link-active .nav-menu-item-label {
	color: $primary;
}

</style>