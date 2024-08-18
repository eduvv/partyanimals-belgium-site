<template>
  <div class="wave-container">
    <svg :class="props.colorTop" class="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1200 120"
         preserveAspectRatio="none">
      <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          :class="props.colorBottom"></path>
    </svg>
  </div>
</template>
<script setup lang="ts">
import {onBeforeUnmount} from "vue";

const props = defineProps({
  colorBottom: {
    type: String,
    required: false,
    default() {
      return 'fill-green-500'
    }
  },
  colorTop: {
    type: String,
    required: false,
    default() {
      return 'bg-yellow-500'
    }
  }
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.wave-container').forEach(waveContainer => {
    observer.observe(waveContainer);
  });
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})


function handleScroll() {
  const waves = document.querySelectorAll('.wave-container')
  waves.forEach((waveContainer) => {
    const wave = waveContainer.querySelector('.wave') as SVGElement
    const rect = waveContainer.getBoundingClientRect();

    const waveHeight = rect.height;
    const waveTop = rect.top;

    const progress = Math.min(Math.max((window.innerHeight - waveTop) / (window.innerHeight + waveHeight) * 100, 0), 100);

    const movement = progress * 4; // Adjust multiplier for desired effect
    wave.style.transform = `translateX(-${movement}px)`;
  });
}
</script>
<style scoped lang="scss">
.wave-container {
  position: relative;
  margin-top: -5px; //fixes white line issue on certain screen sizes
  width: 100%;
  overflow: hidden;
  transform: rotate(180deg);
}

.wave-container svg {
  position: relative;
  display: block;
  width: 200%;
}
</style>