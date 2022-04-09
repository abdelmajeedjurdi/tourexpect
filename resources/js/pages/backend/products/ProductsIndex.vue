<template>
  <div class="w-full">
    <div class="mx-2 flex justify-between place-content-end mb-4">
      <h3>All Categories</h3>
      <div
        class="
          px-4
          py-2
          bg-blue-600
          hover:bg-blue-700
          cursor-pointer
          rounded-lg
        "
      >
        <router-link
          :to="{ name: 'categories.create' }"
          class="text-sm font-medium text-white"
          >New Category</router-link
        >
      </div>
    </div>
    <div
      class="
        grid
        gap-2
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        justify-between
      "
    >
      <div v-for="category in categories" :key="category.id">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <div class="w-full flex justify-end z-20">
            <span class="rounded-full p-1 transition-all duration-300 absolute">
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
                      class="w-full ms-2"
                      :to="{
                        name: 'categories.edit',
                        params: { id: category.id },
                      }"
                      >Edit
                    </router-link>
                  </li>
                  <li class="w-full text-red-500 hover:bg-gray-300">
                    <button @click="deleteRow(category)" class="ms-2">
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <router-link
            :to="{ name: 'categories.details', params: { id: category.id } }"
          >
            <img
              :src="'/images/categories/' + category.image"
              alt="image"
              class="w-full h-48"
            />
            <div class="p-2 h-32">
              <span class="text-base text-blue-500">
                {{ category.name_en }}
              </span>

              <p
                class="
                  text-base text-body-color
                  leading-relaxed
                  mb-7
                  text-gray-600
                "
              >
                {{
                  category.description_en.substring(0, 100) +
                  (category.description_en.length > 100 ? "...." : "")
                }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useCategories from "../../../composables/categories";
import { onMounted } from "vue";
import { useSwal } from "../../../plugins/useSwal.js";

const { categories, getCategories, destroyCategory } = useCategories();

let Swal = useSwal();
onMounted(getCategories);

const deleteCategory = async (id) => {
  if (!window.confirm("Are you sure?")) {
    return;
  }

  await destroyCategory(id);
  await getCategories();
};
const deleteRow = (category_) => {
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
      await destroyCategory(category_.id);
      await getCategories();
      Swal.fire("Deleted!", "Order has been deleted.", "success");
    }
  });
};
</script>
