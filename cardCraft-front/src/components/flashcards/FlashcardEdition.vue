<template>
    <div id="flashcardEdition">
        <header-default :text="title" :route="'/deck/' + deckId"></header-default>
        
        <q-form @submit.prevent.stop="submit" class="page-padding-default">

                <label class="label-default">{{ t('flashcards.questionLabel') }}</label>
                <q-input v-model="form.recto" 
                    type="textarea"
                    rows="4"
                    required
                    outlined>
                </q-input>

                <label class="label-default">{{ t('flashcards.answerLabel') }}</label>
                <q-input v-model="form.verso" 
                    type="textarea"
                    rows="4"
                    required
                    outlined>
                </q-input>

                <q-btn type="submit" :label="t('common.submitBtn')" color="primary"/>
            </q-form>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDecksStore } from 'src/stores/decks-store';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import HeaderDefault from '../common/HeaderDefault.vue';

const props = defineProps({ deckId: String, flashcardId: String, deck: Object })
const { t } = useI18n()
const decksStore = useDecksStore()
const router = useRouter()

const title = computed(() => props.flashcardId === undefined ? t('flashcards.createTitle') : t('flashcards.editTitle'))
let form = reactive({
    deck_id: props.deckId,
    recto: '',
    verso: ''
})

const submit = () => {
    const url = props.flashcardId ? '/api/flashcard/edit' : '/api/flashcard/create'

    api.post(url, form)
        .then(response => {
            console.log(response.data)
            if (props.id) {
                console.log('EDIT');
            } else {
                decksStore.addFlashcardsToDeck(props.deck, [response.data])
            }

            router.push('/deck/' + props.deckId)
        })
        .catch(error => console.error(error))
}

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#flashcardEdition {
    form {
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
    }

    .q-field {
        margin-bottom: 1rem;
    }

    button {
        align-self: end;
        margin-top: .5rem;
    }
}
</style>