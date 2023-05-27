<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountriesPassport extends Model
{
    use HasFactory;
    protected $fillable = [
        'name_en', 'name_ar', 'slug'
    ];


    public function visas()
    {
        return $this->belongsToMany(Visa::class, 'country_passport_visa', 'country_passport_id');
    }
}
