<template>

    <div class="px-2">
        <h3 class="font-bold text-indigo-800">{{ $t(section_title) }}</h3>
        <div class="space-y-2 duration-700">
            <div v-for="(d, i) in section_list" :key="i" class="rounded border p-2">
                <div class="flex justify-between ">
                    <div class="flex">
                        <div
                            class="mb-auto mt-1 mr-2 h-6 w-6 items-center rounded-full border-2 border-blue-600 bg-blue-600 text-center text-sm text-white">
                            {{ i + 1 }}</div>
                        <div class="text-xl font-semibold">{{ d['title_' + lang] }}</div>
                    </div>
                    <div @click="opened == i ? opened = -1 : opened = i" class="cursor-pointer"
                        :style="opened == i ? 'transform: rotate(3.142rad);' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div class="mt-2 px-2 child" v-if="opened == i">
                    {{ d['description_' + lang] }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { inject, ref } from 'vue';

const props = defineProps({ section_list: Array, section_title: String })
let lang = inject('lang') || 'en'
let opened = ref(-1)
</script>

