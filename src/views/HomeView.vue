<script setup lang="ts">
import textBlock from '@/components/base/textBlock.vue'
import imageBlock from '@/components/base/ImageBlock.vue'

const homeTitle1 ='HELLO THERE'
const homeText1 = 'My name is Maria.\n'+
    'I am an experienced makeup artist based in \n'+
    'Copenhagen. I am mostly focused on weddings. \n'+
    'Love to make people truly happy and look them\n'+
    'beautiful on their special day. I’m passionate about\n'+
    'my job and beauty in general. As a professional, \n'+
    'I am very schedule precise and always keep \n'+
    'my kit tidy and clean.'

const homeTitle2 ='BRIDAL \n' +
    'MAKEUP & HAIR'
const homeText2 = 'Some cool text about bridal makeup'

</script>

<template>
  <div class="about-wrapper">
    <img class="image-block__image-0" src="/assets/img/photos/home/Mariia.jpg" alt="Mariia Soroks">
    <textBlock
    :title="homeTitle1"
    class="text-block-margin"
    :text="homeText1"
    />
    <imageBlock class="image-block__1">
      <img class="image-block__image-1" src="/assets/img/photos/home/11.jpg" alt="">
    </imageBlock>
    <textBlock
        :title="homeTitle2"
        class="text-block-margin"
        :text="homeText2"
    />
    <imageBlock class="image-block__2">
      <img class="image-block__image-2" src="/assets/img/photos/home/9.jpg" alt="">
      <img class="image-block__image-3" src="/assets/img/photos/home/4.jpg" alt="">
    </imageBlock>
  </div>
</template>

<style scoped lang="scss">
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
@media (max-width: 768px) {
  .about-wrapper {
    width: 100vw;
    margin: 0;
  }
  .about-wrapper p {
    margin-left: 0;
  }

  .image-block {
    &__1 {
      margin-top: 40px;
      text-align: right;
    }
    &__2 {
      margin-top: 40px;
      margin-left: 20px;
      text-align: left;
    }
    &__image-0 {
      width: 100%;
    }
    &__image-1 {
      width: 90%;
    }
    &__image-2 {
      width: 80%;
    }
    &__image-3 {
      width: 90%;
      transform: translate(50px, -45px);
    }
  }
}
</style>
