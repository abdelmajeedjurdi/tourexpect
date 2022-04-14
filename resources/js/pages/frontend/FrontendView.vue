<template>
  <div>
    <navigation-bar />
    <div :dir="lang == 'ar' ? 'rtl' : 'ltr'">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { inject } from "vue";
import NavigationBar from "./NavigationBar.vue";
let lang = inject("lang");
</script>