<template>
    <div class="bg-white w-full max-w-4xl mx-auto pt-40">
        <h1 class="text-blue-500 text-center py-8 uppercase font-bold text-6xl">{{ blog['title_'+lang] }}</h1>
        <img :src="'/images/blogs/' + blog.image" alt="image" class="w-full object-cover" style="height: 30rem" />
        <div v-html="html"></div>
    </div>
</template>
<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import useBlogs from '../../composables/blogs';
var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
let html = ref(null)
let rout = useRoute()
const lang = inject('lang')
const props = defineProps({
    id: String,
    slug: String
})
const { getBlog, blog } = useBlogs()
onMounted(async () => {
    await getBlog(props.id)
    var deltaOps = blog.value['content_' + lang]['ops'];

    var cfg = {};

    var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

    html.value = converter.convert();
})
</script>
<style>
.ql-align-center {
    text-align: center;
}

.ql-image {
    margin-left: auto;
    margin-right: auto;
}
</style>
