export default class GeoLocation {
  getLocation(callback, context) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.onGetLocation(position, callback, context);
      });
    } else {
      this.onGetLocation("not supported");
    }
  }
  onGetLocation(position, callback, context) {
    callback(position, context);
  }
}

/*
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
*/
