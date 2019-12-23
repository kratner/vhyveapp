import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/index";
import VHyveLogo from "../components/VHyveLogo";
import VideoScreen from "../components/VideoScreen";
import SetupWindow from "../components/SetupWindow";

const store = createStore(reducer, applyMiddleware(thunk));

const closeSetupWindow = () => {
  const setupwindow = document.getElementById("setupwindow");
  if (setupwindow.classList.contains("open")) {
    setupwindow.classList.remove("open");
  }
};

const ProviderContainer = () => (
  <Provider store={store}>
    <VHyveLogo delay="2000" />
    <VideoScreen />
    <SetupWindow id="setupwindow" onCloseSetupWindow={closeSetupWindow} />
  </Provider>
);

export default ProviderContainer;
