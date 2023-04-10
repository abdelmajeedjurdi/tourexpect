<template>
    <div>
        <div
            v-if="isProgressing && percentage < 100"
            class="-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20"
            style="height: 100%"
        >
            <progress-bar :percentage="percentage" />
        </div>
        <div class="flex">
            <form class="space-y-6 w-full" @submit.prevent="savePackage">
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
                        <!-- title -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="title_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Name</label
                                >
                                <div class="mt-1">
                                    <input
                                        type="text"
                                        name="title_en"
                                        id="title_en"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.title_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="title_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Name</label
                                >
                                <div class="mt-1">
                                    <input
                                        dir="rtl"
                                        type="text"
                                        name="title_ar"
                                        id="title_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.title_ar"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- address -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="address_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Address</label
                                >
                                <div class="mt-1">
                                    <input
                                        type="text"
                                        name="address_en"
                                        id="address_en"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.address_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="address_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Address</label
                                >
                                <div class="mt-1">
                                    <input
                                        dir="rtl"
                                        type="text"
                                        name="address_ar"
                                        id="address_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.address_ar"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- description -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="description_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Description</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="description_en"
                                        id="description_en"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.description_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="description_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Description</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        name="description_ar"
                                        id="description_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.description_ar"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- Banner Highlights -->
                        <div class="flex justify-between">
                            <div
                                class="space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0"
                            >
                                <h3>Banner Highlights</h3>
                                <div class="flex justify-between">
                                    <div class="w-full me-2">
                                        <label
                                            for="title_en"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >English Title</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="title_en"
                                                id="title_en"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="
                                                    banner_highlight.title_en
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <label
                                            for="title_ar"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >Arabic Title</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                dir="rtl"
                                                type="text"
                                                name="title_ar"
                                                id="title_ar"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="
                                                    banner_highlight.title_ar
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="dropdown mt-4">
                                            <button
                                                class="rounded bg-gray-100 bg-no-repeat py-2 px-4 dark:bg-gray-800 flex items-center"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                @click="openImgs = true"
                                            >
                                                <img
                                                    class="mr-2 h-6 w-6 rounded-full"
                                                    :src="`/images/icons/${selected_img}`"
                                                    alt="Avatar image"
                                                />

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="w-10 text-gray-700 dark:text-gray-200"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </button>
                                            <ul
                                                id="component_id"
                                                class="dropdown-menu dark:dropdown-menu-dark"
                                                :class="
                                                    openImgs == true
                                                        ? 'show'
                                                        : 'hidden'
                                                "
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li
                                                    v-for="img in icons"
                                                    :key="img.id"
                                                >
                                                    <span
                                                        @click="
                                                            setHighlightImage(
                                                                img.image
                                                            )
                                                        "
                                                        class="dropdown-item dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer text-gray-200"
                                                    >
                                                        <img
                                                            class="h-6"
                                                            :src="
                                                                '/images/icons/' +
                                                                img.image
                                                            "
                                                            alt=""
                                                        />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    v-if="!is_editing"
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setBannerHighlight"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                                <button
                                    v-else
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setBannerHighlight"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    class="rounded"
                                    v-for="(
                                        ban_highlight, i
                                    ) in single_package.banner_highlights"
                                    :key="i"
                                >
                                    <div
                                        class="w-full rounded items-center p-1 bg-gray-400 text-black flex"
                                    >
                                        <div
                                            class="flex w-full justify-between"
                                        >
                                            <span class="">{{
                                                ban_highlight.title_en
                                            }}</span>
                                            <span>{{
                                                ban_highlight.title_ar
                                            }}</span>
                                        </div>
                                        <img
                                            class="h-6 mx-2"
                                            :src="
                                                '/images/icons/' +
                                                ban_highlight.img
                                            "
                                            alt=""
                                        />
                                        <div class="flex">
                                            <span
                                                class="cursor-pointer rotate-90"
                                                @click="editRow(i)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </span>
                                            <span
                                                class="cursor-pointer rotate-90"
                                                @click="deleteRow(i)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-6 text-red-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- single_package options -->
                        <div class="flex justify-between">
                            <div
                                class="space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0"
                            >
                                <div class="flex justify-between">
                                    <h3>Options</h3>
                                    <div class="flex items-center">
                                        <input
                                            id="is_from"
                                            type="checkbox"
                                            value=""
                                            name="bordered-checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                                            v-model="single_package.is_from"
                                        />
                                        <label
                                            for="is_from"
                                            class="py-2 cursor-pointer text-sm font-medium text-gray-200 mx-2 dark:text-gray-300"
                                            >Is From?</label
                                        >
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="w-1/4">
                                        <label
                                            for="title_en"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >English Title</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="title_en"
                                                id="title_en"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="
                                                    package_option.title_en
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="w-1/4 me-2">
                                        <label
                                            for="title_ar"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >Arabic Title</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                dir="rtl"
                                                type="text"
                                                name="title_ar"
                                                id="title_ar"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="
                                                    package_option.title_ar
                                                "
                                            />
                                        </div>
                                    </div>
                                    <!-- prices -->
                                    <div class="flex justify-between w-1/2">
                                        <div class="w-full">
                                            <label
                                                for="adult_price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                >Adult Price</label
                                            >
                                            <div class="mt-1">
                                                <input
                                                    type="number"
                                                    name="adult_price"
                                                    id="adult_price"
                                                    class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                    v-model="
                                                        package_option.adult_price
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <label
                                                for="child_price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                >Child Price</label
                                            >
                                            <div class="mt-1">
                                                <input
                                                    type="number"
                                                    name="child_price"
                                                    id="child_price"
                                                    class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                    v-model="
                                                        package_option.child_price
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <label
                                                for="infant_price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                >Infant Price</label
                                            >
                                            <div class="mt-1">
                                                <input
                                                    type="number"
                                                    name="infant_price"
                                                    id="infant_price"
                                                    class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                    v-model="
                                                        package_option.infant_price
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <label
                                                for="option_discount"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >
                                                Discount</label
                                            >
                                            <div class="mt-1 flex">
                                                <input
                                                    type="number"
                                                    name="option_discount"
                                                    id="option_discount"
                                                    class="block w-16 rounded-l-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                    v-model="
                                                        package_option.option_discount
                                                    "
                                                />
                                                <select
                                                    name="discount_type"
                                                    id="discount_type"
                                                    class="w-20 dark:bg-gray-700 rounded-r-md text-gray-700 dark:text-gray-200"
                                                    v-model="
                                                        package_option.option_discount_type
                                                    "
                                                >
                                                    <option
                                                        class=""
                                                        value="percentage"
                                                    >
                                                        %
                                                    </option>
                                                    <option
                                                        class="py-4"
                                                        value="amount"
                                                    >
                                                        $
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    v-if="!is_editing_option"
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setPackageOption"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                                <button
                                    v-else
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setPackageOption"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    class="rounded"
                                    v-for="(
                                        option, i
                                    ) in single_package.options"
                                    :key="i"
                                >
                                    <div
                                        class="w-full rounded items-center p-1 bg-gray-400 text-black flex"
                                    >
                                        <div
                                            class="flex w-full justify-between"
                                        >
                                            <span class="">{{
                                                option.title_en
                                            }}</span>
                                            <span>{{ option.title_ar }}</span>
                                            <span>{{
                                                option.adult_price
                                            }}</span>
                                            <span>{{
                                                option.child_price
                                            }}</span>
                                            <span>{{
                                                option.infant_price
                                            }}</span>
                                            <span>{{
                                                option.option_discount +
                                                " " +
                                                (option
                                                    .option_discount_type[0] ==
                                                "a"
                                                    ? "$"
                                                    : "% ")
                                            }}</span>
                                        </div>
                                        <div class="flex mx-2">
                                            <span
                                                class="cursor-pointer rotate-90"
                                                @click="editPackageOption(i)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </span>
                                            <span
                                                class="cursor-pointer rotate-90"
                                                @click="deletePackageOption(i)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-6 text-red-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Itinerary -->
                        <div class="flex justify-between">
                            <div
                                class="space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0"
                            >
                                <h3>Itinerary</h3>
                                <div class="flex justify-between">
                                    <div class="w-full me-2">
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="destination_title_en"
                                                id="destination_title_en"
                                                placeholder="English Title"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="destination.title_en"
                                            />
                                        </div>
                                        <div class="mt-1">
                                            <textarea
                                                rows="3"
                                                type="text"
                                                name="destination_include_en"
                                                id="destination_include_en"
                                                placeholder="English Description"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="
                                                    destination.description_en
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <div class="mt-1">
                                            <input
                                                dir="rtl"
                                                type="text"
                                                name="destination_title_ar"
                                                id="destination_title_ar"
                                                placeholder="Arabic Title"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="destination.title_ar"
                                            />
                                        </div>
                                        <div class="mt-1">
                                            <textarea
                                                rows="3"
                                                type="text"
                                                name="include_en"
                                                id="include_en"
                                                dir="rtl"
                                                placeholder="Arabic Description"
                                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                                v-model="
                                                    destination.description_ar
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    v-if="!is_itinerary_editing"
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setItinerary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                                <button
                                    v-else
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setItinerary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    class="rounded"
                                    v-for="(
                                        destination, i
                                    ) in single_package.itinerary"
                                    :key="i"
                                >
                                    <div
                                        class="w-full rounded items-center p-1 bg-gray-400 text-black flex"
                                    >
                                        <span
                                            class="mb-auto h-6 w-6 rounded-full text-center mr-2 border-2 border-blue-600 text-blue-600 items-center text-sm"
                                            >{{ i + 1 }}</span
                                        >
                                        <div
                                            class="flex w-full justify-between cursor-pointer"
                                            @click="
                                                opened_destination != i
                                                    ? (opened_destination = i)
                                                    : (opened_destination = -1)
                                            "
                                        >
                                            <div class="w-full">
                                                {{ destination.title_en }}
                                                <div
                                                    v-show="
                                                        opened_destination == i
                                                    "
                                                    class="w-full bg-gray-300 p-2 rounded mr-1"
                                                >
                                                    {{
                                                        destination.description_en
                                                    }}
                                                </div>
                                            </div>
                                            <div class="w-full text-right">
                                                {{ destination.title_ar }}
                                                <div
                                                    v-show="
                                                        opened_destination == i
                                                    "
                                                    class="w-full bg-gray-300 p-2 text-right rounded ml-1"
                                                >
                                                    {{
                                                        destination.description_ar
                                                    }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex mb-auto">
                                            <span
                                                class="cursor-pointer rotate-90"
                                                @click="editItineraryRow(i)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    />
                                                </svg>
                                            </span>
                                            <span
                                                class="cursor-pointer rotate-90"
                                                @click="deleteItineraryRow(i)"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-6 text-red-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- duration -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="duration_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Duration</label
                                >
                                <div class="mt-1">
                                    <input
                                        type="text"
                                        name="duration_en"
                                        id="duration_en"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.duration_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="duration_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Duration</label
                                >
                                <div class="mt-1">
                                    <input
                                        dir="rtl"
                                        type="text"
                                        name="duration_ar"
                                        id="duration_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.duration_ar"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- include -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="include_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Include</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="include_en"
                                        id="include_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.include_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="include_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Include</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="include_ar"
                                        id="include_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.include_ar"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- exclude -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="exclude_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Exclude</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="exclude_en"
                                        id="exclude_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.exclude_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="exclude_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Exclude</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="exclude_ar"
                                        id="exclude_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.exclude_ar"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="mt-2">
                            <h2>Gallery</h2>
                            <UploadImages @changed="handleImages" />
                        </div>
                        <div>
                            <p>
                                Note: After deleting image you can't retrieve it
                                back.
                            </p>

                            <div
                                class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between"
                            >
                                <div
                                    v-for="image in single_package.images"
                                    :key="image.id"
                                >
                                    <div
                                        class="bg-white rounded-lg overflow-hidden mb-10"
                                    >
                                        <div
                                            class="w-full flex justify-end z-20"
                                        >
                                            <span
                                                class="rounded-full p-1 transition-all duration-300 absolute"
                                            >
                                                <div class="btn-group dropend">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        class="duration-700 w-6 float-right cursor-pointer text-red-400 hover:bg-red-500 hover:text-white rounded-full"
                                                        @click="
                                                            deleteFile(image.id)
                                                        "
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </span>
                                        </div>
                                        <div>
                                            <img
                                                :src="
                                                    '/images/packages/' +
                                                    image.image
                                                "
                                                class="w-full h-48 object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="highlights_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Highlights</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="highlights_en"
                                        id="highlights_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.highlights_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="highlights_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Highlights</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="highlights_ar"
                                        id="highlights_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.highlights_ar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="information_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Information</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="information_en"
                                        id="information_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.information_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="information_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Information</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="information_ar"
                                        id="information_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.information_ar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="policy_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Booking Policy</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="policy_en"
                                        id="policy_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.policy_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="policy_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Booking Policy</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="policy_ar"
                                        id="policy_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.policy_ar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="timing_and_transfer_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Timing and Transfer</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="timing_and_transfer_en"
                                        id="timing_and_transfer_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="
                                            single_package.timing_and_transfer_en
                                        "
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="timing_and_transfer_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Timing and Transfer</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="timing_and_transfer_ar"
                                        id="timing_and_transfer_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="
                                            single_package.timing_and_transfer_ar
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="terms_and_bullet_sections_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Terms and Conditions</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="terms_and_bullet_sections_en"
                                        id="terms_and_bullet_sections_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="
                                            single_package.terms_and_bullet_sections_en
                                        "
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="terms_and_bullet_sections_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Terms and Conditions Policy</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="terms_and_bullet_sections_ar"
                                        id="terms_and_bullet_sections_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="
                                            single_package.terms_and_bullet_sections_ar
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label
                                    for="notes_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >English Notes</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        rows="10"
                                        type="text"
                                        name="notes_en"
                                        id="notes_en"
                                        placeholder="Separate it by lines"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.notes_en"
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <label
                                    for="notes_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >Arabic Notes</label
                                >
                                <div class="mt-1">
                                    <textarea
                                        dir="rtl"
                                        rows="10"
                                        type="text"
                                        placeholder="Separate it by lines"
                                        name="notes_ar"
                                        id="notes_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="single_package.notes_ar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                >
                    Update
                </button>
            </form>
            <div
                class="ml-3 bg-blue-400 dark:bg-gray-600 rounded w-96 text-center px-4 top-5"
                style="height: 112vh"
            >
                <div class="border-b border-gray-200 py-6">
                    <label
                        for="max_number_of_people"
                        class="block font-medium w-full text-left text-gray-700 dark:text-gray-200 mb-2"
                    >
                        Categories</label
                    >
                    <div id="filter-section-1">
                        <div class="space-y-4 h-28 overflow-y-scroll">
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
                                    v-model="single_package.category_ids"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    :for="category['name_en']"
                                    class="ml-3 text-sm text-white"
                                    >{{ category["name_en"] }}</label
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b border-gray-200 py-6">
                    <label
                        for="max_number_of_people"
                        class="block font-medium w-full text-left text-gray-700 dark:text-gray-200 mb-2"
                    >
                        Destinations</label
                    >
                    <div id="filter-section-1">
                        <div class="space-y-4 h-28 overflow-y-scroll">
                            <div
                                class="flex items-center"
                                v-for="destination in destinations"
                                :key="destination.id"
                            >
                                <input
                                    :id="destination['name_en']"
                                    :name="destination['name_en']"
                                    :value="destination.id"
                                    type="checkbox"
                                    v-model="single_package.destination_ids"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    :for="destination['name_en']"
                                    class="ml-3 text-sm text-white"
                                    >{{ destination["name_en"] }}</label
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full me-2 mt-2">
                    <label
                        for="max_number_of_people"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200"
                    >
                        Max number of people</label
                    >
                    <div class="mt-1">
                        <input
                            type="number"
                            name="max_number_of_people"
                            id="max_number_of_people"
                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                            v-model="single_package.max_number_of_people"
                        />
                    </div>
                </div>
                <div class="w-full me-2 mt-2">
                    <label
                        for="max_number_of_people"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200"
                    >
                        Source</label
                    >
                    <div class="mt-1">
                        <input
                            type="text"
                            name="source"
                            id="source"
                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                            v-model="single_package.source"
                        />
                    </div>
                </div>

                <div>
                    <div
                        class="flex w-full justify-start mt-2"
                        v-if="single_package.thumbnail != undefined"
                    >
                        <img
                            :src="
                                imagePreview != null
                                    ? imagePreview
                                    : '/images/packages/' +
                                      single_package.thumbnail
                            "
                            alt=""
                            class="figure-img img-fluid rounded"
                            style="max-height: 100px"
                        />
                    </div>

                    <div class="flex flex-col mt-2">
                        <input
                            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none hidden"
                            @change="onFileSelected"
                            type="file"
                            id="user-image"
                            accept="image/*"
                        />
                        <label
                            for="user-image"
                            class="w-100 flex justify-start"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-12 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>

                            <span class="my-auto text-gray-200"
                                >Change thumbnail</span
                            >
                        </label>
                    </div>
                </div>
                <div
                    class="flex items-center rounded border border-gray-600 w-full mx-auto mt-2 px-2"
                >
                    <input
                        id="active"
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                        v-model="single_package.active"
                    />
                    <label
                        for="active"
                        class="py-2 text-sm font-medium text-gray-200 mx-2 dark:text-gray-300"
                        >Active</label
                    >
                </div>
                <div class="w-full text-left mt-4">
                    <button
                        @click.prevent="savePackage"
                        class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import usePackages from "../../../composables/packages";
import useCategories from "../../../composables/categories";
import useDestinations from "../../../composables/destinations";
import { onMounted, reactive, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import UploadImages from "vue-upload-drop-images";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import ProgressBar from "../../../components/ProgressBar.vue";
import useGeneral from "../../../composables/general";
const props = defineProps({ id: String });
const { categories, getCategoriesOnSection } = useCategories();
const { destinations, getDestinations } = useDestinations();
const { icons, getIcons } = useGeneral();
let isProgressing = ref(false);
const {
    errors,
    single_package,
    percentage,
    getPackage,
    updatePackage,
    deleteProperty,
    addGallery,
    addFiles,
    destroyImage,
    destroyFile,
} = usePackages();
let Swal = useSwal();
let imagePreview = ref(null);
onMounted(async () => {
    await getCategoriesOnSection("packages");
    await getDestinations();
    await getPackage(props.id);
    getIcons();
});
const savePackage = async () => {
    isProgressing.value = true;
    await updatePackage(props.id, {
        form: single_package.value,
        file,
        properties: single_package.value.properties,
    });
    isProgressing.value = false;
};
const deleteFile = async (id) => {
    await destroyImage(id);
    await getPackage(props.id);
};
const handleImages = (images) => {
    addGallery(images);
};
const handleFiles = (files) => {
    addFiles(files);
};
let file = reactive(null);
function onFileSelected(event) {
    file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
        imagePreview.value = event.target.result;
    };
}
const selectCategory = (category_id) => {
    single_package.value.category_id = category_id;
};
const selectDestination = (destination_id) => {
    single_package.value.destination_id = destination_id;
};

let banner_highlight = ref({
    title_en: "",
    title_ar: "",
    img: "",
});

const setBannerHighlight = () => {
    if (!is_editing.value) {
        single_package.value.banner_highlights.push(banner_highlight.value);
        banner_highlight.value = {
            title_en: "",
            title_ar: "",
            img: "",
        };
        selected_img.value = "1.svg";
    } else {
        is_editing.value = false;
        banner_highlight.value = {
            title_en: "",
            title_ar: "",
            img: "",
        };
        selected_img.value = "1.svg";
    }
};
const deleteRow = (item) => {
    single_package.value.banner_highlights.splice(item, 1);
};
let is_editing = ref(false);
const editRow = (banner_highlight_id) => {
    is_editing.value = true;
    banner_highlight.value =
        single_package.value.banner_highlights[banner_highlight_id];
    selected_img.value =
        single_package.value.banner_highlights[banner_highlight_id].img;
};
let openImgs = ref(false);
let selected_img = ref("1.svg");
let highlight_imgs = reactive([
    { id: 1, name: "1.svg" },
    { id: 2, name: "2.svg" },
    { id: 3, name: "3.svg" },
]);
const setHighlightImage = (img) => {
    selected_img.value = img;
    banner_highlight.value.img = img;
};

// ---------

let package_option = ref({
    title_en: "",
    title_ar: "",
    adult_price: null,
    child_price: null,
    infant_price: null,
    option_discount: null,
    option_discount_type: "percentage",
});

const setPackageOption = () => {
    if (!is_editing_option.value) {
        single_package.value.options.push(package_option.value);
        package_option.value = {
            title_en: "",
            title_ar: "",
            adult_price: null,
            child_price: null,
            infant_price: null,
            option_discount: null,
            option_discount_type: "percentage",
        };
        selected_img.value = "1.svg";
    } else {
        is_editing_option.value = false;
        package_option.value = {
            title_en: "",
            title_ar: "",
            adult_price: null,
            child_price: null,
            infant_price: null,
            option_discount: null,
            option_discount_type: "percentage",
        };
        selected_img.value = "1.svg";
    }
};
const deletePackageOption = (package_option) => {
    single_package.value.options.splice(package_option, 1);
};
let is_editing_option = ref(false);
const editPackageOption = (option_id) => {
    is_editing_option.value = true;
    package_option.value = single_package.value.options[option_id];
};

// -------------------

let destination = ref({
    title_en: "",
    title_ar: "",
    description_en: "",
    description_ar: "",
});

const setItinerary = () => {
    if (!is_itinerary_editing.value) {
        single_package.value.itinerary.push(destination.value);
        destination.value = {
            title_en: "",
            title_ar: "",
            description_en: "",
            description_ar: "",
        };
    } else {
        is_itinerary_editing.value = false;
        destination.value = {
            title_en: "",
            title_ar: "",
            description_en: "",
            description_ar: "",
        };
    }
};
const deleteItineraryRow = (destination) => {
    single_package.value.itinerary.splice(destination, 1);
};
let is_itinerary_editing = ref(false);
const editItineraryRow = (destination_id) => {
    is_itinerary_editing.value = true;
    destination.value = single_package.value.itinerary[destination_id];
};
let opened_destination = ref(-1);
</script>
