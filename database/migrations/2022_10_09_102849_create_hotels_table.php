<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id');
            $table->bigInteger('destination_id');
            $table->string('title_en');
            $table->string('title_ar');
            $table->string('address_ar');
            $table->string('address_en');
            $table->longText('description_en');
            $table->longText('description_ar');
            $table->string('slug');
            $table->boolean('active')->default(1);
            $table->float('discount')->default(0.0);
            $table->string('thumbnail')->default('default.jpg');
            $table->string('discount_type')->default('persentage');
            $table->float('price')->nullable();
            $table->integer('stars');
            $table->json('facilities')->nullable();
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
        Schema::dropIfExists('hotels');
    }
}
