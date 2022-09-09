<?php

namespace Database\Seeders;

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
    }
}
