<?php

namespace App\Http\Controllers;

use App\Models\Sharing;
use Illuminate\Http\Request;

class SharingController extends Controller
{
    public function index(){
        $sharing = Sharing::all();
        echo json_encode($sharing);
    }
}
