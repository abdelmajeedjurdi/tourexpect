<template>
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28">
        <form
            @submit.prevent="submit"
            class="mx-auto my-28 w-full max-w-6xl sm:px-4 xl:px-0 space-y-4"
        >
            <div class="border">
                <div class="bg-blue-900 py-2 text-center uppercase text-white">
                    personal details
                </div>

                <div class="p-8">
                    <div class="grid gap-2 sm:grid-cols-2">
                        <div class="">
                            <label
                                for="name"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Your Name</label
                            >
                            <input
                                type="text"
                                id="name"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                                v-model="application_form.name"
                            />
                        </div>
                        <div class="">
                            <label
                                for="surname"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Surname</label
                            >
                            <input
                                type="text"
                                id="surname"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                                v-model="application_form.surname"
                            />
                        </div>

                        <div class="">
                            <label
                                for="email"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Your email</label
                            >
                            <input
                                type="email"
                                id="email"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                                v-model="application_form.email"
                            />
                        </div>

                        <div class="">
                            <label
                                for="phone"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Mobile / Whatsapp</label
                            >
                            <input
                                type="tel"
                                id="phone"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                                v-model="application_form.phone"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="bg-blue-900 py-2 text-center uppercase text-white">
                    passport and travel information
                </div>

                <div class="p-8">
                    <div class="grid gap-2 sm:grid-cols-2">
                        <div class="">
                            <label
                                for="passport_no"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Passport No.</label
                            >
                            <input
                                type="text"
                                id="passport_no"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                                v-model="application_form.passport_no"
                            />
                        </div>
                        <div class="">
                            <label
                                for="travel_on"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Travel On</label
                            >
                            <input
                                type="date"
                                id="travel_on"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                                v-model="application_form.travel_on"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="bg-blue-900 py-2 text-center uppercase text-white">
                    upload documents
                </div>

                <div class="p-8">
                    <div class="grid gap-2 sm:grid-cols-2">
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900"
                                for="passport_doc"
                                >Passport</label
                            >
                            <input
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                id="passport_doc"
                                max="1024"
                                type="file"
                                @change="validateSize('passport_doc')"
                            />
                        </div>
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900"
                                for="national_id"
                                >National ID</label
                            >
                            <input
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                id="national_id"
                                type="file"
                                @change="validateSize('national_id')"
                            />
                        </div>
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900"
                                for="client_photo"
                                >Photo</label
                            >
                            <input
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                id="client_photo"
                                type="file"
                                @change="validateSize('client_photo')"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    v-if="!is_sending"
                    class="hover:shadow-form rounded-md bg-blue-500 m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
                >
                    Submit and Proceed to Pay
                </button>

                <button
                    type="button"
                    v-else
                    class="hover:shadow-form rounded-md bg-blue-500 m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
                >
                    <div id="animation">
                        <div class="box" id="box1"></div>
                        <div class="box" id="box2"></div>
                        <div class="box" id="box3"></div>
                        <div class="box" id="box4"></div>
                    </div>
                </button>
            </div>
            <div v-if="session_id != null" class="p-4">
                <stripe-checkout
                    ref="checkoutRef"
                    :pk="pk"
                    :sessionId="session_id"
                />
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, inject, onBeforeMount, onMounted } from "vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import useGeneral from "../../../composables/general";
import { useQuery, useRoute } from "vue-router";

const pk = inject("pk");
const checkoutRef = ref(null);
const { getSession, session_id, applyToVisa, addFiles } = useGeneral();
const router = useRoute();
const maxSize = 102400; // 100KB in bytes
let is_sending = ref(false);
let application_form = ref({
    name: "",
    surname: "",
    email: "",
    phone: "",
    passport_no: "",
    travel_on: "",
    country: router.query.country,
    nationality: router.query.nationality,
    visa_type: router.query.visa_type,
});
const validateSize = (tag_id) => {
    console.log("added");
    var fileInput = document.getElementById(tag_id);
    var fileSize = fileInput.files[0].size;
    if (fileSize > maxSize) {
        alert("File size must be less than 100KB");
    }
};

const submit = async () => {
    is_sending.value = true;
    if (
        document.getElementById("passport_doc").files.length > 0 &&
        document.getElementById("passport_doc").files[0].size > maxSize
    ) {
        alert("Size of your passport must be less than 100KB");
        is_sending.value = false;
        return;
    }
    addFiles("passport_doc", document.getElementById("passport_doc").files[0]);

    if (
        document.getElementById("client_photo").files.length > 0 &&
        document.getElementById("client_photo").files[0].size > maxSize
    ) {
        alert("Size of your photo must be less than 100KB");
        is_sending.value = false;
        return;
    }
    addFiles("client_photo", document.getElementById("client_photo").files[0]);

    if (
        document.getElementById("national_id").files.length > 0 &&
        document.getElementById("national_id").files[0].size > maxSize
    ) {
        alert("size of national ID must be less than 100KB");
        is_sending.value = false;
        return;
    }
    addFiles("national_id", document.getElementById("national_id").files[0]);

    await getSession(
        900,
        "UAE Visa for Iraqi Passport",
        application_form.value.email
    );
    console.log(applyToVisa(application_form.value));
    checkoutRef.value.redirectToCheckout();
};
</script>

<style scoped>
#animation {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    width: 5px;
    height: 5px;
    margin: 2px;
}
.box:nth-child(1) {
    background: white;
    animation: balls 1s linear infinite;
}
.box:nth-child(2) {
    background: white;
    animation: balls 1s 0.1s linear infinite;
}
.box:nth-child(3) {
    background: white;
    animation: balls 1s 0.2s linear infinite;
}
.box:nth-child(4) {
    background: white;
    animation: balls 1s 0.4s linear infinite;
}
@keyframes balls {
    0% {
        transform: sclaeY(1);
    }
    50% {
        transform: scaleY(3);
    }
    100% {
        transform: sclaeY(1);
    }
}
</style>
