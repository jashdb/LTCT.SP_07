<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Delivery', function (Blueprint $table) {
            $table->bigIncrements('deliveryId');
            $table->bigInteger('customerId')->unsigned();
            $table->string('customerName');
            $table->string('customerPhone');
            $table->bigInteger('shipperId')->unsigned();
            $table->foreign('shipperId')->references('userId')->on('User')->onDelete('cascade')->onUpdate('cascade');
            $table->string('deliveryAddress');
            $table->bigInteger('cost');
            $table->bigInteger('shippingFee');
            $table->integer('status');
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
        Schema::dropIfExists('Delivery');
    }
}