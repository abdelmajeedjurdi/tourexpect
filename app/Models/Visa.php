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
        'active',
        'image',
        'sections',
        'options'
    ];


    public function countries()
    {
        return $this->belongsToMany(CountriesPassport::class, 'country_passport_visa', 'visa_id');
    }
}
