import React, { Fragment } from 'react'

const footer=()=> {
    return (
        <Fragment>
             <div className="menu-togggle-btn">
					<a href="#menu-toggle" id="menu-toggle"><i className="fa fa-bars"></i></a>
				</div>
				<div className="dash-footer col-lg-12">
					<p>Copyright Edcollab</p>
				</div>
        </Fragment>
    )
}

export default footer
