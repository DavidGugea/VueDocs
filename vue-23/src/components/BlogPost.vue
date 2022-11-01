<template>
    <div>
        <h2>Title: {{ title }}</h2>
        <button @click="$emit('increaseFontSize')">Increase Font Size</button>
        <button @click="dispatchSomeEvent">Test Click Me</button>
        <slot/>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
    title: {
        type: String,
        required: true,
        default() {
            return { title: "Hello" };
        }
    }
});

const emit = defineEmits({
    increaseFontSize: null,
    someEvent: null
});

const dispatchSomeEvent = () => {
    const eventArg = "Hello World ( this came from the child component as an event argument )";
    emit('someEvent', eventArg);
};
</script>
