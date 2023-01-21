<template>
    <div>
        <div v-if="errors">
            <div
                v-for="(v, k) in errors"
                :key="k"
                class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
            >
                <p v-for="error in v" :key="error" class="text-sm">
                    {{ error }}
                </p>
            </div>
        </div>
        <div
            v-if="isProgressing && percentage < 100"
            class="-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20"
            style="height: 100%"
        >
            <progress-bar :percentage="percentage" />
        </div>
        <div class="flex">
            <form class="space-y-6 w-full">
                <h1>Visa Update</h1>
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
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
                                        v-model="visa.title_en"
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
                                        v-model="visa.title_ar"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="paragraph border rounded p-2">
                            <h3 class="text-white font-bold">
                                Paragraph Sections
                            </h3>
                            <div class="flex justify-between">
                                <div class="w-full me-2">
                                    <label
                                        for="paragraph_title_en"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Section Title (English)</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            type="text"
                                            name="paragraph_title_en"
                                            id="paragraph_title_en"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                paragraph_sections.paragraph_title_en
                                            "
                                        />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <label
                                        for="title_ar"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Section Title (Arabic)</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            dir="rtl"
                                            type="text"
                                            name="paragraph_title_ar"
                                            id="paragraph_title_ar"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                paragraph_sections.paragraph_title_ar
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div class="w-full me-2">
                                    <label
                                        for="paragraph_text_en"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Paragraph Text (English)</label
                                    >
                                    <div class="mt-1">
                                        <textarea
                                            rows="10"
                                            type="text"
                                            name="paragraph_text_en"
                                            id="paragraph_text_en"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                paragraph_sections.paragraph_text_en
                                            "
                                        />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <label
                                        for="paragraph_text_ar"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Paragraph Text (Arabic)</label
                                    >
                                    <div class="mt-1">
                                        <textarea
                                            dir="rtl"
                                            rows="10"
                                            type="text"
                                            name="paragraph_text_ar"
                                            id="paragraph_text_ar"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                paragraph_sections.paragraph_text_ar
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="my-2">
                                <button
                                    v-if="!is_editing_paragraph"
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setParagraphSection"
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
                                    @click="setParagraphSection"
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
                            </div>
                            <div class="space-y-1">
                                <div
                                    v-for="(
                                        section, i
                                    ) in visa.paragraph_sections"
                                    :key="section"
                                    class="border p-2"
                                >
                                    <div class="flex mx-2">
                                        <span
                                            class="cursor-pointer rotate-90"
                                            @click="editParagraphSection(i)"
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
                                            @click="deleteParagraphSection(i)"
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
                                    <div class="flex justify-between">
                                        <div class="w-1/2">
                                            <div class="text-xl text-white">
                                                {{ section.paragraph_title_en }}
                                            </div>
                                            <div>
                                                {{ section.paragraph_text_en }}
                                            </div>
                                        </div>
                                        <div class="w-1/2 text-right">
                                            <div class="text-xl text-white">
                                                {{ section.paragraph_title_ar }}
                                            </div>
                                            <div>
                                                {{ section.paragraph_text_ar }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bullet border rounded p-2">
                            <h3 class="text-white font-bold">
                                Bullet Sections
                            </h3>
                            <div class="flex justify-between">
                                <div class="w-full me-2">
                                    <label
                                        for="bullet_title_en"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Section Title (English)</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            type="text"
                                            name="bullet_title_en"
                                            id="bullet_title_en"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                bullet_sections.bullet_title_en
                                            "
                                        />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <label
                                        for="title_ar"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Section Title (Arabic)</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            dir="rtl"
                                            type="text"
                                            name="bullet_title_ar"
                                            id="bullet_title_ar"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                bullet_sections.bullet_title_ar
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <div class="w-full me-2">
                                    <label
                                        for="bullet_text_en"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Bullet Text (English)</label
                                    >
                                    <div class="mt-1">
                                        <textarea
                                            rows="10"
                                            type="text"
                                            name="bullet_text_en"
                                            id="bullet_text_en"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                bullet_sections.bullet_text_en
                                            "
                                        />
                                    </div>
                                </div>
                                <div class="w-full">
                                    <label
                                        for="bullet_text_ar"
                                        class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                        >Bullet Text (Arabic)</label
                                    >
                                    <div class="mt-1">
                                        <textarea
                                            dir="rtl"
                                            rows="10"
                                            type="text"
                                            name="bullet_text_ar"
                                            id="bullet_text_ar"
                                            class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                            v-model="
                                                bullet_sections.bullet_text_ar
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="my-2">
                                <button
                                    v-if="!is_editing_bullet"
                                    type="button"
                                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                                    @click="setBulletSection"
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
                                    @click="setBulletSection"
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
                            </div>
                            <div class="space-y-1">
                                <div
                                    v-for="(section, i) in visa.bullet_sections"
                                    :key="section"
                                    class="border p-2"
                                >
                                    <div class="flex mx-2">
                                        <span
                                            class="cursor-pointer rotate-90"
                                            @click="editBulletSection(i)"
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
                                            @click="deleteBulletSection(i)"
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
                                    <div class="flex justify-between">
                                        <div class="w-1/2">
                                            <div class="text-xl text-white">
                                                {{ section.bullet_title_en }}
                                            </div>
                                            <div>
                                                {{ section.bullet_text_en }}
                                            </div>
                                        </div>
                                        <div class="w-1/2 text-right">
                                            <div class="text-xl text-white">
                                                {{ section.bullet_title_ar }}
                                            </div>
                                            <div>
                                                {{ section.bullet_text_ar }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div
                class="ml-3 bg-blue-400 dark:bg-gray-600 rounded h-screen w-96 text-center px-4 top-5"
                style="height: 112vh"
            >
                <div class="border-b border-gray-200 py-6">
                    <label
                        for="max_number_of_people"
                        class="block font-medium w-full text-left text-gray-700 dark:text-gray-200 mb-2"
                    >
                        Destinations</label
                    >
                    <div id="filter-section-1 ">
                        <div class="space-y-4 h-28 overflow-y-scroll">
                            <div
                                class="flex items-center"
                                v-for="destination in country_passports"
                                :key="destination.id"
                            >
                                <input
                                    :id="destination['name_en']"
                                    :name="destination['name_en']"
                                    :value="destination.id"
                                    type="checkbox"
                                    v-model="visa.country_passport_ids"
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

                <div class="w-full text-left mt-4">
                    <button
                        @click.prevent="saveVisa"
                        class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>

        <div class="flex justify-between">
            <div class="space-y-4 rounded-md w-full border p-6 mt-6 xk:mt-0">
                <div class="flex justify-between">
                    <h3>Options</h3>
                </div>
                <div class="flex justify-between space-x-1">
                    <div class="w-1/5">
                        <label
                            for="visa_type_en"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >English Visa Type</label
                        >
                        <div class="mt-1">
                            <input
                                type="text"
                                name="visa_type_en"
                                id="visa_type_en"
                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                v-model="visa_option.visa_type_en"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
                        <label
                            for="visa_type_ar"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >Arabic Visa Type</label
                        >
                        <div class="mt-1">
                            <input
                                dir="rtl"
                                type="text"
                                name="visa_type_ar"
                                id="visa_type_ar"
                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                v-model="visa_option.visa_type_ar"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
                        <label
                            for="no_of_entries"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >No. of entries</label
                        >
                        <div class="mt-1">
                            <select
                                name="no_of_entries"
                                id="no_of_entries"
                                class="dark:bg-gray-700 rounded-md w-full text-gray-700 dark:text-gray-200"
                                v-model="visa_option.no_of_entries"
                            >
                                <option class="" value="single_entry">
                                    Single Entry
                                </option>
                                <option class="py-4" value="multiple_entries">
                                    Multiple Entries
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="w-1/5">
                        <label
                            for="visa_validity_en"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >English Visa Validity</label
                        >
                        <div class="mt-1">
                            <input
                                type="text"
                                name="visa_validity_en"
                                id="visa_validity_en"
                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                v-model="visa_option.visa_validity_en"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
                        <label
                            for="visa_validity_ar"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >Arabic Visa Validity</label
                        >
                        <div class="mt-1">
                            <input
                                dir="rtl"
                                type="text"
                                name="visa_validity_ar"
                                id="visa_validity_ar"
                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                v-model="visa_option.visa_validity_ar"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
                        <label
                            for="processing_time_en"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >English Processing Time</label
                        >
                        <div class="mt-1">
                            <input
                                type="text"
                                name="processing_time_en"
                                id="processing_time_en"
                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                v-model="visa_option.processing_time_en"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
                        <label
                            for="processing_time_ar"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >Arabic Processing Time</label
                        >
                        <div class="mt-1">
                            <input
                                dir="rtl"
                                type="text"
                                name="processing_time_ar"
                                id="processing_time_ar"
                                class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                v-model="visa_option.processing_time_ar"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
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
                                v-model="visa_option.adult_price"
                            />
                        </div>
                    </div>
                    <div class="w-1/5">
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
                                v-model="visa_option.child_price"
                            />
                        </div>
                    </div>
                </div>
                <button
                    v-if="!is_editing_option"
                    type="button"
                    class="px-6 py-1 bg-green-400 rounded-lg text-blue-600 hover:bg-green-300 duration-300"
                    @click="setVisaOption"
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
                    @click="setVisaOption"
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

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table
                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                    >
                        <thead
                            class="text-xs text-gray-700 uppercase bg-yellow-600 dark:text-gray-400"
                        >
                            <tr>
                                <th scope="col" class="px-6 py-3">En Type</th>
                                <th scope="col" class="px-6 py-3">Ar Type</th>
                                <th scope="col" class="px-6 py-3">
                                    No. of Entries
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    en Validity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ar Validity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    En Processing Time
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ar. Processing Time
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Adult Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Child Price
                                </th>
                                <th scope="col" class="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700"
                                v-for="(option, i) in visa.options"
                                :key="i"
                            >
                                <th scope="row" class="px-6 py-4">
                                    {{ option.visa_type_en }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ option.visa_type_ar }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.no_of_entries }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.visa_validity_en }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.visa_validity_ar }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.processing_time_en }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.processing_time_ar }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.adult_price }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ option.child_price }}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex mx-2">
                                        <span
                                            class="cursor-pointer rotate-90"
                                            @click="editVisaOption(i)"
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
                                            @click="deleteVisaOption(i)"
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <button
            type="submit"
            @click.prevent="saveVisa"
            class="inline-flex items-center mt-2 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
        >
            Update
        </button>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import useVisas from "../../../composables/visas";
