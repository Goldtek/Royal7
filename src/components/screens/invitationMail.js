import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import history from "../history";
// import FooterComponent from "../footer/footer";
// import HeaderComponent from "../header/navbar";
// import { sendMailRequest } from "../../actions/mailAction";
import classnames from "classnames";
import validateInput from "../screens/validator/emailValidator";

const api_url = process.env.REACT_APP_BASEURL;
class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            checked: false,
            errors: "",
        };
    }

    sendMail = (email) => {
        try {
            return axios.post(`${api_url}/api/send/mail`, { email });
        } catch (error) {
            console.log(`error sending invitation ${error}`);
        }
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    checkboxHandler = (e) => {
        this.setState({ checked: e.target.checked });
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

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
                    history.push("/sent");
                })
                .catch((err) => {
                    history.push("/sent");
                });
        }
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container-fluid" style={{
                overflow: "hidden",
                width: "100%",
                padding: 0,
               
            }}>
                <div className="row" >
                    <div className="col-sm-12 col-xs-12 col-lg-4 col-md-4" >
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
                                We will require your email to create your
                                account - please fill in your official email
                                below to get started.
                            </p>
                            <form>
                                <div
                                    className={classnames("form-group", {
                                        "has-error": errors.email,
                                    })}
                                >
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
                                        placeholder={"you@official-email.com"}
                                    />
                                    {errors.email && (
                                        <span className="form-text">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                                <button
                                    className="btn btn-lg login-btn center-block"
                                    onClick={this.sendMail}
                                    type="button"
                                >
                                    Next <i className="fa fa-arrow-right"></i>
                                </button>
                           
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-lg-8 col-md-8" style={{padding:0,overflow:"hidden"}}>
                        <img
                            src="images/screens/education.png"
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

export default Mail;
