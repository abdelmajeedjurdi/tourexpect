<template>
    <div>
        <h3 class="text-indigo-800 font-bold">{{ $t(item_title) }}</h3>
        <p>
            {{ item_description }}
        </p>
    </div>
</template>
<script setup>
import { inject } from 'vue';

const props = defineProps({ item_description: String,item_title:String })
let lang = inject('lang') || 'en'
</script>
