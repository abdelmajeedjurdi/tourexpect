<template>
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
                    <div class="button space-y-3" v-for="destination in country['items']">
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
                    <input type="radio" id="all-categories" name="categories" class="hidden" v-model="filter.category"
                        value="*" />
                    <label :class="filter.category=='*'?'bg-blue-400 text-white':'bg-gray-300'"
                        class="rounded  w-4/5 text-center py-1 cursor-pointer" for="all-categories">{{
                        $t('all-categories')
                        }}</label>
                </div>
                <div class="button text-center" v-for="category in categories">
                    <input type="radio" :id="category.slug" name="categories" class="hidden" v-model="filter.category"
                        :value="category['id']" />
                    <label class="rounded text-center py-1 w-4/5  cursor-pointer"
                        :class="filter.category==category['id']?'bg-blue-400  text-white font-bold':'bg-gray-300'"
                        :for="category.slug">{{
                        category['name_'+lang]
                        }}</label>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import useDestinations from '../composables/destinations';
import useCategories from '../composables/categories';
import { onMounted, ref } from 'vue';

const { getDestinationsOnCountry, countries } = useDestinations()
const { getAllCategories, categories } = useCategories()
onMounted(() => {
    getAllCategories()
    getDestinationsOnCountry()
})
const showFilter = () => {
    if (document.getElementById('filter').style.display == "block")
        document.getElementById('filter').style.display = "none"
    else
        document.getElementById('filter').style.display = "block"
}

let active_country = ref(0)
let filter = ref({
    destination: '*',
    category: '*',
    page: 1
})
</script>
