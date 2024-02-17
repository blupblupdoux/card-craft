<template>
    <div id="learnFlashcard">
        <div class="learn-flashcard-box learn-flashcard-recto">
            <div>{{ learnStore.flashcard.recto }}</div>
        </div>
        <div class="learn-flashcard-box learn-flashcard-verso" @click="dispayAnswer">
            <div v-if="learnStore.answerShown">{{ learnStore.flashcard.verso }}</div>
            <div v-else><q-icon name="r_question_mark" size="10rem" color="white" /></div>
        </div>
    </div>
</template>

<script setup>
import { useLearnStore } from 'src/stores/learn-store';

const learnStore = useLearnStore()

learnStore.getNextFlashcard(null)

const dispayAnswer = () => {
    learnStore.updateAnswerShown(true)
}

</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#learnFlashcard {
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.learn-flashcard-box {
    width: 85%;
    height: 15rem;
    border: 2px solid $primary;
    border-radius: 10px;
    font-size: x-large;
    padding: 1rem;
    text-align: center;
}

.learn-flashcard-recto, .learn-flashcard-verso {
    display: flex;
    justify-content: center;
    align-items: center;
}

.learn-flashcard-recto {
    color: $primary;
}

.learn-flashcard-verso {
    margin-top: 2rem;
    background-color: $primary;
    color: white;
}
</style>