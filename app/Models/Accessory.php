<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accessory extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
        'name_en',
        'name_ar',
        'description_en',
        'description_ar',
        'thumbnail',
        'slug'
    ];
}
