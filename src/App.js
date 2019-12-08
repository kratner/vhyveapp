import React from "react";
import VHyveLogo from "./components/VHyveLogo";
import VideoScreen from "./components/VideoScreen";
import DeviceOrientationIcon from "./components/DeviceOrientationIcon";
// import OLMapElement from "./components/OLMapElement";
import "./styles/App.scss";
import OLMapElement from "./components/OLMapElement";
function App() {
  return (
    <div className="App">
      <VHyveLogo />
      <VideoScreen />
      <DeviceOrientationIcon />
      <OLMapElement />
    </div>
  );
}

export default App;
