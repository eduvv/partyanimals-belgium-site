<script setup lang="ts">
</script>

<template>
  <section class="bg-primary flex items-center justify-center px-0 sm:px-12">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
            class="max-w-3xl mb-4 text-6xl font-monograss text-text tracking-tight leading-none md:text-6xl xl:text-8xl">
          Party Animals<span class="text-3xl tracking-wide ml-2">{{ $t('hero_belgium') }}</span></h1>
        <p class="max-w-2xl mb-6 font-light text-text font-poppins lg:mb-8 md:text-lg lg:text-2xl">
          {{ $t('hero_sub') }}</p>
        <button
            onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'});"
            class="button">
          {{ $t('hero_booknow') }}
        </button>
        <button onclick="window.open('https://wz7p0j-sz.myshopify.com/', '_blank')" class="ml-5 button-secondary">
          Shop
        </button>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex blob">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blob {
  background-image: url('/images/hero.webp');
  width: 380px;
  height: 380px;
  background-size: cover;
  --webkit-background-position: center;
  background-position: center center;
  margin: 20px;
  box-shadow: 0 5px 50px 0 #D81559 inset, 0 5px 100px 10px #F8E5EE;
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
}

@keyframes animate {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}

.button {
  @apply
  mt-5
  bg-secondary
  text-primary
  pt-3
  pb-2
  px-6
  rounded-full
  text-xl
  font-semibold
  font-monograss
  transform
  hover:bg-primary
  hover:text-secondary
  hover:shadow-button-border
  duration-300
  ;
}

.button-secondary {
  @apply
  mt-5
  bg-primary
  text-secondary
  pt-3
  pb-2
  px-6
  rounded-full
  text-xl
  font-semibold
  font-monograss
  transform
  shadow-button-border
  hover:bg-secondary
  hover:text-primary
  hover:shadow-button-border
  duration-300
  ;
}
</style>