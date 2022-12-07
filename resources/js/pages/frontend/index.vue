<template>
  <div>
    <!-- Hero Section -->
    <div class="">
      <div
        class="
          relative
          overflow-hidden
          w-full
          block
          md:flex
          items-center
          bg-no-repeat bg-cover bg-center
        "
      >
        <img src="/images/hero2.jpg" alt="" />
        <!-- <div class="">
          <div
            class="
              relative
              z-10
              pb-8
              sm:pb-16
              md:pb-20
              lg:max-w-2xl lg:w-full lg:pb-28
              xl:pb-32
            "
          >
            <main
              class="
                mt-10
                mx-auto
                max-w-7xl
                px-4
                sm:mt-12 sm:px-6
                md:mt-16
                lg:mt-20 lg:px-8
                xl:mt-28
              "
            >
              <div class="">
                <h1
                  class="
                    text-xl
                    tracking-tight
                    font-bold
                    text-white
                    md:text-4xl
                    lg:text-3xl
                  "
                >
                  {{ $t("hero-header") }}
                </h1>
                <p
                  class="
                    mt-3
                    text-base text-white
                    sm:mt-5 sm:max-w-xl sm:mx-auto
                    md:mt-5 md:text-
                    lg:mx-0
                  "
                >
                  {{ $t("hero-description") }}
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex justify-center sm:justify-start"
                >
                  <div class="" style="width: 90%">
                    <form>
                      <div class="relative">
                        <div
                          class="
                            flex
                            absolute
                            inset-y-0
                            items-center
                            px-3
                            pointer-events-none
                          "
                          :class="lang == 'ar' ? 'right-0' : 'left-0'"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="
                            block
                            py-3
                            px-10
                            w-full
                            text-sm text-gray-900
                            bg-gray-50
                            rounded-lg
                            border border-gray-300
                            focus:ring-blue-500 focus:border-blue-500
                          "
                          :placeholder="
                            $t('search_all_experiences_and_destinations')
                          "
                          required
                        />
                        <button
                          type="submit"
                          class="
                            text-white
                            absolute
                            bottom-2.5
                            bg-blue-700
                            hover:bg-blue-800
                            focus:ring-4 focus:outline-none focus:ring-blue-300
                            font-medium
                            rounded-lg
                            text-sm
                            px-4
                            py-2
                          "
                          :class="lang == 'ar' ? 'left-2.5' : 'right-2.5'"
                        >
                          {{ $t("search") }}
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </main>
          </div>
        </div> -->
      </div>
      <!-- <div
        class="
          mx-auto
          my-2
          flex
          w-full
          max-w-6xl
          justify-between
          px-2
          sm:px-4
          md:flex
          xl:px-0
        "
      >
        <div
          class="
            grid grid-cols-1
            gap-2
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
          "
        >
          <div class="text-center">
            <button class="rounded p-8">
              <div class="flex items-center justify-center text-gray-500">
                <div class="mx-auto w-fit rounded-full bg-blue-500 p-1">
                  <div
                    class="
                      w-fit
                      rounded-full
                      border-4 border-double border-white
                      bg-blue-500
                      p-2
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-10 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-2 text-center">
                <h6 class="mt-2 font-semibold text-black">+1000 cursion</h6>
                <p class="mt-3 text-sm">
                  Build a page using page fragments and edit content inline
                </p>
              </div>
            </button>
          </div>

          <div class="text-center">
            <button class="rounded p-8">
              <div class="flex items-center justify-center text-gray-500">
                <div class="mx-auto w-fit rounded-full bg-blue-500 p-1">
                  <div
                    class="
                      w-fit
                      rounded-full
                      border-4 border-double border-white
                      bg-blue-500
                      p-2
                    "
                  >
                    <svg
                      class="w-10 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-2 text-center">
                <h6 class="mt-2 font-semibold text-black">Happy Tourists</h6>
                <p class="mt-3 text-sm">
                  We work for understanding tourist happiness
                </p>
              </div>
            </button>
          </div>

          <div class="text-center">
            <button class="rounded p-8">
              <div class="flex items-center justify-center text-gray-500">
                <div class="mx-auto w-fit rounded-full bg-blue-500 p-1">
                  <div
                    class="
                      w-fit
                      rounded-full
                      border-4 border-double border-white
                      bg-blue-500
                      p-2
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-10 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-2 text-center">
                <h6 class="mt-2 font-semibold text-black">The best prices</h6>
                <p class="mt-3 text-sm">
                  Choosing our website is a great way to get the lowest price
                </p>
              </div>
            </button>
          </div>

          <div class="text-center">
            <button class="rounded p-8">
              <div class="flex items-center justify-center text-gray-500">
                <div class="mx-auto w-fit rounded-full bg-blue-500 p-1">
                  <div
                    class="
                      w-fit
                      rounded-full
                      border-4 border-double border-white
                      bg-blue-500
                      p-2
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-10 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-2 text-center">
                <h6 class="mt-2 font-semibold text-black">24/7 Support</h6>
                <p class="mt-3 text-sm">
                  We work directly with you via our 24/7 live chat to help you
                </p>
              </div>
            </button>
          </div>
        </div>
      </div> -->
    </div>
    <!-- end hero section -->
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

let lang = ref("en");
onMounted(() => {
  lang.value = localStorage.getItem("lang");
});
</script>
