<template>
    <div>
        <p>Current Component: B</p>
        <input
            v-model="inputText"
            placeholder="edit me"
        />
        <p>Input text: {{ inputText }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref('');
</script>