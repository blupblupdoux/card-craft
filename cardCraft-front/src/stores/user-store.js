import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    name: null,
    username: null,
    email: null,
    token: null
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    updateUser(payload) {
      this.id = payload?.id
      this.name = payload?.name
      this.username = payload?.username
      this.email = payload?.email
    },
    updateToken(payload) {
      this.token = payload
      localStorage.setItem('card-craft-auth-token', payload)
    },
    authenticate(payload) {
      this.updateUser(payload.user)
      this.updateToken(payload.token)
      this.router.push('/')
    },
  },
});
