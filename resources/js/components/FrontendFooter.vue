<template>

    <footer class=" bg-blue-900 w-full">
        <!-- first layer -->
        <div class="bg-indigo-50 w-full pt-1 pb-4">
            <div class="max-w-3xl mx-auto">


                <div class="w-full px-4">
                    <h1
                        class="text-xl md:text-3xl xl:text-3xl font-bold leading-10 text-gray-800  mb-2 text-center xl:text-left md:mt-0 mt-4">
                        Subscribe our Newsletter</h1>
                    <p class="text-base leading-normal text-gray-600 text-center xl:text-left">Whether
                        article
                        spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                    <div class="flex items-stretch mt-12 h-10 md:h-14">
                        <input
                            class="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800  w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
                            type="email" placeholder="Your Email" />
                        <button
                            class="w-32 rounded-r hover:bg-indigo-600 bg-indigo-700 text-base font-medium leading-none text-white uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- mid layer -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto ">
            <div>
                <img src="/images/footer-logo.svg" alt="footer logo" class="mx-7 mt-4">
                <p class="mx-7 text-white mt-2">
                    Your ideal partner in the middle east to discover Tourexpect wonders
                </p>
            </div>
            <div v-for="coulomn in menu_meue">
                <h3 class="text-white mx-7 pt-4 ">{{ coulomn['title_'+lang] }}</h3>
                <ul class="   w-full">
                    <li class=" w-full" v-for="link in coulomn['links']">
                        <router-link class="text-white" :to="link['slug']">{{ link['name_'+lang] }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- last layer -->
        <div class="w-full border-t border-b border-blue-500">
            <div
                class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 py-3 justify-center border-gray-600 max-w-6xl mx-auto ">
                <router-link class="text-white text-center" to="#">First Link</router-link>
                <router-link class="text-white text-center" to="#">Second Link</router-link>
                <router-link class="text-white text-center" to="#">Third Link</router-link>
                <router-link class="text-white text-center" to="#">Fourth Link</router-link>
                <router-link class="text-white text-center" to="#">Fifth Link</router-link>
                <router-link class="text-white text-center" to="#">Sixth Link</router-link>
            </div>
        </div>
        <div class="w-full  py-3 text-center text-white ">Copyright © 2021 . Powered by <span
                class="font-bold text-blue-300">Tourexpect</span> All rights reserved.</div>
    </footer>


</template>

<script setup>
import { inject, ref } from 'vue';

let lang = inject("lang");
const menu_meue = ref([
    {
        title_en: "Our Services",
        title_ar: "خدماتنا",
        links: [
            {
                name_en: "Packages",
                name_ar: "الباقات",
                slug: "#"
            },
            {
                name_en: "Tours",
                name_ar: "الجولات",
                slug: "#"
            },
            {
                name_en: "Activities",
                name_ar: "الأنشطة",
                slug: "#"
            },
            {
                name_en: "Transfer",
                name_ar: "التنقل",
                slug: "#"
            },
            {
                name_en: "Hotels & Resorts",
                name_ar: "النادق و المنتجعات",
                slug: "#"
            }
        ]
    },
    {
        title_en: "About Tourexpect",
        title_ar: "عن تورايكسبكت",
        links: [
            {
                name_en: "About Us",
                name_ar: "حولنا",
                slug: "#"
            },
            {
                name_en: "We Are Hiring",
                name_ar: "نحن نوظف",
                slug: "#"
            },
            {
                name_en: "Terms & Conditions",
                name_ar: "الشروط والأحكام",
                slug: "#"
            },
            {
                name_en: "Privicy Policies",
                name_ar: "سياسات الخصوصية",
                slug: "#"
            },
            {
                name_en: "Support",
                name_ar: "الدعم",
                slug: "#"
            }
        ]
    },
    {
        title_en: "Our Links",
        title_ar: "روابطنا",
        links: [
            {
                name_en: "First Link",
                slug: "#"
            },
            {
                name_en: "Second Link",
                slug: "#"
            },
            {
                name_en: "Third Link",
                slug: "#"
            },
            {
                name_en: "Fourth Link",
                slug: "#"
            },
            {
                name_en: "Fifth Link",
                slug: "#"
            }
        ]
    }
]
)
</script>
