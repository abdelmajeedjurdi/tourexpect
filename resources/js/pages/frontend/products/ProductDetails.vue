<template>
  <div class="text-gray-200 container lg:px-20 md:px-6 px-4 w-96 sm:w-auto">
    <!-- <div class="md:my-12 my-12">
      <h2 class="font-bold mb-2">{{ product["name_" + lang] }}</h2>
      <p class="lg:w-1/2">{{ product["description_" + lang] }}</p>
    </div> -->
  </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import { inject } from "vue";
import useProducts from "../../../composables/products";
const props = defineProps({ slug: String });
const { getProductDetails, product, products } = useProducts();
const lang = inject("lang");
onMounted(() => {
  getProductDetails(props.slug);
});
</script>