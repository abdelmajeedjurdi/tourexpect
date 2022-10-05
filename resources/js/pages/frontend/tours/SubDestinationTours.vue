<template>
    <div class="bg-white w-full pt-16 px-3 md:px-0 max-w-6xl mx-auto">
        <div class=" w-full">
            <div style="min-height:80vh ;"
                class=" grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between ">
                <div v-for="tour in tours" :key="tour.id">
                    <div class="bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10">
                        <router-link to="#">
                            <img :src="'/images/tours/' + tour.thumbnail" alt="image"
                                class="w-full h-56 object-cover" />
                            <div class="p-2 h-40">
                                <h3 class=" text-xl text-black font-bold">
                                    {{
                                    tour['title_'+lang].substring(0, 65) +
                                    (tour['title_'+lang].length > 65 ? "..." : "")
                                    }}
                                </h3>
                                <div
                                    class=" overflow-hidden flex text-base text-body-color leading-relaxed items-center text-black">
                                    <span class=" ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="h-5 text-indigo-800">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>

                                    </span>
                                    {{
                                    tour['address_'+lang]
                                    }}
                                </div>
                                <div
                                    class=" overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold">
                                    <span>
                                        {{
                                        tour['duration_'+lang]
                                        }}
                                    </span>
                                    <span class="">
                                        {{ $t('from') }}
                                        <span v-if="tour['discount']" class="line-through text-red-500 me-1">
                                            {{ tour['adult_price']}}
                                        </span>
                                        <span class="text-blue-500">
                                            {{ tour['discount_type']=='amount'?
                                            tour['adult_price']-tour['discount']
                                            :tour['adult_price']-(tour['adult_price']*tour['discount']/100) }}
                                        </span>
                                    </span>
                                </div>
                                <div class=" overflow-hidden text-base text-body-color leading-relaxed text-gray-700">
                                    {{
                                    tour['description_'+lang].substring(0, 100) +
                                    (tour['description_'+lang].length > 100 ? "..." : "")
                                    }}
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- pagenation -->
            <pagenation @selected="changePage($event)" :pages="alter_pages" />
            <!-- end of pagenation -->
        </div>
    </div>
</template>
<script setup>
import { inject, onMounted, ref, watch } from "vue";
import useTours from "../../../composables/tours";
import Pagenation from "../../../components/Pagenation.vue";

const props = defineProps({ destination: String, subdestination: String });
const { getDestinationTours, tours, alter_pages } = useTours();
const lang = inject('lang') || 'en'
let currentPage = ref(1)
onMounted(() => {
    getDestinationTours(currentPage.value, props.destination, props.subdestination)
})
const changePage = (page) => {
    currentPage.value = page
    getDestinationTours(currentPage.value, props.destination, props.subdestination)
}
watch(() => props.subdestination, (first, second) => {
    console.log(
        "Watch props.selected function called with args:",
        first,
        second
    );
    getDestinationTours(currentPage.value, props.destination, props.subdestination)
});
</script>
