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
      <div v-for="i in 9">
        <div class="bg-white rounded-lg overflow-hidden mb-10">
          <img
            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
            alt="image"
            class="w-full"
          />
          <div class="p-2 text-center">
            <span class="text-base text-blue-500"> Card Title </span>

            <p class="text-base text-body-color leading-relaxed mb-7">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <a
              href="javascript:void(0)"
              class="
                inline-block
                py-2
                px-7
                border border-[#E5E7EB]
                rounded-full
                text-base text-body-color
                font-medium
                hover:border-primary hover:bg-primary hover:text-white
                transition
              "
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCategories from "../../../composables/categories";
import { onMounted } from "vue";

export default {
  setup() {
    const { categories, getCategories, destroyCategory } = useCategories();

    onMounted(getCategories);

    const deleteCategory = async (id) => {
      if (!window.confirm("Are you sure?")) {
        return;
      }

      await destroyCategory(id);
      await getCategories();
    };

    return {
      categories,
      deleteCategory,
    };
  },
};
</script>
