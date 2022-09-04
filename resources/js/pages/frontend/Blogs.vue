<template>
    <p class="pt-24">{{ blogs }}</p>
    {{ html }}
    <div v-html="html"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import useBlogs from '../../composables/blogs';
const { getBlogs, blogs } = useBlogs();

var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
let html = ref(null)
onMounted(async () => {
    await getBlogs()
    console.log(JSON.parse(blogs.value[1]['content_en'])['ops']);
    var deltaOps = JSON.parse(blogs.value[2]['content_en'])['ops'];

    var cfg = {};

    var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

    html.value = converter.convert();
})
</script>
