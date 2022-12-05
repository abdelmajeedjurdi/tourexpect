<template>
  <div class="">
    <div>
      <SwiperSlider img_src="activities" :imgs="activity.images" />
    </div>
    <div
      class="
        px-2
        sm:px-4
        xl:px-0
        md:flex
        w-full
        max-w-6xl
        mx-auto
        my-10
        justify-between
      "
    >
      <div class="w-full md:w-3/4">
        <div class="w-full mb-8 px-2">
          <h1 class="font-bold text-indigo-800 text-3xl pb-3 pt-0 my-auto">
            {{ activity["title_" + lang] }}
          </h1>
          <div
            class="
              grid
              gap-4
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              justify-between
              w-full
            "
            v-if="activity['banner_highlights']"
          >
            <div
              v-for="highlight in activity['banner_highlights']"
              :key="highlight"
            >
              <div class="flex">
                <img
                  class="h-6 mx-1"
                  :src="'/images/icons/' + highlight.img"
                  alt=""
                />
                <span class="text-base font-bold">{{
                  highlight["title_en"]
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="activity['options'] != undefined && activity['options'].length"
          class="border rounded p-2"
        >
          <h3 class="text-indigo-800 font-bold">
            {{ $t("activity_options") }}
          </h3>
          <div class="space-y-2 mt-4">
            <div
              v-for="(option, i) in activity['options']"
              :key="option"
              class="
                rounded
                py-3
                px-16
                border
                flex
                justify-between
                cursor-pointer
                duration-500
                hover:bg-blue-200
              "
              :class="selected_idx == i ? 'bg-blue-300' : ''"
              @click="setOption(option, i)"
            >
              <div>
                <h3 class="font-bold text-xl">{{ option["title_" + lang] }}</h3>
                <div class="text-sm">
                  {{ activity["duration_" + lang] }}
                </div>
              </div>
              <div
                class="
                  overflow-hidden
                  text-right text-base text-body-color
                  leading-relaxed
                  text-indigo-800
                  font-bold
                  m-2
                "
              >
                <span class="flex">
                  <div>
                    <div
                      v-if="option['option_discount']"
                      style="text-decoration: line-through"
                      class="text-gray-400 me-1 text-xl"
                    >
                      {{ option["adult_price"] + "$" }}
                    </div>
                    <div class="text-gray-800 font-bold text-2xl">
                      {{
                        option["option_discount_type"] == "amount"
                          ? option["adult_price"] - option["option_discount"]
                          : (
                              option["adult_price"] -
                              (option["adult_price"] *
                                option["option_discount"]) /
                                100
                            ).toFixed(2)
                      }}$
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <itinerary
          v-if="
            activity['itinerary'] != undefined && activity['itinerary'].length
          "
          class="border py-2 mt-3"
          :section_list="activity['itinerary']"
          section_title="itinerary"
        />
        <base-section
          v-if="
            activity['description_' + lang] &&
            activity['description_' + lang] != 'null'
          "
          class="border p-2 mt-3"
          :section_description="activity['description_' + lang]"
          section_title="activity_overview"
        />
        <list-section
          v-if="
            activity['highlights_' + lang] &&
            activity['highlights_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['highlights_' + lang]"
          section_title="activity_highlights"
        />
        <list-section
          v-if="
            activity['include_' + lang] && activity['include_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['include_' + lang]"
          section_title="activity_inclusion"
        />
        <list-section
          v-if="
            activity['exclude_' + lang] && activity['exclude_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['exclude_' + lang]"
          section_title="activity_exclusion"
        />
        <list-section
          v-if="
            activity['information_' + lang] &&
            activity['information_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['information_' + lang]"
          section_title="important_information"
        />
        <list-section
          v-if="
            activity['policy_' + lang] && activity['policy_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['policy_' + lang]"
          section_title="policy"
        />
        <list-section
          v-if="
            activity['timing_and_transfer_' + lang] &&
            activity['timing_and_transfer_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['timing_and_transfer_' + lang]"
          section_title="timing_and_transfer"
        />
        <list-section
          v-if="
            activity['terms_and_conditions_' + lang] &&
            activity['terms_and_conditions_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['terms_and_conditions_' + lang]"
          section_title="terms_and_conditions"
        />
        <list-section
          v-if="
            activity['notes_' + lang] && activity['notes_' + lang] != 'null'
          "
          class="border py-2 mt-3"
          :section_list="activity['notes_' + lang]"
          section_title="notes"
        />
      </div>
      <div class="w-full md:w-1/4 mt-4">
        <div class="sticky top-24">
          <!-- 1111111111111111111111111111111111 -->
          <div class="border p-4">
            <form v-if="selected_option != null" class="mb-4">
              <div
                class="
                  overflow-hidden
                  text-right text-base text-body-color
                  leading-relaxed
                  text-indigo-800
                  font-bold
                  m-2
                "
              >
                <span class="flex justify-between">
                  <span class="text-xl"> {{ $t("price") }}</span>
                  <div>
                    <div
                      v-if="selected_option['option_discount']"
                      style="text-decoration: line-through"
                      class="line-through text-gray-400 me-1 text-xl"
                    >
                      {{ original_price }}$
                    </div>
                    <div class="text-gray-800 text-2xl">
                      {{ total_price.toFixed(2) }}$
                    </div>
                  </div>
                </span>
              </div>
              <div class="mb-3">
                <label for="guests" class="tour-label">{{
                  $t("guests")
                }}</label>
                <div class="dropdown">
                  <div class="peer border p-2 w-full dropbtn">
                    {{
                      adults +
                      " " +
                      $t("adults") +
                      ", " +
                      children +
                      " " +
                      $t("child") +
                      " "
                    }}
                  </div>
                  <!-- the menu here -->
                  <div
                    class="
                      absolute
                      dropdown-content
                      peer-hover:flex
                      hover:flex
                      h-0
                      w-0
                      flex-col
                      bg-white
                      drop-shadow-lg
                    "
                  >
                    <div class="flex justify-between">
                      <div>Adults</div>
                      <div class="flex">
                        <button
                          @click.prevent="setGuests('a', -1)"
                          class="bg-yellow-500 w-6 h-6 rounded text-white"
                        >
                          -
                        </button>
                        <span class="w-10 text-center">{{ adults }}</span>
                        <button
                          type="button"
                          @click.prevent="setGuests('a', 1)"
                          class="bg-yellow-500 w-6 h-6 rounded text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-between mt-3">
                      <div>Children</div>
                      <div class="flex">
                        <button
                          type="button"
                          @click.prevent="setGuests('c', -1)"
                          class="bg-yellow-500 w-6 h-6 rounded text-white"
                        >
                          -
                        </button>
                        <span class="w-10 text-center">{{ children }}</span>
                        <button
                          type="button"
                          @click.prevent="setGuests('c', 1)"
                          class="bg-yellow-500 w-6 h-6 rounded text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="
                  text-white
                  w-full
                  rounded
                  bg-blue-700
                  hover:bg-blue-800
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  font-medium
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  duration-300
                "
              >
                Reserve
              </button>
            </form>

            <a
              :href="
                'https://wa.me/+9647509882000/?text=' +
                'https://tourexpect.com' +
                router.currentRoute.value.fullPath +
                '\u000a I want to ask about this'
              "
              target="_blank"
              class="
                flex
                bg-green-400
                text-white
                rounded-full
                items-center
                py-2
                px-4
                space-x-2
                mx-auto
                mb-4
              "
            >
              <img src="/images/whatsapp.svg" alt="whatsapp" class="h-6" />
              <span>Text us on Whatsapp</span></a
            >

            <TourInquire />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, inject, ref } from "vue";
import useActivities from "../../../composables/activities";
import SwiperSlider from "../../../components/SwiperSlider.vue";
import BaseSection from "../../../components/BaseSection.vue";
import Itinerary from "../../../components/Itinerary.vue";
import ListSection from "../../../components/ListSection.vue";
import CallToAction from "../../../components/CallToAction.vue";
import TourInquire from "../../../components/TourInquire.vue";
import { useRoute, useRouter } from "vue-router";
const { getActivityDetails, activity } = useActivities();
const props = defineProps({ slug: String });
const router = useRouter();

let phone = ref(null);
let adults = ref(1);
let children = ref(0);
let selected_option = ref(null);
let total_price = ref(null);
let selected_idx = ref(0);
let lang = inject("lang") || "en";
onMounted(async () => {
  await getActivityDetails(props.slug);
  selected_option.value = activity.value.options[0];
  calculatePrice();
});
const setOption = (opt, idx) => {
  selected_idx.value = idx;
  selected_option.value = opt;
  calculatePrice();
};
let original_price = ref(null);
const calculatePrice = () => {
  if (!selected_option.value) {
    return;
  }
  original_price.value =
    selected_option.value["adult_price"] * adults.value +
    selected_option.value["child_price"] * children.value;

  if (selected_option.value["option_discount_type"] == "amount") {
    total_price.value =
      selected_option.value["adult_price"] * adults.value -
      selected_option.value["option_discount"] * adults.value +
      selected_option.value["child_price"] * children.value -
      selected_option.value["option_discount"] * children.value;
  } else {
    total_price.value =
      (selected_option.value["adult_price"] -
        (selected_option.value["adult_price"] *
          selected_option.value["option_discount"]) /
          100) *
        adults.value +
      (selected_option.value["child_price"] -
        (selected_option.value["child_price"] *
          selected_option.value["option_discount"]) /
          100) *
        children.value;
  }
};
const setGuests = (person, num) => {
  if (person == "a") {
    if (adults.value + num > 0) adults.value += num;
  } else {
    if (children.value + num >= 0) children.value += num;
  }
  calculatePrice();
};
</script>
<style>
.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  transition-duration: 500ms;
  overflow: hidden;
  height: 6rem;
  width: 15rem;
}

.dropdown:hover .dropdown-content {
  display: flex;
  padding: 0.75rem;
  /* height: 6rem;
  width: 15rem; */
}
</style>
