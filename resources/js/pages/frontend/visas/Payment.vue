<template>
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28">
        <div class="border-2 border-gray-500">
            <div
                class="bg-main-blue py-1 border-b-2 border-gray-500 text-center uppercase text-white"
            >
                Payment Method
            </div>
            <div class="px-8 py-4">
                <div>
                    <h5>Pay Online</h5>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            :value="true"
                            v-model="is_online_pay"
                            name="payment_method"
                        />
                    </div>
                </div>

                <div class="mt-4">
                    <h5>Pay Offline</h5>
                    <div class="flex items-center">
                        <input
                            :value="false"
                            v-model="is_online_pay"
                            type="radio"
                            name="payment_method"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="border-2 border-gray-500 mt-8">
            <div
                class="bg-main-blue py-1 border-b-2 border-gray-500 text-center uppercase text-white"
            >
                order summary
            </div>
            <div class="px-8 py-4">
                <div class="w-1/2 mx-auto">
                    <div class="border-b pb-3 border-gray-400">
                        <div
                            class="flex justify-between uppercase font-bold text-main-indigo mt-2"
                        >
                            <div class="">No. of Applicant</div>
                            <div class="font-extrabold text-black">
                                {{ forms.length }}
                            </div>
                        </div>
                        <div
                            class="flex justify-between uppercase font-bold text-main-indigo mt-2"
                        >
                            <div>total visa fees</div>
                            <div class="font-extrabold text-black">
                                {{ total_pay + " USD" }}
                            </div>
                        </div>
                    </div>
                    <div class="border-gray-400 mt-3 space-y-6">
                        <div
                            class="flex justify-between uppercase font-extrabold text-black px-3"
                        >
                            <h4 class="">Total pay</h4>
                            <h4>{{ total_pay + " USD" }}</h4>
                        </div>
                        <div class="text-center">
                            <button
                                @click.prevent="goToStripe"
                                type="submit"
                                v-if="!is_sending"
                                class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
                                :class="
                                    is_terms_and_condition_accepted
                                        ? ''
                                        : 'opacity-25 cursor-not-allowed'
                                "
                            >
                                pay visa fee
                            </button>

                            <button
                                type="button"
                                v-else
                                class="hover:shadow-form rounded-full bg-main-orange m-auto h-10 w-60 text-base font-semibold text-white outline-none cursor-not-allowed"
                            >
                                <div id="animation">
                                    <div class="box" id="box1"></div>
                                    <div class="box" id="box2"></div>
                                    <div class="box" id="box3"></div>
                                    <div class="box" id="box4"></div>
                                </div>
                            </button>
                        </div>
                        <div class="flex text-sm">
                            <input
                                type="checkbox"
                                v-model="is_terms_and_condition_accepted"
                                id="is_terms_and_condition_accepted"
                                class="rounded h-3 w-3 mt-1.5"
                            />
                            <label
                                for="is_terms_and_condition_accepted"
                                class="mx-2"
                                >I accept that I ave read & agreed to the terms
                                & conditions and refund policy for this
                                service.</label
                            >
                        </div>
                        <div class="text-red-500 text-sm">
                            <span class="text-red-500 font-bold">Note: </span>
                            e-visa fee once submitted is non-refundable as the
                            fee is for processing of the application and is not
                            dependent on either Grant or Rejection of your visa.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="session_id != null" class="p-4">
            <stripe-checkout
                ref="checkoutRef"
                :pk="pk"
                :sessionId="session_id"
            />
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, ref, inject } from "vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import useGeneral from "../../../composables/general";

const { getSession, session_id, applyToVisa, addFiles } = useGeneral();

let total_pay = ref(0);
let forms = ref([]);
onBeforeMount(() => {
    console.log("mounted");
    forms.value = JSON.parse(window.localStorage.getItem("forms"));
    forms.value.forEach((form) => {
        total_pay.value += form.price;
    });
});
let is_sending = ref(false);
let is_online_pay = ref(true);
let is_terms_and_condition_accepted = ref(false);
const pk = inject("pk");
const checkoutRef = ref(null);

const goToStripe = async () => {
    if (is_online_pay.value && is_terms_and_condition_accepted.value) {
        is_sending.value = true;
        await getSession(
            total_pay.value,
            "UAE Visa for Iraqi Passport",
            forms.value[0].email
        );
        applyToVisa(forms.value);
        checkoutRef.value.redirectToCheckout();
    } else {
        console.log("not accepted");
    }
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
