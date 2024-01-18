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
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { api } from 'src/boot/axios'

let form = reactive({
  username: '',
  password: '',
})

let errorMessage = ref('')

const authenticate = () => {
  
  console.log(form);

  api.post('/api/authenticate', form).then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log('truc')
    errorMessage.value = error?.response?.data?.data?.message
  })
}

onMounted(() => {
  // Initialize CSRF token
  api.get('/sanctum/csrf-cookie')
})
</script>