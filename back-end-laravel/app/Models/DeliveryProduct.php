<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryProduct extends Model
{
    use HasFactory;
    protected $table = 'DeliveryProduct';
    protected $fillable = ['deliveryId', 'productId', 'count'];
    protected $primaryKey = 'relationId';
}
