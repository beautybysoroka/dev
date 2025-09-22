<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="button-block">
  {{text}}
</div>
</template>

<style scoped lang="scss">
.button-block {
  border-radius: 4px;
  background-color: #F9E1C7;
  width: fit-content;
  padding: 8px 32px;
  margin: 20px auto;
}
</style>