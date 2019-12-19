import { combineReducers } from "redux";
import mediaDeviceReducer from "./mediaDeviceReducer";

const rootReducer = combineReducers({
  devices: mediaDeviceReducer
});

export default rootReducer;
