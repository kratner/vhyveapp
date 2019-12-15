import React from "react";
import { shallow } from "enzyme";
import SpeakerToggle from "../SpeakerToggle";

describe("SpeakerToggle", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SpeakerToggle />);
    expect(wrapper).toMatchSnapshot();
  });
});
