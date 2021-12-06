<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;
    protected $table = 'Delivery';
    protected $fillable = ['customerId', 'shipperId', 'deliveryAddress', 'shippingFee', 'status'];
    protected $primaryKey = 'deliveryId';
}
