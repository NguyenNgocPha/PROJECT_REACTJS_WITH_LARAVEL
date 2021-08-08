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
use App\Models\Selection;
use App\Jobs\SendEmail;
use Illuminate\Support\Facades\Validator;

class HomepageController extends Controller
{
    private $status=200;
    
    public function index(){
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


    // Selection
    public function getSelection(){
        $selection = Selection::all();
        echo json_encode($selection);
    }

    public function postSelection(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "name"  => "required",
                "age"  => "required",
                "phone"  => "required",
                "school"  => "required", 
                "address" => "required",
                "email" => "required", 
            ]
        );
        if ($validation->fails()) {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

        $selection = new Selection();
        $selection->name = $request->input('name');
        $selection->age = $request->input('age');
        $selection->phone = $request->input('phone');
        $selection->address = $request->input('address');
        $selection->school = $request->input('school');
        $selection->email = $request->input('email');
        $selection->save();

        if ($selection) {
            return response()->json(["status" => $this->status, "data" => $selection]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

        $message = [
            'type' => 'Đăng Ký Tuyển Sinh Online',
            'link' => 'https://docs.google.com/forms/d/e/1FAIpQLSeMkwVl5ox4q2HwYht64nm493k8tL69PoJYXtRikMV6JIWQiw/viewform?vc=0&c=0&w=1&flr=0',
            'thank' => 'Cảm ơn bạn '. $request->name . ' đã đăng ký',
        ];
        
        SendEmail::dispatch($message, $request->email)->delay(now()->addMinute(1));
    }

    public function postLoginAdmin(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(["errors" => $validator->getMessageBag(), "success" => 0]);
        }

        $user = User::where("email", $request->email)->get();
        if ($user->count() > 0) {
            if ($user[0]->password == $request->password) {
                return Response()->json(["success" => 1, 'user' => $user[0]]);
            }
        }
        return response()->json(['errors' => ['login' => "Login profile does not exist!!"]]);
    }


}
