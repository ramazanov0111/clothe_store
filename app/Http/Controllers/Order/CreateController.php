<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Tag;

class CreateController extends Controller
{
    public function __invoke()
    {
        $tags = Tag::all();
        $categories = Product::CATEGORIES;
        $clotheTypes = Product::CLOTHES_TYPES;

        return view('product.create',
            compact('tags', 'categories', 'clotheTypes')
        );
    }
}
