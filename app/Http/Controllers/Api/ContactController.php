<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use App\Mail\InquiryMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function makeInquire(Request $request)
    {

        Mail::to('tourexpect4@gmail.com')->send(new InquiryMail($request));

        return response()->json('Your message has been sent. Thank you!', 200);
    }
    public function makeContact(Request $request)
    {
        // $details = $request->validated();
        Mail::to('tourexpect4@gmail.com')->send(new ContactMail($request));

        return response()->json('Your message has been sent. Thank you!', 200);
    }
}
