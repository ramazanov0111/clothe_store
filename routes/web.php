<?php

use App\Http\Controllers\Main\IndexController;
use App\Http\Controllers\Client\MainController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'proger'], function () {

    Route::get('/', IndexController::class)->name('main.index');

    Route::group(['prefix' => 'tags'], function () {
        Route::get('/', \App\Http\Controllers\Tag\IndexController::class)->name('tag.index');
        Route::get('/create', \App\Http\Controllers\Tag\CreateController::class)->name('tag.create');
        Route::post('/', \App\Http\Controllers\Tag\StoreController::class)->name('tag.store');
        Route::get('/{tag}/edit', \App\Http\Controllers\Tag\EditController::class)->name('tag.edit');
        Route::get('/{tag}', \App\Http\Controllers\Tag\ShowController::class)->name('tag.show');
        Route::patch('/{tag}', \App\Http\Controllers\Tag\UpdateController::class)->name('tag.update');
        Route::delete('/{tag}', \App\Http\Controllers\Tag\DeleteController::class)->name('tag.delete');
    });

    Route::group(['prefix' => 'images'], function () {
        Route::get('/', \App\Http\Controllers\Image\IndexController::class)->name('image.index');
        Route::get('/create', \App\Http\Controllers\Image\CreateController::class)->name('image.create');
        Route::post('/', \App\Http\Controllers\Image\StoreController::class)->name('image.store');
        Route::get('/{image}/edit', \App\Http\Controllers\Image\EditController::class)->name('image.edit');
        Route::get('/{image}', \App\Http\Controllers\Image\ShowController::class)->name('image.show');
        Route::patch('/{image}', \App\Http\Controllers\Image\UpdateController::class)->name('image.update');
        Route::delete('/{image}', \App\Http\Controllers\Image\DeleteController::class)->name('image.delete');
    });

    Route::group(['prefix' => 'users'], static function () {
        Route::get('/', \App\Http\Controllers\User\IndexController::class)->name('user.index');
        Route::get('/create', \App\Http\Controllers\User\CreateController::class)->name('user.create');
        Route::post('/', \App\Http\Controllers\User\StoreController::class)->name('user.store');
        Route::get('/{user}/edit', \App\Http\Controllers\User\EditController::class)->name('user.edit');
        Route::get('/{user}', \App\Http\Controllers\User\ShowController::class)->name('user.show');
        Route::patch('/{user}', \App\Http\Controllers\User\UpdateController::class)->name('user.update');
        Route::delete('/{user}', \App\Http\Controllers\User\DeleteController::class)->name('user.delete');
    });

    Route::group(['prefix' => 'products'], function () {
        Route::get('/', \App\Http\Controllers\Product\IndexController::class)->name('product.index');
        Route::get('/create', \App\Http\Controllers\Product\CreateController::class)->name('product.create');
        Route::post('/', \App\Http\Controllers\Product\StoreController::class)->name('product.store');
        Route::get('/{product}/edit', \App\Http\Controllers\Product\EditController::class)->name('product.edit');
        Route::get('/{product}', \App\Http\Controllers\Product\ShowController::class)->name('product.show');
        Route::patch('/{product}', \App\Http\Controllers\Product\UpdateController::class)->name('product.update');
        Route::delete('/{product}', \App\Http\Controllers\Product\DeleteController::class)->name('product.delete');
    });

    Route::group(['prefix' => 'orders'], function () {
        Route::get('/', \App\Http\Controllers\Order\IndexController::class)->name('order.index');
        Route::get('/create', \App\Http\Controllers\Order\CreateController::class)->name('order.create');
        Route::post('/', \App\Http\Controllers\Order\StoreController::class)->name('order.store');
        Route::get('/{order}/edit', \App\Http\Controllers\Order\EditController::class)->name('order.edit');
        Route::get('/{order}', \App\Http\Controllers\Order\ShowController::class)->name('order.show');
        Route::patch('/{order}', \App\Http\Controllers\Order\UpdateController::class)->name('order.update');
        Route::delete('/{order}', \App\Http\Controllers\Order\DeleteController::class)->name('order.delete');
    });

});

Route::get('{page}', MainController::class)->where('page', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
