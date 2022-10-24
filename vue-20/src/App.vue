<template>
    <div :style="{ fontSize: blogFontSize + 'em' }">
        <BlogPost
            v-for="blog in blogPosts"
            :title="blog.title"
            :key="blog.key"

            @increase-font-size="increaseFontSize"
        />
    </div>
</template>

<script setup>
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';


const blogPosts = ref([
    { key: 1, title : 'Blog Post Title 1' },
    { key: 2, title : 'Blog Post Title 2' },
    { key: 3, title : 'Blog Post Title 3' },
    { key: 4, title : 'Blog Post Title 4' },
    { key: 5, title : 'Blog Post Title 5' },
]);

let blogFontSize = ref(1);
const increaseFontSize = () => blogFontSize.value++;
</script>