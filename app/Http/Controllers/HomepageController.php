<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sharing;
use App\Models\Campaign;
use App\Models\Discover;
use App\Models\Donater;
use App\Models\Leader;
use App\Models\Partner;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class HomepageController extends Controller
{
    private $status=200;
    //
    // public function getSharing(){
    //     $sharing = Sharing::all();
    //     echo json_encode($sharing);
    // }

    // public function getCampaign(){
    //     $campaign = Campaign::all();
    //     echo json_encode($campaign);
    // }


    // public function getPartner(){
    //     $partner = Partner::all();
    //     echo json_encode($partner);
    // }

   

    public function postDonate(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "name"  => "required",
                "email" => "required",
                "phone"  => "required", 
            ]
        );
        if ($validation->fails()) {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

        $donater = new Donater();
        $donater->name = $request->input('name');
        $donater->email = $request->input('email');
        $donater->phone = $request->input('phone');
        $donater->save();

        if ($donater) {
            return response()->json(["status" => $this->status, "data" => $donater]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }

    public function postLoginAdmin(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(["errors" => $validator->getMessageBag(), "success" => 0]);
        }

        $user = User::where("email", $request->email)->get();
        if ($user->count() > 0) {
            if ($user[0]->password == $request->password) {
                return Response()->json(["success" => 1, 'user' => $user[0]]);
            }
        }
        return response()->json(['errors' => ['login' => "Login profile does not exist!!"]]);
    }

}
