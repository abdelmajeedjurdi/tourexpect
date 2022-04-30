<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle w-64"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="myFunction"
    >
      {{ selected_option == null ? " Select Category" : selected_option }}
    </button>

    <ul
      id="myDropdown"
      class="dropdown-menu dropdown-menu-dark"
      aria-labelledby="dropdownMenuButton1"
    >
      <input
        class="dropdown-item border border-gray-500 w-1/2"
        type="text"
        autocomplete="off"
        placeholder="Search.."
        id="myInput"
        @keyup="filterFunction()"
      />
      <li
        v-for="option in options"
        :key="option.id"
        @click="selected_option = option.name_en"
      >
        <span
          @click="$emit('selected', option.id)"
          class="dropdown-item hover:bg-gray-300 cursor-pointer"
        >
          {{ option["name_en"] }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const props = defineProps({
  options: Array,
  category_id: { type: String, default: -1 },
});
const emit = defineEmits(["selected"]);
const foo = {
  results: [
    {
      id: 12,
      name: "Test",
    },
    {
      id: 2,
      name: "Beispiel",
    },
    {
      id: 3,
      name: "Sample",
    },
  ],
};
onMounted(() => {
  console.log(props.options);
});
// foo.results.find(item => item.id === 2)
let selected_option = ref(
  props.options.find((item) => item.id == props.category_id)["name_en"]
);
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function testIt(id) {
  console.log(id);
}

function filterFunction() {
  var input, filter, ul, li, span, i, div, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  span = div.getElementsByTagName("span");
  for (i = 0; i < span.length; i++) {
    txtValue = span[i].textContent || span[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      span[i].style.display = "";
    } else {
      span[i].style.display = "none";
    }
  }
}
</script>  
<style>
#myInput {
  border-color: rgb(75, 85, 99) !important;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>