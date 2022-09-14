<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = [
        'title_en',
        'title_ar',
        'content_en',
        'content_ar',
        'slug',
        'image', 'preview_text_ar', 'preview_text_en',
        'destination_id', 'category_id'
    ];
}
