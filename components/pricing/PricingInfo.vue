<template>
  <div class="font-monograss text-lg text-secondary">
    <p>{{ $tm(`${translationPrefix}.sub_title[0]`) }}</p>
    <p>{{ $tm(`${translationPrefix}.sub_title[1]`) }}</p>
    <ul class="ml-5 list-disc list-inside">
      <li v-for="(item, index) in $tm(`${translationPrefix}.list1`)" :key="index">{{ item }}</li>
    </ul>

    <p class="mt-5">{{ $tm(`${translationPrefix}.price[0]`) }}</p>
    <p>{{ $tm(`${translationPrefix}.price[1]`) }}</p>

    <div class="mt-5">
      <p v-for="(item, index) in $tm(`${translationPrefix}.extra_info`)" :key="index">{{ item }}</p>
    </div>
    <!-- Zen only -->
    <ul v-if="$tm(`${translationPrefix}.list2`)" class="ml-5 list-disc list-inside">
      <li v-for="(item, index) in $tm(`${translationPrefix}.list2`)" :key="index">{{ item }}</li>
    </ul>
    <p v-if="Object.keys($tm(`${translationPrefix}.extra_info2`)).length">
      {{ $tm(`${translationPrefix}.extra_info2`) }}
    </p>
    <button @click="nextSection" class="mt-10 w-56 p-4 text-xl button">Aanvraag indienen</button>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";
import {PACK} from "~/config/packs";

const props = defineProps({
  package: {
    type: Number as PropType<PACK>,
    required: true,
    default: PACK.PARTYANIMAL
  },
});

const selectedPackage = computed(() => PACK[props.package]);
const translationPrefix = computed(() => `pricing_modal.${selectedPackage.value}`);

// Emits
const emit = defineEmits(["continue"]);

// Methods
const nextSection = () => {
  emit("continue");
};
</script>
<style scoped lang="scss">
.button {
  @apply
  font-monograss
  bg-secondary
  text-primary
  pt-2
  pb-1
  mt-2
  rounded-full
  hover:bg-primary
  hover:text-secondary
  hover:shadow-button-border
  leading-7
  transition
  duration-300
  ;
}
</style>