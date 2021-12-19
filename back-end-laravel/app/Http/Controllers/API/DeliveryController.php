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
        $newDelivery->deliveryAddress = $request->input('deliveryAddress');
        $newDelivery->shippingFee = $request->input('shippingFee');
        $newDelivery->status = 0;
        $newDelivery->cost = $request->input('cost');
        $newDelivery->orderId = $request->input('orderId');

        $customer  = DB::table('User')
                    ->where('userId',$request->input('customerId'))
                    ->first();

        if ($customer == null)
            return response()->json([
                'status' => 201,
                'message' => 'customerId doesn\'t exist!',
            ]);
        elseif ($customer->role != 0){
            return response()->json([
                'status' => 201,
                'message' => 'Wrong CustomerId!',
            ]);
        }else{
            $newDelivery->save();
            return response()->json([
                'status' => 200,
                'delivery' => $newDelivery,
                'message' => 'Create Successfully',
            ]);
        }

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
            'product' => $newProduct,
            'message' => 'Add Successfully',
        ]);
    }

    public function updateStatus(Request $request){
        
        $delivery = Delivery::where('deliveryId',$request->input('deliveryId'))
                ->first();
        $delivery->status +=1;
        $delivery->save();
        return response()->json([
            'status' => 200,
            'message' => 'Successfully',
        ]);
    }

    public function getAvailableDelivery(Request $request){
        //lay ra delivery chua shipper nao nhan
        $deliveries = DB::table('Delivery')
                ->where('status',0)
                ->get();
        
        if($deliveries != NULL){
            return response()->json([
                'status' => 200,
                'deliveries' => $deliveries,
                'message' => 'Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'Opps! No delivery available. Ế vl',
            ]);
        }
    }

    public function getDeliveryByUser(Request $request){
        //lay ra delivery của user 
        $delivery = DB::table('Delivery')
                ->where('customerId',$request->input('customerId'))
                ->all();
        if($delivery != NULL)
        {
            return response()->json([
                'status' => 200,
                'delivery' => $delivery,
                'message' => 'Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => '...Đỗ nghèo khỉ',
            ]);
        }
    }

    public function getDeliveryByShipper(Request $request){
        //lay ra delivery của shipper 
        $delivery = DB::table('Delivery')
                ->where('shipperId',$request->input('shipperId'))
                ->all();
        if($delivery != NULL)
        {
            return response()->json([
                'status' => 200,
                'delivery' => $delivery,
                'message' => 'Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => '...Đồ lười!',
            ]);
        }
    }

    public function deleteDelivery(Request $request){
        $delivery = DB::table('Delivery')
                ->where('deliveryId',$request->input('deliveryId'))
                ->first();
        if($delivery->status >= 3) {
            DB::table('Delivery')
                ->where('deliveryId',$request->input('deliveryId'))
                ->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Successfully',
            ]);
        }else{   
            return response()->json([
                'status' => 200,
                'message' => 'Can not delete',
            ]);
        }   
    }

    public function cancelDelivery(Request $request){                       //0. cho xac nhan
        $delivery = DB::table('Delivery')                                   //1. cho lay hang
                ->where('deliveryId',$request->input('deliveryId'))         //2. dang giao
                ->first();                                                  //3. da giao
        if($delivery->status < 2){                                          //4. da huy
            $delivery->status = 4;
            $delivery->save();

            return response()->json([
                'status' => 200,
                'message' => 'Successfully',
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'can not cancel!',
            ]);
        }        
        
    }

    public function takeDelivery(Request $request){
        $shipperId = $request->input('shipperId');
        $deliveryId = $request->input('deliveryId');

        $delivery = DB::table('Delivery')
                ->where('deliveryId',$deliveryId)
                ->first();
        if($delivery->status == 0 && $delivery->shipperId ==NULL)
        {$delivery->status +=1;
            $delivery->shipperId = $shipperId;
            $delivery->save();
            return response()->json([
                'status' => 200,
                'message' => 'Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'error',
            ]);
        }
        
    }

    public function checkShipper(Request $request){
        $shipperId = $request->input('shipperId');

        $shipper = DB::table('User')
                ->where('userId',$shipperId)
                ->first();
        if($shipper->role == 1)
        {
            return response()->json([
                'status' => 200,
                'check' => true,
                'message' => 'Successfully',
            ]);
        }else{
            return response()->json([
                'status' => 404,
                'check' => false,
                'message' => 'Successfully',
            ]);
        }
        
    }
}