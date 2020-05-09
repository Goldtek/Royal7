import React from 'react'

function content() {
    return (


        
       
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 clear-padding-xs">
                <h5 className="page-title"><i className="fa fa-home"></i>HOME</h5>
                <div className="section-divider"></div>
                <div className="dashboard-stats">
                    <div className="col-sm-6 col-md-3">
                        <div className="stat-item">
                            <div className="stats">
                                <div className="col-xs-8 count">
                                    <h1>199</h1>
                                    <p>STUDENTS</p>
                                </div>
                                <div className="col-xs-4 icon">
                                    <i className="fa fa-users ex-icon"></i>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="status">
                                <p className="text-ex"><i className="fa fa-pencil-square-o"></i>10 Absent Today</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="stat-item">
                            <div className="stats">
                                <div className="col-xs-8 count">
                                    <h1>111</h1>
                                    <p>TEACHERS</p>
                                </div>
                                <div className="col-xs-4 icon">
                                    <i className="fa fa-user-secret danger-icon"></i>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="status">
                                <p className="text-danger"><i className="fa fa-exclamation-triangle"></i>5 On Leave Today</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="clearfix visible-sm"></div>
                    <div className="col-sm-6 col-md-3">
                        <div className="stat-item">
                            <div className="stats">
                                <div className="col-xs-8 count">
                                    <h1>900</h1>
                                    <p>EVENTS</p>
                                </div>
                                <div className="col-xs-4 icon">
                                    <i className="fa fa-flag look-icon"></i>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="status">
                                <p className="text-look"><i className="fa fa-clock-o"></i>1 Event tomorrow</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="stat-item">
                            <div className="stats">
                                <div className="col-xs-8 count">
                                    <h1>799</h1>
                                    <p>MESSAGES</p>
                                </div>
                                <div className="col-xs-4 icon">
                                    <i className="fa fa-envelope-o success-icon"></i>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="status">
                                <p className="text-success"><i className="fa fa-folder-open-o"></i>10 Unread messages</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 clear-padding-xs">
                <div className="col-sm-8">
                    <div>
                        <div className="my-msg dash-item">
                            <h6 className="item-title"><i className="fa fa-bar-chart"></i>STUDENT ATTENDENCE TREND</h6>
                            <div className="inner-item">
                                <div className="summary-chart">
                                    <canvas id="studentAttendenceLine" height="100px"></canvas>
                                    <div className="chart-legends">
                                        <span className="red">ABSENT</span>
                                        <span className="orange">ON LEAVE</span>
                                        <span className="green">PRESENT</span>
                                    </div>
                                    <div className="chart-title">
                                        <h6 className="bottom-title">STUDENT ATTENDENCE TREND</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <div className="my-msg dash-item">
                            <h6 className="item-title"><i className="fa fa-calendar"></i>TODAY'S TASK</h6>
                            <div className="inner-item">
                                <div className="timetable-item">
                                    <div className="col-xs-3 clear-padding">
                                        <p><span className="time">10 AM</span></p>
                                    </div>
                                    <div className="col-xs-9">
                                        <p className="title">Teacher Meeting</p>
                                        <p className="sent-by"><i className="fa fa-map-marker"></i> ROOM NO - 601</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="timetable-item">
                                    <div className="col-xs-3 clear-padding">
                                        <p><span className="time">11 AM</span></p>
                                    </div>
                                    <div className="col-xs-9">
                                        <p className="title">Campus Tour</p>
                                        <p className="sent-by"><i className="fa fa-map-marker"></i> CAMPUS</p>
                                        
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="timetable-item">
                                    <div className="col-xs-3 clear-padding">
                                        <p><span className="time">12 PM</span></p>
                                    </div>
                                    <div className="col-xs-9">
                                        <p className="title">Parent Meeting</p>
                                        <p className="sent-by"><i className="fa fa-map-marker"></i> ROOM NO - 601</p>
                                        
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="timetable-item">
                                    <div className="col-xs-3 clear-padding">
                                        <p><span className="time">01 PM</span></p>
                                    </div>
                                    <div className="col-xs-9">
                                        <p className="title">Guest Lecture</p>
                                        <p className="sent-by"><i className="fa fa-map-marker"></i> ROOM NO - 601</p>
                                        
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="timetable-item">
                                    <div className="col-xs-3 clear-padding">
                                        <p><span className="time">02 PM</span></p>
                                    </div>
                                    <div className="col-xs-9">
                                        <p className="title">Teacher Meeting</p>
                                        <p className="sent-by"><i className="fa fa-map-marker"></i> ROOM NO - 601</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 clear-padding-xs">
                <div className="col-sm-8">
                    <div>
                        <div className="my-msg dash-item">
                            <h6 className="item-title"><i className="fa fa-bar-chart"></i>TODAY'S STUDENT ATTENDENCE</h6>
                            <div className="inner-item">
                                <div className="summary-chart">
                                    <canvas id="studentAttendenceBar" height="100px"></canvas>
                                    <div className="chart-legends">
                                        <span className="red">ABSENT</span>
                                        <span className="orange">ON LEAVE</span>
                                        <span className="green">PRESENT</span>
                                    </div>
                                    <div className="chart-title">
                                        <h6 className="bottom-title">STUDENT ATTENDENCE BAR</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <div className="my-msg dash-item">
                            <h6 className="item-title"><i className="fa fa-pie-chart"></i>TEACHER ATTENDENCE</h6>
                            <div className="chart-item">
                                <canvas id="studentPie" style={{height:"250px"}}></canvas>
                                <div className="chart-legends">
                                    <span className="red">ABSENT</span>
                                    <span className="orange">PRESENT</span>
                                    <span className="green">LEAVE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 clear-padding-xs">
                <div className="col-md-12">
                    <div className="my-msg dash-item">
                        <h6 className="item-title"><i className="fa fa-bullhorn"></i>ANNOUNCEMENTS</h6>
                        <div className="inner-item dashboard-tabs">
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a  href="#1" data-toggle="tab"><i className="fa fa-graduation-cap"></i><span>ACADEMICS</span></a>
                                </li>
                                <li>								
                                    <a href="#2" data-toggle="tab"><i className="fa fa-users"></i><span>ADMISSIONS</span></a>
                                </li>
                                <li>								
                                    <a href="#3" data-toggle="tab"><i className="fa fa-trophy"></i><span>SPORTS</span></a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="1">
                                    <div className="announcement-item">
                                        <h5>Guest lecture on fine arts by Smith.<span className="new">New</span></h5>
                                        <h6><i className="fa fa-clock-o"></i>06-24-2017, 13:34</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="posted-by">
                                            <p>Thanks,</p>
                                            <h6>John Doe, Principal</h6>
                                        </div>
                                    </div>
                                    <div className="announcement-item">
                                        <h5>Guest lecture on fine arts by Smith</h5>
                                        <h6><i className="fa fa-clock-o"></i>06-24-2017, 13:34</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <div className="posted-by">
                                            <p>Thanks,</p>
                                            <h6>John Doe, Principal</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="2">
                                    <div className="announcement-item">
                                        <h5>2</h5>
                                    </div>
                                </div>
                                <div className="tab-pane" id="3">
                                    <div className="announcement-item">
                                        <h5>3</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    )
}

export default content
