<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
use App\Models\Image;
use App\Models\Product;
use App\Models\ProductTag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
        $tagsIds = $data['tags'] ?? [];
        $gallery = $data['gallery'] ?? [];
        unset($data['tags'], $data['gallery']);

        /**
         * @var Product $product
         */
        $product = Product::query()->create($data);

        foreach ($tagsIds as $tagId) {
            ProductTag::query()->create([
                'product_id' => $product->id,
                'tag_id' => $tagId,
            ]);
        }

        foreach ($gallery as $item) {
            $imgPath = Storage::disk('public')->put('/images', $item);
            Image::query()->create([
                'product_id' => $product->id,
                'filename' => $imgPath,
            ]);
        }

        return redirect()->route('product.index');
    }
}

