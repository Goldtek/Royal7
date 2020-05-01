import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from "../footer/footer";
import HeaderComponent from "../header/navbar";
import { sendMailRequest } from '../../Actions/mailAction';
import classnames from 'classnames';
import validate from '../main/validator/validatorCheck';

class Mail extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            checked: false,
            errors: ""
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    checkboxHandler = e =>{
        this.setState({checked: e.target.checked})
    }
    
    isValid(){
        const { errors, isValid } = validate.emailVal(this.state);

        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }

    sendMail = () => {
        const { email } = this.state
        if(this.isValid()){
            this.props.sendMailRequest(email)
            .then(response =>{
                console.log(response)
            })
            .catch(err => {
                console.log("Not send Oops!")
            })
        }
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
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                <input 
                                                type="checkbox"
                                                className="form-check-input"
                                                checked={this.state.checked}
                                                onChange={this.checkboxHandler}
                                                /> It's okay to send me emails about slack.
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" onClick={this.sendMail}>Next <i className="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-parz">
                                <div className="part-2">
                                    <h4><span>Looking to join an existing workspace?</span>&nbsp;&nbsp;
                                    <button className="btn btn-default">Find your workspace.</button></h4>
                                    <div className="image-content">
                                        <img src="images/place3-full.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterComponent/>
            </div>
        )
    }
}

Mail.propTypes = {
    sendMailRequest: PropTypes.func.isRequired
}

export default connect(null, { sendMailRequest })(Mail);