import React, { Fragment } from "react";
import Typing from 'react-typing-animation';
import Videojs from "./video"

const videoJsOptions = {
autoplay: false,
playbackRates: [0.5, 1, 1.25, 1.5, 2],
width: 720,
height: 300,
controls: true,
sources: [
{
src: '//vjs.zencdn.net/v/oceans.mp4',
type: 'video/mp4',
},
],
};
const FeatureComponent = () => {
return (
<Fragment>
<div className="content-section-a">
<div className="container-fluid">
<div className="row">
<div className="col-lg-5 col-sm-6">
<hr className="section-heading-spacer"/>
<div className="clearfix"></div>
<h2 className="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
<p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
</div>
<div className="col-lg-5 col-lg-offset-2 col-sm-6">
<img className="img-responsive" src="images/img-hero-remote.jpg" alt=""/>
</div>
<div className="col-lg-8 col-sm-6 col-lg-offset-2">
{/* <hr className="section-heading-spacer"/> */}
<div className="clearfix"></div>
<h1 className="section-heading" align="center">Break out of the inbox</h1>
<p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
<Videojs/>
</div>

<br/>

<div className="col-lg-4 col-sm-4">
<div className="clearfix"></div>
<h2 className="section-heading"> <i className="fa fa-flag"></i><br/>Special Thanks</h2>
<p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
</div>
<div className="col-lg-4 col-sm-4">
<div className="clearfix"></div>
<h2 className="section-heading"> <i className="fa fa-flag"></i><br/>Special Thanks</h2>
<p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
</div>
<div className="col-lg-4 col-sm-4">
<div className="clearfix"></div>
<h2 className="section-heading"> <i className="fa fa-flag"></i><br/>Special Thanks</h2>
<p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<div className="row">
<div className="col-lg-5 col-sm-6 mt-5" >
{/* <hr className="section-heading-spacer"/> */}
<div className="clearfix"></div>
<h2 className="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
<p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
</div>
<div className="col-lg-5 col-lg-offset-2 col-sm-6">
<img className="img-responsive" src="images/img-hero-remote.jpg" alt=""/>
</div>
</div>
</div>

</div>
</div>
{/* <Typing>
<span>This span will get typed, then erased.</span>
<Typing.Backspace count={50} />
</Typing> */}

</Fragment>
);
};

export default FeatureComponent;
