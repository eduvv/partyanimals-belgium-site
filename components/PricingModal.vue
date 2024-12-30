<template>
    <!-- Modal -->
    <div class="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-50 backdrop-blur-md z-10" @click.self="closeModal">
      <!--  Modal container -->
      <div class="container relative">
        <!--  Modal close button -->
        <div class="flex absolute top-4 right-4">
          <button @click="closeModal" class="flex text-white hover:text-accent2 sm:mr-10 sm:mt-5 text-4xl">
            <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="my-8 mx-4 sm:mt-16 sm:mb-8 sm:mx-28 flex flex-col flex-grow opacity-100 text-secondary overflow-hidden h-full">
          <h1 v-if="currentSection !== 3" class="font-monograss text-4xl sm:mb-10">{{$tm(`${translationPrefix}.title`) }}</h1>
          <h1 v-else class="font-monograss text-4xl sm:mb-10">{{ $tm(`${translationPrefix}.title`) }} </h1>
          <!-- Section 1 -->
          <div v-if="currentSection == 1" class="flex flex-col flex-grow">
            <PricingInfo @continue="currentSection++" :package="props.package"/>
          </div>

          <!-- Section 2 -->
          <div v-if="currentSection == 2" class="flex flex-col flex-grow">
            <PricingBookNow class="flex flex-col flex-grow" @continue="currentSection++" @update="updatePriceData($event)"
                            :package="props.package"/>
          </div>

          <!-- Section 3 -->
          <div v-if="currentSection == 3" class="flex flex-col flex-grow">
            <PricingContact @emailSent="closeModal" :price-data="priceData" :package="props.package"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, watch} from "vue";
import {PACK} from "~/config/packs";


const props = defineProps({
  section: {
    type: Number,
    required: false,
    default: 1,
  },
  package: {
    type: Number as PropType<PACK>,
    required: true,
    default: PACK.PARTYANIMAL
  },
});

let currentSection = ref(props.section)
const selectedPackage = computed(() => PACK[props.package]);
const translationPrefix = computed(() => `pricing_modal.${selectedPackage.value}`);

// Emits
const emit = defineEmits(["update:show", "select"]);

// Methods
const closeModal = () => {
  currentSection.value = 1;
  emit("update:show", false); // Notify parent to close modal
};

const submitAction = () => {
  emit("select", props.package); // Notify parent about selected package
  closeModal();
};

let priceData = ref()
const updatePriceData = (event:Event) => {
  priceData.value = event
}
</script>

<style scoped lang="scss">
.container {
  @apply
  flex
  flex-col
  items-stretch
  bg-primary
  opacity-80
  max-w-[1344px]
  min-h-max
  w-full
  h-auto
  rounded-xl
  sm:rounded-[5rem]
  ;
}

.button {
  @apply
  font-monograss
  bg-secondary
  text-primary
  pt-2
  pb-1
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
