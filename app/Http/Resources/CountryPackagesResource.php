<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class CountryPackagesResource extends JsonResource
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
            'items' => DB::table('packages')
                ->join('package_destination as pd', 'packages.id', '=', 'pd.package_id')
                ->join('destinations', 'pd.destination_id', '=', 'destinations.id')/*->join('countries', 'countries.id', 'destinations.country_id')*/
                ->select(
                    'destinations.id',
                    'destinations.country_id',
                    'destinations.name_en',
                    'destinations.name_ar',
                    'destinations.slug',
                )->where('destinations.country_id', $this->id)->distinct()->get()

        ];
    }
}
