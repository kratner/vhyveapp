import React from "react";
import { shallow } from "enzyme";
import WebcamComponent from "../WebcamComponent";

describe("WebcamComponent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<WebcamComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
