<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Delivery;
use App\Http\Controllers\API\CalculatorContext;
use App\Http\Controllers\API\Calculators\DefaultCalculator;
use Illuminate\Support\Facades\Http;

class DeliveryController extends Controller
{
    public function createDelivery(Request $request)
    {
        //'customerId', 'shipperId', 'deliveryAddress', 'shippingFee', 'status', 'cost', 'orderId'
        $newDelivery = new Delivery();
        $newDelivery->customerId = $request->input('customerId');
        $newDelivery->deliveryAddress = $request->input('deliveryAddress');
        $newDelivery->shippingFee = $request->input('shippingFee');
        $newDelivery->status = 0;
        $newDelivery->cost = $request->input('cost');
        $newDelivery->orderId = $request->input('orderId');

        $newDelivery->save();
        return response()->json([
            'status' => 200,
            'delivery' => $newDelivery,
            'message' => 'Create Successfully',
        ]);
    }

    public function updateStatus(Request $request)
    {

        $delivery = Delivery::where('deliveryId', $request->input('deliveryId'))
            ->first();

        if ($delivery == NULL) {
            return response()->json([
                'status' => 404,
                'message' => 'Delivery not found!',
            ]);
        } else if ($delivery->status > 2) {
            return response()->json([
                'status' => 405,
                'message' => 'Cannot update status!',
            ]);
        } else {
            $delivery->status += 1;
            $delivery->save();
            return response()->json([
                'status' => 200,
                'message' => 'Updated successfully',
            ]);
        }
    }

    public function getAvailableDelivery(Request $request)
    {
        //lay ra delivery chua shipper nao nhan
        $deliveries = DB::table('Delivery')
            ->where('status', 0)
            ->orderBy('created_at', 'desc')
            ->get();

        if (!($deliveries->isEmpty())) {
            return response()->json([
                'status' => 200,
                'deliveries' => $deliveries,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No available delivery found',
            ]);
        }
    }

    public function getDeliveryByCustomer(Request $request)
    {
        //lay ra deliveries của user 
        $deliveries = DB::table('Delivery')
            ->where('customerId', $request->input('customerId'))
            ->orderBy('created_at', 'desc')
            ->get();
        if (!($deliveries->isEmpty())) {
            return response()->json([
                'status' => 200,
                'deliveries' => $deliveries,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No delivery found!',
            ]);
        }
    }

    public function getDeliveryByShipper(Request $request)
    {
        //lay ra deliveries của shipper 
        $deliveries = DB::table('Delivery')
            ->where('shipperId', $request->input('shipperId'))
            ->orderBy('created_at', 'desc')
            ->get();
        if (!($deliveries->isEmpty())) {
            return response()->json([
                'status' => 200,
                'deliveries' => $deliveries,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No delivery found!',
            ]);
        }
    }

    public function getDeliveryInfo(Request $request)
    {
        $delivery = DB::table('Delivery')
            ->where('deliveryId', $request->input('deliveryId'))
            ->first();
        if ($delivery != NULL) {
            return response()->json([
                'status' => 200,
                'delivery' => $delivery,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Delivery not found',
            ]);
        }
    }

    public function deleteDelivery(Request $request)
    {
        $delivery = DB::table('Delivery')
            ->where('deliveryId', $request->input('deliveryId'))
            ->first();
        if ($delivery->status >= 3) {
            Delivery::where('deliveryId', $request->input('deliveryId'))
                ->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Can not delete',
            ]);
        }
    }

    public function cancelDelivery(Request $request)
    {
        $delivery = Delivery::where('deliveryId', $request->input('deliveryId'))
            ->first();

        if ($delivery == NULL) {
            return response()->json([
                'status' => 404,
                'message' => 'Delivery not found!',
            ]);
        }

        if ($delivery->status < 2) {
            $delivery->status = 4;
            $delivery->save();

            return response()->json([
                'status' => 200,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 405,
                'message' => 'Can not cancel!',
            ]);
        }
    }

    public function takeDelivery(Request $request)
    {
        $shipperId = $request->input('shipperId');
        $deliveryId = $request->input('deliveryId');

        $delivery = Delivery::where('deliveryId', $deliveryId)
            ->first();

        if ($delivery == NULL) {
            return response()->json([
                'status' => 404,
                'message' => 'Delivery not found',
            ]);
        } else if ($delivery->status == 0 && $delivery->shipperId == NULL) {
            $delivery->status += 1;
            $delivery->shipperId = $shipperId;
            $delivery->save();
            return response()->json([
                'status' => 200,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Error, this delivery is already be taken or canceled!',
            ]);
        }
    }

    public function checkShipper(Request $request)
    {
        $shipperId = $request->input('shipperId');

        $shipper = DB::table('User')
            ->where('userId', $shipperId)
            ->first();
        if ($shipper->role == 1) {
            return response()->json([
                'status' => 200,
                'check' => true,
                'message' => 'Successfully',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'check' => false,
                'message' => 'Successfully',
            ]);
        }
    }

    public function getShippingFee(Request $request)
    {
        $calculatorContext = new CalculatorContext();

        $calculatorContext->setCalculator(new DefaultCalculator);
        return $calculatorContext->calculateShippingFee($request);
    }
}
