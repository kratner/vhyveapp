import React from "react";
import { shallow } from "enzyme";
import MediaInputSelector from "../MediaInputSelector";

describe("MediaInputSelector", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MediaInputSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
