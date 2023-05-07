<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreRequest;
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
        unset($data['tags']);

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

        return redirect()->route('product.index');
    }
}

