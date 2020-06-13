import React, { Component } from "react";
import Map from "./Map";
import ScrollUpButton from "react-scroll-up-button";
import TopChar from "../layout/TopChar";
import { Col, Row, Container } from "../layout/Grid";
import { Form, Navbar, Button, Nav, FormControl } from "react-bootstrap";
import { Pagination, Tooltip } from "antd";
import API from "../../utils/API";
import Results from "../layout/Results";
import ViewBtn from "../layout/ViewBtn";
import SaveBtn from "../layout/SaveBtn";
import "./style.css";
import "./Boxes.css";

class Search extends Component {
    state = {
        search: "",
        search2: "",
        results: [],
        loading: false,
        loading2: false,
        minValue: 0,
        maxValue: 10,

    };

    handleChange = value => {
        if (value <= 1) {
            this.setState({
                minValue: 0,
                maxValue: 10
            });
        } else {
            this.setState({
                minValue: this.state.maxValue,
                maxValue: value * 10
            });
        }
    };

    searchrapidapi = query => {
        let query1 = query.replace(" ", "+");
        console.log("1. " + query1);
        API.search(query1)

            .then(res => this.setState({ results: res.data, search: "" }))
            .catch(err => console.log(err));
    };

    handleCharitySearch = event => {
        event.preventDefault();
        this.searchrapidapi(this.state.search);
        this.fetchData2();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCharitySave = event => {
        console.log(event, this.state);
        API.saveCharity({
            name: event.charityName,
            description: event.tagLine,
            cause: event.cause.causeName,
            image: event.currentRating.ratingImage.large,
            link: event.websiteURL
        })
            .then(res => this.setState({ search: "" }))
            .catch(err => console.log(err));
    };

    searchrapidapi2 = query => {
        let query1 = query.replace(" ", "+");

        console.log("1. " + query1);
        API.searchName(query1)

            .then(res => this.setState({ results: res.data, search2: "" }))
            .catch(err => console.log(err));
    };

    handleCharitySearchByName = event => {
        event.preventDefault();
        this.searchrapidapi2(this.state.search2);
        this.fetchData();
    };

    handleInputChange2 = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCharitySave2 = event => {
        console.log(event, this.state);
        API.saveCharity({
            name: event.charityName,
            description: event.tagLine,
            cause: event.cause.causeName,
            image: event.currentRating.ratingImage.large,
            link: event.websiteURL
        })
            .then(res => this.setState({ search2: "" }))
            .catch(err => console.log(err));
    };

    fetchData = () => {
        this.setState({ loading: true });


        setTimeout(() => {
            this.setState({ loading: false });

        }, 3000);
    };

    fetchData2 = () => {
        this.setState({ loading2: true });


        setTimeout(() => {
            this.setState({ loading2: false });

        }, 3000);
    };

    render() {
        const { loading } = this.state;
        const { loading2 } = this.state;

        return (
            <div className="normal">
                <div className="page_inner_div">
                    <TopChar />
                    <Map />

                    <div style={{ paddingTop: "20px" }}>
                        <Navbar bg="info" expand="xl">
                            <Navbar.Brand href="" style={{ color: "white" }}>
                                Search by:
              </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" style={{ padding: "10px" }}>

                                    <Tooltip title="Results will only display rated charities">
                                        <FormControl
                                            id="search2"
                                            type="text"
                                            value={this.state.search2}
                                            onChange={this.handleInputChange2}
                                            name="search2"
                                            placeholder="charity name"
                                            className="mr-sm-2"
                                        />
                                    </Tooltip>
                                    <Button
                                        variant="secondary"

                                        onClick={this.handleCharitySearchByName}
                                        id="geoButton"
                                        disabled={loading}
                                    >
                                        {loading && <i className="fa fa-refresh fa-spin"></i>}
                                        {loading && <span>searching...</span>}
                                        {!loading && <span>Search</span>}
                                    </Button>
                                </Nav>
                                <Form inline>

                                    <Tooltip title="Results will only display rated charities">
                                        <FormControl
                                            id="search"
                                            type="text"
                                            value={this.state.search}
                                            onChange={this.handleInputChange}
                                            name="search"
                                            placeholder="category name"
                                            className="mr-sm-2"
                                        />
                                    </Tooltip>
                                    <Button
                                        variant="secondary"

                                        onClick={this.handleCharitySearch}
                                        id="geoButton"
                                        disabled={loading2}
                                    >
                                        {loading2 && <i className="fa fa-refresh fa-spin"></i>}
                                        {loading2 && <span>searching...</span>}
                                        {!loading2 && <span>Search</span>}
                                    </Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>

                    <Container fluid>
                        <Row>
                            <Col size="md-12">
                                <Results>
                                    <ul className="list-group">
                                        {this.state.results &&
                                            this.state.results.length > 0 &&
                                            this.state.results.slice(this.state.minValue, this.state.maxValue).map(result => (
                                                <li className="list-group-item" key={result.ein}>
                                                    <Row>
                                                        <Col size="md-2">
                                                            <b>Rating: </b>
                                                            <br />
                                                            {result.currentRating ? (
                                                                <img
                                                                    alt="rating stars"
                                                                    className="img-fluid"
                                                                    src={result.currentRating.ratingImage.large}
                                                                />
                                                            ) : (
                                                                    <p>No image</p>
                                                                )}
                                                            <br />
                                                        </Col>
                                                        <Col size="md-7" className="text-justify">
                                                            <b>{result.charityName}</b>
                                                            <br />
                                                            {result.cause && result.cause.causeName}
                                                            <br />
                                                            <i>"{result.tagLine}"</i>
                                                            <br />
                                                            {result.mailingAddress.streetAddress1 +
                                                                ", " +
                                                                result.mailingAddress.city +
                                                                " , " +
                                                                result.mailingAddress.stateOrProvince +
                                                                " " +
                                                                result.mailingAddress.postalCode}
                                                            <br />
                                                            <br />
                                                            <b>Mission: </b> {result.mission}
                                                            <br />
                                                            <br />
                                                            <b>EIN: </b> {result.ein}
                                                            <br />
                                                            <b>Subsection: </b>{" "}
                                                            {result.irsClassification.subsection}
                                                            <br />
                                                            <b>Status: </b>{" "}
                                                            {result.irsClassification.foundationStatus}
                                                            <br />
                                                            <b>Deductibility: </b>{" "}
                                                            {result.irsClassification.deductibility}
                                                            <br />
                                                            <b>Filling: </b>{" "}
                                                            {result.irsClassification.filingRequirement}
                                                            <br />
                                                            <b>Classification: </b>{" "}
                                                            {result.irsClassification.classification}
                                                            <br />
                                                        </Col>
                                                        <Col size="md-3">
                                                            <ViewBtn
                                                                style={{ margin: "20px" }}
                                                                onClick={() => window.open(result.websiteURL)}
                                                            />

                                                            <SaveBtn
                                                                style={{ margin: "20px", color: "white" }}
                                                                onClick={() => this.handleCharitySave(result)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <hr></hr>
                                                </li>
                                            ))}
                                    </ul>
                                    <Pagination
                                        defaultCurrent={1}
                                        defaultPageSize={10}
                                        total={100}
                                        responsive={true}
                                        onChange={this.handleChange}
                                    />
                                </Results>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ScrollUpButton />
            </div>
        );
    }
}

export default Search;