<template>
    <div v-if="session_id != null" class="p-4">
        <stripe-checkout
            ref="checkoutRef"
            :pk="publishableKey"
            :sessionId="session_id"
        />
        <div @click="tempFun">{{ "sid: " + session_id }}</div>
        <button class="bg-blue-500 py-2 px-8" @click="submit">Pay now!</button>
    </div>
</template>
<script setup>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import axios from "axios";

import { onBeforeMount, onMounted, ref } from "vue";
const checkoutRef = ref(null);
const publishableKey = ref(
    "pk_test_51MGGbYDcVBlUUJwWjHdX6YNt8gW82OWIAvNXJkScE4SqRkx2CfsQNE1xmrQM5oCzZt5QvD9D4gw4g7AA1g8jNT8e004MaWF7s1"
);
let session_id = ref(null);
onMounted(() => {
    console.log("asdfsadfds");
    // getSession();
});
onBeforeMount(() => {
    console.log("before");
    // session_id.value = "1111";
    getSession();
});
const getSession = async () => {
    const response = await axios.get("getSession");
    console.log(response.data.id);
    session_id.value = response.data.id;
};

const submit = () => {
    console.log(checkoutRef.value);
    checkoutRef.value.redirectToCheckout();
};
</script>
