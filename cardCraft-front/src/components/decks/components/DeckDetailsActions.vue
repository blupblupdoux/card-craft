<template>
    <nav-bottom-layout>
        <nav-menu-item
            v-for="(item, index) in navItems"
            :data="item"
            :key="index">
        </nav-menu-item>
    </nav-bottom-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import NavBottomLayout from '../../nav/NavBottomLayout.vue';
import NavMenuItem from '../../nav/NavMenuItem.vue';

const props = defineProps({ deck: Object })
const { t } = useI18n()

const navItems = ref([
    { label: t('decks.actionPlay'), url: `/deck/${props.deck.id}/learn`, icon: 'r_play_arrow' },
    { label: t('decks.actionAddCard'), url: `/deck/${props.deck.id}/flashcard/create`, icon: 'add' },
    { label: t('decks.actionEdit'), url: `/deck/${props.deck.id}/edit`, icon: 'r_edit' },
    { label: t('nav.statsBtn'), url: '/stats', icon: 'o_assessment' }
])
</script>