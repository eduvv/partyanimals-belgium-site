<script setup lang="ts">
import type {Section} from "~/components/ScrollIndicator.vue";

const sections: Section[] = [
  {id: "hero", name: 'Home'},
  {id: "about", name: 'Over mij'},
  {id: "pricing", name: 'Prijzen'},
  {id: "faq", name: 'Veelgestelde vragen'},
  {id: "partners", name: 'Blije klanten'},
]
const colors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500']

</script>

<template>
  <div class="min-h-screen h-100 min-h-screen">
    <ScrollIndicator :sections="sections"/>
    <section v-for="(section,index) in sections" :class="colors[index]"
             class="h-screen flex justify-center items-center">
      <h1>{{ $t('welcome') + "  "+ section.id }}</h1>
    </section>
  </div>
</template>

<style scoped>

</style>