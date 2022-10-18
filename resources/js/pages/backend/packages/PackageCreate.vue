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
                " v-model="form.address_en" />
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
                <div class="w-full me-2 mt-4">
                    <label for="adult_price"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">Adult
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
                " v-model="form.adult_price" />
                    </div>
                </div>
                <div class="w-full me-2 mt-2">
                    <label for="child_price"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">Child
                        Price</label>
                    <div class="mt-1">
                        <input type="number" name="child_price" id="child_price" class="
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
                " v-model="form.child_price" />
                    </div>
                </div>
                <div class="w-full me-2 mt-2">
                    <label for="discount"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Discount</label>
                    <div class="mt-1">
                        <input type="number" name="discount" id="discount" class="
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
                " v-model="form.discount" />
                    </div>
                </div>
                <div class="w-full mt-2">
                    <label for="discount_type"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Discount Type</label>
                    <select name="discount_type" id="discount_type"
                        class="w-full dark:bg-gray-700 rounded text-gray-700 dark:text-gray-200"
                        v-model="form.discount_type">
                        <option class="" value="pecentage">Percentage</option>
                        <option class="py-4" value="amount">Amount</option>
                    </select>
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

let live_property = ref(-1);
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
    discount_type: "pecentage",
    itinerary_ar: '',
    itinerary_en: '',
    active: '',
    adult_price: '',
    child_price: '',
    discount: '',
    duration_en: '',
    duration_ar: '',
    max_number_of_people: '',
    include_en: '',
    include_ar: '',
    exclude_en: '',
    exclude_ar: '',
    source: ''
});
let property = ref({
    title_en: "",
    title_ar: "",
    description_en: "",
    description_ar: "",
});
let properties = ref([]);
const setProperty = () => {
    if (!is_editing.value) {
        properties.value.push(property.value);
        property.value = {
            title_en: "",
            title_ar: "",
            description_en: "",
            description_ar: "",
        };
    } else {
        is_editing.value = false;
        property.value = {
            title_en: "",
            title_ar: "",
            description_en: "",
            description_ar: "",
        };
    }
};

let isProgressing = ref(false);
const { errors, storePackage, addGallery, addFiles, percentage } =
    usePackages();
const { categories, getCategories } = useCategories();
const { destinations, getDestinations } = useDestinations();
onMounted(() => {
    getCategories();
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
    await storePackage({ form: form, file, properties: properties.value });
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
const deleteRow = (property) => {
    properties.value.splice(property, 1);
};
let is_editing = ref(false);
const editRow = (property_id) => {
    is_editing.value = true;
    property.value = properties.value[property_id];
};

const selectCategory = (category_id) => {
    form.category_id = category_id;
};
const selectDestination = (destination_id) => {
    form.destination_id = destination_id;
};
</script>
