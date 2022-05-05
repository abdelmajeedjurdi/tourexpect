<template>
  <div class="container mt-4 text-gray-200" :dir="lang == 'ar' ? 'rtl' : 'ltr'">
    <h1 class="">{{ $t("contact-us") }}</h1>
    <form @submit.prevent="makeContact" id="form">
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
        <input
          type="text"
          name="subject"
          v-model="form.subject"
          id="subject"
          :placeholder="$t('subject')"
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
            <span> {{ $t("send-message") }} </span>
          </div>
        </button>
      </div>
      <p class="text-base text-center text-gray-400" id="result"></p>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import { inject } from "vue";
let lang = inject("lang");

let form = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});
let flashMessage = ref("Sending...");
let sending = ref(false);
const makeContact = async () => {
  sending.value = true;
  await axios
    .post("/api/contact", form)
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