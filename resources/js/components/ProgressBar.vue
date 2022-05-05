<template>
  <!-- Define the width model within parent div -->
  <div class="">
    <!-- Light mode -->
    <div class="p-10 w-1/2 mx-auto max-w-full bg-white shadow rounded">
      <div class="w-full">
        <h2 class="text-gray-700 text-center">
          Please Wait, it might take some time
        </h2>
      </div>
      <!-- Start Regular with text version -->
      <div
        class="bg-gray-200 rounded h-6 mt-5"
        role="progressbar"
        :aria-valuenow="percentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="
            bg-green-400
            rounded
            h-6
            text-center text-white text-sm
            transition
          "
          :style="`width: ${percentage}%; transition: width 2s;`"
        >
          {{ percentage + "%" }}
        </div>
      </div>
      <!-- End Regular with text version -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let props = defineProps({ percentage: Number });
</script>

 