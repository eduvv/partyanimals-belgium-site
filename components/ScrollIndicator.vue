<template>
  <div class="fixed top-1/2 transform -translate-y-1/2 left-4">
    <div v-for="(section, index) in props.sections" :key="index" class="mb-4 relative">
      <div
          @click="scrollToSection(index)"
          @mouseenter="hoverIndex = index"
          @mouseleave="hoverIndex = -1"
          :class="[
          'w-4 h-4 rounded-full border-2 cursor-pointer relative border-text',
          currentSection === index ? 'bg-accent2 border-text' : 'bg-transparent border-text',
        ]"
      >
        <Tooltip :text="section.name" :visible="hoverIndex === index"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue';
import Tooltip from '~/components/Tooltip.vue';

const currentSection = ref(0);
const hoverIndex = ref(-1);

export type Section = {
  id: string,
  name: string
}

const props = defineProps({
  sections: {
    type: Array<Section>,
    required: true,
    default() {
      return []
    }
  }
})

let observer:IntersectionObserver

const scrollToSection = (index) => {
  const section = document.querySelectorAll('section')[index]
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  const sectionElements = document.querySelectorAll('section')

  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection.value = Array.from(sectionElements).indexOf(<HTMLElement>entry.target)
          }
        })
      },
      {
        threshold: 0.5 // Adjust this threshold as needed
      }
  )

  sectionElements.forEach((section) => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

</script>

<style scoped lang="scss">
div {
  z-index: 1000; // todo ugly, fix
}
</style>
