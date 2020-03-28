@component('mail::message')
# confirm school admin email address
<h1> Confirm your email to get started on Royal7</h1>

To get started, we need to confirm that <span style="color: blue"> {{ $email }} </span> <br />
is your  email address, so please click the button to finish creating your account.

@component('mail::button', ['url' => $link])
Confirm Email Address
@endcomponent

If you didn't request this email, there's is nothing to worry about - you can
safely ignore it.

<strong>"Confirm Email Address", button not working</strong> <br/>
<a href={{ $link }} target="blank"> {{ $link }} </a>
{{ config('app.name') }}
@endcomponent
