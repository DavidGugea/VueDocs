<template>
    <div>
        <input v-focus />
    </div>
</template>

<script async setup>
// import useMouse from "./composables/mouse";
// import useFetch from "./composables/fetch";

// const { x, y } = useMouse();
// const { data, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

const vFocus = {
    mounted: (el) => el.focus()
};
</script>