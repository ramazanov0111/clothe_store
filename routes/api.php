<?php

use App\Http\Controllers\API\Product\IndexController;
use App\Http\Controllers\API\Product\PlayerController;
use App\Http\Controllers\API\Product\ShowController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\User\StoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);

    Route::group(['middleware' => 'auth:api'],  function () {
        Route::post('me', [AuthController::class, 'me']);
        Route::group(['prefix' => 'orders'], function () {
            Route::get('/', \App\Http\Controllers\API\Order\IndexController ::class);
            Route::get('/{order}', \App\Http\Controllers\API\Order\ShowController ::class);
        });
    });

});

Route::group(['prefix' => 'users'], function () {
    Route::post('/', [StoreController::class, 'userRegister']);
    Route::post('/update', [StoreController::class, 'updateUserData']);
});

Route::get('/products', [IndexController::class, 'actionGetProductList']);
Route::get('/colors', [IndexController::class, 'actionGetColorList']);
Route::get('/sizes', [IndexController::class, 'actionGetSizeList']);
Route::get('/print_styles', [IndexController::class, 'actionGetPrintStyleList']);
Route::get('/clothe_types', [IndexController::class, 'actionGetClotheTypeList']);
Route::get('/products/{product}', ShowController::class);
Route::get('/player_product', [PlayerController::class, 'actionGetPlayerProduct']);
Route::get('/generate', [PlayerController::class, 'actionGenerateImage']);
Route::post('/orders', \App\Http\Controllers\API\Order\StoreController ::class);
Route::get('/cart_products', [IndexController::class, 'actionGetCartProductsBySlugs']);
Route::get('/genders', [\App\Http\Controllers\API\User\IndexController::class, 'actionGetGenderList']);
