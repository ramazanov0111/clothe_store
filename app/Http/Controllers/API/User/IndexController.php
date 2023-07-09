<?php

namespace App\Http\Controllers\API\User;

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
    public function actionGetUserList(): array
    {
        return User::query()
            ->get()
            ->all();
    }
    public function actionGetGenderList(): array
    {
        return User::GENDERS;
    }
}
