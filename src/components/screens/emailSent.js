import React, { Fragment } from 'react';
const emailSent=()=> 
(
<Fragment>
<div class="context">
<h1>Check your email</h1>
<div className=" card col-xs-12 col-md-4 col-lg-4 col-sm-4 col-md-offset-4 sent-div">
<img src="images/screens/email-sent.png" alt=""/>
<p>
Check your <b>ielemson@gmail.com</b> inbox for instructions <br/> on how to confirm your account.
{/* <a href="/" onClick={()=>{console.log("clicked")}}>Go back to login screen</a> */}
</p>

</div>

</div>


<div class="area" >
<ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
</div >
</Fragment>
)


export default emailSent
