<template>
    <div id="deckEdition">
        <header-default :text="title" route="/decks"></header-default>

        <q-form @submit.prevent.stop="submit" class="page-padding-default">
            
            <label class="label-default">{{ t('decks.colorLabel') }}</label>
            <div id="colorEditToggle">
                <div class="colorEditBox" :style="'background-color:' + form.color + ';'"></div>
                <div>{{ t('decks.currentColor') }}</div>
            </div>
            <q-color v-model="form.color"
                default-view="palette"
                :palette="[getCssVar('primary'), getCssVar('secondary'), getCssVar('positive'), getCssVar('negative'), getCssVar('info'), getCssVar('warning')]"
            />

            <label class="label-default">{{ t('decks.nameLabel') }}</label>
            <q-input v-model="form.name" 
                type="text"
                required
                outlined>
            </q-input>

            <label class="label-default">{{ t('decks.descriptionLabel') }}</label>
            <q-input v-model="form.description" 
                type="textarea"
                rows="4"
                outlined>
            </q-input>

            <q-btn type="submit" :label="t('common.submitBtn')" color="primary"/>
        </q-form>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { reactive, computed } from 'vue';
import HeaderDefault from '../common/HeaderDefault.vue'
import { getCssVar } from 'quasar'
import { api } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user-store';
import { useDecksStore } from 'src/stores/decks-store';
import { useRouter } from 'vue-router';

const props = defineProps({id: String})
const { t } = useI18n()
const userStore = useUserStore()
const decksStore = useDecksStore()
const router = useRouter()

let form = reactive({
    name: '',
    description: '',
    color: getCssVar('primary')
})

const title = computed(() => props.id === undefined ? t('decks.createTitle') : t('decks.editTitle'))

const submit = () => {

    form.user_id = userStore.id

    api.post('/api/decks/create', form)
    .then(response => {
        decksStore.addDeck(response.data)
        router.push('/decks')
    })
    .catch(error => {
        console.error(error)
    })
}

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#deckEdition {
    form {
        display: flex;
        flex-direction: column;
    }

    .q-field, #colorEditToggle, .q-color-picker {
        margin-bottom: 1rem;
        margin-top: 5px;
    }

    #colorEditToggle {
        display: flex;
        align-items: center;
    }

    .colorEditBox {
        width: 2rem;
        height: 2rem;
        border-radius: 3px;
        margin-right: 10px;
    }

    button {
        align-self: end;
        margin-bottom: 1rem;
    }
}
</style>