import React from "react";
//import { shallow } from "enzyme";
import { mount } from "enzyme";
import VideoScreen from "../VideoScreen";

describe("VideoScreen", () => {
  it("renders correctly", () => {
    const wrapper = mount(<VideoScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
