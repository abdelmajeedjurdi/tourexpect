<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\Destination;
// use App\Models\HotelFile;
use App\Models\HotelImage;
// use App\Models\HotelProperty;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class HotelResource extends JsonResource
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
            'active'  => $this->active == 1 ? 'true' : 'false',
            'price'  => $this->price,
            'discount'  => $this->discount,
            'discount_type'  => $this->discount_type,
            'stars'  => $this->stars,
            'source'  => $this->source,
            // 'files' => HotelFile::where('tour_id', $this->id)->get(),
            'images' => HotelImage::where('hotel_id', $this->id)->get(),
            'rooms' => DB::table('rooms')->where('hotel_id', '=', $this->id)->get(),
            'facilities' => $this->facilities
        ];
    }
}
