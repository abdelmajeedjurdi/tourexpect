
<template>
    <div :class="{ dark: isDark }">
        <div class="
        min-h-screen
        flex flex-col flex-auto flex-shrink-0
        antialiased
        bg-white
        dark:bg-gray-700
        text-black
        dark:text-white
        w-full
      ">
            <div class="
          fixed
          z-10
          flex flex-col
          top-0
          left-0
          w-10
          hover:w-52 hover:bg-white
          bg-blue-900
          dark:bg-gray-900
          h-full
          text-white
          transition-all
          duration-300
          border-none
          sidebar
        ">
                <div class="
            overflow-y-auto overflow-x-hidden
            flex flex-col
            justify-between
            flex-grow
          ">
                    <ul class="flex flex-col py-4 space-y-1 -ml-6">
                        <li class="px-5 hidden md:block">
                            <div class="flex flex-row items-center h-8">
                                <div class="
                    text-sm
                    font-light
                    tracking-wide
                    text-gray-400
                    uppercase
                  ">
                                    Main
                                </div>
                            </div>
                        </li>
                        <li>
                            <router-link :to="{ name: 'dashboard' }" class="
                  relative
                  flex flex-row
                  items-center
                  h-11
                  focus:outline-none
                  hover:bg-blue-800
                  dark:hover:bg-gray-600
                  text-white-600
                  hover:text-white-800
                  border-l-4 border-transparent
                  hover:border-blue-500
                  dark:hover:border-gray-800
                  pr-6e
                  dark:text-gray-200
                ">
                                <span class="inline-flex justify-center items-center">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'categories.index' }" class="
                  relative
                  flex flex-row
                  items-center
                  h-11
                  focus:outline-none
                  hover:bg-blue-800
                  dark:hover:bg-gray-600
                  text-white-600
                  hover:text-white-800
                  border-l-4 border-transparent
                  hover:border-blue-500
                  dark:hover:border-gray-800
                  pr-6e
                  dark:text-gray-200
                ">
                                <span class="inline-flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Categories</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'tours.index' }" class="
                  relative
                  flex flex-row
                  items-center
                  h-11
                  focus:outline-none
                  hover:bg-blue-800
                  dark:hover:bg-gray-600
                  text-white-600
                  hover:text-white-800
                  border-l-4 border-transparent
                  hover:border-blue-500
                  dark:hover:border-gray-800
                  pr-6e
                  dark:text-gray-200
                ">
                                <span class="inline-flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm tracking-wide truncate">Tours</span>
                            </router-link>
                        </li>
                    </ul>
                    <p class="mb-14 px-5 py-3 md:block text-center text-xs">
                        Created By Edo Khudeeda eido.khudyda@gmail.com
                    </p>
                </div>
            </div>
            <!-- ./Sidebar -->
            <div class="min-h-screen ml-10 dark:bg-gray-700 dark:text-gray-400 p-6">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script language="Javascript">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
    components: {},
    setup() {
        let isDark = ref(getTheme());
        function getTheme() {
            if (window.localStorage.getItem("dark")) {
                return JSON.parse(window.localStorage.getItem("dark"));
            }
            return (
                !!window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            );
        }
        function setTheme(value) {
            window.localStorage.setItem("dark", value);
        }
        function toggleTheme() {
            isDark.value = !isDark.value;
            setTheme(isDark.value);
        }
        return {
            loading: true,
            isDark,
            toggleTheme,
            setTheme,
        };
    },
};
</script>

<style>
/* Compiled dark classes from Tailwind */
.dark .dark\:divide-gray-700> :not([hidden])~ :not([hidden]) {
    border-color: rgba(55, 65, 81);
}

.dark .dark\:bg-gray-50 {
    background-color: rgba(249, 250, 251);
}

.dark .dark\:bg-gray-100 {
    background-color: rgba(243, 244, 246);
}

.dark .dark\:bg-gray-600 {
    background-color: rgba(75, 85, 99);
}

.dark .dark\:bg-gray-700 {
    background-color: rgba(55, 65, 81);
}

.dark .dark\:bg-gray-800 {
    background-color: rgba(31, 41, 55);
}

.dark .dark\:bg-gray-900 {
    background-color: rgba(17, 24, 39);
}

.dark .dark\:bg-red-700 {
    background-color: rgba(185, 28, 28);
}

.dark .dark\:bg-green-700 {
    background-color: rgba(4, 120, 87);
}

.dark .dark\:hover\:bg-gray-200:hover {
    background-color: rgba(229, 231, 235);
}

.dark .dark\:hover\:bg-gray-600:hover {
    background-color: rgba(75, 85, 99);
}

.dark .dark\:hover\:bg-gray-700:hover {
    background-color: rgba(55, 65, 81);
}

.dark .dark\:hover\:bg-gray-900:hover {
    background-color: rgba(17, 24, 39);
}

.dark .dark\:border-gray-100 {
    border-color: rgba(243, 244, 246);
}

.dark .dark\:border-gray-400 {
    border-color: rgba(156, 163, 175);
}

.dark .dark\:border-gray-500 {
    border-color: rgba(107, 114, 128);
}

.dark .dark\:border-gray-600 {
    border-color: rgba(75, 85, 99);
}

.dark .dark\:border-gray-700 {
    border-color: rgba(55, 65, 81);
}

.dark .dark\:border-gray-900 {
    border-color: rgba(17, 24, 39);
}

.dark .dark\:hover\:border-gray-800:hover {
    border-color: rgba(31, 41, 55);
}

.dark .dark\:text-white {
    color: rgba(255, 255, 255);
}

.dark .dark\:text-gray-50 {
    color: rgba(249, 250, 251);
}

.dark .dark\:text-gray-100 {
    color: rgba(243, 244, 246);
}

.dark .dark\:text-gray-200 {
    color: rgba(229, 231, 235);
}

.dark .dark\:text-gray-400 {
    color: rgba(156, 163, 175);
}

.dark .dark\:text-gray-500 {
    color: rgba(107, 114, 128);
}

.dark .dark\:text-gray-700 {
    color: rgba(55, 65, 81);
}

.dark .dark\:text-gray-800 {
    color: rgba(31, 41, 55);
}

.dark .dark\:text-red-100 {
    color: rgba(254, 226, 226);
}

.dark .dark\:text-green-100 {
    color: rgba(209, 250, 229);
}

.dark .dark\:text-blue-400 {
    color: rgba(96, 165, 250);
}

.dark .group:hover .dark\:group-hover\:text-gray-500 {
    color: rgba(107, 114, 128);
}

.dark .group:focus .dark\:group-focus\:text-gray-700 {
    color: rgba(55, 65, 81);
}

.dark .dark\:hover\:text-gray-100:hover {
    color: rgba(243, 244, 246);
}

.dark .dark\:hover\:text-blue-500:hover {
    color: rgba(59, 130, 246);
}

/* Custom style */
.header-right {
    width: calc(100% - 3.5rem);
}

.sidebar:hover {
    width: 16rem;
}

@media only screen and (min-width: 768px) {
    .header-right {
        width: calc(100% - 16rem);
    }
}

.ag-theme-alpine .ag-root-wrapper {
    background-color: transparent !important;
}

.ag-row {
    background-color: transparent !important;
}

.ag-center-cols-container {
    width: 100% !important;
}

a {
    text-decoration: none;
}
</style>
