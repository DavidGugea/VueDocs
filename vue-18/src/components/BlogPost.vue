<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["enlarge-text"]);
const props = defineProps(["title"]);
console.log(props.title);
</script>

<template>
    <div class="blog-post">
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>