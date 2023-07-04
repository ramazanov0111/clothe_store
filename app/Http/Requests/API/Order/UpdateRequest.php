<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class  UpdateRequest extends FormRequest
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
            'title' => 'required|string',
            'slug' => 'nullable|string',
            'price' => 'required|integer',
            'preview_image' => 'nullable',
            'category' => 'nullable|integer',
            'clothe_type' => 'nullable|integer',
            'count' => 'nullable|integer',
            'description' => 'nullable|string',
            'is_published' => 'nullable|integer',
            'tags' => 'nullable|array',
            'gallery' => 'nullable|array',
        ];
    }
}
