<?php

use App\Http\Controllers\API\Product\IndexController;
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

//Route::get('/products', \App\Http\Controllers\API\Product\IndexController::class);
Route::get('/products', [IndexController::class, 'actionGetProductList']);
Route::get('/product', [IndexController::class, 'actionGetPlayerProduct']);

Route::get('/colors', [IndexController::class, 'actionGetColorList']);
Route::get('/sizes', [IndexController::class, 'actionGetSizeList']);
Route::get('/print_styles', [IndexController::class, 'actionGetPrintStyleList']);
Route::get('/clothe_types', [IndexController::class, 'actionGetClotheTypeList']);
