<template>
    <div id="deckEdition">
        <header-default :text="title" :route="previousroute"></header-default>

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
import { reactive, computed, onMounted } from 'vue';
import HeaderDefault from '../common/HeaderDefault.vue'
import { getCssVar } from 'quasar'
import { api } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user-store';
import { useDecksStore } from 'src/stores/decks-store';
import { useRouter } from 'vue-router';

const props = defineProps({deckId: String, deck: Object})
const { t } = useI18n()
const userStore = useUserStore()
const decksStore = useDecksStore()
const router = useRouter()

const title = computed(() => props.deckId === undefined ? t('decks.createTitle') : t('decks.editTitle'))
const previousroute = computed(() => props.deckId === undefined ? '/decks' : '/deck/' + props.deckId )
let form = reactive({
    name: '',
    description: '',
    color: getCssVar('primary')
})

onMounted(() => {
    // If edit deck pre-fill infos
    if (props.deckId && ('id' in props.deck)) {
        form.id = deck.id
        form.name = deck.name
        form.description = deck.description
        form.color = deck.color
    }
})

const submit = () => {
    form.user_id = userStore.id
    const url = props.deckId ? '/api/deck/edit' : '/api/deck/create'

    api.post(url, form)
        .then(response => {
            if (props.deckId) {
                decksStore.updateDeck(response.data)
            } else {
                decksStore.addDeck(response.data)
            }
        
        router.push('/decks')
    })
    .catch(error => console.error(error))
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