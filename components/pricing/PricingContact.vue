<template>
  <div class="flex flex-col flex-grow h-full w-full">
    <!-- Content -->
    <div class="flex flex-row flex-grow space-x-4">
      <!-- Left Half -->
      <div class="flex flex-col w-1/2 border-red-500">
        <div class="flex-grow">
          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">Naam en voornaam</label>
            <input id="input-name" class="block"/>
          </div>

          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">e-mail adres</label>
            <input id="input-name" class="block"/>
          </div>

          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">Telefoon</label>
            <div class="flex flex-row space-x-2">
              <input id="input-name"
                     class="rounded-full resize-none w-14"
                     value="+32"
                     disabled/>
              <input id="input-name" class="flex-grow rounded-full w-f"/>
            </div>
          </div>

          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">Hoe heb je me gevonden?</label>
            <textarea id="input-name"
                      class="block rounded-4xl resize-none h-44 bg-secondary p-4 font-poppins text-primary focus:outline-none"/>
          </div>
        </div>
      </div>

      <!-- Right Half -->
      <!-- Right Half -->
      <div class="flex flex-col w-1/2 border-red-500">
        <div class="flex flex-row space-x-2 mb-8">
          <div class="flex flex-col w-4/6 max-w-[350px]">
            <label for="street-name">Straatnaam</label>
            <input id="street-name" class="rounded-full"/>
          </div>
          <div class="flex flex-col w-16">
            <label for="house-number">Nr.</label>
            <input id="house-number" class="rounded-full"/>
          </div>
          <div class="flex flex-col flex-grow w-1/6">
            <label for="bus">Bus</label>
            <input id="bus" class="rounded-full"/>
          </div>
        </div>

        <div class="flex flex-row space-x-2 mb-8">
          <div class="flex flex-col w-2/3">
            <label for="city" class="block">Gemeente</label>
            <input id="city" class="block rounded-full"/>
          </div>
          <div class="flex flex-col w-1/3">
            <label for="postal-code" class="block">Postcode</label>
            <input id="postal-code" class="block rounded-full"/>
          </div>
        </div>

        <div class="flex flex-row space-x-2 mb-8 ">
          <div class="flex flex-col w-1/3">
            <label for="country" class="block">Land</label>
            <input id="country" class="block rounded-full"/>
          </div>
          <div class="flex flex-col flex-grow">
            <label for="event-date" class="block">Datum feest</label>
            <input id="event-date" type="date" class="block rounded-full text-center"/>
          </div>
        </div>

        <div class="flex flex-col mb-8">
          <label for="extra-info">Extra info / vermelding thema feest voor kleurenpallet</label>
          <textarea
              id="extra-info"
              class="block rounded-4xl resize-none h-44 bg-secondary p-4 font-poppins text-primary focus:outline-none"
          ></textarea>
        </div>
      </div>

    </div>
    <!-- Button -->
    <button @click="sendMail" class="button flex justify-center self-center mt-auto">aanvraag versturen</button>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {PACK} from "~/config/packs";

const props = defineProps({
  package: {
    type: Number as PropType<PACK>,
    required: true,
    default: PACK.PARTYANIMAL
  },
  priceData: {
    type: Object,
    required: true,
    default: () => ({})
  }
});

const selectedPackage = computed(() => PACK[props.package]);
const translationPrefix = computed(() => `pricing_modal.${selectedPackage.value}.contact_form`);

function sendMail() {
  console.log("Send mail clicked!");
  $fetch("/api/email", {
    method: "POST",
    body: props.priceData
  })
}
</script>

<style scoped lang="scss">
.button {
  @apply
  font-monograss
  bg-secondary
  text-primary
  text-xl
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

div input {
  @apply
  text-primary
  font-poppins
  content-center
  rounded-full
  bg-secondary
  focus:outline-none
  h-9
  px-3
  ;
}


div label {
  @apply
  font-monograss
  text-secondary
  text-xl
  ;
}
</style>
