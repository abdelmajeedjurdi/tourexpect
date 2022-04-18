<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\ProductFile;
use App\Models\ProductImage;
use App\Models\ProductProperty;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'category' => Category::where('id', $this->category_id)->select('name_en', 'name_ar', 'id')->first(),
            'name_en'  => $this->name_en,
            'name_ar'  => $this->name_ar,
            'image'  => $this->thumbnail,
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'properties' => ProductProperty::where('product_id', $this->id)->get(),
            'files' => ProductFile::where('product_id', $this->id)->get(),
            'images' => ProductImage::where('product_id', $this->id)->get()
        ];
    }
}
