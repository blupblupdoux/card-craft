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
    height: $navHeight;
    position: absolute;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
}
</style>
