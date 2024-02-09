<template>
    <div id="registerPage" class="page-padding-default">
      <h1>{{ t('auth.registerTitle') }}</h1>

      <q-form @submit.prevent.stop="register">

        <small>{{ t('auth.requiredFields') }}</small>
        <q-input v-model="form.name" 
                :label="t('auth.nameLabel')" 
                type="text"
                :error="Object.hasOwn(errors, 'name')"
                :error-message="errors?.name?.[0]"
                outlined>
        </q-input>

        <q-input v-model="form.email" 
                :label="t('auth.emailLabel')" 
                type="email"
                :error="Object.hasOwn(errors, 'email')"
                :error-message="errors?.email?.[0]"
                outlined>
        </q-input>

        <q-input v-model="form.username" 
                :label="t('auth.usernameLabel') + '*'" 
                type="text" 
                :error="Object.hasOwn(errors, 'username')"
                :error-message="errors?.username?.[0]"
                required
                outlined>
        </q-input>

        <q-input v-model="form.password" 
                :label="t('auth.passwordLabel') + '*'" 
                type="password" 
                :error="Object.hasOwn(errors, 'password')"
                :error-message="errors?.password?.[0]"
                required
                outlined>
        </q-input>
        
        <q-input v-model="form.password_confirm" 
                :label="t('auth.passwordConfirmLabel') + '*'" 
                type="password" 
                :error="Object.hasOwn(errors, 'password_confirm')"
                :error-message="errors?.password_confirm?.[0]"
                lazy-rules
                :rules="[value => value === form.password || 'Confirmation should match password field.']"
                required
                outlined>
        </q-input>

        <q-btn type="submit" :label="t('common.submitBtn')" color="primary" />
      </q-form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user-store';
import { useI18n } from 'vue-i18n';

const userStore = useUserStore()
const { t } = useI18n()

let form = reactive({
  name: '',
  email: '',
  username: '',
  password: '',
  password_confirm: ''
})

let errors = ref({})

const register = () => {

  api.post('/api/register', form).then(response => {
    userStore.authenticate(response.data)
  }).catch(error => {
    errors.value = error?.response?.data?.errors
  })
}

</script>