<script setup lang="ts">
import { useRouter } from 'vue-router'
import routeNames from '@/constants/routeNames'
import Menu from '@/components/menu.vue'
import LangSwitcher from '@/components/base/langSwitcher.vue'

const router = useRouter()
const routeToMain = () => { router.push({ name: routeNames.MAIN }) }
</script>

<template>
  <div class="web-header">
    <LangSwitcher />
    <img class="web-header__logo" src="/assets/img/base/logo.svg" alt="" @click="routeToMain()" />
    <Menu />
  </div>
</template>

<style scoped lang="scss">
.web-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.web-header__logo {
  width: 35%;
  @media (min-width: 769px) {
    width: 15%;
  }
}
</style>