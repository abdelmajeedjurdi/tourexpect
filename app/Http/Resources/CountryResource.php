<?php

namespace App\Http\Resources;

use App\Models\Destination;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class CountryResource extends JsonResource
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
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'image'  => $this->image,
            'items' => Destination::select('id', 'country_id', 'name_en', 'name_ar', 'description_en', 'description_ar', 'slug', 'image')->where('country_id', $this->id)->get()

        ];
    }
}
