<template>
  <section id="contact" class="flex flex-col items-center justify-center bg-secondary px-2 sm:px-12">
    <h2 class="font-monograss text-4xl text-primary">Contact formulier</h2>
    <div class="contact-container">
      <!-- inner container -->
      <div class="flex flex-col w-full h-auto mt-20 mb-8 mx-8 sm:mx-24">
        <!-- input fields -->
        <div class="flex-grow">
          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">Naam en voornaam</label>
            <input id="input-name" class="block" v-model="cName"/>
          </div>

          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">e-mail adres</label>
            <input id="input-name" class="block" v-model="cEmail"/>
          </div>

          <div class="flex flex-col mb-8">
            <label for="dropdown-package" class="block">Pakket</label>
            <select
                id="dropdown-package"
                class="block rounded-full resize-none placeholder-primary font-monograss text-center"
                v-model="cPackage"
            >
              <option value="" disabled selected>Kies een pakket</option>
              <option value="zen">Zen</option>
              <option value="partyanimals">Partyanimals</option>
              <option value="b2b">B2B</option>
            </select>
          </div>
        </div>

        <!-- submit button -->
        <div class="flex flex-col mt-auto">
          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">Bericht</label>
            <textarea id="input-name"
                      class="block rounded-4xl resize-none h-44 bg-secondary p-4 font-poppins text-primary focus:outline-none"
                      v-model="cText"/>
          </div>
          <div class="flex items-center justify-center">
            <button class="w-56 p-4 text-xl button" @click="sendMail">aanvraag versturen</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {EmailBody} from "~/server/api/EmailBody";
import {useToast} from "vue-toast-notification";

const $toast = useToast();

const cName = ref("")
const cEmail = ref("")
const cPackage = ref("")
const cText = ref("")

function sendMail() {
  const body: EmailBody = {
    contactData: {
      name: cName.value,
      email: cEmail.value,
      extraInfo: cText.value,
      _pakket: cPackage.value
    }
  }

  if (!cName.value || !cEmail.value || !cPackage.value || !cText.value) {
    const missingFields = [];

    if (!cName.value) missingFields.push('naam');
    if (!cEmail.value) missingFields.push('e-mail');
    if (!cPackage.value) missingFields.push('pakket');
    if (!cText.value) missingFields.push('bericht');
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
      cName.value = "";
      cEmail.value = "";
      cPackage.value = "";
      cText.value = "";
    }).catch((error) => {
      console.error(error);
      $toast.error('Er ging iets mis tijdens het versturen!', {position: 'top'});
    });
  }
}
</script>

<style scoped lang="scss">
.contact-container {
  @apply
  flex
  items-stretch
  bg-primary
  max-w-[1393px]
  max-h-[742px]
  w-full
  my-0 sm:my-20
  mx-20
  rounded-6xl
  sm:rounded-[70px]
  drop-shadow-xl;
}

div input, select {
  @apply
  text-primary
  font-poppins
  content-center
  rounded-full
  bg-secondary
  focus:outline-none
  max-w-[350px]
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