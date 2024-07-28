<!-- pages/index.vue -->
<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <section class="bg-blue-500 text-white min-h-screen flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-5xl font-bold mb-4">Partyanimals</h1>
                <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat temporibus nobis aliquid voluptatibus ratione atque officia asperiores modi deserunt? Labore nam, praesentium aliquid consequatur voluptate ipsa excepturi recusandae cupiditate.</p>
                <button
                    class="mt-8 bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Get
                    Started</button>
            </div>
        </section>

        <!-- About Me Section -->
        <section class="bg-gray-100 min-h-screen flex items-center justify-center">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">About Me</h2>
                <p class="text-xl">I'm a passionate developer with years of experience in creating innovative solutions.
                    My goal is to help businesses grow through technology.</p>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="bg-white min-h-screen flex items-center justify-center">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
                <div class="flex flex-col md:flex-row justify-center items-center gap-8">
                    <!-- Basic Plan -->
                    <div class="bg-gray-100 rounded-lg p-8 flex flex-col w-full md:w-1/3">
                        <h3 class="text-2xl font-bold mb-4">Basic</h3>
                        <p class="text-4xl font-bold mb-6">$9.99<span class="text-sm font-normal">/month</span></p>
                        <ul class="mb-8">
                            <li class="mb-2">Feature 1</li>
                            <li class="mb-2">Feature 2</li>
                            <li class="mb-2">Feature 3</li>
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
        <section class="bg-gray-100 min-h-screen flex items-center justify-center">
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

        <!-- Contact Section -->
        <section class="bg-blue-500 text-white min-h-screen flex items-center justify-center">
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

<script setup>
// No additional script needed for this example
</script>

<style>
/* Any additional styles can be added here if needed */
</style>