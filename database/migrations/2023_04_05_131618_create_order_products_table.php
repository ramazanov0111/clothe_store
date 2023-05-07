<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class  CreateOrderProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->index()->constrained('orders');
            $table->foreignId('product_id')->index()->constrained('products');
            $table->foreignId('image_id')->nullable()->index()->constrained('generated_images');
            $table->integer('count');
            $table->integer('color');
            $table->integer('size');
            $table->integer('print_style')->nullable();
            $table->float('sum');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_products');
    }
}
