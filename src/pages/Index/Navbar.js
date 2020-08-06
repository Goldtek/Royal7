import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
const navBarComponent = () => {
    return (
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
                            <Link to="/" className="navbar-brand" ><img src={`${process.env.PUBLIC_URL}/static/images/logo-edcollab.png`} alt="edcollab" />
                            </Link>
                        </div>
                        <div id="navbar3" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active">< Link to="/">Home</Link></li>
                                <li><Link to="#">Solutions</Link></li>
                                <li><Link to="#">Resources</Link></li>
                                <li className="dropdown">
                                    < Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Expertise <span className="caret"></span></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><Link to="#">Action</Link></li>
                                        <li><Link to="#">Another action</Link></li>
                                        <li><Link to="#">Something else here</Link></li>

                                    </ul>
                                </li>
                                <li className="dropdown">
                                    < Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Pricing <span className="caret"></span></Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li>< Link to="#">Action</Link></li>
                                        <li>< Link to="#">Another action</Link></li>
                                        <li>< Link to="#">Something else here</Link></li>

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


        </Fragment>
    )
}

export default navBarComponent