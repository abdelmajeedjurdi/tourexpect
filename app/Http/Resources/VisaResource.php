<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VisaResource extends JsonResource
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
            'country_passport_ids' => $this->country_passport_ids,
            'title_en' => $this->title_en,
            'title_ar' => $this->title_ar,
            'active'  => $this->active == 1 ? 'true' : 'false',
            'sections' => $this->sections,
            'image' => $this->image,
            'options' => $this->options,
        ];
    }
}
