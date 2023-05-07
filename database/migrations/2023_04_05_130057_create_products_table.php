<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Название');
            $table->text('description')->comment('Описание');
            $table->string('slug')->comment('Ссылка')->unique();
            $table->string('preview_image');
            $table->float('price')->nullable()->comment('Цена');
            $table->integer('count');
            $table->boolean('is_published')->default(true);
            $table->integer('category')->comment('Категория');
            $table->integer('clothe_type')->comment('Тип одежды');
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
        Schema::dropIfExists('products');
    }
}
