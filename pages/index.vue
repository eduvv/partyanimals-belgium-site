<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-primary">
    <!-- Hero Section -->
    <ScrollIndicator :sections="sections" class="hidden sm:block" />
    <Confetti/>
    <SectionsHero class="min-h-screen"/>

    <!-- About Me Section -->
<!--    <WavyDivider color-top="bg-primary" color-bottom="fill-secondary"></WavyDivider>-->
    <SectionsAbout class="min-h-screen"/>

    <!-- Pricing Section -->
<!--    <WavyDivider id="pricing" color-top="bg-secondary" color-bottom="fill-secondary"></WavyDivider>-->
    <SectionsPricing class="min-h-screen"/>

    <!-- FAQ Section -->
<!--    <WavyDivider color-top="bg-secondary" color-bottom="fill-green-200"></WavyDivider>-->
    <SectionsFaq class=""/>

<!--    <WavyDivider color-top="bg-green-200" color-bottom="fill-cyan-200"></WavyDivider>-->
    <SectionsPartners class="snap-center"/>

    <!-- Contact Section -->
<!--    <WavyDivider color-top="bg-cyan-200" color-bottom="fill-orange-200"></WavyDivider>-->
    <SectionsContact class="min-h-screen"/>
  </div>
</template>

<script setup lang="ts">
import type {Section} from "~/components/ScrollIndicator.vue";

const sections:Section[] = [
  {id: "hero", name: 'Home'},
  {id: "about", name: 'Over mij'},
  {id: "pricing", name: 'Prijzen'},
  {id: "faq", name: 'Veelgestelde vragen'},
  {id: "partners", name: 'Blije klanten'},
  {id: "contact", name: 'Contacteer ons'},
]
</script>

<style lang="scss">
html,body {
  background-color: #D81559;
}
</style>