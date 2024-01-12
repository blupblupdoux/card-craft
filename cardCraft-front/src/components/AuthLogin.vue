<template>
    <div></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name: 'AuthLogin',
mounted() {
	// Initialize CSRF token
	this.$api.get('/sanctum/csrf-cookie')

	this.$api.get('/api/testRoute')
}
})
</script>