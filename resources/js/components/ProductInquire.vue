<template>
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
          active_tab == 'inquiry' ? (active_tab = '') : (active_tab = 'inquiry')
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
  <div class="py-2" :class="active_tab == 'inquiry' ? '' : 'hidden'">
    <!-- <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <div class="m-7"> -->
    <form @submit.prevent="makeInquire" id="form">
      <div class="mb-6">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
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
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
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
        <input
          type="text"
          name="phone"
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
          "
        >
          Send Message
        </button>
      </div>
      <p class="text-base text-center text-gray-400" id="result"></p>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
let url = new URL(location.href);
let active_tab = ref("");
onMounted(() => {});
const makeInquire = () => {
  console.log(console.log(url.href));
};
</script> 
  