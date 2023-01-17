<template>
    <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28">
        <div>
            <div
                class="relative z-40 lg:hidden"
                v-show="mobileFiltersOpen"
                role="dialog"
                aria-modal="true"
            >
                <div class="fixed inset-0 z-40 flex">
                    <div
                        class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
                    >
                        <div class="flex items-center justify-between px-4">
                            <h2 class="text-lg font-medium text-gray-900">
                                Filters
                            </h2>
                            <button
                                @click="mobileFiltersOpen = false"
                                type="button"
                                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            >
                                <span class="sr-only">Close menu</span>
                                <!-- Heroicon name: outline/x-mark -->
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!-- Filters -->

                        <form class="mt-4 border-t border-gray-200">
                            <div class="border-t border-gray-200 px-4 py-6">
                                <h3 class="-my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button
                                        type="button"
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-mobile-1"
                                        aria-expanded="false"
                                    >
                                        <span class="font-medium text-gray-900"
                                            >Categories</span
                                        >
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                                />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->

                                <div class="pt-6" id="filter-section-1">
                                    <div class="space-y-4">
                                        <div
                                            class="flex items-center"
                                            v-for="category in categories"
                                            :key="category.id"
                                        >
                                            <input
                                                :id="category['name_en']"
                                                :name="category['name_en']"
                                                :value="category.id"
                                                type="checkbox"
                                                v-model="filter.categories"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                :for="category['name_en']"
                                                class="ml-3 text-sm text-gray-600"
                                                >{{
                                                    category["name_" + lang]
                                                }}</label
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-6">
                                <h3 class="-my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button
                                        type="button"
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-mobile-1"
                                        aria-expanded="false"
                                    >
                                        <span class="font-medium text-gray-900"
                                            >Destinations</span
                                        >
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                                />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div class="pt-6" id="filter-section-1">
                                    <div class="space-y-4">
                                        <div
                                            v-for="country in countries"
                                            :key="country.id"
                                        >
                                            <div class="flex items-center mb-1">
                                                <input
                                                    :id="country['name_en']"
                                                    :name="country['name_en']"
                                                    :value="country.id"
                                                    type="checkbox"
                                                    v-model="
                                                        active_countries[
                                                            country.id
                                                        ]
                                                    "
                                                    @change="
                                                        filterCountries(
                                                            country.id,
                                                            country.items
                                                        )
                                                    "
                                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                    :for="country['name_en']"
                                                    class="ml-3 text-sm text-gray-600"
                                                    >{{
                                                        country["name_" + lang]
                                                    }}</label
                                                >
                                            </div>
                                            <!-- Towns filter -->
                                            <div
                                                class="flex items-center mx-2"
                                                v-for="province in country[
                                                    'items'
                                                ]"
                                                :key="province.id"
                                            >
                                                <input
                                                    :id="province['name_en']"
                                                    :name="province['name_en']"
                                                    :value="province.id"
                                                    type="checkbox"
                                                    v-model="
                                                        filter.destinations
                                                    "
                                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                    :for="province['name_en']"
                                                    class="ml-3 text-sm text-gray-600"
                                                    >{{
                                                        province["name_" + lang]
                                                    }}</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <main class="mx-auto max-w-7xl">
                <div
                    class="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6"
                >
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900">
                        Activities
                    </h1>

                    <div class="flex items-center">
                        <button
                            @click="mobileFiltersOpen = true"
                            type="button"
                            class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        >
                            <span class="sr-only">Filters</span>
                            <!-- Heroicon name: mini/funnel -->
                            <svg
                                class="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <section aria-labelledby="products-heading" class="pt-6 pb-24">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div
                        class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"
                    >
                        <!-- Filters -->
                        <form class="hidden lg:block">
                            <!-- categories filter -->
                            <div class="border-b border-gray-200 py-6">
                                <h3 class="-my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button
                                        type="button"
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1"
                                        aria-expanded="false"
                                    >
                                        <span class="font-medium text-gray-900"
                                            >Categories</span
                                        >
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                                />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div class="pt-6" id="filter-section-1">
                                    <div class="space-y-4">
                                        <div
                                            class="flex items-center"
                                            v-for="category in categories"
                                            :key="category.id"
                                        >
                                            <input
                                                :id="category['name_en']"
                                                :name="category['name_en']"
                                                :value="category.id"
                                                type="checkbox"
                                                v-model="filter.categories"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                :for="category['name_en']"
                                                class="ml-3 text-sm text-gray-600"
                                                >{{
                                                    category["name_" + lang]
                                                }}</label
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- destinations filter -->
                            <div class="border-b border-gray-200 py-6">
                                <h3 class="-my-3 flow-root">
                                    <!-- Expand/collapse section button -->
                                    <button
                                        type="button"
                                        class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                                        aria-controls="filter-section-1"
                                        aria-expanded="false"
                                    >
                                        <span class="font-medium text-gray-900"
                                            >Destinations</span
                                        >
                                        <span class="ml-6 flex items-center">
                                            <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: mini/plus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                                                />
                                            </svg>
                                            <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: mini/minus
                    -->
                                            <svg
                                                class="h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>
                                <!-- Filter section, show/hide based on section state. -->
                                <div class="pt-6" id="filter-section-1">
                                    <div class="space-y-4">
                                        <div
                                            v-for="country in countries"
                                            :key="country.id"
                                        >
                                            <div class="flex items-center mb-1">
                                                <input
                                                    :id="country['name_en']"
                                                    :name="country['name_en']"
                                                    :value="country.id"
                                                    type="checkbox"
                                                    v-model="
                                                        active_countries[
                                                            country.id
                                                        ]
                                                    "
                                                    @change="
                                                        filterCountries(
                                                            country.id,
                                                            country.items
                                                        )
                                                    "
                                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                    :for="country['name_en']"
                                                    class="ml-3 text-sm text-gray-600"
                                                    >{{
                                                        country["name_" + lang]
                                                    }}</label
                                                >
                                            </div>
                                            <!-- Towns filter -->
                                            <div
                                                class="flex items-center mx-2"
                                                v-for="province in country[
                                                    'items'
                                                ]"
                                                :key="province.id"
                                            >
                                                <input
                                                    :id="province['name_en']"
                                                    :name="province['name_en']"
                                                    :value="province.id"
                                                    type="checkbox"
                                                    v-model="
                                                        filter.destinations
                                                    "
                                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label
                                                    :for="province['name_en']"
                                                    class="ml-3 text-sm text-gray-600"
                                                    >{{
                                                        province["name_" + lang]
                                                    }}</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <!-- Product grid -->
                        <div class="lg:col-span-3">
                            <!-- Replace with your content -->
                            <div class="w-full px-4">
                                <div
                                    style="min-height: 80vh"
                                    class="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between"
                                >
                                    <div v-for="t in activities" :key="t.id">
                                        <ActivityVue :activity="t" />
                                    </div>
                                </div>
                                <!-- pagenation -->
                                <pagenation
                                    @selected="changePage($event)"
                                    :pages="pages"
                                />
                                <!-- end of pagenation -->
                            </div>
                        </div>
                        <!-- /End replace -->
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>
<script setup>
import { inject, onMounted, reactive, ref, watch } from "vue";
import useActivities from "../../../composables/activities";
import Pagenation from "../../../components/Pagenation.vue";
import ActivityVue from "../../../components/Activity.vue";
import useDestinations from "../../../composables/destinations";
import useCategories from "../../../composables/categories";

