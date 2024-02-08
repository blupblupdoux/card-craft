<template>
    <div id="flashcardEdition">
        <header-default :text="title" :route="'/deck/' + deckId"></header-default>
        
        <q-form @submit.prevent.stop="submit" class="page-padding-default">

                <label class="label-default">{{ t('flashcards.questionLabel') }}</label>
                <q-input v-model="form.question" 
                    type="textarea"
                    rows="4"
                    required
                    outlined>
                </q-input>

                <label class="label-default">{{ t('flashcards.answerLabel') }}</label>
                <q-input v-model="form.answer" 
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
import HeaderDefault from '../common/HeaderDefault.vue';

const props = defineProps({ deckId: String, id: String })
const { t } = useI18n()

const title = computed(() => props.id === undefined ? t('flashcards.createTitle') : t('flashcards.editTitle'))
let form = reactive({
    question: '',
    answer: ''
})

const submit = () => {
    console.log('SUBMIT')
    console.log(form)
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