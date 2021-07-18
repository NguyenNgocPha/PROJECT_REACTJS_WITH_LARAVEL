<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/sharing',[HomepageController::class, 'getSharing']);
Route::get('/campaign',[HomepageController::class, 'getCampaign']);
Route::get('/leader',[HomepageController::class, 'getLeader']);
Route::get('/discover',[HomepageController::class, 'getDiscover']);
Route::get('/partner',[HomepageController::class, 'getPartner']);
Route::get('/donater',[HomepageController::class, 'getDonate']);
Route::post('/donater',[HomepageController::class, 'postDonate']);

// Route::get('token', function (Request $request) {
//     $token = $request->session()->token();
//     $token = csrf_token();
//     return Response()->json(array("token"=>$token));
// });
Route::post('/loginAdmin',[HomepageController::class, 'postLoginAdmin']);