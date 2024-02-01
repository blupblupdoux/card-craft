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
import NavBottomLayout from '../nav/NavBottomLayout.vue';
import NavMenuItem from '../nav/NavMenuItem.vue';

const props = defineProps({ deck: Object })
const { t } = useI18n()
const navItems = ref([
    { label: t('decks.actionAddCard'), url: '', click: null, icon: 'add' },
    { label: t('decks.actionPlay'), url: '/decks', click: null, icon: 'play' },
    { label: t('decks.actionEdit'), url: '/deck/' + props.deck.id + '/edit', click: null, icon: 'edit' },
    { label: t('decks.actionStats'), url: '/stats', click: 'drawer', icon: 'o_assessment' },
])
</script>