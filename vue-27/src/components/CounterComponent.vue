<template>
    <div>
        <p>Counter: {{ counter }}</p>
        <button @click="counter++">Increase the counter</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>