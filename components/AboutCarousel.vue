<template>
  <Splide
      aria-labelledby="autoplay-example-heading"
      :options="options"
      :has-track="false"
  >
    <div style="position: relative">
      <SplideTrack>
        <SplideSlide>
          <img src="/images/carousel/1.jpeg" alt="" class="img-1" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/carousel/2.jpeg" alt="" class="img-2" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/carousel/3.jpeg" alt="" class="img-3" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/carousel/4.jpeg" alt="" class="img-4" />
        </SplideSlide>
        <SplideSlide>
          <img src="/images/carousel/5.jpeg" alt="" class="img-5" />
        </SplideSlide>
      </SplideTrack>
    </div>
  </Splide>
</template>

<script setup lang="ts">
const options = {
  width: '100%',
  type: 'slide',
  rewind: true,
  rewindByDrag: false,
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
  height:35vh;
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
