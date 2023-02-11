<template>
  <div>
    {{ foo }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps(['foo'])
console.log(props.foo)
</script>
<style>
</style>