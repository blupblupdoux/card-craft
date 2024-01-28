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

            <label class="label-default">{{ t('decks.titleLabel') }}</label>
            <q-input v-model="form.title" 
                :label="t('decks.titleLabel')" 
                type="text"
                outlined>
            </q-input>

            <label class="label-default">{{ t('decks.descriptionLabel') }}</label>
            <q-input v-model="form.description" 
                type="text"
                outlined>
            </q-input>

            <q-btn type="submit" :label="t('common.submitBtn')" color="primary" />
        </q-form>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, reactive, computed } from 'vue';
import HeaderDefault from '../common/HeaderDefault.vue'
import { getCssVar } from 'quasar'

const props = defineProps({id: String})
const { t } = useI18n()

let form = reactive({
    title: '',
    description: '',
    color: getCssVar('primary')
})

const title = computed(() => props.id === undefined ? t('decks.createTitle') : t('decks.editTitle'))

const submit = () => {
    console.log('SUMBMIT!')
}

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#deckEdition {
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
}
</style>