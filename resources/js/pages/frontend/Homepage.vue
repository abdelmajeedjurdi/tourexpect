<template>
    <div>
        <!-- Hero Section -->
        <div class="">
            <div
                class="relative overflow-hidden w-full block md:flex items-center bg-no-repeat bg-cover bg-center"
            >
                <img src="/images/hero2.jpg" alt="" />
            </div>
        </div>
        <!-- end hero section -->
        <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-14">
            <div>
                <div class="border-b-4 border-yellow-500 text-center mb-6">
                    <h2 class="font-extrabold uppercase text-black">
                        Turkey Tours
                    </h2>
                </div>
                <div class="grid grid-cols-5 gap-3">
                    <div
                        class="relative row-span-2 overflow-hidden bg-main-orange"
                    >
                        <img
                            src="https://e0.pxfuel.com/wallpapers/466/85/desktop-wallpaper-galata-tower-istanbul-turkey-phone-istanbul.jpg"
                            class="w-full object-cover"
                            style="height: 90%"
                            alt="Product Image"
                        />
                        <div
                            class="text-xl font-medium text-white text-center mt-6"
                        >
                            Turkey Tours
                        </div>
                    </div>
                    <div
                        class="relative bg-blue-50 overflow-hidden"
                        v-for="tour in turkey_tours"
                        :key="tour.slug"
                    >
                        <img
                            :src="`/images/tours/${tour.thumbnail}`"
                            class="w-full h-56 object-cover"
                            alt="Product Image"
                        />
                        <div class="h-36 relative">
                            <div
                                class="items-center justify-center mb-2 h-16 flex px-2"
                            >
                                <h3 class="text-lg text-black font-bold">
                                    {{ tour["title_" + lang] }}
                                </h3>
                            </div>
                            <div
                                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
                            >
                                <button
                                    class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <div class="border-b-4 border-yellow-500 text-center mb-6">
                    <h2 class="font-extrabold uppercase text-black">
                        UAE Tours
                    </h2>
                </div>
                <div class="grid grid-cols-5 gap-3">
                    <div
                        class="relative row-span-2 overflow-hidden bg-main-orange"
                    >
                        <img
                            src="https://assets.cntraveller.in/photos/63ad209f79d81704e445de5d/master/w_1600%2Cc_limit/The%2520Burj%2520Khalifa-GettyImages-1084264582.jpeg"
                            class="w-full object-cover"
                            style="height: 90%"
                            alt="Product Image"
                        />
                        <div
                            class="text-xl font-medium text-white text-center mt-2"
                        >
                            UAE Tours
                        </div>
                    </div>
                    <div
                        class="relative bg-blue-50 overflow-hidden"
                        v-for="tour in uae_tours"
                        :key="tour.slug"
                    >
                        <img
                            :src="`/images/tours/${tour.thumbnail}`"
                            class="w-full h-56 object-cover"
                            alt="Product Image"
                        />
                        <div class="h-36 relative">
                            <div
                                class="items-center justify-center mb-2 h-16 flex px-2"
                            >
                                <h3 class="text-lg text-black font-bold">
                                    {{ tour["title_" + lang] }}
                                </h3>
                            </div>
                            <div
                                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
                            >
                                <button
                                    class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, onMounted, inject, ref } from "vue";
import useTours from "../../composables/tours";

const { getDestinationTours } = useTours();

let lang = inject("lang") || "en";
onMounted(() => {});

const turkey_tours = ref([]);
const uae_tours = ref([]);
onBeforeMount(async () => {
    turkey_tours.value = await getDestinationTours(8, "turkey");
    uae_tours.value = await getDestinationTours(4, "uae");
});
</script>
