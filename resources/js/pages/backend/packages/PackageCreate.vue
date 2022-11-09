<template>
    <div>
        <div v-if="errors">
            <div v-for="(v, k) in errors" :key="k" class="
                    bg-red-500
                    text-white
                    rounded
                    font-bold
                    mb-4
                    shadow-lg
                    py-2
                    px-4
                    pr-0
                ">
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div>
        <div v-if="isProgressing && percentage < 100" class="-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20"
            style="height: 100%">
            <progress-bar :percentage="percentage" />
        </div>
        <div class="flex">

            <form class="space-y-6 w-full" @submit.prevent="savePackage">
                <h1>Package Create</h1>
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="title_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Title</label>
                                <div class="mt-1">
                                    <input type="text" name="title_en" id="title_en" class="
                                block
                                mt-1
                                w-full
                                rounded-md
                                border-gray-500
                                shadow-sm
                                focus:border-indigo-300
                                focus:ring
                                focus:ring-indigo-200
                                focus:ring-opacity-50
                                dark:bg-gray-800
                                " v-model="form.title_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="title_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Title</label>
                                <div class="mt-1">
                                    <input dir="rtl" type="text" name="title_ar" id="title_ar" class="
                                        block
                                        mt-1
                                        w-full
                                        rounded-md
                                        border-gray-500
                                        shadow-sm
                                        focus:border-indigo-300
                                        focus:ring
                                        focus:ring-indigo-200
                                        focus:ring-opacity-50
                                        dark:bg-gray-800
                                        " v-model="form.title_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="address_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Address</label>
                                <div class="mt-1">
                                    <input type="text" name="address_en" id="address_en" class="
                                                                                            block
                                                                                            mt-1
                                                                                            w-full
                                                                                            rounded-md
                                                                                            border-gray-500
                                                                                            shadow-sm
                                                                                            focus:border-indigo-300
                                                                                            focus:ring
                                                                                            focus:ring-indigo-200
                                                                                            focus:ring-opacity-50
                                                                                            dark:bg-gray-800
                                                                                            "
                                        v-model="form.address_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="address_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Address</label>
                                <div class="mt-1">
                                    <input dir="rtl" type="text" name="address_ar" id="address_ar" class="
                            block
                            mt-1
                            w-full
                            rounded-md
                            border-gray-500
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                            dark:bg-gray-800
                            " v-model="form.address_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="description_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Description</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="description_en" id="description_en" class="
                                            block
                                            mt-1
                                            w-full
                                            rounded-md
                                            border-gray-500
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
                                            dark:bg-gray-800
                                            " v-model="form.description_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="description_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Description</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" name="description_ar" id="description_ar"
                                        class="
                                            block
                                            mt-1
                                            w-full
                                            rounded-md
                                            border-gray-500
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
                                            dark:bg-gray-800
                                            " v-model="form.description_ar" />
                                </div>
                            </div>
                        </div>
                        <!-- Banner Highlights -->
                        <div class="flex justify-between">
                            <div class="space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0">
                                <h3>Banner Highlights</h3>
                                <div class="flex justify-between">
                                    <div class="w-full me-2">
                                        <label for="title_en"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                            Title</label>
                                        <div class="mt-1">
                                            <input type="text" name="title_en" id="title_en" class="
                                              block
                                              mt-1
                                              w-full
                                              rounded-md
                                              border-gray-500
                                              shadow-sm
                                              focus:border-indigo-300
                                              focus:ring
                                              focus:ring-indigo-200
                                              focus:ring-opacity-50
                                              dark:bg-gray-800
                                            " v-model="banner_highlight.title_en" />
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <label for="title_ar"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                            Title</label>
                                        <div class="mt-1">
                                            <input dir="rtl" type="text" name="title_ar" id="title_ar" class="
                                              block
                                              mt-1
                                              w-full
                                              rounded-md
                                              border-gray-500
                                              shadow-sm
                                              focus:border-indigo-300
                                              focus:ring
                                              focus:ring-indigo-200
                                              focus:ring-opacity-50
                                              dark:bg-gray-800
                                            " v-model="banner_highlight.title_ar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="dropdown mt-4">
                                            <button
                                                :style="`background-image: url(/images/banner_highlights/${selected_img})`"
                                                class="rounded py-2 bg-gray-100 dropdown-toggle bg-no-repeat w-20 dark:bg-gray-800"
                                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false" @click="openImgs = true">
                                            </button>
                                            <ul id="component_id" class="dropdown-menu dark:dropdown-menu-dark"
                                                :class="openImgs == true ? 'show' : 'hidden'"
                                                aria-labelledby="dropdownMenuButton1">
                                                <li v-for="img in highlight_imgs" :key="img.id">
                                                    <span @click="setHighlightImage(img.name)"
                                                        class="dropdown-item dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer text-gray-200">
                                                        <img class="h-6" :src="'/images/banner_highlights/' + img.name"
                                                            alt="">
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <button v-if="!is_editing" type="button" class="
                                        px-6
                                        py-1
                                        bg-green-400
                                        rounded-lg
                                        text-blue-600
                                        hover:bg-green-300
                                        duration-300
                                      " @click="setBannerHighlight">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                                <button v-else type="button" class="
                                        px-6
                                        py-1
                                        bg-green-400
                                        rounded-lg
                                        text-blue-600
                                        hover:bg-green-300
                                        duration-300
                                      " @click="setBannerHighlight">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                                <div class="rounded" v-for="(ban_highlight, i) in form.banner_highlights" :key="i">

                                    <div class="w-full rounded items-center p-1 bg-gray-400 text-black flex ">
                                        <div class="flex w-full justify-between">
                                            <span class="">{{ ban_highlight.title_en }}</span>
                                            <span>{{ ban_highlight.title_ar }}</span>
                                        </div>
                                        <img class="h-6 mx-2" :src="'/images/banner_highlights/' + ban_highlight.img"
                                            alt="">
                                        <div class="flex">
                                            <span class="cursor-pointer rotate-90" @click="editRow(i)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </span>
                                            <span class="cursor-pointer rotate-90" @click="deleteRow(i)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-red-500"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- package options -->
                        <div class="flex justify-between">
                            <div class="space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0">
                                <div class="flex justify-between">
                                    <h3>Options</h3>
                                    <div class="flex items-center ">
                                        <input id="is_from" type="checkbox" value="" name="bordered-checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"
                                            v-model="form.is_from">
                                        <label for="is_from"
                                            class="py-2 cursor-pointer text-sm font-medium text-gray-200 mx-2 dark:text-gray-300">Is
                                            From?</label>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="w-1/4 ">
                                        <label for="title_en"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                            Title</label>
                                        <div class="mt-1">
                                            <input type="text" name="title_en" id="title_en" class="
                                                                      block
                                                                      mt-1
                                                                      w-full
                                                                      rounded-md
                                                                      border-gray-500
                                                                      shadow-sm
                                                                      focus:border-indigo-300
                                                                      focus:ring
                                                                      focus:ring-indigo-200
                                                                      focus:ring-opacity-50
                                                                      dark:bg-gray-800
                                                                    " v-model="package_option.title_en" />
                                        </div>
                                    </div>
                                    <div class="w-1/4 me-2">
                                        <label for="title_ar"
                                            class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                            Title</label>
                                        <div class="mt-1">
                                            <input dir="rtl" type="text" name="title_ar" id="title_ar" class="
                                                                      block
                                                                      mt-1
                                                                      w-full
                                                                      rounded-md
                                                                      border-gray-500
                                                                      shadow-sm
                                                                      focus:border-indigo-300
                                                                      focus:ring
                                                                      focus:ring-indigo-200
                                                                      focus:ring-opacity-50
                                                                      dark:bg-gray-800
                                                                    " v-model="package_option.title_ar" />
                                        </div>
                                    </div>
                                    <!-- prices -->
                                    <div class="flex justify-between w-1/2">

                                        <div class="w-full">
                                            <label for="adult_price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200">Adult
                                                Price</label>
                                            <div class="mt-1">
                                                <input type="number" name="adult_price" id="adult_price" class="
                                                                                                              block
                                                                                                              mt-1
                                                                                                              w-full
                                                                                                              rounded-md
                                                                                                              border-gray-500
                                                                                                              shadow-sm
                                                                                                              focus:border-indigo-300
                                                                                                              focus:ring
                                                                                                              focus:ring-indigo-200
                                                                                                              focus:ring-opacity-50
                                                                                                              dark:bg-gray-800
                                                                                                            "
                                                    v-model="package_option.adult_price" />
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <label for="child_price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200">Child
                                                Price</label>
                                            <div class="mt-1">
                                                <input type="number" name="child_price" id="child_price"
                                                    class="
                                                                                                                                                  block
                                                                                                                                                  mt-1
                                                                                                                                                  w-full
                                                                                                                                                  rounded-md
                                                                                                                                                  border-gray-500
                                                                                                                                                  shadow-sm
                                                                                                                                                  focus:border-indigo-300
                                                                                                                                                  focus:ring
                                                                                                                                                  focus:ring-indigo-200
                                                                                                                                                  focus:ring-opacity-50
                                                                                                                                                  dark:bg-gray-800
                                                                                                                                                "
                                                    v-model="package_option.child_price" />
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <label for="infant_price"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200">Infant
                                                Price</label>
                                            <div class="mt-1">
                                                <input type="number" name="infant_price" id="infant_price"
                                                    class="
                                                                                                                                                  block
                                                                                                                                                  mt-1
                                                                                                                                                  w-full
                                                                                                                                                  rounded-md
                                                                                                                                                  border-gray-500
                                                                                                                                                  shadow-sm
                                                                                                                                                  focus:border-indigo-300
                                                                                                                                                  focus:ring
                                                                                                                                                  focus:ring-indigo-200
                                                                                                                                                  focus:ring-opacity-50
                                                                                                                                                  dark:bg-gray-800
                                                                                                                                                "
                                                    v-model="package_option.infant_price" />
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <label for="option_discount"
                                                class="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                                Discount</label>
                                            <div class="mt-1 flex">
                                                <input type="number" name="option_discount" id="option_discount" class="
                                                            block
                                                            w-16
                                                            rounded-l-md
                                                            border-gray-500
                                                            shadow-sm
                                                            focus:border-indigo-300
                                                            focus:ring
                                                            focus:ring-indigo-200
                                                            focus:ring-opacity-50
                                                            dark:bg-gray-800
                                                        " v-model="package_option.option_discount" />
                                                <select name="discount_type" id="discount_type"
                                                    class="w-20 dark:bg-gray-700 rounded-r-md text-gray-700 dark:text-gray-200"
                                                    v-model="package_option.option_discount_type">
                                                    <option class="" value="percentage">%</option>
                                                    <option class="py-4" value="amount">$</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <button v-if="!is_editing_option" type="button" class="
                                                                px-6
                                                                py-1
                                                                bg-green-400
                                                                rounded-lg
                                                                text-blue-600
                                                                hover:bg-green-300
                                                                duration-300
                                                              " @click="setPackageOption">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                                <button v-else type="button" class="
                                                                px-6
                                                                py-1
                                                                bg-green-400
                                                                rounded-lg
                                                                text-blue-600
                                                                hover:bg-green-300
                                                                duration-300
                                                              " @click="setPackageOption">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                                <div class="rounded" v-for="(option, i) in form.options" :key="i">

                                    <div class="w-full rounded items-center p-1 bg-gray-400 text-black flex ">
                                        <div class="flex w-full justify-between">
                                            <span class="">{{ option.title_en }}</span>
                                            <span>{{ option.title_ar }}</span>
                                            <span>{{ option.adult_price }}</span>
                                            <span>{{ option.child_price }}</span>
                                            <span>{{ option.infant_price }}</span>
                                            <span>{{ option.option_discount + ' '
                                                    + (option.option_discount_type[0] == 'a' ? '$' : '% ')
                                            }}</span>
                                        </div>
                                        <div class="flex mx-2">
                                            <span class="cursor-pointer rotate-90" @click="editPackageOption(i)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </span>
                                            <span class="cursor-pointer rotate-90" @click="deletePackageOption(i)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 text-red-500"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="itinerary_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Itinerary</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="itinerary_en" id="itinerary_en"
                                        placeholder="Separate it by lines" class="
                  block
                  mt-1
                  w-full
                  rounded-md
                  border-gray-500
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                  dark:bg-gray-800
                " v-model="form.itinerary_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="itinerary_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Itinerary</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="itinerary_ar" id="itinerary_ar" class="
                                                                        block
                                                                        mt-1
                                                                        w-full
                                                                        rounded-md
                                                                        border-gray-500
                                                                        shadow-sm
                                                                        focus:border-indigo-300
                                                                        focus:ring
                                                                        focus:ring-indigo-200
                                                                        focus:ring-opacity-50
                                                                        dark:bg-gray-800
                                                                        " v-model="form.itinerary_ar" />
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="duration_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Duration</label>
                                <div class="mt-1">
                                    <input type="text" name="duration_en" id="duration_en" class="
                                                        block
                                                        mt-1
                                                        w-full
                                                        rounded-md
                                                        border-gray-500
                                                        shadow-sm
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        dark:bg-gray-800
                                                        " v-model="form.duration_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="duration_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Duration</label>
                                <div class="mt-1">
                                    <input dir="rtl" type="text" name="duration_ar" id="duration_ar" class="
                            block
                            mt-1
                            w-full
                            rounded-md
                            border-gray-500
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                            dark:bg-gray-800
                            " v-model="form.duration_ar" />
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="include_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Include</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="include_en" id="include_en"
                                        placeholder="Separate it by lines" class="
                                            block
                                            mt-1
                                            w-full
                                            rounded-md
                                            border-gray-500
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50
                                            dark:bg-gray-800
                                            " v-model="form.include_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="include_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Include</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="include_ar" id="include_ar" class="
                                                                        block
                                                                        mt-1
                                                                        w-full
                                                                        rounded-md
                                                                        border-gray-500
                                                                        shadow-sm
                                                                        focus:border-indigo-300
                                                                        focus:ring
                                                                        focus:ring-indigo-200
                                                                        focus:ring-opacity-50
                                                                        dark:bg-gray-800
                                                                        " v-model="form.include_ar" />
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="exclude_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Exclude</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="exclude_en" id="exclude_en"
                                        placeholder="Separate it by lines" class="
                                                                                    block
                                                                                    mt-1
                                                                                    w-full
                                                                                    rounded-md
                                                                                    border-gray-500
                                                                                    shadow-sm
                                                                                    focus:border-indigo-300
                                                                                    focus:ring
                                                                                    focus:ring-indigo-200
                                                                                    focus:ring-opacity-50
                                                                                    dark:bg-gray-800
                                                                                    " v-model="form.exclude_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="exclude_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Exclude</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="exclude_ar" id="exclude_ar" class="
                                                                        block
                                                                        mt-1
                                                                        w-full
                                                                        rounded-md
                                                                        border-gray-500
                                                                        shadow-sm
                                                                        focus:border-indigo-300
                                                                        focus:ring
                                                                        focus:ring-indigo-200
                                                                        focus:ring-opacity-50
                                                                        dark:bg-gray-800
                                                                        " v-model="form.exclude_ar" />
                                </div>
                            </div>
                        </div>

                        <div class="mt-2">
                            <h2>Gallery</h2>
                            <UploadImages @changed="handleImages" />
                        </div>

                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="highlights_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Highlights</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="highlights_en" id="highlights_en"
                                        placeholder="Separate it by lines" class="
                                                                    block
                                                                    mt-1
                                                                    w-full
                                                                    rounded-md
                                                                    border-gray-500
                                                                    shadow-sm
                                                                    focus:border-indigo-300
                                                                    focus:ring
                                                                    focus:ring-indigo-200
                                                                    focus:ring-opacity-50
                                                                    dark:bg-gray-800
                                                                    " v-model="form.highlights_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="highlights_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Highlights</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="highlights_ar" id="highlights_ar" class="
                                                                                                block
                                                                                                mt-1
                                                                                                w-full
                                                                                                rounded-md
                                                                                                border-gray-500
                                                                                                shadow-sm
                                                                                                focus:border-indigo-300
                                                                                                focus:ring
                                                                                                focus:ring-indigo-200
                                                                                                focus:ring-opacity-50
                                                                                                dark:bg-gray-800
                                                                                                "
                                        v-model="form.highlights_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="information_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Information</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="information_en" id="information_en"
                                        placeholder="Separate it by lines" class="
                                                                    block
                                                                    mt-1
                                                                    w-full
                                                                    rounded-md
                                                                    border-gray-500
                                                                    shadow-sm
                                                                    focus:border-indigo-300
                                                                    focus:ring
                                                                    focus:ring-indigo-200
                                                                    focus:ring-opacity-50
                                                                    dark:bg-gray-800
                                                                    " v-model="form.information_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="information_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Information</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="information_ar" id="information_ar" class="
                                                                                                block
                                                                                                mt-1
                                                                                                w-full
                                                                                                rounded-md
                                                                                                border-gray-500
                                                                                                shadow-sm
                                                                                                focus:border-indigo-300
                                                                                                focus:ring
                                                                                                focus:ring-indigo-200
                                                                                                focus:ring-opacity-50
                                                                                                dark:bg-gray-800
                                                                                                "
                                        v-model="form.information_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="policy_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English Booking
                                    Policy</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="policy_en" id="policy_en"
                                        placeholder="Separate it by lines" class="
                                                                    block
                                                                    mt-1
                                                                    w-full
                                                                    rounded-md
                                                                    border-gray-500
                                                                    shadow-sm
                                                                    focus:border-indigo-300
                                                                    focus:ring
                                                                    focus:ring-indigo-200
                                                                    focus:ring-opacity-50
                                                                    dark:bg-gray-800
                                                                    " v-model="form.policy_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="policy_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic Booking
                                    Policy</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="policy_ar" id="policy_ar" class="
                                                                                                block
                                                                                                mt-1
                                                                                                w-full
                                                                                                rounded-md
                                                                                                border-gray-500
                                                                                                shadow-sm
                                                                                                focus:border-indigo-300
                                                                                                focus:ring
                                                                                                focus:ring-indigo-200
                                                                                                focus:ring-opacity-50
                                                                                                dark:bg-gray-800
                                                                                                "
                                        v-model="form.policy_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="timing_and_transfer_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Timing and Transfer</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="timing_and_transfer_en"
                                        id="timing_and_transfer_en" placeholder="Separate it by lines" class="
                                                                    block
                                                                    mt-1
                                                                    w-full
                                                                    rounded-md
                                                                    border-gray-500
                                                                    shadow-sm
                                                                    focus:border-indigo-300
                                                                    focus:ring
                                                                    focus:ring-indigo-200
                                                                    focus:ring-opacity-50
                                                                    dark:bg-gray-800
                                                                    " v-model="form.timing_and_transfer_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="timing_and_transfer_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Timing and Transfer</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="timing_and_transfer_ar" id="timing_and_transfer_ar" class="
                                                                                                block
                                                                                                mt-1
                                                                                                w-full
                                                                                                rounded-md
                                                                                                border-gray-500
                                                                                                shadow-sm
                                                                                                focus:border-indigo-300
                                                                                                focus:ring
                                                                                                focus:ring-indigo-200
                                                                                                focus:ring-opacity-50
                                                                                                dark:bg-gray-800
                                                                                                "
                                        v-model="form.timing_and_transfer_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="terms_and_conditions_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Terms and Conditions</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="terms_and_conditions_en"
                                        id="terms_and_conditions_en" placeholder="Separate it by lines" class="
                                                                                            block
                                                                                            mt-1
                                                                                            w-full
                                                                                            rounded-md
                                                                                            border-gray-500
                                                                                            shadow-sm
                                                                                            focus:border-indigo-300
                                                                                            focus:ring
                                                                                            focus:ring-indigo-200
                                                                                            focus:ring-opacity-50
                                                                                            dark:bg-gray-800
                                                                                            "
                                        v-model="form.terms_and_conditions_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="terms_and_conditions_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Terms and Conditions Policy</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="terms_and_conditions_ar" id="terms_and_conditions_ar"
                                        class="
                                                                                                                        block
                                                                                                                        mt-1
                                                                                                                        w-full
                                                                                                                        rounded-md
                                                                                                                        border-gray-500
                                                                                                                        shadow-sm
                                                                                                                        focus:border-indigo-300
                                                                                                                        focus:ring
                                                                                                                        focus:ring-indigo-200
                                                                                                                        focus:ring-opacity-50
                                                                                                                        dark:bg-gray-800
                                                                                                                        " v-model="form.terms_and_conditions_ar" />
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="notes_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Notes</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="notes_en" id="notes_en"
                                        placeholder="Separate it by lines" class="
                                                                                block
                                                                                mt-1
                                                                                w-full
                                                                                rounded-md
                                                                                border-gray-500
                                                                                shadow-sm
                                                                                focus:border-indigo-300
                                                                                focus:ring
                                                                                focus:ring-indigo-200
                                                                                focus:ring-opacity-50
                                                                                dark:bg-gray-800
                                                                                " v-model="form.notes_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="notes_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Notes</label>
                                <div class="mt-1">
                                    <textarea dir="rtl" rows="10" type="text" placeholder="Separate it by lines"
                                        name="notes_ar" id="notes_ar" class="
                                                block
                                                mt-1
                                                w-full
                                                rounded-md
                                                border-gray-500
                                                shadow-sm
                                                focus:border-indigo-300
                                                focus:ring
                                                focus:ring-indigo-200
                                                focus:ring-opacity-50
                                                dark:bg-gray-800
                                                " v-model="form.notes_ar" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <button type="submit" class="
                                            inline-flex
                                            items-center
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            tracking-widest
                                            text-white
                                            uppercase
                                            bg-gray-800
                                            rounded-md
                                            border border-transparent
                                            ring-gray-300
                                            transition
                                            duration-150
                                            ease-in-out
                                            hover:bg-gray-700
                                            active:bg-gray-900
                                            focus:outline-none focus:border-gray-900 focus:ring
                                            disabled:opacity-25
                                        ">
                    Create
                </button>
            </form>
            <div class="ml-3 bg-blue-400 dark:bg-gray-600 rounded h-screen w-96 text-center px-4" style="height:115vh">
                <div>
                    <searchable-dropdown component_id="categories" :options="categories"
                        @selected="selectCategory($event)" class="mt-6 me-2" />
                </div>
                <div>
                    <searchable-dropdown component_placeholder="Select Destination" component_id="destinations"
                        :options="destinations" @selected="selectDestination($event)" class="mt-6 me-2" />
                </div>
                <div class="w-full me-2 mt-2">
                    <label for="max_number_of_people"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Max number of people</label>
                    <div class="mt-1">
                        <input type="number" name="max_number_of_people" id="max_number_of_people" class="
                            block
                            mt-1
                            w-full
                            rounded-md
                            border-gray-500
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                            dark:bg-gray-800
                            " v-model="form.max_number_of_people" />
                    </div>
                </div>
                <div class="w-full me-2 mt-2">
                    <label for="max_number_of_people"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Source</label>
                    <div class="mt-1">
                        <input type="text" name="source" id="source" class="
                            block
                            mt-1
                            w-full
                            rounded-md
                            border-gray-500
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                            dark:bg-gray-800
                            " v-model="form.source" />
                    </div>
                </div>
                <div class="flex w-full mt-2" v-if="imagePreview">
                    <img :src="imagePreview" alt="" class="figure-img img-fluid rounded" style="max-height: 100px" />
                </div>
                <div class="flex flex-col mt-2">
                    <input class="
                            w-100
                            mt-2
                            py-3
                            px-3
                            rounded-lg
                            bg-white
                            dark:bg-gray-800
                            border border-gray-400
                            dark:border-gray-700
                            text-gray-800
                            dark:text-gray-50
                            font-semibold
                            focus:border-blue-500 focus:outline-none
                            hidden
                            " @change="onFileSelected" type="file" id="image" accept="image/*" />
                    <label for="image" class="w-100 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 cursor-pointer" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="my-auto text-gray-200">Select thumbnail</span>
                    </label>
                </div>
                <div class="flex items-center  rounded border border-gray-600 w-full mx-auto mt-2 px-2 ">
                    <input id="active" type="checkbox" value="" name="bordered-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"
                        v-model="form.active">
                    <label for="active"
                        class="py-2  text-sm font-medium text-gray-200 mx-2 dark:text-gray-300">Active</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import usePackages from "../../../composables/packages";
import useCategories from "../../../composables/categories";
import useDestinations from "../../../composables/destinations";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import ProgressBar from "../../../components/ProgressBar.vue";
import UploadImages from "vue-upload-drop-images";

const form = reactive({
    category_id: '',
    destination_id: '',
    title_en: "",
    title_ar: "",
    address_ar: '',
    address_en: '',
    description_en: "",
    description_ar: "",
    image: "",
    itinerary_ar: '',
    itinerary_en: '',
    active: '',
    duration_en: '',
    duration_ar: '',
    max_number_of_people: '',
    include_en: '',
    include_ar: '',
    exclude_en: '',
    exclude_ar: '',
    source: '',
    options: [],
    highlights_ar: '',
    highlights_en: '',
    information_ar: '',
    information_en: '',
    policy_ar: '',
    policy_en: '',
    timing_and_transfer_ar: '',
    timing_and_transfer_en: '',
    notes_en: '',
    notes_ar: '',
    terms_and_conditions_en: '',
    terms_and_conditions_ar: '',
    is_from: true,
    banner_highlights: []
});


let isProgressing = ref(false);
const { errors, storePackage, addGallery, addFiles, percentage } =
    usePackages();
const { categories, getCategoriesOnSection } = useCategories();
const { destinations, getDestinations } = useDestinations();
onMounted(() => {
    getCategoriesOnSection('packages');
    getDestinations()
});
const handleImages = (images) => {
    addGallery(images);
};
const handleFiles = (files) => {
    addFiles(files);
};
const savePackage = async () => {
    isProgressing.value = true;
    await storePackage({ form: form, file });
    isProgressing.value = false;
};
let imagePreview = ref(null);
let file = reactive(null);
function onFileSelected(event) {
    file = event.target.files[0];
    form.image = event.target.files[0].name;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
        imagePreview.value = event.target.result;
    };
}

const selectCategory = (category_id) => {
    form.category_id = category_id;
};
const selectDestination = (destination_id) => {
    form.destination_id = destination_id;
};


let banner_highlight = ref({
    title_en: "",
    title_ar: "",
    img: '1.svg'
});

const setBannerHighlight = () => {
    if (!is_editing.value) {
        form.banner_highlights.push(banner_highlight.value);
        banner_highlight.value = {
            title_en: "",
            title_ar: "",
            img: '1.svg'
        };
        selected_img.value = '1.svg'
    } else {
        is_editing.value = false;
        banner_highlight.value = {
            title_en: "",
            title_ar: "",
            img: '1.svg',
        };
        selected_img.value = '1.svg'
    }
};
const deleteRow = (banner_highlight) => {
    form.banner_highlights.splice(banner_highlight, 1);
};
let is_editing = ref(false);
const editRow = (banner_highlight_id) => {
    is_editing.value = true;
    console.log(banner_highlight_id);
    banner_highlight.value = form.banner_highlights[banner_highlight_id];
    selected_img.value = form.banner_highlights[banner_highlight_id].img;
};
let openImgs = ref(false)
let selected_img = ref('1.svg')
let highlight_imgs = reactive([{ id: 1, name: '1.svg' }, { id: 2, name: '2.svg' }, { id: 3, name: '3.svg' }])
const setHighlightImage = (img) => {
    selected_img.value = img
    banner_highlight.value.img = img
}
// ---------


let package_option = ref({
    title_en: "",
    title_ar: "",
    adult_price: null,
    child_price: null,
    infant_price: null,
    option_discount: null,
    option_discount_type: 'percentage'
});

const setPackageOption = () => {
    if (!is_editing_option.value) {
        form.options.push(package_option.value);
        package_option.value = {
            title_en: "",
            title_ar: "",
            adult_price: null,
            child_price: null,
            infant_price: null,
            option_discount: null,
            option_discount_type: 'percentage'
        };
        selected_img.value = '1.svg'
    } else {
        is_editing_option.value = false;
        package_option.value = {
            title_en: "",
            title_ar: "",
            adult_price: null,
            child_price: null,
            infant_price: null,
            option_discount: null,
            option_discount_type: 'percentage'
        };
        selected_img.value = '1.svg'
    }
};
const deletePackageOption = (package_option) => {
    form.options.splice(package_option, 1);
};
let is_editing_option = ref(false);
const editPackageOption = (option_id) => {
    is_editing_option.value = true;
    console.log(option_id);
    package_option.value = form.options[option_id];
};
</script>
