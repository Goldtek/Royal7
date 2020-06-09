import React, { Fragment } from 'react'
import {Link} from "react-router-dom"
const navBarComponent=()=> {
return (
//   <!-- Fixed navbar -->

<Fragment>
    <div className="example3">
  <nav className="navbar navbar-default navbar-size-large navbar-size-xlarge paper-shadow" data-z="0"
  data-animated role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar3">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link to="/"  className="navbar-brand" ><img src="images/logo-edcollab.png" alt="Royal7"/>
        </Link>
      </div>
      <div id="navbar3" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="active">< Link to="/">Home</Link></li>
          <li><Link to ="#">Solutions</Link></li>
          <li><Link to ="#">Resources</Link></li>
          <li className="dropdown">
            < Link to ="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Expertise <span className="caret"></span></Link>
            <ul className="dropdown-menu" role="menu">
              <li><Link to ="#">Action</Link></li>
              <li><Link to ="#">Another action</Link></li>
              <li><Link to ="#">Something else here</Link></li>
              
            </ul>
          </li>
          <li className="dropdown">
            < Link to ="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Pricing <span className="caret"></span></Link>
            <ul className="dropdown-menu" role="menu">
              <li>< Link to ="#">Action</Link></li>
              <li>< Link to ="#">Another action</Link></li>
              <li>< Link to ="#">Something else here</Link></li>
              
            </ul>
          </li>
          <li ><Link to="/create">Getting Started</Link></li>
        </ul>
      </div>
      {/* <!--/.nav-collapse --> */}
    </div>
    {/* <!--/.container-fluid --> */}
  </nav>
</div>


    <div class="row">
            <div id="homeSlider" class="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol class="carousel-indicators">
                    <li data-target="#homeSlider" data-slide-to="0" class="active"></li>
                    <li data-target="#homeSlider" data-slide-to="1"></li>
					<li data-target="#homeSlider" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="assets/img/slider/slide4.jpg" alt="slide1"/>
                        <div class="carousel-caption">
							<h4><i class="fa fa-star-o"></i>WE ARE BEST<i class="fa fa-star-o"></i></h4>
                            <h2>CHOOSE <span><i class="fa fa-trophy"></i>BEST</span> FOR YOUR CHILD</h2>
                            <p>We here at <strong>PATHSHALA</strong> provides best education <br /> to your little one</p>
                            <Link to="#"><i class="fa fa-paper-plane"></i>KNOW MORE</Link>
                        </div>
                    </div>

                    <div class="item">
                        <img src="assets/img/slider/slide5.jpg" alt="slide2"/>
                        <div class="carousel-caption">
							<h4><i class="fa fa-star-o"></i>WE ARE BEST<i class="fa fa-star-o"></i></h4>
                            <h2>LET YOUR CHILD <span><i class="fa fa-line-chart"></i>GROW</span></h2>
                            <p>We here at <strong>PATHSHALA</strong> provides best education <br /> to your little one</p>
                            <Link to="#"><i class="fa fa-paper-plane"></i>KNOW MORE</Link>
                        </div>
                    </div>
					<div class="item">
                        <img src="assets/img/slider/slide6.jpg" alt="slide2"/>
                        <div class="carousel-caption">
                            <h4><i class="fa fa-star-o"></i>WE ARE BEST<i class="fa fa-star-o"></i></h4>
                            <h2>GIVE <span><i class="fa fa-rocket"></i>BOOST</span> TO YOUR CHILD</h2>
							<p>We here at <strong>PATHSHALA</strong> provides best education <br /> to your little one</p>
                            <Link to="#"><i class="fa fa-paper-plane"></i>KNOW MORE</Link>
                        </div>
                    </div>
                </div>

                <Link class="left carousel-control" to="#homeSlider" role="button" data-slide="prev">
                    <span class="fa fa-arrow-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </Link>
                <Link class="right carousel-control" to="#homeSlider" role="button" data-slide="next">
                    <span class="fa fa-arrow-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </Link>
            </div>
        </div>
</Fragment>
)
}

export default navBarComponent