<template>
    <div id="loginPage" class="page-padding-default">
      <h1>{{ t('auth.loginTitle') }}</h1>

      <q-form @submit.prevent.stop="authenticate">

        <q-input v-model="form.username" 
                :label="t('auth.usernameLabel')" 
                type="text" 
                required
                outlined>
        </q-input>

        <q-input v-model="form.password" 
                :label="t('auth.passwordLabel')" 
                type="password" 
                required
                outlined>
        </q-input>

        <div v-if="errorMessage" class="form-error-message" style="margin: 0 auto .5rem;">{{ errorMessage }}</div>

        <q-btn type="submit" :label="t('auth.loginTitle')"  color="primary" />
      </q-form>

      <div class="link" @click="router.push({name: 'register'})">{{ t('auth.noAccount') }}</div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { api } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';

let userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()

let form = reactive({
  username: '',
  password: '',
})

let errorMessage = ref('')

const authenticate = () => {
  api.post('/api/authenticate', form).then(response => {
    userStore.authenticate(response.data)
    router.push('/')
  }).catch(error => {
    errorMessage.value = error?.response?.data?.message
  })
}
</script>

<style scoped>

#loginPage .link {
  margin-top: 1.5rem;
  text-align: center;
}

</style>