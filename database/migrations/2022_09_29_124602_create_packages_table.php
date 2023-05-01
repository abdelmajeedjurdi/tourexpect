<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->json('category_ids')->nullable();
            $table->json('destination_ids')->nullable();
            $table->string('title_en')->nullable();
            $table->string('title_ar')->nullable();
            $table->string('address_ar')->nullable();
            $table->string('address_en')->nullable();
            $table->longText('description_en')->nullable();
            $table->longText('description_ar')->nullable();
            $table->longText('itinerary')->nullable();
            $table->string('slug');
            $table->boolean('active')->default(1);
            $table->string('thumbnail')->default('default.jpg');
            $table->string('duration_en')->nullable();
            $table->string('duration_ar')->nullable();
            $table->integer('max_number_of_people')->nullable();
            $table->longText('include_ar')->nullable();
            $table->longText('include_en')->nullable();
            $table->longText('exclude_ar')->nullable();
            $table->longText('exclude_en')->nullable();
            $table->string('source')->nullable();
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
            $table->json('banner_highlights')->nullable();
            $table->json('options')->nullable();
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
        Schema::dropIfExists('packages');
    }
}
