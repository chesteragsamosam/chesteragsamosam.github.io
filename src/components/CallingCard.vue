<script lang="ts">
import { ref, defineComponent } from 'vue'
// defineProps<{ msg: string }>()

export default defineComponent({
  setup () {
    const MyProfile = ref({
      firstname: 'Chester' as string,
      lastname: 'Agsamosam' as string,
    });

    const isOpen = ref<Boolean>(false)
    const open = () => isOpen.value = true
    const close = () => isOpen.value = false
    const getFullname = () => MyProfile.value.firstname + ' ' + MyProfile.value.lastname;
    return { getFullname, MyProfile, open, close, isOpen }
  },
})
</script>

<template>
<div v-if="isOpen" class="p-5 mx-auto text-center border-0 w-max md:border">
  <input type="text" v-model="MyProfile.firstname">
  <input type="text" v-model="MyProfile.lastname">
  <h1 class="mb-2 text-4xl font-bold text-white">{{ getFullname() }}</h1>
  
  <p class="text-gray-100">
   Hello world, I am {{ getFullname() }}.
  </p>
  <button @click="close">Close</button>
</div>
</template>

<style scoped>
</style>
