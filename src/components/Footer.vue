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
  <footer id="contacts">
    <h2>CONTACT ME</h2>
    <p class="footer__lets">Lets make you beautiful</p>
    <div class="footer__links">
    <a :href="contacts.EMAIL" target="_blank"><img src="/assets/icons/email.svg" alt="email"></a>
    <a :href="contacts.INSTAGRAM" target="_blank"><img src="/assets/icons/instagram.svg" alt="instagram"></a>
    <a :href="contacts.PHONE" target="_blank"><img src="/assets/icons/phone.svg" alt="phone"></a>
    <a :href="contacts.WHATSAPP" target="_blank"><img src="/assets/icons/whatsapp.svg" alt="whatsapp"></a>
    <a :href="contacts.TELEGRAM" target="_blank"><img src="/assets/icons/telegram.svg" alt="telegram"></a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin-top: 40px;
  text-align: center;

  h2 {
    font-size: 40px;
    margin-bottom: 0;
  }

}
.footer {
  &__links {
    width: 50%;
    display: flex;
    margin: 40px auto 60px;
    align-items: center;
    justify-content: space-between;
    grid-gap: 10px;
  }
  &__lets {
    transform: translateY(-10px);
  }
}
.footer__links a img {
  width: 24px;
  color: #3d3c3c;
}
@media (max-width: 768px) {
  .footer__links {
    width: 60%;
  }
}
</style>