import useCategories from "../../../composables/categories";
import useCountryPassports from "../../../composables/country_passports";
import ProgressBar from "../../../components/ProgressBar.vue";

let isProgressing = ref(false);
const { errors, updateVisa, percentage, getVisa, visa } = useVisas();

const { country_passports, getCountryPassports } = useCountryPassports();

const props = defineProps({ id: String });
onMounted(() => {
    getCountryPassports();
    getVisa(props.id);
});
const saveVisa = async () => {
    isProgressing.value = true;
    await updateVisa(props.id, { form: visa.value });
    isProgressing.value = false;
};

// ---------

let visa_option = ref({
    visa_type_en: "",
    visa_type_ar: "",
    adult_price: null,
    child_price: null,
    no_of_entries: "single_entry",
    visa_validity_en: "",
    visa_validity_ar: "",
    processing_time_en: "",
    processing_time_ar: "",
});

const setVisaOption = () => {
    if (!is_editing_option.value) {
        visa.value.options.push(visa_option.value);
        visa_option.value = {
            visa_type_en: "",
            visa_type_ar: "",
            adult_price: null,
            child_price: null,
            no_of_entries: "single_entry",
            visa_validity_en: "",
            visa_validity_ar: "",
            processing_time_en: "",
            processing_time_ar: "",
        };
    } else {
        is_editing_option.value = false;
        visa_option.value = {
            visa_type_en: "",
            visa_type_ar: "",
            adult_price: null,
            child_price: null,
            no_of_entries: "single_entry",
            visa_validity_en: "",
            visa_validity_ar: "",
            processing_time_en: "",
            processing_time_ar: "",
        };
    }
};
const deleteVisaOption = (visa_option) => {
    visa.value.options.splice(visa_option, 1);
};
let is_editing_option = ref(false);
const editVisaOption = (option_id) => {
    is_editing_option.value = true;
    visa_option.value = visa.value.options[option_id];
};

