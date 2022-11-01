<template>
    <button @click="clickedButton">
        <slot></slot>
    </button>
</template>

<script setup>
const clickedButton = () => {
    console.log("You have clicked the button");
};
</script>