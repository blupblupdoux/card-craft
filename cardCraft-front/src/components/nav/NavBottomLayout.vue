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
    max-width: 380px;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
}

@media (min-width: 380px) {
    #navMenu {
        // Force mobile design
        left: 50%;
        transform: translate(-50%, 0%);
    }
}
</style>
