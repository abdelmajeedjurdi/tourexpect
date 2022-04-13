<template>
  <div>
    <navigation-bar />
    <div :dir="lang == 'ar' ? 'rtl' : 'ltr'">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import NavigationBar from "./NavigationBar.vue";
let lang = localStorage.getItem("lang") || "en";
</script>