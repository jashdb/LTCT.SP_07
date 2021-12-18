<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Delivery;
use App\Models\DeliveryProduct;

class DeliveryController extends Controller
{
    public function createDelivery(Request $request){
        //'customerId', 'shipperId', 'deliveryAddress', 'shippingFee', 'status', 'cost', 'orderId'
        $newDelivery = new Delivery();
        $newDelivery->customerId = $request->input('customerId');
        $newDelivery->shipperId = $request->input('shipperId');
        $newDelivery->deliveryAddress = $request->input('deliveryAddress');
        $newDelivery->shippingFee = $request->input('shippingFee');
        $newDelivery->status = 0;
        $newDelivery->cost = $request->input('cost');
        $newDelivery->orderId = $request->input('orderId');
        
        $newDelivery->save();
        return response()->json([
            'status' => 200,
            'message' => 'Create Successfully',
        ]);
    }
    public function addProduct(Request $request){
        //'deliveryId', 'productId', 'count', 'productName', 'category', 'company', 'productionDate'
        $newProduct = new DeliveryProduct();
        $newProduct->deliveryId = $request->input('deliveryId');
        $newProduct->productId = $request->input('productId');
        $newProduct->count = $request->input('count');
        $newProduct->productName = $request->input('productName');
        $newProduct->category = 0;
        $newProduct->company = 0;
        
        $newProduct->save();
        return response()->json([
            'status' => 200,
            'message' => 'Add Successfully',
        ]);
    }
}