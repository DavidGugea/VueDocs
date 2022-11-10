<template>
    <div>
        <form>
            <label for="radioButtonComponentA">
                <input type="radio" value="0" id="radioButtonComponentA" v-model="currentTab">
                A
            </label>
            <label for="radioButtonComponentA">
                <input type="radio" value="1" id="radioButtonComponentB" v-model="currentTab">
                B
            </label>
            <KeepAlive include="componentA">
                <component :is="tabs[currentTab]"></component>
            </KeepAlive>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import componentA from "./components/componentA.vue";
import componentB from "./components/componentB.vue";

const tabs = [
    componentA,
    componentB
];

const currentTab = ref(0);
</script>