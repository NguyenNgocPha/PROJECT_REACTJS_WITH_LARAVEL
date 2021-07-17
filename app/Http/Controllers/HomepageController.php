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
    public function getSharing(){
        $sharing = Sharing::all();
        echo json_encode($sharing);
    }

    public function getCampaign(){
        $campaign = Campaign::all();
        echo json_encode($campaign);
    }

    public function getDiscover(){
        $discover = Discover::all();
        echo json_encode($discover);
    }

    public function getLeader(){
        $leader = Leader::all();
        echo json_encode($leader);
    }

    public function getPartner(){
        $partner = Partner::all();
        echo json_encode($partner);
    }

    public function getDonate(){
        $donate = Donater::all();
        echo json_encode($donate);
    }

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

}