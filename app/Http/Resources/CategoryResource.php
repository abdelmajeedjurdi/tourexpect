<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\CategoryProperty;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'is_trending' => $this->is_trending == 1 ? true   : false,
            'is_slide' => $this->is_slide ==  1 ? true   : false,
            'properties' => CategoryProperty::where('category_id', $this->id)->get()
        ];
    }
}
