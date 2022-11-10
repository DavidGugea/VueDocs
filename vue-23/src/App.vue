<template>
    <div :style="{fontSize: postFontSize +'em'}">
        <BlogPost 
            v-for="post in posts"
            :key="post.key"
            :title="post.title"
            @increase-font-size="increaseFontSize"
            @someEvent="someEventHandler"
        />
        <SlotButtonTest>THIS IS THE SLOT TEXT</SlotButtonTest>
        <FooterComponent/>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import BlogPost from "./components/BlogPost.vue";
import SlotButtonTest from "./components/SlotButtonTest.vue";
import FooterComponent from "./components/FooterComponent.vue";

const posts = [
    { key: 1, title: "Blog Post Title 1" },
    { key: 2, title: "Blog Post Title 2" },
];

const postFontSize = ref(1);

const increaseFontSize = () => {
    postFontSize.value += 0.5;
};

const someEventHandler = (arg) => {
    console.log(arg);
};

// provide(injection key, value) - Provide data to a component's descendants
provide('message', 'hello!');
</script>
