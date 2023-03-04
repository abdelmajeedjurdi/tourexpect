<template>
    <div class="w-full">
        <div class="mx-2 flex justify-between place-content-end mb-4">
            <h3>All Blogs</h3>

            <router-link
                :to="{ name: 'blog.create' }"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg text-sm font-medium text-white"
                >New Blog
            </router-link>
        </div>
        <div
            style="min-height: 70vh"
            class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between"
        >
            <div v-for="blog in blogs" :key="blog.id">
                <div class="bg-white rounded-lg overflow-hidden mb-10">
                    <div class="w-full flex justify-end z-20">
                        <span
                            class="rounded-full p-1 transition-all duration-300 absolute"
                        >
                            <div class="btn-group dropend">
                                <button
                                    type="button"
                                    class=""
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
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
                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        />
                                    </svg>
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="w-full hover:bg-gray-300">
                                        <router-link
                                            style="padding-right: 70%"
                                            class="w-full ms-2"
                                            :to="{
                                                name: 'blog.edit',
                                                params: { id: blog.id },
                                            }"
                                            >Edit
                                        </router-link>
                                    </li>
                                    <li
                                        @click="deleteRow(blog)"
                                        class="ps-2 w-full text-red-500 hover:bg-gray-300"
                                    >
                                        Delete
                                    </li>
                                    <li
                                        @click="dublicateRow(blog.id)"
                                        class="ps-2 w-full text-gray-700 hover:bg-gray-300 cursor-pointer"
                                    >
                                        Dublicate
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <router-link
                        :to="{ name: 'blog.details', params: { id: blog.id } }"
                    >
                        <img
                            :src="'/images/blogs/' + blog.image"
                            alt="image"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-2 h-20">
                            <span class="text-base text-blue-500">
                                {{ blog.title_en }}
                            </span>
                            <p
                                class="text-base text-body-color leading-relaxed mb-7 text-gray-600"
                            >
                                {{
                                    blog.preview_text_en.substring(0, 100) +
                                    (blog.preview_text_en.length > 100
                                        ? "...."
                                        : "")
                                }}
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <pagenation @selected="changePage($event)" :pages="pages" />
    </div>
</template>

<script setup>
import useBlogs from "../../../composables/blogs";
import { onMounted, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import Pagenation from "../../../components/Pagenation.vue";
const { blogs, getBlogs, destroyBlog, pages, duplicate } = useBlogs();

let Swal = useSwal();
let currentPage = ref(1);
onMounted(() => getBlogs(currentPage.value));
const changePage = (page) => {
    currentPage.value = page;
    getBlogs(currentPage.value);
};
const dublicateRow = async (id) => {
    await duplicate(id);
    getBlogs(currentPage.value);
};
const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure?")) {
        return;
    }

    await destroyBlog(id);
    await getBlogs(currentPage.value);
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
            await getBlogs(currentPage.value);
            Swal.fire("Deleted!", "Order has been deleted.", "success");
        }
    });
};
</script>
