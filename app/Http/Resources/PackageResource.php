<?php

namespace App\Http\Resources;

use App\Models\PackageImage;
use Illuminate\Http\Resources\Json\JsonResource;

class PackageResource extends JsonResource
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
            'category_id' => $this->category_id,
            'destination_id' => $this->destination_id,
            // 'category' => Category::where('id', $this->category_id)->select('name_en', 'name_ar', 'id')->first(),
            'title_en'  => $this->title_en,
            'title_ar'  => $this->title_ar,
            'address_ar'  => $this->address_ar,
            'address_en'  => $this->address_en,
            'thumbnail'  => $this->thumbnail,
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'itinerary_ar'  => $this->itinerary_ar,
            'itinerary_en'  => $this->itinerary_en,
            'active'  => $this->active == 1 ? 'true' : 'false',
            'adult_price'  => $this->adult_price,
            'child_price'  => $this->child_price,
            'discount'  => $this->discount,
            'discount_type'  => $this->discount_type,
            'duration_en'  => $this->duration_en,
            'duration_ar'  => $this->duration_ar,
            'max_number_of_people'  => $this->max_number_of_people,
            'include_ar'  => $this->include_ar,
            'include_en'  => $this->include_en,
            'exclude_ar'  => $this->exclude_ar,
            'exclude_en'  => $this->exclude_en,
            'source'  => $this->source,
            // 'files' => TourFile::where('tour_id', $this->id)->get(),
            'images' => PackageImage::where('package_id', $this->id)->get()
        ];
    }
}
