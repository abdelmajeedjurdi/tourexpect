<template>
    <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
    >
        <ol class="carousel-indicators">
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner duration-500">
            <div
                class="carousel-item"
                v-for="(slide, i) in slides"
                :key="i"
                :class="i == active_slide ? 'active' : ''"
            >
                <img
                    :src="'/images/categories/' + slide.image"
                    alt="test"
                    class="slides w-full"
                />
                <div
                    class="absolute top-1 text-white d-md-block w-full p-10 sm:px-32 sm:py-20 lg:py-48 lg:px-72"
                    :class="lang == 'ar' ? 'text-right' : 'text-left'"
                >
                    <h5 class="text-3xl sm:text-5xl">
                        {{ slide["name_" + lang] }}
                    </h5>
                    <p class="text-xl sm:w-2/3 lg:w-1/2">
                        {{
                            slide["description_" + lang].substring(0, 150) +
                            (slide["description_" + lang].length > 150
                                ? "...."
                                : "")
                        }}
                    </p>
                    <router-link
                        :to="{
                            name: 'category',
                            params: {
                                slug: slide['slug'],
                                lang: lang == 'ar' ? 'ar' : '',
                            },
                        }"
                        class="bg-red-500 px-8 py-2 text-white rounded-2xl w-full"
                    >
                        {{ $t("more_details") }}</router-link
                    >
                </div>
            </div>
        </div>
        <span
            class="carousel-control-prev"
            role="button"
            data-slide="prev"
            @click="
                active_slide == 0
                    ? (active_slide = slides.length - 1)
                    : active_slide--
            "
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </span>
        <span
            class="carousel-control-next"
            role="button"
            data-slide="next"
            @click="
                active_slide == slides.length - 1
                    ? (active_slide = 0)
                    : active_slide++
            "
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </span>
    </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { inject } from "vue";
const props = defineProps({
    slides: Array,
});
let lang = inject("lang");
let active_slide = ref(0);
onMounted(() => {
    updateCount();
});
function updateCount() {
    if (active_slide.value == props.slides.length - 1) active_slide.value = 0;
    else active_slide.value++;
    setTimeout(updateCount, 5000);
}
</script>
<style>
.slides {
    height: 50vh;
}
@media only screen and (min-width: 900px) {
    .slides {
        height: 75vh !important;
    }
}
@media only screen and (min-width: 1300px) {
    .slides {
        height: 100vh !important;
    }
}
</style>
