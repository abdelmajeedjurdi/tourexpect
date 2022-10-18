<template>
    <div>

        <!-- Hotel details -->

        <div class="flex">

            <form class="space-y-6 w-full" @submit.prevent="saveHotel">
                <h1 class="flex items-center">Hotel Details
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 mx-2"
                        :class="hotel.active=='true'?'text-green-400':''">
                        <path fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd" />
                    </svg>
                </h1>
                <!-- <img :src="'/images/hotels/'+hotel.thumbnail" :alt="hotel.thumbnail" class="w-96 h-96 object-cover"> -->
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
                        <!-- title -->
                        <div class="flex justify-between">

                            <div class="w-full me-2">
                                <label for="title_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Title</label>
                                <div class="mt-1">
                                    <input dir="ltr" type="text" name="title_ar" id="title_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model=" hotel.title_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="title_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Title</label>
                                <div class="mt-1">
                                    <input dir="rtl" type="text" name="title_ar" id="title_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model=" hotel.title_ar" />
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
                                    <input dir="ltr" type="text" name="title_ar" id="title_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model=" hotel.address_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="address_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Address</label>
                                <div class="mt-1">
                                    <input dir="ltr" type="text" name="title_ar" id="title_ar"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model=" hotel.address_ar" />
                                </div>
                            </div>
                        </div>

                        <!-- descreption -->
                        <div class="flex justify-between">
                            <div class="w-full me-2">
                                <label for="description_en"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
                                    Description</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="description_en" id="description_en"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="hotel.description_en" />
                                </div>
                            </div>
                            <div class="w-full">
                                <label for="description_ar"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
                                    Description</label>
                                <div class="mt-1">
                                    <textarea rows="10" type="text" name="description_en" id="description_en"
                                        class="block mt-1 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800"
                                        v-model="hotel.description_ar" />
                                </div>
                            </div>
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
                        <div v-for="image in hotel.images" :key="hotel.id">
                            <div class="bg-white rounded-lg overflow-hidden mb-10">
                                <div class="w-full flex justify-end z-20">
                                    <span class="rounded-full p-1 transition-all duration-300 absolute">
                                        <div class="btn-group dropend">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2" class="
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
                                    <img :src="'/images/hotels/' + image.image" class="w-full h-48 object-cover" />

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
            <div class="ml-3 bg-blue-400 dark:bg-gray-600 rounded h-screen w-96 text-center px-4">
                <div v-if="categories.length && hotel['category_id']">
                    <searchable-dropdown component_id="categories" :options="categories"
                        :category_id="hotel['category_id']" @selected="selectCategory($event)" class="mt-6 me-2" />
                </div>
                <div v-if="destinations.length && hotel['destination_id']" class="me-2">
                    <searchable-dropdown component_id="destinations" :options="destinations"
                        :category_id="hotel['destination_id']" @selected="selectDestination($event)"
                        class="mt-6 me-2" />
                </div>
                <div class="w-full me-2 mt-4">
                    <label for="adult_price"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
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
                                        " v-model="hotel.price" />
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
                                        " v-model="hotel.discount" />
                    </div>
                </div>
                <div class="w-full mt-2">
                    <label for="discount_type"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Discount Type</label>
                    <select name="discount_type" id="discount_type"
                        class="w-full dark:bg-gray-700 rounded text-gray-700 dark:text-gray-200"
                        v-model="hotel.discount_type">
                        <option class="" value="pecentage">Percentage</option>
                        <option class="py-4" value="amount">Amount</option>
                    </select>
                </div>

                <div class="w-full mt-2">
                    <label for="discount_type"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Stars</label>
                    <div class="flex">
                        <svg v-for="i in 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            @click="hotel.stars=i" fill="currentColor" class="w-6 "
                            :class="i<=hotel.stars?'text-yellow-500':''">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="w-full mt-2">
                    <label for="discount_type"
                        class="block text-sm font-medium w-full text-left text-gray-700 dark:text-gray-200">
                        Facilities </label>
                    <div class="text-left text-yellow-400" v-if="hotel['facilities']">
                        <div>
                            <label for="in-out" class="me-2"> Indoor and Outdoor Pool</label>
                            <input v-model="hotel.facilities['indoor_and_outdoor_pool']" class="rounded" type="checkbox"
                                name="in-out" id="in-out">
                        </div>
                        <div>
                            <label for="free-wify" class="me-2">
                                Free Wi-Fi
                            </label>
                            <input v-model="hotel.facilities['free_wify']" class="rounded" type="checkbox"
                                name="free-wify" id="free-wify">
                        </div>
                        <div>
                            <label for="car-parking" class="me-2">
                                car parking
                            </label>
                            <input v-model="hotel.facilities['car_parking']" class="rounded" type="checkbox"
                                name="car-parking" id="car-parking">
                        </div>
                        <div>
                            <label for="Child-friendly" class="me-2">
                                Child-friendly
                            </label>
                            <input v-model="hotel.facilities['Child_friendly']" class="rounded" type="checkbox"
                                name="Child-friendly" id="Child-friendly">
                        </div>
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
                                                " v-model="hotel.source" />
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
                                                    " @change="onFileSelected" type="file" id="image"
                        accept="image/*" />
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
                        v-model="hotel.active">
                    <label for="active"
                        class="py-2  text-sm font-medium text-gray-200 mx-2 dark:text-gray-300">Active</label>
                </div>
            </div>
        </div>
        <RoomsCroud @edited="getHotel(id)" :rooms="hotel['rooms']" :hotel_id="id" />
    </div>
</template>

<script setup>
import useHotels from "../../../composables/hotels";
import useCategories from "../../../composables/categories";
import useDestinations from "../../../composables/destinations";
import { onMounted, reactive, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import UploadImages from "vue-upload-drop-images";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import ProgressBar from "../../../components/ProgressBar.vue";
import RoomsCroud from "../../../components/RoomsCrud.vue"
const props = defineProps({ id: String });
const { categories, getCategories } = useCategories();
const { destinations, getDestinations } = useDestinations();
let isProgressing = ref(false);
const {
    errors,
    hotel,
    percentage,
    getHotel,
    updateHotel,
    deleteProperty,
    addGallery,
    addFiles,
    destroyImage,
    destroyFile,
} = useHotels();
let Swal = useSwal();
let imagePreview = ref(null)
onMounted(async () => {
    await getCategories();
    await getDestinations();
    await getHotel(props.id);
});
let live_property = ref(-1);
let property = ref({
    title_en: "",
    title_ar: "",
    description_en: "",
    description_ar: "",
});
const saveHotel = async () => {
    isProgressing.value = true;
    await updateHotel(props.id, {
        form: hotel.value,
        file,
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
                await getHotel(props.id);

            } else {
                hotel.value.properties.splice(property_, 1);
            }
            Swal.fire("Deleted!", "Deleted Successfully", "success");
        }
    });
};
const setProperty = () => {
    if (!is_editing.value) {
        hotel.value.properties.push(property.value);
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
    await getHotel(props.id);
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
    hotel.value.category_id = category_id;
};
const selectDestination = (destination_id) => {
    hotel.value.destination_id = destination_id;
};
</script>

