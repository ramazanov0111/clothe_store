<?php

namespace App\Http\Controllers\API\Order;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;

class ShowController extends Controller
{
    public function __invoke($orderId): OrderResource
    {
        $order = Order::query()->where('id', $orderId)->first();
        return new OrderResource($order);
    }
}
