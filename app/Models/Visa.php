<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visa extends Model
{
    use HasFactory;
    protected $fillable = [
        'slug',
        'country_passport_ids',
        'title_en',
        'title_ar',
        'documents_en',
        'documents_ar',
        'conditions_en',
        'conditions_ar',
        'types_en',
        'types_ar',
        'options'
    ];
}
