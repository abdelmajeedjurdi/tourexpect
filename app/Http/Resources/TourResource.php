<?php

namespace App\Http\Resources;

use App\Models\Category;
// use App\Models\ProductFile;
// use App\Models\ProductImage;
// use App\Models\ProductProperty;
use Illuminate\Http\Resources\Json\JsonResource;

class TourResource extends JsonResource
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
            'title_ar'  => $this->title_ar,
            'thumbnail'  => $this->thumbnail,
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'itinerary_ar'  => $this->itinerary_ar,
            'itinerary_en'  => $this->itinerary_en,
            'active'  => $this->active,
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
            // 'files' => ProductFile::where('product_id', $this->id)->get(),
            // 'images' => ProductImage::where('product_id', $this->id)->get()
        ];
    }
}
