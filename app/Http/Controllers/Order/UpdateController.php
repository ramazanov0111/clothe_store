<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Image;
use App\Models\Product;
use App\Models\ProductTag;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Product $product)
    {
        $data = $request->validated();

        if (isset($data['preview_image'])
            && (!in_array($data['preview_image'], ['', '/images/' . $product->preview_image], true))) {
            $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
        }
        $tagsIds = $data['tags'] ?? [];
        $gallery = $data['gallery'] ?? [];
        unset($data['tags'], $data['gallery']);

        $product->update($data);

        $productTags = ProductTag::query()
            ->where('product_id', $product->id)
            ->get()
            ->pluck('tag_id')
            ->all();

        foreach ($productTags as $productTag) {
            if (!in_array((string)$productTag, $tagsIds, true)) {
                ProductTag::query()
                    ->where('tag_id', $productTag)
                    ->delete();
            }
        }

        foreach ($tagsIds as $tagId) {
            if (!in_array((int)$tagId, $productTags, true)) {
                ProductTag::query()->create([
                    'product_id' => $product->id,
                    'tag_id' => $tagId,
                ]);
            }
        }

        foreach ($gallery as $item) {
            $currentImagesCount = Image::query()->where('product_id', $product->id)->get()->count();

            if ($currentImagesCount >= 3) {
                continue;
            }
            $imgPath = Storage::disk('public')->put('/images', $item);
            Image::query()->create([
                'product_id' => $product->id,
                'filename' => $imgPath,
            ]);
        }

        return view('product.show', compact('product'));
    }
}
