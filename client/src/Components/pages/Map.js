import React, { Component } from 'react';
import { Form, Navbar, Button, Nav, FormControl } from 'react-bootstrap';
import { PushpinFilled } from '@ant-design/icons';
import { Divider, Tooltip } from 'antd';
import './Boxes.css';
import './style.css';


var map;
var input;
var searchBox;
var geoButton;
var infoWindow;
var marker;
var place;
var markers = [];

function callback(results, status) {

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            if (markers[i]) {
                markers[i].setMap(null);
            }
        }

        markers = [];


    }
    clearMarkers();
    clearResults();
    if (status == window.google.maps.places.PlacesServiceStatus.OK)
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i], i);
        }

    function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
            results.removeChild(results.childNodes[0]);
        }
    }

}
function createMarker(place, i) {
    markers[i] = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    window.google.maps.event.addListener(markers[i], 'click', function () {
        // console.log("this is place!" + JSON.stringify(place))
        infoWindow.setContent(place.name + "<br>" + place.formatted_address);
        infoWindow.open(map, this);
    });

    var results = document.getElementById('results');
    var tr = document.createElement('tr');
    var trTwo = document.createElement('tr');
    results.appendChild(tr);

    tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
    trTwo.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');

    tr.style.border = "1px solid black";

    var nameTd = document.createElement('td');
    var addressTd = document.createElement('addressTd');

    var name = document.createTextNode(place.name);
    var addressTable = document.createTextNode(place.formatted_address);
    nameTd.appendChild(name);
    addressTd.appendChild(addressTable);

    tr.appendChild(nameTd);
    tr.appendChild(addressTd);

    tr.onclick = function () {
        window.google.maps.event.trigger(markers[i], 'click');

    };
}
function getCharitiesSearch() {
    var geocoder = new window.google.maps.Geocoder();
    var address = input.value
    geocoder.geocode({ 'address': address }, function (results, status) {
        var pos = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
        };
        var request = {
            location: pos,
            radius: 8047,
            query: "Charity",
        };
        var service = new window.google.maps.places.PlacesService(map);
        service.textSearch(request, callback);


    })
};



class Maps extends Component {
    constructor() {
        super();
        this.getCharitiesGeolocation = this.getCharitiesGeolocation.bind(this)
        this.geoClicker = this.geoClicker.bind(this)
    }
    createScript = () => {
        var scripter = document.createElement('script');
        scripter.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBX03GhMwKbff_jiNlFovzpYPB5L6LssMo&libraries=places&callback=initMap`;
        scripter.async = true;
        scripter.defer = true;
        document.body.appendChild(scripter)
    }
    componentDidMount() {
        this.createScript();
        window.initMap = this.initMap
    }
    getCharitiesGeolocation() {
        var service = new window.google.maps.places.PlacesService(map);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var request = {
                        location: pos,
                        radius: 8047,
                        query: "Charity",
                    };
                    infoWindow.open(map);
                    map.setCenter(pos);
                    map.panTo(pos);
                    map.setZoom(10);
                    // Charity search
                    service.textSearch(request, callback);
                },
                function () {
                    // handleLocationError(true, infoWindow, map.getCenter());
                }
            )
        } else {
            // Browser doesn't support Geolocation
            // handleLocationError(false, infoWindow, map.getCenter());
        };
        //   // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
    };
    geoClicker() {

        this.getCharitiesGeolocation()
    }
    initMap() {
        geoButton = document.getElementById("geoButton");
        infoWindow = new window.google.maps.InfoWindow();
        map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 37.1, lng: -95.7 },
            zoom: 3,
            streetViewControl: false,
            mapTypeControl: false,
        });
        input = document.getElementById('search');
        searchBox = new window.google.maps.places.SearchBox(input);
        // map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(input);
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
        searchBox.addListener('places_changed', function () {
            var bounds = new window.google.maps.LatLngBounds();
            var places = searchBox.getPlaces();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
            getCharitiesSearch();
        });
    };






    render() {





        return (
            <div>
                <Divider><h3 style={{ fontWeight: "900", marginTop: "30px", paddingBottom: "20px" }} id="responsive_h1">Search for Charities</h3></Divider>

                <div>
                    <Navbar bg="info" expand="lg">
                        <Navbar.Brand href="" style={{ color: "white" }}>Map Search:</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" style={{ padding: "10px" }}>

                                <Nav.Link href="" id="map_nav_font" style={{ color: "white" }}>Location: </Nav.Link>
                                <Tooltip title="Results might not be accurate. Please review our DISCLAIMER">
                                    <span><FormControl id="search" type="text" placeholder="location" className="mr-sm-2" /></span>
                                </Tooltip>

                            </Nav>
                            <Form inline>
                                <Button variant="light" onClick={this.geoClicker} id="geoButton"><PushpinFilled />Geolocation</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div ref={this.googleMap} id="map"></div>
                <div>
                    <div className="mapList" id="listing" >
                        <table id="resultsTable" style={{ marginRight: "auto", marginLeft: "auto", marginTop: "20px" }}>
                            <tbody id="results"></tbody>
                        </table>


                    </div>
                </div>


            </div>
        )
    };
}
export default Maps;
