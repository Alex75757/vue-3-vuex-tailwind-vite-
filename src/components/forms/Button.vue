<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  text: { type: String, required: true }
})



</script>

<template>
 
    <button
      class="px-2 py-4 font-medium border rounded-md w-full text-white"
    >{{ props.text }}</button>
 
</template>