import React from "react";
import { shallow } from "enzyme";
import OLMapElement from "../OLMapElement";

describe("OLMapElement", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<OLMapElement />);
    expect(wrapper).toMatchSnapshot();
  });
});
