<!-- pages/index.vue -->
<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section class="bg-blue-500 text-white min-h-screen flex items-center justify-center">
          <Confetti/>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1
                        class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Party Animals</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Lorem ipsom bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla
                        blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla.</p>
                    <button
                        class="mt-8 bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Get
                        Started</button>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        src="https://www.partyanimalsbelgium.be/wp-content/uploads/2024/04/Content-Britt-2-1-2048x1536.jpg">
                </div>
            </div>
        </section>

        <!-- About Me Section -->
        <WavyDivider color-top="bg-blue-500" color-bottom="fill-gray-200"></WavyDivider>
        <section class="bg-gray-200 min-h-screen flex items-center justify-center">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">About Me</h2>
                <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </section>


        <!-- Pricing Section -->
        <WavyDivider color-top="bg-gray-200" color-bottom="fill-yellow-200"></WavyDivider>
        <section class="bg-yellow-200 min-h-screen flex items-center justify-center">
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
                            class="mt-auto bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">Choose
                            Plan</button>
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
                            class="mt-auto bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">Choose
                            Plan</button>
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
                            class="mt-auto bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">Choose
                            Plan</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <WavyDivider color-top="bg-yellow-200" color-bottom="fill-green-200"></WavyDivider>
        <section class="bg-green-200 min-h-screen flex items-center justify-center">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div class="space-y-6">
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <h3 class="text-xl font-semibold mb-2">What is your refund policy?</h3>
                        <p>We offer a 30-day money-back guarantee for all our plans.</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <h3 class="text-xl font-semibold mb-2">Can I upgrade my plan later?</h3>
                        <p>Yes, you can upgrade your plan at any time. The new rate will be prorated for the remainder
                            of your billing cycle.</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <h3 class="text-xl font-semibold mb-2">Do you offer discounts for non-profits?</h3>
                        <p>Yes, we offer special discounts for non-profit organizations. Please contact our sales team
                            for more information.</p>
                    </div>
                </div>
            </div>
        </section>

        <WavyDivider color-top="bg-green-200" color-bottom="fill-cyan-200"></WavyDivider>
        <section class="bg-cyan-200 min-h-20 flex items-center justify-center">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-12">media / partners</h2>
            </div>
        </section>

        <!-- Contact Section -->
        <WavyDivider color-top="bg-cyan-200" color-bottom="fill-orange-200"></WavyDivider>
        <section class="bg-orange-200 text-white min-h-screen flex items-center justify-center">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
                <p class="text-xl mb-8">Have questions? We're here to help. Reach out to us anytime.</p>
                <div class="flex justify-center space-x-4">
                    <a href="mailto:contact@example.com"
                        class="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Email
                        Us</a>
                    <a href="tel:+1234567890"
                        class="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Call
                        Us</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

import Confetti from "~/components/Confetti.vue";
</script>

<style>
/* Any additional styles can be added here if needed */
</style>