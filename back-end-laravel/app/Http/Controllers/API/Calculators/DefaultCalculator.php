<?php

namespace App\Http\Controllers\API\Calculators;

use Illuminate\Http\Request;
use App\Http\Controllers\API\Calculators\Calculator;
use Illuminate\Support\Facades\Http;

class DefaultCalculator extends Calculator
{
    public function calculateShippingFee(Request $request)
    {
        $from_address = $request->input('from_address');
        $to_address = $request->input('to_address');
        $res = Http::get('https://61e6818ece3a2d00173591d6.mockapi.io/calculateShippingFee', [
            'from_address' => $from_address,
            'to_address' => $to_address,
        ]);

        $resObj = json_decode($res);

        if ($resObj == NULL) {
            return response()->json([
                'status' => 404,
                'message' => 'Addresses are not supported!',
            ]);
        } else return $resObj[0];
    }
}
