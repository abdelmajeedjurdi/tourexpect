<template>
    <div class="">
        <div>
            <SwiperSlider :imgs="tour.images" />

        </div>
        <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-2 flex justify-between">


        </div>
        <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-10 justify-between">

            <div class="w-3/4 ">
                <div class="w-full">
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
                <div class="border rounded p-2">
                    <h3 class="text-indigo-800 font-bold">{{ $t('tour_options') }}</h3>
                    <div class="space-y-2 mt-4">
                        <div v-for="(option, i) in tour['options']" :key="option"
                            class="rounded py-3 px-16 border flex justify-between cursor-pointer hover:bg-blue-200"
                            :class="selected_idx == i ? 'bg-blue-300' : ''" @click="setOption(option, i)">
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
            <div class="w-1/4 mx-2  ">
                <div class="sticky top-24">

                    <!-- 1111111111111111111111111111111111 -->
                    <div class=" border p-4">
                        <form v-if="selected_option != null">
                            <div
                                class="overflow-hidden text-right text-base text-body-color leading-relaxed text-indigo-800 font-bold m-2 ">
                                <span class="flex">
                                    <span class="text-xl">
                                        {{ $t('price') }}</span>
                                    <div>
                                        <div v-if="tour['discount']" class="line-through text-gray-400 me-1 text-xl">
                                            {{ (selected_option['adult_price'] * adults +
                                                    selected_option['child_price'] * children) + '$'
                                            }}
                                        </div>
                                        <div class="text-gray-800 text-4xl ">
                                            {{
                                                    selected_option['option_discount_type'] == 'amount' ?
                                                        selected_option['adult_price'] * adults - selected_option['option_discount']
                                                        * adults + selected_option['child_price'] * children
                                                        : (((selected_option['adult_price'] - (selected_option['adult_price'] *
                                                            selected_option['option_discount']
                                                            /
                                                            100)) * adults) + ((selected_option['child_price'] -
                                                                (selected_option['child_price'] *
                                                                    selected_option['option_discount']
                                                                    /
                                                                    100)) * children)).toFixed(2)
                                            }}$
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div class="mb-6">
                                <label for="name" class="tour-label ">{{ $t("your_name") }}</label>
                                <input type="name" id="name"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    :placeholder="$t('required')" required>
                            </div>
                            <div class="mb-6 ">
                                <label for="guests" class="tour-label  ">{{ $t('guests') }}</label>
                                <div class="dropdown">
                                    <div class="peer border p-2 w-full dropbtn">
                                        {{ adults + ' ' + $t('adults') + ', ' + children + ' ' + $t('child') + ' ' }}
                                    </div>
                                    <!-- the menu here -->
                                    <div
                                        class="hidden p-3 absolute dropdown-content peer-hover:flex hover:flex w-64 flex-col bg-white drop-shadow-lg">
                                        <div class="flex justify-between">
                                            <div>Adults</div>
                                            <div class="flex">
                                                <button @click="adults--"
                                                    class="bg-yellow-500 w-6 h-6 rounded text-white">-</button>
                                                <span class="w-10 text-center">{{ adults }}</span>
                                                <button type="button" @click="adults++"
                                                    class="bg-yellow-500 w-6 h-6 rounded text-white">+</button>
                                            </div>
                                        </div>
                                        <div class="flex justify-between mt-3">
                                            <div>Children</div>
                                            <div class="flex">
                                                <button type="button" @click="children--"
                                                    class="bg-yellow-500 w-6 h-6 rounded text-white">-</button>
                                                <span class="w-10 text-center">{{ children }}</span>
                                                <button type="button" @click="children++"
                                                    class="bg-yellow-500 w-6 h-6 rounded text-white">+</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                class="text-white w-full rounded bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   text-sm px-5 py-2.5 text-center">Reserve</button>
                        </form>
                    </div>
                    <!-- 0000000000000000000000000000000000000000000000000000000 -->

                    <CallToAction class="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, inject, ref } from 'vue';
import useTours from '../../../composables/tours';
import SwiperSlider from '../../../components/SwiperSlider.vue';
import BaseSection from '../../../components/BaseSection.vue';
import ListSection from '../../../components/ListSection.vue';
import CallToAction from '../../../components/CallToAction.vue';
const { getTourDetails, tour } = useTours()
const props = defineProps({ slug: String })

let phone = ref(null);
let adults = ref(1)
let children = ref(0)
let selected_option = ref(null)
let selected_idx = ref(0)
let lang = inject('lang') || 'en'
onMounted(async () => {
    await getTourDetails(props.slug)
    selected_option.value = tour.value.options[0]

})
const setOption = (opt, idx) => {
    selected_idx.value = idx
    selected_option.value = opt
}
</script>
<style>
.dropdown-content {
    display: hidden;
    position: absolute;
    z-index: 1;
}


.dropdown:hover .dropdown-content {
    display: flex;
}
</style>
