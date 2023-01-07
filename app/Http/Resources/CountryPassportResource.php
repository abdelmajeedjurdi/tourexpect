<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class CountryPassportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'  => $this->id,
            'slug'  => $this->slug,
            'name_en'  => $this->name_en,
            'name_ar'  => $this->name_ar,
            'items' => DB::table('visas')
                ->join('country_passport_visa as pd', 'visas.id', '=', 'pd.visa_id')
                ->join('countries_passports', 'pd.country_passport_id', '=', 'countries_passports.id')
                ->select(
                    'visas.id',
                    'pd.country_passport_id',
                    'visas.title_en as name_en',
                    'visas.title_ar as name_ar',
                    'visas.slug',
                )->where('pd.country_passport_id', $this->id)->distinct()->get()

        ];
    }
}
