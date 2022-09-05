<template>
    <div>
        <div class="flex justify-between mb-3">
            <div class="w-full me-2">
                <label for="title_en" class="block text-sm font-medium text-gray-700 dark:text-gray-200">English
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
                <label for="title_ar" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Arabic
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
            <div>
                <searchable-dropdown :options="categories" @selected="selectCategory($event)" class="mt-6 me-2" />
            </div>
        </div>
        <div class="bg-white mb-6">
            <quill-editor toolbar="full" ref="myQuillEditor" v-model:content="form.content_en" :options="options_en" />
        </div>

        <div class="bg-white">
            <quill-editor toolbar="full" ref="myQuillEditor" v-model:content="form.content_ar" :options="options_ar" />
        </div>
        <button @click="saveBlog" class="bg-blue-500 text-white px-8 py-2">Save</button>
        {{ categories }}
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { onMounted, reactive, ref, watch } from 'vue';
import useBlogs from "../../../composables/blogs";
import useCategories from "../../../composables/categories";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import { async } from '../../../../../public/js/app';
const { errors, storeBlog } = useBlogs();
const { categories, getCategories } = useCategories();
const form = reactive({
    image: '',
    title_en: "",
    title_ar: "",
    content_en: null,
    content_ar: null,
    category_id: null,
    destination_id: -1
});
onMounted(async () => {
    // await getCategories()
})
const saveBlog = async () => {
    await storeBlog({ form: form });
};
const options_en = {
    debug: 'info',
    modules: {

    },
    placeholder: 'Write the blog in English...',
    theme: 'snow'
}
const options_ar = {
    debug: 'info',
    modules: {

    },
    placeholder: 'اكتب المقال بالعربية...',
    theme: 'snow'
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

