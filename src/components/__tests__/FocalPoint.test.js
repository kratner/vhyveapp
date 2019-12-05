import React from "react";
import { shallow } from "enzyme";
import FocalPoint from "../FocalPoint";

describe("FocalPoint", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<FocalPoint />);
    expect(wrapper).toMatchSnapshot();
  });
});
