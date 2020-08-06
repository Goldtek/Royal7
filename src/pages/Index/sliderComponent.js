import React from 'react'
const SliderComponent = () => {
    return (

        <div className="container-fluid main">
            <header className="header-video">
                <div className="overlay"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                </video>
                <div className="container">
                    <div className="center-me">
                        <div className=" text-white">
                            <h1 className="display-3 text_1">


                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quos.

        </h1>
                            <p className="lead mb-0 text_2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quos.

        </p>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default SliderComponent;