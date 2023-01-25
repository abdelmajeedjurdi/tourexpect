<template>
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28">
        <div class="border rounded-lg">
            <div
                class="bg-main-orange py-3 text-center uppercase text-white rounded-lg"
            >
                Payment Method
            </div>
            <div class="px-8 py-4">
                <div>
                    <h5>Pay Online</h5>
                    <div class="flex items-center">
                        <input type="radio" />
                        <img
                            src="/images/american_express.jpg"
                            alt="test"
                            class="h-5 mx-2"
                        />
                        <img
                            src="/images/apple_pay.jpg"
                            alt="test"
                            class="h-5 mx-0.5"
                        />
                        <img
                            src="/images/google_pay.jpg"
                            alt="test"
                            class="h-5 mx-0.5"
                        />
                        <img
                            src="/images/mastercard.jpg"
                            alt="test"
                            class="h-5 mx-0.5"
                        />
                        <img
                            src="/images/visa.jpg"
                            alt="test"
                            class="h-5 mx-0.5"
                        />
                        <img
                            src="/images/union_pay.jpg"
                            alt="test"
                            class="h-5 mx-0.5"
                        />
                    </div>
                </div>

                <div class="mt-4">
                    <h5>Pay Offline</h5>
                    <div class="flex items-center">
                        <input type="radio" />
                    </div>
                </div>
            </div>
        </div>

        <div class="border rounded-lg mt-8">
            <div
                class="bg-main-orange py-3 text-center uppercase text-white rounded-lg"
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
                            <div>1</div>
                        </div>
                        <div
                            class="flex justify-between uppercase font-bold text-main-indigo mt-2"
                        >
                            <div>total visa fees</div>
                            <div>128$</div>
                        </div>
                    </div>
                    <div class="border-gray-400 mt-3 space-y-6">
                        <div
                            class="flex justify-between uppercase font-bold px-3"
                        >
                            <h4 class="">Total pay</h4>
                            <h4>75 usd</h4>
                        </div>
                        <div class="text-center">
                            <button
                                class="capitalize bg-main-blue w-40 h-10 text-white rounded-lg mt-2 mx-auto"
                            >
                                pay visa fee
                            </button>
                        </div>
                        <div class="flex text-sm">
                            <input
                                type="checkbox"
                                class="rounded h-3 w-3 mt-1.5"
                            />
                            <span class="mx-2"
                                >I accept that I ave read & agreed to the terms
                                & conditions and refund policy for this
                                service.</span
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
    </div>
</template>
<script setup></script>
