<script setup lang="ts">

</script>

<template>
  <section id="contact" class="flex flex-col items-center justify-center bg-secondary px-12">
    <h2 class="font-monograss text-4xl text-primary">Contact formulier</h2>
    <div class="contact-container">
      <!-- inner container -->
      <div class="flex flex-col w-full h-auto mt-20 mb-8 mx-24">
        <!-- input fields -->
        <div class="flex-grow">
          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">Naam en voornaam</label>
            <input id="input-name" class="block"/>
          </div>

          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">e-mail adres</label>
            <input id="input-name" class="block"/>
          </div>

          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">Pakket</label>
            <input id="input-name"
                   class="block rounded-full resize-none placeholder-primary font-monograss placeholder:font-monograss placeholder:text-center"
                   placeholder="Partyanimal pakket [TODO]"/>
          </div>

        </div>

        <!-- submit button -->
        <div class="flex flex-col mt-auto">
          <div class="flex flex-col mb-8">
            <label for="input-name" class="block">Bericht</label>
            <textarea id="input-name"
                      class="block rounded-4xl resize-none h-44 bg-secondary p-4 font-poppins text-primary focus:outline-none"/>
          </div>
          <div class="flex items-center justify-center">
            <button class="w-56 p-4 text-xl button">aanvraag versturen</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-container {
  @apply
  flex
  items-stretch
  bg-primary
  max-w-[1393px]
  max-h-[742px]
  w-full
  my-20
  mx-20
  ;
  border-radius: 70px;
}

div input {
  @apply
  text-primary
  font-poppins
  content-center
  rounded-full
  bg-secondary
  focus:outline-none
  w-[350px]
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