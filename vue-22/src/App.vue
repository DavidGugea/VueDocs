<template>
    <div v-bind:style="{ fontSize: postFontSize + 'em' }">
        <BlogPost
            v-for="post in posts"

            :key="post.id"
            :title="post.title"

            @enlarge-text="postFontSize += 1"
            @say-hello="sayHelloFunction"
        />
    </div>
</template>

<script setup>
import BlogPost from "./components/BlogPost.vue";

const posts = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
    { id: 4, title: "Title 4" },
    { id: 5, title: "Title 5" },
];

const sayHelloFunction = () => {
    console.log("hello");
};

let postFontSize = 1;
</script>