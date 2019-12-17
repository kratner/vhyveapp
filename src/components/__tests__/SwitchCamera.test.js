import React from "react";
import { shallow } from "enzyme";
import SwitchCamera from "../SwitchCamera";

describe("SwitchCamera", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SwitchCamera />);
    expect(wrapper).toMatchSnapshot();
  });
});
