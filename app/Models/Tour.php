<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'slug',
        'category_id',
        'destination_id',
        'category',
        'title_en',
        'title_ar',
        'address_ar',
        'title_ar',
        'thumbnail',
        'description_en',
        'description_ar',
        'itinerary_ar',
        'itinerary_en',
        'active',
        'adult_price',
        'child_price',
        'discount',
        'discount_type',
        'duration_en',
        'duration_ar',
        'max_number_of_people',
        'include_ar',
        'include_en',
        'exclude_ar',
        'exclude_en',
    ];
}
