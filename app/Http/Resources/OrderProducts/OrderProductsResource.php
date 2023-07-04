<?php

namespace App\Http\Resources\OrderProducts;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        /**
         * @var OrderProduct $this
         */

        $size = '';
        foreach (Product::SIZES as $item) {
            if ($item['code'] === $this->size) {
                $size = $item['name'];
                break;
            }
        }

        $printStyle = '';
        foreach (Product::PRINT_STYLES as $item) {
            if ($item['code'] === $this->print_style) {
                $printStyle = $item['name'];
                break;
            }
        }

        return [
            'order_id' => $this->order_id,
            'product_id' => $this->product_id,
            'count' => $this->count,
            'sum' => $this->sum,
            'color' => Product::COLORS[$this->color],
            'size' => $size,
            'print_style' => $printStyle,
            'image_id' => $this->image_id,
        ];
    }
}
