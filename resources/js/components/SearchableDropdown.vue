<template>
    <div class="dropdown">
        <button class="rounded py-2 bg-gray-100 dropdown-toggle w-64 dark:bg-gray-800" type="button"
            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" @click="myFunction">
            {{ selected_option == null ? component_placeholder : selected_option }}
        </button>
        <ul :id="component_id+'-temp'" class="dropdown-menu dark:dropdown-menu-dark"
            :class="isListShow==true?'show':'hidden'" aria-labelledby="dropdownMenuButton1">
            <input class="dropdown-item border border-gray-500 w-1/2" type="text" autocomplete="off"
                placeholder="Search.." id="myInput" @keyup="filterFunction()" />
            <li v-for="option in options" :key="option.id" @click="selected_option = option.name_en">
                <span @click="$emit('selected', option.id)"
                    class="dropdown-item dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer text-gray-200">
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
    component_id: { type: String, default: 'myDropdown' },
    component_placeholder: { type: String, default: 'Select Category' }
});
const emit = defineEmits(["selected"]);
let selected_option = ref(
    props.category_id == -1
        ? props.options.find((item) => item.id == props.category_id)
        : props.options.find((item) => item.id == props.category_id)["name_en"]
);
let isListShow = ref(false)
function myFunction() {
    // document.getElementById(props.component_id).classList.toggle("show");
    isListShow.value = true
}

function filterFunction() {
    var input, filter, ul, li, span, i, div, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById(props.component_id);
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
