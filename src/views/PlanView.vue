<script setup lang="ts">
const planCareText = [
  'Hair should be clean and dry. It’s best to wash it in the evening or morning, but make sure it is completely dry.',
  'Avoid using hair masks or oils after washing your hair.',
  'Consider doing a facial mask the day before the event. Not mandatory, but recommended.',
  'Do not perform peeling or any other aggressive facial procedures for at least 3 weeks before the event.',
  'Take good care of your hands. Use moisturizing lotions.'
]

const planPlaceText = [
  'Find a well-lit spot, preferably near a window with good natural light.',
  'Ensure the table is clean and organized for makeup and other instruments.'
]
</script>

<template>
<div class="plan-wrapper">
  <h2>Be ready</h2>
  <p v-for="(text, index) in planCareText">
    {{index + 1}}. {{text}}
  </p>
  <h2>Prepare the place</h2>
  <p v-for="(text, index) in planPlaceText">
    {{index + 1}}. {{text}}
  </p>
</div>
</template>

<style scoped lang="scss">
.plan-wrapper {
  padding: 16px;

  @media (min-width: 769px) {
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    font-size: 30px;
    text-align: left;
    margin-bottom: 8px;
  }
  p {
    text-align: left;
    margin-bottom: 16px;
  }
}
</style>