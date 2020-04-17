<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SchoolAdministrator extends Mailable
{
    use Queueable, SerializesModels;


    protected $email;

    protected $code;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$code)
    {
        $this->email = $email;
        $this->code = $code;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('noreply@royal7.com')
        ->subject('School Admininstratoer Email Confirmation')
        ->markdown('emails.admin.confirmation')
        ->with([
            'link' => 'https:/www.royal7.com/get-started/'.$this->email.'/'.$this->code,
            'email' => $this->email,
        ]);
    }
}
