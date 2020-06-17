import React, { Component } from "react";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";
//import { Card } from "material-ui";
//import CardBanner from "./CardBanner";

// Open Layers Imports
import ol from "openlayers";
import "ol/ol.css";
import GeoLocation from "../utils/GeoLocation";
import DeviceOrientation from "../utils/DeviceOrientation";
import { debounce } from "../utils/Debounce";
import styled from "styled-components";

const MapContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80vh;
  width: 80vw;
  border: 1px solid white;
  transform: translate(-50%, -50%);
`;

const MapCanvasContainer = styled.div`
  height: 100%;
  width: 100%;
`;

class OLMapElement extends Component {
  constructor(props) {
    super(props);

    this.map = {};
    this.geo = {};

    this.state = {
      GeoLocationOptions: {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      },
    };

    window.addEventListener("resize", debounce(this.renderMap, 100));
    navigator.geolocation.watchPosition(
      (position) => {
        this.handleGetLocation(position, this);
      },
      this.error,
      this.state.GeoLocationOptions
    );
    window.addEventListener(
      "deviceorientation",
      (event) => {
        this.handleOrientation(event, this);
      },
      true
    );
  }

  error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }
  handleGetLocation(position, thisRef) {
    thisRef.props.handleGetLocation(position);
  }
  handleOrientation(event, thisRef) {
    thisRef.props.handleOrientation(event);
  }
  renderMap() {
    document.getElementById("mapcanvas").innerHTML = "";
    this.map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      target: "mapcanvas",
      view: new ol.View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // this.map.updateSize();
    // this.map.render();
    // this.map.redraw();
  }

  componentDidMount() {
    this.geo = new GeoLocation();
    this.geo.getLocation(this.handleGetLocation, this);
    this.orientation = new DeviceOrientation();
    this.orientation.getOrientation(this.handleOrientation, this);
    /*
    setInterval(() => {
      this.geo.getLocation(this.handleGetLocation, this);
    }, this.props.locationRefreshRate);
    */
    this.renderMap();
    this.mapwindow = document.getElementById("mapwindow");
  }

  render() {
    //if(this.props.contentRender) {      // Conditional Rendering
    return (
      <MapContainer id="mapwindow" className="cardContainerFullScreen">
        <MapCanvasContainer
          id="mapcanvas"
          className="map"
          ref="olmap"
        ></MapCanvasContainer>
      </MapContainer>
    );
    //}else{return false}
  }
}

export default OLMapElement;

/*

mapwindow.propTypes = {
contentRender: PropTypes.bool
};

const mapStateToProps = (state) => {
return {
    contentRender: state.setWMSComponentStatus.setWMSComponentStatusState
}
}

export default connect(mapStateToProps)(mapwindow);

*/
