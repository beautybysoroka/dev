<script setup lang="ts">
import textBlock from '@/components/base/textBlock.vue'
</script>

<template>
  <div class="about-wrapper">
    <img src="/assets/img/Mariia.jpg" alt="Mariia Soroks">
    <textBlock
    :title="'HELLO THERE'"
    class="text-block-margin"
    :text="'My name is Maria.\n'+
'I am an experienced makeup artist based in \n'+
'Copenhagen. I am mostly focused on weddings. \n'+
'Love to make people truly happy and look them\n'+
'beautiful on their special day. I’m passionate about\n'+
'my job and beauty in general. As a professional, \n'+
'I am very schedule precise and always keep \n'+
'my kit tidy and clean.'"
    />
  </div>
</template>

<style scoped>
.text-block-margin {
  margin-left: 24px;
  width: 80%;
  text-align: left;
  margin-top: 40px;
}
body {
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}
.about-wrapper {
  width: 50vw;
  margin: 0 auto 40px;
}

.about-wrapper p {
  text-align: left;
  margin: 80px 0 0 -40px;
}
.about-wrapper img {
  width: 100%;
}
@media (max-width: 768px) {
  .about-wrapper {
    width: 100vw;
    margin: 0;
  }
  .about-wrapper p {
    margin-left: 0;
  }
}
</style>
