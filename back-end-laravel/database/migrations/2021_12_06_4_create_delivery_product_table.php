<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('DeliveryProduct', function (Blueprint $table) {
            $table->bigIncrements('relationId');
            $table->bigInteger('deliveryId')->unsigned();
            $table->foreign('deliveryId')->references('deliveryId')->on('Delivery')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('productId')->unsigned();
            $table->string('productName');
            $table->string('category');
            $table->string('company');
            $table->timestamp('productionDate');
            $table->integer('count');
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
        Schema::dropIfExists('DeliveryProduct');
    }
}
