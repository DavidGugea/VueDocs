<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="$emit('enlarge-text')">Enlarge Text</button>
        <button @click="$emit('say-hello')">Say Hello</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["title"]);
defineEmits(["enlarge-text", "say-hello"]);
</script>
