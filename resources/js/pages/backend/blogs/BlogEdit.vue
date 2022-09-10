<template>
    <div>
        <div v-if="isProgressing && percentage < 100" class="-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20"
            style="height: 100%">
            <progress-bar :percentage="percentage" />
        </div>
        <div>

            <form class="space-y-6" @submit.prevent="saveBlog">
                <div class="lg:flex justify-between space-x-4">
                    <div class="space-y-4 rounded-md w-full">
                        <!-- image preview -->

                        <div>
                            <div class="flex w-full justify-start mt-2" v-if="blog.image != undefined">
                                <img :src="
                                    imagePreview != null
                                        ? imagePreview
                                        : '/images/blogs/' + blog.image
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
                                            " @change="onFileSelected" type="file" accept="image/*" id="user-image" />
                                <label for="user-image" class="w-100 flex justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 cursor-pointer" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>

                                    <span class="my-auto text-gray-200">Change image</span>
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-between w-1/2">
                            <div v-if="categories.length && blog['category_id']" class="me-2">
                                <searchable-dropdown :options="categories" :category_id="blog['category_id']"
                                    @selected="selectCategory($event)" class="mt-6 me-2" />
                            </div>
                            <div v-if="destinations.length && blog['destination_id']" class="me-2">
                                <searchable-dropdown component_placeholder="Select Destination"
                                    component_id="destinations" :options="destinations"
                                    :category_id="blog['destination_id']" @selected="selectDestination($event)"
                                    class="mt-6 me-2" />
                            </div>
                        </div>
                        <!-- titles -->
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
                                    " v-model="blog.title_en" />
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
                                            " v-model="blog.title_ar" />
                                </div>
                            </div>
                        </div>
                        <!-- contents -->
                        <div v-if="blog.content_en!=undefined">
                            <div class="bg-white mb-6">
                                <quill-editor toolbar="full" ref="myQuillEditor" v-model:content="blog.content_en" />
                            </div>

                            <div class="bg-white">
                                <quill-editor toolbar="full" ref="myQuillEditor" v-model:content="blog.content_ar" />
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
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import useBlogs from "../../../composables/blogs";
import useCategories from "../../../composables/categories";
import useDestinations from '../../../composables/destinations';
import { onMounted, reactive, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import ProgressBar from "../../../components/ProgressBar.vue";
const props = defineProps({ id: String });
const { categories, getCategories } = useCategories();
const { destinations, getDestinations } = useDestinations();
let isProgressing = ref(false);
const {
    errors,
    blog,
    percentage,
    getBlog,
    updateBlog,
    temp
} = useBlogs();
let Swal = useSwal();
let imagePreview = ref(null)
// let content = ref({ "ops": JSON.parse(blog.value.content_en)['ops'] })
onMounted(async () => {
    await getCategories();
    await getBlog(props.id);
    getDestinations()
});
const saveBlog = async () => {
    isProgressing.value = true;
    await updateBlog(props.id, {
        form: blog.value,
        file,
        properties: blog.value.properties,
    });
    isProgressing.value = false;
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
    blog.value.category_id = category_id;
};
const selectDestination = (destination_id) => {
    blog.value.destination_id = destination_id;
};
</script>
