<script setup lang="ts">

</script>

<template>
  <section class="bg-secondary min-h-screen flex items-center justify-center">
    <div class="max-w-4xl mx-auto text-start">
      <div class="mx-4 sm:mx-12 my-2 sm:mt-10">
        <h2 class="font-monograss text-4xl text-primary my-5">{{ $t('about_title') }}</h2>
        <p class="text-base sm:text-lg text-primary font-poppins mb-4">{{ $t('about_content[0]') }}</p>
        <p class="text-base sm:text-lg text-primary font-poppins mb-4">{{ $t('about_content[1]') }}</p>
        <p class="text-base sm:text-lg text-primary font-poppins mb-4">{{ $t('about_content[2]') }}</p>
      </div>
      <AboutCarousel class="justify-self-center mx-0 sm:mx-12"/>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>