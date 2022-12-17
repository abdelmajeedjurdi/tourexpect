<template>
    <!-- component -->
    <div class="mx-auto w-full max-w-[550px]">
        <form class="space-y-2" @submit.prevent="sendInquiry">
            <input
                type="name"
                id="name"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                :placeholder="$t('your_name') + '*'"
                v-model="inquiry_form.name"
                required
            />
            <input
                type="tel"
                id="phone"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                :placeholder="$t('your_phone') + '*'"
                v-model="inquiry_form.phone"
                required
            />
            <input
                type="email"
                id="email"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                :placeholder="$t('your_email') + '*'"
                v-model="inquiry_form.email"
                required
            />
            <textarea
                id="message"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                :placeholder="$t('your_message') + '*'"
                v-model="inquiry_form.message"
                required
            />

            <div>
                <button
                    class="hover:shadow-form rounded-md bg-blue-500 py-2 px-8 text-base font-semibold text-white outline-none"
                >
                    {{ $t("inquire_now") }}
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import useGeneral from "../composables/general";
const { inquire } = useGeneral();
const props = defineProps({ type: String, item_name: String, url: String });
const sendInquiry = () => {
    inquire(inquiry_form);
};
let inquiry_form = reactive({
    name: "",
    phone: "",
    message: "",
    email: "",
    url: props.url,
    type: props.type,
    item_name: props.item_name,
});
</script>
