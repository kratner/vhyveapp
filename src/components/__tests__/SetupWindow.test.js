import React from "react";
import { shallow } from "enzyme";
import SetupWindow from "../SetupWindow";

describe("SetupWindow", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SetupWindow />);
    expect(wrapper).toMatchSnapshot();
  });
});
