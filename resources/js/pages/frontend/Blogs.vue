<template>

    <div class=" sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28">

        <div class="max-h-screen w-11/12 mx-auto sm:mx-0 sm:w-80 border rounded shadow block px-3 py-3 mb-5 sm:mb-0">
            <div class="flex justify-between sm:hidden" @click="showFilter">
                <span class="text-lg">{{ $t('filter') }}</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </span>
            </div>
            <div id="filter" class="space-y-4 hidden sm:block">

                <h3 class="font-semibold text-lg">{{ $t('destinations') }}</h3>
                <div v-for="country in countries">
                    <div class="border px-2 flex justify-between items-center cursor-pointer"
                        @click="active_country==country.id?active_country=0:active_country=country.id">
                        <span>
                            {{ country['name_en'] }}
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 text-gray-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </span>
                    </div>
                    <div v-show="country.id==active_country" class="px-2  ">
                        <div class="button space-y-3" v-for="destination in country.items">
                            <input type="radio" :id="destination.slug" name="destinations" class="hidden"
                                v-model="filter.destination" :value="destination.id" />
                            <label class="rounded px-2  w-full  cursor-pointer"
                                :class="filter.destination==destination.id?'bg-blue-400  text-white font-bold':'bg-gray-100 border'"
                                :for="destination.slug">{{
                                destination['name_'+lang]
                                }}</label>
                        </div>
                    </div>
                </div>
                <h3 class="font-semibold text-lg">{{ $t('categories') }}</h3>
                <div class="h-80 overflow-y-scroll space-y-3">
                    <div class="button text-center">
                        <input type="radio" id="all-categories" name="categories" class="hidden"
                            v-model="filter.category" value="*" />
                        <label :class="filter.category=='*'?'bg-blue-400 text-white':'bg-gray-300'"
                            class="rounded  w-4/5 text-center py-1 cursor-pointer" for="all-categories">{{
                            $t('all-categories')
                            }}</label>
                    </div>
                    <div class="button text-center" v-for="category in categories">
                        <input type="radio" :id="category.slug" name="categories" class="hidden"
                            v-model="filter.category" :value="category.id" />
                        <label class="rounded text-center py-1 w-4/5  cursor-pointer"
                            :class="filter.category==category.id?'bg-blue-400  text-white font-bold':'bg-gray-300'"
                            :for="category.slug">{{
                            category['name_'+lang]
                            }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class=" w-full px-4">
            <div style="min-height:80vh ;"
                class=" grid gap-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between ">
                <div v-for="blog in blogs" :key="blog.id">
                    <div class="bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10">
                        <router-link :to="{ name: 'blog', params: { slug: blog.slug } }">
                            <img :src="'/images/blogs/' + blog.image" alt="image" class="w-full h-48 object-cover" />
                            <div class="p-2 h-36">
                                <span class="text-base text-blue-500">
                                    {{
                                    blog['title_'+lang].substring(0, 65) +
                                    (blog['title_'+lang].length > 65 ? "..." : "")
                                    }}
                                </span>
                                <p class=" overflow-hidden
                                        text-base text-body-color
                                        leading-relaxed
                                        mb-7
                                        text-gray-600
                                        ">
                                    {{
                                    blog['preview_text_'+lang].substring(0, 100) +
                                    (blog['preview_text_'+lang].length > 100 ? "..." : "")
                                    }}
                                </p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- pagenation -->

            <div v-if="pagenation['meta']!==undefined" class="w-full text-center">
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li v-if="pagenation['meta']['current_page']!=1"
                            @click="filter.page=pagenation['meta']['current_page'] -1" class="cursor-pointer">
                            <span
                                class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg :style="lang=='en'?'':'rotate:180deg'" aria-hidden="true" class="w-5 h-5"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </li>
                        <li v-for="link in pagenation['meta']['links']" @click="filter.page=link.label"
                            class="cursor-pointer">
                            <span v-if="!isNaN(link.label)"
                                class="py-2 px-3 leading-tight  bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                :class="link.active?'text-blue-500':'text-gray-500'">{{
                                link.label }}</span>
                        </li>
                        <li v-if="pagenation['meta']['current_page']!=pagenation['meta']['last_page']"
                            @click="filter.page=pagenation['meta']['current_page'] +1" class="cursor-pointer">
                            <span
                                class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg :style="lang=='en'?'':'rotate:180deg'" aria-hidden="true" class="w-5 h-5"
                                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- end of pagenation -->
        </div>
    </div>
</template>
<script setup>
import { createHead } from '@vueuse/head'
import { inject, onMounted, ref, watch } from 'vue';
import useBlogs from '../../composables/blogs';
import useDestinations from '../../composables/destinations';
import useCategories from '../../composables/categories';
const { getFilteredBlogs, blogs, pagenation } = useBlogs();
const { getDestinationsOnCountry, countries } = useDestinations()
const { getCategoriesOnSection, categories } = useCategories()
let filter = ref({
    destination: '*',
    category: '*',
    page: 1
})
let lang = inject('lang') || 'en'
let active_country = ref(0)
onMounted(() => {
    getFilteredBlogs(filter.value)
    getDestinationsOnCountry()
    getCategoriesOnSection('blogs')
})
const showFilter = () => {
    if (document.getElementById('filter').style.display == "block")
        document.getElementById('filter').style.display = "none"
    else
        document.getElementById('filter').style.display = "block"
}
const refreshBlogs = () => {
    getFilteredBlogs(filter)
}
watch(filter.value, () => {
    getFilteredBlogs(filter.value)
})
</script>

<style>
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #00aeef;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #2dc7ff;
}
</style>
