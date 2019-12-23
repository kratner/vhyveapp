import MediaDevices from "../utils/MediaDevices";

export const GET_MEDIA_DEVICES_BEGIN = "GET_MEDIA_DEVICES_BEGIN";
export const GET_MEDIA_DEVICES_SUCCESS = "GET_MEDIA_DEVICES_SUCCESS";
export const GET_MEDIA_DEVICES_FAILURE = "GET_MEDIA_DEVICES_FAILURE";

export const getMediaDevicesBegin = () => ({
  type: GET_MEDIA_DEVICES_BEGIN
});

export const getMediaDevicesSuccess = devices => ({
  type: GET_MEDIA_DEVICES_SUCCESS,
  payload: { devices }
});

export const getMediaDevicesFailure = error => ({
  type: GET_MEDIA_DEVICES_FAILURE,
  payload: { error }
});

export const getMediaDevices = () => {
  const mediadevices = new MediaDevices();

  return dispatch => {
    dispatch(getMediaDevicesBegin());
    mediadevices.getDevices(devices => {
      dispatch(getMediaDevicesSuccess(devices));
      return devices;
    });
  };
};
