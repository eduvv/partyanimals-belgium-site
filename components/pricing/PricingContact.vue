<template>
  <div class="flex flex-col flex-grow h-full w-full">
    <!-- Content -->
    <div class="flex flex-col sm:flex-row flex-grow space-y-3 sm:space-y-0 sm:space-x-4">
      <!-- Left Half -->
      <div class="flex flex-col w-full sm:w-1/2 border-red-500">
        <div class="flex-grow">
          <div class="flex flex-col mb-3 sm:mb-8 max-w-full sm:max-w-[350px]">
            <label for="input-name" class="block">Naam en voornaam</label>
            <input id="input-name" type="text" class="block h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cName" />
          </div>

          <div class="flex flex-col mb-3 sm:mb-8 max-w-full sm:max-w-[350px]">
            <label for="input-email" class="block">e-mail adres</label>
            <input id="input-email" type="email" class="block h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cEmail" />
          </div>

          <div class="flex flex-col mb-3 sm:mb-8 max-w-full sm:max-w-[350px]">
            <label for="input-phone" class="block">Telefoon</label>
            <div class="flex flex-row space-x-2">
              <input id="input-country-code"
                     type="text"
                     class="rounded-full resize-none w-10 h-8 px-2 text-sm sm:w-14 sm:h-10 sm:px-3 sm:text-base"
                     v-model="countryCode"
                     @blur="validateInput" />
              <input id="input-phone" type="tel" class="flex-grow rounded-full w-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cPhone" />
            </div>
          </div>

          <div class="flex flex-col mb-3 sm:mb-8 max-w-full sm:max-w-[350px]">
            <label for="input-how-found" class="block">Hoe heb je me gevonden?</label>
            <textarea id="input-how-found"
                      class="block rounded-4xl resize-none h-28 p-2 text-sm sm:h-44 sm:p-4 sm:text-base bg-secondary"
                      v-model="cHowFound"></textarea>
          </div>
        </div>
      </div>

      <!-- Right Half -->
      <div class="flex flex-col w-full sm:w-1/2 border-red-500">
        <div class="flex flex-row space-x-2 mb-3 sm:mb-8 w-full">
          <div class="flex flex-col w-4/6 max-w-[250px] sm:max-w-[350px]">
            <label for="input-street-name">Straatnaam</label>
            <input id="input-street-name" type="text" class="rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cStreetName" />
          </div>
          <div class="flex flex-col w-16">
            <label for="input-house-number">Nr.</label>
            <input id="input-house-number" type="number" class="rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cStreetNumber" />
          </div>
          <div class="flex flex-col flex-grow w-1/6">
            <label for="input-bus">Bus</label>
            <input id="input-bus" type="text" class="rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cStreetBus" />
          </div>
        </div>

        <div class="flex flex-row space-x-2 mb-3 sm:mb-8">
          <div class="flex flex-col w-2/3">
            <label for="input-city" class="block text-sm sm:text-base">Gemeente</label>
            <input id="input-city" type="text" class="block rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cCity" />
          </div>
          <div class="flex flex-col w-1/3">
            <label for="input-postal-code" class="block text-sm sm:text-base">Postcode</label>
            <input id="input-postal-code" type="number" class="block rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cPostcode" />
          </div>
        </div>

        <div class="flex flex-row space-x-2 mb-3 sm:mb-8">
          <div class="flex flex-col w-1/3">
            <label for="input-country" class="block">Land</label>
            <input id="input-country" type="text" class="block rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base" v-model="cCountry" />
          </div>
          <div class="flex flex-col flex-grow">
            <label for="input-event-date" class="block">Datum feest</label>
            <input id="input-event-date" type="date" class="block rounded-full h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base text-center" v-model="cDate" />
          </div>
        </div>

        <div class="flex flex-col mb-3 sm:mb-8">
          <label for="input-extra-info">Extra info / vermelding thema feest voor kleurenpallet</label>
          <textarea id="input-extra-info"
                    class="block resize-none h-28 p-2 text-sm sm:h-44 sm:p-4 sm:text-base bg-secondary"
                    v-model="cExtraInfo"></textarea>
        </div>
      </div>
    </div>
    <!-- Button -->
    <button @click="sendMail"
            class="button flex justify-center self-center mt-auto text-sm sm:text-xl py-2 px-6 sm:py-3 sm:px-10">
      aanvraag versturen
    </button>
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
  @apply font-monograss bg-secondary text-primary text-sm sm:text-xl py-2 px-6 sm:py-3 sm:px-10 rounded-full transition duration-300;
}

div input {
  @apply text-primary font-poppins rounded-full bg-secondary focus:outline-none h-8 px-2 text-sm sm:h-10 sm:px-3 sm:text-base;
}

div label {
  @apply font-monograss text-secondary text-sm sm:text-xl;
}

textarea {
  @apply rounded-2xl sm:rounded-4xl resize-none p-2 h-20 sm:h-44 sm:p-4 text-sm sm:text-base bg-secondary text-primary;
}
</style>
