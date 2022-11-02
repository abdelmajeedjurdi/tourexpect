<template>
    <div class="">
        <div class="">
            <SwiperSlider :imgs="tour.images" />

        </div>
        <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28">
            <div class="w-3/4 ">
                <base-section :item_description="tour['options_' + lang]" item_title="tour_options" />
                <base-section :item_description="tour['description_' + lang]" item_title="tour_overview" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, inject } from 'vue';
import useTours from '../../../composables/tours';
import SwiperSlider from '../../../components/SwiperSlider.vue';
import BaseSection from '../../../components/BaseSection.vue';

const { getTourDetails, tour } = useTours()
const props = defineProps({ slug: String })


let lang = inject('lang') || 'en'
onMounted(() => {
    getTourDetails(props.slug)
})
</script>
