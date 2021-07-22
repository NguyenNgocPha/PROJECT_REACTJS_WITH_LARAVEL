<?php

namespace App\Http\Controllers;

use App\Models\Sharing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SharingController extends Controller
{
    private $status = 200;
    public function index()
    {
        $sharing = Sharing::all();
        echo json_encode($sharing);
    }
    public function getCountSharing()
    {
        $sharings = Sharing::all()->count();
        return $sharings;
    }
    public function store(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "name" => "required",
                "job" => "required",
                "share" => "required",
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
        $sharing = new Sharing();
        $sharing->name = $request->name;
        $sharing->job = $request->job;
        $sharing->share = $request->share;
        $sharing->image = $name;
        $sharing->save();

        if ($sharing) {
            return response()->json(["status" => $this->status, "data" => $sharing]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }
    public function destroy($id)
    {
        $sharing = Sharing::find($id);
        $sharing->delete();
        return response()->json([
            'message' => 'Sharing deleted'
        ]);
    }
}
