<script setup lang="ts">

import {PACK} from "~/config/packs";
let selectedPackage = ref();
let selectedSection = ref(1);
const showModal = ref(false);

function showPrice(pack: PACK, section: number) {
  selectedPackage.value = pack;
  selectedSection.value = section
  showModal.value = true
}
</script>

<template>
  <section id="pricing" class="bg-secondary flex items-center justify-center">
    <div class="max-w-6xl mx-auto px-4">
      <PricingModal v-if="showModal" :package="selectedPackage" :section="selectedSection" @update:show="showModal = $event"/>
      <div class="flex flex-wrap gap-4 justify-center items-center content-center min-h-screen">
        <!-- Main pakketten-->
        <div class="flex w-full gap-20 justify-center items-center">
          <!-- Partyanimal pakket -->
          <div class="card card-transform h-112">
            <div class="card-content">
              <h3 class="header">{{ $t('pricing_headers[0]') }}</h3>
              <div class="text-xl font-poppins font-light">{{ $t('pricing_content[0]') }}</div>
              <div class="text-xs font-poppins font-light">{{ $t('pricing_extra_cost') }}</div>
            </div>
            <button class="w-4/6 text-lg button" @click="showPrice(PACK.PARTYANIMAL, 1)">{{ $t('pricing_button_more_info') }}</button>
            <button class="mt-1 pt-4 w-5/6 text-2xl button" @click="showPrice(PACK.PARTYANIMAL,2)">{{
                $t('pricing_button_book_now')
              }}
            </button>
          </div>

          <!-- Zen pakket -->
          <div class="card card-transform h-128 -mt-44">
            <div class="card-content">
              <h3 class="header">{{ $t('pricing_headers[1]') }}</h3>
              <div class="text-xl font-poppins font-light">{{ $t('pricing_content[1]') }}</div>
              <div class="text-xs font-poppins font-light">{{ $t('pricing_extra_cost') }}</div>
            </div>
            <button class="w-4/6 text-lg button" @click="showPrice(PACK.ZEN,1)">{{ $t('pricing_button_more_info') }}</button>
            <button class="mt-1 pt-4 w-5/6 text-2xl button" @click="showPrice(PACK.ZEN,2)">{{
                $t('pricing_button_book_now')
              }}
            </button>
          </div>

          <!-- B2B Pakket -->
          <div class="card card-transform h-112">
            <div class="card-content">
              <h3 class="header">{{ $t('pricing_headers[2]') }}</h3>
              <div class="text-xl font-poppins font-light">{{ $t('pricing_content[2]') }}</div>
              <div class="text-xs font-poppins font-light">{{ $t('pricing_extra_cost') }}</div>
            </div>
            <button class="w-4/6 text-lg button" @click="showPrice(PACK.B2B,1)">{{ $t('pricing_button_more_info') }}</button>
            <button class="mt-1 pt-4 w-5/6 text-2xl button" @click="showPrice(PACK.B2B,2)">{{
                $t('pricing_button_book_now')
              }}
            </button>
          </div>
        </div>

        <!-- niet gevonden wat je zocht?-->
        <div class="small-card card-transform -mt-14">
          <p class="font-thin font-monograss text-secondary py-3">{{ $t('pricing_not_found') }}</p>
          <button class="w-5/6 text-lg button" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'});">{{ $t('pricing_button_specific') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.card {
  @apply
  flex
  flex-col
  w-1/3
  max-w-[300px]
  max-h-[524px]
  bg-primary
  rounded-6xl
  text-center
  items-center
  p-8
  drop-shadow-xl
  ;
}

.card-transform {
  @apply
  transform
  duration-300
  hover:scale-105
  hover:drop-shadow-2xl;
}

.small-card {
  @apply
  flex
  flex-col
  h-[130px]
  w-[300px]
  justify-center
  text-center
  items-center
  bg-primary
  rounded-6xl
  p-4
  drop-shadow-xl
  ;
}

.card-content {
  @apply
  text-secondary
  font-monograss
  flex-grow
  items-center
  text-center
  content-center
  pt-20
  ;
}

.header {
  @apply text-[40px] mb-4 px-7;
  line-height: 43.16px;
  font-weight: 500;
}

.button {
  @apply
  font-monograss
  bg-secondary
  text-primary
  pt-2
  pb-1
  mt-2
  rounded-full
  hover:bg-primary
  hover:text-secondary
  hover:shadow-button-border
  leading-7
  transition
  duration-300
  ;
}
</style>