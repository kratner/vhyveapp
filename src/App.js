import React from "react";
import VHyveLogo from "./components/VHyveLogo";
import VideoScreen from "./components/VideoScreen";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <VHyveLogo delay="2000" />
      <VideoScreen />
    </div>
  );
}

export default App;
