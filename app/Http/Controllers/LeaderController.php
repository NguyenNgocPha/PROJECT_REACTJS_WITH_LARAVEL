<?php

namespace App\Http\Controllers;
use App\Models\Leader;
use Illuminate\Http\Request;

class LeaderController extends Controller
{
    public function index(){
        $leader = Leader::all();
        echo json_encode($leader);
    }
}
