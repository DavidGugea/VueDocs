<template>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogEntry
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            @enlarge-text="increaseFontSize"
        />
    </div>
</template>

<script setup>
import BlogEntry from "./components/BlogEntry.vue";
import { ref } from 'vue';

const posts = ref([
    { id : 1, title: "Title 1" },
    { id : 2, title: "Title 2" },
    { id : 3, title: "Title 3" },
    { id : 4, title: "Title 4" },
    { id : 5, title: "Title 5" },
]);

let postFontSize = ref(1);

const increaseFontSize = () => postFontSize.value += 0.1;
</script>