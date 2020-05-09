import React, { Fragment } from 'react'

const sidebar=()=> {
    return (
      <Fragment>
           <div class="sidebar left sidebar-size-3 sidebar-offset-0 sidebar-visible-desktop sidebar-visible-mobile sidebar-skin-dark" id="sidebar-menu" data-type="collapse">
            <div data-scrollable>
                <div class="sidebar-block">
                    <div class="profile">
                        <a href="#">
                            <img src="images/people/110/guy-6.jpg" alt="people" class="img-circle width-80" />
                        </a>
                        <h4 class="text-display-1 margin-none">Student Name</h4>
                    </div>
                </div>
                <ul class="sidebar-menu">
                    <li><a href="app-student-dashboard.html"><i class="fa fa-bar-chart-o"></i><span>Dashboard</span></a></li>
                    <li class="hasSubmenu">
                        <a href="#course-menu"><i class="fa fa-mortar-board"></i><span>Courses</span></a>
                        <ul id="course-menu">
                            <li><a href="app-directory-grid.html"><span>Courses Grid</span></a></li>
                            <li><a href="app-directory-list.html"><span>Courses List</span></a></li>
                            <li><a href="app-student-course.html"><span>Course Page</span></a></li>
                            <li><a href="app-student-courses.html"><span>My Courses</span></a></li>
                            <li><a href="app-take-course.html"><span>Take Course</span></a></li>
                            <li><a href="app-course-forums.html"><span>Course Forums</span></a></li>
                            <li><a href="app-course-forum-thread.html"><span>Course Forum Thread</span></a></li>
                            <li><a href="app-take-quiz.html"><span>Take Quiz</span></a></li>
                        </ul>
                    </li>
                    <li class="hasSubmenu active open">
                        <a href="#forum-menu"><i class="fa fa-file-text-o"></i><span>Forum</span></a>
                        <ul id="forum-menu" class="in">
                            <li><a href="app-forum.html"><span>Forum Home</span></a></li>
                            <li class="active"><a href="app-forum-category.html"><span>Forum Category</span></a></li>
                            <li><a href="app-forum-thread.html"><span>Forum Thread</span></a></li>
                        </ul>
                    </li>
                    <li class="hasSubmenu">
                        <a href="#account-menu"><i class="fa fa-user"></i><span>Account</span></a>
                        <ul id="account-menu">
                            <li><a href="app-student-profile.html"><span>Edit Profile</span></a></li>
                            <li><a href="app-student-billing.html"><span>Edit Billing</span></a></li>
                        </ul>
                    </li>
                    <li><a href="app-student-messages.html"><i class="fa fa-comments"></i><span>Messages</span></a></li>
                    <li><a href="login.html"><i class="fa fa-sign-out"></i><span>Logout</span></a></li>
                </ul>
            </div>
        </div>
      </Fragment>
    )
}

export default sidebar
