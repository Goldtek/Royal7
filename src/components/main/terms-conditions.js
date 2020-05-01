import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterComponent from "../footer/footer";
import HeaderComponent from "../header/navbar";

class TermsConditions extends Component{
    render(){
        return(
            <div>
                <HeaderComponent />
                <section className="terms-section">
                    <div className="container">
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </section>
                <FooterComponent />
            </div>
        );
    }
}

export default TermsConditions;
