import React from 'react'

const navbar=()=> {
return (

//   <!-- Fixed navbar -->
<div className="navbar navbar-default navbar-fixed-top navbar-size-large navbar-size-xlarge paper-shadow" data-z="0"
data-animated role="navigation">
<div className="container">
<div className="navbar-header">
<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
<span className="sr-only">Toggle navigation</span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
<span className="icon-bar"></span>
</button>
        <div className="navbar-brand navbar-brand-logo">
          <a className="svg" href="index-2.html">

          </a>
        </div>
</div>
{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
<div className="collapse navbar-collapse" id="main-nav">
<ul className="nav navbar-nav navbar-nav-margin-left">
<li className="dropdown active">
<a href="#" className="dropdown-toggle" data-toggle="dropdown">Solutions <span className="caret"></span></a>
<ul className="dropdown-menu">
<li className="active"><a href="index-2.html">Home page</a></li>
<li><a href="pricing.html">Pricing</a></li>
<li><a href="tutors.html">Tutors</a></li>
<li><a href="survey.html">Survey</a></li>
</ul>
</li>

<li className="dropdown">
<a href="#" className="dropdown-toggle" data-toggle="dropdown">Pricing <span className="caret"></span></a>
<ul className="dropdown-menu">
<li><a href="website-student-dashboard.html">Dashboard</a></li>
<li><a href="website-student-courses.html">My Courses</a></li>
<li><a href="website-take-course.html">Take Course</a></li>
</ul>
</li>
<li className="dropdown">
<a href="#" className="dropdown-toggle" data-toggle="dropdown">Who We are <span className="caret"></span></a>
<ul className="dropdown-menu">
<li><a href="website-instructor-dashboard.html">Dashboard</a></li>
<li><a href="website-instructor-courses.html">My Courses</a></li>

</ul>
</li>
<li className="dropdown">
<a href="#" >Contact Us</a>

</li>
</ul>
<div className="navbar-right">
<ul className="nav navbar-nav navbar-nav-bordered navbar-nav-margin-right">
<a href="#" className="navbar-btn btn btn-primary btn-block">Launch App</a>
{/* <!-- // END user --> */}
</ul>
</div>
</div>
{/* <!-- /.navbar-collapse --> */}

</div>
</div>
)
}

export default navbar