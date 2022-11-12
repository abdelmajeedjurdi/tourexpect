<template>
    <div class="px-2">
        <h3 class="text-indigo-800 font-bold">{{ $t(section_title) }}</h3>
        <div v-for="(d, i) in section_list" :key="i" class="flex">
            <div
                class="mb-auto h-6 w-6 rounded-full text-center mr-2 border-2 border-blue-600 text-blue-600 items-center text-sm">
                {{ i + 1 }}</div>
            <div>{{ d['title_' + lang] }}</div>
        </div>
    </div>
</template>
<script setup>
import { inject } from 'vue';

const props = defineProps({ section_list: Array, section_title: String })
let lang = inject('lang') || 'en'
</script>
