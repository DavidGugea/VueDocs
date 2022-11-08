<template>
    <div :style="blogPostStyle">
        <p>Title: {{ title }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["title"]);

const blogPostStyle = {
    border: "5px blue solid",
    padding: "10px",
    margin: "10px",
};
</script>
