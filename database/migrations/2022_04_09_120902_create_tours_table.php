<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id');
            $table->bigInteger('destination_id');
            $table->string('title_en');
            $table->string('title_ar');
            $table->string('address_ar');
            $table->string('address_en');
            $table->longText('description_en');
            $table->longText('description_ar');
            $table->longText('itinerary_ar');
            $table->longText('itinerary_en');
            $table->string('slug');
            $table->boolean('active')->default(1);
            $table->float('adult_price');
            $table->float('child_price');
            $table->float('discount')->default(0.0);
            $table->string('thumbnail')->default('default.jpg');
            $table->string('discount_type')->default('persentage');
            $table->string('duration_en');
            $table->string('duration_ar');
            $table->integer('max_number_of_people');
            $table->longText('include_ar');
            $table->longText('include_en');
            $table->longText('exclude_ar');
            $table->longText('exclude_en');
            $table->string('source');
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
        Schema::dropIfExists('tours');
    }
}
