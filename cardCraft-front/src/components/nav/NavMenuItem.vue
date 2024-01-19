<template>
	<router-link :to="data.url">
		<img src="" alt="">
		<div>{{ data.text }}</div>
	</router-link>
</template>

<script setup>

const props = defineProps({
  data: Object
})

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

</style>