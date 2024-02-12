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
import { computed, reactive, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDecksStore } from 'src/stores/decks-store';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import HeaderDefault from '../common/HeaderDefault.vue';

const props = defineProps({ deckId: String, flashcardId: String })
const { t } = useI18n()
const decksStore = useDecksStore()
const router = useRouter()

const isEdition = computed(() => props.flashcardId !== undefined)
const deck = decksStore.getDeck(props.deckId)
const title = computed(() => !isEdition.value ? t('flashcards.createTitle') : t('flashcards.editTitle'))
let form = reactive({
    deck_id: props.deckId,
    recto: '',
    verso: ''
})

onMounted(() => {
    // If edit pre-fill flashcard infos
    if (isEdition.value) {
        const flashcard = decksStore.getFlashcardFromDeck(deck, props.flashcardId)
        form.id = flashcard.id
        form.recto = flashcard.recto
        form.verso = flashcard.verso
    }
})

const submit = () => {
    const url = isEdition.value ? '/api/flashcard/edit' : '/api/flashcard/create'

    api.post(url, form)
        .then(response => {
            if (isEdition.value) {
                decksStore.updateFlashcardsFromDeck(deck, response.data)
            } else {
                decksStore.addFlashcardsToDeck(deck, [response.data])
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