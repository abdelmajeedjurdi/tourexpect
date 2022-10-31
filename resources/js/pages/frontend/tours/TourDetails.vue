<template>
    <div class="">
        <div class="">
            <swiper class="parallax-slider relative" :pagination="{ clickable: true }" :controller="true" navigation
                :allow-slide-next="true" parallax grabCursor :allow-touch-move="true" :slides-per-view="1">
                <swiper-slide v-for="image in tour.images" :key="image.id">
                    <img :src="'/images/tours/' + image.image" alt="image" style="height:70vh ;"
                        class="w-full object-cover" />

                </swiper-slide>
            </swiper>
        </div>
        <div class="mt-9">
            {{ tour }}
        </div>
    </div>
</template>
<script setup>
import { onMounted } from '@vue/runtime-core';
import useTours from '../../../composables/tours';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const { getTourDetails, tour } = useTours()
const props = defineProps({ slug: String })

onMounted(() => {
    getTourDetails(props.slug)
})
</script>
