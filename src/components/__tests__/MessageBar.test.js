import React from "react";
import { shallow } from "enzyme";
import MessageBar from "../MessageBar";

describe("MessageBar", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MessageBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
