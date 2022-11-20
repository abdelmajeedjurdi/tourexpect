<template>
    <div
        class="flex h-10 flex-col border-none bg-blue-900 text-blue-500 transition-all duration-300 hover:h-52 dark:bg-gray-900 itinerary">
        <div class="flex flex-grow flex-col justify-between overflow-y-hidden">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus illo perferendis corporis error, est, amet, illum accusantium optio delectus
            consequatur maxime mollitia unde ducimus. Amet laboriosam sunt voluptate! Repellat, dolorem!</div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

let temp = ref(-1)
</script>
<style scoped>
.itinerary:hover {
    height: 20rem;
}
</style>
