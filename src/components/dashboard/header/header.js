import React, { Fragment } from 'react'

function header() {
    return (
       <Fragment>
           <div className="row dashboard-top-nav">
			<div className="col-sm-3 logo">
				<h5><i class="fa fa-university" aria-hidden="true"></i>PATHSHALA</h5>
			</div>
			<div className="col-sm-4">
				<div>
					{/* <i className="fa fa-search"></i> */}
					{/* <input type="text" placeholder="Search"/> */}
				</div>
			</div>
			<div className="col-sm-5 notification-area stroke">
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




       </Fragment>
    )
}

export default header
