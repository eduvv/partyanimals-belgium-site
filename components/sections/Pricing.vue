<script setup lang="ts">

</script>

<template>
  <section class="bg-yellow-200 flex items-center justify-center">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <!-- Basic Plan -->
        <div class="bg-gray-100 rounded-lg p-8 flex flex-col w-full md:w-1/3">
          <h3 class="text-2xl font-bold mb-4">Basic</h3>
          <p class="text-4xl font-bold mb-6">$9.99<span class="text-sm font-normal">/month</span></p>
          <ul class="mb-8">
            <li class="mb-2">2u</li>
            <li class="mb-2">2-6 kinderen</li>
            <li class="mb-2">Glitters</li>
          </ul>
          <button
              class="mt-auto bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Choose
            Plan
          </button>
        </div>

        <!-- Pro Plan (Most Prominent) -->
        <div
            class="bg-blue-500 text-white rounded-lg p-8 flex flex-col w-full md:w-1/3 transform md:scale-110 z-10 shadow-lg">
          <h3 class="text-2xl font-bold mb-4">Pro</h3>
          <p class="text-4xl font-bold mb-6">$19.99<span class="text-sm font-normal">/month</span></p>
          <ul class="mb-8">
            <li class="mb-2">All Basic Features</li>
            <li class="mb-2">Pro Feature 1</li>
            <li class="mb-2">Pro Feature 2</li>
            <li class="mb-2">Pro Feature 3</li>
          </ul>
          <button
              class="mt-auto bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Choose
            Plan
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="bg-gray-100 rounded-lg p-8 flex flex-col w-full md:w-1/3">
          <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
          <p class="text-4xl font-bold mb-6">$49.99<span class="text-sm font-normal">/month</span></p>
          <ul class="mb-8">
            <li class="mb-2">All Pro Features</li>
            <li class="mb-2">Enterprise Feature 1</li>
            <li class="mb-2">Enterprise Feature 2</li>
            <li class="mb-2">24/7 Support</li>
          </ul>
          <button
              class="mt-auto bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Choose
            Plan
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>