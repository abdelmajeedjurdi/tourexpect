<template>
    <div class="">
        <div>
            <SwiperSlider :imgs="tour.images" />

        </div>
        <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-2 flex justify-between">
            <div class="w-5/6">
                <h1 class="font-bold text-indigo-800 text-3xl pb-3 pt-0  my-auto">{{ tour['title_' + lang] }}</h1>
                <div class="grid gap-4 grid-cols-4 justify-between w-full" v-if="tour['banner_highlights']">
                    <div v-for="highlight in tour['banner_highlights']" :key="highlight">
                        <div class="flex">
                            <img class="h-6 mx-1" :src="'/images/banner_highlights/' + highlight.img" alt="">
                            <span class="text-base font-bold">{{ highlight['title_en'] }}</span>
                        </div>

                    </div>
                </div>
            </div>

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
                <div class="border rounded p-2">
                    <h3 class="text-indigo-800 font-bold">{{ $t('tour_options') }}</h3>
                    <div class="space-y-2 mt-4">
                        <div v-for="option in tour['options']" :key="option"
                            class="rounded py-3 px-16 border flex justify-between">
                            <div>
                                <h3 class="font-bold text-xl">{{ option['title_' + lang] }}</h3>
                                <div class="text-sm">{{ tour['duration_' + lang] }}</div>
                            </div>
                            <div
                                class="overflow-hidden text-right text-base text-body-color leading-relaxed text-indigo-800 font-bold m-2 ">

                                <span class="flex">

                                    <div>
                                        <div v-if="option['option_discount']"
                                            class="line-through text-gray-400 me-1 text-xl">
                                            {{ option['adult_price'] + '$' }}
                                        </div>
                                        <div class="text-gray-800 font-bold text-2xl ">
                                            {{ option['option_discount_type'] == 'amount' ?
                                                    option['adult_price'] - option['option_discount']
                                                    : (option['adult_price'] - (option['adult_price'] *
                                                        option['option_discount'] /
                                                        100)).toFixed(2)
                                            }}$
                                        </div>
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <base-section v-if="tour['description_' + lang] && tour['description_' + lang] != 'null'"
                    class="border p-2 mt-3" :section_description="tour['description_' + lang]"
                    section_title="tour_overview" />
                <list-section v-if="tour['highlights_' + lang] && tour['highlights_' + lang] != 'null'"
                    class="border py-2 mt-3" :section_list="tour['highlights_' + lang]"
                    section_title="tour_highlights" />
                <list-section v-if="tour['include_' + lang] && tour['include_' + lang] != 'null'"
                    class="border py-2 mt-3" :section_list="tour['include_' + lang]" section_title="tour_inclusion" />
                <list-section v-if="tour['information_' + lang] && tour['information_' + lang] != 'null'"
                    class="border py-2 mt-3" :section_list="tour['information_' + lang]"
                    section_title="important_information" />
                <list-section v-if="tour['policy_' + lang] && tour['policy_' + lang] != 'null'" class="border py-2 mt-3"
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
