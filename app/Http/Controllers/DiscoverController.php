<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Discover;
class DiscoverController extends Controller
{
    public function index(){
        $discover = Discover::all();
        echo json_encode($discover);
    }
}
