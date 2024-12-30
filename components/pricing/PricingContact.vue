<template>
  <div class="flex flex-col flex-grow h-full w-full">
    <!-- Content -->
    <div class="flex flex-row flex-grow space-x-4">
      <!-- Left Half -->
      <div class="flex flex-col w-1/2 border-red-500">
        <div class="flex-grow">
          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">Naam en voornaam</label>
            <input id="input-name" class="block" v-model="cName"/>
          </div>

          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">e-mail adres</label>
            <input id="input-name" class="block" v-model="cEmail"/>
          </div>

          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">Telefoon</label>
            <div class="flex flex-row space-x-2">
              <input id="input-name"
                     class="rounded-full resize-none w-14"
                     v-model="countryCode"
                     @blur="validateInput"/>
              <input id="input-name" class="flex-grow rounded-full w-f" v-model="cPhone"/>
            </div>
          </div>

          <div class="flex flex-col mb-8 max-w-[350px]">
            <label for="input-name" class="block">Hoe heb je me gevonden?</label>
            <textarea id="input-name"
                      class="block rounded-4xl resize-none h-44 bg-secondary p-4 font-poppins text-primary focus:outline-none"
                      v-model="cHowFound"/>
          </div>
        </div>
      </div>

      <!-- Right Half -->
      <div class="flex flex-col w-1/2 border-red-500">
        <div class="flex flex-row space-x-2 mb-8">
          <div class="flex flex-col w-4/6 max-w-[350px]">
            <label for="street-name">Straatnaam</label>
            <input id="street-name" class="rounded-full" v-model="cStreetName"/>
          </div>
          <div class="flex flex-col w-16">
            <label for="house-number">Nr.</label>
            <input id="house-number" class="rounded-full" v-model="cStreetNumber"/>
          </div>
          <div class="flex flex-col flex-grow w-1/6">
            <label for="bus">Bus</label>
            <input id="bus" class="rounded-full" v-model="cStreetBus"/>
          </div>
        </div>

        <div class="flex flex-row space-x-2 mb-8">
          <div class="flex flex-col w-2/3">
            <label for="city" class="block">Gemeente</label>
            <input id="city" class="block rounded-full" v-model="cCity"/>
          </div>
          <div class="flex flex-col w-1/3">
            <label for="postal-code" class="block">Postcode</label>
            <input id="postal-code" class="block rounded-full" v-model="cPostcode"/>
          </div>
        </div>

        <div class="flex flex-row space-x-2 mb-8 ">
          <div class="flex flex-col w-1/3">
            <label for="country" class="block">Land</label>
            <input id="country" class="block rounded-full" v-model="cCountry"/>
          </div>
          <div class="flex flex-col flex-grow">
            <label for="event-date" class="block">Datum feest</label>
            <input id="event-date" type="date" class="block rounded-full text-center" v-model="cDate"/>
          </div>
        </div>

        <div class="flex flex-col mb-8">
          <label for="extra-info">Extra info / vermelding thema feest voor kleurenpallet</label>
          <textarea
              id="extra-info"
              class="block rounded-4xl resize-none h-44 bg-secondary p-4 font-poppins text-primary focus:outline-none"
              v-model="cExtraInfo"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- Button -->
    <button @click="sendMail" class="button flex justify-center self-center mt-auto">aanvraag versturen</button>
  </div>
</template>

<script setup lang="ts">
import {defineProps, type PropType} from "vue";
import {PACK} from "~/config/packs";
import type {EmailBody} from "~/server/api/EmailBody";
import type {BookingData} from "~/server/api/EmailBody";
import {useToast} from "vue-toast-notification";
const emit = defineEmits(['emailSent']);

const $toast = useToast();

const cName = ref("");
const cEmail = ref("");
const cPhone = ref("");
const cStreetName = ref("");
const cStreetNumber = ref("");
const cStreetBus = ref("");
const cCity = ref("");
const cPostcode = ref("");
const cCountry = ref("België");
const cDate = ref("");
const cHowFound = ref("");
const cExtraInfo = ref("");

