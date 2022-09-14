<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
            'category_id' => $this->category_id,
            'destination_id' => $this->destination_id,
            'slug'  => $this->slug,
            'image'  => $this->image,
            'title_en'  => $this->title_en,
            'title_ar'  => $this->title_ar,
            'content_en'  => $this->content_en,
            'content_ar'  => $this->content_ar,
            'preview_text_ar'  => $this->preview_text_ar,
            'preview_text_en'  => $this->preview_text_en,
        ];
    }
}
