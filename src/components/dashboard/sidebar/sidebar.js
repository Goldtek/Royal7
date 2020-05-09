import React, { Fragment } from 'react'

const sidebar=()=> {
    return (
      <Fragment>
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
			
	
      </Fragment>
    )
}

export default sidebar
