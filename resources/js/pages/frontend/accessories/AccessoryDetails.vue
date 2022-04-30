<template>
  <div v-if="isLoading">
    <preloader />
  </div>
  <div
    v-else
    class="text-gray-200 container lg:px-20 md:px-6 px-4 w-96 sm:w-auto"
  >
    <accessory-carousel
      v-if="accessory.images"
      :slides="accessory['images']"
      class="mt-2"
    />
    <div class="my-12 lg:flex justify-between w-full">
      <div class="lg:w-2/3">
        <div>
          <h2 class="font-bold mb-2">{{ accessory["name_" + lang] }}</h2>
          <p class="lg:w-2/3">{{ accessory["description_" + lang] }}</p>
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
                    placeholder="John Doe"
                    required
                    v-model="form.name"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none
                      focus:ring
                      focus:ring-indigo-100
                      focus:border-indigo-300
                      bg-gray-800
                    "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    v-model="form.email"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none
                      focus:ring
                      focus:ring-indigo-100
                      focus:border-indigo-300
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
                    placeholder="+1 (555) 1234-567"
                    required
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none
                      focus:ring
                      focus:ring-indigo-100
                      focus:border-indigo-300
                      bg-gray-800
                    "
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    v-model="form.message"
                    class="
                      w-full
                      px-3
                      py-2
                      placeholder-gray-300
                      border border-gray-300
                      rounded-md
                      focus:outline-none
                      focus:ring
                      focus:ring-indigo-100
                      focus:border-indigo-300
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
                      <span> Send Message </span>
                    </div>
                  </button>
                </div>
                <p class="text-base text-center text-gray-400" id="result"></p>
              </form>
            </div>
          </div>
          <div
            class="
              w-full
              px-4
              py-2
              border-t border-b
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
              <li v-for="file in accessory.files" :key="file.id">
                <a
                  target="_blank"
                  :href="'/files/accessories/' + file.file"
                  class="text-gray-300 hover:text-gray-50"
                  >{{ file.original_name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { inject } from "vue";
import useAccessories from "../../../composables/accessories";
import AccessoryCarousel from "../../../components/AccessoryCarousel.vue";
import Preloader from "../../frontend/Preloader.vue";
const props = defineProps({ slug: String });
const { getAccessoryDetails, accessory, accessories } = useAccessories();
const lang = inject("lang");
let active_tab = ref("");
let isLoading = ref(false);
onMounted(async () => {
  isLoading.value = true;
  await getAccessoryDetails(props.slug);
  let url = new URL(location.href);
  form.url = url.href;
  isLoading.value = false;
});
let flashMessage = ref("Sending...");
let sending = ref(false);
let form = reactive({
  name: "",
  email: "",
  phone: "",
  url: "",
  message: "",
});
const makeInquire = async () => {
  sending.value = true;
  await axios
    .post("/api/inquire", form)
    .then((res) => {
      clearForm();
      flashMessage.value = res.data;
      setTimeout(() => {
        flash.value = false;
      }, 3000);
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
</script> 