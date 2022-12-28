<template>
    <div class="sm:px-4 xl:px-0 sm:flex w-full max-w-6xl mx-auto my-28">
        <div
            class="bg-black fixed z-10 w-full left-0 right-0 top-0 bg-opacity-50"
            style="height: 150vh"
            v-show="job_title.length"
        >
            <div>
                <div class="w-full flex px-3 justify-end mt-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 text-white hover:text-gray-300 cursor-pointer"
                        @click="job_title = ''"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <form class="bg-white w-4/5 lg:w-1/2 mx-auto rounded-lg mt-24">
                    <div class="rounded-lg border-2 border-gray-300">
                        <div
                            class="rounded-lg bg-blue-900 py-3 text-center text-xl font-semibold text-white"
                        >
                            {{ $t("hiring_header_3") }}
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                    :placeholder="$t('your_name')"
                                />
                                <input
                                    type="email"
                                    class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                    :placeholder="$t('your_email')"
                                />
                                <input
                                    type="url"
                                    class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                    :placeholder="$t('linkedin_link')"
                                />
                                <input
                                    type="text"
                                    class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                    :placeholder="$t('your_phone')"
                                />
                                <input
                                    class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                    type="file"
                                />
                            </div>
                            <textarea
                                rows="6"
                                class="rounded-lg border py-1 px-2 w-full mt-2"
                                :placeholder="$t('your_message')"
                            ></textarea>
                            <button
                                @click="job_title = ''"
                                class="rounded-2xl bg-yellow-500 px-12 py-1 text-white mt-2"
                            >
                                {{ $t("apply") }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">
                {{ $t("we_are_hiring") }}
            </h1>
            <p>{{ $t("hiring_section_1") }}</p>
            <p>{{ $t("hiring_section_2") }}</p>
            <h3 class="mt-4 text-lg font-semibold">
                {{ $t("hiring_header_1") }}
            </h3>
            <p>{{ $t("hiring_section_3") }}</p>
            <h3 class="mt-4 text-lg font-semibold">
                {{ $t("hiring_header_2") }}
            </h3>
            <p>
                {{ $t("hiring_section_4") }}
            </p>
            <p>
                {{ $t("hiring_section_5") }}
            </p>
            <p>
                {{ $t("hiring_section_6") }}
            </p>
            <div>
                <form @submit.prevent="applyToJob()">
                    <div class="rounded-lg border-2 border-gray-300">
                        <div
                            class="rounded-lg bg-blue-900 py-3 text-center text-xl font-semibold text-white"
                        >
                            {{ $t("hiring_header_3") }}
                        </div>
                        <div class="grid grid-cols-2 gap-2 p-6">
                            <input
                                type="text"
                                class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                :placeholder="$t('your_name')"
                                v-model="application_form.name"
                            />
                            <input
                                type="text"
                                class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                :placeholder="$t('position')"
                                v-model="application_form.position"
                            />
                            <input
                                type="email"
                                class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                :placeholder="$t('your_email')"
                                v-model="application_form.email"
                            />
                            <input
                                type="url"
                                class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                :placeholder="$t('linkedin_link')"
                                v-model="application_form.linked_in"
                            />
                            <input
                                type="text"
                                class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                :placeholder="$t('your_phone')"
                                v-model="application_form.phone"
                            />
                            <div>
                                <input
                                    class="rounded-lg border py-1 px-2 focus:border-blue-900"
                                    type="file"
                                />
                            </div>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="6"
                                class="rounded-lg border py-1 px-2"
                                :placeholder="$t('your_message')"
                                v-model="application_form.message"
                            ></textarea>
                            <div class="flex items-end justify-end">
                                <button
                                    type="submit"
                                    class="rounded-2xl bg-yellow-500 px-12 py-1 text-white"
                                >
                                    {{ $t("apply") }}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div
                    class="mt-8 flex justify-between rounded-lg bg-blue-500 px-8 py-2"
                    v-for="job in jobs"
                    :key="job.id"
                >
                    <div>
                        <h3 class="text-lg text-white">
                            {{ job["title_" + lang] }}
                        </h3>
                        <div class="mt-1 text-sm text-sky-200 text-gray-200">
                            {{ job["subtitle_" + lang] }}
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button
                            @click="job_title = job['title_' + lang]"
                            class="rounded-full bg-white px-12 py-1 text-blue-500"
                        >
                            {{ $t("apply") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref, inject } from "vue";
import useJobs from "../../composables/jobs";

const { jobs, getJobs } = useJobs();
onMounted(() => {
    getJobs();
});
let application_form = ref({
    name: "",
    position: "",
    email: "",
    linked_in: "",
    phone: "",
    message: "",
});

let job_title = ref("");
const lang = inject("lang") || "en";

const applyToJob = () => {
    apply(application_form.value);
};
</script>
