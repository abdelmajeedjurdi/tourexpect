<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageDestinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_destination', function (Blueprint $table) {
            $table->integer('package_id')->unsigned();
            $table->integer('destination_id')->unsigned();

            // $table->foreign('package_id')
            //     ->references('id')
            //     ->on('packages')
            //     ->onDelete('cascade');

            // $table->foreign('destination_id')
            //     ->references('id')
            //     ->on('destinations')
            //     ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('package_destinations');
    }
}
