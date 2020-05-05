import React, {Component} from 'react';

class TermsConditions extends Component{
    render(){
        return(
            <div>
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
                                    <h5><a href="/create">Get started</a></h5>
                                    <ul>
                                        <li><a href="/">Back</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">User Terms of Servive</a></li>
                                        <li><a href="#">Customer-Specific Supply</a></li>
                                        <li><a href="#">Api Terms of Service</a></li>
                                        <li><a href="#">Service Level Agreement</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="term-right_2">
                                    <h5>Effective: 31th, May 2020</h5>
                                    <p>Praesent et neque bibendum, dignissim augue molestie, porttitor nisl. 
                                        In in aliquam ipsum. Pellentesque imperdiet, nunc eu scelerisque bibendum, 
                                        nunc ante scelerisque tellus, ac scelerisque dolor metus eu nisi.</p>
                                    <h4>First Things First</h4>
                                    <p>These "Customers Terms" form a Part of a Binding "Cntract". 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Praesent et neque bibendum, dignissim augue molestie, porttitor nisl. 
                                        In in aliquam ipsum. Pellentesque imperdiet, nunc eu scelerisque bibendum, 
                                        nunc ante scelerisque tellus, ac scelerisque dolor metus eu nisi. 
                                        Pellentesque faucibus feugiat maximus. Integer imperdiet dolor id
                                        viverra semper. Nunc in tortor tortor. Aenean facilisis feugiat ultricies. 
                                        Nulla feugiat nisi id lorem imperdiet luctus. Donec tristique magna eu 
                                        sodales gravida.</p>
                                    <p>Aenean ut tellus sed sem ultrices malesuada. Praesent et sollicitudin tortor. 
                                       Donec tempus quam in erat rhoncus fringilla. Pellentesque tempor nisi vitae 
                                       ex eleifend, nec suscipit libero tempor. Morbi luctus ullamcorper venenatis. 
                                       Maecenas eu tortor condimentum, vehicula mi iaculis, tempus augue. 
                                       Maecenas a erat tellus. Nullam aliquam turpis sit amet massa pulvinar, 
                                       quis tristique neque interdum. Nulla facilisi.</p>
                                    <p>Your Agreement On Behalf of "Customer"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TermsConditions;
