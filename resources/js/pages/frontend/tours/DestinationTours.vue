<template>
    <div class="bg-white w-full pt-16 px-3 md:px-0 max-w-6xl mx-auto">

        <div class=" w-full">
            <div style="min-height:80vh ;"
                class=" grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between ">
                <div v-for="tour in tours" :key="tour.id">

                    <TourVue :tour="tour" />
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
import TourVue from "../../../components/Tour.vue";
const props = defineProps({ destination: String });
const { getDestinationTours, tours, alter_pages } = useTours();
const lang = inject('lang') || 'en'
let currentPage = ref(1)
onMounted(() => {
    getDestinationTours(currentPage.value, props.destination)
})
const changePage = (page) => {
    currentPage.value = page
    getDestinationTours(currentPage.value, props.destination)
}
watch(() => props.destination, (first, second) => {
    getDestinationTours(currentPage.value, props.destination)
});
</script>
