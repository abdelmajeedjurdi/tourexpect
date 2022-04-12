require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import BackendView from "./pages/backend/BackendView.vue";
import FrontendView from "./pages/frontend/FrontendView";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { createI18n } from "vue-i18n";
import en from "./assets/i18n/en.json";
import ar from "./assets/i18n/ar.json";
const messages = {
    en: {
        message: {
            hello: "hello world",
        },
    },
    ja: {
        message: {
            hello: "こんにちは、世界",
        },
    },
};
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
})
    .use(router)
    .use(BackendView)
    .use(FrontendView)
    .use(VueSweetalert2)
    .use(i18n)
    .mount("#app");
