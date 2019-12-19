export default class MediaDevices {
  getStream(callback, constraints) {
    if (navigator.mediaDevices !== undefined) {
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        this.gotStream(stream);
      });
    }
  }
  getDevices(callback) {
    if (navigator.mediaDevices !== undefined) {
      navigator.mediaDevices
        .enumerateDevices()
        .then(devices => {
          this.gotDevices(callback, devices);
        })
        .catch(this.handleError);
    }
  }
  handleError(error) {
    console.log(
      "navigator.MediaDevices.getUserMedia error: ",
      error.message,
      error.name
    );
  }
  gotStream(callback, stream) {
    callback(stream);
  }
  gotDevices(callback, deviceInfos) {
    const audioInputDevices = [];
    const audioOutputDevices = [];
    const videoDevices = [];
    for (let i = 0; i !== deviceInfos.length; ++i) {
      const deviceInfo = deviceInfos[i];
      switch (deviceInfo.kind) {
        case "audioinput":
          audioInputDevices.push(deviceInfo);
          break;
        case "videoinput":
          videoDevices.push(deviceInfo);
          break;
        case "audiooutput":
          audioOutputDevices.push(deviceInfo);
          break;
        default:
      }
    }
    callback({
      devices: {
        audioInputDevices: audioInputDevices,
        audioOutputDevices: audioOutputDevices,
        videoDevices: videoDevices
      },
      hasDevices: true,
      supportsFacingMode:
        deviceInfos.filter(element => {
          return element.kind === "videoinput";
        }).length > 1
    });
  }
}
