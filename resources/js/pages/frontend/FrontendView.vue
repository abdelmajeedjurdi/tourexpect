<template>
    <div class="" :dir="lang == 'ar' ? 'rtl' : 'ltr'">
        <metainfo>
            <template v-slot:title="{ content }">{{
                content ? `${content} | Tourexpect` : `Tourexpect`
            }}</template>
        </metainfo>
        <navigation-bar />
        <div style="min-height: 66vh" class="mt-24">
            <router-view></router-view>
        </div>
        <frontend-footer></frontend-footer>
    </div>
</template>
<script>
import { inject } from "vue";
import NavigationBar from "../../components/NavigationBar.vue";
import FrontendFooter from "../../components/FrontendFooter.vue";
import { useMeta } from "vue-meta";
// let lang = inject("lang");

export default {
    components: {
        NavigationBar,
        FrontendFooter,
    },
    setup() {
        let lang = inject("lang");
        useMeta({
            title: "",
            htmlAttrs: { lang: "en", amp: true },
        });
        return {
            lang,
        };
    },
};
</script>
