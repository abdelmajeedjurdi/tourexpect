<template>
    <div class="w-full">
        <div class="mx-2 flex justify-between place-content-end mb-4">
            <h3>All Package</h3>

            <router-link
                :to="{ name: 'single_package.create' }"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg text-sm font-medium text-white"
                >New Package
            </router-link>
        </div>
        <div
            style="min-height: 70vh"
            class="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between"
        >
            <div v-for="single_package in packages" :key="single_package.id">
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
                                                name: 'single_package.edit',
                                                params: {
                                                    id: single_package.id,
                                                },
                                            }"
                                            >Edit
                                        </router-link>
                                    </li>
                                    <li
                                        @click="deleteRow(single_package)"
                                        class="ps-2 w-full text-red-500 hover:bg-gray-300 cursor-pointer"
                                    >
                                        Delete
                                    </li>
                                    <li
                                        @click="dublicateRow(single_package.id)"
                                        class="ps-2 w-full text-gray-700 hover:bg-gray-300 cursor-pointer"
                                    >
                                        Dublicate
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <router-link :to="'#'">
                        <img
                            :src="
                                '/images/packages/' + single_package.thumbnail
                            "
                            :alt="single_package.title_en + ' image'"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-2 h-32">
                            <span class="text-base text-blue-500">
                                {{ single_package.title_en }}
                            </span>

                            <p
                                v-if="single_package.description_en"
                                class="text-base text-body-color leading-relaxed mb-7 text-gray-600"
                            >
                                {{
                                    single_package.description_en.substring(
                                        0,
                                        100
                                    ) +
                                    (single_package.description_en.length > 100
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
import usePackages from "../../../composables/packages";
import { onMounted, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import Pagenation from "../../../components/Pagenation.vue";

const { packages, getPackages, destroyPackage, pages, duplicate } =
    usePackages();
let currentPage = ref(1);
let Swal = useSwal();
onMounted(() => getPackages(currentPage.value));
const changePage = (page) => {
    currentPage.value = page;
    getPackages(currentPage.value);
};
const dublicateRow = async (id) => {
    await duplicate(id);
    getPackages(currentPage.value);
};
const deletePackage = async (id) => {
    if (!window.confirm("Are you sure?")) {
        return;
    }

    await destroyPackage(id);
    await getPackages(currentPage.value);
};
const deleteRow = (tour_) => {
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
            await destroyPackage(tour_.id);
            await getPackages(currentPage.value);
            Swal.fire("Deleted!", "Order has been deleted.", "success");
        }
    });
};
</script>
