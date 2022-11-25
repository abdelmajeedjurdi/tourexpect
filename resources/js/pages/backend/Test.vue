<template>
  <div
    class="
      w-1/3
      mx-auto
      flex
      max-h-10
      flex-col
      border-none
      bg-blue-900
      text-blue-500
      transition-all
      duration-700
      dark:bg-gray-900
      itinerary
    "
  >
    <div
      id="content"
      style="line-height: 20px"
      class="flex flex-grow flex-col justify-between overflow-y-hidden"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo
      perferendis corporis error, est, amet, illum accusantium optio delectus
      consequatur maxime mollitia unde ducimus. Amet laboriosam sunt voluptate!
      Repellat, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus illo perferendis corporis error, est, amet, illum
      accusantium optio delectus consequatur maxime mollitia unde ducimus. Amet
      laboriosam sunt voluptate! Repellat, dolorem!
    </div>
  </div>
  <button class="p-3 bg-gray-300" @click="countLines">Count</button>
</template>

<script setup>
import { ref } from "vue";

let temp = ref(-1);
function countLines() {
  var el = document.getElementById("content");
  var divHeight = el.offsetHeight;
  var lineHeight = parseInt(el.style.lineHeight);
  var lines = divHeight / lineHeight;
  alert("Lines: " + lines);
}
</script>
<style scoped>
.itinerary:hover {
  /* height: 20em; */
  /* height: fit-content; */
  max-height: 90em;
}
</style>
