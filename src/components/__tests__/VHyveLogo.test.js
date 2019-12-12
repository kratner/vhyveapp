import React from "react";
import { shallow } from "enzyme";
//import { mount } from "enzyme";
import VHyveLogo from "../VHyveLogo";

describe("VHyveLogo", () => {
  it("renders correctly", () => {
    /*
    const props = {
      "data-ctl": "bgvideoswitch",
      className: "ctl ctl__bgvideoswitch",
      title: "Switch Video Background"
    };
    */
    // const wrapper = shallow(<VHyveLogo {...props} />);
    const wrapper = shallow(<VHyveLogo delay="2000" />);
    expect(wrapper).toMatchSnapshot();
  });
});