const props = defineProps({
  package: {
    type: Number as PropType<PACK>,
    required: true,
    default: PACK.PARTYANIMAL
  },
  priceData: {
    type: Object as PropType<BookingData>,
    required: true,
    default: () => ({})
  }
});

const selectedPackage = computed(() => PACK[props.package]);
const translationPrefix = computed(() => `pricing_modal.${selectedPackage.value}.contact_form`);

function sendMail() {
  const body: EmailBody = {
    bookingData: {
      pack: props.priceData.pack,
      hours: {
        amount: props.priceData.hours?.amount,
        pricePer: props.priceData.hours?.pricePer,
        priceTotal: props.priceData.hours?.priceTotal
      },
      kids: {
        amount: props.priceData.kids?.amount,
        pricePer: props.priceData.kids?.pricePer,
        priceTotal: props.priceData.kids?.priceTotal
      },
      pinjata: {
        amount: props.priceData.pinjata?.amount,
        pricePer: props.priceData.pinjata?.pricePer,
        priceTotal: props.priceData.pinjata?.priceTotal
      },
      workshop: {
        amount: props.priceData.workshop?.amount,
        pricePer: props.priceData.workshop?.pricePer,
        priceTotal: props.priceData.workshop?.priceTotal
      },
      comfort: {
        amount: props.priceData.comfort?.amount,
        pricePer: props.priceData.comfort?.pricePer,
        priceTotal: props.priceData.comfort?.priceTotal
      },
      totalExclBtw: props.priceData.totalExclBtw,
      btw: props.priceData.btw,
      totalInclBtw: props.priceData.totalInclBtw
    },
    contactData: {
      name: cName.value,
      email: cEmail.value,
      phone: countryCode.value + " " + cPhone.value,
      streetName: cStreetName.value,
      streetNumber: cStreetNumber.value,
      streetBus: cStreetBus.value,
      city: cCity.value,
      postalCode: cPostcode.value,
      country: cCountry.value,
      partyDate: cDate.value,
      extraInfo: cExtraInfo.value,
      howDidYouFindMe: cHowFound.value,
      _pakket: PACK[Number(selectedPackage)]
    },
  }

  if (!cName.value || !cEmail.value || !cPhone.value || !cStreetName.value || !cStreetNumber.value || !cDate.value || !cPostcode.value) {
    const missingFields = [];

    if (!cName.value) missingFields.push('naam');
    if (!cEmail.value) missingFields.push('e-mail');
    if (!cPhone.value) missingFields.push('telefoonnummer');
    if (!cStreetName.value) missingFields.push('straat');
    if (!cStreetNumber.value) missingFields.push('straatnummer');
    if (!cPostcode.value) missingFields.push('postcode');
    if (!cDate.value) missingFields.push('datum');
    if (!cCity.value) missingFields.push('gemeente');
    const message = `Nog in te vullen: ${missingFields.join(', ')}.`;

    $toast.warning(message, {position: 'top'});
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(cEmail.value)) {
    $toast.warning('ongeldig e-mail adres', {position: 'top'});
  } else {
    $fetch("/api/email", {
      method: "POST",
      body
    }).then(response => {
      $toast.success('Aanvraag succesvol verstuurd!', {position: 'top'});
      emit('emailSent')
    }).catch((error) => {
      console.error(error);
      $toast.error('Er ging iets mis tijdens het versturen!', {position: 'top'});
    });
  }

}


const defaultCountryCode = '+32';
const countryCode = ref(defaultCountryCode);

watch(countryCode, (newVal) => {
  if (!newVal.startsWith('+')) {
    countryCode.value = '+' + newVal.replace(/^\+*/, '');
  }
});

const validateInput = () => {
  const isValid = /^\+\d+$/.test(countryCode.value);
  if (!isValid) {
    countryCode.value = defaultCountryCode;
  }
};
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
