<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Product;

class DeleteController extends Controller
{
    public function __invoke(Product $product)
    {
        $product->tags()->delete();
        $product->reviews()->delete();
        $product->gallery()->delete();

        $product->delete();

        return redirect()->route('product.index');
    }
}
