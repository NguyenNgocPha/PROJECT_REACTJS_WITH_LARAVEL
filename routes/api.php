<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\SharingController;
use App\Http\Controllers\LeaderController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\DiscoverController;
use App\Http\Controllers\DonaterController;
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

Route::get('/sharing',[SharingController::class, 'getSharing']);
Route::get('/campaign',[CampaignController::class, 'getCampaign']);
Route::get('/leader',[LeaderController::class, 'getLeader']);
Route::get('/discover',[DiscoverController::class, 'getDiscover']);
Route::get('/partner',[PartnerController::class, 'getPartner']);
Route::get('/donater',[DonaterController::class, 'getDonate']);
Route::post('/donater',[HomepageController::class, 'postDonate']);

// Route::get('token', function (Request $request) {
//     $token = $request->session()->token();
//     $token = csrf_token();
//     return Response()->json(array("token"=>$token));
// });
Route::post('/loginAdmin',[HomepageController::class, 'postLoginAdmin']);