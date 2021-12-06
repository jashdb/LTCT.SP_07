<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'Product';
    protected $fillable = ['productName', 'category', 'company', 'productionDate'];
    protected $primaryKey = 'productId';
}
