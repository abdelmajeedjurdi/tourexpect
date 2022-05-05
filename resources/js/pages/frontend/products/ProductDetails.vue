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
          <div>
            <div
              class="
                w-full
                px-4
                py-2
                mt-12
                border-t border-b
                text-white
                flex
                justify-between
              "
            >
              <span>{{ $t("inquiry") }}</span>
              <div class="flex">
                <span
                  class="cursor-pointer rotate-90"
                  @click="
                    active_tab == 'inquiry'
                      ? (active_tab = '')
                      : (active_tab = 'inquiry')
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
              class="py-2 transition-opacity duration-300 ease-linear"
              :class="
                active_tab == 'inquiry'
                  ? 'opacity-100'
                  : ' opacity-0  invisible h-0'
              "
            >
              <form @submit.prevent="makeInquire" id="form">
                <div class="mb-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    :placeholder="$t('your-name')"
                    required
                    v-model="form.name"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border focus:border-indigo-100
                      bg-gray-800
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    :placeholder="$t('your-email')"
                    required
                    v-model="form.email"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border focus:border-indigo-100
                      bg-gray-800
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="phone"
                    v-model="form.phone"
                    id="phone"
                    :placeholder="$t('your-phone')"
                    required
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border focus:border-indigo-100
                      bg-gray-800
                    "
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    :placeholder="$t('your-message')"
                    v-model="form.message"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border focus:border-indigo-100
                      bg-gray-800
                    "
                    required
                  ></textarea>
                </div>
                <div class="mb-6">
                  <button
                    type="submit"
                    class="
                      w-full
                      px-3
                      py-2
                      text-white
                      bg-indigo-500
                      rounded-md
                      focus:bg-indigo-600 focus:outline-none
                      flex
                    "
                  >
                    <div class="flex justify-center mx-auto">
                      <svg
                        v-if="sending"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                        class="animate-spin h-6"
                      >
                        <path
                          d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                          fill="#fefefe"
                          stroke="none"
                          transform="matrix(1,0,0,1,0,0)"
                          style="
                            transform: matrix(1, 0, 0, 1, 0, 0);
                            animation-play-state: paused;
                          "
                        />
                      </svg>
                      <span> {{ $t("send-inquiry") }} </span>
                    </div>
                  </button>
                </div>
                <p class="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
          <div>
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
                    class="h-6 w-6 cursor-pointer"
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
              class="py-2 transition-opacity duration-300 ease-linear"
              :class="
                active_tab == 'files'
                  ? 'opacity-100'
                  : 'opacity-0 invisible h-0'
              "
            >
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
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { inject } from "vue";
import useProducts from "../../../composables/products";
import ImagesCarousel from "../../../components/ImagesCarousel.vue";
import ProductInquire from "../../../components/ProductInquire";
import axios from "axios";
import Preloader from "../../frontend/Preloader.vue";
const props = defineProps({ slug: String });
const { getProductDetails, product, products } = useProducts();
const lang = inject("lang");
let active_tab = ref("");

onMounted(() => {
  getProductDetails(props.slug);
  let url = new URL(location.href);
  form.url = url.href;
});

let form = reactive({
  name: "",
  email: "",
  phone: "",
  url: "",
  message: "",
});
let flashMessage = ref("Sending...");
let sending = ref(false);
const makeInquire = async () => {
  sending.value = true;
  await axios
    .post("/api/inquire", form)
    .then((res) => {
      clearForm();
      flashMessage.value = res.data;
      setTimeout(() => {}, 3000);
      console.log(res);
    })
    .catch((e) => {
      if (e.response.state == 422) {
        console.log("state: " + 422);
      }
      console.log(e);
    });
  sending.value = false;
};

const clearForm = () => {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.subject = "";
  form.message = "";
};
</script> 