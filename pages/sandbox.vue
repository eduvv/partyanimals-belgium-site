<template>
  <div class="snap-y snap-mandatory h-screen overflow-y-scroll">
    <ScrollIndicator />
    <section
        v-for="section in 5"
        :key="section"
        :class="['snap-start', 'h-screen', 'flex', 'items-center', 'justify-center']"
        :style="{ backgroundColor: `hsl(${section * 72}, 50%, 70%)` }"
    >
      <h1 class="text-4xl">Section {{ section }}</h1>
    </section>
  </div>
</template>

<script setup>
import ScrollIndicator from '~/components/ScrollIndicator.vue';
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
