require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import BackendView from "./pages/backend/BackendView.vue";

createApp({
    components: {
        BackendView,
    },
})
    .use(router)
    .use(BackendView)
    .mount("#app");
