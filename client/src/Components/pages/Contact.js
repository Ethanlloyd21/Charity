import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Col } from 'react-bootstrap';
import { Tooltip } from 'antd';
import ScrollUpButton from "react-scroll-up-button";
import Icon from '../images/original_trans.png';
import Lloyd from '../images/lloyd2.png';
import Owen from '../images/Owen.png';
import Ben from '../images/Ben.png';
import Jared from '../images/jared.png'
import Ari from '../images/Ari.png';
import './style.css';




class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowMsg: false,
            isSending: false,
            show: false
        }
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }


    onSubmit = (values, { resetForm }) => {
        const { isShowMsg, isSending } = this.state;
        this.setState({
            isSending: true
        })
        axios.post(
            "https://formcarry.com/s/AcKwMfI0r0RW",
            values,
            { headers: { "Accept": "application/json" } }
        )
            .then((response) => {
                if (response.data.status === "success") {
                    this.setState({ isSending: false, isShowMsg: true })
                    resetForm();
                }
            })
            .catch((error) => {
                console.log(error);
            });


    }



    render() {

        const { isSending, isShowMsg } = this.state;



        return (

            <div className="contact_upper_div">
                <section className="content-section text-white text-center" id="services">
                    <div className="container">
                        <div className="content-section-heading">
                            <h3 className="text-dark mb-0">Get to know us..</h3>
                            <h1 className="mb-5" style={{ color: "white" }}>Creators and Co-Founders of DONATIONALLY</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <img src={Icon} alt="" style={{ width: "250px", height: "175px" }} id="contact_photo" ></img>
                                </span>

                            </div>
                            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <Tooltip title="view Lloyd's Portfolio">
                                        <a href="https://lloydmarcelino.com" target="blank_"> <img src={Lloyd} style={{ width: "150px", height: "150px" }} alt="Lloyd Marcelino" id="contact_photo"></img></a>
                                    </Tooltip>
                                </span>
                                <h4>
                                    <strong>Lloyd Marcelino</strong>
                                </h4>
                                <p className="text-faded mb-0" style={{ color: "white" }}>Software Developer/ Security Analyst</p>
                                <p className="text-faded mb-0" style={{ color: "white" }}>University of Washington</p>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <Tooltip title="view Owen's Portfolio">
                                        <a href="https://ohhhhhwhen.github.io/React-Portfolio" target="blank_"><img src={Owen} style={{ width: "150px", height: "150px" }} alt="Owen Chantala" id="contact_photo"></img></a>
                                    </Tooltip>
                                </span>
                                <h4>
                                    <strong>Owen Chantala</strong>
                                </h4>
                                <p className="text-faded mb-0" style={{ color: "white" }}>Software Developer</p>
                                <p className="text-faded mb-0" style={{ color: "white" }}>University of Washington</p>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <Tooltip title="view Ben's Portfolio">
                                        <a href="https://ben-react-portfolio-v2.herokuapp.com/" target="blank_"><img src={Ben} style={{ width: "150px", height: "150px" }} alt="Ben Olsen" id="contact_photo"></img></a>
                                    </Tooltip>
                                </span>
                                <h4>
                                    <strong>Ben Olson</strong>
                                </h4>
                                <p className="text-faded mb-0" style={{ color: "white" }}>Software Developer/ Foreign Language Instructor</p>
                                <p className="text-faded mb-0" style={{ color: "white" }}>University of Washington</p>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <Tooltip title="view Ari's Portfolio">
                                        <a href="http://serene-headland-14339.herokuapp.com/" target="blank_"><img src={Ari} style={{ width: "150px", height: "150px" }} alt="Ari Horowitz" id="contact_photo"></img></a>
                                    </Tooltip>
                                </span>
                                <h4>
                                    <strong>Ari Horowitz</strong>
                                </h4>
                                <p className="text-faded mb-0" style={{ color: "white" }}>Software Developer/ Data Analyst</p>
                                <p className="text-faded mb-0" style={{ color: "white" }}>University of Oregon</p>
                            </div>


                            <div className="col-lg-2 col-md-6">
                                <span className="service-icon rounded-circle mx-auto mb-3">
                                    <Tooltip title="view Jared's Portfolio">
                                        <a href="https://fast-reef-84155.herokuapp.com/" target="blank_"><img src={Jared} style={{ width: "150px", height: "150px" }} alt="Jared Kong" id="contact_photo"></img></a>
                                    </Tooltip>
                                </span>
                                <h4>
                                    <strong>Jared Kong</strong>
                                </h4>
                                <p className="text-faded mb-0" style={{ color: "white" }}>Software Developer</p>
                                <p className="text-faded mb-0" style={{ color: "white" }}>University of Washington</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="site-section" id="contact_form">
                    <div className="page_inner_div" >


                        <h1 className="site-heading" style={{ fontWeight: "900" }}> Do you have a question? </h1>
                        <h3 className="site-heading" style={{ fontWeight: "900" }}>Give us a review..</h3>
                        <h5>Send us a message!</h5>

                        <Formik
                            className="site-form"
                            initialValues={{
                                name: '',
                                email: '',
                                location: '',
                                subject: '',
                                message: ''
                            }}
                            validate={values => {
                                let errors = {};
                                if (!values.name) {
                                    errors.name = 'Name is required';
                                }
                                if (!values.subject) {
                                    errors.subject = 'Subject is required';
                                }
                                if (!values.email) {
                                    errors.email = 'Email is required';
                                }
                                if (!values.location) {
                                    errors.location = 'Location is required';
                                }
                                if (!values.message) {
                                    errors.message = 'Message is required';
                                }
                                return errors;
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string().required(),
                                email: Yup.string().email().required(),
                                location: Yup.string().required(),
                                subject: Yup.string().required(),
                                message: Yup.string().required()
                            })}
                            onSubmit={this.onSubmit}
                            render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
                                <Fragment>


                                    <Form className="site-form" onSubmit={handleSubmit}>
                                        {
                                            isShowMsg && <div class="alert alert-success">Thank you for sending us a message!</div>
                                        }
                                        <Form.Row>
                                            <Col>
                                                <Form.Group className="site-form__form-group">
                                                    <Form.Label htmlFor="input-name" className="site-form__label">Name:</Form.Label>
                                                    <Form.Control placeholder="name" type="text" name="name" onBlur={handleBlur} onChange={handleChange} className={`site-form__input ${errors.name && touched.name ? 'site-form__input-error' : ''}`} id="input-name" value={values.name} />
                                                    {
                                                        errors.name && touched.name &&
                                                        <div className="site-form__error"> {errors.name} </div>
                                                    }
                                                </Form.Group>

                                            </Col>
                                            <Col>
                                                <Form.Group className="site-form__form-group">
                                                    <Form.Label htmlFor="input-email" className="site-form__label">Email:</Form.Label>
                                                    <Form.Control type="email" placeholder="email" name="email" onChange={handleChange} className={`site-form__input ${errors.email && touched.email ? 'site-form__input-error' : ''}`} id="input-email" value={values.email} />
                                                    {
                                                        errors.email && touched.email &&
                                                        <div className="site-form__error"> {errors.email} </div>
                                                    }
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>

                                        <Form.Row>
                                            <Col>
                                                <Form.Group className="site-form__form-group">
                                                    <Form.Label htmlFor="input-name" className="site-form__label">Location:</Form.Label>
                                                    <Form.Control placeholder="location" type="text" name="location" onBlur={handleBlur} onChange={handleChange} className={`site-form__input ${errors.location && touched.location ? 'site-form__input-error' : ''}`} id="input-name" value={values.location} />
                                                    {
                                                        errors.location && touched.location &&
                                                        <div className="site-form__error"> {errors.location} </div>
                                                    }
                                                </Form.Group>

                                            </Col>
                                        </Form.Row>

                                        <Form.Row>
                                            <Col>
                                                <Form.Group className="site-form__form-group">
                                                    <Form.Label htmlFor="input-name" className="site-form__label">Subject:</Form.Label>
                                                    <Form.Control placeholder="subject" type="text" name="subject" onBlur={handleBlur} onChange={handleChange} className={`site-form__input ${errors.subject && touched.subject ? 'site-form__input-error' : ''}`} id="input-subject" value={values.subject} />
                                                    {
                                                        errors.subject && touched.subject &&
                                                        <div className="site-form__error"> {errors.subject} </div>
                                                    }
                                                </Form.Group>

                                            </Col>

                                        </Form.Row>


                                        <Form.Group className="site-form__form-group">
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows="8" name="message" placeholder="Enter your message" onChange={handleChange} className={`site-form__textarea ${errors.message && touched.message ? 'site-form__input-error' : ''}`} id="input-message" value={values.message} />
                                            {
                                                errors.message && touched.message &&
                                                <div className="site-form__error"> {errors.message} </div>
                                            }
                                        </Form.Group>


                                        <Button className="site-form__action btn btn-secondary btn-md btn-radius" type="submit" disabled={isSending}>
                                            {
                                                isSending ? <span className="loading-icon"> </span> : 'Submit'
                                            }
                                        </Button>


                                    </Form>

                                </Fragment>
                            )}
                        />
                    </div>
                </section>
                <ScrollUpButton />

            </div>

        )
    }

}

export default Contact;
