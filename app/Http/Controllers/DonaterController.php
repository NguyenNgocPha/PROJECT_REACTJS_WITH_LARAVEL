<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donater;
class DonaterController extends Controller
{
     public function getDonate(){
        $donate = Donater::all();
        echo json_encode($donate);
    }
}
