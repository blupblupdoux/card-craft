<template>
    <div id="registerPage">
      <h1>Create an account</h1>
      <q-form>
        <small>Only field with a * are required.</small>
        <q-input v-model="form.name" label="Name" type="text" outlined></q-input>
        <q-input v-model="form.email" label="Email" type="email" outlined></q-input>
        <q-input v-model="form.username" label="Username*" type="text" outlined></q-input>
        <q-input v-model="form.password" label="Password*" type="password" outlined></q-input>
        <q-input v-model="form.password_confirm" label="Password confirmation*" type="password" outlined></q-input>

        <q-btn color="primary" label="Submit" />
      </q-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { api } from 'src/boot/axios'

let form = reactive({
  name: '',
  email: '',
  username: '',
  password: '',
  password_confirm: ''
})

// const register = () => {
//   // api.post('/api/register', {username: 'test1234', password: 'test123', name: 'test123', email: 'test1234@test.com'})
// }

</script>

<style lang=scss scoped>

#registerPage {
  padding: 0 1rem;

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    small, .q-field {
      margin-bottom: 1rem;
    }

    .q-btn {
      align-self: center;
      margin-top: .5rem;
    }
  }
}

</style>