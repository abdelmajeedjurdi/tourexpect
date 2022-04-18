<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessoryFile extends Model
{
    use HasFactory;
    protected $fillable = ['accessory_id', 'original_name', 'file'];
}
