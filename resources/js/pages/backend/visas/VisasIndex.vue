<template>
    <div class="w-full">
        <countries-passports />
        <div class="mx-2 flex justify-between place-content-end my-4">
            <h3>All Visas</h3>

            <router-link
                :to="{ name: 'visa.create' }"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg text-sm font-medium text-white"
                >New Visa
            </router-link>
        </div>

        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-900 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="py-3 px-6">English Title</th>
                    <th scope="col" class="py-3 px-6">Arabic Title</th>
                    <th scope="col" class="py-3 px-6">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="visa in visas"
                    :key="visa.id"
                    class="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {{ visa["title_en"] }}
                    </th>
                    <td class="py-4 px-6">
                        {{ visa["title_ar"] }}
                    </td>
                    <td class="py-4 px-6">
                        <div class="flex mx-2">
                            <router-link
                                class=""
                                :to="{
                                    name: 'visa.edit',
                                    params: { id: visa.id },
                                }"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-blue-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                            </router-link>
                            <span
                                class="cursor-pointer rotate-90"
                                @click="deleteCountry(visa)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 text-red-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagenation @selected="changePage($event)" :pages="pages" />
    </div>
</template>

<script setup>
import useVisas from "../../../composables/visas";
import CountriesPassports from "./CountriesPassports.vue";
import { onMounted, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import Pagenation from "../../../components/Pagenation.vue";

const { visas, getVisas, destroyVisa, pages, duplicate } = useVisas();
let currentPage = ref(1);
let Swal = useSwal();
onMounted(getVisas(currentPage.value));
const changePage = (page) => {
    currentPage.value = page;
    getVisas(currentPage.value);
};
const dublicateRow = async (id) => {
    await duplicate(id);
    getVisas(currentPage.value);
};
const deleteVisa = async (id) => {
    if (!window.confirm("Are you sure?")) {
        return;
    }

    await destroyVisa(id);
    await getVisas(currentPage.value);
};
const deleteRow = (visa_) => {
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
            await destroyVisa(visa_.id);
            await getVisas(currentPage.value);
            Swal.fire("Deleted!", "Order has been deleted.", "success");
        }
    });
};
</script>
