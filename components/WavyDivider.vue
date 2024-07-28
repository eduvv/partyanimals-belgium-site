<template>
    <div class="custom-shape-divider-bottom-1722183052">
        <svg :class="props.colorTop" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                :class="props.colorBottom"></path>
        </svg>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    colorBottom: String | 'fill-red-500',
    colorTop: String | 'bg-red-500'
})


</script>
<style scoped>
.custom-shape-divider-bottom-1722183052 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1722183052 svg {
    position: relative;
    display: block;
    width: calc(125% + 300px);
    height: 55px;
}
</style>