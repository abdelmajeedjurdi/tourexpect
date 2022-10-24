<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ActivityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category_id' => ['required'],
            // 'destination_id' => ['required'],
            'title_en' => ['required'],
            'title_ar' => ['required'],
            'description_en' => ['required'],
            'description_ar' => ['required'],
            'address_en' => ['required'],
            'address_ar' => ['required'],
            'highlights_en' => ['required'],
            'highlights_ar' => ['required'],
            'active' => ['required'],
            'adult_price' => ['required'],
            'child_price' => ['required'],
            'discount' => ['required'],
            'discount_type' => ['required'],
            'duration_en' => ['required'],
            'duration_ar' => ['required'],
            'max_number_of_people' => ['required'],
            'include_en' => ['required'],
            'include_ar' => ['required'],
            'exclude_en' => ['required'],
            'exclude_ar' => ['required'],
        ];
    }
}
