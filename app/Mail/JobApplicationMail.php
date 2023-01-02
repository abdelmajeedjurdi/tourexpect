<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class JobApplicationMail extends Mailable
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
        $email = $this->from('tourexpect4@gmail.com')
            ->subject('Job Application')
            ->view('JobApplication');
        //->attach($this->details['files']['0']->getRealPath(), ['as' => $this->details['files']['0']->getClientOriginalName()]);
        foreach ($this->details['files'] as $filePath) {
            $email->attach($filePath->getRealPath(), ['as' => $filePath->getClientOriginalName()]);
        }
        return $email;
    }
}
