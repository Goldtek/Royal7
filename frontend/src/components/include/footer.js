import React from 'react';

export default function Footer(){
    return(
        <div>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <h4 className="text-headline text-light">Corporate</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">About the company</a></li>
                                <li><a href="#">Company offices</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h4 className="text-headline text-light">Explore</h4>
                            <ul className="list-unstyled">
                                <li><a href="">Courses</a></li>
                                <li><a href="">Tutors</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Become Tutor</a></li>
                                <li><a href="">Sign Up</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h4 className="text-headline text-light">Newsletter</h4>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter email here..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-grey-800" type="button">Subscribe</button>
                                    </span>
                                </div>
                            </div>
                            <br/>
                            <p>
                                <a href="#" className="btn btn-indigo-500 btn-circle"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="btn btn-pink-500 btn-circle"><i className="fa fa-dribbble"></i></a>
                                <a href="#" className="btn btn-blue-500 btn-circle"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="btn btn-danger btn-circle"><i className="fa fa-google-plus"></i></a>
                            </p>
                            <p className="text-subhead">
                                &copy; 2015 Learning App by mosaicpro.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <strong>Learning</strong> v1.0.0 &copy; Copyright 2015
            </footer>
        </div>
    )
}