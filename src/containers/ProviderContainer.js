import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import rootReducer from "../reducers/rootReducer";
//import MediaDevices from "../utils/MediaDevices";
import VHyveLogo from "../components/VHyveLogo";
import VideoScreen from "../components/VideoScreen";
import SetupWindow from "../components/SetupWindow";
import {
  GET_MEDIA_DEVICES_BEGIN,
  GET_MEDIA_DEVICES_SUCCESS,
  GET_MEDIA_DEVICES_FAILURE
} from "../actions/MediaDeviceActions";

const initialState = {
  loading: false,
  devices: {
    audioInputDevices: [],
    audioOutputDevices: [],
    videoDevices: [],
    hasDevices: false
  }
};

const reducer = (state = initialState, action) => {
  //console.log("reducer", state, action);
  switch (action.type) {
    case GET_MEDIA_DEVICES_BEGIN:
      return {
        ...state,
        loading: true
      };
    case GET_MEDIA_DEVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        devices: action.payload.devices
      };
    case GET_MEDIA_DEVICES_FAILURE:
      debugger;
      break;
    default:
      return state;
  }
};

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
    <SetupWindow
      id="setupwindow"
      //hasDevices={reducer.hasDevices}
      onCloseSetupWindow={closeSetupWindow}
    />
  </Provider>
);

export default ProviderContainer;
