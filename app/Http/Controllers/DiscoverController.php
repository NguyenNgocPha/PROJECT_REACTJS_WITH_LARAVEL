<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Discover;
use Illuminate\Support\Facades\Validator;
class DiscoverController extends Controller
{
    private $status = 200;
    public function index(){
        $discover = Discover::all();
        echo json_encode($discover);
    }
    public function store(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "title" => "required",
                "day" => "required",
                "content" => "required",   
                'image' => 'mimes:jpeg,jpg,png,gif|max:5000'
            ]
        );
        if ($validation->fails()) {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

        $name = '';
        if ($request->hasfile('image')) {
            $this->validate(
                $request,
                [
                    'image' => 'mimes:jpg,jpeg,png,gif|max:5000',
                ],
                [
                    'image.mimes' => 'Chỉ chấp nhận hình thẻ với đuôi .jpg .jpeg .png .gif',
                    'image.max' => 'Hình thẻ giới hạn dung lượng không quá 2M',
                ]
            );
            $file = $request->file('image');
            $name = $file->getClientOriginalName();
            $destinationPath = public_path('assets/images/Partners');
            $file->move($destinationPath, $name);
        }
        $discover = new Discover();
        $discover->title = $request->title;
        $discover->day = $request->day;
        $discover->content = $request->content;
        $discover->image = $name;
        $discover->save();


        if ($discover) {
            return response()->json(["status" => $this->status, "data" => $discover]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }
    public function destroy($id)
    {
        $discover = Discover::find($id);
        $discover->delete();
        return response()->json([
            'message' => 'Discover deleted'
        ]);
    }
}
