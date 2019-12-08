export default class GeoLocation {
  getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.onGetLocation(position, callback);
      });
    } else {
      this.onGetLocation("not supported");
    }
  }
  onGetLocation(position, callback) {
    callback(position);
  }
}

/*
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
*/
