import React, {Component} from 'react';
import HeaderComponent from '../navbar/navbarComponent';
import HomeComponent from './include/homeComponent';
import accountSettingsComponent from './include/accountSettingsComponent';
import { Link } from 'react-router-dom';
import AccountSettingsComponent from './include/accountSettingsComponent';

class AccountSettings extends Component{
    constructor(props){
        super(props)
        this.state={
            accountIn: false,
            homeIn: false
        }
    }
    handleAccount = () =>{
        this.setState({
            accountIn: true,
            homeIn: false
        })
    }

    handleHome = () =>{
        this.setState({
            accountIn: false,
            homeIn: true
        })
    }

    render(){
        const { accountIn, homeIn } =this.state;
        return( 
            <div>
                <HeaderComponent/>
                <section className="settings-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="set_1">
                                    <img src="images/place3.jpg"/>
                                    <p><span>SIGNED IN AS</span> <br/><span className="user_name">OKEKE EMMANUEL</span></p>
                                    <ul className=" sidebar-menu list_1">
                                        <li className="side-header">Account</li>
                                        <li onClick={this.handleHome}><a>Home</a></li>
                                        <li onClick={this.handleAccount}><a>Account & Profile</a></li>
                                    </ul>

                                    <ul className="list_2 sidebar-menu">
                                        <li className="side-header">Others</li>
                                        <li><a>Tour</a></li>
                                        <li><a>Download App</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-7">
                                {homeIn === false && 
                                    accountIn === false && 
                                    <HomeComponent/>
                                }
                                {homeIn !== false && <HomeComponent/>}
                                {accountIn !== false && <AccountSettingsComponent/>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AccountSettings;