let paragraph_sections = ref({
    paragraph_title_en: "",
    paragraph_title_ar: "",
    paragraph_text_en: "",
    paragraph_text_ar: "",
});

let is_editing_paragraph = ref(false);
const setParagraphSection = () => {
    if (!is_editing_paragraph.value) {
        visa.value.paragraph_sections.push(paragraph_sections.value);
        paragraph_sections.value = {
            paragraph_title_en: "",
            paragraph_title_ar: "",
            paragraph_text_en: "",
            paragraph_text_ar: "",
        };
    } else {
        is_editing_paragraph.value = false;
        paragraph_sections.value = {
            paragraph_title_en: "",
            paragraph_title_ar: "",
            paragraph_text_en: "",
            paragraph_text_ar: "",
        };
    }
};

const deleteParagraphSection = (paragraph_idx) => {
    visa.value.paragraph_sections.splice(paragraph_idx, 1);
};
const editParagraphSection = (paragraph_idx) => {
    is_editing_paragraph.value = true;
    paragraph_sections.value = visa.value.paragraph_sections[paragraph_idx];
};

let bullet_sections = ref({
    bullet_title_en: "",
    bullet_title_ar: "",
    bullet_text_en: "",
    bullet_text_ar: "",
});

let is_editing_bullet = ref(false);
const setBulletSection = () => {
    if (!is_editing_bullet.value) {
        visa.value.bullet_sections.push(bullet_sections.value);
        bullet_sections.value = {
            bullet_title_en: "",
            bullet_title_ar: "",
            bullet_text_en: "",
            bullet_text_ar: "",
        };
    } else {
        is_editing_bullet.value = false;
        bullet_sections.value = {
            bullet_title_en: "",
            bullet_title_ar: "",
            bullet_text_en: "",
            bullet_text_ar: "",
        };
    }
};

const deleteBulletSection = (bullet_idx) => {
    visa.value.bullet_sections.splice(bullet_idx, 1);
};
const editBulletSection = (bullet_idx) => {
    is_editing_bullet.value = true;
    bullet_sections.value = visa.value.bullet_sections[bullet_idx];
};
</script>
