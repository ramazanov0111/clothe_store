<?php

namespace App\Http\Controllers\API\Order;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order\IndexOrderResource;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class IndexController extends Controller
{
    public function __invoke(): AnonymousResourceCollection
    {
        /** @var User $user */
        $user = auth()->user();

        $orders = Order::query()->where('user_id', $user->getId())->get();

        return IndexOrderResource::collection($orders);
    }
}
