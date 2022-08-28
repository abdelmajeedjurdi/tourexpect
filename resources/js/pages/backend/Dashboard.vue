<template>
    <div class="">
        <img src="/images/logo.svg" alt="" class="shadow-2xl w-full max-w-screen-lg mx-auto my-24">
    </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
export default {
    setup() {
        let user = ref(null);
        return { user };
    },
};
</script>

<style>
</style>
