<template>
    <div>
        <p>From B: {{ store.count }}</p>
    </div>
</template>

<script setup>
import store from "../states/store";
</script>