const { getFilteredActivities, activities, pages } = useActivities();
const { getDestinationsOnCountry, countries } = useDestinations();
const { getCategoriesOnSection, categories } = useCategories();

let lang = inject("lang") || "en";
let currentPage = ref(1);
const props = defineProps({ destination: String });
onMounted(async () => {
    getFilteredActivities(filter.value);
    getCategoriesOnSection("activities");
    await getDestinationsOnCountry();
    currentCountryItems();
});
const showFilter = () => {
    if (document.getElementById("filter").style.display == "block")
        document.getElementById("filter").style.display = "none";
    else document.getElementById("filter").style.display = "block";
};
let active_country = ref("0");
let filter = ref({
    destinations: [],
    categories: [],
    page: 1,
});
const changePage = (page) => {
    filter.value.page = page;
};
watch(filter.value, () => {
    getFilteredActivities(filter.value);
});

let active_countries = reactive({ id: false });
const filterCountries = (id, provinces) => {
    if (active_countries[id]) {
        for (let x in provinces) {
            if (!filter.value.destinations.includes(provinces[x]["id"]))
                filter.value.destinations.push(provinces[x]["id"]);
        }
    } else {
        for (let x in provinces) {
            var index = filter.value.destinations.indexOf(provinces[x]["id"]);
            filter.value.destinations.splice(index, 1);
        }
    }
};
watch(props, () => {
    filter.value = {
        destinations: [],
        categories: [],
        page: 1,
    };
    for (var member in active_countries) delete active_countries[member];
    currentCountryItems();
});
let mobileFiltersOpen = ref(false);

const currentCountryItems2 = () => {
    for (let i = 0; i < countries.value.length; i++) {
        if (countries.value[i]["slug"].trim() == props.destination.trim()) {
            console.log("working");
            active_countries[countries.value[i]["id"]] = true;
            filterCountries(
                countries.value[i]["id"],
                countries.value[i]["items"]
            );
            break;
        }
    }
};
const currentCountryItems = () => {
    for (let i in countries.value) {
        if (countries.value[i]["slug"].trim() == props.destination.trim()) {
            let c = countries.value[i]["items"];
            for (var j in c) {
                filter.value.destinations.push(
                    countries.value[i]["items"][j]["id"]
                );
            }
            getFilteredActivities(filter.value);
            break;
        }
    }
};
</script>
