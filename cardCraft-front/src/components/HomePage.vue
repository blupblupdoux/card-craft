<template>
    <div>
        Home page !
        {{ userStore.username }}
    </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store';

const userStore = useUserStore()


</script>