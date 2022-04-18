<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessoryImage extends Model
{
    use HasFactory;
    protected $fillable = ['image', 'accessory_id'];
}