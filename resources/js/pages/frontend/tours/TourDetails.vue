<template>
    <div class="">
        <div class="">
            <SwiperSlider :imgs="tour.images" />

        </div>
        <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-4 border flex justify-between">
            <h1 class="font-bold text-indigo-800 px-2 my-auto">{{ tour['title_' + lang] }}</h1>


            <div
                class="overflow-hidden text-right text-base text-body-color leading-relaxed text-indigo-800 font-bold m-2 ">

                <span class="flex">
                    <span class="text-xl">
                        {{ $t('from') }}</span>
                    <div>
                        <div v-if="tour['discount']" class="line-through text-gray-400 me-1 text-xl">
                            {{ tour['adult_price'] + '$' }}
                        </div>
                        <div class="text-gray-800 text-4xl ">
                            {{ tour['discount_type'] == 'amount' ?
                                    tour['adult_price'] - tour['discount']
                                    : (tour['adult_price'] - (tour['adult_price'] * tour['discount'] / 100)).toFixed(2)
                            }}$
                        </div>
                    </div>
                </span>
                <button class="w-36 h-10 mt-2 bg-yellow-600 text-white rounded-lg">{{ $t('book_now') }}</button>
            </div>
        </div>
        <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-10 justify-between">

            <div class="w-3/4 ">
                <base-section class="border p-2" :section_description="tour['options_' + lang]"
                    section_title="tour_options" />
                <base-section class="border p-2 mt-3" :section_description="tour['description_' + lang]"
                    section_title="tour_overview" />
                <list-section v-if="tour['highlights_' + lang]" class="border py-2 mt-3"
                    :section_list="tour['highlights_' + lang]" section_title="tour_highlights" />
                <list-section v-if="tour['include_' + lang]" class="border py-2 mt-3"
                    :section_list="tour['include_' + lang]" section_title="tour_inclusion" />
                <list-section v-if="tour['informations_' + lang]" class="border py-2 mt-3"
                    :section_list="tour['informations_' + lang]" section_title="important_information" />
                <list-section v-if="tour['policy_' + lang]" class="border py-2 mt-3"
                    :section_list="tour['policy_' + lang]" section_title="timing_and_transfer_policy" />
            </div>
            <div class="w-1/4 mx-2 ">
                <CallToAction class="sticky top-24" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, inject } from 'vue';
import useTours from '../../../composables/tours';
import SwiperSlider from '../../../components/SwiperSlider.vue';
import BaseSection from '../../../components/BaseSection.vue';
import ListSection from '../../../components/ListSection.vue';
import CallToAction from '../../../components/CallToAction.vue';
const { getTourDetails, tour } = useTours()
const props = defineProps({ slug: String })


let lang = inject('lang') || 'en'
onMounted(() => {
    getTourDetails(props.slug)
})
</script>
