<template>
    <!-- component -->
    <div class="mx-auto w-full max-w-[550px]">
        <form class="space-y-2">
            <input type="name" id="name"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Name *" required />
            <input type="tel" id="phone"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Phone *" required />
            <input type="email" id="email"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Email *" required />
            <textarea id="message"
                class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Message *" required />

            <div>
                <button
                    class="hover:shadow-form rounded-md bg-blue-500 py-2 px-8 text-base font-semibold text-white outline-none">
                    Inquire Now
                </button>
            </div>
        </form>
    </div>
</template>
