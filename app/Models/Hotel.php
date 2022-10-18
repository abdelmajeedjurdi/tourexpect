<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
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
        'active', 'price',
        'discount',
        'discount_type',
        'stars', 'facilities',
        'source'
    ];
}
