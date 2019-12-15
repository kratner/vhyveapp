import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import VHyveLogo from "../components/VHyveLogo";
import VideoScreen from "../components/VideoScreen";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  return state;
};

const store = createStore(reducer);

const ProviderContainer = () => (
  <Provider store={store}>
    <VHyveLogo delay="2000" />
    <VideoScreen />
  </Provider>
);

export default ProviderContainer;
