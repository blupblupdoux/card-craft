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
    border-top: solid 1px $light;
    height: 62px;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>