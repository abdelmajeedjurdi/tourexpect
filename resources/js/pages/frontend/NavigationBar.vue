<template>
    <div class="bg-white  w-full fixed top-0 z-20 " style="font-family: 'Source Sans Pro', sans-serif; !important;">
        <div id="navbar" class="flex justify-between py-3 px-3 md:px-0 w-full max-w-6xl mx-auto">

            <div class="  w-52 py-2.5 flex items-center justify-between ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-gray-700 hover:text-black cursor-pointer"
                    viewBox="0 0 20 20" fill="currentColor" @click="showMenu(-1)">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd" />
                </svg>
                <router-link to="/" class="flex items-center">
                    <img src="/images/logo.svg" alt="logo" class="h-6 ">
                </router-link>
            </div>
            <div class="hidden lg:block" style="width: 85rem;">
                <nav class=" border-gray-200 sm:px-4 py-2.5 md:py-4 rounded   w-full hidden lg:block">
                    <div class=" flex items-center justify-center">

                        <!-- <div class="flex justify-between lg:justify-start w-full md:w-auto">
                        </div> -->
                        <div class=" absolute md:static w-full md:block md:w-auto left-0 right-0  z-20"
                            :class="mobileMinueClass" style="top:8rem ;" id="mobile-menu">
                            <ul
                                class=" flex flex-col mx-auto my-auto md:flex-row  md:mt-0 md:text-sm md:font-medium items-center">


                                <li class="w-full md:w-auto text-center  " v-for="(item, i) in menu">
                                    <div v-if="item.only_sidebar == false&&item.is_link==false" class="md:mx-4">
                                        <button @click="showMenu(item.id)"
                                            class="peer py-2 pr-4 pl-3 font-bold text-xl text-gray-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                                            {{
                                            item['name_'+lang]
                                            }}</button>

                                    </div>
                                    <div v-if="item.is_link==true" class="md:mx-4">
                                        <router-link :to="{name:item.slug}"
                                            class="peer py-2 pr-4 pl-3 font-bold text-xl text-gray-800  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                                            {{
                                            item['name_'+lang]
                                            }}</router-link>

                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class=" w-36 my-auto">
                <div class="flex  py-2.5 justify-end items-center">
                    <button @click="switchLanguage()"
                        class="bg-white text-xs border px-2   py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 h-8 ">
                        {{ lang == 'ar' ? 'English' : 'العربية' }}
                    </button>
                    <select name="curr" id="curr"
                        class="bg-white text-xs border w-20 m-1 md:m-0 py-1 md:py-1 rounded  shadow-md hover:shadow-sm duration-700 h-8 ">
                        <option value="USD">USD</option>
                        <option value="aed">AED</option>
                    </select>
                </div>
            </div>

        </div>

        <bread-crumb v-if="url.path !== '/'" />

        <div v-show="is_menu" class="top-0 z-40 absolute w-full h-screen  menu bg-black bg-opacity-25 hidden md:flex ">
            <div class=" flex" id="menu">
                <div class="w-80 h-screen border  bg-white">
                    <div class="w-full  py-10 flex items-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                        <router-link to="/" class="flex items-center justify-center">
                            <img src="/images/logo.svg" alt="logo" class="h-6 ">
                        </router-link>
                    </div>

                    <ul class=" space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center">
                        <li class="w-full md:w-auto" v-for="(item, i) in menu"
                            @mouseenter="item.is_link?'': setSubmenu(i)">
                            <router-link :to="'/' + item.slug" :class="menu_path_by_id.menu == i ? 'tour-blue' : ''"
                                class="block font-semibold text-2xl py-2 pr-4 pl-3 text-black  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                                {{ item['name_'+lang] }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div v-if="submenu.length" class="w-64  md:w-64 h-screen border bg-white  ">

                    <div class="w-full  py-10 text-center text-xl font-bold ">
                        <span>{{ $t(menu_title) }}</span>
                    </div>
                    <ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">
                        <li class="w-full flex justify-between md:w-auto" v-for="(item, j) in submenu"
                            @mouseenter="setSubSubMenu(j)">
                            <router-link :to="'/' + menu_slug + '/'+submenu_slug "
                                :class="menu_path_by_id.sub_menu == j ? 'tour-blue' : ''"
                                class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                                {{ item['name_'+lang] }}
                            </router-link>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 text-gray-600" fill="none"
                                v-if="item.items.length" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div class="w-64  md:w-64 h-screen border bg-white  " v-if="submenu_title.length">

                    <div class="w-full  py-10 text-center text-xl font-bold ">
                        <span>{{ submenu_title }}</span>
                    </div>
                    <ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">
                        <li class="w-full md:w-auto" v-for="(item, i) in subsubmenu['items']">
                            <router-link :to="'/' + menu_slug + '/' + submenu_slug + '/' + item['slug']"
                                class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                                {{ item['name_'+lang] }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <!-- Mobile Side bar -->
        <div v-show="mobile_menu" id="mobilemenu"
            class="top-0 z-40 absolute w-full h-screen menu flex bg-black bg-opacity-25 md:hidden">
            <div class="w-full h-screen border  bg-white">

                <div class="w-full  py-10 flex items-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>

                    <router-link to="/" class="flex items-center justify-center">
                        <img src="/images/logo.svg" alt="logo" class="h-6 ">
                    </router-link>
                </div>
                <ul class=" space-y-6 md:flex-row mx-20 md:mt-0 md:text-sm md:font-medium items-center">


                    <li class="w-full md:w-auto" v-for="(item, i) in menu" @click="setSubmenu(i)">

                        <button :class="menu_path_by_id.menu == i ? 'tour-blue' : ''"
                            class="block font-semibold text-xl py-2 pr-4 pl-3 text-black  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                            {{ item['name_'+lang] }}</button>

                    </li>
                </ul>
            </div>

            <div v-if="submenu.length" class="w-full  md:w-64 h-screen border bg-white z-20   absolute md:static">
                <div class="flex w-full justify-between mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6  text-gray-400 mx-2 hover:text-gray-500 cursor-pointer" @click="closeSubmenue"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="w-full  py-10 text-center text-xl font-bold ">
                    <span>{{ $t(menu_title) }}</span>
                </div>
                <ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">


                    <li class="w-full flex justify-between items-center md:w-auto" v-for="(item, j) in submenu"
                        @click="setSubSubMenu(j)">

                        <button :class="menu_path_by_id.sub_menu == j ? 'tour-blue' : ''"
                            class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                            {{ item['name_'+lang] }}

                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 text-gray-600" fill="none"
                            v-if="item.items.length" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>

                    </li>
                </ul>
            </div>

            <div v-if="subsubmenu.length" class="w-full  md:w-64 h-screen border bg-white z-30   absolute md:static  ">
                <div class="flex w-full justify-between mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6  text-gray-400 mx-2 hover:text-gray-500 cursor-pointer" @click="subsubmenu = []"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-400 mx-5 hover:text-gray-500 cursor-pointer " @click="closeMenu"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="w-full  py-10 text-center text-xl font-bold ">
                    <span>{{ submenu_title }}</span>
                </div>
                <ul class=" space-y-4 md:flex-row mx-6 md:mt-0 md:text-sm md:font-medium items-center">


                    <li class="w-full md:w-auto" v-for="(item, i) in subsubmenu">

                        <button
                            class="block   text-sm py-2 pr-4 pl-3 text-black border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:tour-blue md:p-0">
                            {{ $t(item) }}</button>

                    </li>
                </ul>
            </div>
        </div>

    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import useGeneral from '../../composables/general'

const { getDestinations, destinations } = useGeneral();
let url = ref(useRoute())
let lang = ref('');
const switchLanguage = () => {

    // if (process.server) {
    if (window.localStorage.getItem('lang') == 'en') {
        window.localStorage.setItem('lang', 'ar')
        lang.value = 'ar'
        window.location.reload();
    }
    // }
    else {
        localStorage.setItem('lang', 'en')
        lang.value = 'en'
        window.location.reload()
    }
}
// ********************************************
onMounted(async () => {
    lang.value = window.localStorage.getItem('lang');
    let specifiedElement = document.getElementById("menu");
    let specifiedElement3 = document.getElementById("mobilemenu");
    let specifiedElement2 = document.getElementById("navbar");
    document.addEventListener("click", (event) => {
        const isClickInside = specifiedElement.contains(event.target);
        const isClickInside2 = specifiedElement2.contains(event.target);
        const isClickInside3 = specifiedElement3.contains(event.target);

        if (!isClickInside && !isClickInside2 && !isClickInside3) {
            closeMenu()
            // isOptionsShow.value = false;
        }
    });
    await getDestinations();
    menu.value[0]['items'] = destinations.value
    menu.value[2]['items'] = destinations.value
});

let menu = ref([
    {
        id: 0,
        name_en: 'Destinations',
        name_ar: 'الوجهات',
        slug: 'destinations',
        only_sidebar: false,
        is_link: false,
        items: []
    },
    {
        id: 1,
        name_en: 'Packages',
        name_ar: 'الباقات',
        slug: 'packages',
        only_sidebar: false,
        is_link: true,
        items: [{ id: 0, name_en: '', items: [] }]
    },
    {
        id: 2,
        name_en: 'Tours',
        name_ar: 'الجولات',
        slug: 'tours',
        only_sidebar: false,
        is_link: false,
        items: [

        ]
    },
    {
        id: 3,
        name_en: 'Activities',
        name_ar: 'انشطة',
        slug: 'activities',
        is_link: true,
        only_sidebar: false, items: [{ id: 0, name_en: 'turkiye', items: ['trabzon', 'istanbul'] }]
    },
    {
        id: 4,
        name_en: 'Transfer',
        name_ar: 'التنقل',
        slug: 'transfer',
        is_link: true,
        only_sidebar: false, items: [{ id: 0, name_en: 'turkiye', items: ['trabzon', 'istanbul'] }]
    },
    {
        id: 6,
        name_en: 'Hotels & Resorts',
        name_ar: 'الفنادق والمنتجعات',
        slug: 'hotels-and-resorts',
        only_sidebar: true,
        is_link: true,
        items: []
    },
    {
        id: 7,
        name_en: 'Blogs',
        name_ar: 'المدونة',
        slug: 'blogs',
        only_sidebar: true,
        is_link: true,
        items: []
    }])
let submenu = ref([])
let subsubmenu = ref([])
let menu_title = ref('');
let menu_slug = ref('');
let submenu_title = ref('');
let submenu_slug = ref('');
let menu_path_by_id = ref({
    menu: -1,
    sub_menu: -1,
})
const setSubSubMenu = (i) => {

    menu_path_by_id.value.sub_menu = i
    console.log(menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu]['items'][0]);
    subsubmenu.value = menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu]
    console.log('test');
    submenu_title.value = menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu]['name_' + lang.value]
    console.log(menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu])
    submenu_slug.value = menu.value[menu_path_by_id.value.menu].items[menu_path_by_id.value.sub_menu]['slug']

}
const closeSubmenue = () => {
    menu_path_by_id.value.sub_menu = -1
    subsubmenu.value = []
    submenu.value = []
}

const setSubmenu = (i) => {
    submenu_title.value = ''
    submenu_slug.value = ''
    menu_path_by_id.value.menu = i
    subsubmenu.value = [];
    submenu.value = menu.value[i]['items']
    menu_title.value = menu.value[i]['name_en']
    menu_slug.value = menu.value[i]['slug']
}
let is_menu = ref(false)
let mobile_menu = ref(false)
const showMenu = (i) => {
    menu_path_by_id.value.menu = i
    is_menu.value = true
    mobile_menu.value = true
    if (i != -1)
        setSubmenu(i)
}
const closeMenu = () => {

    menu_path_by_id.value.menu = -1;
    menu_path_by_id.value.sub_menu = -1;

    submenu.value = [];
    subsubmenu.value = [];
    is_menu.value = false
    mobile_menu.value = false
}
</script>

<style type="text/css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

.st0 {
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: #00AEEF !important;
}

.st1 {
    fill: #283a97 !important;
}

.st2 {
    fill: #FF8200;
}

.router-link-active {
    color: #00AEEF
}
</style>
