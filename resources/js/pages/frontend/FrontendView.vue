<template>
  <div>
    <navigation-bar />
    <div :dir="lang == 'ar' ? 'rtl' : 'ltr'">
      <router-view></router-view>
    </div>
    <frontend-footer></frontend-footer>
  </div>
</template>
<script setup>
import { inject } from "vue";
import NavigationBar from "./NavigationBar.vue";
import FrontendFooter from "./FrontendFooter.vue";
let lang = inject("lang");
</script>