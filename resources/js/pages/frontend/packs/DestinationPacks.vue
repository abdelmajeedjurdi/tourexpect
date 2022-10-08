<template>
    <div class="bg-white w-full pt-16 px-3 md:px-0 max-w-6xl mx-auto">
        <h1>{{ destination }}</h1>
        <div class=" w-full">
            <div style="min-height:80vh ;"
                class=" grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between ">
                <div v-for="pack in packages" :key="pack.id">

                    <PackVue :pack="pack" />
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
import usePackages from "../../../composables/packages";
import Pagenation from "../../../components/Pagenation.vue";
import PackVue from "../../../components/Pack.vue";
const props = defineProps({ destination: String });
const { getDestinationPacks, packages, alter_pages } = usePackages();
const lang = inject('lang') || 'en'
let currentPage = ref(1)
onMounted(() => {
    getDestinationPacks(currentPage.value, props.destination)
})
const changePage = (page) => {
    currentPage.value = page
    getDestinationPacks(currentPage.value, props.destination)
}
watch(() => props.destination, (first, second) => {
    console.log(
        "Watch props.selected function called with args:",
        first,
        second
    );
    getDestinationPacks(currentPage.value, props.destination)
});
</script>
