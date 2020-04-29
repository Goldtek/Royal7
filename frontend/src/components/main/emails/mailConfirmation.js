import React, { Component } from 'react';
import Footer from '../../include/footer';
import NextFooter from '../../include/next_footer';
import PropTypes from 'prop-types';

class MailConfirmation extends Component{
    render(){
        return(
            <div>
                <section className="confirm_main_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h4>Check yoeur email!</h4>
                                    <p>
                                        We've send 6-digits confirmation code to 
                                       <span> splendidjohnpaul@gmail.com.</span> It will expire shortly, so enter it

                                    </p>
                                    <div className="fields">
                                        <input type="text" className="txt_nme1"/>
                                        <input type="text" className="txt_nme2"/>
                                        <input type="text" className="txt_nme3"/>
                                        <span>&ndash;</span>
                                        <input type="text" className="txt_nme4"/>
                                        <input type="text" className="txt_nme5"/>
                                        <input type="text" className="txt_nme6"/>
                                    </div>
                                    <p>
                                        Keeping this window open while checking for your code.
                                        Remember to try your spam folder!.
                                    </p>

                                    <img src="images/learning-logo.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <NextFooter/>
                <Footer/>
            </div>
        );
    }
}


export default MailConfirmation;