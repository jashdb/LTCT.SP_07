<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\Calculators\Calculator;
use App\Http\Controllers\API\Calculators\DefaultCalculator;

class CalculatorContext
{
    private Calculator $calculator;

    function __construct() {
        $this->calculator = new DefaultCalculator();
    }

    public function setCalculator(Calculator $calculator){
        $this->calculator = $calculator;
    }

    public function calculateShippingFee(Request $request) {
        return $this->calculator->calculateShippingFee($request);
    }
}