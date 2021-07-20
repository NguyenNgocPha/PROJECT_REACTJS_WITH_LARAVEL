<?php

namespace App\Http\Controllers;
use App\Models\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function index(){
        $campaign = Campaign::all();
        echo json_encode($campaign);
    }
}
