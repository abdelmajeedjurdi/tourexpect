<template>
  <div>{{ $t("header_1") }}</div>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li @click="changeLang('ar')">Arabic</li>
      <li @click="changeLang('en')">English</li>
    </ul>
  </div>
</template>
<script setup>
const changeLang = (lang) => {
  localStorage.setItem("lang", lang);
  location.reload();
};
</script>