import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import { confirmMail_1 } from '../../../actions/mailAction';
import PropTypes from 'prop-types';

const api_url = process.env.REACT_APP_BASEURL;
class mailConfirmation extends Component{
    constructor(props){
        super(props);
        this.state = {
            name_1: "",
            name_2: "",
            name_3: "",
            name_4: "",
            name_5: "",
            name_6: "",
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

     confirmMail = data => {
        try{ 
        return axios.post(`${api_url}/api/admin/confirm`, {data});
        } catch (error) {
            console.log(`error confirming email ${error}`);
        }
    }

    sendConfirm = () =>{
        const { name_1, name_2, name_3, name_4, name_5, name_6} = this.state;
        const data = {
            name_1,
            name_2,
            name_3,
            name_4,
            name_5,
            name_6
        }
        this.props.confirmMail_1(data)
        .then(response => {
            console.log(response);
        })
        .catch(err =>{
            console.log("error occured while sending");
        })
    }

    render(){
        return(
            <div>
            
                <section className="confirm_main_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h4>Check your email!</h4>
                                    <p>
                                        We've send 6-digits confirmation code to 
                                       <span> splendidjohnpaul@gmail.com.</span> It will expire shortly, so enter it

                                    </p>
                                    <div className="fields">
                                        <input 
                                            type="text" 
                                            name="name_1" 
                                            value={this.state.name_1} 
                                            onChange={this.onChange} 
                                            className="txt_nme1"
                                        />
                                        <input 
                                            type="text" 
                                            name="name_2" 
                                            value={this.state.name_2} 
                                            onChange={this.onChange} 
                                            className="txt_nme2"
                                        />
                                        <input 
                                            type="text" 
                                            name="name_3" 
                                            value={this.state.name_3} 
                                            onChange={this.onChange} 
                                            className="txt_nme3"
                                        />
                                        <span>&ndash;</span>
                                        <input 
                                            type="text" 
                                            name="name_4" 
                                            value={this.state.name_4} 
                                            onChange={this.onChange} 
                                            className="txt_nme4"
                                        />
                                        <input 
                                            type="text" 
                                            name="name_5" 
                                            value={this.state.name_5} 
                                            onChange={this.onChange} 
                                            className="txt_nme5"
                                        />
                                        <input 
                                            type="text" 
                                            name="name_6" 
                                            value={this.state.name_6} 
                                            onChange={this.onChange} 
                                            className="txt_nme6"
                                            onBlur={this.sendConfirm}
                                        />
                                    </div>
                                    <p>
                                        Keeping this window open while checking for your code.
                                        Remember to try your spam folder!.
                                    </p>

                                    <img src="images/bottom_1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}


mailConfirmation.propTypes = {
    confirmMail_1: PropTypes.func.isRequired
}


export default mailConfirmation;