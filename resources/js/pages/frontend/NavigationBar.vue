<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div>
        <span
          class="rounded border language p-2 mx-2"
          id="lang"
          @click="changeLang"
        >
          {{ lang == "en" ? "العربية" : "English" }}
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" id="lang2">
            <span
              class="nav-link rounded border language"
              aria-current="page"
              href="#"
              @click="changeLang"
              >{{ lang == "en" ? "العربية" : "English" }}</span
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
let lang = localStorage.getItem("lang");
function changeLang() {
  if (localStorage.getItem("lang") == "en") localStorage.setItem("lang", "ar");
  else {
    localStorage.setItem("lang", "en");
  }
  location.reload();
}
</script>

<style>
@media only screen and (min-width: 990px) {
  #lang {
    display: none;
  }
  #lang2 > span {
    display: block;
  }
}
.language {
  color: #931212 !important;
  cursor: pointer;
}
.language:hover {
  color: #ffffff !important;
  background-color: #931212 !important;
}
</style>