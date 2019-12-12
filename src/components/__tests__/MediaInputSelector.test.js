import React from "react";
import { shallow } from "enzyme";
import MediaInputSelector from "../MediaInputSelector";

const audioInputDevices = [
  {
    deviceId: "default",
    kind: "audioinput",
    label: "Default - Internal Microphone (Built-in)",
    groupId: "0a683d153b8655aa5a09fc151c0f921c5a7050467a06ecd68f47d82746274b8f"
  },
  {
    deviceId:
      "e6b950fbc4fe58719ae20d9b18a0c3089b3895a0f3afca30c01b79e1ca295a44",
    kind: "audioinput",
    label: "Internal Microphone (Built-in)",
    groupId: "0a683d153b8655aa5a09fc151c0f921c5a7050467a06ecd68f47d82746274b8f"
  }
];

const audioOutputDevices = [
  {
    deviceId: "default",
    kind: "audiooutput",
    label: "Default - Internal Speakers (Built-in)",
    groupId: "0a683d153b8655aa5a09fc151c0f921c5a7050467a06ecd68f47d82746274b8f"
  },
  {
    deviceId:
      "ab7661d1168c9ae6e40d8df20dd26bf20ad4ca3f786a415943dcdf5b1d03b084",
    kind: "audiooutput",
    label: "Internal Speakers (Built-in)",
    groupId: "0a683d153b8655aa5a09fc151c0f921c5a7050467a06ecd68f47d82746274b8f"
  }
];
const videoDevices = [
  {
    deviceId:
      "ad73df458d8a30aed8c537eec886310f70deab646e4046d04f987960163ec3bc",
    kind: "videoinput",
    label: "FaceTime HD Camera (Built-in) (05ac:8510)",
    groupId: "28514e297a1ffe291d3174d4d226ea07a6ea13a35005ff0c8474712c00ff184f"
  }
];
describe("MediaInputSelector", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <MediaInputSelector
        audioInputDevices={audioInputDevices}
        audioOutputDevices={audioOutputDevices}
        videoDevices={videoDevices}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
