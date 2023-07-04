<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\OrderProducts\OrderProductsResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
         * @var Order $this
        */

        return [
            'user_id',
            'order_date' => $this->order_date,
            'total' => $this->total,
            'status' => $this->status,
            'payment_status' => $this->payment_status,
            'delivery_date' => $this->delivery_date,
            'products' => OrderProductsResource::collection($this->products),
        ];
    }
}
