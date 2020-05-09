import React from 'react'

function content() {
    return (
        <div class="st-pusher" id="content">
                   
                    <div class="st-content">
                
                        <div class="st-content-inner padding-none">
                            <div class="container-fluid">
                                <div class="page-section">
                                    <h1 class="text-display-1">Dashboard</h1>
                                </div>
                                <div class="row" data-toggle="isotope">
                                    <div class="item col-xs-12 col-lg-6">
                                        <div class="panel panel-default paper-shadow" data-z="0.5">
                                            <div class="panel-heading">
                                                <div class="media v-middle">
                                                    <div class="media-body">
                                                        <h4 class="text-headline margin-none">Earnings</h4>
                                                        <p class="text-subhead text-light">This Month</p>
                                                    </div>
                                                    <div class="media-right">
                                                        <a class="btn btn-white btn-flat" href="app-instructor-earnings.html">Reports</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="panel-body">
                                                <div id="line-holder" data-toggle="flot-chart-earnings" class="flotchart-holder height-200"></div>
                                            </div>
                                            <hr/>
                                            <div class="panel-body">
                                                <div class="row text-center">
                                                    <div class="col-md-6">
                                                        <h4 class="margin-none">Gross Revenue</h4>
                                                        <p class="text-display-1 text-warning margin-none">102.4k</p>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h4 class="margin-none">Net Revenue</h4>
                                                        <p class="text-display-1 text-success margin-none">55k</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   </div>
                            </div>
                        </div>
                   
                    </div>
                 
                
                <footer class="footer">
                    <strong>Learning</strong> v1.0.0 &copy; Copyright 2015
                </footer>
                </div>
    )
}

export default content
