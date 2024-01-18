<template>
    <div id="registerPage">
      <h1>Create an account</h1>

      <q-form @submit.prevent.stop="register">

        <small>Only field with a * are required.</small>
        <q-input v-model="form.name" 
                label="Name" 
                type="text"
                :error="Object.hasOwn(errors, 'name')"
                :error-message="errors?.name?.[0]"
                outlined>
        </q-input>

        <q-input v-model="form.email" 
                label="Email" 
                type="email"
                :error="Object.hasOwn(errors, 'email')"
                :error-message="errors?.email?.[0]"
                outlined>
        </q-input>

        <q-input v-model="form.username" 
                label="Username*" 
                type="text" 
                :error="Object.hasOwn(errors, 'username')"
                :error-message="errors?.username?.[0]"
                required
                outlined>
        </q-input>

        <q-input v-model="form.password" 
                label="Password*" 
                type="password" 
                :error="Object.hasOwn(errors, 'password')"
                :error-message="errors?.password?.[0]"
                required
                outlined>
        </q-input>
        
        <q-input v-model="form.password_confirm" 
                label="Password confirmation*" 
                type="password" 
                :error="Object.hasOwn(errors, 'password_confirm')"
                :error-message="errors?.password_confirm?.[0]"
                lazy-rules
                :rules="[value => value === form.password || 'Confirmation should match password field.']"
                required
                outlined>
        </q-input>

        <q-btn type="submit" label="Submit" color="primary" />
      </q-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user-store';

const userStore = useUserStore()

let form = reactive({
  name: '',
  email: '',
  username: '',
  password: '',
  password_confirm: ''
})

let errors = ref({})

const register = () => {
  
  console.log(form);

  api.post('/api/register', form).then(response => {
    userStore.authenticate(response.data.data)
  }).catch(error => {
    errors.value = error?.response?.data?.errors
  })
}

</script>