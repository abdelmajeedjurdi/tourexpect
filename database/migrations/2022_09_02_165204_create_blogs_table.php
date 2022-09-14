<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('slug');
            $table->string('image')->default('default.jpg');
            $table->string('title_ar');
            $table->string('title_en');
            $table->longText('preview_text_ar');
            $table->longText('preview_text_en');
            $table->json('content_ar');
            $table->json('content_en');
            $table->integer('category_id');
            $table->integer('destination_id');
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
        Schema::dropIfExists('blogs');
    }
}
