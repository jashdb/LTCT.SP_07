<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\DeliveryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/getUserInfo', [UserController::class, 'getUserInfo']);

Route::post('/createDelivery', [DeliveryController::class, 'createDelivery']);
Route::post('/addProduct', [DeliveryController::class, 'addProduct']);
Route::post('/getAvailableDelivery', [DeliveryController::class, 'getAvailableDelivery']);
Route::post('/getDeliveryByCustomer', [DeliveryController::class, 'getDeliveryByCustomer']);
Route::post('/getDeliveryByShipper', [DeliveryController::class, 'getDeliveryByShipper']);
Route::post('/getDeliveryInfo', [DeliveryController::class, 'getDeliveryInfo']);
Route::post('/deleteDelivery', [DeliveryController::class, 'deleteDelivery']);
Route::post('/cancelDelivery', [DeliveryController::class, 'cancelDelivery']);
Route::post('/takeDelivery', [DeliveryController::class, 'takeDelivery']);
Route::post('/updateStatus', [DeliveryController::class, 'updateStatus']);
Route::post('/checkShipper', [DeliveryController::class, 'checkShipper']);