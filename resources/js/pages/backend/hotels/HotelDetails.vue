<template>
    <div>

        <!-- Hotel details -->

        <div class="flex">

            <form class="space-y-6 w-full">
                <h1 class="flex items-center">Hotel Details
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 mx-2"
                        :class="hotel.active=='true'?'text-green-400':''">
                        <path fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd" />
                    </svg>
                </h1>
                <img :src="'/images/hotels/'+hotel.thumbnail" :alt="hotel.thumbnail" class="w-96 h-96 object-cover">
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
                        <!-- title -->
                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="title_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Title</label>
                                <div class="mt-1">
                                    {{ hotel.title_en}}
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="title_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Title</label>
                                <div class="mt-1">
                                    {{ hotel.title_ar }}
                                </div>
                            </div>
                        </div>

                        <!-- address -->
                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="address_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Address</label>
                                <div class="mt-1">
                                    {{ hotel.address_en }}
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="address_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Address</label>
                                <div class="mt-1">
                                    {{ hotel.address_ar }}
                                </div>
                            </div>
                        </div>

                        <!-- descreption -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="description_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Description</label>
                                <div class="mt-1">
                                    {{hotel.description_en}}
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="description_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Description</label>
                                <div class="mt-1">
                                    {{hotel.description_ar}}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </form>
            <div class="ml-3 bg-blue-400 dark:bg-gray-600 rounded h-screen w-96 px-4">

                <div class="w-full me-2 mt-4">
                    <label for="adult_price"
                        class="block text-sm font-medium w-full   text-gray-700 dark:text-gray-200">
                        Price</label>
                    <div class="mt-1">
                        {{ hotel.price }}
                    </div>
                </div>
                <div class="w-full me-2 mt-2">
                    <label for="discount"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Discount</label>
                    <div class="mt-1">
                        {{hotel.discount+(hotel.discount_type==percentage?'%':'')}}
                    </div>
                </div>

                <div class="w-full mt-2">
                    <label for="discount_type"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Stars</label>
                    <div class="flex">
                        <svg v-for="i in 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 " :class="i<=hotel.stars?'text-yellow-500':''">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
        <RoomsCroud @edited="getHotel(id)" :rooms="hotel['rooms']" :hotel_id="id" />
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import useHotels from "../../../composables/hotels";
import RoomsCroud from "../../../components/RoomsCrud.vue"
const { getHotel, hotel } = useHotels()
const props = defineProps({ id: String });
onMounted(() => {
    getHotel(props.id)
})
</script>
