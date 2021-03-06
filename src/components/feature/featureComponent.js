import React, { Fragment } from "react";
// import Typing from "react-typing-animation";
import Videojs from "./video";
import { Link } from "react-router-dom";
// const videoJsOptions = {
//     autoplay: false,
//     playbackRates: [0.5, 1, 1.25, 1.5, 2],
//     width: 720,
//     height: 300,
//     controls: true,
//     sources: [
//         {
//             src: "//vjs.zencdn.net/v/oceans.mp4",
//             type: "video/mp4",
//         },
//     ],
// };
const FeatureComponent = () => {
    return (
        <Fragment>
            <div className="content-section-a">
                <div className="container">
                    <div className="row">
                        <div className="margintop"></div>
                        <div className="col-lg-5 col-sm-6 ">
                            {/* <hr className="section-heading-spacer"/> */}
                            <div className="clearfix"></div>
                            <h2 className="section-heading">
                                Death to the Stock Photo:
                                <br />
                                Special Thanks
                            </h2>
                            <p className="lead">
                                A special thanks to{" "}
                                <a
                                    target="_blank"
                                    href="http://join.deathtothestockphoto.com/"
                                >
                                    Death to the Stock Photo
                                </a>{" "}
                                for providing the photographs that you see in
                                this template. Visit their website to become a
                                member.
                            </p>
                        </div>

                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                            <img
                                className="img-responsive"
                                src="images/img-hero-remote.jpg"
                                alt=""
                            />
                        </div>

                        <div className="clearfix"></div>
                        <div className="margintop col-lg-12 col-sm-12"></div>
                        <div className="col-lg-10 col-sm-12 col-lg-offset-1">
                            {/* <hr className="section-heading-spacer"/> */}
                            <div className="clearfix"></div>
                            <h1 className="section-heading" align="center">
                                Break out of the inbox
                            </h1>
                            <p className="lead">
                                A special thanks to{" "}
                                <a
                                    target="_blank"
                                    href="http://join.deathtothestockphoto.com/"
                                >
                                    Death to the Stock Photo
                                </a>{" "}
                                for providing the photographs that you see in
                                this template. Visit their website to become a
                                member.
                            </p>
                            <section
                                className="vid"
                                style={{ border: "2px solid blue !important" }}
                            >
                                <Videojs />
                            </section>
                        </div>
                        <div className="clearfix"></div>

                        <div className="icon-card">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="box-part text-center">
                                <i class="fa fa-weixin fa-3x" aria-hidden="true"></i>

                                    <div className="title">
                                        <h4>Conversations, organized</h4>
                                    </div>

                                    <div className="text">
                                        <span>
                                        Instead of a single overstuffed inbox, conversations in 
                                        Slack happen in dedicated spaces called channels.
                                        </span>
                                    </div>

                                    <a href="#">Learn More</a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="box-part text-center">
                                <i class="fa fa-newspaper-o fa-3x" aria-hidden="true"></i>

                                    <div className="title">
                                        <h4> Get looped in, not out</h4>
                                    </div>

                                    <div className="text">
                                        <span>
                                       
                                     Slack makes it simple to follow 
                                     conversations or find important information 
                                     in an easily searchable archive.


                                        </span>
                                    </div>

                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="box-part text-center">
                                <i class="fa fa-bullseye fa-3x" aria-hidden="true"></i>

                                    <div className="title">
                                        <h4> Give focus a chance</h4>
                                    </div>

                                    <div className="text">
                                        <span>
                                       
                                Unlike email, Slack lets you 
                                choose which conversations are
                                most important — and which can wait.
                                        </span>
                                    </div>

                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="margintop col-lg-12 col-sm-12"></div>
                        <div className="col-lg-5 col-sm-6 mt-5">
                            {/* <hr className="section-heading-spacer"/> */}
                            <div className="clearfix"></div>
                            <img
                                className="img-responsive"
                                src="images/Where work happens - Slack_2.gif"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                            <h2 className="section-heading">
                                Death to the Stock Photo:
                                <br />
                                Special Thanks
                            </h2>
                            <p className="lead">
                                A special thanks to{" "}
                                <a
                                    target="_blank"
                                    href="http://join.deathtothestockphoto.com/"
                                >
                                    Death to the Stock Photo
                                </a>{" "}
                                for providing the photographs that you see in
                                this template. Visit their website to become a
                                member.
                            </p>
                        </div>

                        <section className="wrapper">
                            <div className="container-fostrap">
                                <div>
                                    <h1 className="heading">
                                        What’s new at Royal7
                                    </h1>
                                </div>
                                <div className="content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card">
                                                    <a
                                                        className="img-card"
                                                        href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                                                    >
                                                        <img
                                                            src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg"
                                                            alt="img-card"
                                                        />
                                                    </a>
                                                    <div className="card-content">
                                                        <h4 className="card-title">
                                                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                                                {" "}
                                                                Bootstrap 3
                                                                Carousel Out
                                                                Effect
                                                            </a>
                                                        </h4>
                                                        <p className="">
                                                            Tutorial to make a
                                                            carousel bootstrap
                                                            by adding more
                                                            wonderful fadein ...
                                                        </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a
                                                            href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                                                            className="btn btn-link btn-block"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card">
                                                    <a
                                                        className="img-card"
                                                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                                                    >
                                                        <img
                                                            src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg"
                                                            alt="img-card"
                                                        />
                                                    </a>
                                                    <div className="card-content">
                                                        <h4 className="card-title">
                                                            <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html">
                                                                {" "}
                                                                Material Design
                                                                Responsive Menu
                                                            </a>
                                                        </h4>
                                                        <p className="">
                                                            Material Design is a
                                                            visual programming
                                                            language made by
                                                            Google. Language
                                                            programming...
                                                        </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a
                                                            href="https://codepen.io/wisnust10/full/ZWERZK/"
                                                            className="btn btn-link btn-block"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4">
                                                <div className="card">
                                                    <a
                                                        className="img-card"
                                                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                                                    >
                                                        <img
                                                            src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg"
                                                            alt="img-card"
                                                        />
                                                    </a>
                                                    <div className="card-content">
                                                        <h4 className="card-title">
                                                            <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                                                                5 Button Hover
                                                                Animation
                                                                Effects
                                                            </a>
                                                        </h4>
                                                        <p className="">
                                                            tutorials button
                                                            hover animation,
                                                            although very much a
                                                            hover button is very
                                                            beauti...
                                                        </p>
                                                    </div>
                                                    <div className="card-read-more">
                                                        <a
                                                            href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                                                            className="btn btn-link btn-block"
                                                        >
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 t-dark-theme">
                    <div className="o-content-container">
                        <h3>Choose a better way to work</h3>
                        <div className="button-effect">
                            <Link
                                to="/"
                                className="btn btn-default btn-md effect effect-1"
                                title="learn more"
                            >
                                Try Royal7
                            </Link>
                            &nbsp;&nbsp;
                            <Link
                                to="/"
                                className="btn btn-default btn-md effect effect-1"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 clear-both"></div>
            </div>
            {/* <Typing>
<span>This span will get typed, then erased.</span>
<Typing.Backspace count={50} />
</Typing> */}
        </Fragment>
    );
};

export default FeatureComponent;
