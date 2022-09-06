<template>
    <div class="bg-white w-full min-h-screen">
        <h1 class="text-blue-500 text-center py-8 uppercase font-bold text-6xl">{{ blog.title_en }}</h1>
        <img :src="'/images/blogs/' + blog.image" alt="image" class="w-full object-cover" style="height: 30rem" />
        <div v-html="html"></div>

    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import useBlogs from '../../../composables/blogs';
var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
let html = ref(null)
const props = defineProps({
    id: String,
})
const { getBlog, blog } = useBlogs()
onMounted(async () => {
    await getBlog(props.id)
    var deltaOps = JSON.parse(blog.value['content_en'])['ops'];

    var cfg = {};

    var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

    html.value = converter.convert();
})
</script>
