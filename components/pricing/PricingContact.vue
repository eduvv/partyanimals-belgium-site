<template>
  <div class="flex flex-grow min-h-full">
    <button @click="sendMail" class="button flex self-center mt-auto">aanvraag versturen</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import {PACK} from "~/config/packs";

const props = defineProps({
  package: {
    type: Number as PropType<PACK>,
    required: true,
    default: PACK.PARTYANIMAL
  },
});

const selectedPackage = computed(() => PACK[props.package]);
const translationPrefix = computed(() => `pricing_modal.${selectedPackage.value}.contact_form`);

function sendMail() {

}
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
  px-10
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