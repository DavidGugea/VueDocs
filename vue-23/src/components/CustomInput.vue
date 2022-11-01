<template>
    <div>
        <input 
            :value="modelValue" 
            @input="$emit('update:title', $event.target.value)"
        />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(["title"]);
defineEmits(["update:title"]);
</script>