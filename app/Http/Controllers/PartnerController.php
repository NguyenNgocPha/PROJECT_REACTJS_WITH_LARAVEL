<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;

class PartnerController extends Controller
{
    public function index(){
        $partner = Partner::all();
        echo json_encode($partner);
    }

    
    
}
