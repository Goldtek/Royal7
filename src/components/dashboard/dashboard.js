import React, { Fragment } from 'react'

/*COMPONENT IMPORTS  STARTS HERE #######*/
// import HeaderComponent from "./header"
// import SidebarComponent from "./sidebar"
// import ContentComponent from "./content"
/*COMPONENT IMPORTS  STARTS HERE #######*/
function dashboard() {
    return (
<Fragment>

<div className="row dashboard-top-nav">
			<div className="col-sm-3 logo">
				<h5><i className="fa fa-book"></i>PATHSHALA</h5>
			</div>
			<div className="col-sm-4 top-search">
				<div className="search">
					<i className="fa fa-search"></i>
					<input type="text" placeholder="Search"/>
				</div>
			</div>
			<div className="col-sm-5 notification-area">
				<ul className="top-nav-list">
					<li className="notification dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-bell-o"></i>
							<span className="badge nav-badge">3</span>
						</a>
						<ul className="dropdown-menu notification-list">
							<li>							
								<div className="list-msg">
									<div className="col-xs-2 icon clear-padding">
										<i className="fa fa-trophy"></i>
									</div>
									<div className="col-sm-10 desc">
										<h5><a href="#">Upcoming Sports Meet</a></h5>
										<h6><i className="fa fa-clock-o"></i> 10 min ago</h6>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="list-msg">
									<div className="col-xs-2 icon clear-padding">
										<i className="fa fa-paint-brush"></i>
									</div>
									<div className="col-sm-10 desc">
										<h5><a href="#">Fine art workshop</a></h5>
										<h6><i className="fa fa-clock-o"></i> 1 hour ago</h6>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="list-msg">
									<div className="col-xs-2 icon clear-padding">
										<i className="fa fa-birthday-cake"></i>
									</div>
									<div className="col-sm-10 desc">
										<h5><a href="#">Annual fest</a></h5>
										<h6><i className="fa fa-clock-o"></i> 1 day ago</h6>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>							
								<div className="list-msg">
									<div className="col-xs-2 icon clear-padding">
										<i className="fa fa-trophy"></i>
									</div>
									<div className="col-sm-10 desc">
										<h5><a href="#">Upcoming Sports Meet</a></h5>
										<h6><i className="fa fa-clock-o"></i> 10 min ago</h6>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="all-notifications">
									<a href="#">VIEW ALL NOTIFICATIONS</a>
								</div>
							</li>
						</ul>
					</li>
					<li className="message dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-comment-o"></i>
							<span className="badge nav-badge">5</span>
						</a>
						<ul className="dropdown-menu notification-list">
							<li>
								<div className="list-msg">
									<div className="col-xs-2 image clear-padding">
										<img src="assets/img/parent/parent2.jpg" alt="user" />
									</div>
									<div className="col-sm-10 desc">
										<h5><a href="#">John Doe</a></h5>
										<p>Lorem Ipsum is simply dummy text.</p>
										<h6><i className="fa fa-clock-o"></i> 1 day ago</h6>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="list-msg">
									<div className="col-xs-2 image clear-padding">
										<img src="assets/img/parent/parent1.jpg" alt="user" />
									</div>
									<div className="col-sm-10 desc">
										<h5><a href="#">Lenore Doe</a></h5>
										<p>Lorem Ipsum is simply dummy text.</p>
										<h6><i className="fa fa-clock-o"></i> 1 day ago</h6>
									</div>
									<div className="clearfix"></div>
								</div>
							</li>
							<li>
								<div className="all-notifications">
									<a href="#">VIEW ALL MESSAGES</a>
								</div>
							</li>
						</ul>
					</li>
					<li className="user dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<span><img src="assets/img/parent/parent2.jpg" alt="user"/>JOHN DOE<span className="caret"></span></span>
						</a>
						<ul className="dropdown-menu notification-list">
							<li>
								<a href="#"><i className="fa fa-cogs"></i> SETTINGS</a>
							</li>
							<li>
								<a href="#"><i className="fa fa-users"></i> USER PROFILE</a>
							</li>
							<li>
								<a href="#"><i className="fa fa-key"></i> CHANGE PASSWORD</a>
							</li>
							<li>
								<a href="#"><i className="fa fa-cogs"></i> SETTINGS</a>
							</li>
							<li>
								<div className="all-notifications">
									<a href="#">LOGOUT</a>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
        	
		<div className="parent-wrapper" id="outer-wrapper">
			
			<div className="sidebar-nav-wrapper" id="sidebar-wrapper">
				<ul className="sidebar-nav">
					<li>
						<a href="admin-dashboard.html"><i className="fa fa-home menu-icon"></i> HOME</a>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-users menu-icon"></i> STUDENTS <span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>							
								<a href="admin-add-student.html"><i className="fa fa-caret-right"></i>ADD</a>
							</li>
							<li>
								<a href="admin-student-list.html"><i className="fa fa-caret-right"></i>ALL STUDENT  </a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-user-secret menu-icon"></i> TEACHERS <span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>							
								<a href="admin-add-teacher.html"><i className="fa fa-caret-right"></i>ADD</a>
							</li>
							<li>
								<a href="admin-teacher-list.html"><i className="fa fa-caret-right"></i>ALL TEACHER</a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</li>
					<li>
						<a href="message.html"><i className="fa fa-envelope menu-icon"></i> MY MESSAGES</a>
					</li>
					<li>
						<a href="admin-add-announcement.html"><i className="fa fa-bullhorn menu-icon"></i> ANNOUNCEMENTS</a>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-file-o menu-icon"></i> CLASSES <span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>							
								<a href="admin-add-class.html"><i className="fa fa-caret-right"></i>ADD CLASS</a>
							</li>
							<li>
								<a href="admin-add-section.html"><i className="fa fa-caret-right"></i>ADD SECTION</a>
							</li>
							<li>
								<a href="admin-add-class.html"><i className="fa fa-caret-right"></i>VIEW SECTIONS</a>
							</li>
							<li>
								<a href="admin-add-section.html"><i className="fa fa-caret-right"></i>VIEW CLASSES</a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-book menu-icon"></i> SUBJECTS <span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>							
								<a href="admin-add-subject.html"><i className="fa fa-caret-right"></i>ADD</a>
							</li>
							<li>
								<a href="admin-add-subject.html"><i className="fa fa-caret-right"></i>VIEW SUBJECTS</a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-calendar menu-icon"></i> TIMETABLE <span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>							
								<a href="admin-create-timetable.html"><i className="fa fa-caret-right"></i>CREATE</a>
							</li>
							<li>
								<a href="admin-class-timetable.html"><i className="fa fa-caret-right"></i>VIEW</a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-address-card menu-icon"></i> REPORTS <span className="caret"></span>
						</a>
						<ul className="dropdown-menu">
							<li>							
								<a href="teacher-attendence-report.html"><i className="fa fa-caret-right"></i>ATTENDENCE</a>
							</li>
							<li>
								<a href="teacher-marks-report.html"><i className="fa fa-caret-right"></i>MARKS</a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</li>
				</ul>
			</div>
			
	
			<div className="main-content" id="content-wrapper">
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
				<div className="menu-togggle-btn">
					<a href="#menu-toggle" id="menu-toggle"><i className="fa fa-bars"></i></a>
				</div>
				<div className="dash-footer col-lg-12">
					<p>Copyright Pathshala</p>
				</div>
			</div>
</div>
  
</Fragment>
    )
}

export default dashboard
