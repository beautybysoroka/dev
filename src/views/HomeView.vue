<script setup lang="ts">
import textBlock from '@/components/base/textBlock.vue'
import imageBlock from '@/components/base/ImageBlock.vue'
import BaseButton from '@/components/base/BaseButton.vue'

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
const homeTitle3 ='how we do it'
const homeText3 = 'Some cool text about how we do it Some cool text about how we do it ' +
    'Some cool text about how we do it' +
    'Some cool text about how we do it' +
    'Some cool text about how we do it'

const homeTitle4 ='LETS IMAGINE...'
const homeText4 = 'We agreed on i am helping you\n' +
    'on your special day, figured out makeup\n' +
    'and hair style. Lets discuss practical stuff. \n' +
    'What is your checklist before \n' +
    'the wedding? '

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
      <img class="image-block__image-2_1" src="/assets/img/photos/home/9.jpg" alt="">
      <img class="image-block__image-2_2" src="/assets/img/photos/home/4.jpg" alt="">
    </imageBlock>
    <textBlock
        :title="homeTitle3"
        class="text-block__3"
        :text="homeText3"
    />
    <imageBlock class="image-block__3">
      <img class="image-block__image-3_1" src="/assets/img/photos/home/8.jpg" alt="">
      <img class="image-block__image-3_2" src="/assets/img/photos/home/ann.jpg" alt="">
      <img class="image-block__image-3_3" src="/assets/img/photos/home/7.jpg" alt="">
    </imageBlock>
    <textBlock
        :title="homeTitle4"
        class="text-block-margin"
        :text="homeText4"
    />
    <BaseButton :text="'What is the plan? '"/>
  </div>
</template>

<style scoped lang="scss">
.text-block-margin {
  margin-left: 24px;
  width: 80%;
  text-align: left;
  margin-top: 40px;
}

.text-block{
  &__3{
    text-align: right;
    width: 80%;
    margin-left: 15%;
  }
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
      overflow-x: hidden;
      position: relative;
      height: 100vh;
      width: calc(100% - 20px);
    }
    &__3 {
      text-align: right;
    }
    &__image {
      &-0 {
      width: 100%;
      }
      &-1 {
      width: 90%;
    }
      &-2_1 {
        width: 80%;
      }
      &-2_2 {
        width: 90%;
        transform: translate(50px, -45px);
      }
      &-3_1 {
        width: 60%;
        position: absolute;
        left: 0;
        top: 22vh;
      }
      &-3_2 {
        width: 50%;
      }
      &-3_3 {
        width: 70%;
        margin-top: 15vh;
        z-index: 2;
        position: relative;
      }
    }

  }
}
</style>
