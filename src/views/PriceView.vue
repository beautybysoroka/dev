<script setup lang="ts">
import { homeTitle5 } from '@/constants/texts'
import { ref } from 'vue'

type Currency = 'dkk' | 'euro'

const currentCurrency = ref<Currency>('dkk')

const prices = {
  dkk: [
    { title: 'Makeup / Hairstyle', price: '900 dkk' },
    { title: 'Makeup plus hair', price: '1500 dkk' },
    { title: 'Arrival before 8am', price: '300 dkk' },
    { title: 'Bride + 1 Bridesmaid ', price: '2800 dkk' },
    { title: 'Bride + 2 Bridesmaids ', price: '4000 dkk' },
    { title: 'Bride + 3 Bridesmaids ', price: '5000 dkk' },
    { title: 'Areas not in greater CPH', price: 'DM me' },
    { title: 'Other cities in Europe', price: 'DM me' }
  ],
  euro: [
    { title: 'Makeup / Hairstyle', price: '120 €' },
    { title: 'Makeup plus hair', price: '200 €' },
    { title: 'Arrival before 8am', price: '40 €' },
    { title: 'Bride + 1 Bridesmaid', price: '370 €' },
    { title: 'Bride + 2 Bridesmaid', price: '530 €' },
    { title: 'Bride + 3 Bridesmaid', price: '665 €' },
    { title: 'Areas not in greater CPH', price: 'DM me' },
    { title: 'Other cities in Europe', price: 'Depends on distance' }
  ]
}
const makeup = {
  dkk: [
    { title: 'Makeup', price: '900 dkk' },
    { title: 'Hairstyle', price: '900 dkk' },
    { title: 'Makeup & hairstyle', price: '1500 dkk' }
  ],
  euro: [
    { title: 'Makeup', price: '120 €' },
    { title: 'Hairstyle', price: '120 €' },
    { title: 'Makeup & hairstyle', price: '200 €' }
  ]
}

const other = {
  dkk: [
    { title: 'Brows', price: '350 dkk' }
    /*,
    { title: 'Eyelashes', price: '250 dkk' }*/
  ],
  euro: [
    { title: 'Brows', price: '45 €' }
    /*,
    { title: 'Eyelashes', price: '35 €' }*/
  ]
}


const changeCurrency = (currency: Currency) => { currentCurrency.value = currency }

</script>

<template>
<div class="price__wrapper small-common-wrapper">
  <h2>{{homeTitle5}}</h2>
  <div class="price__currency">
    <p @click="changeCurrency('dkk')" :class="{'price__currency_active': currentCurrency === 'dkk'}">Dkk</p>
    <p>/</p>
    <p @click="changeCurrency('euro')" :class="{'price__currency_active': currentCurrency === 'euro'}">Euro</p>
  </div>
  <h4>Brides</h4>
  <div class="price-block" v-for="(price, index) in prices[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
  <p class="price__bridal-includes">Bridal package includes:</p>
  <p>Eyelashes</p>
  <p>Touch up kit</p>
  <p>My transit to you</p>
  <h4>Events</h4>
  <div class="price-block" v-for="(price, index) in makeup[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
  <h4>Other</h4>
  <div class="price-block" v-for="(price, index) in other[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.price {
  &__currency {
    display: flex;
    grid-gap: 4px;

    &:hover { cursor: pointer }

    &_active {
      transition: .5s;
      color: #efc79b;
    }
  }
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