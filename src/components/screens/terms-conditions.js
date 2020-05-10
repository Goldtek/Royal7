import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../navbar/navbarComponent';
import TermsComponent from './include/termsComponent';
import OverviewComponent from './include/overviewComponent';
import PolicyComponent from './include/policyComponent';

class TermsConditions extends Component{
    constructor(props){
        super(props)
        this.state = {
            overviewIn: false,
            termsIn: false,
            policiesIn: false
        }
    }
    handlerOverview = () =>{
        this.setState({
            overviewIn: true,
            termsIn: false,
            policiesIn: false
        })
    }
    handlerTerms = () =>{
        this.setState({
            overviewIn: false,
            termsIn: true,
            policiesIn: false
        })
    }
    handlerPolic = () =>{
        this.setState({
            overviewIn: false,
            termsIn: false,
            policiesIn: true
        })
    }
    render(){
        const { overviewIn, termsIn, policiesIn } = this.state;
        return(
            <div>
                <HeaderComponent/>
                <section className="terms-section">
                    <div className="jumbotron">
                        <div className="top_1">
                            <h4>Customer Terms Service</h4>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="term-left_1">
                                    <ul class="sidebar-menu">
                                        <li class="side-header"><span>Get started</span></li>
                                        <li onClick={this.handlerOverview}><a><span>Overview</span></a></li>
                                        <li class="side-header"><span>Terms</span></li>
                                        <li onClick={this.handlerTerms}><a><span>User Terms of Servive</span></a></li>
                                        <li class="side-header"><span>Policies</span></li>
                                        <li onClick={this.handlerPolic}><a><span>Royal Privacy Policy</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                {overviewIn === false && 
                                    policiesIn === false && 
                                    termsIn === false && 
                                    <TermsComponent/>
                                }
                                {overviewIn !== false && <OverviewComponent/>}
                                {policiesIn !== false && <PolicyComponent/>}
                                {termsIn !== false && <TermsComponent/>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TermsConditions;
