import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { connect } from "react-redux";
import axios from "axios";
// import { sendMailRequest } from "../../actions/mailAction";

const api_url = process.env.REACT_APP_BASE_URL;

const Mail = () => {
    let history = useHistory();
    return (
        <Fragment>
            <ToastContainer />
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
                        {/* <div className="brand-wrapper">
                            <img
                                src="images/logo/logo-edcollab.png"
                                alt="logo"
                                className="logo"
                            />
                        </div> */}
                        <div className="login-wrapper">
                            <div className="brand-wrapper">
                                <img
                                    src="images/logo/logo-edcollab.png"
                                    alt="logo"
                                    className="logo"
                                />
                            </div>
                            <h1 className="login-title">
                                Welcome, we are glad you are here
                            </h1>
                            <p className="login-p">
                                We will require your email to create your
                                account - please fill in your official email
                                below to get started.
                            </p>

                            <Formik
                                initialValues={{ email: "" }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = "field is required";
                                    } else if (
                                        !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/gi.test(
                                            values.email
                                        )
                                    ) {
                                        errors.email = "invalid email address";
                                    }
                                    return errors;
                                }}
                                onSubmit={(
                                    values,
                                    { setSubmitting, resetForm }
                                ) => {
                                    // setTimeout(() => {
                                    //     alert(JSON.stringify(email, null, 2));
                                    //     setSubmitting(false);
                                    // }, 400);

                                    // axios
                                    //     .post(`${api_url}/api/send/mail`, {
                                    //         values,
                                    //     })
                                    axios({
                                        method: "POST",
                                        url: `${api_url}/api/send/mail`,
                                        data: {
                                            email: values.email,
                                        },
                                    })
                                        .then((response) => {
                                            toast.success(`Message Sent!`, {
                                                position: "top-right",
                                                autoClose: 15000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });

                                            resetForm();
                                            history.push(
                                                `/sent/${values.email}`,
                                                true
                                            );
                                        })
                                        .catch((error) => {
                                            toast.error(`${error}`, {
                                                position: "top-right",
                                                autoClose: 15000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });
                                            resetForm();
                                        });
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="you@email.com"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            style={{
                                                color: "red",
                                                fontWeight: "bold",
                                                fontSize: "1.2rem",
                                            }}
                                        />

                                        <button
                                            type="submit"
                                            className="btn btn-lg login-btn center-block"
                                            disabled={isSubmitting}
                                        >
                                            Next{" "}
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div
                        className="col-sm-12 col-xs-12 col-lg-8 col-md-8 hidden-sm hidden-xs"
                        style={{ padding: 0, overflow: "hidden" }}
                    >
                        <img
                            src="images/screens/screen1.jpg"
                            alt="login_image"
                            className="login-img"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

// Mail.propTypes = {
//     sendMailRequest: PropTypes.func.isRequired,
// };

export default Mail;
