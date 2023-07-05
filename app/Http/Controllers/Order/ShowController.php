<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ShowController extends Controller
{
    public function __invoke(Product $product)
    {
        return view('product.show', compact('product'));
    }
}
