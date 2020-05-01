<<<<<<< HEAD
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import FooterComponent from "../footer/footer";
// import HeaderComponent from "../header/navbar";
import { sendMailRequest } from "../../Actions/mailAction";
import classnames from "classnames";
import validateInput from "../main/validator/emailValidator";
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from "../footer/footer";
import HeaderComponent from "../header/navbar";
import { sendMailRequest } from '../../Actions/mailAction';
import classnames from 'classnames';
import validate from '../main/validator/validatorCheck';
>>>>>>> 84a2dcf1fc2d7bffc7d66a260fc6b3bdae92c0e9

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            checked: false,
            errors: "",
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

<<<<<<< HEAD
    checkboxHandler = (e) => {
        this.setState({ checked: e.target.checked });
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);
=======
    checkboxHandler = e =>{
        this.setState({checked: e.target.checked})
    }
    
    isValid(){
        const { errors, isValid } = validate.emailVal(this.state);
>>>>>>> 84a2dcf1fc2d7bffc7d66a260fc6b3bdae92c0e9

        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    sendMail = () => {
        const { email } = this.state;
        if (this.isValid()) {
            this.props
                .sendMailRequest(email)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log("Not send Oops!");
                });
        }
<<<<<<< HEAD
    };

    render() {
        const { errors } = this.state;
        return (
            <div
                className="container-fluid main-wrapper"
                style={{ overflow: "hidden", width: "100%", padding: 0 }}
            >
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-lg-4 col-md-4 login-section-wrapper">
                        <div className="brand-wrapper">
                            <img
                                src="images/logo/logo.png"
                                alt="logo"
                                className="logo"
                            />
                        </div>
                        <div className="login-wrapper">
                            <h1 className="login-title">
                                Welcome, we are glad you are here
                            </h1>
                            <p className="login-p">
                                We will require your email to create your account - please fill in your official email below to get started.
                            </p>
                            <form >
                                <div className={classnames('form-group', {'has-error': errors.email })}>
                                    <label for="email">
                                        your email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        className="form-control"
                                        placeholder={'you@official-email.com'}
                                    />
                                    {errors.email && <span className="form-text">{errors.email}</span>}
                                </div>

                                {/* <div className='form-group'>
=======
    }
    
    render(){
        const { email, checked, errors } = this.state;
        return(
            <div>
                <HeaderComponent/>
                <section className="mail-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-pars">
                                <div className="part-1">
                                    <div className="img-logo">
                                      
                                    </div>
                                    <div className="part-1-center">
                                        <p>First, enter your email.</p>
                                        <p>Just one more mail- a quik confirmation<br/> - before you say good bye to overstuffed<br/> inboxes for good</p>
                                        <div className={classnames('form-group', {'has-error': errors.email })}>
                                            <label>Your email address</label>
                                            <input 
                                            type="text"
                                            name="email" 
                                            value={this.state.email}
                                            onChange={this.onChange}
                                            className="form-control"
                                            placeholder={'Enter your email'}/>
                                            {errors.email && <span className="form-text">{errors.email}</span>}
                                        </div>
                                        <div className='form-group'>
>>>>>>> 84a2dcf1fc2d7bffc7d66a260fc6b3bdae92c0e9
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                <input 
                                                type="checkbox"
                                                className="form-check-input"
                                                checked={this.state.checked}
                                                onChange={this.checkboxHandler}
                                                /> It's okay to send me update emails.
                                                </label>
                                            </div>
                                        </div> */}
                                <button className="btn btn-md login-btn center-block" onClick={this.sendMail} type="button">
                                    Next <i className="fa fa-arrow-right"></i>
                                </button>
                                {/* <input name="login" id="login" className="btn btn-block login-btn" type="button" value="Login"/> */}
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xs-6 col-lg-8 col-md-8 half-div">
                        <img
                            src="images/assets/login.jpg"
                            alt="login_image"
                            className="login-img"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Mail.propTypes = {
    sendMailRequest: PropTypes.func.isRequired,
};

export default connect(null, { sendMailRequest })(Mail);
