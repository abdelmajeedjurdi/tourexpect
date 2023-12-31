<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DestinationResource extends JsonResource
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
            'image'  => $this->image,
            'trending' => $this->trending == 1 ? 'true' : 'false',
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'country_id'  => $this->country_id,
        ];
    }
}
