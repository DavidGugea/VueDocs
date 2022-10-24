<template>
    <div>
        <p>{{ title }}</p>
        <p>Counter: {{ counter }}</p>
        <button @click="increaseCounter">Increase Counter</button>
        <button @click="$emit('increaseFontSize')">Increase Font Size</button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(["title"]);
const emit = defineEmits(["increaseFontSize"]);

let counter = ref(0);
const increaseCounter = () => counter.value++;
</script>
