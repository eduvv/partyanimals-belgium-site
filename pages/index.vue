<!-- pages/index.vue -->
<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <ScrollIndicator :sections="sections"/>
    <Confetti/>
    <SectionsHero/>

    <!-- About Me Section -->
    <WavyDivider color-top="bg-primary" color-bottom="fill-secondary"></WavyDivider>
    <SectionsAbout/>


    <!-- Pricing Section -->
    <WavyDivider id="pricing" color-top="bg-secondary" color-bottom="fill-yellow-200"></WavyDivider>
    <SectionsPricing/>

    <!-- FAQ Section -->
    <WavyDivider color-top="bg-yellow-200" color-bottom="fill-green-200"></WavyDivider>
    <SectionsFaq/>

    <WavyDivider color-top="bg-green-200" color-bottom="fill-cyan-200"></WavyDivider>
    <SectionsPartners/>

    <!-- Contact Section -->
    <WavyDivider color-top="bg-cyan-200" color-bottom="fill-orange-200"></WavyDivider>
    <SectionsContact/>
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
html {
  scroll-behavior: smooth;
}
</style>