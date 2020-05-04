import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
// import { create_account, loginUser } from '../../actions/mailAction';
import validate from '../screens/validator/validatorCheck';
import classnames from 'classnames';
import isEmpty from "lodash/isEmpty";
import "./screens.css";


const api_url = process.env.REACT_APP_API_URL;

class CreateAccount extends Component{
    constructor(props){
        super(props)
        this.state = {
            schoolName: "",
            email: "you@example.com",
            phone: "",
            address: "",
            about: "",
            pwrd: "",
            cpwrd: "",
            errors: ""
        }
    }

   create_account = data => {
        try {
            return axios.post(`${api_url}/api/school/admin`, {
                schoolName: data.schoolName,
                phone: data.phone,
                address: data.address,
                email: data.email,
                about: data.about,
                password: data.password
            });
        } catch (error) {
            console.log(`error creating school account ${error}`);
        }
    }
    loginUser = (data) => {
        try {
            return axios.post(`${api_url}/api/user/login`, {email:data.email, password:data.password});
        } catch (error) {
            console.log(`error logging in user ${error}`);
        }
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    isValid(){
        const { errors, isValid } = validate.accountVal(this.state);

        if(!isValid){
            this.setState({errors});
        }
        return isValid;

    }

    handleNextBtn = () => {
        const { schoolName, email, address, phone, about, pwrd, cpwrd , errors} = this.state;
        var shl_name, email_1, address_1, phoneNum, abt, psd;

        shl_name = document.getElementById("shl_name");
        email_1 = document.getElementById("email");
        phoneNum = document.getElementById("phone");
        address_1 = document.getElementById("address");
        abt = document.getElementById("abt");
        psd = document.getElementById("psd");
    
        if(!isEmpty(schoolName) && isEmpty(email)){
            shl_name.style.display = "none"
            if(isEmpty(email)){
                email_1.style.display = "block"
            }
        }

        if(!isEmpty(email) && isEmpty(phone)){
            email_1.style.display = "none"
            if(isEmpty(phone)){
                phoneNum.style.display = "block"
            }
        }

        if(!isEmpty(phone) && isEmpty(address)){
            phoneNum.style.display = "none"
            if(isEmpty(address)){
                address_1.style.display = "block"
            }
        }

        if(!isEmpty(address) && isEmpty(about)){
            address_1.style.display = "none"
            if(isEmpty(about)){
                abt.style.display = "block"
            }
        }

        if(!isEmpty(about) && isEmpty(pwrd)){
            abt.style.display = "none"
            if(isEmpty(pwrd)){
                psd.style.display = "block"
            }
        }   
    }

    handleCreateAccount = () =>{
        const { schoolName, email, address, phone, about, password} = this.state
        let data = {
            schoolName,
            email,
            address, 
            phone,
            about,
            password
        }
        this.props.create_account(data)
        .then(response =>{
            if(response){
                this.props.loginUser(response.data)
                .then(res =>{
                    this.context.router.push("/dashboard")
                })
                .catch(err =>{
                    console.log("can't login user in, try again later");
                })
            }
        })
        .then(err =>{
            console.log("Error occured");
        })
    }

    render(){
        const { schoolName, email, address, phone, about, password, errors} = this.state;
        return(
        <div className="container-fluid" style={{padding:0, overflow:"hidden"}}>
                <section className="wizard-section">
            <div className="row no-gutters">
                <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12">
                    <div className="wizard-content-left d-flex justify-content-center align-items-center center-block ">
                        <h1>Complete Your Account Set-up</h1>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-xs-12 col-sm-12">
                    <div className="form-wizard">
                        <form>
                            <div className="form-wizard-header">
                                <p>Fill all form field to go next step</p>
                                <ul className="list-unstyled form-wizard-steps clearfix">
                                    <li className="active"><span>1</span></li>
                                    <li><span>2</span></li>
                                    <li><span>3</span></li>
                                    <li><span>4</span></li>
                                    <li><span>5</span></li>
                                    <li><span>6</span></li>
                                    <li><span><i className="fa fa-user fa-sm"></i></span></li>
                                </ul>
                            </div>
                            <fieldset className="wizard-fieldset show">
                                <h5>School Name</h5>
                                <div className="form-group">
                                    <input              
                                    type="text"
                                    name="schoolName" 
                                    className="form-control wizard-required"
                                    value={this.state.schoolName}
                                    onChange={this.onChange}
                                    placeholder="enter school name"
                                    />
                                    {/* <label htmlFor="fname" className="wizard-form-text-label">School Name</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>    
                            <div className="form-group clearfix">
                                    <button className="form-wizard-next-btn float-right" type="button">Next &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                                <h5>Email</h5>
                                <div className="form-group">
                                    <input type="email" 
                                    className="form-control wizard-required" id="email"   
                                       name="email" 
                                       value={this.state.email}
                                       onChange={this.onChange}
                                       placeholder="enter valid email"
                                       disabled="disabled"
                                    />
                                    {/* <label htmlFor="email" className="wizard-form-text-label">Email*</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>
                                
                                <div className="form-group clearfix">
                                    <button className="form-wizard-previous-btn float-left" type="button"> <i className="fa fa-arrow-left" aria-hidden="true"> &nbsp;</i>Previous</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="form-wizard-next-btn float-right" type="button">Next  &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                                <h5>Phone Number</h5>
                                <div className="form-group">
                                    <input 
                                     className="form-control wizard-required"
                                    type="text"
                                    name="phone" 
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                   placeholder="enter valid phone number"
                                    />
                                    {/* <label htmlFor="bname" className="wizard-form-text-label">phone number*</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>
                               
                            
                                <div className="form-group clearfix">
                                    <button className="form-wizard-previous-btn float-left" type="button"> <i className="fa fa-arrow-left" aria-hidden="true"> &nbsp;</i>Previous</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="form-wizard-next-btn float-right" type="button">Next  &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                                <h5>School Address</h5>
                                <div className="form-group">
                                   <textarea
                                     className="form-control wizard-required"
                                     name="address" 
                                     value={this.state.address}
                                     onChange={this.onChange}
                                     placeholder="enter school address"
                                     rows="2"
                                   ></textarea>
                                    {/* <label htmlFor="bname" className="wizard-form-text-label">School Address</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>
                               
                            
                                <div className="form-group clearfix">
                                    <button className="form-wizard-previous-btn float-left" type="button"> <i className="fa fa-arrow-left" aria-hidden="true"> &nbsp;</i>Previous</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="form-wizard-next-btn float-right" type="button">Next  &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                                <h5>About My School</h5>
                                <div className="form-group">
                                   <textarea
                                 type="text"
                                 name="about" 
                                 className="form-control"
                                 value={this.state.about}
                                 onChange={this.onChange}
                                 placeholder="tell us about your school"
                                 rows="2"
                                   ></textarea>
                                    {/* <label htmlFor="bname" className="wizard-form-text-label">About My Shool</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>
                               
                            
                                <div className="form-group clearfix">
                                    <button className="form-wizard-previous-btn float-left" type="button"> <i className="fa fa-arrow-left" aria-hidden="true"> &nbsp;</i>Previous</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="form-wizard-next-btn float-right" type="button">Next  &nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                            <h5>Create Password</h5>
                            <div className="form-group">
                                    <input 
                                     className="form-control wizard-required"
                                     id="pwrd"
                                    type="password"
                                    name="pwrd" 
                                    value={this.state.pwrd}
                                    onChange={this.onChange}
                                   placeholder="enter password"
                                    />
                                    <span id="pwrd-status"  className="fa fa-fw fa-eye fa-md field-icon toggle-pwrd"></span>
                                    {/* <label htmlFor="bname" className="wizard-form-text-label">Password</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>

                                <div className="form-group">
                                    <input 
                                     className="form-control wizard-required"
                                     id="cpwrd"
                                    type="password"
                                    name="cpwrd" 
                                    value={this.state.cpwrd}
                                    onChange={this.onChange}
                                   placeholder="confirm password"
                                    />
                                    <span id="cpwrd-status"  className="fa fa-fw fa-eye fa-md field-icon toggle-cpwrd"></span>

                                    {/* <label htmlFor="bname" className="wizard-form-text-label">Confirm Password</label> */}
                                    <div className="wizard-form-error"></div>
                                </div>
                             
                                <div className="form-group clearfix">
                                    <button className="form-wizard-previous-btn float-left" type="button"> <i className="fa fa-arrow-left" aria-hidden="true"> &nbsp;</i>Previous</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button className="form-wizard-next-btn float-right" type="button">Submit  &nbsp;<i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                                </div>
                            </fieldset>	
                            <fieldset className="wizard-fieldset">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <div className="image-kite center-block ">
                    <img src="/images/screens/download.png" alt="mine"></img>
                    <h1>Account Setup Complete Please Proceed to <a href="/">Login page</a> </h1> 
                    </div>
                </div>
                              
                            </fieldset>	
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
        );
    }
}

CreateAccount.propTypes = {
    create_account: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
}

CreateAccount.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, {create_account, loginUser})(CreateAccount);
