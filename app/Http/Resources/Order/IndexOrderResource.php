<?php

namespace App\Http\Resources\Order;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexOrderResource extends JsonResource
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

        $paymentStatus = Order::PAYMENT_STATUSES[$this->payment_status];
        $status = Order::STATUSES[$this->status];

        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'order_date' => Carbon::parse($this->order_date)->locale('ru')->format('jS \of F Y h:i'),
            'total' => $this->total,
            'status' => $status,
            'payment_status' => $paymentStatus,
            'delivery_date' => Carbon::parse($this->delivery_date)->format('Y-m-d'),
        ];
    }
}
