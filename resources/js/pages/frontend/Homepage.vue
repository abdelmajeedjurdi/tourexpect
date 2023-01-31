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
                        {{ $t("turkey_tours") }}
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
                            {{ $t("turkey_tours") }}
                        </div>
                    </div>
                    <div
                        class="relative bg-blue-50 overflow-hidden"
                        v-for="province in countries['turkey']"
                        :key="province.slug"
                    >
                        <img
                            :src="`/images/destinations/${province.image}`"
                            class="w-full h-56 object-cover"
                            alt="Product Image"
                        />
                        <div class="h-36 relative">
                            <div
                                class="items-center justify-center mb-2 h-16 flex px-2"
                            >
                                <h3 class="text-lg text-black font-bold">
                                    {{ province["name_" + lang] }}
                                </h3>
                            </div>
                            <div
                                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
                            >
                                <router-link
                                    :to="`/tours/turkey/${province.slug}`"
                                    class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                                >
                                    {{ $t("see_more") }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <div class="border-b-4 border-yellow-500 text-center mb-6">
                    <h2 class="font-extrabold uppercase text-black">
                        {{ $t("uae_tours") }}
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
                            class="text-xl font-medium text-white text-center mt-1"
                        >
                            {{ $t("uae_tours") }}
                        </div>
                    </div>
                    <div
                        class="relative bg-blue-50 overflow-hidden"
                        v-for="province in countries['uae']"
                        :key="province.slug"
                    >
                        <img
                            :src="`/images/destinations/${province.image}`"
                            class="w-full h-56 object-cover"
                            alt="Product Image"
                        />
                        <div class="h-36 relative">
                            <div
                                class="items-center justify-center mb-2 h-16 flex px-2"
                            >
                                <h3 class="text-lg text-black font-bold">
                                    {{ province["name_" + lang] }}
                                </h3>
                            </div>
                            <div
                                class="bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
                            >
                                <router-link
                                    :to="`/tours/uae/${province.slug}`"
                                    class="px-4 h-8 bg-main-orange text-white rounded-full mx-auto w-full text-center"
                                >
                                    {{ $t("see_more") }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <item-slider
                    :title="$t('best_of_trabzon_tours')"
                    :items="province_tours['trabzon']"
                />
            </div>
            <div>
                <item-slider
                    :title="$t('best_of_rize_tours')"
                    :items="province_tours['rize']"
                />
            </div>
            <div>
                <item-slider
                    :title="$t('best_of_east_black_sea_region_tours')"
                    :items="province_tours['east-black-sea-region']"
                />
            </div>
            <div>
                <item-slider
                    :title="$t('best_of_dubai_tours')"
                    :items="province_tours['dubai']"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, onMounted, inject, ref } from "vue";
import useTours from "../../composables/tours";
import useDestinations from "../../composables/destinations";
import ItemSlider from "../../components/ItemSlider.vue";
const { getDestinationTours } = useTours();
const { trendingDestinations } = useDestinations();

let lang = inject("lang") || "en";
onMounted(() => {});

let countries = ref([]);
let province_tours = ref([]);
onBeforeMount(async () => {
    countries.value = await trendingDestinations();
    province_tours.value = await getDestinationTours();
    console.log(province_tours.value["trabzon"]);
});
</script>
