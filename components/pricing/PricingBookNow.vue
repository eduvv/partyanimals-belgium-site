<template>
  <!--  Section book now -->
  <div class="text-lg flex flex-col flex-grow">
    <!-- grow container-->
    <div class="flex-grow">
      <p class="font-monograss">{{ $tm(`${translationPrefix}.sub_title[0]`) }}</p>
      <p class="font-monograss">{{ $tm(`${translationPrefix}.sub_title[1]`) }}</p>
      <ul class="ml-5 list-disc list-inside">
        <li v-for="(item, index) in $tm(`${translationPrefix}.list1`)" :key="index" class="font-monograss">{{
            item
          }}
        </li>
      </ul>

      <h1 class="mt-10 text-3xl font-monograss">Extra's</h1>
      <!-- Extras buttons   -->
      <div class="flex flex-grow h-full w-full ">
        <div class="flex flex-col w-1/2">
          <!-- Uur buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="flex w-40 font-poppins justify-end">Uur</span>
            <label
                v-for="value in 5"
                :key="value"
                :class=" [
              selectedUur === value ? 'shadow-button-select': '',
              value === 6 ? 'button-arrow' : 'button-number'
          ] "
            >
              <input
                  type="radio"
                  name="options"
                  :value="value"
                  class="hidden"
                  v-model="selectedUur"
              />
              {{ value }}
            </label>
          </div>

          <!-- Kids buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="flex w-40 font-poppins justify-end">Kids</span>
            <label
                v-for="(value, index) in 7"
                :key="value"
                :class="[selectedKids === value ? 'shadow-button-select': '',value === 6 ? 'button-arrow' : 'button-number']">
              <input
                  type="radio"
                  name="options"
                  :value="value !== 7 ? value : 25"
                  class="hidden"
                  v-model="selectedKids"
                  :disabled="value === 6"
              />
              <span v-if="value === 6">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14m-7-7l7 7-7 7"
          />
        </svg>
      </span>
              <span v-else-if="value === 7">25</span>
              <span v-else>{{ value }}</span>
            </label>
          </div>

          <!-- Pinjata buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="flex w-40 font-poppins justify-end">Pinjata in thema</span>
            <label
                v-for="(number, index) in 2"
                :key="number"
                :class=" [
              selectedPinjata === index ? 'shadow-button-select': '',
              number === 6 ? 'button-arrow' : 'button-number'
          ] "
            >
              <input
                  type="radio"
                  name="options"
                  :value="index"
                  class="hidden"
                  v-model="selectedPinjata"
              />
              {{ index }}
            </label>
          </div>
        </div>

        <div class="flex flex-col w-auto items-end">
          <!-- Workshop buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="flex w-48 font-poppins justify-end">Workshop</span>
            <label
                v-for="(number,index) in 3"
                :key="number"
                :class=" [
              selectedWorkshop === index ? 'shadow-button-select': '',
              number === 6 ? 'button-arrow' : 'button-number'
          ] "
            >
              <input
                  type="radio"
                  name="options"
                  :value="index"
                  class="hidden"
                  v-model="selectedWorkshop"
              />
              {{ index }}
            </label>
          </div>

          <!-- Party comfort buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <div>
              <span class="flex font-poppins justify-end">Party comfort pakket</span>
              <span class="flex font-poppins justify-end text-sm">(picknicktafeltjes en kussentjes voor de kids)</span>
            </div>
            <label
                v-for="(number,index) in 3"
                :key="number"
                :class=" [
              selectedPartyComfort === index ? 'shadow-button-select': '',
              number === 6 ? 'button-arrow' : 'button-number'
          ] "
            >
              <input
                  type="radio"
                  name="options"
                  :value="index"
                  class="hidden"
                  v-model="selectedPartyComfort"
              />
              {{ index }}
            </label>
          </div>
        </div>
      </div>

      <!-- Price Calculation -->
      <div class="mt-1 w-full flex flex-col justify-end items-end self-end text-right font-monograss text-md">
        <!-- pricing box -->
        <div class="w-[30rem]">
          <p>{{ $tm(`${translationPrefix}.title`) }} pakket € {{ basePrice[props.package] }}</p>
          <p>{{ selectedUur }} extra uren ({{ selectedUur }} x 30 euro) € {{ priceUur }}</p>
          <p>{{ selectedKids }} extra kids ({{ selectedKids }} x 30 euro) € {{ priceKids }}</p>
          <p>{{ selectedPinjata }} extra pinjata ({{ selectedPinjata }} x 40 euro) € {{ pricePinjata }}</p>
          <p>{{ selectedWorkshop }} extra workshop ({{ selectedWorkshop }} x 40 euro) € {{ priceWorkshop }}</p>
          <p>{{ selectedPartyComfort }} extra party comfort pakket ({{ selectedPartyComfort }} x 40 euro) €
            {{ pricePartyComfort }}</p>
          <hr class="w-full border-t border-secondary my-2">
          <p class="font-monograss text-lg">incl. 21% BTW € {{ btw }}</p>
          <hr class="w-full border-t border-secondary my-2">
          <p class="font-monograss text-xl font-bold">€ {{ totalInclBtw }}</p>
          <p class="font-monograss text-xs text-secondary">excl. verplaatsingskosten</p>
        </div>
      </div>
    </div>
    <!-- Volgende button -->
    <div class="flex justify-center mt-auto">
      <button @click="nextSection()" class="button">Volgende</button>
    </div>
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

