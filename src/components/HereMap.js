import React, { Component } from "react";
import HEREMap from "react-here-maps";

export default class HereMap extends Component {
  render() {
    // center the map somewhere in London
    const center = {
      lat: 51.5,
      lng: 0
    };

    return (
      <HEREMap
        appId="bweSoT2OurZXbfmVcoxI"
        appCode="4Ovjs7DFVy87DfBChkrZlWiJ6YnPpN5ViTj9oSpiLho"
        center={center}
        zoom={8}
      />
    );
  }
}
