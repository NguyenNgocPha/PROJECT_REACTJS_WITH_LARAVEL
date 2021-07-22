<?php

namespace App\Http\Controllers;

use App\Models\Leader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LeaderController extends Controller
{
    private $status = 200;
    public function index()
    {
        $leader = Leader::all();
        echo json_encode($leader);
    }
    public function getCountLeader()
    {
        $leaders = Leader::all()->count();
        return $leaders;
    }
    public function store(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "name" => "required",
                "job" => "required",
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
        $leader = new Leader();
        $leader->name = $request->name;
        $leader->job = $request->job;;
        $leader->image = $name;
        $leader->save();

        if ($leader) {
            return response()->json(["status" => $this->status, "data" => $leader]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }
    public function destroy($id)
    {
        $leader = Leader::find($id);
        $leader->delete();
        return response()->json([
            'message' => 'Leader deleted'
        ]);
    }
}
