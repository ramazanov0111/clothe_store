<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;

class ShowController extends Controller
{
    public function __invoke($slug): ProductResource
    {
        $product = Product::query()->where('slug', $slug)->first();
        return new ProductResource($product);
    }
}
