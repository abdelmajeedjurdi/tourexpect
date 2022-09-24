<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CountryResource;
use App\Http\Resources\CountryTourResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GeneralController extends Controller
{
    public function destinations()
    {

        $countries = DB::table('countries')->get();

        return CountryResource::collection($countries);
    }
}
