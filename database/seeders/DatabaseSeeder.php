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
    }
}
