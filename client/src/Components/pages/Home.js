import React, { useEffect } from "react";
import "../../index.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import './Boxes.css';
import { Button } from 'react-bootstrap';
import Boy from '../images/boy.png';
import Girl from '../images/girl.png';
import Kids2 from '../images/container.png';
import Community from '../images/community.png';
import { UserAddOutlined, DollarCircleOutlined, BarChartOutlined } from '@ant-design/icons';
import ScrollUpButton from "react-scroll-up-button";





const Home = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>

            <div className="normal" data-aos="fade-down" data-aos-delay="100" style={{ backgroundColor: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px" }}>
                <section className="page_intro_div">
                    <div className="page_inner_div aos-init aos-animate">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate">
                                <img src={Boy} alt="" fluid="true" style={{ border: "5px solid white", width: "55%", height: "auto" }} className="only" data-aos="zoom-in" data-aos-delay="100" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 orderlg-1 content aos-init aos-animate">
                                <h3 style={{ fontWeight: "900", color: "#263238", marginTop: "30px" }} id="responsive_h1" data-aos="zoom-in" data-aos-delay="100">Donationally</h3>
                                <h6 style={{ color: "#66615b" }} id="responsive_h7" data-aos="zoom-in" data-aos-delay="100">
                                    is a charity search navigator, helping users in multiple ways to stay informed about
                                    world events and opportunities to give back to those in need. Our mission is to create lasting change one donation at a time. We envision a world everyone has the
            opportunity to live a better life.</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div className="normal" data-aos="fade-up" style={{ backgroundColor: "#7A9E9F", paddingTop: "100px", paddingBottom: "100px" }}>

                <div className="page_intro_div">
                    <h3 style={{ fontWeight: "900", color: "white", marginTop: "30px", paddingBottom: "20px" }} id="responsive_h1">Our Core Values</h3>

                    <section id="core_table">
                        <div className="page_intro_div">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 mb-4" data-aos="fade-down" data-aos-delay="100">
                                    <div className="core-item">
                                        <img src={Girl} alt="" style={{ border: "5px solid white", width: "100%" }} />
                                    </div>
                                    <div className="core_caption">
                                        <h6 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700" }}>COMPASSION</h6>
                                        <p id="responsive_h7" style={{ color: "white" }}>We believe that all perons deserve to be treated with respect, compassion and dignity.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-12 mb-4" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="core-item">
                                        <img src={Kids2} alt="" style={{ border: "5px solid white", width: "100%" }} />
                                    </div>
                                    <div className="core_caption">
                                        <h6 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700" }}>INTEGRITY</h6>
                                        <p id="responsive_h7" style={{ color: "white" }}>We will ensure honesty and fairness in all our actions. We will always do the right thing.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-12 mb-4" data-aos="fade-left" data-aos-delay="100">
                                    <div className="core-item">
                                        <img src={Community} alt="" style={{ border: "5px solid white", width: "100%" }} />
                                    </div>
                                    <div className="core_caption">
                                        <h6 id="responsive_h7" style={{ fontStyle: "italic", color: "white", fontWeight: "700" }}>COMMUNITY</h6>
                                        <p id="responsive_h7" style={{ color: "white" }}>We are building a community and network to empower others and give back to those in need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
            <div className="normal" style={{ backgroundColor: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="page_intro_div">

                    <h1 id="responsive_h1" style={{ fontWeight: "900", color: "#66615b", marginTop: "30px" }} data-aos="left" data-aos-delay="100" >Join Us!</h1>
                    <p id="responsive_h7" style={{ color: "#66615b", padding: "10px 90px 30px 90px" }} data-aos="right" data-aos-delay="100">
                        Members of Donationally will receive numerous perks on their
                        philanthropist journey. Benefits include: information and updates on
                        "Favorite" charities, free service on personal or business website, and so much more.
                        Give back by making Donationally.com a mainstay in your giving
            mission.</p>
                    <div className="page_inner_div">
                        <div>
                            <Button href="/register" size="lg" variant="info">Sign-up</Button>
                        </div>
                        <div style={{ padding: "20px 0 0 0" }}>
                            <UserAddOutlined style={{ fontSize: '40px' }} className="contact_icon" />
                            <BarChartOutlined style={{ fontSize: '40px' }} className="contact_icon" />
                            <DollarCircleOutlined style={{ fontSize: '40px' }} className="contact_icon" />
                        </div>

                    </div>
                </div>
            </div>
            <ScrollUpButton />


        </div>

    );
}

export default Home;