<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-primary">
    <!-- Hero Section -->
    <ScrollIndicator :sections="sections" class="hidden sm:block"/>
    <Confetti/>
    <SectionsHero class="min-h-dvh"/>

    <!-- About Me Section -->
    <!--    <WavyDivider color-top="bg-primary" color-bottom="fill-secondary"></WavyDivider>-->
    <SectionsAbout class="min-h-screen"/>

    <!-- Pricing Section -->
    <!--    <WavyDivider id="pricing" color-top="bg-secondary" color-bottom="fill-secondary"></WavyDivider>-->
    <SectionsPricing class="min-h-screen"/>

    <!-- FAQ Section -->
    <!--    <WavyDivider color-top="bg-secondary" color-bottom="fill-green-200"></WavyDivider>-->
    <SectionsFaq class="min-h-screen"/>

    <!--    <WavyDivider color-top="bg-green-200" color-bottom="fill-cyan-200"></WavyDivider>-->
    <SectionsPartners class="snap-center"/>

    <!-- Contact Section -->
    <!--    <WavyDivider color-top="bg-cyan-200" color-bottom="fill-orange-200"></WavyDivider>-->
    <SectionsContact class="min-h-screen"/>
    <!-- Footer -->
    <footer class="bg-secondary text-primary px-4 pb-5">
      <div
          class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center justify-items-center md:gap-4 text-center">
        <!-- Email -->
        <div class="flex items-center text-center text-xs sm:text-sm md:text-base">
          <font-awesome icon="envelope" class="mr-2"/>
          <a href="mailto:Britt@partyanimalsbelgium.be" class="underline cursor-pointer">Britt@partyanimalsbelgium.be</a>
        </div>
        <!-- Phone -->
        <div class="flex items-center text-xs sm:text-sm md:text-base">
          <font-awesome icon="phone" class="mr-2"/>
          <a href="tel:+32498132464" class="underline cursor-pointer">0498132464</a>
        </div>
        <!-- VAT -->
        <div class="flex items-center text-xs sm:text-sm md:text-base">
          <font-awesome icon="percent" class="mr-2"/>
          <span>BE1000362483</span>
        </div>
        <!-- Address -->
        <div class="flex items-center text-xs sm:text-sm md:text-base">
          <font-awesome icon="map-marker-alt" class="mr-2"/>
          <span>René de Pauwstraat 59, 2950 Kapellen</span>
        </div>
        <!-- PDF Link -->
        <div class="flex items-center text-xs sm:text-sm md:text-base">
          <font-awesome icon="file-pdf" class="mr-2"/>
          <a href="/algemene_voorwaarden.pdf" target="_blank" class="underline cursor-pointer">Algemene voorwaarden</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import type {Section} from "~/components/ScrollIndicator.vue";

const sections: Section[] = [
  {id: "hero", name: 'Home'},
  {id: "about", name: 'Over mij'},
  {id: "pricing", name: 'Prijzen'},
  {id: "faq", name: 'Veelgestelde vragen'},
  {id: "partners", name: 'Blije klanten'},
  {id: "contact", name: 'Contacteer ons'},
]
</script>

<style lang="scss">
html, body {
  height: 100dvh;
  margin: 0;
  padding: 0;
  background-color: #D81559;
}
a {
  @apply cursor-pointer;
}
</style>