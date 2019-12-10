export default class DeviceOrientation {
  handleOrientation(event, callback, context) {
    callback(event, context);
  }
  getOrientation(callback, context) {
    if (window.DeviceOrientationAbsoluteEvent) {
      window.addEventListener("DeviceOrientationAbsoluteEvent", event => {
        this.handleOrientation(event, callback, context);
      });
    } else if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", event => {
        this.handleOrientation(event, callback, context);
      });
    } else {
      console.log("device orientation detection not supported");
    }
  }
  onGetOrientation(event, callback, context) {}
}
