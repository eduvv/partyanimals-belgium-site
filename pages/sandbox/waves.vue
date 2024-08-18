<template>
  <div class="h-100 min-h-screen snap-mandatory snap-y overflow-y-scroll">
    <section class="bg-blue-500 h-screen flex justify-center items-center snap-start">
       Content for Section 1
    </section>

    <WavyDivider id="wave1" :color-bottom="'fill-green-500'" :color-top="'bg-blue-500'"/>
    <section class="bg-green-500 h-screen flex justify-center items-center snap-start">
       Content for Section 2
    </section>

    <WavyDivider id="wave2"/>
    <section class="bg-red-500 h-screen flex justify-center items-center snap-start">
      Content for Section 3
    </section>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
</style>