const selectedPackage: ComputedRef<String> = computed(() => PACK[props.package]);
const translationPrefix: ComputedRef<String> = computed(() => `pricing_modal.${selectedPackage.value}`);

const selectedUur = ref(1);
const selectedKids = ref(1);
const selectedPinjata = ref(0);
const selectedWorkshop = ref(0);
const selectedPartyComfort = ref(0);

const basePrice: Record<PACK, number> = {
  [PACK.PARTYANIMAL]: 250,
  [PACK.ZEN]: 745,
  [PACK.B2B]: 360
}
const priceUur = computed(() => selectedUur.value * 30)
const priceKids = computed(() => selectedKids.value * 30)
const pricePinjata = computed(() => selectedPinjata.value * 40)
const priceWorkshop = computed(() => selectedWorkshop.value * 40)
const pricePartyComfort = computed(() => selectedPartyComfort.value * 40)

const totalExclBtw = computed(() => basePrice[props.package] + priceUur.value + priceKids.value + pricePinjata.value + priceWorkshop.value + pricePartyComfort.value)
const btw = computed(() => Math.round((totalExclBtw.value * 0.21) * 100) / 100)
const totalInclBtw = computed(() => totalExclBtw.value + btw.value)

const emit = defineEmits(["continue", "update"]);

watch(totalExclBtw, () => {
  const priceObject = {
    basePrice: basePrice[props.package],
    selectedPackage: selectedPackage.value,
    selectedUur: selectedUur.value,
    selectedKids: selectedKids.value,
    selectedPinjata: selectedPinjata.value,
    selectedWorkshop: selectedWorkshop.value,
    selectedPartyComfort: selectedPartyComfort.value,
    priceUur: priceUur.value,
    priceKids: priceKids.value,
    pricePinjata: pricePinjata.value,
    priceWorkshop: priceWorkshop.value,
    pricePartyComfort: pricePartyComfort.value,
    totalPrice: totalExclBtw.value,
    btw: btw.value,
    totalInclBtw: totalInclBtw.value
  }
  emit("update", priceObject)
})

function nextSection() {
  const priceObject = {
    basePrice: basePrice[props.package],
    selectedPackage: selectedPackage.value,
    selectedUur: selectedUur.value,
    selectedKids: selectedKids.value,
    selectedPinjata: selectedPinjata.value,
    selectedWorkshop: selectedWorkshop.value,
    selectedPartyComfort: selectedPartyComfort.value,
    priceUur: priceUur.value,
    priceKids: priceKids.value,
    pricePinjata: pricePinjata.value,
    priceWorkshop: priceWorkshop.value,
    pricePartyComfort: pricePartyComfort.value,
    totalPrice: totalExclBtw.value,
    btw: btw.value,
    totalInclBtw: totalInclBtw.value
  }
  emit("update", priceObject)
  emit("continue")
}
</script>
<style scoped lang="scss">

.button-number {
  @apply flex text-xl font-thin items-center justify-center pt-1 w-9 h-9 bg-secondary text-primary font-monograss rounded-full cursor-pointer transition-all;
}

.button-arrow {
  @apply flex items-center justify-center pt-0 w-9 h-9 bg-secondary text-primary font-monograss rounded-full cursor-default transition-all;
}

.button {
  @apply
  font-monograss
  text-xl
  bg-secondary
  text-primary
  pt-3
  pb-2
  mt-2
  w-56
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