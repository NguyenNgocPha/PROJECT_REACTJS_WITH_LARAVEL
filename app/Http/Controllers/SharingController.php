<?php

namespace App\Http\Controllers;

use App\Models\Sharing;
use Illuminate\Http\Request;

class SharingController extends Controller
{
    public function getSharing(){
        $sharing = Sharing::all();
        echo json_encode($sharing);
    }
}
