<template>
  <Splide
      aria-labelledby="autoplay-example-heading"
      :options="options"
      :has-track="false"
  >
    <div style="position: relative">
      <SplideTrack>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/1_crop.webp"   alt="Vrouw gooit confetti in de lucht tijdens een feest, zittend op de vloer in een paarse broek." class="img-1"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/2_crop.webp"   alt="Kinderen knutselen onder een partytent met regenboogdecoratie en ballonnen." class="img-2"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/3_crop.webp"   alt="Vrouw en meisje buiten met kleurrijke stickers op hun gezichten." class="img-3"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/4_crop.webp"   alt="Vrouw toont roze verjaardagstaart in een tuin met zwembad." class="img-4"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/5_crop.webp"   alt="Lachende vrouw met glas roze wijn in een tuin." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/6_crop.webp"   alt="Vrouw en kind met ballon tijdens een binnenevenement." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/7_crop.webp"   alt="Vrouw met peuter bij paarse ballondecoratie en teddybeer." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/8_crop.webp"   alt="Kinderen spelen met bellen op een trampoline in de tuin." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/9_crop.webp"   alt="Lachende vrouw voor een roze achtergrond met een zeepbel op haar hoofd." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/10_crop.webp"  alt="Vrouw poseert naast een kleurrijke ballonnenboog bij een feest." class="img-5"/></SplideSlide>
      </SplideTrack>
    </div>
  </Splide>
</template>

<script setup lang="ts">
const options = {
  type: 'loop',        // Enables endless looping
  perPage: 3,          // Show 3 logos at a time
  perMove: 1,          // Move one logo per transition
  gap: '0.5rem',         // Gap between slides
  autoplay: true,      // Enable autoplay
  speed: 2000,         // Transition duration in ms
  interval: 2000,      // Time between transitions in ms
  arrows: false,       // Hide navigation arrows
  pagination: false,   // Hide pagination dots
  clones: 2,           // Number of clones for smooth looping
  autoHeight: true,   // Fixed height
  lazyLoad: 'nearby',      // Gap between slides
}
</script>

<style scoped lang="scss">
.splide__slide img {
  max-height: 35vh;
  object-fit: cover;
  display: block;
}

/* For screens >= 640px, use 60vh (60% of the viewport height) */
@media (max-width: 640px) {
  .splide__slide img {
    height: 20vh;
  }
}

</style>
