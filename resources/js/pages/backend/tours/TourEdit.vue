<template>
    <div>
        <div v-if="isProgressing && percentage < 100" class="-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20"
            style="height: 100%">
            <progress-bar :percentage="percentage" />
        </div>
        <div class="flex">
            <form class="space-y-6 w-full" @submit.prevent="saveTour">
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
                        <!-- title -->
                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="title_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Name</label>
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
                " v-model="tour.title_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="title_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Name</label>
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
                " v-model="tour.title_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- address -->
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
                " v-model="tour.address_en" />
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
                            " v-model="tour.address_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- description -->
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
                " v-model="tour.description_en" />
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
                " v-model="tour.description_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- itinerary -->
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
                " v-model="tour.itinerary_en" />
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
                                                                        " v-model="tour.itinerary_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- duration -->
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
                " v-model="tour.duration_en" />
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
                            " v-model="tour.duration_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- include -->
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
                " v-model="tour.include_en" />
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
                                                                        " v-model="tour.include_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- exclude -->
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
                " v-model="tour.exclude_en" />
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
                                                                        " v-model="tour.exclude_ar" />
                                </div>
                            </div>
                        </div>



                        <div class="mt-2">
                            <h2>Gallery</h2>
                            <UploadImages @changed="handleImages" />
                        </div>
                        <div>
                            <p>Note: After deleting image you can't retrieve it back.</p>


                            <div class="
                                    grid
                                    gap-2
                                    grid-cols-1
                                    sm:grid-cols-2
                                    md:grid-cols-3
                                    lg:grid-cols-4
                                    xl:grid-cols-5
                                    justify-between
                                    ">
                                <div v-for="image in tour.images" :key="tour.id">
                                    <div class="bg-white rounded-lg overflow-hidden mb-10">
                                        <div class="w-full flex justify-end z-20">
                                            <span class="rounded-full p-1 transition-all duration-300 absolute">
                                                <div class="btn-group dropend">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                        class="
                                                                duration-700
                                                                w-6
                                                                float-right
                                                                cursor-pointer
                                                                text-red-400
                                                                hover:bg-red-500 hover:text-white
                                                                rounded-full
                                                            " @click="deleteFile(image.id)">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </span>
                                        </div>
                                        <div>
                                            <img :src="'/images/tours/' + image.image"
                                                class="w-full h-48 object-cover" />

                                        </div>
                                    </div>
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
                    Update
                </button>
            </form>

            <div class="ml-3 bg-gray-600 rounded h-screen w-96 text-center px-4">
                <div v-if="categories.length && tour['category_id']" class="me-2">
                    <searchable-dropdown :options="categories" :category_id="tour['category_id']"
                        @selected="selectCategory($event)" class="mt-6 me-2" />
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
                " v-model="tour.adult_price" />
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
                " v-model="tour.child_price" />
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
                " v-model="tour.discount" />
                    </div>
                </div>
                <div class="w-full mt-2">
                    <label for="discount_type"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Discount Type</label>
                    <select name="discount_type" id="discount_type" class="w-full bg-gray-700 rounded text-gray-200"
                        v-model="tour.discount_type">
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
                " v-model="tour.max_number_of_people" />
                    </div>
                </div>

                <div>
                    <div class="flex w-full justify-start mt-2" v-if="tour.thumbnail != undefined">
                        <img :src="
                            imagePreview != null
                                ? imagePreview
                                : '/images/tours/' + tour.thumbnail
                        " alt="" class="figure-img img-fluid rounded" style="max-height: 100px" />
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
                                            " @change="onFileSelected" type="file" id="user-image" />
                        <label for="user-image" class="w-100 flex justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 cursor-pointer" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>

                            <span class="my-auto text-gray-200">Change thumbnail</span>
                        </label>
                    </div>
                </div>
                <div class="flex items-center  rounded border border-gray-600 w-full mx-auto mt-2 px-2 bg-gray-500">
                    <input id="active" type="checkbox" value="" name="bordered-checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2"
                        v-model="tour.active">
                    <label for="active"
                        class="py-2  text-sm font-medium text-gray-200 mx-2 dark:text-gray-300">Active</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useTours from "../../../composables/tours";
import useCategories from "../../../composables/categories";
import { onMounted, reactive, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import UploadImages from "vue-upload-drop-images";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import ProgressBar from "../../../components/ProgressBar.vue";
const props = defineProps({ id: String });
const { categories, getCategories } = useCategories();
let isProgressing = ref(false);
const {
    errors,
    tour,
    percentage,
    getTour,
    updateTour,
    deleteProperty,
    addGallery,
    addFiles,
    destroyImage,
    destroyFile,
} = useTours();
let Swal = useSwal();
let imagePreview = ref(null)
onMounted(async () => {
    await getCategories();
    await getTour(props.id);
});
let live_property = ref(-1);
let property = ref({
    title_en: "",
    title_ar: "",
    description_en: "",
    description_ar: "",
});
const saveTour = async () => {
    isProgressing.value = true;
    await updateTour(props.id, {
        form: tour.value,
        file,
        properties: tour.value.properties,
    });
    isProgressing.value = false;
};
let is_editing = ref(false);
const editRow = (property_) => {
    is_editing.value = true;
    property.value = property_;
};
const deleteRow = async (property_) => {
    Swal.fire({
        title: "Are you sure?",
        html: "You won't be able to revert  Order, ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            if (property_.hasOwnProperty("id")) {
                await deleteProperty(property_.id);
                await getTour(props.id);

                console.log(property_.id);
            } else {
                tour.value.properties.splice(property_, 1);
                // console.log("hasnt");
            }
            Swal.fire("Deleted!", "Deleted Successfully", "success");
        }
    });
};
const setProperty = () => {
    if (!is_editing.value) {
        tour.value.properties.push(property.value);
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
const deleteFile = async (id) => {

    await destroyImage(id);
    await getTour(props.id);
    console.log(id);
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
    tour.value.category_id = category_id;
    console.log(tour.value.category_id);
};
</script>
