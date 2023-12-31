<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
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
            // $blog->destination_id = -1;
            'category_id' => ['required'],
            'title_en' => ['required'],
            'title_ar' => ['required'],
            'content_en' => ['required', 'min:200'],
            'content_ar' => ['required', 'min:200'],
            'preview_text_en' => ['required'],
            'preview_text_ar' => ['required'],
        ];
    }
}
