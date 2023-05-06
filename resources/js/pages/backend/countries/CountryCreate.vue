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
        <form class="space-y-6" @submit.prevent="saveCountry">
            <div class="lg:flex justify-between space-x-4">
                <div class="space-y-4 rounded-md w-full">
                    <div class="flex justify-between">
                        <div class="w-full me-2">
                            <label
                                for="name_en"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >English Name</label
                            >
                            <div class="mt-1">
                                <input
                                    type="text"
                                    name="name_en"
                                    id="name_en"
                                    class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                    v-model="form.name_en"
                                />
                            </div>
                        </div>
                        <div class="w-full">
                            <label
                                for="name_ar"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >Arabic Name</label
                            >
                            <div class="mt-1">
                                <input
                                    dir="rtl"
                                    type="text"
                                    name="name_ar"
                                    id="name_ar"
                                    class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                    v-model="form.name_ar"
                                />
                            </div>
                        </div>
                    </div>
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
                                    v-model="form.description_en"
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
                                    v-model="form.description_ar"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex w-full mt-2" v-if="imagePreview">
                        <img
                            :src="imagePreview"
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
                            id="image"
                            accept="image/*"
                        />
                        <label for="image" class="w-100 flex"
                            ><svg
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
                                /></svg
                        ></label>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
            >
                Create
            </button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import useDestinations from "../../../composables/destinations";

const form = reactive({
    name_en: "",
    name_ar: "",
    description_en: "",
    description_ar: "",
    country_id: "",
    image: "",
    trending: "",
});

const { errors, storeCountry, countries, getCountries } = useDestinations();
onMounted(async () => {
    await getCountries();
});
const saveCountry = async () => {
    await storeCountry({ form: form, file });
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
</script>
