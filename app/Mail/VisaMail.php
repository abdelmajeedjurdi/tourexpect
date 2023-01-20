<?php

namespace App\Mail;

use Illuminate\Support\Facades\File;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class VisaMail extends Mailable
{
    use Queueable, SerializesModels;

    public $details;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->details = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        Log::info($this->details);
        $email = $this->from('tourexpect4@gmail.com', 'tourexpect.com')->subject('Visa Application')->view('VisaApplication');
        if ($this->details['passport_doc'] != 'undefined') {
            $passport_extension = $this->details['passport_doc']->getClientOriginalExtension();
            $email->attach($this->details['passport_doc']->getRealPath(), ['as' => 'Passport.' . $passport_extension]);
        }
        if ($this->details['national_id'] != 'undefined') {
            $id_extension = $this->details['national_id']->getClientOriginalExtension();
            $email->attach($this->details['national_id']->getRealPath(), ['as' => 'ID.' . $id_extension]);
        }
        if ($this->details['client_photo'] != 'undefined') {
            $photo_extension = $this->details['client_photo']->getClientOriginalExtension();
            $email->attach($this->details['client_photo']->getRealPath(), ['as' => 'Photo.' . $photo_extension]);
        }

        return $email;
    }
}
