<?php

namespace App\Http\Controllers\API\Product;

use App\Models\Product;
use App\Models\Tag;

class FilterListController
{
    public function __invoke(): array
    {
        return [
            'tags' => Tag::all(),
            'price' => [
                'min' => Product::min('price'),
                'max' => Product::max('price')
            ]
        ];
    }
}
