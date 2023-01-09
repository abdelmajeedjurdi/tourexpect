<template>
    <div class="sm:px-4 xl:px-0 w-full max-w-6xl mx-auto my-28">
        <form class="mx-auto my-28 w-full max-w-6xl sm:px-4 xl:px-0 space-y-4">
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
                            />
                        </div>
                        <div class="">
                            <label
                                for="surname"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Your email</label
                            >
                            <input
                                type="text"
                                id="surname"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
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
                                for="name"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Your Name</label
                            >
                            <input
                                type="text"
                                id="name"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div class="">
                            <label
                                for="surname"
                                class="mb-2 block text-sm font-medium text-gray-900"
                                >Your email</label
                            >
                            <input
                                type="text"
                                id="surname"
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                required
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
                                for="user_avatar"
                                >Passport</label
                            >
                            <input
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                id="user_avatar"
                                type="file"
                            />
                        </div>
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900"
                                for="user_avatar"
                                >National ID</label
                            >
                            <input
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                id="user_avatar"
                                type="file"
                            />
                        </div>
                        <div>
                            <label
                                class="mb-2 block text-sm font-medium text-gray-900"
                                for="user_avatar"
                                >Photo</label
                            >
                            <input
                                class="block w-full rounded border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                id="user_avatar"
                                type="file"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                class="mt-6 w-full rounded-lg bg-blue-700 px-8 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
                Submit and Proceed to Pay
            </button>
        </form>
    </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
    console.log();
});
</script>
