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

Route::resource('/sharing',SharingController::class);
Route::resource('/campaign',CampaignController::class);
Route::resource('/leader',LeaderController::class);
Route::resource('/discover',DiscoverController::class);
Route::resource('/partner',PartnerController::class);
Route::resource('/donater',DonaterController::class);
//Route::post('/donater',HomepageController::class);
Route::get('/countdonater',[DonaterController::class,'getCountDonater']);
Route::get('/line-donater',[DonaterController::class,'getLineDonaterChart']);
Route::get('/countpartner',[PartnerController::class,'getCountPartner']);
Route::get('/countleader',[LeaderController::class,'getCountLeader']);

Route::get('/countsharing',[SharingController::class,'getCountSharing']);
// Route::get('token', function (Request $request) {
//     $token = $request->session()->token();
//     $token = csrf_token();
//     return Response()->json(array("token"=>$token));
// });
Route::post('/loginAdmin',[HomepageController::class, 'postLoginAdmin']);
Route::resource('partner',PartnerController::class);
