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

const mediaDevices = (state = initialState, action) => {
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
      break;
    default:
      return state;
  }
};

export default mediaDevices;
