import React, {Component} from 'react';
import HeaderComponent from '../navbar/navbarComponent';
import { Link } from 'react-router-dom';

class AccountSettings extends Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <section className="settings-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="set_1">
                                    <img src="images/place3.jpg"/>
                                    <p><span>SIGNED IN AS</span> <br/><span className="user_name">OKEKE EMMANUEL</span></p>
                                    <ul className="list_1">
                                        <li>Account</li>
                                        <li><Link to="#"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</Link></li>
                                        <li><Link to="#"><i className="fa fa-user"></i>&nbsp;&nbsp;Account & Profile</Link></li>
                                    </ul>

                                    <ul className="list_2">
                                        <li>Others</li>
                                        <li><Link to="#">Tour</Link></li>
                                        <li><Link to="#">Download App</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="set_2">
                                    <h4><i className="fa fa-user"></i>&nbsp;&nbsp;Account</h4>
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <Link class="nav-link active" data-toggle="tab" to="#set_nav">Settings</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" data-toggle="tab" to="#not_nav">Notifiction</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" data-toggle="tab" to="#prof_nav">Profile</Link>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane container active" id="set_nav">
                                            <div className="cont_tab">
                                                <h5>Email Address</h5>
                                                <p>You email is <span>splendidjohnpaul@gmail.com</span></p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab2">
                                                <h5>Time Zone</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor. 
                                                </p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab3">
                                                <h5>Language</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab4">
                                                <h5>Sign out all other sessions</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <button className="btn btn-default"><i className="fa fa-sign-out"></i> sign out all other session</button>
                                            </div>
                                            <div className="cont_tab5">
                                                <h5>Deactivate account</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <p>
                                                    Note: Don't deactivate your account if your just want to 
                                                    <span><Link to="#"> change your email address</Link></span>
                                                </p>
                                                <button className="btn btn-default">Deactivate your account</button>
                                            </div>
                                        </div>
                                        <div class="tab-pane container fade" id="not_nav">
                                           <div className="cont_tab">
                                                <h5>Email Address</h5>
                                                <p>You email is <span>splendidjohnpaul@gmail.com</span></p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab2">
                                                <h5>Time Zone</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor. 
                                                </p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab3">
                                                <h5>Language</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab4">
                                                <h5>Sign out all other sessions</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <button className="btn btn-default"><i className="fa fa-sign-out"></i> sign out all other session</button>
                                            </div>
                                            <div className="cont_tab5">
                                                <h5>Deactivate account</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <p>
                                                    Note: Don't deactivate your account if your just want to 
                                                    <span><Link to="#"> change your email address</Link></span>
                                                </p>
                                                <button className="btn btn-default">Deactivate your account</button>
                                            </div>
                                        </div>
                                        <div class="tab-pane container fade" id="prof_nav">
                                        <div className="cont_tab">
                                                <h5>Email Address</h5>
                                                <p>You email is <span>splendidjohnpaul@gmail.com</span></p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab2">
                                                <h5>Time Zone</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor. 
                                                </p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab3">
                                                <h5>Language</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <button className="btn btn-default">Expand</button>
                                            </div>
                                            <div className="cont_tab4">
                                                <h5>Sign out all other sessions</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <button className="btn btn-default"><i className="fa fa-sign-out"></i> sign out all other session</button>
                                            </div>
                                            <div className="cont_tab5">
                                                <h5>Deactivate account</h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Nullam nec varius libero, eget hendrerit diam. 
                                                    Nullam vitae mi magna. Sed et diam et felis venenatis maximus a sed tortor.
                                                </p>
                                                <p>
                                                    Note: Don't deactivate your account if your just want to 
                                                    <span><Link to="#"> change your email address</Link></span>
                                                </p>
                                                <button className="btn btn-default">Deactivate your account</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AccountSettings;