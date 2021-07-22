<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donater;
use Illuminate\Support\Facades\DB;
class DonaterController extends Controller
{
     public function index(){
        $donate = Donater::all();
        echo json_encode($donate);
    }
     
public function getCountDonater()
{
    $donates = Donater::all()->count();
    return $donates;
}

public function getLineDonaterChart()
{
    // dd('ok');
    $donate = Donater::select(DB::raw("DATE_FORMAT(donaters.created_at, '%b') as month, COUNT(id) as sum"))
        ->groupBy('month')->get();
    $donatemonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $armonth=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    foreach ($donate as $donate) {
         for ($i = 0; $i <= 11; $i++) {
            if ($armonth[$i] == $donate["month"]) {
                $donatemonth[$i] = $donate["sum"];
            }
        }
    }
    // dd($donatemonth);
    return $donatemonth;
}
}
