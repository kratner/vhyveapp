import React from "react";
import { shallow } from "enzyme";
import FullScreenToggle from "../FullScreenToggle";

describe("FullScreenToggle", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<FullScreenToggle />);
    expect(wrapper).toMatchSnapshot();
  });
});
