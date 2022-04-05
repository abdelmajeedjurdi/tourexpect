require("./bootstrap");

require("alpinejs");

import { createApp } from "vue";
import router from "./router";
import CategoriesIndex from "./pages/categories/CategoriesIndex";

createApp({
    components: {
        CategoriesIndex,
    },
})
    .use(router)
    .mount("#app");
