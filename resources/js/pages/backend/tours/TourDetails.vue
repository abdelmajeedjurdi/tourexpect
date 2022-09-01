<template>
    <div class="lg:flex" v-if="tour.length != []">
        <div class="w-1/2">
            <img :src="'/images/tours/' + tour.image" alt="" class="w-full" />
            <div class="mt-4">
                <h4>Gallery</h4>
                <div class="grid grid-cols-4">
                    <div v-for="image in tour.images" :key="image.id" class="w-48 bg-white mt-1">
                        <img class="h-28 mx-auto" :src="'/images/tours/' + image.image" alt="" />
                    </div>
                </div>
            </div>

            <div class="mt-4">
                <h4>Files</h4>
                <div class="grid grid-cols-4">
                    <div v-for="file in tour.files" :key="file.id" class="w-28 bg-white rounded">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-28" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 class="text-base mx-auto w-28">
                                {{  file.original_name  }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <div class="text-left">
                <h2 class="text-3xl text-gray-100 font-bold">{{  tour.title_en  }}</h2>
                <h2 class="text-xl text-gray-200 font-semibold">
                    {{  tour["category"].title_en  }}
                </h2>
                <p class="mt-4 text-gray-300">
                    {{  tour.description_en  }}
                </p>
                <ul>
                    <li v-for="property in tour.properties" :key="property.id">
                        <span class="text-gray-200">{{  property.title_en  }}</span>
                        <p class="text-gray-400">{{  property.description_en  }}</p>
                    </li>
                </ul>
            </div>
            <div class="text-right">
                <h2 class="text-3xl text-gray-100 font-bold">{{  tour.title_ar  }}</h2>
                <h2 class="text-xl text-gray-200 font-semibold">
                    {{  tour["category"].title_ar  }}
                </h2>
                <p class="mt-4 text-gray-300">
                    {{  tour.description_ar  }}
                </p>
                <ul>
                    <li v-for="property in tour.properties" :key="property.id">
                        <span class="text-gray-200">{{  property.title_ar  }}</span>
                        <p class="text-gray-400">{{  property.description_ar  }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import useTours from "../../../composables/tours";
const props = defineProps({
    id: String,
});
const { tour, getTour } = useTours();
onMounted(() => {
    getTour(props.id);
});
</script>
