<template>
    <div class="w-full">
        <div class="mx-2 flex justify-between place-content-end mb-4">
            <h3>All Blogs</h3>
            <div class="
                px-4
                py-2
                bg-blue-600
                hover:bg-blue-700
                cursor-pointer
                rounded-lg
                ">
                <router-link :to="{ name: 'blog.create' }" class="text-sm font-medium text-white">New Blog
                </router-link>
            </div>
        </div>
        <div
            class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between ">
            <div v-for="blog in blogs" :key="blog.id">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <div class="w-full flex justify-end z-20">
                        <span class="rounded-full p-1 transition-all duration-300 absolute">
                            <div class="btn-group dropend">
                                <button type="button" class="" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="w-full hover:bg-gray-300">
                                        <router-link style="padding-right: 70%" class="w-full ms-2" :to="{
                                            name: 'blog.edit',
                                            params: { id: blog.id },
                                        }">Edit
                                        </router-link>
                                    </li>
                                    <li class="w-full text-red-500 hover:bg-gray-300">
                                        <button @click="deleteRow(blog)" class="ms-2">
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <router-link :to="{ name: 'blog.details', params: { id: blog.id } }">
                        <img :src="'/images/blogs/' + blog.image" alt="image" class="w-full h-48 object-cover" />
                        <div class="p-2 h-20">
                            <span class="text-base text-blue-500">
                                {{ blog.title_en }}
                            </span>

                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useBlogs from "../../../composables/blogs";
import { onMounted } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";

var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
const { blogs, getBlogs, destroyBlog } = useBlogs();

let Swal = useSwal();
onMounted(getBlogs);
// function toHtml(content) {
//     console.log(JSON.parse(content)['ops']);
//     var deltaOps = JSON.parse(content)['ops'];

//     var cfg = {};

//     var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
//     // return 'wait'
//     return converter.convert();
// }
const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure?")) {
        return;
    }

    await destroyBlog(id);
    await getBlogs();
};
const deleteRow = (blog_) => {
    Swal.fire({
        title: "Are you sure?",
        html: "You won't be able to revert   Order, ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            await destroyBlog(blog_.id);
            await getBlogs();
            Swal.fire("Deleted!", "Order has been deleted.", "success");
        }
    });
};
</script>
