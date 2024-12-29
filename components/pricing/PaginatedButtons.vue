<template>
  <div class="flex my-2 space-x-2 items-center w-fit">
    <!-- arrow left -->
    <div v-if="paginated" class="flex items-center">
      <button
          class="button-arrow"
          :disabled="currentPage === props.min"
          @click="scrollLeft"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
    </div>

    <!-- number buttons-->
    <label
        v-for="value in visibleButtons"
        :key="value"
        :class="[
        selectedValue === value ? 'shadow-button-select' : '',
        'button-number'
      ]"
    >
      <input
          type="radio"
          :name="groupName"
          :value="value"
          class="hidden"
          v-model="selectedValue"
      />
      {{ value }}
    </label>

    <!-- arrow right -->
    <div v-if="paginated" class="flex items-center">
      <button
          class="button-arrow"
          :disabled="currentPage + visibleRange > props.max"
          @click="scrollRight"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch, withDefaults} from "vue";

interface Props {
  min: number;
  max: number;
  paginated: boolean;
  modelValue?: number;
  groupName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  paginated: false,
});

const emit = defineEmits(["update:modelValue"]);

const currentPage = ref(props.min);
const selectedValue = ref(props.modelValue);
const visibleRange = 4;

const visibleButtons = computed(() => {
  if (!props.paginated) {
    return Array.from({length: props.max - props.min + 1}, (_, i) => i + props.min);
  }
  const start = Math.min(currentPage.value, props.max - visibleRange + 1);
  return Array.from({length: visibleRange}, (_, i) => start + i).filter(
      (value) => value >= props.min && value <= props.max
  );
});

const scrollLeft = () => {
  if (currentPage.value > props.min) {
    currentPage.value = Math.max(props.min, currentPage.value - visibleRange);
  }
};

const scrollRight = () => {
  if (currentPage.value + visibleRange <= props.max) {
    currentPage.value = Math.min(props.max - visibleRange + 1, currentPage.value + visibleRange);
  }
};

watch(selectedValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style scoped lang="scss">
.button-number {
  @apply flex text-lg sm:text-xl font-thin items-center justify-center pt-1 w-7 h-7 sm:w-9 sm:h-9 bg-secondary text-primary font-monograss rounded-full cursor-pointer transition-all;
}

.button-arrow {
  @apply flex items-center justify-center pt-0 w-7 h-7 sm:w-9 sm:h-9 bg-secondary text-primary font-monograss rounded-full cursor-pointer transition-all;
}

.button-arrow:disabled {
  filter: blur(1px) brightness(95%);
}

</style>
