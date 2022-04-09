require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import BackendView from "./pages/backend/BackendView.vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp({
    components: {
        BackendView,
    },
})
    .use(router)
    .use(BackendView)
    .use(VueSweetalert2)
    .mount("#app");
