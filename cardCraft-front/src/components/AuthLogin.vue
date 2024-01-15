<template>
    <div></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { api } from 'src/boot/axios'

onMounted(() => {
  // Initialize CSRF token
  api.get('/sanctum/csrf-cookie')
})
</script>