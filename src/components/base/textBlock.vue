<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  styles: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="text-block" :style="{styles}">
  <h2>{{title}}</h2>
  <p>{{text}}</p>
</div>
</template>

<style scoped>

</style>