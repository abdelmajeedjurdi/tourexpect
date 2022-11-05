<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
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
        'address_en',
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
        'source',
        'options_ar',
        'options_en',
        'highlights_ar',
        'highlights_en',
        'information_ar',
        'information_en',
        'policy_en',
        'policy_ar',
        'timing_and_transfer_ar',
        'timing_and_transfer_en',
        'notes_en',
        'notes_ar',
        'terms_and_conditions_en',
        'terms_and_conditions_ar',
        'is_from',
    ];
}