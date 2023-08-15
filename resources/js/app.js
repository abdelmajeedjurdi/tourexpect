require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import BackendView from "./pages/backend/BackendView.vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { createHead } from '@vueuse/head'
import vClickOutside from "click-outside-vue3"
import { createMetaManager } from 'vue-meta'

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
const app = createApp({
    components: {
        BackendView,
    },
    provide: {
        lang: localStorage.getItem("lang") || "en",
        pk: "pk_live_51MGGbYDcVBlUUJwWerFluMqa1NMQj1dgzmgGivkGHZSzipLtESiRhtbkx4xz5OpaYmND2grvm3nBKUZlTqs328eX005LdAK1Wi"
    }
})
    .use(router)
    .use(BackendView)
    .use(VueSweetalert2).use(vClickOutside)
    .use(i18n).use(createMetaManager())

const main = async () => {
    await router.isReady()
    app.mount('#app')
}

main()
