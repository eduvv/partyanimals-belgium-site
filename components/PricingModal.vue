<template>
  <div class="inline-block">
    <!-- Modal -->
    <div
        v-if="show"
        class="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-30 backdrop-blur-md z-10"
        @click.self="closeModal">
      <!--  Modal container-->
      <div class="container relative flex-col">
        <div class="flex absolute top-4 right-4">
          <button @click="closeModal" class="flex text-white hover:text-accent2 mr-10 mt-5 text-4xl">
            <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="my-16 mx-28 opacity-100 text-secondary overflow-hidden">
          <h1 class="font-monograss text-4xl">{{ PACK[package][0].toUpperCase() + PACK[package].substring(1).toLowerCase() }} pakket</h1>
          <div class="font-poppins text-lg">

            <p><strong>{{section == 1 ? "meer info.." : "boek nu.."}}</strong></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, watch} from "vue";
import {PACK} from "~/config/packs";

// Props
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
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

// Emits
const emit = defineEmits(["update:show", "select"]);

// Methods
const closeModal = () => {
  emit("update:show", false); // Notify parent to close modal
};

const submitAction = () => {
  emit("select", props.package); // Notify parent about selected package
  closeModal();
};
</script>

<style scoped lang="scss">
.container {
  @apply
  flex
  items-stretch
  bg-primary
  opacity-80
  max-w-[1344px]
  max-h-[802px]
  w-full
  h-full
  rounded-[5rem]
  ;
}
</style>
