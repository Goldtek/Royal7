import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from "../footer/footer";
import HeaderComponent from "../header/navbar";
import { create_account, loginUser } from '../../Actions/mailAction';
import validate from '../main/validator/validatorCheck';
import classnames from 'classnames';
import isEmpty from "lodash/isEmpty";

class CreateAccount extends Component{
    constructor(props){
        super(props)
        this.state = {
            schoolName: "",
            email: "",
            phone: "",
            address: "",
            about: "",
            password: "",
            errors: ""
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
        const { schoolName, email, address, phone, about, password, errors} = this.state;
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

        if(!isEmpty(about) && isEmpty(password)){
            abt.style.display = "none"
            if(isEmpty(password)){
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
            <div>
                <HeaderComponent />
                <section className="account-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-par_1">
                                <div className="acc_1">
                                    <p>{"Provide school information"}</p>
                                    <div className={classnames('form-group', {'has-error': errors.schoolName })} id="shl_name">
                                        <label>{schoolName}</label>
                                        <input 
                                            type="text"
                                            name="schoolName" 
                                            className="form-control"
                                            value={this.state.schoolName}
                                            onChange={this.onChange}
                                            placeholder={"Enter school name"}
                                        />
                                        {errors.schoolName && <span className="form-text">{errors.schoolName}</span>}
                                    </div>
                                    <div className={classnames('form-group', {'has-error': errors.email })} id="email">
                                        <label>{email}</label>
                                        <input 
                                            type="text"
                                            name="email" 
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            placeholder={"Enter email.."}
                                        />
                                        {errors.email && <span className="form-text">{errors.email}</span>}
                                    </div>
                                    <div className={classnames('form-group', {'has-error': errors.phone })} id="phone">
                                        <label>{phone}</label>
                                        <input 
                                            type="text"
                                            name="phone" 
                                            className="form-control"
                                            value={this.state.phone}
                                            onChange={this.onChange}
                                            placeholder={"Enter phone number.."}
                                        />
                                        {errors.phone && <span className="form-text">{errors.phone}</span>}
                                    </div>
                                    <div className={classnames('form-group', {'has-error': errors.address })} id="address">
                                        <label>{address}</label>
                                        <input 
                                            type="text"
                                            name="address" 
                                            className="form-control"
                                            value={this.state.address}
                                            onChange={this.onChange}
                                            placeholder={"Enter address.."}
                                        />
                                        {errors.address && <span className="form-text">{errors.address}</span>}
                                    </div>
                                    <div className={classnames('form-group', {'has-error': errors.about })} id="abt">
                                        <label>{about}</label>
                                        <input 
                                            type="text"
                                            name="about" 
                                            className="form-control"
                                            value={this.state.about}
                                            onChange={this.onChange}
                                            placeholder={"Enter about.."}
                                        />
                                        {errors.about && <span className="form-text">{errors.about}</span>}
                                    </div>
                                    <div className={classnames('form-group', {'has-error': errors.password })} id="psd">
                                        <input 
                                            type="password"
                                            name="password" 
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            placeholder={"Enter password.."}
                                        />
                                        {errors.password && <span className="form-text">{errors.password}</span>}
                                    </div>
                                    <div>
                                        { isEmpty(password) ?
                                        <div className="form-group">
                                            <button onClick={this.handleNextBtn} className="btn btn-block">Next</button>
                                        </div>
                                        :
                                        <div className="form-group">
                                            <button onClick={this.handleCreateAccount} className="btn btn-block">Create</button>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-par_2">
                                <div className="acc_2">
                                    <div className="row">
                                        <img src="images/logo_create.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterComponent />
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
