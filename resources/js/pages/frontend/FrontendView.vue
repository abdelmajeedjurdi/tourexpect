<template>
  <!-- component -->
  <div class="flex justify-center items-center">
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    <div
      class="
        2xl:mx-auto 2xl:container
        lg:px-20 lg:py-16
        md:py-12 md:px-6
        py-9
        px-4
        w-96
        sm:w-auto
      "
    >
      <div role="main" class="flex flex-col items-center justify-center">
        <h1
          class="
            text-4xl
            font-semibold
            leading-9
            text-center text-gray-600
            dark:text-gray-50
          "
        >
          This Week Blogs
        </h1>
        <p
          class="
            text-base
            leading-normal
            text-center text-gray-600
            dark:text-white
            mt-4
            lg:w-1/2
            md:w-10/12
            w-11/12
          "
        >
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough
        </p>
      </div>
      <div class="lg:flex items-stretch md:mt-12 mt-8">
        <div
          class="
            grid grid-cols-3
            items-center
            justify-between
            xl:gap-x-8
            gap-x-6
          "
        >
          <div
            class="relative"
            v-for="category in categories"
            :key="category.id"
          >
            <div>
              <p
                class="
                  p-6
                  text-xs
                  font-medium
                  leading-3
                  text-white
                  absolute
                  top-0
                  right-0
                "
              >
                <!-- 12 April 2021 -->
              </p>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">
                  {{ category["name_en"] }}
                </h2>
                <p class="text-base leading-4 text-white mt-2">
                  {{ category["description_en"] }}
                </p>
                <a
                  href="javascript:void(0)"
                  class="
                    focus:outline-none focus:underline
                    flex
                    items-center
                    mt-4
                    cursor-pointer
                    text-white
                    hover:text-gray-200 hover:underline
                  "
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <img
              :src="'/images/categories/' + category.image"
              class="w-full"
              alt="chair"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import useCategories from "../../composables/categories";
let { categories, getCategories } = useCategories();
let lang = localStorage.getItem("lang") || "en";
onMounted(() => {
  getCategories();
});
</script>