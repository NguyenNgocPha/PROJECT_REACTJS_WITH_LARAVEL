<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;
use Illuminate\Support\Facades\Validator;



class PartnerController extends Controller
{
<<<<<<< HEAD
    private $status = 200;
=======
    
    private $status=200;
>>>>>>> 4f32d5dcee1d8682df43005c6f323f7e4557ec49
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $partner = Partner::all();
        echo json_encode($partner);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make(
            $request->all(),
            [
                "namecompany" => "required",
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
        $partner = new Partner();
        $partner->namecompany = $request->input('namecompany');
        $partner->image = $name;
        $partner->save();

        if ($partner) {
            return response()->json(["status" => $this->status, "data" => $partner]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $partner = Partner::find($id);
        if (!is_null($partner)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $partner]);
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no partner found"]); //
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $name = '';
        if ($request->hasfile('image')) {
            $this->validate(
                $request,
                [
                    'image' => 'mimes:jpg,jpeg,png,gif|max:2048',
                ],
                [
                    'image.mimes' => 'Chỉ chấp nhận hình thẻ với đuôi .jpg .jpeg .png .gif',
                    'image.max' => 'Hình thẻ giới hạn dung lượng không quá 2M',
                ]
            );
            $file = $request->file('image');
            $name =  $file->getClientOriginalName();
            $destinationPath = public_path('assets/images/Partners');
            $file->move($destinationPath, $name);
        }
        $partner = Partner::find($id);
        $partner->namecompany = $request->input('namecompany');
        if ($name == '') {
            $name = $partner->image;
        }
        $partner->image = $name;
        $partner->save();

        return response()->json([
            'message' => 'Partner updated!',
            'data' => $partner
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $partner = Partner::find($id);
        $partner->delete();
        return response()->json([
            'message' => 'Partner deleted'
        ]);
    }
<<<<<<< HEAD
=======
  
>>>>>>> 4f32d5dcee1d8682df43005c6f323f7e4557ec49
}
