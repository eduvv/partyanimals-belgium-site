<template>
  <section class="bg-secondary flex flex-col items-center justify-center">
    <!-- Title -->
    <h2 class="text center mx-auto font-monograss text-4xl text-primary">Media en partners</h2>

    <!-- Logos section -->
    <div class="carousel-wrapper place-content-center pt-5">
      <Splide :options="options" :has-track="false" class="partner-carousel">
        <SplideTrack>
          <!-- Slides -->
          <SplideSlide>
            <NuxtImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo-HLN.svg/768px-Logo-HLN.svg.png"
                alt="Logo Het Laatste Nieuws"
            />
          </SplideSlide>
          <SplideSlide>
            <NuxtImg
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/KTN_Logo.JPG"
                alt="Logo Katoennatie"
            />
          </SplideSlide>
          <SplideSlide>
            <NuxtImg
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/HP_logo_1979.svg/320px-HP_logo_1979.svg.png"
                alt="Logo Hewlett Packard"
            />
          </SplideSlide>
          <SplideSlide>
            <NuxtImg
                src="https://cdn.webshopapp.com/shops/305939/themes/173879/v/1201433/assets/logo.png"
                alt="Logo WOW Party"
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  </section>
</template>

<script setup lang="ts">
const options = {
  type: 'loop',        // Enables endless looping
  perPage: 3,          // Show 3 logos at a time
  perMove: 1,          // Move one logo per transition
  gap: '2rem',         // Gap between slides
  autoplay: true,      // Enable autoplay
  speed: 2000,         // Transition duration in ms
  interval: 2000,      // Time between transitions in ms
  arrows: false,       // Hide navigation arrows
  pagination: false,   // Hide pagination dots
  clones: 2,           // Number of clones for smooth looping
  autoHeight: false,   // Fixed height
  lazyLoad: 'nearby',
}
</script>

<style scoped lang="scss">
.carousel-wrapper {
  position: relative;
  width: 100vw;
  margin: 0 auto;

  //gradient overlays
  //left side
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #F8E5EE 0%, #F8E5EEAA 10%, transparent 20%);
  }

  //right side
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to left, #F8E5EE 0%, #F8E5EEAA 10%, transparent 20%);
    z-index: 2;
  }

  .splide__slide img {
    display: block;
    height: 12rem; /* Fixed height */
    width: auto; /* Maintain aspect ratio */
    margin: 0 auto; /* Center horizontally */
    object-fit: contain; /* Ensure entire image is visible */
    object-position: center;
    background-color: transparent; /* Background behind logos */
  }
}
</style>

