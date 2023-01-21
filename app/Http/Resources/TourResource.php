<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\Destination;
use App\Models\OptionIcon;
// use App\Models\TourFile;
use App\Models\TourImage;
// use App\Models\TourProperty;
use Illuminate\Http\Resources\Json\JsonResource;
use PhpOption\Option;

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
            'adult_price' => strlen($this->options) > 2 && $this->options != 'null' ? json_decode($this->options)[0]->adult_price : '',
            'discount_type' => strlen($this->options) > 2 && $this->options != 'null' ? json_decode($this->options)[0]->option_discount_type : '',
            'discount' => strlen($this->options) > 2 && $this->options != 'null' ? json_decode($this->options)[0]->option_discount : '',
            'category_ids' => $this->category_ids,
            'destination_ids' => $this->destination_ids,
            // 'category' => Category::where('id', $this->category_id)->select('name_en', 'name_ar', 'id')->first(),
            // 'destination' => Destination::where('id', $this->destination_id)->select('name_en', 'name_ar', 'id')->first(),
            'title_en'  => $this->title_en,
            'title_ar'  => $this->title_ar,
            'address_ar'  => $this->address_ar,
            'address_en'  => $this->address_en,
            'thumbnail'  => file_exists('images/tours/' . $this->thumbnail) ? $this->thumbnail : 'default.jpg',
            'description_en'  => $this->description_en,
            'description_ar'  => $this->description_ar,
            'itinerary'  => $this->itinerary,
            'active'  => $this->active == 1 ? 'true' : 'false',
            'duration_en'  => $this->duration_en,
            'duration_ar'  => $this->duration_ar,
            'max_number_of_people'  => $this->max_number_of_people,
            'include_ar'  => $this->include_ar,
            'include_en'  => $this->include_en,
            'exclude_ar'  => $this->exclude_ar,
            'exclude_en'  => $this->exclude_en,
            'source'  => $this->source,
            'options' => $this->options,
            'highlights_ar' => $this->highlights_ar,
            'highlights_en' => $this->highlights_en,
            'information_ar' => $this->information_ar,
            'information_en' => $this->information_en,
            'policy_ar' => $this->policy_ar,
            'policy_en' => $this->policy_en,
            'timing_and_transfer_ar' => $this->timing_and_transfer_ar,
            'timing_and_transfer_en' => $this->timing_and_transfer_en,
            'notes_en' => $this->notes_en,
            'notes_ar' => $this->notes_ar,
            'terms_and_bullet_sections_en' => $this->terms_and_bullet_sections_en,
            'terms_and_bullet_sections_ar' => $this->terms_and_bullet_sections_ar,
            'is_from' => $this->is_from == 1 ? 'true' : 'false',
            'banner_highlights' => $this->banner_highlights,
            // 'files' => TourFile::where('tour_id', $this->id)->get(),
            'images' => TourImage::where('tour_id', $this->id)->get(),

        ];
    }
}
