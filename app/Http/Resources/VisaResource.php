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
            'paragraph_sections' => $this->paragraph_sections,
            'bullet_sections' => $this->bullet_sections,
            'options' => $this->options,
        ];
    }
}
