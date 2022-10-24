<template>
    <div>
        <p>{{ title }}</p>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['title']);
const emit = defineEmits(['enlarge-text']);
</script>