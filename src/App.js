import React from "react";
import VHyveLogo from "./components/VHyveLogo";
import VideoScreen from "./components/VideoScreen";
import UserIcon from "./components/UserIcon";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <VHyveLogo />
      <UserIcon />
      <VideoScreen />
    </div>
  );
}

export default App;
