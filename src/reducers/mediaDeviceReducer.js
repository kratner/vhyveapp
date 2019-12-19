import {
  GET_MEDIA_DEVICES_BEGIN,
  GET_MEDIA_DEVICES_SUCCESS,
  GET_MEDIA_DEVICES_FAILURE
} from "../actions/MediaDeviceActions";

const initialState = {
  devices: [],
  loading: false,
  hasDevices: false
};

export default function mediaDeviceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEDIA_DEVICES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        hasDevices: false
      };

    case GET_MEDIA_DEVICES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        devices: action.payload.devices,
        hasDevices: true
      };

    case GET_MEDIA_DEVICES_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        devices: action.payload.error,
        hasDevices: false
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
