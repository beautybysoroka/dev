<script setup lang="ts">
import routeNames from '@/constants/routeNames'
import { useRouter } from 'vue-router'

const router = useRouter()
const routeToBrides = () => { router.push({name: routeNames.PORTFOLIO, hash: '#brides'})}
const routeToCommercial = () => { router.push({name: routeNames.PORTFOLIO, hash: '#commercial'})}

const bridesSrc = import.meta.glob('../portfolio/brides/*.{png,jpg,jpeg,gif,svg}', {
  eager: true,
  import: 'default'
}) as Record<string, string>
const bridesPhotos = Object.values(bridesSrc)

const commercialSrc = import.meta.glob('../portfolio/commercial/*.{png,jpg,jpeg,gif,svg}', {
  eager: true,
  import: 'default'
}) as Record<string, string>
const commercialPhotos = Object.values(commercialSrc)
</script>

<template>
  <div class="portfolio-wrapper common-wrapper">
    <div class="portfolio-menu">
      <p @click="routeToBrides()">Brides</p>
      <p @click="routeToCommercial()">Commercial</p>
    </div>
    <h2 id="brides">Brides</h2>
      <div  class="gallery gallery-brides">
        <img
          v-for="src in bridesPhotos"
          :key="src"
          :src="src"
          alt="gallery image"
      />
      </div>
    <h2 id="commercial">Commercial</h2>
      <div  class="gallery gallery-commercial">
        <img
            v-for="src in commercialPhotos"
            :key="src"
            :src="src"
            alt="gallery image"
        />
      </div>
  </div>
</template>


<style scoped lang="scss">
.portfolio-wrapper {
  padding: 16px;

  h2 {
    text-align: left;
    margin-bottom: 16px;
    text-transform: uppercase;
    font-size: 34px;
  }
}
.portfolio-menu {
  display: flex;
  grid-gap: 20px;
  margin-bottom: 24px;
  p {
    font-size: 18px;
    text-transform: uppercase;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  &-brides {
    margin-bottom: 40px;
  }
}
.gallery img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>

