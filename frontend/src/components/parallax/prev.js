import React from 'react'
 const ParallaxComponent=()=> {
    return (
        <div className="parallax cover overlay cover-image-full home">
        <img className="parallax-layer" src="images/photodune-4161018-group-of-students-m.jpg" alt="Learning Cover" />
        <div className="parallax-layer overlay overlay-full overlay-bg-white bg-transparent" data-speed="8" data-opacity="true">
          <div className="v-center">
            <div className="page-section overlay-bg-white-strong relative paper-shadow" data-z="1">
              <h1 className="text-display-2 margin-v-0-15 display-inline-block">Courses for Web &amp; Mobile</h1>
              <p className="text-subhead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur
                consequatur distinctio earum ipsam.</p>
              <a className="btn btn-green-500 btn-lg paper-shadow" data-hover-z="2" data-animated data-toggle="modal"
                href="#modal-overlay-signup">Sign Up - Only &dollar;19.00/mo</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ParallaxComponent;

