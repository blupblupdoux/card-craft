import { defineStore } from 'pinia';

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
    },
    asyncauthenticate(payload) {
      this.updateUser(payload.user)
      this.updateToken(payload.token)
    }
  },
});
