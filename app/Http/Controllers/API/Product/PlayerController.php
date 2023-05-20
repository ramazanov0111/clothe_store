<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function actionGetPlayerProduct(Request $request): ProductResource
    {
        $clotheType = (int)$request->get('clotheType');

        $product = Product::query()
            ->where('category', Product::PLAYER_CODE)
            ->where('clothe_type', $clotheType)
            ->first();

        return new ProductResource($product);
    }
}
