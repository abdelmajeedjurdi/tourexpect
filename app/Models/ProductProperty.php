<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductProperty extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'title_en', 'title_ar', 'description_en', 'description_ar', 'category_id'];
}