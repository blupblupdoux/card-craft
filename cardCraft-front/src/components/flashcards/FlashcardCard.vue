<template>
    <div class="flashcard-card">
        <div>This is a flashcard title</div>
        <div><q-icon @click="edit" name="edit" size="30px" color="primary" /></div>
    </div>
</template>

<script setup>
const edit = () => (
    console.log('EDIT CARD')
)
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

.flashcard-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $light;
    border-radius: 10px;
    padding: .5rem 1rem;
}
</style>