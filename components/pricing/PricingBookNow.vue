<template>
  <!--  Section book now -->
  <div class="text-lg flex flex-col flex-grow">
    <!-- grow container-->
    <div class="flex-grow">
      <!--      <p class="font-poppins font-light">{{ $tm(`${translationPrefix}.sub_title[0]`) }}</p>-->
      <!--      <p class="font-poppins font-light">{{ $tm(`${translationPrefix}.sub_title[1]`) }}</p>-->
      <ul class="ml-5 list-disc list-inside">
        <li v-for="(item, index) in $tm(`${translationPrefix}.list1`)" :key="index" class="font-poppins font-light">{{
            item
          }}
        </li>
      </ul>

      <h1 class="mt-10 text-3xl font-monograss">Extra's</h1>
      <!-- Extras buttons -->
      <div class="flex flex-grow h-full w-full ">
        <div class="flex flex-col w-1/2">
          <!-- Uur buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="button-text w-44">Uur</span>
            <PaginatedButtons :min="1" :max="5" v-model="selectedUur"/>
          </div>

          <!-- Kids buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="button-text w-44">Kids</span>
            <PaginatedButtons :min="1" :max="25" paginated v-model="selectedKids"/>
          </div>

          <!-- Pinjata buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="button-text w-44">Pinjata in thema</span>
            <PaginatedButtons :min="0" :max="1" v-model="selectedPinjata"/>
          </div>
        </div>

        <div class="flex flex-col w-auto items-end">
          <!-- Workshop buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <span class="button-text">Workshop</span>
            <PaginatedButtons :min="0" :max="2" v-model="selectedWorkshop"/>
          </div>

          <!-- Party comfort buttons -->
          <div class="flex my-2 space-x-2 items-center w-fit">
            <div>
              <span class="button-text">Party comfort pakket</span>
              <span class="flex font-poppins font-light text-xs justify-end ">(Picknick tafels & kussentjes)</span>
            </div>
            <PaginatedButtons :min="0" :max="1" v-model="selectedPartyComfort"/>
          </div>
        </div>
      </div>

      <!-- Price Calculation -->
      <div class="pricing-container">
        <div class="pricing">
          <div>
            <span class="">{{ $tm(`${translationPrefix}.title`) }} pakket</span>
            <span>€ {{ basePrice[props.package] }}</span>
          </div>
          <div>
            <span>{{ selectedUur }} extra uren ({{ selectedUur }} x {{ prijsPerUur }} euro)</span>
            <span>€ {{ priceUur }}</span>
          </div>
          <div>
            <span>{{ selectedKids }} extra kids ({{ selectedKids }} x {{ prijsPerExtraKind }} euro)</span>
            <span>€ {{ priceKids }}</span>
          </div>
          <div v-show="selectedPinjata">
            <span>{{ selectedPinjata }} extra pinjata ({{ selectedPinjata }} x {{ prijsPerPinjata }} euro)</span>
            <span>€ {{ pricePinjata }}</span>
          </div>
          <div v-show="selectedWorkshop">
            <span>{{ selectedWorkshop }} extra workshop ({{ selectedWorkshop }} x {{ prijsPerWorkshop }} euro)</span>
            <span>€ {{ priceWorkshop }}</span>
          </div>
          <div v-show="selectedPartyComfort">
            <span>{{ selectedPartyComfort }} extra party comfort pakket ({{
                selectedPartyComfort
              }} x {{ prijsPerPartyComfort }} euro)</span>
            <span>€ {{ pricePartyComfort }}</span>
          </div>

          <!-- subtotaal-->
          <div class="pricing flex-col border-t border-b border-secondary my-3 py-1 text-sm">
            <div>
              <span class="align-text-bottom">subtotaal </span><span>€ {{ totalExclBtw.toFixed(2) }}</span>
            </div>
            <div>
              <span class="align-text-bottom">incl. 21% BTW </span><span>€ {{ btw.toFixed(2) }}</span>
            </div>
          </div>

          <!-- totaal -->
          <p class="font-poppins text-xl font-normal">€ {{ totalInclBtw.toFixed(2) }}</p>
          <p class="font-poppins text-xs text-secondary">excl. verplaatsingskosten (€0.95/km)</p>
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
import PaginatedButtons from "~/components/pricing/PaginatedButtons.vue";
import type {BookingData, EmailBody} from "~/server/api/EmailBody";
import {b} from "unplugin-vue-router/types-DBiN4-4c";

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

const prijsPerUur = 60
const prijsPerExtraKind = 14.95
const prijsPerPinjata = 39.95
const prijsPerWorkshop = 100
const prijsPerPartyComfort = 120

const basePrice: Record<PACK, number> = {
  [PACK.PARTYANIMAL]: 250,
  [PACK.ZEN]: 745,
  [PACK.B2B]: 360
}
const priceUur = computed(() => selectedUur.value * prijsPerUur)
const priceKids = computed(() => selectedKids.value * prijsPerExtraKind)
const pricePinjata = computed(() => selectedPinjata.value * prijsPerPinjata)
const priceWorkshop = computed(() => selectedWorkshop.value * prijsPerWorkshop)
const pricePartyComfort = computed(() => selectedPartyComfort.value * prijsPerPartyComfort)

const totalExclBtw = computed(() => basePrice[props.package] + priceUur.value + priceKids.value + pricePinjata.value + priceWorkshop.value + pricePartyComfort.value)
const btw = computed(() => Math.round((totalExclBtw.value * 0.21) * 100) / 100)
const totalInclBtw = computed(() => totalExclBtw.value + Number(btw.value))

const emit = defineEmits(["continue", "update"]);

watch(totalExclBtw, () => {
  const priceObject: BookingData = {
    pack: props.package,
    hours: {
      amount: selectedUur.value,
      pricePer: prijsPerUur,
      priceTotal: priceUur.value
    },
    kids: {
      amount: selectedKids.value,
      pricePer: prijsPerExtraKind,
      priceTotal: priceKids.value
    },
    pinjata: {
      amount: selectedPinjata.value,
      pricePer: prijsPerPinjata,
      priceTotal: pricePinjata.value
    },
    workshop: {
      amount: selectedWorkshop.value,
      pricePer: prijsPerWorkshop,
      priceTotal: priceWorkshop.value
    },
    comfort: {
      amount: selectedPartyComfort.value,
      pricePer: prijsPerPartyComfort,
      priceTotal: pricePartyComfort.value
    },

    totalExclBtw: totalExclBtw.value,
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
.pricing-container {
  @apply
  mt-1
  w-full
  flex
  flex-col
  justify-end
  items-end
  self-end
  text-right
  font-poppins
  font-light
  text-base;
}

.pricing {
  @apply
  w-[30rem]
  [&>div]:flex
  [&>div]:w-full
  [&>div>span:first-child]:w-10/12
  [&>div>span:last-child]:w-2/12
  ;
}

.button-number {
  @apply flex text-xl font-thin items-center justify-center pt-1 w-9 h-9 bg-secondary text-primary font-monograss rounded-full cursor-pointer transition-all;
}

.button-text {
  @apply flex font-poppins font-light text-xl justify-end;
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