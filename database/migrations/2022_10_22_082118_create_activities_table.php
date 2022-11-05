<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id');
            $table->bigInteger('destination_id');
            $table->string('title_en');
            $table->string('title_ar');
            $table->string('address_ar')->nullable();
            $table->string('address_en')->nullable();
            $table->longText('description_en')->nullable();
            $table->longText('description_ar')->nullable();
            $table->longText('itinerary_ar')->nullable();
            $table->longText('itinerary_en')->nullable();
            $table->string('slug');
            $table->boolean('active')->default(1);
            $table->float('adult_price')->nullable();
            $table->float('child_price')->nullable();
            $table->float('discount')->default(0.0);
            $table->string('thumbnail')->default('default.jpg');
            $table->string('discount_type')->default('percentage');
            $table->string('duration_en')->nullable();
            $table->string('duration_ar')->nullable();
            $table->integer('max_number_of_people')->nullable();
            $table->longText('include_ar')->nullable();
            $table->longText('include_en')->nullable();
            $table->longText('exclude_ar')->nullable();
            $table->longText('exclude_en')->nullable();
            $table->string('source')->nullable();
            $table->longText('options_ar')->nullable();
            $table->longText('options_en')->nullable();
            $table->longText('highlights_ar')->nullable();
            $table->longText('highlights_en')->nullable();
            $table->longText('information_ar')->nullable();
            $table->longText('information_en')->nullable();
            $table->longText('policy_ar')->nullable();
            $table->longText('policy_en')->nullable();
            $table->longText('timing_and_transfer_ar')->nullable();
            $table->longText('timing_and_transfer_en')->nullable();
            $table->longText('notes_en')->nullable();
            $table->longText('notes_ar')->nullable();
            $table->longText('terms_and_conditions_en')->nullable();
            $table->longText('terms_and_conditions_ar')->nullable();
            $table->boolean('is_from')->nullable();
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
        Schema::dropIfExists('activities');
    }
}
