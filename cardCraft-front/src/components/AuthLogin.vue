<template>
    <div id="loginPage">
      <h1>Login</h1>

      <q-form @submit.prevent.stop="authenticate">

        <q-input v-model="form.username" 
                label="Username" 
                type="text" 
                required
                outlined>
        </q-input>

        <q-input v-model="form.password" 
                label="Password" 
                type="password" 
                required
                outlined>
        </q-input>

        <div v-if="errorMessage" class="form-error-message" style="margin: 0 auto .5rem;">{{ errorMessage }}</div>

        <q-btn type="submit" label="Login" color="primary" />
      </q-form>

      <div class="link" @click="router.push({name: 'register'})">You don't have an account? Register for free.</div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

let form = reactive({
  username: '',
  password: '',
})

let errorMessage = ref('')

const authenticate = () => {
  api.post('/api/authenticate', form).then(response => {
    userStore.authenticate(response.data)
  }).catch(error => {
    errorMessage.value = error?.response?.data?.data?.message
  })
}

onMounted(() => {
  // Initialize CSRF token
  api.get('/sanctum/csrf-cookie')
})
</script>

<style scoped>

#loginPage .link {
  margin-top: 1.5rem;
  text-align: center;
}

</style>