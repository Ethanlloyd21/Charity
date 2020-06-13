import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { FacebookOutlined, MessageOutlined, LinkedinOutlined } from '@ant-design/icons';
import Icon from '../images/original_trans.png';
import '../pages/style.css';


class Footer extends Component {

    state = {
        open: false,
        width: window.innerWidth,
        modal20Visible: false,
        modal21Visible: false,
    };

    setModal20Visible(modal20Visible) {
        this.setState({ modal20Visible });
    };

    setModal21Visible(modal21Visible) {
        this.setState({ modal21Visible });
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {



        return (


            <section className="contact_lower_div">
                <div>
                    <Modal
                        title="COPYRIGHT NOTICE"
                        centered
                        visible={this.state.modal20Visible}
                        footer={null}
                        onOk={() => this.setModal20Visible(false)}
                        onCancel={() => this.setModal20Visible(false)}
                    >

                        <p id="responsive_h7">
                            All materials contained on this site http://www.donationally.com are protected by United States copyright law and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of Donationally.
                        </p>
                        <p id="responsive_h7">
                            Donationally® and the Donationally logo®,  are registered trademarks of Donationally, and may not be reproduced without prior written permission of Donationally.
                        </p>
                    </Modal>

                    <Modal
                        title="DISCLAIMER"
                        centered
                        visible={this.state.modal21Visible}
                        footer={null}
                        onOk={() => this.setModal21Visible(false)}
                        onCancel={() => this.setModal21Visible(false)}

                    >
                        <p style={{ fontSize: "10px" }}>WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE CONTENTS OF THE SERVICES, INCLUDING, WITHOUT LIMITATION, CONTENT (INCLUDING, WITHOUT LIMITATION, ANY REVIEWS, RATINGS, OR FINANCIAL DATA), OR USER CONTENT. WE SHALL NOT BE SUBJECT TO LIABILITY FOR ANY DELAYS OR INTERRUPTIONS OF THE SERVICES FROM WHATEVER CAUSE. YOU AGREE THAT YOU USE CONTENT, THE SERVICES, AND USER CONTENT AT YOUR OWN RISK.</p>

                        <p style={{ fontSize: "10px" }}>WE DO NOT WARRANT THAT THE SERVICES WILL OPERATE ERROR-FREE OR THAT THE SERVICES, ITS SERVERS, ITS CONTENT, OR USER CONTENT ARE FREE OF COMPUTER VIRUSES OR SIMILAR CONTAMINATION OR DESTRUCTIVE FEATURES. IF YOUR USE OF CONTENT, USER CONTENT, OR THE SERVICES RESULTS IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, WE SHALL NOT BE RESPONSIBLE FOR THOSE COSTS.</p>

                        <p style={{ fontSize: "10px" }}>THE CONTENT, THE USER CONTENT, AND THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE WARRANTY OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES' RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE.</p>

                        <p style={{ fontSize: "10px" }}>IN NO EVENT SHALL WE BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, INCIDENTAL AND CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION) RESULTING FROM THE USE, INABILITY TO USE, DISCLOSURE, DISPLAY, OR MAINTENANCE OF ANY CONTENT, USER CONTENT, OR THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME STATES DO NOT ALLOW EXCLUSION OF IMPLIED WARRANTIES OR LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH STATES, OUR LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.</p>

                        <p style={{ fontSize: "10px" }}>THE SERVICES MAY CONTAIN TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS OR OMISSIONS. WE ARE NOT RESPONSIBLE FOR ANY SUCH TYPOGRAPHICAL, TECHNICAL, OR OTHER ERRORS LISTED ON THE SERVICES. WE RESERVE THE RIGHT TO MAKE CHANGES, CORRECTIONS, AND/OR IMPROVEMENTS TO THE SERVICES AT ANY TIME WITHOUT NOTICE</p>
                    </Modal>
                </div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <img src={Icon} alt="" style={{ width: "90px", height: "65px" }} id="contact_photo" ></img>
                    <Navbar.Brand href="/" id="contact_photo">Donationally</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="https://www.linkedin.com/in/donationally/" target="blank_" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />LinkedIn</Nav.Link>
                            <Nav.Link href="https://www.facebook.com/Donationally-100748411673069" target="blank_" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />Facebook</Nav.Link>
                            <Nav.Link href="/contact" target="blank_" rel="noopener noreferrer"><MessageOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />Message Us!</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link>Seattle, WA. &copy; 2020 - </Nav.Link>

                            <Nav.Link href="/policy">PRIVACY POLICY</Nav.Link>
                            <Nav.Link onClick={() => this.setModal21Visible(true)}>
                                DISCLAIMER
                            </Nav.Link>
                            <Nav.Link onClick={() => this.setModal20Visible(true)}>COPYRIGHT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </section>



        );
    }
}

export default Footer;
