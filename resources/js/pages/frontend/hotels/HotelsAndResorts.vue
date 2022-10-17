<template>
    <div class="bg-white w-full pt-16 px-3 md:px-0 max-w-6xl mx-auto">

        <div class=" w-full">
            <div style="min-height:80vh ;"
                class=" grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between ">
                <div v-for="hotel in hotels" :key="hotel.id">
                    <HotelVue :hotel="hotel" />
                </div>
            </div>
            <!-- pagenation -->
            <pagenation @selected="changePage($event)" :pages="pages" />
            <!-- end of pagenation -->
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import useHotels from "../../../composables/hotels";
import Pagenation from "../../../components/Pagenation.vue";
import HotelVue from "../../../components/Hotel.vue";

const { getAllHotels, hotels, pages } = useHotels();
let currentPage = ref(1)
onMounted(() => {
    getAllHotels(currentPage.value)
})
const changePage = (page) => {
    currentPage.value = page
    getAllHotels(currentPage.value)
}
</script>
