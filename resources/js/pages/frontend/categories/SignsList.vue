<template>
  <!-- component -->
  <div>
    <div class="flex justify-center items-center">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div
        class="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 w-96 sm:w-auto"
      >
        <div class="lg:flex items-stretch md:mt-12 mt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
            <div
              class="relative h-full brightness"
              v-for="category in categories"
              :key="category.id"
            >
              <router-link
                :to="{
                  name: 'category',
                  params: { slug: category['slug'] },
                }"
              >
                <div>
                  <div
                    class="absolute bottom-0 p-6"
                    :class="lang == 'en' ? 'left-0' : 'right-0'"
                  >
                    <h2 class="text-base lg:text-xl font-semibold 5 text-white">
                      {{ category["name_" + lang] }}
                    </h2>
                    <p class="text-sm lg:text-base leading-4 text-white mt-2">
                      {{
                        category["description_" + lang].substring(0, 100) +
                        (category["description_" + lang].length > 100
                          ? "...."
                          : "")
                      }}
                    </p>
                  </div>
                </div>
                <img
                  :src="'/images/categories/' + category.image"
                  class="w-full h-full"
                  alt="chair"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import useCategories from "../../../composables/categories";
import { inject } from "vue";
let { categories, getFlagsOrSigns, slides } = useCategories();
let lang = ref(inject("lang") || "en");
onMounted(() => {
  getFlagsOrSigns("sign");
});
</script>
<style>
.brightness:hover {
  filter: brightness(1.5);
  transition-duration: 1s;
}
</style>