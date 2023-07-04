<?php

namespace App\Http\Controllers\API\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ClotheTypeResource;
use App\Http\Resources\Product\ColorResource;
use App\Http\Resources\Product\IndexProductResource;
use App\Http\Resources\Product\PrintStyleResource;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Product\SizeResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class IndexController extends Controller
{
    public function actionGetProductList(): AnonymousResourceCollection
    {
        $products = Product::query()
            ->where('is_published', true)
            ->where('category', Product::NON_PLAYER_CODE)
            ->get()
            ->all();

        return IndexProductResource::collection($products);
    }

    public function actionGetColorList(): AnonymousResourceCollection
    {
        $colors = Product::COLORS;

        return ColorResource::collection($colors);
    }

    public function actionGetSizeList(): AnonymousResourceCollection
    {
        $sizes = Product::SIZES;

        return SizeResource::collection($sizes);
    }

    public function actionGetPrintStyleList(): AnonymousResourceCollection
    {
        $printStyle = Product::PRINT_STYLES;

        return PrintStyleResource::collection($printStyle);
    }

    public function actionGetClotheTypeList(): AnonymousResourceCollection
    {
        $clotheTypes = Product::CLOTHES_TYPES;

        return ClotheTypeResource::collection($clotheTypes);
    }

    public function actionGetPlayerProduct(Request $request): ProductResource
    {
        $clotheType = $request->get('clotheType');
        $product = Product::query()
            ->where('is_published', true)
            ->where('category', Product::PLAYER_CODE)
            ->where('clothe_type', $clotheType)
            ->get()
            ->first();

        return new ProductResource($product);
    }

    public function actionGetCartProductsBySlugs(Request $request): JsonResponse
    {
        $products = $request->get('products');

        $productData = [];
        foreach ($products as $item) {
            $item = json_decode($item);
            $product = Product::query()
                ->where('slug', $item->slug)
                ->get()
                ->first();
            $productData[] = [
                'id' => $product->id,
                'slug' => $product->slug,
                'title' => $product->title,
                'price' => $product->price,
                'image' => $product->imageUrl,
                'qty' => $item->qty,
                'summa' => $product->price * $item->qty,
            ];
        }

        return new JsonResponse($productData);
    }

    public function actionGetUserList(): array
    {
        return User::query()
            ->get()
            ->all();
    }
}
