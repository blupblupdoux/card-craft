import { defineStore } from 'pinia';
import { useUserStore } from './user-store';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const env = ref('')

  const initialize = async () => {
    const userStore = useUserStore()

    // Initialize CSRF token
    await api.get('/sanctum/csrf-cookie')

    // Load initial data
    await api.get('/api/initialize')
      .then(response => {
        this.env = response.data.env
        userStore.updateUser(response.data.user)
      })
  }

  return {env, initialize}
});
