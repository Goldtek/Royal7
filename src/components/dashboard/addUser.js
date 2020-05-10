import React, { Component } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';
import validate from '../../components/screens/validator/validatorCheck';
import classnames from 'classnames';
const api_url = process.env.REACT_APP_API_URL;

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state={
            firstname: "",
            lastname: "",
            roleld: "",
            schoolld: "",
            email: "",
            password: "",
            errors: "",
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    isValid(){
        const {errors, isValid } = validate.userAddVal(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    handleAddUser = event =>{
        event.preventDefault();
        if(this.isValid()){
            const { firstname, lastname, roleld, schoolld, email, password } = this.state;
            let userData ={
                firstname,
                lastname,
                roleld,
                schoolld,
                email,
                password
            }

            axios.post(`${api_url}/api/user/create`, userData)
            .then(res => {
                ToastsStore.success("You have successfully added user");
            })
            .catch( err =>{
                ToastsStore.error("Can't add user, try again!");
            });
        }
    }

    handleRole = event => {
        event.preventDefault();
        const { schoolld } = this.state;
        axios.get(`${api_url}/api/roles/view`, {schoolld})
        .then(response => {
            this.setState({roleld: response.roleld});
        })
        .catch(err => {
            ToastsStore.error("Error occured, trying to found role");
        });
    }

    render(){
        const { firstname, lastname, roleld, schoolld, email, password, errors } = this.state;
        return(
            <div>
                <section className="user-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header-marq-1">
                                    <h4>Welcome to add user dashboard</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="user_create">
                                    <h4><i className="fa fa-user"></i> Provide users information</h4>
                                    <form className="form-horizontal" onSubmit={this.handleAddUser}>
                                        <div className={classnames("form-group", {
                                        "has-error": errors.firstname,
                                        })}>
                                            <div className="form-control-material">
                                                <input 
                                                    type="text" 
                                                    className="form-control"  
                                                    placeholder="Firstname..."
                                                    name="firstname"
                                                    value={this.state.firstname}
                                                    onChange={this.handleChange}
                                                />
                                                {/*<label>Firstname</label>*/}
                                            </div> 
                                            {errors.firstname && (
                                                <span className="form-text">
                                                    {errors.firstname}
                                                </span>
                                            )}       
                                        </div>
                                        <div className={classnames("form-group", {
                                        "has-error": errors.lastname,
                                        })}>
                                            <div className="form-control-material">
                                                <input 
                                                    type="text" 
                                                    className="form-control"  
                                                    placeholder="Lastname"
                                                    name="lastname"
                                                    value={this.state.lastname}
                                                    onChange={this.handleChange}
                                                />
                                                {/*<label>Lastname</label>*/}
                                            </div>
                                            {errors.lastname && (
                                                <span className="form-text">
                                                    {errors.lastname}
                                                </span>
                                            )}
                                        </div>
                                        <div className={classnames("form-group", {
                                        "has-error": errors.roleld,
                                        })}>
                                            <div className="form-control-material">
                                                <input 
                                                    type="text" 
                                                    className="form-control"  
                                                    placeholder="Role ID"
                                                    name="roleld"
                                                    value={this.state.roleld}
                                                    onChange={this.handleChange}
                                                />
                                                {/*<label>Role ID</label>*/}
                                            </div>
                                            {errors.roleld && (
                                                <span className="form-text">
                                                    {errors.roleld}
                                                </span>
                                            )}
                                            <button 
                                                className="btn btn-default"
                                                id="btn-role"
                                                onClick={ this.handleRole}
                                            >Check role</button>
                                        </div>
                                        <div className={classnames("form-group", {
                                        "has-error": errors.schoolld,
                                        })}>
                                            <div className="form-control-material">
                                                <input 
                                                    type="text" 
                                                    className="form-control"  
                                                    placeholder="School ID"
                                                    name="schoolld"
                                                    value={this.state.schoolld}
                                                    onChange={this.handleChange}
                                                />
                                                {/*<label>School ID</label>*/}
                                            </div>
                                            {errors.schoolld && (
                                                <span className="form-text">
                                                    {errors.schoolld}
                                                </span>
                                            )}
                                        </div>
                                        <div className={classnames("form-group", {
                                        "has-error": errors.email,
                                        })}>
                                            <div className="form-control-material">
                                                <input 
                                                    type="text" 
                                                    className="form-control"  
                                                    placeholder="Email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                />
                                                {/*<label>Email</label>*/}
                                            </div>
                                            {errors.email && (
                                                <span className="form-text">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                        <div className={classnames("form-group", {
                                        "has-error": errors.password,
                                        })}>
                                            <div className="form-control-material">
                                                <input 
                                                    type="password" 
                                                    className="form-control"  
                                                    placeholder="Password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                />
                                                {/*<label>Password</label>*/}
                                            </div>
                                            {errors.password && (
                                                <span className="form-text">
                                                    {errors.password}
                                                </span>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <button 
                                                type="submit" 
                                                className="btn btn-default"
                                                id="btn-roleUser"
                                            >Create User</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img-section">
                                    <img src="images/addUser-img.jpeg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ToastsContainer
                    position={ToastsContainerPosition.BOTTOM_LEFT} 
                    store={ToastsStore} 
                    timer={8000} 
                    className="react-toast"
                />
            </div>
        );
    }
}

export default AddUser;