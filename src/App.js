import React from "react";
import VHyveLogo from "./components/VHyveLogo";
import VideoScreen from "./components/VideoScreen";
//import DeviceOrientationIcon from "./components/DeviceOrientationIcon";
//import PaperContainer from "./components/PaperContainer";
// import OLMapElement from "./components/OLMapElement";
import "./styles/App.scss";
import FullScreenToggle from "./components/FullScreenToggle";
function App() {
  return (
    <div className="App">
      <VHyveLogo delay="2000" />
      <VideoScreen />
      {/*<DeviceOrientationIcon />*/}
      <FullScreenToggle id="fullscreentoggle" />
    </div>
  );
}

export default App;
