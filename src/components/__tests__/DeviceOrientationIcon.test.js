import React from "react";
import { shallow } from "enzyme";
import DeviceOrientationIcon from "../DeviceOrientationIcon";

describe("DeviceOrientationIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DeviceOrientationIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
