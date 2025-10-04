<script setup lang="ts">
import textBlock from '@/components/base/textBlock.vue'
import imageBlock from '@/components/base/ImageBlock.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useRouter } from "vue-router"
import routeNames from '@/constants/routeNames'
import {
  homeTitle1,
  homeTitle2,
  homeTitle3,
  homeTitle4,
  homeTitle5,
  homeTitle6,
  homeText1,
  homeText2,
  homeText3,
  homeText4,
  homeText6,
  seePriceListButtonText,
  checkForMoreButtonText
}
from '@/constants/texts'

const router = useRouter()


const routeTo = (routeName: string) => { router.push({ name: routeName}) }


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
        class="text-block-margin text-block-margin_bottom_20"
        :text="homeText4"
    />
    <BaseButton :text="'What is the plan? '" @click="routeTo(routeNames.PLAN)"/>
    <img class="image-block__image-4" src="/assets/img/photos/home/6.jpg" alt="">
    <textBlock
        :title="homeTitle5"
        class="text-block-margin text-block-price text-block-margin_width-60"
    />
    <BaseButton :text="seePriceListButtonText" @click="routeTo(routeNames.PRICE)"/>
    <imageBlock class="image-block__5">
      <img class="image-block__image-5" src="/assets/img/photos/home/12.jpg" alt="">
    </imageBlock>

    <textBlock
        :title="homeTitle6"
        class="text-block-margin text-block-margin_width-70"
        :text="homeText6"
    />
    <BaseButton :text="checkForMoreButtonText" @click="routeTo(routeNames.PORTFOLIO)"/>
  </div>
</template>

<style scoped lang="scss">
.text-block-margin {
  margin-left: 24px;
  width: 80%;
  text-align: left;
  margin-top: 40px;

  &_bottom_20 {
    margin-bottom: 40px;
  }
  &_width-60 {
    width: 60%;
  }
  &_width-70 {
    width: 70%;
  }
}

.text-block{
  &-price {
    font-size: 34px;
  }
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

.about-wrapper p {
  text-align: left;
  margin: 80px 0 0 -40px;
}
@media (min-width: 769px) {
  .image-block {
    &__image {
      &-0 {
        width: 100%;
      }
      &-1 {
        width: 90%;
      }
    }
  }
}
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
      width: calc(100% - 20px);
    }
    &__3 {
      text-align: right;
      margin-top: 40px;
    }
    &__5 {
      text-align: right;
      margin-top: 40px;
      margin-bottom: 50px;
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
      &-4 {
        width: 100%;
        margin-top: 40px;
      }
      &-5 {
        width: 75%;
        margin-right: 12px;
      }
    }
  }
.about-wrapper {
  margin: 0 auto 40px;
  @media(min-width: 769px) {
    width: 40vw;
  }
}
</style>
