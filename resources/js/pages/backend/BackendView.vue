<template>
    <div :class="{ dark: isDark }">
        <div
            class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white w-full"
        >
            <div
                class="fixed z-10 flex flex-col top-0 left-0 w-10 hover:w-52 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none sidebar"
            >
                <div class="">
                    <button
                        aria-hidden="true"
                        @click="toggleTheme"
                        class="mt-4 ml-1 group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                    >
                        <svg
                            v-if="isDark"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                            />
                        </svg>
                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
                >
                    <ul class="flex flex-col py-4 space-y-1 -ml-6">
                        <li class="px-5 hidden md:block">
                            <div class="flex flex-row items-center h-8">
                                <div
                                    class="text-sm font-light tracking-wide text-gray-400 uppercase"
                                >
                                    Main
                                </div>
                            </div>
                        </li>
                        <li class="px-5 hidden md:block">
                            <a href="/" target="_blank">
                                <div class="flex flex-row items-center h-8">
                                    <div
                                        class="text-sm font-light tracking-wide text-blue-400 uppercase"
                                    >
                                        Frontend
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'dashboard' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        ></path>
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Dashboard</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'categories.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Categories</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'destinations.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Destinations</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'countries.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Countries</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'tours.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Tours</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'packages.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Packages</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'activities.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Activities</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'visas.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Visas</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'hotels.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Hotels And Resorts</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'blogs.index' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Blogs</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'jobs' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Jobs</span
                                >
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'options' }"
                                class="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-gray-200 hover:text-white border-l-4 border-transparent hover:bg-blue-800 hover:border-blue-500 dark:hover:border-gray-800 pr-6e"
                            >
                                <span
                                    class="inline-flex justify-center items-center"
                                >
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
                                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="ml-2 text-sm tracking-wide truncate"
                                    >Option</span
                                >
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- ./Sidebar -->
            <div
                class="min-h-screen ml-10 dark:bg-gray-700 dark:text-gray-400 p-6"
            >
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
        let isDark =
            ref(JSON.parse(window.localStorage.getItem("dark"))) || false;
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
.dark .dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
    border-color: rgba(55, 65, 81);
}

.dark .dark\:dropdown-menu-dark {
    background-color: rgb(31, 41, 55);
    color: white;
}

.dark .dark\:.dropdown-item-dark {
    color: white !important;
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
    background-color: rgba(75, 85, 99) !important;
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
    color: rgba(229, 231, 235) !important;
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
