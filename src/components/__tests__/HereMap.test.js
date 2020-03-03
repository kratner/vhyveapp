import React from "react";
import { shallow } from "enzyme";
import HereMap from "../HereMap";

describe("HereMap", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HereMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
