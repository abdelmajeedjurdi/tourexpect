<template>
  <div v-if="errors">
    <div
      v-for="(v, k) in errors"
      :key="k"
      class="
        bg-red-500
        text-white
        rounded
        font-bold
        mb-4
        shadow-lg
        py-2
        px-4
        pr-0
      "
    >
      <p v-for="error in v" :key="error" class="text-sm">
        {{ error }}
      </p>
    </div>
  </div>

  <form class="space-y-6" @submit.prevent="saveCategory">
    <div class="lg:flex justify-between space-x-4">
      <div class="space-y-4 rounded-md w-full">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="category"
            id="flag"
            value="flag"
            v-model="category.category"
          />
          <label class="form-check-label" for="flag">Flag</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="category"
            id="sign"
            value="sign"
            v-model="category.category"
          />
          <label class="form-check-label" for="sign">Sign</label>
        </div>
        <div class="flex justify-between">
          <div class="w-full me-2">
            <label
              for="name_en"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >English Name</label
            >
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
                v-model="category.name_en"
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
                v-model="category.name_ar"
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
                v-model="category.description_en"
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
                v-model="category.description_ar"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-between w-96">
          <div class="w-full me-2 flex">
            <label
              for="is_slide"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Is Slide</label
            >
            <input
              type="checkbox"
              name="is_slide"
              id="is_slide"
              class="w-5 h-5 rounded ms-2"
              v-model="category.is_slide"
            />
          </div>
          <div class="w-full flex">
            <label
              for="is_trending"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Trending</label
            >
            <input
              type="checkbox"
              name="is_trending"
              id="is_trending"
              class="w-5 h-5 rounded ms-2"
              v-model="category.is_trending"
            />
          </div>
        </div>

        <div>
          <div
            class="flex w-full justify-start mt-2"
            v-if="category.image != undefined"
          >
            <img
              :src="
                imagePreview != null
                  ? imagePreview
                  : '/images/categories/' + category.image
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
      </div>
      <div class="space-y-4 rounded-md w-full bg-gray-600 p-6 mt-6 xk:mt-0">
        <h3>Properties</h3>
        <div class="flex justify-between">
          <div class="w-full me-2">
            <label
              for="title_en"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >English Title</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="title_en"
                id="title_en"
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
                v-model="property.title_en"
              />
            </div>
          </div>
          <div class="w-full">
            <label
              for="title_ar"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Arabic Title</label
            >
            <div class="mt-1">
              <input
                dir="rtl"
                type="text"
                name="title_ar"
                id="title_ar"
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
                v-model="property.title_ar"
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
                rows="5"
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
                v-model="property.description_en"
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
                rows="5"
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
                v-model="property.description_ar"
              />
            </div>
          </div>
        </div>
        <button
          v-if="!is_editing"
          type="button"
          class="
            px-6
            py-1
            bg-green-400
            rounded-lg
            text-blue-600
            hover:bg-green-300
            duration-300
          "
          @click="setProperty"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <button
          v-else
          type="button"
          class="
            px-6
            py-1
            bg-green-400
            rounded-lg
            text-blue-600
            hover:bg-green-300
            duration-300
          "
          @click="setProperty"
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
        <div
          class="rounded"
          v-for="(property, i) in category.properties"
          :key="i"
        >
          <div
            class="w-full px-4 py-1 bg-gray-400 text-black flex justify-between"
          >
            <span>{{ property.title_en }}</span>
            <div class="flex">
              <span class="cursor-pointer rotate-90" @click="editRow(property)">
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
              </span>
              <span
                class="cursor-pointer rotate-90"
                @click="deleteRow(property)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span
                class="cursor-pointer rotate-90"
                @click="
                  live_property == i
                    ? (live_property = -1)
                    : (live_property = i)
                "
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
                    d="M19 9l-7 7-7-7"
                  /></svg
              ></span>
            </div>
          </div>
          <div
            class="p-4 bg-gray-500"
            :class="live_property == i ? '' : 'hidden'"
          >
            <div class="flex text-white">
              <span class="w-1/2 text-left">{{ property.title_en }}</span>
              <span class="w-1/2 text-right">{{ property.title_ar }}</span>
            </div>
            <div class="flex">
              <p class="w-1/2 text-left">
                {{ property.description_en }}
              </p>
              <p class="w-1/2 text-right">
                {{ property.description_ar }}
              </p>
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
import useCategories from "../../../composables/categories";
import { onMounted, reactive, ref } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";
const props = defineProps({ id: String });
const { errors, category, getCategory, updateCategory, deleteProperty } =
  useCategories();
let Swal = useSwal();
let imagePreview = ref(null);
onMounted(getCategory(props.id));
let live_property = ref(-1);
let property = ref({
  title_en: "",
  title_ar: "",
  description_en: "",
  description_ar: "",
});
const saveCategory = async () => {
  await updateCategory(props.id, { form: category.value, file });
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
        await getCategory(props.id);

        console.log(property_.id);
      } else {
        category.value.properties.splice(property_, 1);
        // console.log("hasnt");
      }
      Swal.fire("Deleted!", "Deleted Successfully", "success");
    }
  });
};
const setProperty = () => {
  if (!is_editing.value) {
    category.value.properties.push(property.value);
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
</script>
