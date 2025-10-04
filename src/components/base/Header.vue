<script setup lang="ts">
import { useRouter } from 'vue-router'
import routeNames from '@/constants/routeNames'
import Menu from '@/components/menu.vue'

const router = useRouter()
const routeToMain = () => {   router.push({ name: routeNames.MAIN}) }
</script>

<template>
<div class="web-header">
  <div class="web-header__empty-block"></div>
  <img  class="web-header__logo" src="/assets/img/base/logo.svg" alt="" @click="routeToMain()">
  <Menu/>
</div>
</template>

<style scoped lang="scss">
.web-header {
  display: flex;
  justify-content: space-between;
  padding: 16px;

  &__empty-block {
    width: 25px;
  }
}
.web-header__logo {
  width: 35%;
  @media (min-width: 769px) {
    width: 15%;
  }
}
</style>