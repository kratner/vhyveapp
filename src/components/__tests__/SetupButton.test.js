import React from "react";
import { shallow } from "enzyme";
import SetupButton from "../SetupButton";

describe("SetupButton", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SetupButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
