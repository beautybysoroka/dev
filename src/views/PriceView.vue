<script setup lang="ts">
import { homeTitle5 } from '@/constants/texts'

const prices = [
  {title: 'Makeup', price: '700 dkk'},
  {title: 'Makeup plus hair', price: '1000 dkk'},
  {title: 'Arrival before 8am', price: '200 dkk'},
  {title: '+ Bridesmaid makeup ', price: '500 dkk'},
  {title: '+ Bridesmaid makeup & hair.', price: '800 dkk'},
  {title: 'Areas not in greater CPH', price: 'DM me'},
  {title: 'Other cities in Europe', price: 'Depends on distance'}
]
const makeup = [
  {title: 'Classic makeup', price: '700 dkk'},
  {title: 'Artistic makeup', price: '1000 dkk'}
]
const other = [
  {title: 'Brows', price: '350 dkk'},
  {title: 'Eyelashes', price: '250 dkk'}
]

</script>

<template>
<div class="price__wrapper small-common-wrapper">
  <h2>{{homeTitle5}}</h2>
  <h4>Brides</h4>
  <div class="price-block" v-for="(price, index) in prices" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
  <p class="price__bridal-includes">Bridal package includes:</p>
  <p>Eyelashes</p>
  <p>Mini makeup kit to go for you</p>
  <p>My transit to you</p>
  <h4>Makeup</h4>
  <div class="price-block" v-for="(price, index) in makeup" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
  <h4>Other</h4>
  <div class="price-block" v-for="(price, index) in other" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.price {
  &__wrapper {
    h2 {
      font-size: 24px;
    }
    h4 {
      text-transform: uppercase;
      margin-top: 40px;
    }
    padding: 16px;
    text-align: left;

    .price-block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
  }
  &__bridal-includes{
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
  }
}


</style>