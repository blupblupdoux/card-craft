<template>
    <div id="navMenu">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '../../css/quasar.variables.scss';

#navMenu {
    background-color: white;
    border-top: solid 1px $light;
    height: 62px;
    position: absolute;
    max-width: 400px;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    // Force mobile design
    left: 50%;
    transform: translate(-50%, 0%);
}
</style>
