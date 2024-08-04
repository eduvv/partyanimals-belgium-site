<script setup lang="ts">
// https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_Particles_IParticlesOptions.IParticlesOptions.html
import {tsParticles} from '@tsparticles/engine'
import {loadConfettiPreset} from '@tsparticles/preset-confetti';
import {onMounted} from "vue";

onMounted(async () => {
  await loadConfettiPreset(tsParticles)
  await tsParticles.load({
    id: "tsparticles",
    options: {
      emitters: {
        particles: {
          color: {
            value: "FF0000"
          },
          move: {
            speed: 300, // Adjust speed as necessary = height of spread
            angle: {
              value: 100,
            },
          },
          opacity: {
            value: {
              min: 0,
              max: 1
            },
            animation: {
              enable: true,
              speed: 0.2,
              destroy: "min",
              mode: "decrease",
              startValue: "max",
              sync: true
            }
          },
          life: {
            duration: {
              sync: true,
              value: 10 // lifespan of particles in seconds
            },
            count: 1
          }
        },
        startCount: 300,
        position: {
          x: 50,
          y: 100,
        },
        life: {
          duration: 0.1,
          count: 1,
        },
      },
      preset: "confetti",
    },
  });
})
</script>

<template>
  <div id="tsparticles"></div>
</template>

<style scoped>

</style>