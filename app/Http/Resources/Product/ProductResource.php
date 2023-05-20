<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        $category = [
            'code' => $this->category,
            'title' => $this->categoryTitle,
        ];

        $clotheType = [
            'code' => $this->clothe_type,
            'title' => $this->clotheTypeTitle,
        ];

        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'price' => $this->price,
            'imageUrl' => $this->imageUrl,
            'category' => $category,
            'clothe_type' => $clotheType,
            'count' => $this->count,
            'description' => $this->description,
            'gallery' => ProductGalleryResource::collection($this->gallery),
        ];
    }
}
