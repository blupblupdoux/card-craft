import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useUserStore } from 'src/stores/user-store';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create() //{ baseURL: 'https://api.cardcraft.sarah-bobtchev-melin.com'}

// Auth config
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default boot(({ app }) => {
  
  const userStore = useUserStore()

  // Retieve token from storage
  const token = localStorage.getItem('card-craft-auth-token')

  // Auto store Bearer token in each axios queries
  if (token) {
    userStore.updateToken(token)
    api.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${userStore.token}`;
      return config;
    });
  }

  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
