<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Jobs\SendEmail_Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Donater;
use Illuminate\Support\Facades\DB;
use App\Mail\MailNotify_ITnuoiIT;

class DonaterController extends Controller
{
    private $status=200;
    public function index()
    {
        $donate = Donater::all();
        echo json_encode($donate);
    }

    public function store(Request $request)
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

        $message = [
            'dear' => 'Dear ' .$request->name . ',',

            'request' => 'Passerelles numériques Việt Nam trân trọng cảm ơn sự hỗ trợ của bạn cho các em sinh viên thông 
                        qua chương trình #ITnuoiIT. Sau đây là thông tin về các bước hướng dẫn chuyển khoản:',

            'task1' => 'Hình thức đóng góp:',

            'mess' => 'Đăng ký chuyển khoản định kỳ hàng tháng sử dụng lệnh trích tự động từ ngân 
                        hàng của bạn qua Techcombank (bạn quyết định ngày chuyển khoản).',

            'infor' => 'Thông tin tài khoản:',
            'brand' => 'Ngân hàng Kỹ thương Việt Nam Techcombank',
            'name' => 'Tên tài khoản:                 PASSERELLES NUMERIQUES(PN)',
            'account_number' => 'Số tài khoản:                  19134608156019',
            'syntax' => 'Cú pháp chuyển khoản:   ITnuoiIT Mã hỗ trợ (Ví dụ: ITnuoiIT DNTT001) ',

            'thank' => 'Cảm ơn bạn '. $request->name . ' đã tham gia',

            'questions' => 'Nếu có bất kì thắc mắc gì vui lòng liên hệ với chúng tôi qua email này lu.ho68contavt@gmail.com',
            'signature' => 'ERO Team',
        ];
        
        //SendEmail_Email::dispatch($message, $request->email)->delay(now()->addMinute(1));
        Mail::to($donater)->send(new MailNotify_ITnuoiIT($message));

        if ($donater) {
            return response()->json(["status" => $this->status, "data" => $donater]);
        } else {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
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
        $armonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
