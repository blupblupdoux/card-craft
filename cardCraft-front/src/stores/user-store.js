import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {

    const id = ref(null)
    const name = ref(null)
    const username = ref(null)
    const email = ref(null)
    const token = ref(null)

    const updateUser = (payload) => {
      id.value = payload?.id
      name.value = payload?.name
      username.value = payload?.username
      email.value = payload?.email
    }

    const updateToken = (payload) => {
      token.value = payload
      localStorage.setItem('card-craft-auth-token', payload)
    }

    const authenticate = (payload) => {
      updateUser(payload.user)
      updateToken(payload.token)
      router.push('/')
    }

    return {id, name, username, email, token, updateUser, updateToken, authenticate}
});
