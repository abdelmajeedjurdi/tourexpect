<template>
  <div class="lg:flex" v-if="product.length != []">
    <div class="w-1/2">
      <img :src="'/images/products/' + product.image" alt="" class="w-full" />
    </div>
    <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
      <div class="text-left">
        <h2 class="text-3xl text-gray-100 font-bold">{{ product.name_en }}</h2>
        <h2 class="text-xl text-gray-200 font-semibold">
          {{ product["category"].name_en }}
        </h2>
        <p class="mt-4 text-gray-300">
          {{ product.description_en }}
        </p>
        <ul>
          <li v-for="property in product.properties" :key="property.id">
            <span class="text-gray-200">{{ property.title_en }}</span>
            <p class="text-gray-400">{{ property.description_en }}</p>
          </li>
        </ul>
      </div>
      <div class="text-right">
        <h2 class="text-3xl text-gray-100 font-bold">{{ product.name_ar }}</h2>
        <h2 class="text-xl text-gray-200 font-semibold">
          {{ product["category"].name_ar }}
        </h2>
        <p class="mt-4 text-gray-300">
          {{ product.description_ar }}
        </p>
        <ul>
          <li v-for="property in product.properties" :key="property.id">
            <span class="text-gray-200">{{ property.title_ar }}</span>
            <p class="text-gray-400">{{ property.description_ar }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import useProducts from "../../../composables/products";
const props = defineProps({
  id: String,
});
const { product, getProduct } = useProducts();
onMounted(() => {
  getProduct(props.id);
});
</script>
