<template>
    <div>
        <h3>{{ blogTitle }}</h3>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    blogTitle: String,
});
</script>
