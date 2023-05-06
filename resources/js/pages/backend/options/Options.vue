<template>
    <div class="">
        <div class="flex">
            <div class="w-1/2 px-2">
                <Users />
            </div>
            <div class="w-1/2">
                <form @submit.prevent="updateIcons">
                    <h2>Options Icons</h2>
                    <UploadImages
                        @changed="handleImages"
                        uploadMsg="Drop Icons Here or Click to Add Icons."
                    />
                    <div>
                        <p>
                            Note: After deleting image you can't retrieve it
                            back.
                        </p>

                        <div class="grid gap-2 grid-cols-9 justify-between">
                            <div v-for="image in icons" :key="image.id">
                                <div
                                    class="bg-gray-100 rounded-lg overflow-hidden mb-12"
                                >
                                    <div class="w-full flex justify-end z-20">
                                        <span
                                            class="rounded-full transition-all duration-300 absolute"
                                        >
                                            <div class="btn-group dropend">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    class="duration-700 w-5 float-right cursor-pointer text-red-400 hover:bg-red-500 hover:text-white rounded-full"
                                                    @click="
                                                        deleteIcon(image.id)
                                                    "
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </span>
                                    </div>
                                    <div>
                                        <img
                                            :src="
                                                '/images/icons/' + image.image
                                            "
                                            class="w-14 h-14 object-cover mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import UploadImages from "vue-upload-drop-images";
import useGeneral from "../../../composables/general";
import Users from "../users/Users.vue";

const { addGallery, updateIcons, icons, getIcons, destroyIcon } = useGeneral();
onMounted(() => {
    getIcons();
});
const handleImages = (images) => {
    addGallery(images);
};
const deleteIcon = async (id) => {
    await destroyIcon(id);
    await getIcons();
};
</script>
