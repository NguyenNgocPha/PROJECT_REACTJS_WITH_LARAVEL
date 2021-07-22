<?php

namespace App\Http\Controllers;
use App\Models\Campaign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class CampaignController extends Controller
{
    private $status = 200;
    public function index(){
        $campaign = Campaign::all();
        echo json_encode($campaign);
    }
    
    public function store(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "name" => "required",
                "content" => "required",   
                
            ]
        );
        if ($validation->fails()) {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

       
        $campaign = new Campaign();
        $campaign->name = $request->name;
        $campaign->content = $request->content;
        $campaign->save();


        if ($campaign) {
            return response()->json(["status" => $this->status, "data" => $campaign]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }
    public function destroy($id)
    {
        $campaign = Campaign::find($id);
        $campaign->delete();
        return response()->json([
            'message' => 'Campaign deleted'
        ]);
    }
}
