<template>
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28">
        <h3 class="text-main-indigo font-bold w-full text-center my-4">
            {{ $t(props.visa + "-application-form") }}
        </h3>
        <form
            @submit.prevent="submit"
            class="mx-auto w-full max-w-6xl sm:px-4 xl:px-0 space-y-8 border rounded p-2"
        >
            <div
                v-for="(application_form, i) in application_forms"
                :key="i"
                class="space-y-4"
            >
                <h3 class="text-main-indigo font-bold">
                    {{ $t("person_" + (i + 1)) }}
                </h3>
                <div class="border">
                    <div
                        class="bg-main-orange py-2 text-center uppercase text-white"
                    >
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
                    <div
                        class="bg-main-orange py-2 text-center uppercase text-white"
                    >
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
                    <div
                        class="bg-main-orange py-2 text-center uppercase text-white"
                    >
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
                                    @change="
                                        onFileSelected(
                                            $event,
                                            i,
                                            'passport_doc'
                                        )
                                    "
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
                                    @change="
                                        onFileSelected($event, i, 'national_id')
                                    "
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
                                    @change="
                                        onFileSelected(
                                            $event,
                                            i,
                                            'client_photo'
                                        )
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="newForm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 mr-2 -ml-1"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>

                Add Application Form
            </button>
            <div>
                <button
                    type="submit"
                    v-if="!is_sending"
                    class="hover:shadow-form rounded-md bg-main-blue m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
                >
                    Submit and Proceed to Pay
                </button>

                <button
                    type="button"
                    v-else
                    class="hover:shadow-form rounded-md bg-main-blue m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
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
const props = defineProps({ visa: String });
const router = useRoute();
const maxSize = 102400; // 100KB in bytes
let is_sending = ref(false);
let application_forms = ref([
    {
        name: "",
        surname: "",
        email: "",
        phone: "",
        passport_no: "",
        travel_on: "",
        passport_doc: null,
        national_id: null,
        client_photo: null,
        country: router.query.country,
        nationality: router.query.nationality,
        visa_type: router.query.visa_type,
    },
]);
const validateSize = (tag_id) => {
    var fileInput = document.getElementById(tag_id);
    var fileSize = fileInput.files[0].size;
    if (fileSize > maxSize) {
        alert("File size must be less than 100KB");
    }
};
function onFileSelected(event, i, tag_id) {
    application_forms.value[i][tag_id] = event.target.files[0];
}

const submit = async () => {
    is_sending.value = true;
    // if (
    //     document.getElementById("passport_doc").files.length > 0 &&
    //     document.getElementById("passport_doc").files[0].size > maxSize
    // ) {
    //     alert("Size of your passport must be less than 100KB");
    //     is_sending.value = false;
    //     return;
    // }
    // addFiles("passport_doc", document.getElementById("passport_doc").files[0]);

    // if (
    //     document.getElementById("client_photo").files.length > 0 &&
    //     document.getElementById("client_photo").files[0].size > maxSize
    // ) {
    //     alert("Size of your photo must be less than 100KB");
    //     is_sending.value = false;
    //     return;
    // }
    // addFiles("client_photo", document.getElementById("client_photo").files[0]);

    // if (
    //     document.getElementById("national_id").files.length > 0 &&
    //     document.getElementById("national_id").files[0].size > maxSize
    // ) {
    //     alert("size of national ID must be less than 100KB");
    //     is_sending.value = false;
    //     return;
    // }
    // addFiles("national_id", document.getElementById("national_id").files[0]);
    await getSession(
        900,
        "UAE Visa for Iraqi Passport",
        application_forms.value[0].email
    );
    applyToVisa(application_forms.value);
    checkoutRef.value.redirectToCheckout();
};

const newForm = () => {
    application_forms.value.push({
        name: "",
        surname: "",
        email: "",
        phone: "",
        passport_no: "",
        travel_on: "",
        passport_doc: null,
        national_id: null,
        client_photo: null,
        country: router.query.country,
        nationality: router.query.nationality,
        visa_type: router.query.visa_type,
    });
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
