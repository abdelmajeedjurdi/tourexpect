<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visas', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable();
            $table->json('country_passport_ids')->nullable();
            $table->string('title_en')->nullable();
            $table->string('title_ar')->nullable();
            $table->longText('documents_en')->nullable();
            $table->longText('documents_ar')->nullable();
            $table->longText('conditions_en')->nullable();
            $table->longText('conditions_ar')->nullable();
            $table->longText('types_en')->nullable();
            $table->longText('types_ar')->nullable();
            $table->json('options')->nullable();
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
        Schema::dropIfExists('visas');
    }
}
