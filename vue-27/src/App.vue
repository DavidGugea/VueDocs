<template>
    <div>
        <component-a/>
        <component-b/>
        <button @click="store.increment()">Increase the store count</button>
    </div>
</template>

<script setup>
import store from "./states/store";
import componentA from "./components/componentA.vue";
import componentB from "./components/componentB.vue";
</script>