import React, {Fragment, useState,useEffect } from 'react';
import {Redirect} from "react-router-dom"
// import history from "../history";
function EmailSent(){
// Declare a new state variable, which we'll call "count"
const [counter, setCounter] = useState(10);

// Suggested by Laurent
useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

return(
<Fragment>
<div class="context">
<h1>Email Confirmed Successfully</h1>
<div className=" card col-xs-12 col-md-4 col-lg-4 col-sm-4 col-md-offset-4 sent-div">
<img src="images/screens/email-confirmation.png" alt=""/>
<p>
Congratulations <b>ielemson@gmail.com</b> has been confirmed<br/> you will be redirected in {" "}
     {/* check if counter is true/false */}
     {counter ? counter :  <Redirect to="/" />}



{/* <a href="/" onClick={()=>{console.log("clicked")}}>Go back to login screen</a> */}

</p>
{/* 6170751170 */}
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
}
export default EmailSent
