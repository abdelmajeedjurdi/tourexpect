<template>
  <div class="text-gray-200 container lg:px-20 md:px-6 px-4 w-96 sm:w-auto">
    <images-carousel
      v-if="product.images"
      :slides="product['images']"
      class="mt-2"
    />
    <div class="my-12 lg:flex justify-between w-full">
      <div class="lg:w-2/3">
        <div>
          <h2 class="font-bold mb-2">{{ product["name_" + lang] }}</h2>
          <p class="lg:w-2/3">{{ product["description_" + lang] }}</p>
        </div>

        <div class="rounded mb-12 w-2/3">
          <product-inquire></product-inquire>
          <div
            class="
              w-full
              px-4
              py-2
              border-b border-t
              text-white
              flex
              justify-between
            "
          >
            <span>{{ $t("files") }}</span>
            <div class="flex">
              <span
                class="cursor-pointer rotate-90"
                @click="
                  active_tab == 'files'
                    ? (active_tab = '')
                    : (active_tab = 'files')
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
          <div class="py-2" :class="active_tab == 'files' ? '' : 'hidden'">
            <ul>
              <li v-for="file in product.files" :key="file.id">
                <a
                  target="_blank"
                  :href="'/files/products/' + file.file"
                  class="text-gray-300 hover:text-gray-50"
                  >{{ file.original_name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lg:w-1/3">
        <div
          class="my-2"
          v-for="property in product.properties"
          :key="property.id"
        >
          <h3 class="uppercase">{{ property["title_" + lang] }}</h3>
          <p>{{ property["description_" + lang] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { inject } from "vue";
import useProducts from "../../../composables/products";
import ImagesCarousel from "../../../components/ImagesCarousel.vue";
import ProductInquire from "../../../components/ProductInquire";
const props = defineProps({ slug: String });
const { getProductDetails, product, products } = useProducts();
const lang = inject("lang");
let active_tab = ref("");
onMounted(() => {
  getProductDetails(props.slug);
  let url = new URL(location.href);
  console.log(url.href);
});
</script> 