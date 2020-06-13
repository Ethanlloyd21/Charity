import React, { Component } from "react";
import { Modal, Button, Divider } from 'antd';
import '../pages/style.css';
import Who from '../../Components/images/who.png'
import Unicef from '../../Components/images/unicef.png';
import Direct from '../../Components/images/direct.png';
import Red from '../../Components/images/red.png';
import Task from '../../Components/images/task.png';
import Doc from '../../Components/images/doc.png';



class TopChar extends Component {



    state = {
        modal1Visible: false,
        modal2Visible: false,
        modal3Visible: false,
        modal4Visible: false,
        modal5Visible: false,
        modal6Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    };

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    };

    setModal3Visible(modal3Visible) {
        this.setState({ modal3Visible });
    };

    setModal4Visible(modal4Visible) {
        this.setState({ modal4Visible });
    };

    setModal5Visible(modal5Visible) {
        this.setState({ modal5Visible });
    };

    setModal6Visible(modal6Visible) {
        this.setState({ modal6Visible });
    };


    render() {
        return (
            <div>
                <div>
                    <Modal
                        title="World Health Organization"
                        centered
                        visible={this.state.modal2Visible}
                        footer={null}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                    >

                        <p id="responsive_h7">The World Health Organization is a specialized agency of the United Nations responsible for international public health. The WHO Constitution, which establishes the agency's governing structure and principles, states its main objective as "the attainment by all peoples of the highest possible level of health</p>
                        <p id="responsive_h7">
                            <b>Headquarters:</b> Geneva, Swithzerland
                        </p>
                        <p id="responsive_h7">
                            <b>Founded:</b> April 7, 1948
                        </p>
                        <center><Button type="primary" href="https://www.who.int/donate" target="blank_" rel="noopener noreferrer">Donate</Button></center>

                    </Modal>

                    <Modal
                        title="American Red Cross"
                        centered
                        visible={this.state.modal1Visible}
                        footer={null}
                        onOk={() => this.setModal1Visible(false)}
                        onCancel={() => this.setModal1Visible(false)}
                    >

                        <p id="responsive_h7">The American Red Cross, also known as The American National Red Cross, is a humanitarian
                        organization that provides emergency assistance, disaster relief, and disaster preparedness education in the United States.</p>
                        <p id="responsive_h7">
                            <b>Headquarters:</b> Washington, D.C. United States of America
                        </p>
                        <p id="responsive_h7">
                            <b>Founded:</b> May 21, 1881
                        </p>
                        <center><Button type="primary" href="https://www.redcross.org/donate" target="blank_" rel="noopener noreferrer">Donate</Button></center>

                    </Modal>

                    <Modal
                        title="Direct Relief"
                        centered
                        visible={this.state.modal3Visible}
                        footer={null}
                        onOk={() => this.setModal3Visible(false)}
                        onCancel={() => this.setModal3Visible(false)}
                    >

                        <p id="responsive_h7">Direct Relief is a nonprofit, nonpartisan organization with a stated mission to “improve the health and lives of people affected by poverty or emergency situations by mobilizing and providing essential medical resources needed for their care".</p>
                        <p id="responsive_h7">
                            <b>Headquarters:</b> Santa Barbara, CA United States of America
                        </p>
                        <p id="responsive_h7">
                            <b>Founded:</b> August 23, 1948
                        </p>
                        <center><Button type="primary" href="https://www.directrelief.org/donate" target="blank_" rel="noopener noreferrer">Donate</Button></center>

                    </Modal>

                    <Modal
                        title="The Task Force for Global Health"
                        centered
                        visible={this.state.modal4Visible}
                        footer={null}
                        onOk={() => this.setModal4Visible(false)}
                        onCancel={() => this.setModal4Visible(false)}
                    >

                        <p id="responsive_h7">The Task Force for Global Health is an international, nonprofit organization that works to improve health of people most in need, primarily in developing countries.</p>
                        <p id="responsive_h7">
                            <b>Headquarters:</b> Atlanta, GA United States of America
                        </p>
                        <p id="responsive_h7">
                            <b>Founded:</b> 1984
                        </p>
                        <center><Button type="primary" href="https://taskforce.org/donate" target="blank_" rel="noopener noreferrer">Donate</Button></center>

                    </Modal>

                    <Modal
                        title="Unicef"
                        centered
                        visible={this.state.modal5Visible}
                        footer={null}
                        onOk={() => this.setModal5Visible(false)}
                        onCancel={() => this.setModal5Visible(false)}
                    >

                        <p id="responsive_h7">The United Nations Children's Fund is a United Nations agency responsible for providing humanitarian and developmental aid to children worldwide.</p>
                        <p id="responsive_h7">
                            <b>Headquarters:</b> New York, NY United States of America
                        </p>
                        <p id="responsive_h7">
                            <b>Founded:</b> December 11, 1946
                        </p>
                        <center><Button type="primary" href="https://www.unicefusa.org/?form=donate" target="blank_" rel="noopener noreferrer">Donate</Button></center>

                    </Modal>

                    <Modal
                        title="Doctors Without Borders"
                        centered
                        visible={this.state.modal6Visible}
                        footer={null}
                        onOk={() => this.setModal6Visible(false)}
                        onCancel={() => this.setModal6Visible(false)}
                    >

                        <p id="responsive_h7">Médecins Sans Frontières, sometimes rendered in English as Doctors Without Borders, is an international humanitarian medical non-governmental organisation of French origin best known for its projects in conflict zones and in countries affected by endemic diseases.</p>
                        <p id="responsive_h7">
                            <b>Headquarters:</b> Geneva, Swithzerland
                        </p>
                        <p id="responsive_h7">
                            <b>Founded:</b> December 22, 1971 Paris, France
                        </p>
                        <center><Button type="primary" href="https://www.doctorswithoutborders.org/donate" target="blank_" rel="noopener noreferrer">Donate</Button></center>

                    </Modal>


                </div>

                <div style={{ paddingTop: "0px", paddingBottom: "100px" }}>
                    <Divider><h3 style={{ fontWeight: "900", marginTop: "50px", paddingBottom: "20px" }} id="responsive_h1">Top National Charities</h3></Divider>
                    <div className="page_intro_div">


                        <section id="search_table">
                            <div className="page_intro_div">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-12 mb-4" id="grow" type="button" onClick={() => this.setModal5Visible(true)}>
                                        <div className="core-item">
                                            <img src={Unicef} className="box foo" alt="" fluid="true" style={{ width: "100%", height: "100%" }} />
                                        </div>
                                        <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                            <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}><b>UNICEF</b></h6>
                                            <br />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-12 mb-4" id="grow" type="button" onClick={() => this.setModal1Visible(true)}>
                                        <div className="core-item">
                                            <img src={Red} alt="" fluid="true" style={{ width: "100%", height: "100%" }} />
                                        </div>
                                        <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                            <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}><b>AMERICAN RED CROSS</b></h6>
                                            <br />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-12 mb-4" id="grow" type="button" onClick={() => this.setModal3Visible(true)}>
                                        <div className="core-item">
                                            <img src={Direct} alt="" fluid="true" style={{ height: "100%", width: "100%" }} />
                                        </div>
                                        <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                            <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>DIRECT RELIEF</h6>
                                            <br />

                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-4 col-sm-12 mb-4" id="grow" type="button" onClick={() => this.setModal4Visible(true)}>
                                        <div className="core-item">
                                            <img src={Task} alt="" fluid="true" style={{ width: "100%", height: "100%" }} type="button" onClick={() => this.setModal4Visible(true)} />
                                        </div>
                                        <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                            <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>THE TASK FORCE FOR GLOBAL HEALTH</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-12 mb-4" id="grow" type="button" onClick={() => this.setModal2Visible(true)}>
                                        <div className="core-item">
                                            <img src={Who} alt="" fluid="true" style={{ width: "100%", height: "100%" }} />
                                        </div>
                                        <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                            <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>WORLD HEATH ORGANIZATION</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-sm-12 mb-4" id="grow" type="button" onClick={() => this.setModal6Visible(true)}>
                                        <div className="core-item">
                                            <img src={Doc} alt="" fluid="true" style={{ height: "100%", width: "100%" }} />
                                        </div>
                                        <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                            <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>DOCTORS WITHOUT BORDERS</h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

        );
    }
}

export default TopChar;
