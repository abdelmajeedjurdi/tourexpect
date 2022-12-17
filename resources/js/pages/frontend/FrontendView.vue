<template>
    <div class="" :dir="lang == 'ar' ? 'rtl' : 'ltr'">
        <navigation-bar />
        <div style="min-height: 66vh" class="mt-24">
            <router-view></router-view>
        </div>
        <frontend-footer></frontend-footer>
    </div>
</template>
<script setup>
import { inject } from "vue";
import NavigationBar from "../../components/NavigationBar.vue";
import FrontendFooter from "../../components/FrontendFooter.vue";
let lang = inject("lang");
</script>
