<?php

namespace App\Http\Controllers\API\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Order\StoreRequest;
use App\Http\Resources\Order\IndexOrderResource;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use App\Models\User;
use App\Services\UserService;
use Carbon\Carbon;
use Faker\Core\Color;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class StoreController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        try {
            $data = $this->validate($request, [
                'firstname' => 'required|string',
                'email' => 'required|string',
                'phone' => 'required|string',
                'address' => 'required|string',
                'products' => 'required|array',
                'total_price' => 'required|integer',
            ]);
        } catch (ValidationException $ex) {
            return new JsonResponse([
                'error' => 'Не удалось оформить заказ'
            ], ResponseAlias::HTTP_BAD_REQUEST);
        }

        $issetUser = User::query()
            ->where('email', $data['email'])
            ->first();

        if (!$issetUser) {
            $password = explode("@", $data['email']);

            /**
             * @var User $user
             */
            $user = User::query()->create([
                'email' => $data['email'],
                'firstname' => $data['firstname'],
                'password' => Hash::make($password[0]),
                'address' => $data['address'],
                'phone' => $data['phone'],
            ]);

            $sendUserData = (new UserService)->sendUserLoginData($user->email, $password);

            if (!$sendUserData) {
                $user->delete();
                return new JsonResponse([
                    'message' => 'E-mail не действителен, введите другой адрес электронной почты!'
                ], ResponseAlias::HTTP_BAD_REQUEST);
            }
        } else {
            $user = $issetUser;
        }

        dd($user);

        /**
         * @var Order $order
         */
        $order = Order::query()->create([
            'user_id' => $user->id,
            'order_date' => Carbon::now(),
            'total' => $data['total_price'],
            'status' => Order::ACCEPTED_STATUS_CODE,
            'payment_status' => Order::NOT_PAID_CODE,
            'delivery_date' => Carbon::now()->addDays(5),
        ]);

        $orderProducts = $data['products'];
        foreach ($orderProducts as $orderProduct) {
            /**
             * @var Product $product
             */
            $product = Product::query()->where('id', $orderProduct['id'])->get()->first();
            OrderProduct::query()->create([
                'order_id' => $order->id,
                'product_id' => $product->id,
                'count' => $orderProduct['qty'],
                'sum' => $product->price * $orderProduct['qty'],
                'color' => $orderProduct['color'] ?? Product::WHITE_COLOR,
                'size' => $orderProduct['size'] ?? Product::S_SIZE,
                'print_style' => null,
                'image_id' => null,
            ]);
        }

        return new JsonResponse(null, ResponseAlias::HTTP_NO_CONTENT);
    }
}
