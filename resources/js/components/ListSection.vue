<template>
    <div>
        <h3 class="text-main-indigo font-bold px-2">{{ $t(section_title) }}</h3>
        <ul
            style="list-style-image: url('/images/tour-o.svg')"
            class="text-black px-10 text-lg"
        >
            <li v-for="item in section_list.split('\n--')" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { inject } from "vue";

const props = defineProps({ section_list: String, section_title: String });
let lang = inject("lang") || "en";
</script>
