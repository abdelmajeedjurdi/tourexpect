require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import BackendView from "./pages/backend/BackendView.vue";
import FrontendView from "./pages/frontend/FrontendView";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { createHead } from '@vueuse/head'
import vClickOutside from "click-outside-vue3"
// import VueMeta from 'vue-meta'

import { createI18n } from "vue-i18n";
import en from "./assets/i18n/en.json";
import ar from "./assets/i18n/ar.json";

const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    mode: "composition",
    inheritLocale: true,
    locale: localStorage.getItem("lang") || "en",
    messages: {
        en: en,
        ar: ar,
    },
});
createApp({
    components: {
        BackendView,
        FrontendView,
    },
    provide: {
        lang: localStorage.getItem("lang") || "en",
    },
})
    .use(router)
    .use(BackendView)
    .use(FrontendView)
    .use(VueSweetalert2).use(vClickOutside)
    .use(i18n).use(createHead())
    .mount("#app");
