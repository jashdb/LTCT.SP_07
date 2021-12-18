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
        
        $customer  = DB::table('User')
                    ->where('userId',$request->input('customerId'))
                    ->first();

        $shipper  = DB::table('User')
                    ->where('userId',$request->input('shipperId'))
                    ->first();

        if($customer->role != 0){
            return response()->json([
                'status' => 201,
                'message' => 'Wrong CustomerId!',
            ]);
        }elseif($shipper->role != 1){
            return response()->json([
                'status' => 201,
                'message' => 'Wrong ShipperId!',
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
        
        $delivery = DB::table('Delivery')
                ->where('deliveryId',$request->input('deliveryId'))
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
        $delivery = DB::table('Delivery')
                ->where('status',0)
                ->all();
        
        if($delivery != NULL){
            return response()->json([
                'status' => 200,
                'delivery' => $delivery,
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
                'message' => '...Đỗ nghèo khỉ',
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

    public function cancelDelivery(Request $request){                 //0. chơ xac nhan
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
}