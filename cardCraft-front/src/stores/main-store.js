import { defineStore } from 'pinia';
import { useUserStore } from './user-store';
import { api } from 'src/boot/axios';
import { computed, ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const env = ref('')
  const isMobile = computed(() => window.innerWidth < 600)

  const initialize = async () => {
    const userStore = useUserStore()

    // Initialize CSRF token
    await api.get('/sanctum/csrf-cookie')

    // Load initial data
    await api.get('/api/initialize')
      .then(response => {
        env.value = response.data.env
        userStore.updateUser(response.data.user)
      })
  }

  return {env, isMobile, initialize}
});
