import React from "react";
import { shallow } from "enzyme";
import ControlDrawer from "../ControlDrawer";

describe("ControlDrawer", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ControlDrawer />);
    expect(wrapper).toMatchSnapshot();
  });
});
