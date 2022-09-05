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

        <form class="space-y-6" @submit.prevent="saveBlog">
            <div class="lg:flex justify-between space-x-4">
                <div class="space-y-4 rounded-md w-full">
                    <!-- image preview -->
                    <div>
                        <div class="flex w-full mt-2" v-if="imagePreview">
                            <img :src="imagePreview" alt="" class="figure-img img-fluid rounded"
                                style="max-height: 100px" />
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
                                    " @change="onFileSelected" type="file" id="image" />
                            <label for="image" class="w-100 flex"><svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg></label>
                        </div>
                    </div>
                    <div>
                        <searchable-dropdown :options="categories" @selected="selectCategory($event)"
                            class="mt-6 me-2" />
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
                    <!-- contents -->

                    <div class="bg-white mb-6">
                        <quill-editor placeholder="Write blog in English ..." toolbar="full" ref="myQuillEditor"
                            v-model:content="form.content_en" />
                    </div>

                    <div class="bg-white">
                        <quill-editor placeholder="اكتب المقال باللغة العربية" toolbar="full" ref="myQuillEditor"
                            v-model:content="form.content_ar" />
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
            {{ form }}
        </form>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { onMounted, reactive, ref } from "vue";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import useBlogs from "../../../composables/blogs";
import useCategories from "../../../composables/categories"
let live_property = ref(-1);
const form = reactive({
    category_id: null,
    blog: "",
    title_en: "",
    title_ar: "",
    description_en: "",
    description_ar: "",
    is_slide: false,
    is_trending: false,
    image: "",
});

const { errors, storeBlog } = useBlogs();
const { categories, getCategories } = useCategories();
onMounted(async () => {
    await getCategories()
})
const saveBlog = async () => {
    await storeBlog({ form: form, file });
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
    console.log(category_id);
};
</script>
<style>
.ql-editor {
    height: 72vh;
}
</style>
