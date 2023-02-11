<template>
  This is my index page {{ test }}
</template>
<script setup>
// import Swiper from '../components/Swiper.vue'
import { ref } from 'vue'
console.log('test')
const test = ref('wow')
</script> 