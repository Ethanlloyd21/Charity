import React from "react";
import "./hero.css";



function Hero() {


    return (



        <div className="hero_container">



            <header className="hero">
                <div className="hero__background">
                    <video
                        autoPlay
                        loop
                        muted
                    //poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg"
                    >
                        <source src={"https://donationally-video.s3.amazonaws.com/alternate_video2.mp4"} fluid="true" type="video/mp4"></source>
                    </video>
                </div>
                <section className="hero__content hero__content--centered">
                    <h1 className="hero__title"> </h1>
                    <div
                        id="container"
                        style={{
                            position: "relative",
                        }}
                    >
                        <div id="flip">
                            <div>
                                <div>Search For Charities</div>
                            </div>
                            <div>
                                <div>Donate To A Chosen Cause</div>
                            </div>
                            <div>
                                <div>Create Lasting Change</div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Hero;