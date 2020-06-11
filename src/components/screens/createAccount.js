import React, { Fragment, Component } from "react";
// import PropTypes from "prop-types";;
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { connect } from "react-redux";
import "./screens.css";
import axios from "axios";
import serializeForm from "form-serialize";
const api_url = process.env.REACT_APP_BASE_URL;

class CreateAccount extends Component {
    handleRegister = (e) => {
        e.preventDefault();
        const userObj = serializeForm(e.target, { hash: true });
        console.log(userObj);

        axios.post(`${api_url}/api/school/admin`,{userObj}).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    };

    render() {
        return (
            <Fragment>
                {/* <ToastContainer /> */}
                <div
                    className="container-fluid"
                    style={{
                        overflow: "hidden",
                        width: "100%",
                        padding: 0,
                    }}
                >
                    <div className="row">
                        <div className="col-sm-12 col-xs-12 col-lg-4 col-md-4">
                            <div>
                                <div className="form-wizard">
                                    <form onSubmit={this.handleRegister}>
                                        <div className="form-wizard-header">
                                            <p>
                                                Fill all form field to go next
                                                step
                                            </p>
                                            <ul className="list-unstyled form-wizard-steps clearfix">
                                                <li className="active">
                                                    <span>1</span>
                                                </li>
                                                <li>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <span>3</span>
                                                </li>
                                                <li>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <span>5</span>
                                                </li>
                                                <li>
                                                    <span>6</span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa fa-user fa-sm"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <fieldset className="wizard-fieldset show">
                                            <h5>School Name</h5>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="schoolName"
                                                    className="form-control wizard-required"
                                                    placeholder="enter school name"
                                                />
                                                {/* <label htmlFor="fname" className="wizard-form-text-label">School Name</label> */}
                                                <div className="wizard-form-error"></div>
                                            </div>
                                            <div className="form-group clearfix">
                                                <button
                                                    className="form-wizard-next-btn float-right"
                                                    type="button"
                                                >
                                                    Next &nbsp;
                                                    <i
                                                        className="fa fa-arrow-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                        <fieldset className="wizard-fieldset">
                                            <h5>Email</h5>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control wizard-required"
                                                    id="email"
                                                    name="email"
                                                    readOnly
                                                    value="ielemson@gmail.com"
                                                />
                                                {/* <label htmlFor="email" className="wizard-form-text-label">Email*</label> */}
                                                <div className="wizard-form-error"></div>
                                            </div>

                                            <div className="form-group clearfix">
                                            
                                                                           <button
                                                    className="form-wizard-next-btn float-right"
                                                    type="button"
                                                >
                                                    Next &nbsp;
                                                    <i
                                                        className="fa fa-arrow-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                        <fieldset className="wizard-fieldset">
                                            <h5>Phone Number</h5>
                                            <div className="form-group">
                                                <input
                                                    className="form-control wizard-required"
                                                    type="text"
                                                    name="phone"
                                                    placeholder="enter valid phone number"
                                                />
                                                {/* <label htmlFor="bname" className="wizard-form-text-label">phone number*</label> */}
                                                <div className="wizard-form-error"></div>
                                            </div>

                                            <div className="form-group clearfix">
                                              
                                                &nbsp;&nbsp;&nbsp;
                                                <button
                                                    className="form-wizard-next-btn float-right"
                                                    type="button"
                                                >
                                                    Next &nbsp;
                                                    <i
                                                        className="fa fa-arrow-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                        <fieldset className="wizard-fieldset">
                                            <h5>School Address</h5>
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control wizard-required"
                                                    name="address"
                                                    placeholder="enter school address"
                                                    rows="2"
                                                ></textarea>
                                                {/* <label htmlFor="bname" className="wizard-form-text-label">School Address</label> */}
                                                <div className="wizard-form-error"></div>
                                            </div>

                                            <div className="form-group clearfix">
                                               
                                                &nbsp;&nbsp;&nbsp;
                                                <button
                                                    className="form-wizard-next-btn float-right"
                                                    type="button"
                                                >
                                                    Next &nbsp;
                                                    <i
                                                        className="fa fa-arrow-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                        <fieldset className="wizard-fieldset">
                                            <h5>About My School</h5>
                                            <div className="form-group">
                                                <textarea
                                                    type="text"
                                                    name="about"
                                                    className="form-control"
                                                    placeholder="tell us about your school"
                                                    rows="2"
                                                ></textarea>
                                                {/* <label htmlFor="bname" className="wizard-form-text-label">About My Shool</label> */}
                                                <div className="wizard-form-error"></div>
                                            </div>

                                            <div className="form-group clearfix">
                                               
                                                &nbsp;&nbsp;&nbsp;
                                                <button
                                                    className="form-wizard-next-btn float-right"
                                                    type="button"
                                                >
                                                    Next &nbsp;
                                                    <i
                                                        className="fa fa-arrow-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                        <fieldset className="wizard-fieldset">
                                            <h5>Create Password</h5>
                                            <div className="form-group">
                                                <input
                                                    className="form-control wizard-required"
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    placeholder="enter password"
                                                />
                                                <span
                                                    id="pwrd-status"
                                                    className="fa fa-fw fa-eye fa-md field-icon toggle-pwrd"
                                                ></span>
                                                {/* <label htmlFor="bname" className="wizard-form-text-label">Password</label> */}
                                                <div className="wizard-form-error"></div>
                                            </div>


                                            <div className="form-group clearfix">
                                                {/* <button
                                                    className="form-wizard-previous-btn float-left"
                                                    type="button"
                                                >
                                                    {" "}
                                                    <i
                                                        className="fa fa-arrow-left"
                                                        aria-hidden="true"
                                                    >
                                                        {" "}
                                                        &nbsp;
                                                    </i>
                                                    Previous
                                                </button> */}
                                                &nbsp;&nbsp;&nbsp;
                                                <button
                                                    className="form-wizard-next-btn float-right"
                                                    type="button"
                                                >
                                                    Next &nbsp;
                                                    <i
                                                        className="fa fa-arrow-right"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                        <fieldset className="wizard-fieldset ">
                                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 ">
                                                <button
                                                    className="form-wizard-next-btn btn-block"
                                                    type="submit"
                                                >
                                                    Submit &nbsp;
                                                    <i
                                                        className="fa fa-paper-plane"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-sm-12 col-xs-12 col-lg-8 col-md-8 hidden-sm hidden-xs"
                            style={{ padding: 0, overflow: "hidden" }}
                        >
                            <img
                                src="images/screens/laptop-book.png"
                                alt="login_image"
                                className="login-img"
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// Mail.propTypes = {
//     sendMailRequest: PropTypes.func.isRequired,
// };

export default CreateAccount;
