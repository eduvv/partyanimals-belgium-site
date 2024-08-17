<template>
  <div
      v-show="visible"
      ref="tooltipElement"
      class="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow z-50 w-max"
      :style="tooltipStyle"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  text: String,
  visible: Boolean,
});

const tooltipStyle = ref({ top: '-0.5rem' });
const tooltipElement = ref(null);

onMounted(() => {
  if (tooltipElement.value) {
    const parent = tooltipElement.value.parentNode;
    // tooltipStyle.value.top = `${parent.offsetTop + parent.offsetHeight / 2 - tooltipElement.value.offsetHeight / 2}px`;
  }
});

watch(
    () => props.visible,
    (newVisible) => {
      if (newVisible && tooltipElement.value) {
        const parent = tooltipElement.value.parentNode;
        // tooltipStyle.value.top = `${parent.offsetTop + parent.offsetHeight / 2 - tooltipElement.value.offsetHeight / 2}px`;
      }
    }
);
</script>
