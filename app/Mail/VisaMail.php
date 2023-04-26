<?php

namespace App\Mail;

use Illuminate\Support\Facades\File;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Filesystem\Filesystem;
use Swift_IoException;

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
        $email = $this->from('tourexpect4@gmail.com', 'tourexpect.com')
            ->subject('Visa Application')
            ->view('VisaApplication');
        /*
            for ($i = 0; $i < $this->details['count']; $i++) {

                if ($this->details['passport_doc_' . $i] != 'null') {
                    $passport_extension = $this->details['passport_doc_' . $i]->getClientOriginalExtension();
                    $email->attach($this->details['passport_doc_' . $i]->getRealPath(), ['as' => $this->details['name_' . $i] . '_passport.' . $passport_extension]);
                }
                if ($this->details['national_id_' . $i] != 'null') {
                    $id_extension = $this->details['national_id_' . $i]->getClientOriginalExtension();
                    $email->attach($this->details['national_id_' . $i]->getRealPath(), ['as' => $this->details['name_' . $i] . '_ID.'  . $id_extension]);
                }
                if ($this->details['client_photo_' . $i] != 'null') {
                    $photo_extension = $this->details['client_photo_' . $i]->getClientOriginalExtension();
                    $email->attach($this->details['client_photo_' . $i]->getRealPath(), ['as' => $this->details['name_' . $i] . '_photo.'  . $photo_extension]);
                }
            }
        */

        for ($i = 0; $i < $this->details['count']; $i++) {
            $document = public_path('images/emails/' . $this->details['passport_doc_' . $i]);
            if (file_exists($document)) {
                $email->attach($document, ['as' => $this->details['name_' . $i] . 'passport ' . $this->details['passport_doc_' . $i]]);
            }


            $document = public_path('images/emails/' . $this->details['client_photo_' . $i]);
            if (file_exists($document)) {
                $email->attach($document, ['as' => $this->details['name_' . $i] . 'photo ' . $this->details['client_photo_' . $i]]);
            }


            $document = public_path('images/emails/' . $this->details['national_id_' . $i]);
            if (file_exists($document)) {
                $email->attach($document, ['as' => $this->details['name_' . $i] . 'National ID ' . $this->details['national_id_' . $i]]);
            }
        }


        // for ($i = 0; $i < $this->details['count']; $i++) {

        //     $document = public_path('images/emails/' . $this->details['national_id_' . $i]);
        //     File::delete($document);
        // }
        return $email;
    }
}
