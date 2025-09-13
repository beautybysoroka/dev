<script setup lang="ts">
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'
import Header from './components/base/Header.vue'
</script>

<template>
  <div class="app-wrapper">
    <Header/>
  <About />
  <Gallery />
  <Footer />
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Raleway,serif;
  background: #fff;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

h2, p {
  margin: 0;
}
</style>
