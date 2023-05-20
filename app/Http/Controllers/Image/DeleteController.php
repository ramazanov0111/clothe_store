<?php

namespace App\Http\Controllers\Image;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Product;

class DeleteController extends Controller
{
    public function __invoke(Image $image)
    {
        $product = Product::query()->where('id', $image->product_id)->get()->first();
        $image->delete();

        return redirect()->route('product.edit', $product->id);
    }
}
