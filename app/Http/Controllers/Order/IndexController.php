<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Product;

class IndexController extends Controller
{
    public function __invoke()
    {
        $products = Product::all();

        return view('product.index', compact('products'));
    }
}
