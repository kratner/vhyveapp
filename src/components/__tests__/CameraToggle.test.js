import React from "react";
import { shallow } from "enzyme";
import CameraToggle from "../CameraToggle";

describe("CameraToggle", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CameraToggle />);
    expect(wrapper).toMatchSnapshot();
  });
});
