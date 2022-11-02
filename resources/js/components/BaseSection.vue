<template>
    <div>
        <h3 class="text-indigo-800 font-bold">{{ $t(section_title) }}</h3>
        <p class="text-lg">
            {{ section_description }}
        </p>
    </div>
</template>
<script setup>
import { inject } from 'vue';

const props = defineProps({ section_description: String, section_title: String })
let lang = inject('lang') || 'en'
</script>
