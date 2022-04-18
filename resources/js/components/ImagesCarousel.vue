<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner duration-500">
      <div
        class="carousel-item"
        v-for="(slide, i) in slides"
        :key="i"
        :class="i == active_slide ? 'active' : ''"
      >
        <img
          :src="'/images/products/' + slide.image"
          alt="test"
          class="image-slides w-full"
        />
      </div>
    </div>
    <span
      class="carousel-control-prev"
      role="button"
      data-slide="prev"
      @click="
        active_slide == 0 ? (active_slide = slides.length - 1) : active_slide--
      "
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </span>
    <span
      class="carousel-control-next"
      role="button"
      data-slide="next"
      @click="
        active_slide == slides.length - 1 ? (active_slide = 0) : active_slide++
      "
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </span>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
const props = defineProps({
  slides: Array,
});
let active_slide = ref(0);
</script>
<style>
.image-slides {
  height: 50vh;
}
@media only screen and (min-width: 900px) {
  .image-slides {
    height: 50vh !important;
  }
}
@media only screen and (min-width: 1300px) {
  .image-slides {
    height: 75vh !important;
  }
}
</style>