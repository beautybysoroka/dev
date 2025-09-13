<script setup lang="ts">
const contacts = {
  EMAIL: 'mailto:beautybysoroka@gmail.com',
  INSTAGRAM: 'https://www.instagram.com/beautybysoroka/',
  PHONE: 'tel:+4591921235',
  WHATSAPP: 'https://wa.me/+79143366399',
  TELEGRAM: 'https://t.me/sorokamarie',
}
</script>

<template>
  <footer>
    <div class="footer__links">
    <a :href="contacts.EMAIL" target="_blank"><img src="/assets/icons/email.svg" alt="email"></a>
    <a :href="contacts.INSTAGRAM" target="_blank"><img src="/assets/icons/instagram.svg" alt="instagram"></a>
    <a :href="contacts.PHONE" target="_blank"><img src="/assets/icons/phone.svg" alt="phone"></a>
    <a :href="contacts.WHATSAPP" target="_blank"><img src="/assets/icons/whatsapp.svg" alt="whatsapp"></a>
    <a :href="contacts.TELEGRAM" target="_blank"><img src="/assets/icons/telegram.svg" alt="telegram"></a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
.footer__links {
  width: 50%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  grid-gap: 10px;
}
.footer__links a img {
  width: 30px;
  color: #3d3c3c;
}
@media (max-width: 768px) {
  .footer__links {
    width: 60%;
  }
}
</style>