import React, { Component, Fragment } from "react";
import axios from "axios";
import Counter from "./counter/counter";
import Loader from "./loader/loader";
const api_url = process.env.REACT_APP_BASE_URL;
class emailConfirmation extends Component {
    state = {
        isLoading: true,
        errorMessage: "",
        success: "",
    };
    componentDidMount() {
        const {
            match: { params },
        } = this.props;
        axios
            .post(`${api_url}/admin/confirm`, {
                code: params.code,
                email: params.code,
            })
            .then((response) => {
                console.log(response);
                this.setState({ success: response, isLoading: false });
            })
            .catch((error) => {
                // this.setState({
                //     success: " ",
                //     errorMessage: error.response.data.message,
                //     isLoading: false,
                // });
                // this.setState({ loading: false });
                console.log(error);
            });
    }
    render() {
        return (
            <Fragment>
                {this.state.isLoading ? (
                    <div className="context">
                        <h1>Email confirmation in progress...</h1>
                        <div className=" card col-xs-12 col-md-12 col-lg-4 col-sm-12 col-md-offset-4 sent-div">
                            <Loader loading={this.state.loading} />
                        </div>
                    </div>
                ) : this.state.errorMessage ? (
                    <div className="context">
                        <h1>Email Verification Error</h1>
                        <div className=" card col-xs-12 col-md-12 col-lg-4 col-sm-12 col-md-offset-4 sent-div">
                            <img
                                src="images/screens/error.png"
                                alt="email confirmation error"
                            />

                            <p>{this.state.errorMessage}</p>
                        </div>
                    </div>
                ) : (
                    <div className="context">
                        <h1>Email Confirmed Successfully</h1>
                        <div className=" card col-xs-12 col-md-12 col-lg-4 col-sm-12 col-md-offset-4 sent-div">
                            <img
                                src="images/screens/email-confirmation.png"
                                alt=""
                            />
                            <p>
                                Congratulations <b>ielemson@gmail.com</b> has
                                been confirmed
                                <br /> you will be redirected in{" "}
                                <Counter val={20} />
                            </p>
                        </div>
                    </div>
                )}
                <div className="area">
                    <ul className="circles">
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
}
export default emailConfirmation;
