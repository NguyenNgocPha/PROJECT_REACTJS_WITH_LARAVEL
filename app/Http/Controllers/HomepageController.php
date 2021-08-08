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

        $message = [
            'dear' => 'Dear ' .$request->name . ',',
            'request' => 'Vui lòng điền vào link bên dưới để đăng ký thông tin của bạn',
            'link' => 'https://docs.google.com/forms/d/e/1FAIpQLSeMkwVl5ox4q2HwYht64nm493k8tL69PoJYXtRikMV6JIWQiw/viewform?vc=0&c=0&w=1&flr=0',
            'mess' => 'PNV sẽ liên hẹ cho bạn trong vài ngày tới',
            'thank' => 'Cảm ơn bạn '. $request->name . ' đã đăng ký',
            'questions' => 'Nếu có bất kì thắc mắc gì vui lòng liên hệ với chúng tôi qua email này lu.ho68contavt@gmail.com',
            'signature' => 'ERO Team',
        ];
        
        SendEmail::dispatch($message, $request->email)->delay(now()->addMinute(1));

        if ($selection) {
            return response()->json(["status" => $this->status, "data" => $selection]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

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
