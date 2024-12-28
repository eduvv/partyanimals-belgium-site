<template>
  <Splide
      aria-labelledby="autoplay-example-heading"
      :options="options"
      :has-track="false"
  >
    <div style="position: relative">
      <SplideTrack>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/1.webp"   alt="Vrouw gooit confetti in de lucht tijdens een feest, zittend op de vloer in een paarse broek." class="img-1"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/2.webp"   alt="Kinderen knutselen onder een partytent met regenboogdecoratie en ballonnen." class="img-2"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/3.webp"  alt="Vrouw en meisje buiten met kleurrijke stickers op hun gezichten." class="img-3"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/4.webp"  alt="Vrouw toont roze verjaardagstaart in een tuin met zwembad." class="img-4"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/5.webp"   alt="Lachende vrouw met glas roze wijn in een tuin." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/6.webp"   alt="Vrouw en kind met ballon tijdens een binnenevenement." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/7.webp"   alt="Vrouw met peuter bij paarse ballondecoratie en teddybeer." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/8.webp"   alt="Kinderen spelen met bellen op een trampoline in de tuin." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/9.webp"   alt="Lachende vrouw voor een roze achtergrond met een zeepbel op haar hoofd." class="img-5"/></SplideSlide>
        <SplideSlide><NuxtImg sizes="xs:420px md:1600px" src="/images/carousel/10.webp"  alt="Vrouw poseert naast een kleurrijke ballonnenboog bij een feest." class="img-5"/></SplideSlide>
      </SplideTrack>
    </div>
  </Splide>
</template>

<script setup lang="ts">
const options = {
  width: '100%',
  type: 'loop',
  drag: false,
  autoplay: true,
  speed: 500,
  interval: 4000,
  arrows: false,
  pagination: false,
}
</script>

<style scoped lang="scss">
.splide__slide img {
  width: 100%;
  height: 35vh;
  object-fit: cover;
  display: block;

  .img-1 {
    object-position: 50% calc(50% + 0rem);
  }
}

/* For screens >= 640px, use 60vh (60% of the viewport height) */
@media (min-width: 640px) {
  .splide__slide img {
    height: 50vh;
  }
}

.img-2 {
  object-position: 50% 50%;
}

.img-3 {
  object-position: 50% calc(50% + 6rem);
}

.img-4 {
  object-position: 50% calc(50% + 9rem);
}

.img-5 {
  object-position: 50% calc(50% + 5rem);
}
</style>
