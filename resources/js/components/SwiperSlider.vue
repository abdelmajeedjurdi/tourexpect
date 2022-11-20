<template>
    <div>
        <swiper :navigation="true" :modules="modules" :loop="true" :effect="'fade'" :pagination="{
            clickable: true,
        }" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
}" class="mySwiper">
            <swiper-slide v-for="image in imgs" :key="image.id">
                <img :src="'/images/tours/' + image.image" alt="image" class="w-full object-cover hero_img" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
const modules = [EffectFade, Navigation, Pagination, Autoplay]
const props = defineProps({ imgs: Array })


</script>
<style>
/* .slide_img{
    height: 15rem;
} */
/* Smartphones (portrait) */
@media only screen and (max-width: 320px) {
    .slide_img {
            height: 20rem !important;
        }
}

/* iPads (portrait and landscape)  */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .slide_img {
            height: 20rem !important;
        }
}

/* Desktops and laptops  */
@media only screen and (min-width: 1224px) {
    /* Styles */
}
</style>
