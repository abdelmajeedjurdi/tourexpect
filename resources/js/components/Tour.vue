<template>
    <div class="bg-white border hover:shadow-lg duration-700 overflow-hidden mb-10">
        <router-link to="#">
            <img :src="'/images/tours/' + tour.thumbnail" alt="image" class="w-full h-56 object-cover" />
            <div class="p-2 h-40">
                <h3 class=" text-xl text-black font-bold">
                    {{
                    tour['title_'+lang].substring(0, 65) +
                    (tour['title_'+lang].length > 65 ? "..." : "")
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
                    tour['address_'+lang]
                    }}
                </div>
                <div
                    class=" overflow-hidden flex justify-between text-base text-body-color leading-relaxed text-indigo-800 font-bold">
                    <span>
                        {{
                        tour['duration_'+lang]
                        }}
                    </span>
                    <span class="">
                        {{ $t('from') }}
                        <span v-if="tour['discount']" class="line-through text-red-500 me-1">
                            {{ tour['adult_price']}}
                        </span>
                        <span class="text-blue-500">
                            {{ tour['discount_type']=='amount'?
                            tour['adult_price']-tour['discount']
                            :tour['adult_price']-(tour['adult_price']*tour['discount']/100) }}
                        </span>
                    </span>
                </div>
                <div class=" overflow-hidden text-base text-body-color leading-relaxed text-gray-700">
                    {{
                    tour['description_'+lang].substring(0, 100) +
                    (tour['description_'+lang].length > 100 ? "..." : "")
                    }}
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { inject, ref } from 'vue';
const props = defineProps({
    tour: Object,
});
const lang = inject('lang') || 'en'
// let tour = ref({ "id": 1, "slug": "olympic-lagoon-resort", "category_id": 1, "destination_id": 2, "destination": { "name_en": "Tourisem Tow", "name_ar": "الثانية للسياحة", "id": 2 }, "title_en": "Olympic Lagoon Resort", "title_ar": "منتجع اوليمبيك لاجون", "address_ar": "قبرص ، أيا نابا", "address_en": "Cyprus, Ayia Napa", "thumbnail": "1664877501_1276778-Cancelling-Your-Gym-Membership-These-Are-the-8-Best-Home-Gyms-1296x728-Header-e1be83.webp", "description_en": "Traveling with the kids? Take the pressure off your next family getaway with our All Inclusive escapes. Say goodbye to budgeting and relax knowing everything is already paid for, perhaps even those extra ice-creams for your tiny tots. And we know how fussy those little mouths can be. That’s why the all-you-can-eat-buffet is a great choice for the whole clan. Plus, we’ve got a bunch of hotels in fun-filled resorts. From close-to-home favorites Majorca, Portugal, and Cyprus to far-flung retreats in the Caribbean. And if you’re searching for a property with a kids’ club, play park, or beachfront location perfect for sandcastle building, look no further!", "description_ar": "السفر مع الأطفال؟ تخلص من الضغط على عطلتك العائلية القادمة من خلال رحلاتنا الشاملة كليًا. قل وداعًا للميزانية والاسترخاء مع العلم أن كل شيء قد تم دفع ثمنه بالفعل ، وربما حتى تلك الآيس كريم الإضافية لأطفالك الصغار. ونحن نعلم مدى رقة تلك الأفواه الصغيرة. هذا هو السبب في أن بوفيه كل ما يمكنك تناوله هو خيار رائع للعشيرة بأكملها. بالإضافة إلى ذلك ، لدينا مجموعة من الفنادق في منتجعات مليئة بالمرح. من مايوركا والبرتغال وقبرص إلى الملاذات البعيدة في منطقة البحر الكاريبي. وإذا كنت تبحث عن عقار به نادي للأطفال ، أو حديقة ألعاب ، أو موقع على شاطئ البحر مثالي لبناء قلعة رملية ، فلا داعي للبحث!", "itinerary_ar": "Excepteur voluptas o", "itinerary_en": "Vel do anim impedit", "active": "true", "adult_price": 600, "child_price": 300, "discount": 10, "discount_type": "pecentage", "duration_en": "6 Days 5 Nights", "duration_ar": "6 أيام و 5 ليالي", "max_number_of_people": 44, "include_ar": "Eaque perspiciatis", "include_en": "Ut soluta et debitis", "exclude_ar": "In perferendis eu re", "exclude_en": "Impedit voluptas in", "images": [{ "id": 1, "tour_id": "1", "image": "1664877501_1276778-Cancelling-Your-Gym-Membership-These-Are-the-8-Best-Home-Gyms-1296x728-Header-e1be83.webp", "created_at": "2022-10-04T09:58:21.000000Z", "updated_at": "2022-10-04T09:58:21.000000Z" }, { "id": 3, "tour_id": "1", "image": "1664879663_marvin-meyer-SYTO3xs06fU-unsplash.jpg", "created_at": "2022-10-04T10:34:23.000000Z", "updated_at": "2022-10-04T10:34:23.000000Z" }, { "id": 4, "tour_id": "1", "image": "1664879663_jackson-sophat-_t-l5FFH8VA-unsplash.jpg", "created_at": "2022-10-04T10:34:23.000000Z", "updated_at": "2022-10-04T10:34:23.000000Z" }, { "id": 5, "tour_id": "1", "image": "1664879663_eftakher-alam-i1VQZsU86ok-unsplash.jpg", "created_at": "2022-10-04T10:34:23.000000Z", "updated_at": "2022-10-04T10:34:23.000000Z" }] })
</script>
