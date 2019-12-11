import React, { Component } from "react";
import FocalPoint from "./FocalPoint";
//import WebCamComponent from "./WebCamComponent";
import VideoElement from "./VideoElement";
import ControlDrawer from "./ControlDrawer";
import styled from "styled-components";
import OLMapElement from "./OLMapElement";
import MessageBar from "./MessageBar";
import DrawCanvas from "./SketchCanvas";
import { FaCompass } from "react-icons/fa";

const DrawCanvasContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 8;
`;

const VideoScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://raw.githubusercontent.com/kratner/vhyveapp/master/public/20191117_163741.jpg);
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const FocalPointSVG = styled(FocalPoint)``;

const RotatingIconContainer = styled.div`
  z-index: 15;
  position: absolute;
  color: #fff;
  top: 1.5em;
  left: 50%;
  height: 1em;
  width: 1em;
  transition: 0.25s;
  transform: translateX(-50%);
  transform-origin: 50% 50%;
  @media only screen and (orientation: landscape) {
    top: 0.6em;
    right: 5em;
    left: auto;
  }
`;

const RotatingIcon = styled(FaCompass)`
  transform: translate(-0%, -0%);
  left: 50%;
  top: 50%;
`;

class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constraints: {
        audio: {
          deviceId: undefined
        },
        video: true
      },
      locationRefreshRate: 1000,
      audioInputDeviceId: "",
      audioOutputDeviceId: "",
      videoDeviceId: "",
      audioInputDevices: [],
      audioOutputDevices: [],
      videoDevices: [],
      active: true,
      front: true,
      hasDevices: false
    };
    this.handleCameraToggle = this.handleCameraToggle.bind(this);
    this.handleAudioInputItemSelect = this.handleAudioInputItemSelect.bind(
      this
    );
    this.handleVideoInputItemSelect = this.handleVideoInputItemSelect.bind(
      this
    );
    this.rotatingUserIcon = React.createRef();
    this.sketchCanvas = React.createRef();
  }
  gotDevices(thisRef, deviceInfos) {
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
    thisRef.setState({
      audioInputDevices: audioInputDevices,
      audioOutputDevices: audioOutputDevices,
      videoDevices: videoDevices,
      hasDevices: true /*,
      constraints: {
        audio: {
          deviceId: audioInputDevices[0].deviceId
            ? { exact: audioInputDevices[0].deviceId }
            : undefined
        },
        video: {
          deviceId: videoDevices[0].deviceId
            ? { exact: videoDevices[0].deviceId }
            : undefined
        }
      } */
    });
  }

  // Attach audio output device to video element using device/sink ID.
  attachSinkId(element, sinkId) {
    if (typeof element.sinkId !== "undefined") {
      element
        .setSinkId(sinkId)
        .then(() => {
          console.log(`Success, audio output device attached: ${sinkId}`);
        })
        .catch(error => {
          let errorMessage = error;
          if (error.name === "SecurityError") {
            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
          }
          console.error(errorMessage);
          // Jump back to first output device in the list as it's the default.
          // TODO:
          // SET MediaInputSelector audio output selection to default selection
          // audioOutputSelect.selectedIndex = 0;
        });
    } else {
      console.warn("Browser does not support output device selection.");
    }
  }
  changeAudioDestination() {
    const audioDestination = this.state.audioOutputDeviceId.value;
    this.attachSinkId(this.videoElement, audioDestination);
  }
  gotStream(thisRef, stream) {
    window.stream = stream; // make stream available to console
    this.videoElement.srcObject = stream;
    // Refresh button list in case labels have become available

    //alert("SrcObject:" + document.querySelector("video").srcObject.id);
  }
  handleError(error) {
    console.log(
      "navigator.MediaDevices.getUserMedia error: ",
      error.message,
      error.name
    );
  }
  handleCameraToggle() {
    this.videoElement = document.getElementById("videoelement");
    if (this.state.active) {
      if (window.stream) {
        window.stream.getTracks().forEach(track => {
          track.stop();
        });
      }
    } else {
      navigator.mediaDevices
        .getUserMedia(this.state.constraints)
        .then(stream => {
          this.gotStream(this, stream);
        });
      /*
      this.videoElement.onloadedmetadata = e => {
        e.currentTarget.play();
      };
      */
    }
    this.setState({
      active: !this.state.active
    });
  }
  handleAudioInputItemSelect(DeviceId) {
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    this.setState({
      audioInputDeviceId: DeviceId,
      constraints: {
        audio: {
          deviceId: DeviceId ? { exact: DeviceId } : undefined
        } /*,
        video: {
          deviceId: this.state.videoDeviceId
            ? { exact: this.state.videoDeviceId }
            : undefined
        }
        */
      }
    });
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }
  handleAudioOutputItemSelect(device) {
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    this.setState({
      audioOutputDeviceId: device.deviceId
    });
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }
  /**
   *
   * @param {*} device
   */
  handleVideoInputItemSelect(device) {
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
      this.videoElement.srcObject = null;
    }
    this.videoElement.onloadedmetadata = e => {
      e.currentTarget.play();
    };
    //const DeviceIDConstraint = DeviceId ? { exact: DeviceId } : undefined;
    // const DeviceIDConstraint = device.deviceId;
    const facingMode =
      device.label.search("front") === -1 &&
      !(
        device.label.search("front") === -1 &&
        device.label.search("back") === -1
      )
        ? "environment"
        : "user";
    const DeviceIDConstraint = { facingMode: facingMode };
    //const DeviceIDConstraint = { exact: facingMode };
    this.setState({
      active: true,
      videoDeviceId: device.deviceId,
      constraints: {
        audio: {
          deviceId: this.state.audioInputDeviceId
            ? this.state.audioInputDeviceId
            : undefined
        },
        video: DeviceIDConstraint
        //facingMode: DeviceIDConstraint
      }
    });
    /*
    alert(
      "DeviceID: " +
        device.deviceId +
        "\nLabel " +
        device.label +
        "\nFacing Mode: " +
        facingMode
    );
    */
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    /*
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
      */
  }
  handleMapButtonClick() {
    const mapwindow = document.getElementById("mapwindow");
    if (mapwindow.classList.contains("active")) {
      mapwindow.classList.remove("active");
    } else {
      mapwindow.classList.add("active");
    }
  }
  handleGetLocation(position, thisRef) {
    thisRef.showMessage(0, "Latitude: " + position.coords.latitude);
    thisRef.showMessage(1, " Longitude: " + position.coords.longitude);
  }
  handleOrientation(event, thisRef) {
    //event.alpha COMPASS
    //event.beta
    //event.gamma
    thisRef.showMessage(2, "Alpha: " + event.alpha);
    thisRef.showMessage(3, "Beta: " + event.beta);
    thisRef.showMessage(4, "Gamma: " + event.gamma);
    this.rotatingUserIcon.current.style.transform =
      "rotate(" + event.alpha + "deg)";
  }
  showMessage(i, message) {
    switch (i) {
      case -1:
        this.messageBarMessage1.innerHTML = "";
        this.messageBarMessage2.innerHTML = "";
        this.messageBarMessage3.innerHTML = "";
        break;
      case 0:
        this.messageBarMessage1.innerHTML = message;
        break;
      case 1:
        this.messageBarMessage2.innerHTML = message;
        break;
      case 2:
        this.messageBarMessage3.innerHTML = message;
        break;
      case 3:
        this.messageBarMessage4.innerHTML = message;
        break;
      case 4:
        this.messageBarMessage5.innerHTML = message;
        break;
      default:
    }
  }
  componentDidMount() {
    this.messageBarMessage1 = document.getElementById("message-m1");
    this.messageBarMessage2 = document.getElementById("message-m2");
    this.messageBarMessage3 = document.getElementById("message-m3");
    this.messageBarMessage4 = document.getElementById("message-m4");
    this.messageBarMessage5 = document.getElementById("message-m5");
    this.videoElement = document.getElementById("videoelement");
    this.videoElement.onloadedmetadata = e => {
      e.currentTarget.play();
    };
    this.rotatingIcon = document.getElementById("rotatingicon");
    navigator.mediaDevices.getUserMedia(this.state.constraints).then(stream => {
      this.gotStream(this, stream);
    });
    navigator.mediaDevices
      .enumerateDevices()
      .then(devices => {
        this.gotDevices(this, devices);
      })
      .catch(this.handleError);
  }

  render() {
    return (
      <React.Fragment>
        <VideoScreenContainer className="videoscreen">
          <VideoElement
            videoElementId={"videoelement"}
            audiosource={this.state.audioInputDeviceId}
            videosource={this.state.videoDeviceId}
          />
          <FocalPointSVG recording="true" />
        </VideoScreenContainer>
        <OLMapElement
          handleGetLocation={position => {
            this.handleGetLocation(position, this);
          }}
          handleOrientation={event => {
            this.handleOrientation(event, this);
          }}
          locationRefreshRate={this.state.locationRefreshRate}
        />
        <RotatingIconContainer
          id="rotatingusericon"
          ref={this.rotatingUserIcon}
        >
          <RotatingIcon id="rotatingicon" />
        </RotatingIconContainer>
        <DrawCanvasContainer id="sketchcanvas">
          <DrawCanvas
            style={{
              border: "1px solid black",
              cursor: "crosshair",
              width: "100vw",
              height: "100vh"
            }}
            width="100%"
            height="100%"
            swatchColors={["red", "green", "blue", "yellow"]}
          />
        </DrawCanvasContainer>
        <ControlDrawer
          cameraActive={this.state.active}
          handleCameraToggle={this.handleCameraToggle}
          handleAudioInputItemSelect={this.handleAudioInputItemSelect}
          handleVideoInputItemSelect={this.handleVideoInputItemSelect}
          audioInputDevices={this.state.audioInputDevices}
          audioOutputDevices={this.state.audioOutputDevices}
          videoDevices={this.state.videoDevices}
          hasDevices={this.state.hasDevices}
          handleMapButtonClick={this.handleMapButtonClick}
        />
        <MessageBar id="messagecontainer" />
      </React.Fragment>
    );
  }
}

export default VideoScreen;
