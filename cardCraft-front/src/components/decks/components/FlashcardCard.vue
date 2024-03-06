<template>
    <div class="flashcard-card">
        <div>{{ props.flashcard.recto }}</div>
        <router-link :to="`/deck/${props.deckId}/flashcard/${props.flashcard.id}/edit`" >
            <q-icon name="edit" size="30px" color="primary" />
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps({deckId: String||Integer, flashcard: Object})
</script>

<style lang="scss">
@import '../../../css/quasar.variables.scss';

.flashcard-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $light;
    border-radius: 10px;
    padding: .5rem 1rem;
    margin-bottom: .5rem;
}

// @media (min-width: 600px) {
//     .flashcard-card  {
//         width: 60%;
//     }
// }
</style>