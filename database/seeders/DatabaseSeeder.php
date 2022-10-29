<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            'name' => 'Super Admin',
            'email' => 'admin@gmail.com',
            'role' => '1',
            'password' => Hash::make('password')
        ]);
        User::create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'role' => '0',
            'password' => Hash::make('password')
        ]);
        DB::table('countries')->insert(
            [
                ['name_en' => 'Turkey', 'name_ar' => 'تركيا', 'slug' => 'turkey'],
                ['name_en' => 'UAE', 'name_ar' => 'الامارات', 'slug' => 'uae'],
                ['name_en' => 'Iran', 'name_ar' => 'ايران', 'slug' => 'iran']
            ]
        );
        DB::table('categories')->insert([
            [
                'name_en' => 'Tourisem one',
                'name_ar' => 'الأولى للسياحة',
                'description_en' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                'description_ar' => 'لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال  في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، ',
                'is_trending' =>  0,
                'is_slide' =>  0,
                'image' =>  'default.jpg',
                'slug' => 'c-one',
                'for_category' => 'tours'
            ],
            [
                'name_en' => 'Tourisem Tow',
                'name_ar' => 'الثانية للسياحة',
                'description_en' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                'description_ar' => 'لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال  في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، ',
                'is_trending' =>  0,
                'is_slide' =>  0,
                'image' =>  'default.jpg',
                'slug' =>
                'c-tow',
                'for_category' => 'tours'
            ],
            [
                'name_en' => 'Tourisem Three',
                'name_ar' => 'الثالثة للسياحة',
                'description_en' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                'description_ar' => 'لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال  في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، ',
                'is_trending' =>  0,
                'is_slide' =>  0,
                'image' =>  'default.jpg',
                'slug' =>
                'c-three',
                'for_category' => 'packages'
            ]
        ]);
        DB::table('destinations')->insert([
            [
                'name_en' => 'Istanbul',
                'name_ar' => 'استنبول',
                'description_en' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                'description_ar' => 'لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال  في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، ',
                'country_id' =>  1,
                'image' =>  'default.jpg',
                'slug' => 'istanbul'
            ],
            [
                'name_en' => 'Tahran',
                'name_ar' => 'طهران',
                'description_en' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                'description_ar' => 'لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال  في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، ',
                'country_id' =>  3,
                'image' =>  'default.jpg',
                'slug' => 'tahran'
            ],
            [
                'name_en' => 'Dubai',
                'name_ar' => 'دبي',
                'description_en' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                'description_ar' => 'لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال  في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، ',
                'country_id' =>  2,
                'image' =>  'default.jpg',
                'slug' => 'dubai'
            ]
        ]);
    }
}
