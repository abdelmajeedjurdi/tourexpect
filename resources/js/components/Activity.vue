<template>
    <div
        class="bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10"
    >
        <router-link
            :to="{
                name: 'activity-details',
                params: { lang: lang == 'ar' ? 'ar' : '', slug: activity.slug },
            }"
        >
            <div class="relative">
                <img
                    :src="'/images/activities/' + activity.thumbnail"
                    alt="image"
                    class="w-full h-56 object-cover"
                />
                <div
                    class="bg-gradient-to-t from-gray-900 absolute flex justify-between bottom-0 left-0 right-0 px-2 pb-1"
                >
                    <div
                        class="overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white"
                    >
                        <span class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-5"
                                style="margin: -3px"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </span>
                        <span class="ms-1">
                            {{
                                activity.destination
                                    ? activity.destination["name_" + lang]
                                    : activity["destination_" + lang]
                            }}
                        </span>
                    </div>
                    <div
                        class="overflow-hidden flex text-base text-body-color leading-relaxed items-center text-white"
                    >
                        <span class="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                        {{ activity["duration_" + lang] }}
                    </div>
                </div>
            </div>
            <div class="h-72 relative">
                <div class="items-center border-b mb-2 h-16 flex px-2">
                    <h3 class="text-lg text-black font-bold">
                        {{
                            activity["title_" + lang].substring(0, 50) +
                            (activity["title_" + lang].length > 50 ? "..." : "")
                        }}
                    </h3>
                </div>
                <div
                    class="overflow-hidden text-base text-body-color leading-relaxed text-gray-700 px-2"
                >
                    <div
                        class="grid gap-0 grid-cols-2"
                        v-if="activity['banner_highlights']"
                    >
                        <div
                            v-for="(highlight, i) in JSON.parse(
                                activity['banner_highlights']
                            )"
                            :key="highlight"
                            class="flex h-12"
                        >
                            <div v-if="i < 6" class="flex space-x-1">
                                <img
                                    :src="'/images/icons/' + highlight['img']"
                                    class="w-5"
                                    style="fill: orange"
                                    alt=""
                                />
                                <span
                                    class="flex items-center text-black text-xs font-bold"
                                >
                                    {{ highlight["title_" + lang] }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="border-t bottom-0 absolute left-0 right-0 py-2 px-3 overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold"
                >
                    <button
                        class="px-4 h-8 bg-yellow-600 text-white rounded-full mx-auto w-full"
                    >
                        {{ $t("book_now") }}
                    </button>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { inject, ref } from "vue";

const props = defineProps({
    activity: Object,
});
const lang = inject("lang") || "en";
</script>
