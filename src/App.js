import React from "react";
import VHyveLogo from "./components/VHyveLogo";
import VideoScreen from "./components/VideoScreen";
import DeviceOrientationIcon from "./components/DeviceOrientationIcon";
//import PaperContainer from "./components/PaperContainer";
// import OLMapElement from "./components/OLMapElement";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <VHyveLogo />
      <VideoScreen />
      <DeviceOrientationIcon />
    </div>
  );
}

export default App;
