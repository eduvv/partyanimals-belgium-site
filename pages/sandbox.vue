<template>
  <div>
    <section class="bg-blue-500 h-screen flex justify-center items-center">
       Content for Section 1
    </section>

    <WavyDivider id="wave1" :color-bottom="'fill-green-500'" :color-top="'bg-blue-500'"/>
    <section class="bg-green-500 h-screen flex justify-center items-center">
       Content for Section 2
    </section>

    <WavyDivider id="wave2"/>
    <section class="bg-red-500 h-screen flex justify-center items-center">
      Content for Section 3
    </section>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
</style>
