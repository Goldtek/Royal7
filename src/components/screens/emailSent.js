import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

function EmailSent() {
    // Get the router object
    const params = useParams();

    return (
        <Fragment>
            <div class="context">
                <h1>Check your email</h1>
                <div className=" card col-xs-12 col-md-4 col-lg-4 col-sm-4 col-md-offset-4 sent-div">
                    <img
                        src="images/screens/email-sent.png"
                        alt={params.email}
                    />
                    <p>
                        Check your <b>{params.email}</b> inbox for instructions{" "}
                        <br /> on how to confirm your account.
                    </p>
                </div>
            </div>

            <div class="area">
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
            </div>
        </Fragment>
    );
}

export default EmailSent;
