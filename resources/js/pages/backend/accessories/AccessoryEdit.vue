<template>
  <div
    v-if="isProgressing && percentage < 100"
    class="-ml-6 -mt-6 w-full pt-52 fixed bg-black bg-opacity-50 z-20"
    style="height: 100%"
  >
    <progress-bar :percentage="percentage" />
  </div>

  <form class="space-y-6" @submit.prevent="saveAccessory">
    <div class="lg:flex justify-between space-x-4">
      <div class="space-y-4 rounded-md w-full">
        <div class="flex justify-between">
          <div
            v-if="categories.length && accessory['category_id']"
            class="me-2"
          >
            <searchable-dropdown
              :options="categories"
              :category_id="accessory['category_id']"
              @selected="selectCategory($event)"
              class="mt-6 me-2"
            />
          </div>
          <div class="w-full me-2">
            <label
              for="name_en"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >English Name
            </label>
            <div class="mt-1">
              <input
                type="text"
                name="name_en"
                id="name_en"
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
                "
                v-model="accessory.name_en"
              />
            </div>
          </div>
          <div class="w-full">
            <label
              for="name_ar"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Arabic Name</label
            >
            <div class="mt-1">
              <input
                dir="rtl"
                type="text"
                name="name_ar"
                id="name_ar"
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
                "
                v-model="accessory.name_ar"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="w-full me-2">
            <label
              for="description_en"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >English Description</label
            >
            <div class="mt-1">
              <textarea
                rows="10"
                type="text"
                name="description_en"
                id="description_en"
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
                "
                v-model="accessory.description_en"
              />
            </div>
          </div>
          <div class="w-full">
            <label
              for="description_ar"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Arabic Description</label
            >
            <div class="mt-1">
              <textarea
                dir="rtl"
                rows="10"
                type="text"
                name="description_ar"
                id="description_ar"
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
                "
                v-model="accessory.description_ar"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            class="flex w-full justify-start mt-2"
            v-if="accessory.image != undefined"
          >
            <img
              :src="
                imagePreview != null
                  ? imagePreview
                  : '/images/accessories/' + accessory.image
              "
              alt=""
              class="figure-img img-fluid rounded"
              style="max-height: 100px"
            />
          </div>

          <div class="flex flex-col mt-2">
            <input
              class="
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
              "
              @change="onFileSelected"
              type="file"
              id="user-image"
            />
            <label for="user-image" class="w-100 flex justify-start"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                /></svg
            ></label>
          </div>
        </div>

        <div class="mt-2">
          <h2>Gallery</h2>
          <UploadImages @changed="handleImages" />
        </div>
        <div>
          <p>Note: After deleting image you can't retrieve it back.</p>
          <div class="grid grid-cols-8">
            <div
              v-for="image in accessory.images"
              :key="image.id"
              class="w-48 bg-white mt-1"
            >
              <div class="text-right absolute w-48 text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="
                    duration-700
                    w-6
                    float-right
                    cursor-pointer
                    hover:bg-red-400 hover:text-white
                    rounded-full
                  "
                  @click="deleteFile('img', image.id)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <img
                class="h-28 mx-auto"
                :src="'/images/accessories/' + image.image"
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <div class="mt-2">
            <h2>Files</h2>
            <UploadImages
              @changed="handleFiles"
              uploadMsg="Click to upload or drop your files here"
            />
          </div>
          <p class="mt-3">
            Note: After deleting a file you can't retrieve it back.
          </p>
          <div class="grid grid-cols-8">
            <div
              v-for="file in accessory.files"
              :key="file.id"
              class="w-28 bg-white rounded"
            >
              <div class="text-right absolute w-28 text-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="
                    duration-700
                    w-6
                    float-right
                    cursor-pointer
                    hover:bg-red-400 hover:text-white
                    rounded-full
                  "
                  @click="deleteFile('f', file.id)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 class="text-base mx-auto w-28">
                  {{ file.original_name }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="
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
      "
    >
      Update
    </button>
  </form>
</template>

<script setup>
import useAccessories from "../../../composables/accessories";
import useCategories from "../../../composables/categories";
import { onMounted, reactive, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
import UploadImages from "vue-upload-drop-images";
import SearchableDropdown from "../../../components/SearchableDropdown.vue";
import ProgressBar from "../../../components/ProgressBar.vue";
const props = defineProps({ id: String });
let isProgressing = ref(false);
const {
  errors,
  accessory,
  percentage,
  getAccessory,
  updateAccessory,
  addGallery,
  addFiles,
  destroyImage,
  destroyFile,
} = useAccessories();
const { categories, getCategories } = useCategories();
let Swal = useSwal();
onMounted(async () => {
  getAccessory(props.id);
  await getCategories();
});
const saveAccessory = async () => {
  isProgressing.value = true;
  await updateAccessory(props.id, {
    form: accessory.value,
    file,
  });
  isProgressing.value = false;
};
let is_editing = ref(false);
const deleteFile = async (type = "img", id) => {
  console.log(id);
  if (type == "img") {
    await destroyImage(id);
  } else await destroyFile(id);
  await getAccessory(props.id);
};
const handleImages = (images) => {
  addGallery(images);
};
const handleFiles = (files) => {
  addFiles(files);
};
let file = reactive(null);
let imagePreview = ref(null);
function onFileSelected(event) {
  file = event.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    imagePreview.value = event.target.result;
  };
}
const selectCategory = (category_id) => {
  accessory.value.category_id = category_id;
  console.log(accessory.value.category_id);
};
</script>
