import React from "react";
import { shallow } from "enzyme";
import ColorSwatches from "../ColorSwatches";

describe("ColorSwatches", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ColorSwatches />);
    expect(wrapper).toMatchSnapshot();
  });
});
