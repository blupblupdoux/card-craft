import { defineStore } from 'pinia';
import { useUserStore } from './user-store';
import { api } from 'src/boot/axios';

export const useMainStore = defineStore('main', {
  state: () => ({
    env: ''
  }),
  getters: {
    //
  },
  actions: {
    async initialize() {
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
  },
});
