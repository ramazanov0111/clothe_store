<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Product;
use App\Models\ProductTag;
use App\Models\Tag;

class EditController extends Controller
{
    public function __invoke(Product $product)
    {
        $productTags = ProductTag::query()
            ->where('product_id', $product->id)
            ->get()
            ->pluck('tag_id')
            ->all();
        $tags = Tag::all();
        $gallery = Image::query()->where('product_id', $product->id)->get();

        $categories = Product::CATEGORIES;
        $clotheTypes = Product::CLOTHES_TYPES;

        return view('product.edit',
            compact('product', 'tags', 'categories', 'clotheTypes', 'productTags', 'gallery')
        );
    }
}
