<template>
    <swiper :navigation="true" :modules="modules" :loop="true" :effect="'fade'" :pagination="{
        clickable: true,
    }" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
}" class="mySwiper">
        <swiper-slide v-for="image in imgs" :key="image.id">
            <img :src="'/images/tours/' + image.image" alt="image" style="height:60vh ;" class="w-full object-cover" />
        </swiper-slide>
    </swiper>
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
