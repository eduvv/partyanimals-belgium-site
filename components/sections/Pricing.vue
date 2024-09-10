<script setup lang="ts">

</script>

<template>
  <section class="bg-yellow-200 flex items-center justify-center">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Pakketten</h2>
      <div class="flex flex-col md:flex-row justify-center items-center gap-12">
        <!-- Basic Plan -->
        <div class="bg-gray-100 rounded-lg p-8 flex flex-col w-full md:w-1/3">
          <h3 class="text-2xl font-bold mb-4">Partyanimal</h3>
          <p class="text-4xl font-bold mb-6"><span class="text-sm font-normal">v.a.</span> €250</p>

          <ul class="mb-8">
            <li class="mb-2">2 uur entertainment</li>
            <li class="mb-2">6 kids</li>
            <li class="mb-2">één workshop</li>
          </ul>
          <button
              class="mt-auto bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Kies pakket
          </button>
        </div>

        <!-- Pro Plan (Most Prominent) -->
        <div
            class="bg-blue-500 text-white rounded-lg p-8 flex flex-col w-full md:w-1/3 transform md:scale-110 z-10 shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Zen</h3>
          <p class="text-4xl font-bold mb-6"><span class="text-sm font-normal">v.a.</span> €745</p>
          <ul class="mb-8">
            <li class="mb-2">Volledige decoratie</li>
            <li class="mb-2">2 uur entertainment</li>
            <li class="mb-2">6 kids</li>
            <li class="mb-2">één georganiseerde activiteit</li>
            <li class="mb-2">glittertattoos</li>
          </ul>
          <button
              class="mt-auto bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Kies pakket
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="bg-gray-100 rounded-lg p-8 flex flex-col w-full md:w-1/3">
          <h3 class="text-2xl font-bold mb-4">B2B</h3>
          <p class="text-4xl font-bold mb-6"><span class="text-sm font-normal">v.a.</span> €300</p>
          <ul class="mb-8">
            <li class="mb-2">2 uur entertainment</li>
            <li class="mb-2">knutseltafel</li>
            <li class="mb-2">6 kids inbegrepen</li>
          </ul>
          <button
              class="mt-auto bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Kies pakket
          </button>
        </div>
      </div>
      <div class="justify-center items-center content-center">
        <p>Niet gevonden wat je zocht?</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>