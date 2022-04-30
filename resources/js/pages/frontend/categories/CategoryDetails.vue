<template>
  <div v-if="isLoading">
    <preloader />
  </div>
  <div
    v-else
    class="text-gray-200 container lg:px-20 md:px-6 px-4 w-96 sm:w-auto"
  >
    <div class="md:my-12 my-12">
      <h2 class="font-bold mb-2 uppercase">{{ category["name_" + lang] }}</h2>
      <p class="lg:w-1/2">{{ category["description_" + lang] }}</p>
    </div>

    <div
      class="
        grid
        gap-2
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        justify-between
      "
    >
      <div v-for="product in products" :key="product.id">
        <div class="overflow-hidden mb-10 brightness">
          <router-link
            :to="{
              name: 'product',
              params: { slug: product['slug'] },
            }"
          >
            <img
              :src="'/images/products/' + product.image"
              alt="image"
              class="w-full h-48"
            />
            <div class="p-2 text-center">
              <h2 class="text-base text-gray-200 mb-0 uppercase">
                {{ product["name_" + lang] }}
              </h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:gap-36">
      <div
        class="my-2"
        v-for="property in category.properties"
        :key="property.id"
      >
        <h3 class="uppercase">{{ property["title_" + lang] }}</h3>
        <p>{{ property["description_" + lang] }}</p>
      </div>
    </div>
    <div class="my-12" v-if="accessories.length">
      <h2 class="font-bold mb-2 uppercase">{{ $t("accessories") }}</h2>
      <div
        class="
          mt-6
          grid
          gap-2
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          justify-between
        "
      >
        <div class="" v-for="accessory in accessories" :key="accessory.id">
          <div class="overflow-hidden mb-10 brightness">
            <router-link
              :to="{
                name: 'accessory',
                params: { slug: accessory['slug'] },
              }"
            >
              <img
                :src="'/images/accessories/' + accessory.image"
                alt="image"
                class="w-full h-48"
              />
              <div class="p-2 text-center">
                <h2 class="text-base text-gray-200 mb-0 uppercase">
                  {{ accessory["name_" + lang] }}
                </h2>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { inject } from "vue";
import useCategories from "../../../composables/categories";
import Preloader from "../../frontend/Preloader.vue";
const props = defineProps({ slug: String });
const { getCategoryDetails, category, products, accessories } = useCategories();
const lang = inject("lang");
let isLoading = ref(false);
onMounted(async () => {
  isLoading.value = true;
  await getCategoryDetails(props.slug);

  isLoading.value = false;
});
</script>

<style>
.brightness:hover {
  filter: brightness(1.5);
  transition-duration: 1s;
}
</style>