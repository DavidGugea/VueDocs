<script setup>
import { ref } from "vue";
import BlogPost from "./components/BlogPost.vue";

const posts = ref([
    { id : 1, title: "Blog Title 1" },
    { id : 2, title: "Blog Title 2" },
    { id : 3, title: "Blog Title 3" },
    { id : 4, title: "Blog Title 4" },
    { id : 5, title: "Blog Title 5" },
]);

const postFontSize = ref(1);
</script>

<template>
    <div id="root-component">
        <h1>Here are some blog posts</h1>

        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPost
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                @enlarge-text="postFontSize += 0.1"
            />
        </div>
    </div>
</template>