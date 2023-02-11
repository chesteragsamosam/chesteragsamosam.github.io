<template>
    <div>
        <Visual />
        Visual
        {{ test }}
    </div>
</template>
<script setup>
import Visual from './Visual.vue'
import { ref } from 'vue'
const test = ref('TEST')
</script>