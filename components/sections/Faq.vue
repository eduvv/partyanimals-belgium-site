<script setup lang="ts">

</script>

<template>
  <section class="flex flex-col justify-center bg-secondary px-2 sm:px-12">
    <h2 class="flex font-monograss text-4xl text-primary justify-center text-center">Frequently Asked Questions</h2>
    <div class="faq-container">

      <div class="faq-entry">
        <div class="faq-entry-title">Kom je in heel België?</div>
        <div class="faq-entry-content">
          Partyanimals werkt globaal, waar jouw evenement is, daar komen wij naartoe.
          <br>Voor verplaatsingen in België vragen we 0,95 euro/km.
        </div>
      </div>

      <div class="faq-entry">
        <div class="faq-entry-title">Vanaf welke leeftijd entertainen Partyanimals de kids?</div>
        <div class="faq-entry-content">
          Vanaf 2,5 jaar entertainen Partyanimals de kids en worden zij ook mee opgenomen in de offerte.
        </div>
      </div>

      <div class="faq-entry">
        <div class="faq-entry-title">Hoeveel kids entertain je tegelijk?</div>
        <div class="faq-entry-content">
          Om de kwaliteit en veiligheid te garanderen, hangt dit af van de leeftijden van de kids. Gemiddeld gaat er
          vanaf 15 kids een tweede entertainer mee. Hiervoor betaal je 60 euro/uur.
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.faq-container {
  @apply
  flex
  flex-col
  self-center
  max-w-[58.75rem]
  w-full
  my-20
  mx-20;
}

.faq-entry {
  @apply
  flex
  flex-col
  bg-primary
  rounded-6xl
  pt-5
  pb-10
  px-12
  mb-4
  drop-shadow-xl

  transform
  duration-300
  hover:scale-105
  hover:drop-shadow-2xl
  ;
}

.faq-entry-title {
  @apply
  text-secondary
  font-monograss
  text-xl
  mb-5;
}

.faq-entry-content {
  @apply
  text-secondary
  font-poppins
  text-xl
  font-light;
}
</style>