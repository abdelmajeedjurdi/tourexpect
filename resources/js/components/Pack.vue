<template>
    <div class="bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10">
        <router-link to="#">
            <img :src="'/images/packages/' + pack.thumbnail" alt="image" class="w-full h-56 object-cover" />
            <div class="p-2 h-40">
                <h3 class=" text-xl text-black font-bold">
                    {{
                    pack['title_'+lang].substring(0, 65) +
                    (pack['title_'+lang].length > 65 ? "..." : "")
                    }}
                </h3>
                <div class=" overflow-hidden flex text-base text-body-color leading-relaxed items-center text-black">
                    <span class=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-5 text-indigo-800">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                    </span>
                    {{
                    pack['address_'+lang]
                    }}
                </div>
                <div
                    class=" overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold">
                    <span>
                        {{
                        pack['duration_'+lang]
                        }}
                    </span>
                    <span class="">
                        {{ $t('from') }}
                        <span v-if="pack['discount']" class="line-through text-red-500 me-1">
                            {{ pack['adult_price']}}
                        </span>
                        <span class="text-blue-500">
                            {{ pack['discount_type']=='amount'?
                            pack['adult_price']-pack['discount']
                            :pack['adult_price']-(pack['adult_price']*pack['discount']/100) }}
                        </span>
                    </span>
                </div>
                <div class=" overflow-hidden text-base text-body-color leading-relaxed text-gray-700">
                    {{
                    pack['description_'+lang].substring(0, 100) +
                    (pack['description_'+lang].length > 100 ? "..." : "")
                    }}
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { inject, ref } from 'vue';
const props = defineProps({
    pack: Object,
});
const lang = inject('lang') || 'en'
</script>
