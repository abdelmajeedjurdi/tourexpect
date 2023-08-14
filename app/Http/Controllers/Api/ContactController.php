<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use App\Mail\CouponMail;
use App\Mail\InquiryMail;
use App\Mail\JobApplicationMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function makeInquire(Request $request)
    {
        Mail::to('info@tourexpect.com')->send(new InquiryMail($request));


        return ['message' => 'Your message has been sent. Thank you!', 'status' => 200];
    }
    public function makeContact(Request $request)
    {
        Mail::to('info@tourexpect.com')->send(new ContactMail($request));

        return response()->json('Your message has been sent. Thank you!', 200);
    }
    public function haveCoupon(Request $request)
    {
        Mail::to('info@tourexpect.com')->send(new CouponMail($request));
        return response()->json('Your message has been sent. Thank you!', 200);
    }
    public function applyToJob(Request $request)
    {
        Mail::to('careers@tourexpect.com')->send(new JobApplicationMail($request));

        return response()->json('Your message has been sent. Thank you!', 200);
    }
}
