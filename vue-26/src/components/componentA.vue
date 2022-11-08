<template>
    <div>
        <p>Current Component: A</p>
        <p>Counter: {{ counter }}</p>
        <button @click="counter++">Increase Counter</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>