import React from "react";
import { shallow } from "enzyme";
import VideoScreen from "../VideoScreen";

describe("VideoScreen", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<VideoScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
