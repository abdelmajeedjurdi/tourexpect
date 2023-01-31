<template>
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-14">
        <swiper
            :modules="modules"
            :slides-per-view="5"
            :space-between="50"
            virtual
            :navigation="true"
        >
            <swiper-slide
                v-for="(slideContent, index) in slides"
                :key="index"
                :virtualIndex="index"
            >
                <tour-tow />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import TourTow from "../../components/TourTow.vue";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay, Virtual } from "swiper";
const modules = [EffectFade, Navigation, Pagination, Autoplay, Virtual];

// Create array with 1000 slides
const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
);
</script>
<style>
.swiper-virtual {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}
.swiper-button-next,
.swiper-button-prev {
    top: 33% !important;
}

.swiper-button-next::after {
    content: url("/images/arrow-circle-right.svg");
    /* content: "➔"; Using a unicode character */
    font-size: 16px; /* specify the font-size */
}

.swiper-button-prev::after {
    content: url("/images/arrow-circle-left.svg");
    /* content: "➔"; Using a unicode character */
    font-size: 16px; /* specify the font-size */
}
</style>
